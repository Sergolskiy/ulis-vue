<template>

  <div class="service-content service-content--cooking">

    <div class="service-cook">
      <div class="service-cook__large-title">
        Мої страви
      </div>
      <div class="service-cook__list">

        <Splide class="cocking-slider" :options="{ rewind: false, autoWidth: true, gap: 24, perPage: 3,}" aria-label="My Favorite Images">
          <SplideSlide v-for="(item, index) in slides" :key="index">
            <CookingSlider
                :item="item"
                :slides="slides"
            />
          </SplideSlide>
        </Splide>


      </div>
    </div>


  </div>

</template>

<script>
import MainButton from "@/components/UI/buttons/MainButton/MainButton.vue";
import CounterInput from "@/components/UI/inputs/CounterInput/CounterInput.vue";
import IconUAH from "@/assets/img/currencies.svg?skipsvgo";
import IconHeart from "@/assets/img/icon-heart.svg?skipsvgo";
import CookingSlider from "@/components/modules/BookingModule/chunks/CookingSlider/CookingSlider.vue";
import { Splide, SplideSlide } from '@splidejs/vue-splide';
import '@splidejs/vue-splide/css';

export default {
  name: "CookingService",
  components: {
    CookingSlider,
    MainButton,
    CounterInput,
    IconUAH,
    IconHeart,
    Splide,
    SplideSlide,
  },

  data() {
    return {
      slides: [
        {
          img: '/src/assets/img/service-img/dish02.png',
        },
        {
          img: '/src/assets/img/service-img/dish02.png',
        },
        {
          img: '/src/assets/img/service-img/dish02.png',
        },
        {
          img: '/src/assets/img/service-img/dish02.png',
        },
      ],
    }
  },

}
</script>

<style lang="scss" scoped>
@import "../../../../../../../scss/colors";
@import "../../../../../../../scss/mixins/mixins";

.service-cook{

  &__large-title {
    font-size: 32px;
    font-weight: 600;
    margin-bottom: 16px;
  }

  &__list {

  }




  &__footer {

  }

  &__btn {

  }

  &__counter {

  }

}

.cocking-slider {
  margin-bottom: 50px;

  &:deep(.splide__pagination) {
    display: none;
  }

  &:deep(.splide__arrows) {
    position: absolute;
    top: 100%;
    margin-top: 33px;
    width: 120px;
    left: 50%;
    margin-left: -60px;
  }

  &:deep(.splide__arrow) {
    opacity: 1;
    background: $black url("../../../../../../../assets/img/arrow-white.svg") center center no-repeat;

    svg {
      display: none;
    }

    &.splide__arrow {
      &[disabled] {
        pointer-events: none;
        background: $black url("../../../../../../../assets/img/arrow-grey.svg") center center no-repeat;
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