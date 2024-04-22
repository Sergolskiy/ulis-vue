<template>

  <div class="services">
    <div class="booking__buttons services__buttons">
      <div class="booking__btn services__btn">
        <MainButton
            :label="'Назад'"
            :secondary="true"
            :ico="'arrow'"
            :icoPosition="'left'"
            :disabled="Booking.data.activeStep === 1"
            @click="Booking.data.activeStep = Booking.data.activeStep - 1"
        />
      </div>
      <div class="booking__btn services__btn">
        <!--                :disabled="true"-->
        <MainButton
            :label="'Не цікаво'"
            :ico="'arrow'"
            :icoPosition="'right'"
            @click="Booking.data.activeStep = Booking.data.activeStep + 1"
        />
      </div>
    </div>

    <div class="services__price-block mt-4">
      <div class="services__overview-txt">
        Всього за сервіси
      </div>
      <div class="services__price">
        <IconUAH/>
        0
      </div>
    </div>

    <div class="services__house-tabs">
      <div class="services__house-tab"
           :class="{'services__house-tab--active' : Booking.data.activeHouse === 1}"
           @click="Booking.data.activeHouse = 1"
      >
        Будинок №1
      </div>
      <div class="services__house-tab"
           :class="{'services__house-tab--active' : Booking.data.activeHouse === 2}"
           @click="Booking.data.activeHouse = 2"
      >
        Будинок №2
      </div>
    </div>

    <div class="services__list">
      <div class="custom-row">
        <div class="custom-col mb-4" v-for="(item, index) in serviceImg" :key="index">
          <CardService
              :Booking="Booking"
              :image="item.image"
              :removeHouseBtn="index === 2"
              @removeService="removeService"
          />
        </div>
      </div>
    </div>


  </div>


</template>

<script>
import MainButton from "@/components/UI/buttons/MainButton/MainButton.vue";
import IconUAH from "@/assets/img/currencies.svg";
import CardHouse from "@/components/modules/BookingModule/chunks/CardHouse/CardHouse.vue";
import CardService from "@/components/modules/BookingModule/chunks/CardService/CardService.vue";

export default {
  name: "BookingStepC",
  components: {CardService, CardHouse, IconUAH, MainButton},

  props: {
    Booking: {
      type: Object,
      default: null,
    }
  },

  emits: ['removeService'],

  data() {
    return {
      serviceImg: [
        {
          image: {
            src: '/src/assets/img/service-img/sauna.png',
            alt: 'sauna',
            name: 'Сауна',
          },
        },
        {
          image: {
            src: '/src/assets/img/service-img/chan.png',
            alt: 'chan',
            name: 'Чан',
          },
        },
        {
          image: {
            src: '/src/assets/img/service-img/bicycle.png',
            alt: 'bicycle',
            name: 'Велосипеди',
          },
        },
        {
          image: {
            src: '/src/assets/img/service-img/cook.png',
            alt: 'cooking',
            name: 'Кухня',
          },
        },
        {
          image: {
            src: '/src/assets/img/service-img/tree.png',
            alt: 'house',
            name: 'Посади дерево в УЛІС',
          },
        },
        {
          image: {
            src: '/src/assets/img/service-img/late-check-out.png',
            alt: 'house',
            name: 'house',
          },
        },
      ],
    }
  },

  methods: {
    removeService() {

    },
  }

}
</script>

<style scoped lang="scss">
@import "../../../../../../../scss/colors";
@import "../../../../../../../scss/mixins/mixins";


.services {

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

  &__house-tabs {
    margin-top: 16px;
    display: flex;
    border-radius: 8px;
    background: #F4F4F4;
    padding: 4px;
    width: fit-content;
  }

  &__house-tab {
    padding: 14px 27px;
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: 20px;
    margin-left: 8px;
    background: #F4F4F4;
    cursor: pointer;
    color: $black;
    border-radius: 8px;
    transition: 0.3s;

    &:first-child {
      margin-left: 0;
    }

    &--active {
      background: $black;
      color: $white;
    }
  }


}


</style>