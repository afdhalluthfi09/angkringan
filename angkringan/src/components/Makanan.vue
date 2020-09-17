<template>
  <div class="kotak">
      <p>componen Makana</p>
      <div v-for="n in dataM" :key="n.id">
          <v-card>
          <v-card-title>{{n.item}}</v-card-title>
            <v-card-subtitle>{{n.harga}}</v-card-subtitle>
            <v-card-text>{{n.deskripsi}}</v-card-text>
            <v-btn @click="addItemToCard(n)" >add to card</v-btn>
          </v-card>
            <!-- {{a.item}} || {{a.harga}} || {{a.deskripsi}} -->
      </div>
  </div>
</template>

<script>
import {mapActions} from 'vuex'
export default {
  computed:{
    dataM(){
      return this.$store.getters.getData
    }
  },
  methods:{
    ...mapActions(["addItemToCard"])
  }
}
</script>

<style>

</style>