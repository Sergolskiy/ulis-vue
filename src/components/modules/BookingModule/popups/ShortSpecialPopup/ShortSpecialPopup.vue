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

        <div class="short-special-popup__image">
          <img :src="shortSpecialPopupText.imgSrc" :alt="shortSpecialPopupText.imgAlt">
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

export default {
  name: "ShortSpecialPopup",
  components: {
    MainButton,
    Modal,
  },

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
      gap: 2px;
    }
  }

  &__btns-item {
    width: 100%;
    // max-width: 215px;

    .main-button {
      padding-left: 6px;
      padding-right: 6px;
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

    @include for-550 {
      width: 100vw;
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

    @include for-550 {
      padding: 0;
      margin: 0;
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