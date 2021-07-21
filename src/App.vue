<template>
  <div id="app">
    <!-- ascoltiamo la chiamata che arriva dal header -->
    <Header @search="searchMedia"/>
    
    <!-- qui mandiamo al main sia l'input del utente sia l'array filtrato  -->
    <Main :inputSearch="inputSearch"  :arrayMovies ="filterFilms" :arrayMoviesAll="arrayMoviesAll"  :arraySeriesTv="arraySeriesTv" 
      :arraySeriesTvAll="arraySeriesTvAll" :arrayAnime="arrayAnime"/>

  </div>
</template>

<script>
import axios from 'axios'
import Header from './components/Header.vue'
import Main from './components/Main.vue'
export default {
  name: 'App',
  components: {
    Header,
    Main
  },
  data() {
    return{
      inputSearch: '',
      arrayMovies:[],
      arrayMoviesAll:[],
      arraySeriesTv:[],
      arraySeriesTvAll:[],
      arrayAnime:[]
    }
  },
  created() {
    axios.get('https://api.themoviedb.org/3/movie/popular?api_key=41a2fc67a59ec7a431e06153ce67564d&language=en-US&query=multi&page=1&include_adult=false').then((result) => {
      this.arrayMovies = result.data.results
   }),
    this.searchMedia(''),

      axios.get('https://api.themoviedb.org/3/tv/popular?api_key=41a2fc67a59ec7a431e06153ce67564d&language=en-US&query=multi&page=1&include_adult=false').then((result) => {
      this.arraySeriesTv = result.data.results
   }),
         axios.get('https://api.themoviedb.org/3/search/tv?api_key=41a2fc67a59ec7a431e06153ce67564d&language=en-US&page=1&query=anime&include_adult=false').then((result) => {
      this.arrayAnime = result.data.results
   })

  },

  
    computed: {
    filterFilms() {
      function searchIn(search, elements) {
        let exists = false;
        elements.forEach((element) => {
          if(element.toLowerCase().includes(search.toLowerCase())) {
            exists = true;
          }
        });
        return exists;
      }
      if(this.inputSearch.length === 0) {
        return this.arrayMovies 

      } 
        return this.arrayMovies.filter((element) => {
        return searchIn(this.inputSearch, [element.title])
      })
    },
        filterSeriesTv() {
      function searchIn(search, elements) {
        let exists = false;
        elements.forEach((element) => {
          if(element.toLowerCase().includes(search.toLowerCase())) {
            exists = true;
          }
        });
        return exists;
      }
      if(this.inputSearch.length === 0) {
        return this.arraySeriesTv

      } 
        return this.arraySeriesTv.filter((element) => {
        return searchIn(this.inputSearch, [element.title])
      })
    }
  },
  methods: { //si mette in ascolto 
       searchMedia(searchFilm){ 
         axios.get(`https://api.themoviedb.org/3/search/movie?api_key=41a2fc67a59ec7a431e06153ce67564d&query=${searchFilm}`).then((results) =>{
           this.arrayMoviesAll = results.data.results;
          this.inputSearch = searchFilm.trim()
         })
          axios.get(`https://api.themoviedb.org/3/search/tv?api_key=41a2fc67a59ec7a431e06153ce67564d&query=${searchFilm}`).then((results) =>{
           this.arraySeriesTvAll = results.data.results;
          this.inputSearch = searchFilm.trim()
         })
          axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=41a2fc67a59ec7a431e06153ce67564d&query=${searchFilm}`).then((results) =>{
           this.arrayMovies = results.data.results;
          this.inputSearch = searchFilm.trim()
         })
          axios.get(`https://api.themoviedb.org/3/search/movie?api_key=41a2fc67a59ec7a431e06153ce67564d&query=${searchFilm}`).then((results) =>{
           this.arraySeriesTv = results.data.results;
          this.inputSearch = searchFilm.trim()
         })
        //   axios.get(`https://api.themoviedb.org/3/search/tv?api_key=41a2fc67a59ec7a431e06153ce67564d&language=en-US&page=1&query=anime&include_adult=false`).then((results) =>{
        //    this.arrayAnime = results.data.results;
        //   this.inputSearch = searchFilm.trim()
        //  })
         

         


          

},
    
 }

    }
  

</script>

<style lang="scss">
// importare il nostro scss generico.
@import "./style/app.scss"
</style>