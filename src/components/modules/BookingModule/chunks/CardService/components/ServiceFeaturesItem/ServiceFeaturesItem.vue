<template>
  <div class="card-service__features-item features__item">
    <div class="card-service__features-ico features__ico">
      <IconPeople v-if="itemType.mans"/>
      <IconClock v-if="itemType.time"/>
      <IconChildren v-if="itemType.children"/>
      <IconFood v-if="itemType.cooking"/>
    </div>
    <div class="card-service__features-txt features__name">
      <span v-if="itemType.mans">{{ itemType.mans }}</span>
      <span v-if="itemType.time">{{ itemType.time }}</span>
      <span v-if="itemType.children">{{ itemType.children }}</span>
      <span v-if="itemType.cooking">{{ itemType.cooking }}</span>
    </div>
  </div>
</template>

<script>
import IconPeople from "@/assets/img/icons/icon-people-16px-grey.svg?skipsvgo";
import IconChildren from "@/assets/img/icons/icon-children-16px-grey.svg?skipsvgo";
import IconClock from "@/assets/img/icons/icon-clock-16px-grey.svg?skipsvgo";
import IconFood from "@/assets/img/icons/icon-food-16px-grey.svg?skipsvgo";

export default {
  name: "ServiceFeaturesItem",
  components: {
    IconClock,
    IconPeople,
    IconChildren,
    IconFood,
  },

  props: {
    itemType: Object,
  },



}
</script>

<style scoped lang="scss">
@import "../../../../../../../scss/colors";
@import "../../../../../../../scss/mixins/mixins";

.features{

  &__item {
    margin-bottom: 4px;
    display: flex;
    align-items: center;
    padding: 0 8px;
  }

  &__ico {
    min-width: 24px;
    width: 24px;
    height: 24px;
    margin-right: 8px;

    @include for-680 {
      min-width: 20px;
      width: 20px;
      height: 20px;
    }

    svg{
      width: 100%;
      height: 100%;
    }
  }

  &__name {
    padding-top: 4px;
    color: $text-grey;
    font-size: 16px;

    @include for-680 {
      font-size: 14px;
      padding-top: 2px;
    }
  }
}

</style>