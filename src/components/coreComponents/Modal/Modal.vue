<template>
  <div class="modal-component" @mousedown.self="close" :class="{'open': show}">
    <div class="modal-component__wrapper">
      <div class="modal-component__inner">
        <div class="modal-component__content">
          <div class="modal-component__close" @click="close">
            <CloseIcon/>
          </div>

          <div class="modal-component__header">
            <slot name="header"></slot>
          </div>
          <div class="modal-component__body">
            <slot name="body"></slot>
          </div>
          <div class="modal-component__footer">
            <slot name="footer"></slot>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CloseIcon from '../../../../src/assets/img/UI-group/close-ico.svg?skipsvgo'
export default {
  name: "Modal",
  components: {
    CloseIcon
  },
  data() {
    return {
      show: false,
    }
  },

  mounted() {
    setTimeout(() => {
      this.show = true;
    }, 50);
  },

  methods: {
    close() {
      this.$emit('close');
    },


  }
}
</script>

<style lang="scss">
  @import "src/scss/colors";
  @import "src/scss/mixins/mixins";

  .modal-component {
    position: fixed;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(11, 18, 44, 0.8);
    z-index: -1;
    opacity: 0;
    visibility: hidden;
    overflow-y: auto;
    transition: opacity 0.3s;

    &.open {
      z-index: 350;
      opacity: 1;
      visibility: visible;
    }

    &__wrapper {
      margin: 40px auto;
      max-width: 622px;
      width: auto;
      position: relative;

      @media (max-width: 650px) {
        margin: 40px 15px;
      }
    }

    &__inner {
      background-color: $white;
      border-radius: 12px;
    }

    &__close {
      position: absolute;
      cursor: pointer;
      top: 16px;
      right: 16px;
      font-size: 0;

      svg {
        width: 32px;
        height: 32px;
      }
    }

    &__content {
      padding: 48px 56px;

      @include for-680 {
        padding: 30px 24px;
      }
    }

    &__header {
      font-size: 24px;
      line-height: 29px;
      font-weight: 800;
      margin-bottom: 16px;
    }
  }
</style>