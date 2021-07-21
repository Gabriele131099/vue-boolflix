<template>
  <a :href="original_title+'.html'"><div class="card-container">
    <div class="description-movie">
      <div v-if="hover"  class="original_title">
        <a href="#">Name: {{original_title}}{{original_name}}</a>
        <a href="#">Lenguage: {{original_language}}<img class="flag" :src="flagOriginalLanguage" :alt="`image of ${title}`"></a>
        <a href="#">Vote: <i v-for="i in 5" :key="i" class="fa-star" :class="i <= voteRounded ? 'fas' : 'far' "></i></a>
      </div>
    </div>
    <img
     @mouseover="hover = true"
     @mouseleave="hover = false"
    :src="newPathImg" width="100%" :alt="`image of ${title}`">
    

    <div @mouseover="hover = false" @mouseleave="hover = true" class="title">{{title}}</div>
  </div></a>
</template>

<script>
export default {
  name: 'Cards', 
  props: {
    poster_path: String,
    vote_average: Number,
    title: String,
    original_title: String,
    original_language: String,
    arrayStar:Array,
    original_name:String
  },
  data() {
    return {
      hover: false,
      voteRounded: Math.round(this.vote_average / 2),
    };
  },
  computed: { 
    newPathImg() { //aggiungiamo il pezzo macante a poster-path!
            
          if (this.poster_path) {
            return 'https://image.tmdb.org/t/p/w342' + this.poster_path
          }else{
            return require ('../assets/error.jpg')
          }
                
            
        },
      flagOriginalLanguage(){
       return require ('../assets/'+ this.original_language+'.png')
      },
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
    .flag{
      width: 30px;

    }
</style>