<template>
  <Splide class="card-slider" :options="{ rewind: false }" aria-label="My Favorite Images">

    <SplideSlide v-for="(item, index) in images" :key="index">
      <div class="card-house__photo-inner"
           :class="{
              'card-house__photo-inner--big' : detailedInfo,
              'card-house__photo-inner--full' : popup,
            }">
        <img class="card-house__photo-img"
             :src="item.src" :alt="item.alt">
      </div>
    </SplideSlide>
<!--    <SplideSlide>-->
<!--      <div class="card-house__photo-inner"-->
<!--           :class="{'card-house__photo-inner&#45;&#45;big' : detailedInfo}">-->
<!--        <img class="card-house__photo-img"-->
<!--             src="../../../../../assets/img/house.png" alt="house">-->
<!--      </div>-->
<!--    </SplideSlide>-->

  </Splide>




</template>

<script>
import IconScaleButton from "@/assets/img/scale-button.svg";
import { Splide, SplideSlide } from '@splidejs/vue-splide';
import '@splidejs/vue-splide/css';

export default {
  name: "CardSlider",
  components: {
    IconScaleButton,
    Splide,
    SplideSlide,
  },

  props: {
    detailedInfo: {
      type: Boolean,
      default: false,
    },
    popup: {
      type: Boolean,
      default: false,
    },
    images: {
      type: Array,
      default: false,
    },
  }


}
</script>

<style scoped lang="scss">
@import "../../../../../scss/colors";
@import "../../../../../scss/mixins/mixins";

.card-house {

  &__photo-inner {
    height: 256px;
    width: 256px;
    min-width: 256px;
    position: relative;
    // border-radius: 8px;
    overflow: hidden;

    @include for-550 {
      width: 100%;
      min-width: 100%;
      margin-bottom: 16px;
    }

    &--big {
      @include from-992 {
        height: 369px;
        width: 369px;
        min-width: 369px;
      }
    }

    &--full {
      height: auto;
      width: 100%;
      margin-bottom: 0;
    }
  }

  &__photo-img {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    object-fit: cover;
  }


}

.card-slider {

  @include for-550 {
    height: 100%;
  }

  &:deep(.splide__arrow) {
    opacity: 1;
    background: $black url("../../../../../assets/img/arrow-white.svg") center center no-repeat;

    svg {
      display: none;
    }

    &.splide__arrow {
      &[disabled] {
        pointer-events: none;
        background: $black url("../../../../../assets/img/arrow-grey.svg") center center no-repeat;
      }
    }

    &.splide__arrow--prev {
      transform: translateY(-50%) rotate(-180deg);
    }
  }

  &:deep(.splide__pagination__page) {
    background: rgba(0, 0, 0, 0.30);
    border: 0;
    opacity: 1;

    &.is-active {
      transform: scale(1);
      background: $black;
    }
  }
}

</style>