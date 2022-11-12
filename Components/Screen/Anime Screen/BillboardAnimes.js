import * as React from 'react';
import {SafeAreaView, View, FlatList, TouchableHighlight} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import FastImage from 'react-native-fast-image'; 
//https://github.com/DylanVann/react-native-fast-image 
//resuelve problemas de rendimiento en flatlist img debido a cache

//Item Imagen
function Item  ({ title , items, ThemeCustom})  {
  const navigation = useNavigation()
  return(
    <TouchableHighlight  onPress={() => navigation.navigate('DetailsAnime', {items: items, ThemeCustom:ThemeCustom})}>
    <FastImage style={ThemeCustom.ImagenCartelera} source={{ uri: title}}/>
    </TouchableHighlight>
  )


}

//Separador de Imagenes
const ItemSeparatorComponent = ({ThemeCustom})=>{
    return (
        <View style={ThemeCustom.Separator}/>
    );

}

//Cartelera Horizontal
function BillboardAnimes({topAnime, handleMore, ThemeCustom}) {
    const renderItem = ({item}) => (
        <Item title={item.attributes.posterImage.tiny} items = {item} ThemeCustom={ThemeCustom}/>
      );
     
    return (

        <SafeAreaView >
            <FlatList
            data={topAnime}
            renderItem={ renderItem}
            onEndReachedThreshold={0.2}
            onEndReached={handleMore}
            keyExtractor={item => item.id}
            horizontal={true}
            ItemSeparatorComponent={ItemSeparatorComponent({ThemeCustom})}
            />
           
        </SafeAreaView>

    );
}


export default BillboardAnimes;

