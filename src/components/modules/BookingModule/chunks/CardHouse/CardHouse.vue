<template>
  <div class="card-house">
    <div class="card-house__inner">
      <div class="card-house__section">
        <div class="card-house__section-head">
          <div class="card-house__photo"
              :class="{'card-house__photo--big' : detailedInfo}"
          >
            <img class="card-house__photo-img"
                src="../../../../../assets/img/house.png" alt="house">

            <div class="card-house__photo-scale">
              <IconScaleButton/>
            </div>
          </div>
          <div class="card-house__overview">
            <div class="card-house__name">
              Будинок на 1 спальню у лісі
            </div>
            <div class="card-house__features features"
                :class="{'card-house__features--active' : detailedInfo}"
            >
              <div class="card-house__features-item features__item">
                <div class="card-house__features-ico features__ico">
                  <IconPeople/>
                </div>
                <div class="card-house__features-txt features__name">
                  Для 2-х гостей (+1)
                </div>
              </div>
              <div class="card-house__features-item features__item">
                <div class="card-house__features-ico features__ico">
                <IconMap/>
                </div>
                <div class="card-house__features-txt features__name">
                  Київ, Дудки
                </div>
              </div>
              <div class="card-house__features-item features__item">
                <div class="card-house__features-ico features__ico">
                  <IconBuildings/>
                </div>
                <div class="card-house__features-txt features__name">
                  36 м<sup>2</sup>
                </div>
              </div>
            </div>

            <div class="card-house__description"
                v-if="detailedInfo"
            >
              <p>
                Будинок з однією спальною кімнатою обладнано функціональною кухнею та санвузлом. 
                спальні є місце для роботи, а у вітальні є камін та панорамні вікна з чудовими краєвидами. Будинок має садові меблі та мангал.
              </p>
                Спальні місця:<br>
                - спальня 1 - двоспальне ліжко шир. 160 см,<br>
                - вітальня - диван (додактове місце). <br><br>
                Заїзд з 15:00. Виїзд до 11:00.<br>
                Ми pet-friendly, тому завжди раді вашим пухнастим друзям.
            </div>
            <div class="card-house__price-block"
                v-if="!detailedInfo"
            >
              <div class="card-house__overview-txt">
                1 ніч, 2 дорослих
              </div>
              <div class="card-house__price">
                <IconUAH/>
                4 600
              </div>
            </div>
            <div class="card-house__more"
                 v-if="!detailedInfo"
            >
              <div class="card-house__more-btn">
                <MainButton 
                  :label="'Детальніше'"
                  :ico="'plus'"
                  :icoPosition="'right'"
                  @click="detailedInfo = true"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="card-house__section"
           v-if="detailedInfo"
      >
        <div class="card-house__toggle-section">
          <div class="card-house__toggle-col">
            <MainButton 
              :label="'Зручності'"
              :secondary="comfortsCalendarToggle"
              @click="comfortsCalendarToggle = false"
            />
          </div>
          <div class="card-house__toggle-col">
            <MainButton 
              :label="'Календар доступності'"
              :secondary="!comfortsCalendarToggle"
              @click="comfortsCalendarToggle = true"
            />
          </div>
        </div>
      </div>

      <div class="card-house__section"
           v-if="detailedInfo && !comfortsCalendarToggle"
      >
        <Highlights 
          :highlights="highlights"
        />
      </div>

      <div class="card-house__section"
           v-if="detailedInfo && comfortsCalendarToggle"
      >
        <div class="card-house__calendar">
          <MainCalendar
            :Booking="Booking"
            :multiCalendars="true"
            :mobile-single="true"
          />
        </div>

        <div class="card-house__calendar-days">
          <CalendarDays
            :Booking="Booking"
          />
        </div>
      </div>

      <div class="card-house__section"
           v-if="detailedInfo"
      >
        <div class="card-house__price-section">
          <div class="card-house__price-row">
            <div class="card-house__price-col card-house__price-col--left">
              <div class="card-house__overview-txt">
                + 550 грн за додаткового гостя
              </div>
              <div class="card-house__overview-txt">
                + 600 грн за прибирання за пухнастиком
              </div>
            </div>
            <div class="card-house__price-col card-house__price-col--right">
              <div class="card-house__house-number">
                <DefaultSelect
                    :options="[`1.1`, '1.2', '2.1']"
                    :selected="'1.1'"
                />
              </div>

              <div class="card-house__price-block">
                <div class="card-house__overview-txt">
                  1 ніч, 2 дорослих
                </div>
                <div class="card-house__price">
                  <IconUAH/>
                  4 600
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


      <div class="card-house__section"
           v-if="detailedInfo"
      >
        <div class="card-house__bottom">
          <div class="card-house__bottom-btn">
            <MainButton 
              :label="'Закрити'"
              :secondary="true"
              @click="detailedInfo = false"
            />
          </div>
          <div class="card-house__bottom-btn">
            <MainButton 
              :label="'Забронювати'"
            />
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
import MainButton from "../../../../UI/buttons/MainButton/MainButton.vue";
import DefaultSelect from "../../../../UI/selections/DefaultSelect/DefaultSelect.vue";
import Highlights from "../../chunks/Highlights/Highlights.vue";
import MainCalendar from "../../chunks/MainCalendar/MainCalendar.vue";
import CalendarDays from "@/components/modules/BookingModule/chunks/CalendarDays/CalendarDays.vue";

import IconScaleButton from '../../../../../assets/img/scale-button.svg?skipsvgo'
import IconUAH from '../../../../../assets/img/currencies.svg?skipsvgo'
import IconMap from '../../../../../assets/img/icon-map-16px-grey.svg?skipsvgo'
import IconPeople from '../../../../../assets/img/icon-people-16px-grey.svg?skipsvgo'
import IconBuildings from '../../../../../assets/img/icon-buildings-16px-grey.svg?skipsvgo'
import IconBathroom from '../../../../../assets/img/card/bathroom.svg?skipsvgo'
import IconKitchen from '../../../../../assets/img/card/kitchen.svg?skipsvgo'
import IconBedroom from '../../../../../assets/img/card/bedroom.svg?skipsvgo'
import IconLivingRoom from '../../../../../assets/img/card/living-room.svg?skipsvgo'
import IconOutside from '../../../../../assets/img/card/outside.svg?skipsvgo'


export default {
  name: "CardHouse",
  components: {
    MainButton,
    DefaultSelect,
    Highlights,
    MainCalendar,
    CalendarDays,
    IconScaleButton,
    IconUAH,
    IconMap,
    IconPeople,
    IconBuildings,
    IconBathroom,
    IconKitchen,
    IconBedroom,
    IconLivingRoom,
    IconOutside
  },

  props: {
    Booking: {
      type: Object,
      default: null,
    }
  },

  data: function () {
    return {
      detailedInfo: false,
      comfortsCalendarToggle: false,
      highlights: [
        {
          name: 'Ванна кімната',
          ico: 'bathroom',
          list: [
            'Косметичні засоби',
            'Комплект рушників',
            'Фен'
          ]
        },
        {
          name: 'Кухня',
          ico: 'kitchen',
          list: [
            'Приклад категорії',
            'Приклад категорії',
            'Приклад категорії',
            'Приклад категорії',
            'Приклад категорії',
            'Приклад категорії',
            'Приклад категорії',
            'Приклад категорії',
          ]
        },
        {
          name: 'Спальня',
          ico: 'bedroom',
          list: [
            'Приклад категорії',
            'Приклад категорії',
            'Приклад категорії',
            'Приклад категорії',
            'Приклад категорії',
            'Приклад категорії',
          ]
        },
        {
          name: 'Вітальня',
          ico: 'living-room',
          list: [
            'Приклад категорії',
            'Приклад категорії',
          ]
        },
        {
          name: 'Надворі',
          ico: 'outside',
          list: [
            'Приклад категорії',
            'Приклад категорії',
            'Приклад категорії',
            'Приклад категорії',
            'Приклад категорії',
            'Приклад категорії',
          ]
        },
      ],
    };
  },
}
</script>

<style scoped lang="scss">
@import "../../../../../scss/colors";
@import "../../../../../scss/mixins/mixins";

.card-house{
  
  &__inner {
    padding: 16px;
    border: 1px solid $border-grey;
    border-radius: 8px;
  }

  &__section {
    
  }

  &__section-head{
    display: flex;

    @include for-550 {
      flex-direction: column;
    }
  }

  &__photo {
    height: 256px;
    width: 256px;
    min-width: 256px;
    position: relative;
    border-radius: 8px;
    overflow: hidden;

    @include for-550 {
      width: 100%;
      min-width: 100%;
      margin-bottom: 16px;
    }

    &--big {
      @include from-992 {
        height: 369px;
        width: 369px;
        min-width: 369px;
      }
    }
  }

  &__photo-scale {
    position: absolute;
    right: 8px;
    bottom: 8px;
    width: 32px;
    height: 32px;
    border-radius: 4px;
    background: #8C6D46;
    cursor: pointer;
  }

  &__photo-img {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  &__overview {
    display: flex;
    width: 100%;

    @include from-550 {
      padding-left: 20px;
      flex-direction: column;
    }

    @include for-550 {
      flex-wrap: wrap;
    } 
  }

  &__name {
    font-size: 20px;
    color: #1E1E1E;
    font-weight: 600;
    margin-bottom: 16px;
    width: 100%;

    @include for-680 {
      margin-bottom: 8px;
    }
  }

  &__description{

  }

  &__features{

    &--active {
      display: flex;
      flex-wrap: wrap;
      margin: 0 -8px;

      @include from-992 {
        margin-bottom: 20px;
      }

      .features__item {
        padding: 0 8px;
      }

      &.features_ico {
        margin-right: 4px;
      }

      .features__name {
        padding-top: 4px;
        color: $text-grey;
        font-size: 14px;
      }
    }
  }

  &__price-block {
    display: flex;
    flex-direction: column;
    align-items: end;
    flex: 1 1 auto;
    justify-content: end;

    @include for-550 {
      // max-width: 100px;
    }
  }

  &__overview-txt {
    font-size: 12px;
    color: $text-grey;
    margin-bottom: 4px;
  }

  &__price {
    color: #1E1E1E;
    font-size: 24px;
    font-weight: 600;
    display: flex;

    @include for-680 {
      font-size: 20px;
      padding-top: 2px;
    }

    svg {
      @include for-680 {
        margin-top: -2px;
      }
    }
  }

  &__more {
    margin-top: 16px;
    width: 100%;

    @include from-550 {
      justify-content: end;
      display: flex;
    }
  }

  &__more-btn{

    @include from-550 {
      max-width: 215px;
      width: 100%;
    }
  }

  &__toggle-section{
    margin-top: 16px;
    margin-bottom: 16px;
    border-radius: 8px;
    background: #F4F4F4;
    display: flex;
  }

  &__toggle-col{
    padding: 4px;
    width: 100%;
    max-height: 56px;

    .secondary {
      background: transparent;
      border-color: transparent;
    }

    .main-button{
      padding: 0;
    }

    .main-button:not(.secondary){
      font-weight: 600;
    }

  }

  &__calendar{
    margin-bottom: 16px;
  }

  &__calendar-days{
    margin-bottom: 24px;


    @include from-680 {
      :deep(.calendar-days__calendar-between-date), 
      :deep(.calendar-days__calendar-duration-count) {
        font-weight: 500;
      }
    }
  }

  &__categories{

    @include for-992 {
      margin-bottom: 12px;
    }
  }

  &__price-section {

    @include from-680 {
      margin-bottom: 24px;
    } 

    @include for-680 {
      margin-top: 12px;
    }
  }

  &__price-row {
    display: flex;
    align-items: center;

    @include for-680 {
      flex-direction: column-reverse;
      margin-bottom: 8px;
    }
  }

  &__price-col {
    
    @include for-680 {
      width: 100%;
      margin-bottom: 8px;
    }

    &--left{
      flex: 1 1 auto;

      @include for-550 {
        align-items: flex-end;
        display: flex;
        flex-direction: column;
      }
    }

    &--right {
      display: flex;
      align-items: end;
    }
  }

  &__house-number{
    margin-right: 24px;
    min-width: 79px;
    // max-width: 79px;
    max-width: 100px;
  }

  &__bottom {
    display: flex;
    margin: 0 -12px;
    justify-content: flex-end;

    @include for-550 {
      margin: 0 -4px;
    }
  }

  &__bottom-btn {
    padding: 0 12px;

    @include for-550 {
      padding: 0 4px;
    }

    .main-button{
      padding-left: 24px;
      padding-right: 24px;
    }

    .main-button.secondary {
      @include for-550 {
        max-width: 96px;
      }
    }
  }

}

.features{

  &__item {
    margin-bottom: 4px;
    display: flex;
    align-items: center;
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