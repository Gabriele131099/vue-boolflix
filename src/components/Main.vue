<template>
  <div class="cont">
    <div class="title-container">
      <div class="title">ORIGINALI NETFLIX </div>
    </div>
    <div class="row container-cards">
      <Card v-for="film in arrayMovies" :key="film.id"
      :vote_average='film.vote_average'
      :original_title='film.original_title'
      :original_language='film.original_language'
      :poster_path="film.poster_path"
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
    inputSearch: String
  }
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    .cont{
        background-color: rgb(24, 22, 22);
    }
    .container-cards
    {
        display: flex;
        flex-wrap: wrap;
        padding: 0 20px;
        justify-content: center;
    }
    .title{
        padding: 30px;
        font-size: 32px;
        color: grey;
    }
</style>