import * as React from 'react';
import { useState, useEffect } from "react";
import {View , Text, ScrollView } from 'react-native';
import {  WebView  }  from 'react-native-webview' ;
import BillboardFilms from './BillboardFilms';
import Options from '../../Component/Options';
import {LightTheme, DarkTheme} from '../../Component/Colors';
import { ThemeContext } from '../../../App';
// API KITSU
const App = () => {
    const [popularFilm, setPopularFilm] = useState([]);
    const [topFilm, setTopFilm] = useState([]);
    const [panel, setPanel] = useState("");
    const [tmp, settmp] = useState("");
    const {theme} = React.useContext(ThemeContext);
    const [ThemeCustom] = useState(theme === 'Light' ? LightTheme : DarkTheme);

    const getVideo = async() => {
      const data = await fetch(
        `https://imdb-api.com/en/API/YouTubeTrailer/YOURKEY/${tmp}`
      ).then((res) => res.json())
      .then((data) =>{
        setPanel(data.videoId);
      });
    }

    const getPopularFilm = async () => {
      const data = await fetch(
        `https://imdb-api.com/en/API/MostPopularMovies/YOURKEY`
      ).then((res) => res.json())
      .then((data) =>{
        settmp(data.items[0].id)
        setPopularFilm(data.items)
      });
      
    };


    const getTopFilm = async () => {
      const data = await fetch(
        `https://imdb-api.com/en/API/Top250Movies/YOURKEY`
      ).then((res) => res.json())
      .then((data) =>{
        setTopFilm(data.items);
      });
      
    };

    useEffect(() => {
      getPopularFilm();
      getTopFilm();
    }, []);

    useEffect(() => {
      getVideo();
    }, [tmp]);

    return (
      <View style={ThemeCustom.Contenedor}>
        <ScrollView showsVerticalScrollIndicator={false} overScrollMode="never"  style={ThemeCustom.Contenedor}>
            <View style={ThemeCustom.Video}>
              < WebView  source = { {  uri : `https://www.youtube.com/embed/${panel}`} }  />
            </View>

            <Text style={ThemeCustom.Texto}>POPULARS FILMS: </Text>
            <BillboardFilms
              Film={popularFilm}
              ThemeCustom={ThemeCustom}
            />

            <Text style={ThemeCustom.Texto}>Top 250 FILMS: </Text>
            <BillboardFilms
              Film={topFilm}
              ThemeCustom={ThemeCustom}
            />
        </ScrollView>
        <Options
         ThemeCustom={ThemeCustom}
        />
      </View>
    );
  }

export default App;

