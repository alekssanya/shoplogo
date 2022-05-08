<template>
  <div class="home__wr">
    <category-nav />
    <router-view />
  </div>
</template>

<script>
// @ is an alias to /src
import CategoryNav from "../components/elements/CategoryNav.vue";
export default {
  name: "Home",
  components: {
    CategoryNav,
  }
};
</script>
