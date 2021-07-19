<template>
  <div class="container">
    <div class="row">

      <div class="col-6 container-img">
        <img src="../assets/logo-netflix.png" alt="">
      </div>

      <div class="col-6 container-search">
        <div class="font-cont">
          <input type="text" placeholder="Search" v-model="searchFilm" />
          <button @click="$emit('search', searchFilm)"><i class="fas fa-search"></i></button>
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

</style>