<template>
  <div class="card">
    <div class="card__link-wr">
      <img src="../../assets/img/test.jpg" alt="" class="card__img" />
      <p class="card__title">eqweqweqw eqwqwe qw</p>
      <div class="card__wr">
        <p class="card__price">123123123123</p>
        <star-rating :grade="4" />
      </div>
    </div>
    <div class="card__hover">
      <div class="card__hover-wr">
        <div class="card__hover-wrapper">
          <button class="card__hover-btn first-btn">
            <p class="card__hover-text">Add to cart</p>
          </button>
        </div>
        <div class="card__hover-wrapper">
          <button class="card__hover-btn second-btn">
            <p class="card__hover-text">Add to wishlist</p>
          </button>
        </div>
        <div class="card__hover-wrapper">
          <button class="card__hover-btn third-btn">
            <p class="card__hover-text">Add to compare</p>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import StarRating from "./StarRating.vue";
export default {
  components: { StarRating },
  methods: {
    goto() {
      console.log(this.$router)
      console.log(this.$route)
      console.log(this._id)
      this.$router.push(this.$route + "/" + this._id);
    },
  },
};
</script>

<style lang="scss">
.g-card-wr {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 282px;
  width: 214px;
  position: relative;
}
.card {
  border: 3px solid $dark-grey;
  height: 282px;
  width: 214px;
  background-color: $dark-grey;
  text-align: center;
  &__img {
    max-height: 225px;
    max-width: 214px;
  }

  &__title {
    max-width: 196px;
    padding: 7px;
    margin-top: -15px;
    background-color: white;
    border: 1px solid $dark-grey;
    border-radius: 4px;
    color: $light-green-text;
    font-size: 14px;
    margin-bottom: 10px;
  }

  &__price {
    font-size: 18px;
    margin-bottom: 5px;
  }

  &__wr {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  &__hover {
    display: none;

    &-wr {
      display: flex;
    }

    &-text {
      display: none;
    }
  }
}

.g-card-wr:hover {
  .card {
    background-color: $dark-green;
    border-color: $dark-green;

    &__wr {
      display: none;
    }

    &__hover {
      display: inline;
    }
  }
}

.first-btn,
.second-btn,
.third-btn {
  min-width: 24px;
  min-height: 24px;
  border-radius: 4px;
  border: none;
  background-color: white;
  background-repeat: no-repeat;
  .card__hover-text {
    display: none;
  }
}

.first-btn {
  background-image: url("../../assets/img/btncart.png");
}

.second-btn {
  background-image: url("../../assets/img/btncheck.png");
}

.third-btn {
  background-image: url("../../assets/img/btnarrows.png");
}

.first-btn:hover {
  background-image: url("../../assets/img/btncarthover.png");
}

.second-btn:hover {
  background-image: url("../../assets/img/btncheckhover.png");
}

.third-btn:hover {
  background-image: url("../../assets/img/btnarrowshover.png");
}

.card__hover-wrapper {
  display: flex;
  padding: 7px 5px;
  background-color: white;
}

.card__hover-wr {
  display: flex;
  justify-content: space-around;
  width: 200px;
}

.first-btn:hover,
.second-btn:hover,
.third-btn:hover {
  width: 110px;
  .card__hover-text {
    display: block;
    padding-left: 20px;
    line-height: 0.8;
  }
}
</style>