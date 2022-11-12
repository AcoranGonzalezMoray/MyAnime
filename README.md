<h1 align="center"> MyAnime </h1>
<p align="center"> 
<img src="https://img.shields.io/badge/Plataforma-IOS%2FAndroid-green"/> <img src="https://img.shields.io/badge/framework-react%20native-blue"/> 
<img src="https://img.shields.io/badge/React%20Native-0.70.4-green"/> 

<img src="https://img.shields.io/badge/Versi%C3%B3n-0.0.1-red"/> 
<img src="https://img.shields.io/badge/language-typescript%20%7C%20swift%20%7C%20java-lightblue"/>

</p>
<p>MyAnime es una app de Entretenimiento/Informativa para estar al tanto de las ultimas películas o animes estrenados con  trailers, sinopsis, fecha, episodios duración ...etc,  además la app incorpora un apartado 'Shorts' el cuál permite buscar videos hechos por usuarios de  "Pexels" mediante palabras clave</p>


## Contenido
<div>

  <h3>1.App</h3>
  <h3>2.Framework e APIs usadas</h3>
  <h3>3.Funciones</h3>
  <h3>4.Instalación</h3>
  <h3>5.Notas</h3>
 
</div>

## App
  ### Modo Oscuro 
  <p align="center">
    <img height="500" src="https://github.com/AcoranGonzalezMoray/MyAnime/blob/main/gif/1_black.gif"/> 
    <img height="500" src="https://github.com/AcoranGonzalezMoray/MyAnime/blob/main/gif/2_black.gif"/> 
    <img height="500" src="https://github.com/AcoranGonzalezMoray/MyAnime/blob/main/gif/3_black.gif"/> 

  </p>

  ### Modo Claro 
  <p align="center">
    <img height="600" src="https://github.com/AcoranGonzalezMoray/MyAnime/blob/main/gif/1_white.gif"/> 
    <img height="600" src="https://github.com/AcoranGonzalezMoray/MyAnime/blob/main/gif/2_white.gif"/> 
    <img height="600" src="https://github.com/AcoranGonzalezMoray/MyAnime/blob/main/gif/3_white.gif"/> 
  </p>

## Framework e APIs usadas
  <li><a href="https://reactnative.dev/" >React Native</a></li>
  <li><a href="https://kitsu.docs.apiary.io/" >Kitsu API</a></li>
  <li><a href="https://imdb-api.com/" >IMDb-API</a></li>
  <li><a href="https://www.pexels.com/api/" >Pexels API</a></li>

## Funciones
  <li>Muestra información de Anime / Peliculas (Trailer - Imagenes - Episodios - Descripción - ...)</li>
  <li>Permite filtrado con buscador por nombre tanto para la pantalla de "Anime" como "Film"</li>
  <li>Permite filtrado por categoría *Solo pantalla Anime*</li>

## Instalación

### Pasos:

  #### Clonar Repositorio
  ```
  git clone https://github.com/AcoranGonzalezMoray/MyAnime.git
  ```

  #### Instalar dependencias del proyecto
  ```
  npm install
  ```
 
#### Editar enlaces API añadiendo tu clave
  ##### Ruta 'MyAnime/Components/Screen/DetailScreen/DetailsFilm.js'
   ```
    `https://imdb-api.com/en/API/YouTubeTrailer/YOURKEY/${items.id}`
   ```
  ##### Ruta 'MyAnime/Components/Screen/Film Screen/AppFilm.js'
   ```
    `https://imdb-api.com/en/API/YouTubeTrailer/YOURKEY/${tmp}`
    `https://imdb-api.com/en/API/MostPopularMovies/YOURKEY`
    `https://imdb-api.com/en/API/Top250Movies/YOURKEY`
   ```
  ##### Ruta 'MyAnime/Components/Screen/Film Screen/SearchFilm.js'
   ```
     `https://imdb-api.com/en/API/SearchMovie/YOURKEY/${searchQuery}`
   ```
  ##### Ruta 'MyAnime/Components/Screen/Shorts Screen/Shorts.js'
   ```
    `https://api.pexels.com/videos/search?query=${query}&page=${pageRecent}&per_page=6&orientation=portrait`,
    { headers: new Headers({'Authorization': 'YOURKEY'})}
   ```

 #### Ejecutar Aplicación
   ##### Android:
   ```
   npx react-native run-android
   ```
   ##### Ios:
   ```
   npx react-native run-ios
   ```
### Notas
<li>Recomiendo encarecidamente compilar y ejecutar este proyecto con Java 17, para evitar incompatibilidades con los distintos paquetes instalados con npm</li>



