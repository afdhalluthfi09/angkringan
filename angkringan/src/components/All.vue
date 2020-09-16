<template>
  <div>
      <p>ini componen All</p>
      <h5>Makanan</h5>
      <div v-for="n in dataMI" :key="n.id" >
        <div v-for="a in n" :key="a.id">
          {{a.item}} || {{a.harga}} || {{a.deskripsi}}
        </div>
      </div>
      <br>
      <h5>Minuman</h5>
      <div v-for="n in dataM" :key="n.id" >
        <div v-for="a in n" :key="a.id">
          {{a.item}} || {{a.harga}} || {{a.deskripsi}}
        </div>
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

</style>