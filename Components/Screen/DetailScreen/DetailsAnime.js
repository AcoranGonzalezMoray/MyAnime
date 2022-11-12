import * as React from 'react';
import { useState, useEffect } from "react";
import {SafeAreaView,Text, FlatList,View, ScrollView, Image} from 'react-native';
import {  WebView  }  from 'react-native-webview' ;
import ReadMore from '@fawazahmed/react-native-read-more';

//Item Episode
function Item  ({items, ThemeCustom})  {
  if(items.attributes.synopsis=="" || typeof(items.attributes.synopsis)==null || items.attributes.thumbnail==null ){
    
  }else{
    return(
      <View>
      <View style={ThemeCustom.Episodios}>
      <Image
          style={ThemeCustom.Imagen}
          source={{uri: items.attributes.thumbnail.original }}
      />
      <Text  style={ThemeCustom.TextoDescriptor}>
        {items.attributes.canonicalTitle}{'\n'}
        <Text style={ThemeCustom.TextoDescripto}>
          {items.attributes.length}m
        </Text>
      </Text>
      </View>
      <Text style={ThemeCustom.TextoInfo}>
        {items.attributes.synopsis}
      </Text>
      </View>
    )
  }
  

}

function DetailsAnimes({route}) {
  const {items, ThemeCustom} = route.params;
  const [Episode, setEpisode] = useState([]);
  const renderItem = ({item}) => (
    <Item items = {item} ThemeCustom={ThemeCustom} />
  );

  const getEpisode = async () => {
    const data = await fetch(
      `${items.relationships.episodes.links.related}`
    ).then((res) => res.json())
    .then((data) =>{
      setEpisode(data.data);
    });
    
  };

  // get getTopAnime() as the site render useEffect is used
  useEffect(() => {
    getEpisode()
  }, []);

  const List = ()=>{
    if(Episode.length<=1 ) {
      return(
        <View></View>
      )
    }else{
      return(
        <FlatList
        data={Episode}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        scrollEnabled= {true}
      />
      )
    }

  }
  return (
    <View style={ThemeCustom.ContenedorDetalles}>
        <SafeAreaView >
        <ScrollView removeClippedSubviews={true} >
          <View style={ThemeCustom.Video}>
            < WebView  source = { {  uri : `https://www.youtube.com/embed/${items.attributes.youtubeVideoId}`} }  />
          </View>

          <Text style={ThemeCustom.Titulo} >{items.attributes.canonicalTitle}</Text>
          <Text style={ThemeCustom.TextoInfo} >Start: {items.attributes.startDate} </Text>
          <Text style={ThemeCustom.TextoInfo} >End: {items.attributes.endDate} </Text>

          <ReadMore style={ThemeCustom.TextoReadme} numberOfLines={3}>
          {
           items.attributes.synopsis
          }
          </ReadMore>
        </ScrollView>



      </SafeAreaView>
      <List/>

    </View>
  );
  }


export default DetailsAnimes;

