<template>
  <div>
      <p>componen Minuman</p>
      <div v-for="n in dataM" :key="n.id">
        <v-card>
          <v-card-title>{{n.item}}</v-card-title>
          <v-card-subtitle>{{n.harga}}</v-card-subtitle>
          <v-card-text>{{n.deskripsi}}</v-card-text>
          <v-btn @click="addItemToCard(n)">tambah minuman</v-btn>
        </v-card>
      </div> 
  </div>
</template>

<script>
import{mapActions} from 'vuex'
export default {
  computed:{
    dataM(){
      return this.$store.getters.getDataM
    }
  },
  methods:{
    ...mapActions(["addItemToCard"])
  }
}
</script>

<style>

</style>