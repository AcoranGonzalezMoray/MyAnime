import * as React from 'react';
import { useState, useEffect} from "react";
import {View, FlatList, Dimensions} from 'react-native';
import VideoPost from '../../Component/VideoPost';
import {LightTheme, DarkTheme} from '../../Component/Colors';
import { ThemeContext } from '../../../App';
import { Searchbar } from 'react-native-paper';
//Item Video
function Item  ({items})  {
    return(
        <View >
        <VideoPost url={items.video_files[0].link}/>
        </View>
    )
  }

const AppShorts = () => { 
    const [recentAnime, setRecentAnime] = useState([]);
    const [pageRecent, setPageRecent] = useState(1);

    const {theme} = React.useContext(ThemeContext);
    const [ThemeCustom] = useState(theme === 'Light' ? LightTheme : DarkTheme);
    const flatListRef = React.useRef()

    const [query, setQuery] = React.useState('nature');
    const [searchQuery, setSearchQuery] = React.useState('');
    const onChangeSearch = query => {setSearchQuery(query)};

    const getRecentAnime = async () => {
      const data = await fetch(
        `https://api.pexels.com/videos/search?query=${query}&page=${pageRecent}&per_page=6&orientation=portrait`,
        { headers: new Headers({'Authorization': 'YOURKEY'})}
      ).then((res) => res.json())
      .then((data) =>{
        setRecentAnime(data.videos)
      });
      
    };

    const getRecentQuery = () => {
      setQuery(searchQuery);
      setPageRecent(1);
    };

    useEffect(() => {
      getRecentAnime();
    }, [pageRecent]);

    useEffect(() => {
      getRecentAnime();
    }, [query]);

    const handleMoreRecent=()=>{
      setPageRecent(pageRecent+1);
      flatListRef.current.scrollToOffset({ animated: true, offset: 0 });
    }

    const renderItem = ({item}) => (
        <Item  items={item}/>
      );

    return (
      <View style={{flex:1, height:Dimensions.get('window').height}}>
              <Searchbar
              placeholder="Search"
              onChangeText={onChangeSearch}
              onIconPress={getRecentQuery}
              value={searchQuery}
              style={ThemeCustom.SearchB}
            />
            <FlatList
                ref={flatListRef}
                data={recentAnime}
                windowSize={1}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                scrollEnabled={true}
                pagingEnabled={true}
                onEndReachedThreshold={0}
                onEndReached={handleMoreRecent}
                decelerationRate={'normal'}
                scrollsToTop={true}
            />
      </View>


    );
  }

export default AppShorts;

