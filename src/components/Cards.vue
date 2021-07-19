<template>
  <div class="card-container">
    <div class="description-movie">
      <div v-if="hover"  class="original_title">
        <a href="#">Name: {{original_title}}</a>
        <a href="#">Lenguage: {{original_language}}</a>
        <a href="#">Vote: {{vote_average}}</a>
      </div>
    </div>
    <img v-if='poster_path!==null'
     @mouseover="hover = true"
     @mouseleave="hover = false"
    :src="newPathImg" :alt="`image of ${title}`">
    <img v-if='poster_path===null' src="../assets/error.jpg" alt="">
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
            
          
                return 'https://image.tmdb.org/t/p/w342' + this.poster_path
            
        }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    .card-container
    {
        margin: 20px;
    }
    .description-movie{
        position: relative;
    }
    .original_title{
        position: absolute;
        top:50%;
        left: 50%;
        transform: translate( -50% , 50%);
        background-color: rgba( #000000,  .5);
        width: 100%;
        text-align: center;
        a{
            display: block;
            color: white;
            text-decoration: none;
        }
    }
</style>