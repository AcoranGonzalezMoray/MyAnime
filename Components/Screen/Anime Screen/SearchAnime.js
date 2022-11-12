import * as React from 'react';
import { View , FlatList, TouchableOpacity} from 'react-native';
import { Searchbar } from 'react-native-paper';
import FastImage from 'react-native-fast-image'; 
import { useNavigation } from '@react-navigation/native';

//Item Imagen
function Item  ({ title , items, ThemeCustom})  {
  const navigation = useNavigation()
  return( 
    <TouchableOpacity onPress={() => navigation.navigate('DetailsAnime', {items: items, ThemeCustom:ThemeCustom})} 
    style={ThemeCustom.DecoradorImagenSearch}>
      <FastImage  style={ThemeCustom.ImageSearch} source={{ uri: title}}/>
    </TouchableOpacity>
  )
}

const Search = ({route}) => {
  const [searchAnime, setSearchAnime] = React.useState('');
  const renderItem = ({item}) => (<Item title={item.attributes.posterImage.tiny} items = {item} ThemeCustom={ThemeCustom.ThemeCustom} />);
  const [searchQuery, setSearchQuery] = React.useState('');
  const {ThemeCustom} = route.params;
  const onChangeSearch = query => {setSearchQuery(query)};


  const onChangeSearchAnime = async()=>{
    const data = await fetch(
      `https://kitsu.io/api/edge/anime?filter[text]=${searchQuery}`
    ).then((res) => res.json())
    .then((data) =>{
      setSearchAnime(data.data);
    });
  }


  return (
    <View>
    <Searchbar
      placeholder="Search"
      onChangeText={onChangeSearch}
      onIconPress={onChangeSearchAnime}
      value={searchQuery}
      style={ThemeCustom.ThemeCustom.SearchBarr}
    />
    <FlatList
    data={searchAnime}
    renderItem={renderItem}
    keyExtractor={item => item.id}
    scrollEnabled={true}
    numColumns={3}
    />

    </View>

  );
};

export default Search;
