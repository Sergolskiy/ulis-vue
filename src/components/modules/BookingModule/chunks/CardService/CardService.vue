<template>
  <div class="card-service">
    <div class="card-service__inner">
      <div class="card-service__section">
        <div class="card-service__section-head">
          <div class="card-service__photo">
            <div class="card-service__photo-inner">
              <img class="card-service__photo-img"
                   :src="image.src" :alt="image.alt">
            </div>
          </div>
          <div class="card-service__overview">
            <div class="card-service__name"
                 :class="{'card-service__name--active' : detailedInfo}">
              {{image.name}}
            </div>
            <div class="card-service__features features"
                :class="{'card-service__features--active' : detailedInfo}"
            >
              <div class="card-service__features-item features__item">
                <div class="card-service__features-ico features__ico">
                  <IconPeople/>
                </div>
                <div class="card-service__features-txt features__name">
                  До 4-х осіб
                </div>
              </div>
              <div class="card-service__features-item features__item">
                <div class="card-service__features-ico features__ico">
                <IconClock/>
                </div>
                <div class="card-service__features-txt features__name">
                  2 години
                </div>
              </div>
            </div>

            <div class="card-service__description">
              <p>
                Розслабся та насолоджуйся! У  вартість входять напої, капці та рушники – все необхідне для твого відпочинку.
              </p>
            </div>

            <div class="card-service__bottom-small">
              <div class="card-service__price-block" v-if="!detailedInfo">
                <div class="card-service__price" v-if="image.alt === 'bicycle'">
                  <IconUAH/>
                  100 <span>/год</span>
                </div>
                <div class="card-service__price">
                  <IconUAH/>
                  1 600 <span>/день</span>
                </div>
                <div class="card-service__overview-txt" v-if="image.alt === 'sauna' || image.alt === 'chan'">
                  На будинок
                </div>
              </div>

              <div class="card-service__more" v-if="!detailedInfo">
                <div class="card-service__more-btn mr-3" v-if="removeHouseBtn">
                  <MainButton
                      :label="'Видалити сервіс'"
                      :secondary="true"
                      @click="$emit('removeHouse')"
                  />
                </div>
                <div class="card-service__more-btn">
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
      </div>


      <template v-if="detailedInfo">

        <div class="card-service__section">

          <SaunaChanService
              v-if="image.alt === 'sauna' || image.alt === 'chan'"
          />

          <BicycleService
              v-if="image.alt === 'bicycle'"
          />

          <CookingService
              v-if="image.alt === 'cooking'"
          />

        </div>

        <div class="card-service__section">
          <div class="card-service__price-section">
            <div class="card-service__price-row justify-content-end"
                 :class="{'card-service__price-row--cooking' : image.alt === 'cooking'}"
            >
              <!--            <div class="card-service__price-col card-service__price-col&#45;&#45;left">-->
              <!--              <div class="card-service__overview-txt">-->
              <!--                + 550 грн за додаткового гостя-->
              <!--              </div>-->
              <!--              <div class="card-service__overview-txt">-->
              <!--                + 600 грн за прибирання за пухнастиком-->
              <!--              </div>-->
              <!--            </div>-->

              <!-- ELEMENT FOR SERVICE COOKING START -->
              <div class="card-service__price-col card-service__price-col--left card-service__price-col--left-cooking"
                   v-if="image.alt === 'cooking'"
              >
                <div class="card-service__section--cooking-bottom">
                  <DefaultSelect
                  :label="'Час'"
                  :placeholder="'Обери час'"
                  :required="'required'"
                  :options="['10:00', '11:00']"
                />
                </div>
              </div>
              <!-- ELEMENT FOR SERVICE COOKING END -->

              <div class="card-service__price-col card-service__price-col--right">
                <div class="card-service__price-block">
                  <div class="card-service__overview-txt">
                    Всього:
                  </div>
                  <div class="card-service__price">
                    <IconUAH/>
                    0
                  </div>
                  <div class="card-service__price-txt">
                    Враховуючи додаткові послуги
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>


        <div class="card-service__section">
          <div class="card-service__bottom">
            <div class="card-service__bottom-btn">
              <MainButton
                  :label="'Закрити'"
                  :secondary="true"
                  @click="detailedInfo = false"
              />
            </div>
            <div class="card-service__bottom-btn">
              <MainButton
                  :label="'Забронювати'"
              />
            </div>
          </div>
        </div>

      </template>





    </div>
  </div>

</template>

<script>
import MainButton from "../../../../UI/buttons/MainButton/MainButton.vue";
import DefaultSelect from "../../../../UI/selections/DefaultSelect/DefaultSelect.vue";
import Highlights from "../../chunks/Highlights/Highlights.vue";
import MainCalendar from "../../chunks/MainCalendar/MainCalendar.vue";
import CalendarDays from "@/components/modules/BookingModule/chunks/CalendarDays/CalendarDays.vue";

import IconUAH from '../../../../../assets/img/currencies.svg?skipsvgo'
import IconClock from '../../../../../assets/img/card/time.svg?skipsvgo'
import IconPeople from '../../../../../assets/img/icon-people-16px-grey.svg?skipsvgo'
import IconBuildings from '../../../../../assets/img/icon-buildings-16px-grey.svg?skipsvgo'
import IconBathroom from '../../../../../assets/img/card/bathroom.svg?skipsvgo'
import IconKitchen from '../../../../../assets/img/card/kitchen.svg?skipsvgo'
import IconBedroom from '../../../../../assets/img/card/bedroom.svg?skipsvgo'
import IconLivingRoom from '../../../../../assets/img/card/living-room.svg?skipsvgo'
import IconOutside from '../../../../../assets/img/card/outside.svg?skipsvgo'
import CardSlider from "@/components/modules/BookingModule/chunks/CardSlider/CardSlider.vue";
import SliderPopup from "@/components/modules/BookingModule/chunks/SliderPopup/SliderPopup.vue";
import IconScaleButton from "@/assets/img/scale-button.svg";
import SaunaChanService
  from "@/components/modules/BookingModule/chunks/CardService/components/SaunaChanService/SaunaChanService.vue";
import BicycleService from "@/components/modules/BookingModule/chunks/CardService/components/BicycleService/BicycleService.vue";
import CookingService from "@/components/modules/BookingModule/chunks/CardService/components/CookingService/CookingService.vue";


export default {
  name: "CardService",
  components: {
    SaunaChanService,
    BicycleService,
    CookingService,
    IconScaleButton,
    SliderPopup,
    CardSlider,
    MainButton,
    DefaultSelect,
    Highlights,
    MainCalendar,
    CalendarDays,
    IconUAH,
    IconClock,
    IconPeople,
    IconBuildings,
    IconBathroom,
    IconKitchen,
    IconBedroom,
    IconLivingRoom,
    IconOutside
  },

  emits: ['closeSliderPopup'],

  props: {
    Booking: {
      type: Object,
      default: null,
    },

    image: {
      type: Object,
    },

    removeHouseBtn: {
      type: Boolean,
      default: false,
    },
  },

  data () {
    return {
      openSliderPopup: false,
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
            'Питна вода',
            'Електроплита',
            'Холодильник',
            'Мікрохвильова піч',
            'Каструлі, сковорідки',
            'Столові прибори',
            'Рушники',
            'Сіль, перець, цукор',
            'Чашки, стакани, бокали',
          ]
        },
        {
          name: 'Спальня',
          ico: 'bedroom',
          list: [
            'Ліжко queensize',
            'Ортопедичний матрац',
            'Меблі для зберігання речей',
            'Комплект білизни',
          ]
        },
        {
          name: 'Вітальня',
          ico: 'living-room',
          list: [
            'Камін',
            'Телевізор (SmartTV)',
            'Диван',
            'Кондиціонер',
            'Wi-Fi',
            'В’язанка дров',
            'Паливні брикети для обігріву',
          ]
        },
        {
          name: 'Надворі',
          ico: 'outside',
          list: [
            'Простора тераса',
            'Садові меблі',
            'Мангал',
            'Місце для багаття',
            'Набір для гриля',
            '2,5 кг вугілля для мангалу',
          ]
        },
      ],
    }
  },

  methods: {
    toggleSliderPopup(val) {
      this.openSliderPopup = val
      document.body.style.overflow = val ? 'hidden' : 'initial'
    }
  },
}
</script>

<style scoped lang="scss">
@import "../../../../../scss/colors";
@import "../../../../../scss/mixins/mixins";

.card-service{
  
  &__inner {
    padding: 16px;
    border: 1px solid $border-grey;
    border-radius: 8px;
  }

  &__section {
    margin-top: 16px;

    &--cooking-bottom{
      max-width: 153px;
      width: 100%;
    }
  }

  &__section-head{
    display: flex;

    @include for-550 {
      flex-direction: column;
    }
  }

  &__photo-inner {
    height: 215px;
    width: 215px;
    min-width: 215px;
    position: relative;
    border-radius: 8px;
    overflow: hidden;

    @include for-550 {
      width: 100%;
      min-width: 100%;
      margin-bottom: 16px;
    }

    //&--big {
    //  @include from-992 {
    //    height: 369px;
    //    width: 369px;
    //    min-width: 369px;
    //  }
    //}

    &--full {
      height: auto;
      width: 100%;
      margin-bottom: 0;
    }
  }

  &__photo-img {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    object-fit: cover;
  }

  &__photo {
    height: 215px;
    width: 215px;
    min-width: 215px;
    position: relative;
    border-radius: 8px;
    overflow: hidden;

    @include for-550 {
      width: 100%;
      min-width: 100%;
      margin-bottom: 16px;
    }

    //&--big {
    //  @include from-992 {
    //    height: 369px;
    //    width: 369px;
    //    min-width: 369px;
    //  }
    //}
  }

  &__photo-scale {
    position: absolute;
    right: 8px;
    bottom: 8px;
    width: 32px;
    height: 32px;
    border-radius: 4px;
    background: #8c6d4652;
    cursor: pointer;

    //svg g path {
    //  fill-opacity: 1;
    //  fill: rgb(99 72 42 / 63%);
    //}
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

    &--active {
      margin-bottom: 8px;
    }

    @include for-680 {
      margin-bottom: 8px;
    }
  }

  &__description{
    max-width: 340px;

    @include for-1200 {
      max-width: 220px;
    }

    @include for-992 {
      max-width: 350px;
    }

    @include for-768 {
      max-width: 100%;
    }
    
  }

  &__features{

    display: flex;
    flex-wrap: wrap;
    margin: 0 -8px;

    //@include from-992 {
    //  margin-bottom: 20px;
    //}

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

  &__bottom-small {
    margin-top: -45px;

    @include for-768 {
      margin-top: 0;
      width: 100%;
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

    span {
      font-size: 12px;
      font-style: normal;
      font-weight: 400;
      line-height: 16px;
      padding-top: 4px;
      padding-left: 4px;
    }

    svg {
      @include for-680 {
        margin-top: -2px;
      }
    }
  }

  &__price-txt {
    margin-top: 4px;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 16px;
    color: $text-grey;
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

    &.mr-3 {

      @include for-768 {
        margin-bottom: 8px;

        .main-button{
          padding-right: 0;
          padding-left: 0;
        }
      }

      @include for-550 {
        margin-right: 0!important;
      }
    }

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

    &--cooking {
      @include for-680 {
        flex-direction: initial;
        align-items: flex-end;
      }
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

    &--left-cooking{

      @include for-550 {
        align-items: flex-start;
        margin-bottom: 0;
      }
    }
    &--left-cooking + &--right {
      @include for-550 {
        margin-bottom: 0;
        width: fit-content;
      }
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

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

</style>