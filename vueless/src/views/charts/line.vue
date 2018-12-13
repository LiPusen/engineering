<template>
  <div class='chart-container'>
    <v-line-marker height='100%' width='100%'></v-line-marker>
  </div>
</template>

<script>

export default {
  name: 'lineChart',
}
</script>

<style scoped>
.chart-container{
  position: relative;
  padding:20px;
  width: 100%;
  height:85vh;
}
</style>

