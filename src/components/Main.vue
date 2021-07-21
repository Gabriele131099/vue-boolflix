<template>
  <div class="cont">
    <div class="title-container">
      <div class="title">ORIGINALI NETFLIX </div>
    </div>
    <h2 >Film</h2>
    <div v-if="inputSearch.length===0" class="container-cards ">
      <Card class="col-xs-10 col-md-5 col-xl-2"  v-for="film in arrayMovies" :key="film.id"
      :vote_average='film.vote_average'
      :original_title='film.original_title'
      :original_language='film.original_language'
      :poster_path="film.poster_path"
      :inputSearch="inputSearch"
      />
    </div>
    <div v-if="inputSearch.length!==0" class="container-cards ">
      <Card class="col-xs-8 col-md-5 col-xl-2" v-for="film in arrayMoviesAll" :key="film.id"
      :vote_average='film.vote_average'
      :original_title='film.original_title'
      :original_language='film.original_language'
      :poster_path="film.poster_path"
      :inputSearch="inputSearch"
      />
    </div>
      <h2 class="padding-top">Serie Tv</h2>
    <div v-if="inputSearch.length===0" class="container-cards ">
      <Card class="col-xs-8 col-md-5 col-xl-2" v-for="serie in arraySeriesTv" :key="serie.id"
      :vote_average='serie.vote_average'
      :original_title='serie.original_name'
      :original_language='serie.original_language'
      :poster_path="serie.poster_path"
      :inputSearch="inputSearch"
      />
    </div>
    <div v-if="inputSearch.length!==0" class="container-cards ">
      <Card class="col-xs-8 col-md-5 col-xl-2" v-for="serie in arraySeriesTvAll" :key="serie.id"
      :vote_average='serie.vote_average'
      :original_title='serie.original_name'
      :original_language='serie.original_language'
      :poster_path="serie.poster_path"
      :inputSearch="inputSearch"
      />
    </div>
    <h2 class="padding-top">Anime</h2>
    <div v-if="inputSearch.length==0" class="container-cards ">
      <Card class="col-xs-8 col-md-5 col-xl-2" v-for="anime in arrayAnime" :key="anime.id"
      :vote_average='anime.vote_average'
      :original_title='anime.original_name'
      :original_language='anime.original_language'
      :poster_path="anime.poster_path"
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
    arraySeriesTv:Array,
    arrayAnime:Array

  }
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    .cont{
        background-color: rgb(24, 22, 22);
        min-height: calc(100vh - 78px);
         h2{
          color: lightgray;
            margin-left: 30px ;
        }
        
    }
    .padding-top{
      padding-top: 70px;
    }
    img{
          width: 100%;
        }
    .container-cards
    {
        justify-content: center;
        display: flex;
        overflow-x:scroll;
        position: relative;
        margin-left: 30px;
        margin-right: 30px;
       
    }
    ::-webkit-scrollbar {
  width: 10px;
}

/* Track */
::-webkit-scrollbar-track {
  background: #f1f1f1;
   box-shadow: inset 0 0 5px grey;
  border-radius: 10px;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #888;
     box-shadow: inset 0 0 5px grey;
  border-radius: 10px;

}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #555;
}
    .title{
        padding: 30px;
        font-size: 32px;
        color: grey;
    }
</style>