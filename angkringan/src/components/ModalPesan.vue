<template>
  <v-row justify="center">
    <v-btn color="primary" dark @click.stop="dialog = true" >Open Dialog </v-btn>

    <v-dialog v-model="dialog"   max-width="290" >
      <v-card>
        <v-card-title class="headline">Pesanan Anda :</v-card-title>

        <v-card-text>
          <table>
              <tr>
                  <td>Item</td>
                  <td>jumlah</td>
                  <td>harga satuan</td>
              </tr>
              <tr v-for="item in card" :key="item.id">
                  <td>{{item.item}}</td>
                  <td>{{item.qty}}</td>
                  <td>{{item.harga}}</td>
              </tr>
              <tr>
                  <td colspan="2">Total</td>
                  <td>Rp.{{count}}</td>
              </tr>
          </table>
        </v-card-text>

        <v-card-actions>
          <v-spacer></v-spacer>

          <v-btn color="green darken-1" text  @click="dialog = false">Batal</v-btn>
          <v-btn color="green darken-1" text @click="dialog=false">Bayar</v-btn> 
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
     data () {
      return {
        dialog: false,
      }
    },
    computed:{
        ...mapGetters(["card"]),
        count(){
            return this.card.reduce((a,b) => a + b.qty * b.harga, 0)
        }
    }
}
</script>

<style scoped>
 table tr {
     text-align: center;
 }
 table tr{
     margin-right: 5px;
 }
</style>