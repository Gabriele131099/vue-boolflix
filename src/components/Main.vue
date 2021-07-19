<template>
  <div class="container">
    <div class="title-container">
      <h1>ORIGINALI NETFLIX </h1>
    </div>
    <div class="row">
      <Card v-for="film in arrayMovies" :key="film.id"
      :title='film.title'
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

</style>