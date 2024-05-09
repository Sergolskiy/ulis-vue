<template>
  <div class="slider-popup">
    <div class="slider-popup__inner">
      <div class="slider-popup__close">
        <CloseBtn
            @click="$emit('closeSliderPopup')"
        />
      </div>
      <div class="slider-popup__content">
<!--            :detailedInfo="detailedInfo"-->
        <CardSlider
            class="slider-popup__slider"
            :images="images"
            :popup="true"
        />
      </div>
    </div>
  </div>
</template>

<script>
import CardSlider from "@/components/modules/BookingModule/chunks/CardSlider/CardSlider.vue";
import CloseBtn from "@/assets/img/close-btn.svg";

export default {
  name: "SliderPopup",
  components: {CloseBtn, CardSlider},

  emits: ['closeSliderPopup'],

  props: {
    images: {
      type: Array,
    }
  },

  mounted() {
    setTimeout(() => {
      document.addEventListener('click', this.eventListener)
    } ,50)
  },

  methods: {
    eventListener(event) {
      if(!event.target.closest('.slider-popup__inner')) {
        this.$emit('closeSliderPopup')
      }
    }
  },

  beforeUnmount() {
    document.removeEventListener('click', this.eventListener)
  },

}
</script>

<style scoped lang="scss">
@import "../../../../../scss/colors";
@import "../../../../../scss/mixins/mixins";

.slider-popup {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.9);
  overflow: auto;
  z-index: 100;

  &__inner {
    position: relative;
    max-width: 954px;
    margin: 100px auto 100px;
    width: 100%;
    padding: 0 16px;

    @include for-768 {
      margin-top: 188px;
    }
  }

  &__close {
    position: absolute;
    top: 15px;
    right: 30px;
    cursor: pointer;
    z-index: 1000;
  }

  &__content {

  }

  &__slider {
    border-radius: 8px;
    overflow: hidden;
  }

}


</style>