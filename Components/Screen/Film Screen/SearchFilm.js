import * as React from 'react';
import { View , FlatList, TouchableOpacity} from 'react-native';
import { Searchbar } from 'react-native-paper';
import FastImage from 'react-native-fast-image'; 
import { useNavigation } from '@react-navigation/native';

//Item Imagen
function Item  ({ title , items, ThemeCustom})  {
  const navigation = useNavigation()
  return( 
    <TouchableOpacity onPress={() => navigation.navigate('DetailsFilm', {items: items, ThemeCustom:ThemeCustom})} 
    style={ThemeCustom.DecoradorImagenSearch}>
      <FastImage  style={ThemeCustom.ImageSearch} source={{ uri: title}}/>
    </TouchableOpacity>
  )
}

const Search = ({route}) => {
  const [searchFilm, setSearchFilm] = React.useState('');
  const renderItem = ({item}) => (<Item title={item.image} items = {item} ThemeCustom={ThemeCustom.ThemeCustom} />);
  const [searchQuery, setSearchQuery] = React.useState('');
  const {ThemeCustom} = route.params;
  const onChangeSearch = query => {setSearchQuery(query)};


  const onChangeSearchAnime = async()=>{
    const data = await fetch(
      `https://imdb-api.com/en/API/SearchMovie/YOURKEY/${searchQuery}`
    ).then((res) => res.json())
    .then((data) =>{
      setSearchFilm(data.results);
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
    data={searchFilm}
    renderItem={renderItem}
    keyExtractor={item => item.id}
    scrollEnabled={true}
    numColumns={3}
    />

    </View>

  );
};

export default Search;
