
import {StyleSheet } from 'react-native';
import PixelRatio from 'react-native/Libraries/Utilities/PixelRatio';

export const DarkTheme = StyleSheet.create({
    bar:'#070707',
    barSty:"light-content",
    TextoDrop:{
        color:'black',            
        fontWeight: 'bold',
        fontFamily: 'NunitoSans-SemiBold',
        fontSize:15
    },
    TextoCategory:{
        backgroundColor:'white', width:'35%', margin: 30
    },
    Texto: {
      fontWeight: 'bold',
      fontFamily: 'NunitoSans-SemiBold',
      color:'white',
      margin: 30
    },
    Titulo: {
        fontSize: 27/ PixelRatio.getFontScale(),
        color: 'white',
        fontWeight: "bold"
    },
    TextoInfo: {
        color: 'gray',
    },
    TextoReadme: {
        color: 'white',
    },
    TextoDescriptor: {
        color:'white',
        marginLeft: 10
    },
    Video:{
        height:200
    },
    Contenedor:{
        flex:1,
        backgroundColor:'#070707'
    },
    ContenedorDetalles:{
        flex:1,
        backgroundColor:'#070707',
        margin :15
    },
    Separator: {
        height: "100%",
        width: 8,
        backgroundColor: '#070707',
    },
    color:{
        color:'white'
    },
    Imagen: {
        width:110,
        height:80,
        left:0
    },
    ImagenCartelera:{
        width: 120,
        height: 200,
        resizeMode: 'stretch',
        borderRadius:10,
        
    },
    Episodios: {
        flex:1, 
        marginVertical: 18, 
        display:'flex', 
        width: '100%', 
        flexDirection:'row'
    },
    DecoradorImagenSearch:{
        width:'33%',
        height:170
    },
    ImageSearch:{
        flex: 1,
        width: null,
        height: null,
        resizeMode: 'stretch',
        margin:5,
        borderRadius:5,
    },
    SearchBarr:{
        margin:'5%', 
        borderRadius:25, 
        height:45
    },
    ImageFilm:{
        width: 120,
        height: 200,
        resizeMode: 'stretch',
        borderRadius:10,
        elevation: 2
    },
    SearchB:{
        height:40, 
        width:'80%', 
        alignSelf:'center', 
        margin:5, 
        borderRadius:25,
        backgroundColor: 'white'
    },
    SearchB2:{
        backgroundColor: 'white'
    }
});
export const LightTheme = StyleSheet.create({
    bar: 'white',
    barSty:"dark-content",
    TextoDrop:{
        color:'black',            
        fontWeight: 'bold',
        fontFamily: 'NunitoSans-SemiBold',
        fontSize:15
    },
    TextoCategory:{
        backgroundColor:'white', width:'35%', margin: 30
    },
    Texto: {
      fontWeight: 'bold',
      fontFamily: 'NunitoSans-SemiBold',
      color:'black',
      margin: 30
    },
    Titulo: {
        fontSize: 27/ PixelRatio.getFontScale(),
        color: 'black',
        fontWeight: "bold"
    },
    TextoInfo: {
        color: 'gray',
    },
    TextoReadme: {
        color: 'black',
    },
    TextoDescriptor: {
        color:'black',
        marginLeft: 10
    },
    Video:{
        height:200
    },
    Contenedor:{
        flex:1,
        backgroundColor:'white'
    },
    ContenedorDetalles:{
        flex:1,
        backgroundColor:'white',
        margin :15
    },
    Separator: {
        height: "100%",
        width: 8,
        backgroundColor: 'white',
    },
    color:{
        color:'black'
    },
    Imagen: {
        width:110,
        height:80,
        left:0
    },
    ImagenCartelera:{
        width: 120,
        height: 200,
        resizeMode: 'stretch',
        borderRadius:10,
        
    },
    Episodios: {
        flex:1, 
        marginVertical: 18, 
        display:'flex', 
        width: '100%', 
        flexDirection:'row'
    },
    DecoradorImagenSearch:{
        width:'33%',
        height:170
    },
    ImageSearch:{
        flex: 1,
        width: null,
        height: null,
        resizeMode: 'stretch',
        margin:5,
        borderRadius:5,
    },
    SearchBarr:{
        margin:'5%', 
        borderRadius:25, 
        height:45
    },
    ImageFilm:{
        width: 120,
        height: 200,
        resizeMode: 'stretch',
        borderRadius:10,
        elevation: 2
    },
    SearchB:{
        height:40, 
        width:'80%', 
        alignSelf:'center', 
        margin:5, 
        borderRadius:25,
        backgroundColor: 'white'
    },
    SearchB2:{
        backgroundColor: 'gray'
    }
});
