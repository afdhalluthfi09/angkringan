<template>
  <div>
      <p>componen Minuman</p>
      <div v-for="n in dataM" :key="n.id">
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
    }
  }
}
</script>

<style>

</style>