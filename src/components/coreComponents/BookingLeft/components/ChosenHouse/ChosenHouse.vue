<template>
  <div class="chosen-house">
    <div class="chosen-house__inner">

      <div class="chosen-house__info-delete"
           @click="$emit('removeHouse')"
      >
        <IconDelete/>
      </div>

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

        <div class="custom-row">
          <div class="chosen-house__listing-col custom-col custom-col--50">
            <div class="chosen-house__listing-item">
              <div class="chosen-house__listing-ico">
                <IconPeopleBig/>
              </div>
              <div class="chosen-house__listing-txt">
                2 дорослих
              </div>
            </div>
          </div>
          <div class="chosen-house__listing-col custom-col custom-col--50">
            <div class="chosen-house__listing-item">
              <div class="chosen-house__listing-ico">
                <IconMan/>
              </div>
              <div class="chosen-house__listing-txt">
                1 дитина
              </div>
            </div>
          </div>
          <div class="chosen-house__listing-col custom-col custom-col--50">
            <div class="chosen-house__listing-item">
              <div class="chosen-house__listing-ico">
                <IconAnimal/>
              </div>
              <div class="chosen-house__listing-txt">
                1 тварина
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

import IconMap from '../../../../../assets/img/icons/icon-map-16px-grey.svg?skipsvgo'
import IconPeople from '../../../../../assets/img/icons/icon-people-16px-grey.svg?skipsvgo'
import IconBuildings from '../../../../../assets/img/icons/icon-buildings-16px-grey.svg?skipsvgo'
import IconClock from '../../../../../assets/img/icons/icon-clock-16px-grey.svg?skipsvgo'
import IconCalendar from '../../../../../assets/img/icons/icon-calendar-16px-grey.svg?skipsvgo'
import IconBicycle from '../../../../../assets/img/icons/icon-bicycle-16px-grey.svg?skipsvgo'
import IconEcommerce from '../../../../../assets/img/icons/icon-ecommerce-16px-grey.svg?skipsvgo'
import IconBed from '../../../../../assets/img/icons/icon-bed-16px-grey.svg?skipsvgo'
import IconFood from '../../../../../assets/img/icons/icon-food-16px-grey.svg?skipsvgo'
import IconSettle from '../../../../../assets/img/icons/icon-settle-16px-grey.svg?skipsvgo'
import IconDeport from '../../../../../assets/img/icons/icon-deport-16px-grey.svg?skipsvgo'
import IconMan from "@/assets/img/man.svg?skipsvgo";
import IconAnimal from "@/assets/img/animal.svg?skipsvgo";
import IconPeopleBig from '../../../../../assets/img/people.svg?skipsvgo'
import IconDelete from "@/assets/img/icons/icon-delete.svg?skipsvgo";

export default {
  name: "ChosenHouse",
  components: {
    IconDelete,
    IconAnimal, IconMan,
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
    IconDeport,
    IconPeopleBig,
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
  margin-top: 16px;

  &__inner{
    position: relative;
    padding: 16px;
  }

  &__info-delete {
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    top: 16px;
    right: 16px;
    border: 1px solid #EB5757;
    border-radius: 8px;
    transition: 0.15s;
    height: 32px;
    width: 32px;
    cursor: pointer;

    svg {
      width: 20px;
      height: 20px;
    }
  }

  &__info-block {

  }

  &__block-title{
    font-size: 20px;
    font-weight: 600;
    margin-bottom: 16px;
    padding-top: 4px;
    padding-bottom: 4px;
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

  &__listing-col {
    margin-bottom: 8px;
    padding: 0 8px;

    &:last-child {
      margin: 0;
    }

    @include for-768 {
      padding: 0 4px;
    }
  }

  &__listing-item {
    display: flex;
    align-items: flex-end;
    border-radius: 8px;
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

  &__service{
    margin-top: 16px;
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