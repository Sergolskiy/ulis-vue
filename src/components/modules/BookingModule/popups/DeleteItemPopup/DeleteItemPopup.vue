<template>
  <Modal
      @close="$emit('closeDeletePopup')"
      class="custom-popup small-popup"
  >
    <template v-slot:header>
      <span v-if="deletePopupText.title">{{deletePopupText.title}}</span>
    </template>
    <template v-slot:body>
      <div class="custom-popup__content">
        <template v-if="deletePopupText.txt.length > 0">
          <p v-html="deletePopupText.txt"></p>
        </template>
      </div>
    </template>
    <template v-slot:footer>
      <div class="custom-popup__btns">
        <div v-if="deletePopupText.no" class="custom-popup__btns-item">
          <MainButton
              class="w-100"
              :secondary="true"
              :label="deletePopupText.no"
              @click="$emit('closeDeletePopup')"
          />
        </div>
        <div v-if="deletePopupText.yes" class="custom-popup__btns-item">
          <MainButton
              class="w-100 red"
              :label="deletePopupText.yes"
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
  name: "DeleteItemPopup",
  components: {MainButton, Modal},

  props: {
    deletePopupText: {
      type: Object,
    },

  },

}
</script>

<style scoped lang="scss">

.custom-popup {

  &__content {

  }

  &__btns {
    display: flex;
    gap: 16px;
  }

  &__btns-item {
    width: 100%;
  }

}

</style>