import * as React from 'react';
import { NavigationContainer, DarkTheme, LightTheme} from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AppAnime from './Components/Screen/Anime Screen/AppAnime';
import { createStackNavigator } from '@react-navigation/stack';
import DetailsAnime from './Components/Screen/DetailScreen/DetailsAnime';
import DetailsFilm from './Components/Screen/DetailScreen/DetailsFilm';
import AppFilm from './Components/Screen/Film Screen/AppFilm' 
import SearchAnime from './Components/Screen/Anime Screen/SearchAnime';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import { View, Text, Switch} from 'react-native';
import {useState} from "react";
import SearchFilm from './Components/Screen/Film Screen/SearchFilm';
import AppShorts from './Components/Screen/Shorts Screen/Shorts';
const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

export const ThemeContext = React.createContext();

export default function App() {
  const [theme, setTheme] = useState('Dark');
  const themeData = { theme, setTheme };
  const ActiveColor = theme === 'Light' ? 'black' : 'white';

  function Header({name}) {
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () =>{ 
      setIsEnabled(previousState => !previousState)
      setTheme(theme === 'Light' ? 'Dark' : 'Light')
    };

    return (
      <View style={{width:'100%', flexDirection:'row'}}>
        <Text
          style={{width:'90%',color:ActiveColor, fontSize:27}}
        >{name}
                </Text>
        <Switch
          style={{right: 0}}
          trackColor={{ false: "#767577", true: "#81b0ff" }}
          thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSwitch}
          value={isEnabled}
        />

      </View>
    );
  }

  function Home() {
    return (
      <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarHideOnKeyboard: true,
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === 'Anime') {
            iconName = focused
              ? 'superpowers'
              : 'superpowers';
          } else if (route.name === 'Film') {
            iconName = focused ? 'film' : 'film';
          } else if (route.name === 'Short') {
            iconName = focused ? 'play' : 'play';
          }
  
          // You can return any component that you like here!
          return <Icon name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: ActiveColor,
        tabBarInactiveTintColor: 'gray',
      })}
      >
        <Tab.Screen name="Anime" component={AppAnime} options={{ headerTitle: (props) =>  <Header name='Anime' /> }} />
        <Tab.Screen name="Short" component={AppShorts} options={{headerShown: false}} />
        <Tab.Screen name="Film" component={AppFilm} options={{ headerTitle: (props) =>  <Header name='Film' /> }} />
      </Tab.Navigator>
    );
  }

  return (
    <ThemeContext.Provider value={themeData}>
    <NavigationContainer initialRouteName='AnimeMain' theme={theme == 'Light' ? LightTheme : DarkTheme}>
      <Stack.Navigator
        screenOptions={{
          headerShown: false
        }}
      >
        <Stack.Screen name="AnimeMain" component={Home} />
        <Stack.Screen name="DetailsAnime" component={DetailsAnime}/>
        <Stack.Screen name="SearchAnime" component={SearchAnime}/>

        <Stack.Screen name="DetailsFilm" component={DetailsFilm}/>
        <Stack.Screen name="SearchFilm" component={SearchFilm}/>
      </Stack.Navigator>
    </NavigationContainer>
    </ThemeContext.Provider>
  );
}

