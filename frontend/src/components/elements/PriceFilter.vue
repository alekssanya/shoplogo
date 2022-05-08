<template>
  <div class="filter-price">
    <div class="filter-price__circle" aria-orientation=""></div>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="scss">
.filter-price {
  width: 100px;
  height: 25px;
  position: relative;
  background-color: violet;
  z-index: 1;
  &__circle {
    width: 10px;
    height: 10px;
    position: absolute;
    z-index: 20;
    border-radius: 50%;
    background-color: green;
  }
}
</style>