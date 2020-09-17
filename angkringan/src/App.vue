<template>
  <v-app>
    <div class="bungkus">
    <div class="colFrist">
    <nav app >
      <router-link to="/all">All</router-link>
      <router-link to="/makanan">Makanan</router-link>
      <router-link to="/minuman">Minuman</router-link>
    </nav>

    <v-main>
      <router-view></router-view>
    </v-main>
    </div>
      
  <!-- side Stroke Harga list -->
  
  <div class="colSecond">
    <h1>oda dong mang sholeh</h1>
    <listMakanan/>
  </div>
  </div>

  </v-app>
    
</template>

<script>
import listMakanan from "./components/listMakanan";

export default {
  name: "App",

  components: {
    listMakanan
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