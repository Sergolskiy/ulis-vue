<template>
  <Modal
      @close="$emit('close')"
      class="custom-popup"
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
              class="w-100 btn--big"
              :secondary="true"
              :label="deletePopupText.no"
              @click="$emit('close')"
          />
        </div>
        <div v-if="deletePopupText.yes" class="custom-popup__btns-item">
          <MainButton
              class="w-100 btn--big"
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
  name: "DeleteHousePopup",
  components: {MainButton, Modal},

  props: {
    deletePopupText: {
      type: Object,
    },

  },

}
</script>

<style scoped lang="scss">

</style>