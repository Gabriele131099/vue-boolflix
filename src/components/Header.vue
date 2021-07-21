<template>
  <div class="">
    <div class="container-nav col-12">

      <div>
        <ul class="col-12">
            <li><a href="#"><img  src="../assets/logo-netflix.png" alt=""></a></li> 
            <li> <a href="#"> Home</a></li>
            <li> <a href="#"> Film</a></li>
            <li> <a href="#"> Serie Tv</a></li>
            <li> <a href="#"> Originali</a></li>
            <li> <a href="#"> Aggiunti di recente</a></li>
            <li> <a href="#"> La mia lista</a></li>
        </ul>
      </div>
    
      <div class="container-search col-xs-1">
        <div class="search">
          <input type="text" placeholder="Search" v-model="searchFilm"/>
          <button @click="$emit('search', searchFilm)"> <i class="fas fa-search"></i></button>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: 'Header',
    data() {
      return {
        searchFilm: ''
      }
    }
}
</script>


<style scoped lang="scss">

    .container-nav
    {
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        background-color: black;
        align-items: center;
        img{
            width: 100px;
        }
        a{
          color: white;
          text-decoration: none;
        }
        ul{
            display: flex;
            list-style-type: none;
            color: white;
            align-items: center;
            flex-wrap: wrap;
        }
        li{
            padding: 0px 10px;
        }
        ul li a:hover{
            color: lightgray;
        }
    }
    .container-search{
        .search{
            padding: 20px;
            input,button {
                padding: 5px 10px;
            }
        }
    }
</style>