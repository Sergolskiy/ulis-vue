<template>
  <div class="highlights__item">
    <div class="highlights__title">
      <div class="highlights__icon">
        <IconBathroom v-if="highlight.ico == 'bathroom'"/>
        <IconKitchen v-if="highlight.ico == 'kitchen'"/>
        <IconBedroom v-if="highlight.ico == 'bedroom'"/>
        <IconLivingRoom v-if="highlight.ico == 'living-room'"/>
        <IconOutside v-if="highlight.ico == 'outside'"/>
      </div>
      <div class="highlights__name">
        {{ highlight.name }}
      </div>
    </div>
    <div class="highlights__row"
          :class="{'highlights__row--open' : isOpen}"
    >
      <div class="highlights__col"
          v-for="(item, index) in highlight.list"
          :key="index"
      >
        <div class="highlights__item-content">
          {{ item }}
        </div>
      </div>

      <div class="highlights__dropdown">
        <div class="highlights__dropdown-btn"
              @click="isOpen = !isOpen"
        ></div>
      </div>
    </div>
  </div>
</template>

<script>
import IconBathroom from '../../../../../assets/img/card/bathroom.svg?skipsvgo'
import IconKitchen from '../../../../../assets/img/card/kitchen.svg?skipsvgo'
import IconBedroom from '../../../../../assets/img/card/bedroom.svg?skipsvgo'
import IconLivingRoom from '../../../../../assets/img/card/living-room.svg?skipsvgo'
import IconOutside from '../../../../../assets/img/card/outside.svg?skipsvgo'


export default {
  name: "Highlight",
  components: {
    IconBathroom,
    IconKitchen,
    IconBedroom,
    IconLivingRoom,
    IconOutside
  },

  props: {
    highlight: {
      type: Object,
      default: null,
    }
  },

  data: function () {
    return {
      isOpen: false,
    };
  },
}
</script>

<style scoped lang="scss">
@import "../../../../../scss/colors";
@import "../../../../../scss/mixins/mixins";

.highlights {

  &__item {

  }

  &__title {
    display: flex;
    margin-bottom: 8px;
  }

  &__icon {
    width: 20px;
    height: 20px;
    margin-right: 10px;
  }

  &__name {
    font-weight: 500;
    padding-top: 4px;
  }

  &__row {
    display: flex;
    flex-wrap: wrap;
    margin: 0 -4px;
    margin-bottom: 8px;
    position: relative;

    @include for-992{
      transition: .3s;
      padding-right: 34px;
      max-height: 30px;
      overflow: hidden;
    }

    &--open {
      max-height: 500px;
    }
  }

  &__col {
    padding: 0 4px;
    margin-bottom: 8px;
  }

  &__item-content {
    padding: 8px;
    font-size: 12px;
    border-radius: 8px;
    border: 1px solid $border-grey;
    height: 30px;
  }

  &__dropdown {
    position: absolute;
    right: 0;
    top: 0;


    @include from-992{
      display: none;
    }
  }

  &__dropdown-btn {
    background: $white;
    width: 30px;
    height: 30px;
    border: 1px solid $border-grey;
    border-radius: 8px;
    cursor: pointer;
    background-image: url("../../../../../assets/img/arrow.svg");
    background-repeat: no-repeat;
    background-position: center;
    background-size: 12px;
  }

  &__row--open &__dropdown-btn{
    transform: rotate(180deg);
  }

}

</style>