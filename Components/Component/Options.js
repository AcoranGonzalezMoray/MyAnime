import * as React from 'react';
import { FloatingAction } from "react-native-floating-action";
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import { useNavigation } from '@react-navigation/native';

const actions = [
    {
      text: "Search Anime",
      icon: <Icon name="search"/>,
      name: "SearchAnime",
      color:'white',
      textColor:'black',
      position: 1
    },
    {
      text: "Search Films",
      icon: <Icon name="search"/>,
      name: "SearchFilm",
      color:'white',
      textColor:'black',
      position: 2
    }
  ];

const Option = ({ThemeCustom}) => {
    const navigation = useNavigation()
    return(
   
        <FloatingAction
        actions={actions}
   
        margin={30}
        color='white'
        iconColor='black'
        onPressItem={name => {
        navigation.navigate(`${name}`, {ThemeCustom:{ThemeCustom}});
        }}
        />
   
    )
}

export default Option;