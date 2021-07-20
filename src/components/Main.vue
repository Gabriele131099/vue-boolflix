<template>
  <div class="cont">
    <div class="title-container">
      <div class="title">ORIGINALI NETFLIX </div>
    </div>
    <h2>Film</h2>
    <div v-if="inputSearch.length===0" class="container-cards ">
      <Card v-for="film in arrayMovies" :key="film.id"
      :vote_average='film.vote_average'
      :original_title='film.original_title'
      :original_language='film.original_language'
      :poster_path="film.poster_path"
      :inputSearch="inputSearch"
      />
    </div>
    <div v-if="inputSearch.length!==0" class="container-cards ">
      <Card v-for="film in arrayMoviesAll" :key="film.id"
      :vote_average='film.vote_average'
      :original_title='film.original_title'
      :original_language='film.original_language'
      :poster_path="film.poster_path"
      :inputSearch="inputSearch"
      />
    </div>
      <h2>Serie Tv</h2>
        <div v-if="inputSearch.length===0" class="container-cards ">
      <Card v-for="serie in arraySeriesTv" :key="serie.id"
      :vote_average='serie.vote_average'
      :original_title='serie.original_name'
      :original_language='serie.original_language'
      :poster_path="serie.poster_path"
      :inputSearch="inputSearch"
      />
    </div>
    <div v-if="inputSearch.length!==0" class="container-cards ">
      <Card v-for="serie in arraySeriesTvAll" :key="serie.id"
      :vote_average='serie.vote_average'
      :original_title='serie.original_name'
      :original_language='serie.original_language'
      :poster_path="serie.poster_path"
      :inputSearch="inputSearch"
      />
    </div>



  </div>
</template>

<script>
import Card from './Cards.vue'
export default {
  name: 'Main',
  components: {
    Card
  },
  props: {
    arrayMovies: Array,
    arrayMoviesAll: Array,
    inputSearch: String,
    arraySeriesTvAll:Array,
    arraySeriesTv:Array

  }
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    .cont{
        background-color: rgb(24, 22, 22);
        min-height: calc(100vh - 78px);
        width: 100vw;
         h2{
          color: lightgray;
        }
    }
    .container-cards
    {
        flex-wrap: wrap;
        padding: 0 20px;
        justify-content: center;
        display: flex;
       
    }
    .title{
        padding: 30px;
        font-size: 32px;
        color: grey;
    }
</style>