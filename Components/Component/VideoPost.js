import * as React from "react";
import {Dimensions} from 'react-native';
import Video from 'react-native-video';
export default function VideoPost({url}){
    return(
        <Video source={{uri: url}}
        style={{flex:1, height:Dimensions.get('window').height -98}}  
        paused={true}
        muted={false}
        controls={true}
        />
    )
}