<template>
  <div class="kotak">
      <p>componen Makana</p>
      <div v-for="n in dataM" :key="n.id">
        <div v-for="a in n" :key="a.id">
          <v-card>
          <v-card-title>{{a.item}}</v-card-title>
            <v-card-subtitle>{{a.harga}}</v-card-subtitle>
            <v-card-text>{{a.deskripsi}}</v-card-text>
          </v-card>
            <!-- {{a.item}} || {{a.harga}} || {{a.deskripsi}} -->
        </div>
      </div>
  </div>
</template>

<script>
export default {
  computed:{
    dataM(){
      return this.$store.getters.getData
    }
  }
}
</script>

<style>

</style>