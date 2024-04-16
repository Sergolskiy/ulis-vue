<template>

  <div class="info-block"
       :class="{
        'info-block--error' : type === 'error',
        'info-block--success' : type === 'success'
      }"
  >
    <div class="info-block__inner">
      <div class="info-block__ico">
        <StatusInfo v-if="type === 'info'" />
        <StatusInfoGreen v-if="type === 'success'" />
        <StatusWarning v-if="type === 'warning'" />
        <StatusWarningRed v-if="type === 'error'" />
      </div>
      <div class="info-block__right">
        <div class="info-block__txt" v-html="text">
        </div>
      </div>
    </div>
  </div>


</template>

<script>
import StatusInfo from '../../../../assets/img/info.svg?skipsvgo'
import StatusWarning from '../../../../assets/img/warning.svg?skipsvgo'
import StatusWarningRed from '../../../../assets/img/warning-red.svg?skipsvgo'
import StatusInfoGreen from '../../../../assets/img/info-green.svg?skipsvgo'

export default {
  name: "InfoBlock",

  components: {
    StatusInfo,
    StatusWarning,
    StatusWarningRed,
    StatusInfoGreen,
  },

  props: {
    text: {
      type: String,
      default: null,
    },

    type: {
      type: String,
      default: 'info'
    }
  }

}
</script>

<style scoped lang="scss">
@import "../../../../scss/colors";
@import "../../../../scss/mixins/mixins";

.info-block {

  &__inner {
    display: flex;
  }

  &__ico {
    display: flex;
  }

  &__right {
    margin-left: 10px;
  }

  &__txt {
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 18px;
  }

  &--error {
    padding: 16px;
    background: $warning-red;
    border: 1px solid $warning-red-border;
    border-radius: 8px;

    .info-block__right {
      margin-left: 16px;

      @include for-550 {
        margin-left: 8px;
      }
    }
  }

  &--success {
    padding: 16px;
    background: $green-bg;
    border: 1px solid $green;
    border-radius: 8px;

    .info-block__right {
      margin-left: 16px;

      @include for-550 {
        margin-left: 8px;
      }
    }
  }

}


</style>