<template>
  <div class="mob-detail-booking">
    <div class="mob-detail-booking__inner">
      <div class="mob-detail-booking__name">
        Деталі бронювання
      </div>
      <div class="mob-detail-booking__overview">
        <div class="mob-detail-booking__overview-item">
          <div class="mob-detail-booking__overview-ico">
            <IconMap/>
          </div>
          <div class="mob-detail-booking__overview-txt">
            Київ, Дудки
          </div>
        </div>
        <div class="mob-detail-booking__overview-item">
          <div class="mob-detail-booking__overview-ico">
            <IconPeople/>
          </div>
          <div class="mob-detail-booking__overview-txt">
            2 дорослих, 1 дитина
          </div>
        </div>
        <div class="mob-detail-booking__overview-item">
          <div class="mob-detail-booking__overview-ico">
            <IconDeport/>
          </div>
          <div class="mob-detail-booking__overview-txt">
            4 груд. - 5 груд.
          </div>
        </div>
        <div class="mob-detail-booking__overview-item mt-2">
          <div class="mob-detail-booking__overview-txt">
            Всього:
          </div>
          <div class="mob-detail-booking__overview-price">
            4600 <IconUAH/>
          </div>
        </div>
      </div>

      <MainButton
          class="mob-detail-booking__btn"
          :label="'Переглянути'"
          :ico="'arrow'"
          :icoPosition="'right'"
          @click="$emit('openPopup')"
      />

    </div>
  </div>
</template>

<script>
import IconPeople from "@/assets/img/icons/icon-people-16px-grey.svg?skipsvgo";
import IconMap from "@/assets/img/icons/icon-map-16px-grey.svg?skipsvgo";
import IconBuildings from "@/assets/img/icons/icon-buildings-16px-grey.svg?skipsvgo";
import IconDeport from "@/assets/img/icons/icon-deport-16px-grey.svg?skipsvgo";
import MainButton from "@/components/UI/buttons/MainButton/MainButton.vue";
import IconUAH from "@/assets/img/currencies.svg?skipsvgo";

export default {
  name: "MobileDetailBooking",
  components: {IconUAH, MainButton, IconDeport, IconBuildings, IconMap, IconPeople}
}
</script>


<style scoped lang="scss">
@import "../../../../../scss/colors";

.mob-detail-booking {
  border: 1px solid $border-grey;
  border-radius: 8px;
  margin-bottom: 16px;

  &__inner{
    padding: 16px;
  }

  &__name {
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: 24px
  }

  &__overview {
    margin-top: 12px;
  }

  &__overview-item {
    display: flex;
    margin-bottom: 4px;
  }

  &__overview-ico {
    width: 16px;
    height: 16px;
    margin-right: 8px;

    svg {
      display: block;
    }
  }

  &__overview-txt {
    color: $text-grey;
    font-size: 12px;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    padding-top: 2px;
  }

  &__overview-price {
    display: flex;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 20px;
    margin-left: auto;

    svg {
      height: 16px;
      width: 16px;
    }
  }

  &__btn {
    margin-top: 12px;
  }
}

</style>