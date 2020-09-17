<template>
  <div>
      <div v-for="item in card" :key="item.id">
      <v-card>
          <v-card-title>{{item.item}}</v-card-title>
          <v-card-subtitle>{{item.harga}}</v-card-subtitle>
          <v-btn icon @click="addList(item.id)" ><v-icon>mdi-plus-box</v-icon></v-btn>
          <span>x{{item.qty}}</span>
          <v-btn icon @click="reduceList(item.id)" ><v-icon>mdi-minus-box</v-icon></v-btn>
          <v-btn icon @click="removeList(item.id)" ><v-icon>mdi-trash-can</v-icon></v-btn>
      </v-card>
     </div>
     <span>harga total :{{count}}  ||  </span>
     <span>jumlah pesanan:{{jumlah}}</span>

  </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'
export default {
    computed:{
        ...mapGetters(["card"]),
        count(){
            return this.card.reduce((a,b)=> a + b.qty * b.harga, 0)
        },
        jumlah(){
            return this.card.reduce((a,b)=> a + b.qty,0)
        }
    },
    methods:{
        ...mapActions(["addList","reduceList","removeList"])
    }
}
</script>

<style>
    v-card{
        position: relative;
    }
    v-card .posisi{
        position: absolut;
    }

</style>