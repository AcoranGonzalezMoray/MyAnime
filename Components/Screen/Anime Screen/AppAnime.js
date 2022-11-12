import * as React from 'react';
import { useState, useEffect } from "react";
import {View , Text, ScrollView, StatusBar} from 'react-native';
import BillboardAnimes from './BillboardAnimes';
import {  WebView  }  from 'react-native-webview' ;
import {LightTheme, DarkTheme} from '../../Component/Colors';
import Option from '../../Component/Options';
import { ThemeContext } from '../../../App';
import ModalDropdown from 'react-native-modal-dropdown';
// API KITSU
const AppAnime = () => { 
    const [recentAnime, setRecentAnime] = useState([]);
    const [pageRecent, setPageRecent] = useState(0);

    const [topAnime, setTopAnime] = useState([]);
    const [pageTop, setPageTop] = useState(0);

    const [categoryAnime, setCategoryAnime] = useState([]);
    const [category, setCategory] = useState("Comedy");
    const [pageCategory, setPageCategory] = useState(0);
    const [prevmemo, setPrevmemo] = useState("Comedy");
    var CTG = ['Action','Martial Arts','Adventure','Careers','Science fiction','Comedy','Dementia','Demons','Sports','Drama','ecchi','schoolchildren','Space','Fancy','Harem','Historical','Childish','Josei','Games','Magic','Mecha', 'Military','Mystery','Music','Parody','Policeman','Psychological','slice of life','Romance','Samurai','Shoujo','Shounen','Supernatural','Superpowers','suspense','vampires']




    const [panel, setPanel] = useState("");

    const {theme} = React.useContext(ThemeContext);
    const [ThemeCustom] = useState(theme === 'Light' ? LightTheme : DarkTheme);
    
    const getTopAnime = async () => {
      const data = await fetch(
       `https://kitsu.io/api/edge/anime?page[limit]=20&page[offset]=${pageTop}&sort=popularityRank`
      ).then((res) => res.json())
      .then((data) =>{
        setTopAnime([...topAnime, ...(data.data)]);
        setPanel(data.data[0].attributes.youtubeVideoId)
      });
      
    };

    const getRecentAnime = async () => {
      const data = await fetch(
        `https://kitsu.io/api/edge/anime?filter[year]=2022&page[limit]=20&page[offset]=${pageRecent}&sort=popularityRank`
      ).then((res) => res.json())
      .then((data) =>{
        setRecentAnime([...recentAnime, ...(data.data)]);
    
      });
      
    };
    const getCategoryAnime = async () => {
      const data = await fetch(
        `https://kitsu.io/api/edge/anime?filter[categories]=${category}&page[limit]=10&page[offset]=${pageCategory}`
      ).then((res) => res.json())
      .then((data) =>{
        if(prevmemo == category){
          setCategoryAnime([...categoryAnime, ...(data.data)]);
        }else{
          setCategoryAnime(data.data);
          setPrevmemo(category);
        }
        
      });
      
    };

    useEffect(() => {
      getTopAnime();
    }, [pageTop]);

    useEffect(() => {
      getRecentAnime();
    }, [pageRecent]);

    useEffect(() => {
      getCategoryAnime();
    }, [pageCategory, category]);

    const handleMoreTop=()=>{setPageTop(pageTop+21);}
    const handleMoreRecent=()=>{setPageRecent(pageRecent+21);}
    const handleMoreCategory=()=>{setPageCategory(pageCategory+11);}
    return (
      <View style={ThemeCustom.Contenedor}>
        <StatusBar backgroundColor={ThemeCustom.bar} barStyle={ThemeCustom.barSty} />
        
        <ScrollView showsVerticalScrollIndicator={false} removeClippedSubviews={true}  style={ThemeCustom.Contenedor}>
            <View style={ThemeCustom.Video}>
            < WebView  source = { {  uri : `https://www.youtube.com/embed/${panel}`} }  />
            </View>

            <Text style={ThemeCustom.Texto}>RECENTS ANIME:</Text>
            <BillboardAnimes
              topAnime={recentAnime}
              handleMore={handleMoreRecent}
              ThemeCustom={ThemeCustom}
            />


            <Text style={ThemeCustom.Texto}>POPULARS ANIMES: </Text>
            <BillboardAnimes
              topAnime={topAnime}
              handleMore={handleMoreTop}
              ThemeCustom={ThemeCustom}
            />


            <ModalDropdown 
             defaultIndex={1}
            style={{backgroundColor:'white', width:'35%', margin: 30, borderColor:'blue', borderBottomWidth:2, borderRadius:5}}
            dropdownTextStyle={{
              color:'black',            
              fontWeight: 'bold',
              fontFamily: 'NunitoSans-SemiBold',
              fontSize:15
            }}
            textStyle={{
              color:'black',            
              fontWeight: 'bold',
              fontFamily: 'NunitoSans-SemiBold',
              fontSize:15
            }}
            onSelect={(index, val) => (setCategory(val))}
            options={CTG}
            />

            <BillboardAnimes
              topAnime={categoryAnime}	
              handleMore={handleMoreCategory}
              ThemeCustom={ThemeCustom}
            />
            
        </ScrollView>
        <Option
        ThemeCustom={ThemeCustom}
        />
      </View>


    );
  }

export default AppAnime;

