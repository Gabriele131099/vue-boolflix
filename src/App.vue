<template>
  <div id="app">
    <!-- ascoltiamo la chiamata che arriva dal header -->
    <Header @search="searchArrayFilm" />
    
    <!-- qui mandiamo al main sia l'input del utente sia l'array filtrato  -->
    <Main :inputSearch="inputSearch"  :arrayMovies ="filterFilms"/>

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
      arrayMovies:[]
    }
  },
  created() {
    axios.get('https://api.themoviedb.org/3/search/movie?api_key=41a2fc67a59ec7a431e06153ce67564d&language=en-US&query=popular&page=1&include_adult=false').then((result) => {
      this.arrayMovies = result.data.results
   })
    this.searchArrayFilm('')

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
    }
  },
  methods: { //si mette in ascolto 
    searchArrayFilm(searchFilm) { // arriva cio che l'utente ha scritto nel input
      this.inputSearch = searchFilm.trim() //trasforma cio che l'utente ha scritto nella nuva stringa!
    }
  }
}
</script>

<style lang="scss">
// importare il nostro scss generico.
@import "./style/app.scss"
</style>