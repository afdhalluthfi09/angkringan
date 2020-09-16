<template>
  <v-app>
    <div class="bungkus">
    <div class="colFrist">
    <nav app >
      <v-btn to="/all">All</v-btn>
      <v-btn to="/makanan">Makanan</v-btn>
      <v-btn to="/minuman">Minuman</v-btn>
    </nav>

    <v-main>
      <router-view></router-view>
    </v-main>
    </div>
      
  <!-- side Stroke Harga list -->
  
  <div class="colSecond">
    <h1>oda dong mang sholeh</h1>
  </div>
  </div>

  </v-app>
    
</template>

<script>
// import HelloWorld from "./components/HelloWorld";

export default {
  name: "App",

  components: {
    // HelloWorld
  },

  data: () => ({
    //
  })
};
</script>
<style scoped>
  .bungkus{
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
</style>