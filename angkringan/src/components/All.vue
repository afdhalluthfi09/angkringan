<template>
  <div class="flex">
      <h5>Makanan</h5>
      <div v-for="n in dataMI" :key="n.id" >
        <v-card>
          <v-card-title>{{n.item}}</v-card-title>
          <v-card-subtitle>{{n.harga}}</v-card-subtitle>
          <v-card-text>{{n.text}}</v-card-text>
        </v-card>
      </div>
      <br>
      <h5>Minuman</h5>
      <div v-for="n in dataM" :key="n.id" >
        <v-card>
          <v-card-title>{{n.item}}</v-card-title>
          <v-card-subtitle>{{n.harga}}</v-card-subtitle>
          <v-card-text>{{n.text}}</v-card-text>
        </v-card>
      </div>
  </div>
</template>

<script>
export default {
   computed:{
     dataM(){
      return this.$store.getters.getDataM
    },
    dataMI(){
      return this.$store.getters.getData
    }
   }
}
</script>

<style>
    .flex{
      display: flex;
    }
</style>