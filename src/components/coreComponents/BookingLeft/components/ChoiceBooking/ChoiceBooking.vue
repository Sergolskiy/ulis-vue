<template>
  <div class="choice-booking">
    <div class="choice-booking__inner">
      <div class="choice-booking__title">
        Твій вибір
      </div>
      <div class="choice-booking__info"
           v-if="Booking.data.activeStep === 1">
        <InfoBlock
            :text="'Ти поки не вніс жодної інформації, як тільки ти заповниш поля на цьому етапі, вони з’являться тут.'"
            :type="'warning'"
        />
      </div>

      <div class="choice-booking__listing custom-row"
           v-if="Booking.data.activeStep > 1"
      >
        <div class="choice-booking__listing-col custom-col">
          <CalendarDays
              :Booking="Booking"
              :duration="false"
          />
<!--          <div class="choice-booking__listing-date">-->
<!--            <div class="choice-booking__listing-date-col">-->
<!--              <div class="choice-booking__listing-date-label">-->
<!--                Заїзд-->
<!--              </div>-->
<!--              <div class="choice-booking__listing-date-field">-->
<!--                пн, 4 груд. 2023-->
<!--              </div>-->
<!--            </div>-->
<!--            <div class="choice-booking__listing-date-col">-->
<!--              <div class="choice-booking__listing-date-label">-->
<!--                Виїзд-->
<!--              </div>-->
<!--              <div class="choice-booking__listing-date-field">-->
<!--                чт, 5 груд. 2023-->
<!--              </div>-->
<!--            </div>-->
<!--          </div>-->
        </div>
        <div class="choice-booking__listing-col custom-col">
          <div class="choice-booking__listing-item">
            <div class="choice-booking__listing-ico">
              <IconMap/>
            </div>
            <div class="choice-booking__listing-txt">
              Київ, Дудки
            </div>
          </div>
        </div>
        <div class="choice-booking__listing-col custom-col custom-col--50">
          <div class="choice-booking__listing-item">
            <div class="choice-booking__listing-ico">
              <IconPeople/>
            </div>
            <div class="choice-booking__listing-txt">
              2 дорослих
            </div>
          </div>
        </div>
        <div class="choice-booking__listing-col custom-col custom-col--50">
          <div class="choice-booking__listing-item">
            <div class="choice-booking__listing-ico">
              <IconMan/>
            </div>
            <div class="choice-booking__listing-txt">
              1 дитина
            </div>
          </div>
        </div>
        <div class="choice-booking__listing-col custom-col custom-col--50">
          <div class="choice-booking__listing-item">
            <div class="choice-booking__listing-ico">
              <IconAnimal/>
            </div>
            <div class="choice-booking__listing-txt">
              1 тварина
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import InfoBlock from "../../../../UI/labels/InfoBlock/InfoBlock.vue";
import IconMap from '../../../../../assets/img/map.svg?skipsvgo'
import IconPeople from '../../../../../assets/img/people.svg?skipsvgo'
import IconMan from '../../../../../assets/img/man.svg?skipsvgo'
import IconAnimal from '../../../../../assets/img/animal.svg?skipsvgo'
import CalendarDays from "@/components/modules/BookingModule/chunks/CalendarDays/CalendarDays.vue";

export default {
  name: "ChoiceBooking",
  components: {
    CalendarDays,
    InfoBlock,
    IconMap,
    IconPeople,
    IconMan,
    IconAnimal,
  },

  props: {
    Booking: {
      type: Object,
      default: null,
    },
  },

}
</script>

<style scoped lang="scss">
@import "../../../../../scss/colors";
@import "../../../../../scss/mixins/mixins";

.choice-booking {
  border: 1px solid $border-grey;
  border-radius: 8px;
  margin-top: 9px;
  //margin-bottom: 16px;
  height: 100%;

  @include for-992 {
    margin-top: 0;
  }

  &__inner {
    padding: 16px;
  }

  &__title {
    font-size: 20px;
    font-weight: 700;
    line-height: 24px;
  }

  &__info {
    margin-top: 16px;
  }

  &__listing {
    margin-top: 16px;
  }

  &__listing-date {
    padding: 8px;
    display: flex;
    border-radius: 4px;
    border: 1px solid $border-grey;
    min-height: 56px;
  }

  &__listing-date-col {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 50%;

    &:nth-child(odd) {
      position: relative;

      &:after {
        content: '';
        position: absolute;
        right: 0;
        top: 50%;
        transform: translateY(-50%) translateX(50%);
        height: 24px;
        width: 1px;
        background: $border-grey;
      }
    }

    &:nth-child(even) > div {
      text-align: right;
    }
  }

  &__listing-date-label {
    font-size: 12px;
    margin-bottom: 4px;
  }

  &__listing-date-field {
    font-size: 16px;
    font-weight: 500;

    @include for-768 {
      font-size: 14px;
    }
  }

  &__listing-col {
    margin-bottom: 16px;
    padding: 0 8px;

    @include for-768 {
      padding: 0 4px;
    }
  }

  &__listing-item {
    display: flex;
    align-items: flex-end;
    border-radius: 4px;
    min-height: 40px;
    border: 1px solid $border-grey;
    padding: 0 8px 8px;
  }

  &__listing-ico {
    margin-right: 8px;
    width: 24px;
    height: 24px;
  }

  &__listing-txt {
    font-size: 16px;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }

}


</style>