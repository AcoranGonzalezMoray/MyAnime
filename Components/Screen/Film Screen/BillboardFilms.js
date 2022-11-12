import * as React from 'react';
import {SafeAreaView, View, FlatList, StyleSheet,TouchableHighlight} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import FastImage from 'react-native-fast-image'; 
//https://github.com/DylanVann/react-native-fast-image 
//resuelve problemas de rendimiento en flatlist img debido a cache

//Item Imagen
function Item  ({ title , items, ThemeCustom})  {
  const navigation = useNavigation()
  return(
    <TouchableHighlight  onPress={() => 
      navigation.navigate('DetailsFilm', {items: items, ThemeCustom:ThemeCustom})
    }>
    <FastImage
        style={ThemeCustom.ImageFilm}
        source={{
        uri: title,
      }}
    />
  </TouchableHighlight>
  )


}

//Separador de Imagenes
const ItemSeparatorComponent = ({ThemeCustom})=>{
    return (<View style={ThemeCustom.Separator}/>);
}

//Cartelera Horizontal

function BillboardFilms({Film, ThemeCustom}) {
    const renderItem = ({item}) => (
      
        <Item title={item.image} items = {item} ThemeCustom={ThemeCustom} />
      );

    return (

        <SafeAreaView>
            <FlatList
            data={Film}
            renderItem={renderItem}
            keyExtractor={item => item.id}
            horizontal={true}
            maxToRenderPerBatch={5}
            ItemSeparatorComponent={ItemSeparatorComponent({ThemeCustom})}
            />
           
        </SafeAreaView>

    );
}

export default BillboardFilms;

