<template>
  <div class="card-container col-2">
    <div class="hover-cont">
      <span v-if="hover" class="original_title">
        <h5>Name: {{original_title}}</h5>
        <h5>Lenguage: {{original_language}}</h5>
        <h5>Vote: {{vote_average}}</h5>
      </span>
    </div>
    <img  
     @mouseover="hover = true"
     @mouseleave="hover = false"
    :src="newPathImg" :alt="`image of ${title}`">

    <div @mouseover="hover = false" @mouseleave="hover = true" class="title">{{title}}</div>
  </div>
</template>

<script>
export default {
  name: 'Cards', 
  props: {
    poster_path: String,
    title: String,
    original_title: String,
    original_language: String,
    vote_average: Number
  },
  data() {
    return {
      hover: false,
    };
  },
  computed: { 
    newPathImg() { //aggiungiamo il pezzo macante a poster-path!
      return  'https://image.tmdb.org/t/p/w342' + this.poster_path
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>