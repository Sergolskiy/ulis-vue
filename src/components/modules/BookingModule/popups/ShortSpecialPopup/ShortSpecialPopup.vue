<template>
  <Modal
      @close="$emit('closeShortSpecialPopup')"
      class="custom-popup small-popup short-special-popup"
  >
    <template v-slot:header>
      <span v-if="shortSpecialPopupText.title">{{shortSpecialPopupText.title}}</span>
    </template>
    <template v-slot:body>
      <div class="custom-popup__content">

        <template v-if="shortSpecialPopupText.txt.length > 0">
          <p v-html="shortSpecialPopupText.txt"></p>
        </template>

        <div class="short-special-popup__image"
          v-if="shortSpecialPopupText.img"
        >
          <template v-if="shortSpecialPopupText.imgType === 'ico'">
            <SVGSignIn v-if="shortSpecialPopupText.imgName == 'signInPopup'" />
          </template>
          <template v-if="shortSpecialPopupText.imgType === 'ico'">
            <SuccessBooking v-if="shortSpecialPopupText.imgName == 'specialSuccessBookingPopup'" />
          </template>

          <template v-if="shortSpecialPopupText.imgName == 'specialOfferPopup'">
            <img
              src="../../../../../assets/img/popup-img/special-offer-artboard.png"
              alt="special-offer"
            >
          </template>
        </div>
      </div>
    </template>
    <template v-slot:footer>
      <div class="custom-popup__btns">
        <div v-if="shortSpecialPopupText.no"  class="custom-popup__btns-item">
          <MainButton
              :label="shortSpecialPopupText.no"
              :secondary="true"
              @click="$emit('closeShortSpecialPopup')"
          />
        </div>
        <div v-if="shortSpecialPopupText.yes"  class="custom-popup__btns-item short-special-popup__confirm-btn nowrap">
          <MainButton
              :label="shortSpecialPopupText.yes"
              @click="$emit('confirm')"
          />
        </div>
      </div>
    </template>
  </Modal>
</template>

<script>
import Modal from "@/components/coreComponents/Modal/Modal.vue";
import MainButton from "@/components/UI/buttons/MainButton/MainButton.vue";

import SVGSignIn from '@/assets/img/popup-img/sign-in-artboard.svg?skipsvgo'
import SuccessBooking from '@/assets/img/popup-img/sucess-booking.svg?skipsvgo'

export default {
  name: "ShortSpecialPopup",
  components: {
    MainButton,
    Modal,

    SVGSignIn,
    SuccessBooking,
  },

  emits: [
    'closeShortSpecialPopup',
    'confirm',
  ],

  props: {
    shortSpecialPopupText: {
      type: Object,
    },
  },

  data() {
    return {

    }
  }

}
</script>

<style scoped lang="scss">
@import "../../../../../scss/mixins/mixins";

.custom-popup {

  &__btns {
    display: flex;
    gap: 16px;
    justify-content: space-between;

    @include for-550 {
      gap: 8px;
    }
  }

  &__btns-item {
    width: 100%;
    // max-width: 215px;

    .main-button {
      padding-left: 13px;
      padding-right: 13px;
    }

    // @include for-550 {
    //   .main-button {
    //     padding-left: 0;
    //     padding-right: 0;
    //   }
    // }
  }

}

.short-special-popup {


  // @include for-550 {
  //   top: 55px;
  // }

  &__title{
    font-size: 20px;
    font-weight: 600;
    margin-bottom: 16px;
    text-align: center;
  }

  &__image{
    margin-bottom: 24px;
    display: flex;
    justify-content: center;

    @include for-550 {
      width: calc(100% + 32px);
      transform: translateX(-16px);
      overflow: hidden;
      margin-bottom: 32px;
    }

    img{ 
      width: 100%;
    }
  }

  &__confirm-btn {

  }

  :deep(.modal-component__wrapper) {
    max-width: 446px;

    @media (max-width: 650px){
      margin: 40px auto;
    }

    @include for-550 {
      padding: 0;
      margin-left: 0 auto;
      margin-right: 0 auto;
    }
  }
  :deep(.modal-component__inner) {

    @include for-550 {
      border-radius: 0;
    }
  }
  :deep(.modal-component__content) {
    padding: 16px;

    @include for-550 {
      padding: 24px 16px 32px 16px;
    }
  }
}

</style>