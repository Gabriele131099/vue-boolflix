<template>
  <div class="">
    <div class="container-nav">

      <div>
        <ul>
            <li><img src="../assets/logo-netflix.png" alt=""></li>
            <li>Home</li>
            <li>Film</li>
            <li>Serie Tv</li>
            <li>Originali</li>
            <li>Aggiunti di recente</li>
            <li>La mia lista</li>
        </ul>
      </div>
    
      <div class="container-search">
        <div class="search">
          <input type="text" placeholder="Search" v-model="searchFilm" />
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
        background-color: black;
        align-items: center;
        img{
            width: 100px;
        }
        ul{
            display: flex;
            list-style-type: none;
            color: white;
            align-items: center;
        }
        li{
            padding: 0px 10px;
        }
        ul li:hover{
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