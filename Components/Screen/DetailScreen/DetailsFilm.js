import * as React from 'react';
import { useState, useEffect } from "react";
import {SafeAreaView,Text, View, ScrollView} from 'react-native';
import {  WebView  }  from 'react-native-webview' ;


function DetailsAnimes({route}) {
  const {items, ThemeCustom} = route.params;
  const [panel, setPanel] = useState("");

  const getVideo = async() => {
    const data = await fetch(
      `https://imdb-api.com/en/API/YouTubeTrailer/YOURKEY/${items.id}`
    ).then((res) => res.json())
    .then((data) =>{
      setPanel(data.videoId);
    });
  } 

  useEffect(() => {
    getVideo();
  }, []);
  return (
    <View style={ThemeCustom.ContenedorDetalles}>
        <SafeAreaView removeClippedSubviews={true} >
        <ScrollView>
          <View style={ThemeCustom.Video}>
            < WebView  source = { {  uri : `https://www.youtube.com/embed/${panel}`} }  />
          </View>

          <Text style={ThemeCustom.Titulo} >{items.title}</Text>
          <Text style={ThemeCustom.TextoInfo} >Year: {items.year || items.description } </Text>
          <Text style={ThemeCustom.TextoInfo} >crew: {items.crew || items.resultType } </Text>
          <Text style={ThemeCustom.TextoInfo} >ImDbRating: {items.imDbRating || items.id} </Text>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
  }
export default DetailsAnimes;

