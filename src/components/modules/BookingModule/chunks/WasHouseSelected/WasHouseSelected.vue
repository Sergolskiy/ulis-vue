<template>
  <div class="was-house-selected"
       :class="{
        'was-house-selected--error' : type === 'error',
        'was-house-selected--success' : type === 'success',
        'was-house-selected--info' : type === 'info'
      }"
  >
    <div class="was-house-selected__inner">
      <div class="was-house-selected__ico">
        <!--        <StatusInfo v-if="type === 'info'" />-->
        <StatusInfoGreen v-if="type === 'success'"/>
        <!--        <StatusWarning v-if="type === 'warning'" />-->
        <StatusWarningRed v-if="type === 'error'"/>
      </div>
      <div class="was-house-selected__image">
        <img src="/src/assets/img/house-img/house.png" alt="img"/>
      </div>
      <div class="was-house-selected__txt">
        <div class="was-house-selected__name">
          {{ name }}
        </div>
        <div class="was-house-selected__caption">
          <span v-if="type === 'info'">На сайті ти обрав цей будинок.</span>
          <span class="was-house-selected__caption-success" v-if="type === 'success'">Ура, на дати, які ти обрав, будинок вільний!</span>
          <!--          <span v-if="type === 'warning'"></span>-->
          <span class="was-house-selected__caption-error" v-if="type === 'error'">На жаль, на дати, які ти обрав, будинок недоступний!</span>
        </div>
      </div>

      <div class="was-house-selected__date" v-if="type !== 'success'">
        <CheckDate
            @click="$emit('openCalendar')"
        />
      </div>
    </div>
  </div>
</template>

<script>
import StatusInfoGreen from "@/assets/img/info-green.svg?skipsvgo";
// import StatusInfo from "@/assets/img/info.svg?skipsvgo";
// import StatusWarning from "@/assets/img/warning.svg?skipsvgo";
import StatusWarningRed from "@/assets/img/warning-red.svg?skipsvgo";
import CheckDate from "@/assets/img/check-date-ico.svg?skipsvgo";

export default {
  name: "WasHouseSelected",
  components: {
    StatusWarningRed,
    // StatusWarning,
    // StatusInfo,
    StatusInfoGreen,
    CheckDate,
  },

  emits: ['openCalendar'],

  props: {
    type: {
      type: String,
      default: null,
    },
    name: {
      type: String,
      default: null,
    },
  }


}
</script>

<style scoped lang="scss">
@import "../../../../../scss/colors";
@import "../../../../../scss/mixins/mixins";

.was-house-selected {
  border: 1px solid $border-grey;
  border-radius: 8px;
  margin-top: 4px;

  &--error {
    background: $warning-red;
    border: 1px solid $warning-red-border;
  }

  &--success {
    border-color: $green;
    background: $green-bg;
  }

  &--info {
    background: rgba(0, 0, 0, 0.05);
    border: 1px solid $border-grey;
  }

  &__inner {
    display: flex;
    padding: 16px;
  }

  &__ico {
    display: flex;
    align-items: center;
    margin-right: 8px;

    @include for-550 {
      display: none;
    }
  }

  &__image {
    img {
      max-width: 48px;
      max-height: 48px;
      width: 48px;
      height: 48px;
      object-fit: cover;
      border-radius: 8px;
    }
  }

  &__txt {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-left: 16px;
    max-width: calc(100% - 115px);
  }

  &__name {
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: 20px;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;

    @include for-550 {
      font-size: 14px;
      line-height: 18px
    }
  }

  &__caption {
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 20px;
    margin-top: 8px;
    color: $text-grey;

    @include for-550 {
      margin-top: 4px;
      font-size: 12px;
      line-height: 16px;
    }
  }

  &__caption-success {
    color: $green;
  }

  &__caption-error {
    color: $warning-red-border;
  }

  &__date {
    display: flex;
    align-items: center;
    margin-left: auto;
    cursor: pointer;
  }

}


</style>