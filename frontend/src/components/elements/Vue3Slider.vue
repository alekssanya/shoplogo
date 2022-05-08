<template>
  <div class="slaider-vue3">
    <div class="slaider-vue3__list" v-for="(item, index) in items" :key="index">
      <img :src="require('@/assets/img/' + items[index])" class="slaider-vue3__img">
    </div>
  </div>
</template>

<script>
/*
<ul class="slaider-vue3__dots">
        <li class="slaider-vue3__dot"><span :style="dots.style"></span></li>
      </ul>
    </div>
    <div class="slaider-vue__arrows" v-if="arrow != ''">
      <button>
        <img :src="arrow" alt="" class="slaider-vue__arrow-left" />
      </button>
      <button>
        <img :src="arrow" alt="" class="slaider-vue__arrow-right" />
      </button>
*/
export default {
  name: "Vue3Slider",
  data() {
    return {};
  },
  props: {
    items: {
      type: Object,
      default: () => {
        return {};
      },
      dots: {
        style: {
          type: String,
          default: "",
        },
      },
      loop: {
        type: Boolean,
        default: false,
      },
      slideCount: {
        type: Number,
        default: 0,
      },
      arrow: {
        type: String,
        default: "",
      },
      animation: {
        type: String,
        default: "",
      },
      margin: {
        type: Number,
        default: 0,
      },
    },
  },
};
</script>

<style>
</style>