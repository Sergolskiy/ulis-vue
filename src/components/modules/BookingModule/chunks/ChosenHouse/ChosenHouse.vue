<template>
  <div class="chosen-house">
    <div class="chosen-house__inner">

      <div class="chosen-house__info-block"
           v-if="Booking.data.activeStep === 2">
        <div class="chosen-house__block-title">
          Твій будинок
        </div>
        <InfoBlock
            :text="'Ти поки не вніс жодної інформації, як тільки ти заповниш поля на цьому етапі, вони з’являться тут.'"
            :type="'warning'"
        />
      </div>

      <template
          v-if="Booking.data.activeStep > 2">
        <div class="chosen-house__block-title">
          Будинок №1
        </div>
        <div class="chosen-house__content">
          <div class="chosen-house__img">
            <img src="../../../../../assets/img/chosen-house.png" alt="logo">
          </div>
          <div class="chosen-house__info">
            <div class="chosen-house__title">
              <div class="chosen-house__name">
                Будинок на 1 спальню у лісі з додатковим текстом для тестування
              </div>
              <div class="chosen-house__price-small">
                4600
                <IconUAH/>
              </div>
            </div>

            <div class="chosen-house__overview">
              <div class="chosen-house__overview-item">
                <div class="chosen-house__overview-ico">
                  <IconPeople/>
                </div>
                <div class="chosen-house__overview-txt">
                  Для 2-х гостей (+1)
                </div>
              </div>
              <div class="chosen-house__overview-item">
                <div class="chosen-house__overview-ico">
                  <IconMap/>
                </div>
                <div class="chosen-house__overview-txt">
                  Київ, Дудки
                </div>
              </div>
              <div class="chosen-house__overview-item">
                <div class="chosen-house__overview-ico">
                  <IconBuildings/>
                </div>
                <div class="chosen-house__overview-txt">
                  36 м <sup>2</sup>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="chosen-house__content chosen-house__service">
          <div class="chosen-house__img chosen-house__service-img">
            <img src="../../../../../assets/img/chosen-house-chan.png" alt="logo">
          </div>
          <div class="chosen-house__info chosen-house__service-info">
            <div class="chosen-house__title">
              <div class="chosen-house__name chosen-house__service-name">
                Чан
              </div>
              <div class="chosen-house__price-small">
                2600
                <IconUAH/>
              </div>
            </div>

            <div class="chosen-house__overview">
              <div class="chosen-house__overview-item">
                <div class="chosen-house__overview-ico">
                  <IconPeople/>
                </div>
                <div class="chosen-house__overview-txt">
                  2 гостя
                </div>
              </div>
              <div class="chosen-house__overview-item">
                <div class="chosen-house__overview-ico">
                  <IconClock/>
                </div>
                <div class="chosen-house__overview-txt">
                  4 грудня 13:00
                </div>
              </div>
              <div class="chosen-house__overview-item">
                <div class="chosen-house__overview-ico">
                  <IconBuildings/>
                </div>
                <div class="chosen-house__overview-txt">
                  Капці, шапочки, рушники та напої
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="chosen-house__content chosen-house__service">
          <div class="chosen-house__img chosen-house__service-img">
            <img src="../../../../../assets/img/chosen-house-sauna.png" alt="logo">
          </div>
          <div class="chosen-house__info chosen-house__service-info">
            <div class="chosen-house__title">
              <div class="chosen-house__name chosen-house__service-name">
                Сауна
              </div>
              <div class="chosen-house__price-small">
                2600
                <IconUAH/>
              </div>
            </div>

            <div class="chosen-house__overview">
              <div class="chosen-house__overview-item">
                <div class="chosen-house__overview-ico">
                  <IconClock/>
                </div>
                <div class="chosen-house__overview-txt">
                  4 грудня 13:00
                </div>
              </div>
              <div class="chosen-house__overview-item">
                <div class="chosen-house__overview-ico">
                  <IconBicycle/>
                </div>
                <div class="chosen-house__overview-txt">
                  2 велосипеди (+ дитячий)
                </div>
              </div>
              <div class="chosen-house__overview-item">
                <div class="chosen-house__overview-ico">
                  <IconEcommerce/>
                </div>
                <div class="chosen-house__overview-txt">
                  1 послуга
                </div>
              </div>
              <div class="chosen-house__overview-item">
                <div class="chosen-house__overview-ico">
                  <IconBed/>
                </div>
                <div class="chosen-house__overview-txt">
                  Пізнє виселення та раннє заселення
                </div>
              </div>
              <div class="chosen-house__overview-item">
                <div class="chosen-house__overview-ico">
                  <IconSettle/>
                </div>
                <div class="chosen-house__overview-txt">
                  пн, 4 грудня 2023 10:00
                </div>
              </div>
              <div class="chosen-house__overview-item">
                <div class="chosen-house__overview-ico">
                  <IconDeport/>
                </div>
                <div class="chosen-house__overview-txt">
                  пн, 4 грудня 2023 20:00
                </div>
              </div>
              <div class="chosen-house__overview-item">
                <div class="chosen-house__overview-ico">
                  <IconFood/>
                </div>
                <div class="chosen-house__overview-txt">
                  1 x Половина курча з запеченою картоплею з розмарином
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="chosen-house__add-service">
          <div class="chosen-house__add-service-btn">
            <MainButton
                :label="'Додати сервіси'"
                :secondary="true"
                :ico="'plus'"
                :icoPosition="'left'"
            >
            </MainButton>
          </div>
        </div>

        <div class="chosen-house__price-block">
          <div class="chosen-house__overview-txt">
            1 ніч, 2 дорослих
          </div>
          <div class="chosen-house__price-big chosen-house__price-block--big">
            <IconUAH/>
            10 600
          </div>
          <div class="chosen-house__overview-txt">
            Враховуючи сервіси
          </div>
        </div>
      </template>

    </div>
  </div>
</template>

<script>
import InfoBlock from "../../../../UI/labels/InfoBlock/InfoBlock.vue";
import MainButton from "../../../../UI/buttons/MainButton/MainButton.vue";
import IconUAH from '../../../../../assets/img/currencies.svg?skipsvgo'

import IconMap from '../../../../../assets/img/icon-map-16px-grey.svg?skipsvgo'
import IconPeople from '../../../../../assets/img/icon-people-16px-grey.svg?skipsvgo'
import IconBuildings from '../../../../../assets/img/icon-buildings-16px-grey.svg?skipsvgo'
import IconClock from '../../../../../assets/img/icon-clock-16px-grey.svg?skipsvgo'
import IconCalendar from '../../../../../assets/img/icon-calendar-16px-grey.svg?skipsvgo'
import IconBicycle from '../../../../../assets/img/icon-bicycle-16px-grey.svg?skipsvgo'
import IconEcommerce from '../../../../../assets/img/icon-ecommerce-16px-grey.svg?skipsvgo'
import IconBed from '../../../../../assets/img/icon-bed-16px-grey.svg?skipsvgo'
import IconFood from '../../../../../assets/img/icon-food-16px-grey.svg?skipsvgo'
import IconSettle from '../../../../../assets/img/icon-settle-16px-grey.svg?skipsvgo'
import IconDeport from '../../../../../assets/img/icon-deport-16px-grey.svg?skipsvgo'

export default {
  name: "ChosenHouse",
  components: {
    InfoBlock, 
    MainButton,
    IconUAH,
    IconMap,
    IconPeople,
    IconBuildings,
    IconClock, IconCalendar,
    IconBicycle,
    IconEcommerce,
    IconBed,
    IconFood,
    IconSettle,
    IconDeport
  },

  props: {
    Booking: {
      type: Object,
      default: null,
    }
  },

}
</script>

<style scoped lang="scss">
@import "../../../../../scss/colors";
@import "../../../../../scss/mixins/mixins";

.chosen-house{
  border: 1px solid $border-grey;
  border-radius: 8px;
  margin-bottom: 16px;

  &__inner{
   padding: 16px;
  }

  &__info-block {

  }

  &__block-title{
    font-size: 20px;
    font-weight: 600;
    margin-bottom: 16px;
  }

  &__content{
    display: flex;
    margin-bottom: 16px;
  }

  &__img{
    width: 96px;
    height: 96px;
    display: flex;
    justify-content: center;
    align-items: center;

    img{
      width: 100%;
      object-fit: contain;
      border-radius: 4px;
    }
  }

  &__info{
    padding-left: 8px;
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: calc(100% - 96px);
  }

  &__title{
    display: flex;
    align-items: baseline;
    margin-bottom: 8px;
  }

  &__name{
    font-size: 12px;
    font-weight: 600;
    width: 100%;  
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }

  &__price-small{
    font-size: 16px;
    font-weight: 500;
    white-space: nowrap;
    display: flex;

    svg {
      transform: scale(0.7);
      margin: -5px;
    }
  }

  &__overview-item{
    display: flex;
    margin-bottom: 4px;
  }

  &__overview-ico{
    width: 16px;
    height: 16px;
    margin-right: 8px;

    svg{
      display: block;
    }
  }

  &__overview-txt{
    color: $text-grey;
    font-size: 12px;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    padding-top: 2px;
  }

  &__service{

  }
  
  &__service-img{
    width: 80px;
    height: 80px;
  }
  
  &__service-info{
    max-width: calc(100% - 80px);
  }

  &__service-name{
    color: #1E1E1E;
  }


  &__add-service{
    
  }

  &__add-service-btn{
    margin-bottom: 16px;

    @include for-768{
      margin-bottom: 32px;
    }
  }

  &__price-block{
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    color: #1E1E1E;

    &--big + div{
      margin-top: -4px;
    }

    > div {
      margin-bottom: 4px;

      &:last-child{
        margin-bottom: 0;
      }
    }
  }

  &__price-big{
    font-size: 24px;
    font-weight: 600;
    display: flex;
  }

}

</style>