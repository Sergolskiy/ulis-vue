<template>
  <Splide class="card-slider" :options="{ rewind: true }" aria-label="My Favorite Images">

    <SplideSlide>
      <div class="card-house__photo-inner"
           :class="{'card-house__photo-inner--big' : detailedInfo}">
        <img class="card-house__photo-img"
             src="../../../../../assets/img/house.png" alt="house">
      </div>
    </SplideSlide>
    <SplideSlide>
      <div class="card-house__photo-inner"
           :class="{'card-house__photo-inner--big' : detailedInfo}">
        <img class="card-house__photo-img"
             src="../../../../../assets/img/house.png" alt="house">
      </div>
    </SplideSlide>

  </Splide>

  <div class="card-house__photo-scale">
    <IconScaleButton/>
  </div>


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
    }
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
    border-radius: 8px;
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
  }

  &__photo-img {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  &__photo-scale {
    position: absolute;
    right: 8px;
    bottom: 8px;
    width: 32px;
    height: 32px;
    border-radius: 4px;
    background: #8C6D46;
    cursor: pointer;
  }
}

.card-slider {
  &:deep(.splide__arrow) {
    opacity: 1;
    background: $black url("../../../../../assets/img/arrow-white.svg") center center no-repeat;

    svg {
      display: none;
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