<template>

  <div class="services">
    <div class="booking__buttons services__buttons">
      <div class="booking__btn services__btn">
        <MainButton
            :label="'Назад'"
            :secondary="true"
            :ico="'arrow'"
            :icoPosition="'left'"
            @click="$emit('goToBackStepEmit')"
        />
      </div>
      <div class="booking__btn services__btn">
        <MainButton
            :label="'Не цікаво'"
            :ico="'arrow'"
            :icoPosition="'right'"
            @click="$emit('goToNextStepEmit')"
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
        <div class="custom-col mb-4" v-for="(item, index) in itemsTest" :key="index">
          <CardService
              :Booking="Booking"
              :item="item"
              :removeHouseBtn="index === 2"
              @removeService="removeService"
          />
        </div>
      </div>
    </div>


    <DeleteItemPopup
        v-if="openRemovePopup"
        :deletePopupText="deletePopupText"
        @closeDeletePopup="openRemovePopup = false"
    />

  </div>


</template>

<script>
import MainButton from "@/components/UI/buttons/MainButton/MainButton.vue";
import IconUAH from "@/assets/img/currencies.svg";
import CardHouse from "@/components/modules/BookingModule/chunks/CardHouse/CardHouse.vue";
import CardService from "@/components/modules/BookingModule/chunks/CardService/CardService.vue";
import DeleteItemPopup from "@/components/modules/BookingModule/popups/DeleteItemPopup/DeleteItemPopup.vue";

export default {
  name: "BookingStepC",
  components: {DeleteItemPopup, CardService, CardHouse, IconUAH, MainButton},

  props: {
    Booking: {
      type: Object,
      default: null,
    }
  },

  emits: ['goToBackStepEmit' ,'goToNextStepEmit'],

  data() {
    return {
      openRemovePopup: false,

      deletePopupText: {
        title: 'Видалити сервіс?',
        txt: 'Ти впевнений, що хочеш виконати цю дію?',
        no: 'Не хочу',
        yes: 'Видалити',
      },

      items: [
        {
          image: {
            src: '/src/assets/img/service-img/sauna.png',
            alt: 'alt',
          },
          name: 'Сауна',
          description: 'Розслабся та насолоджуйся! У  вартість входять напої, капці та рушники – все необхідне для твого відпочинку.',
          types: [
            {
              mans: 'До 4-х осіб',
            },
            {
              time: '2 години',
            },
          ],
          type: 'sauna',
          price: '1 600',
        },
        {
          image: {
            src: '/src/assets/img/service-img/sauna.png',
            alt: 'alt',
          },
          name: 'Сауна',
          description: 'Розслабся та насолоджуйся! У  вартість входять напої, капці та рушники – все необхідне для твого відпочинку.',
          types: [
            {
              mans: 'До 4-х осіб',
            },
            {
              time: '2 години',
            },
          ],
          type: 'sauna',
          price: '1 600',
          error: 'Все заброньовано на твої дати. Додай у вішліст, і я повідомлю, якщо будуть вільні місця!',
        },
        {
          image: {
            src: '/src/assets/img/service-img/chan.png',
            alt: 'alt',
          },
          name: 'Чан',
          description: 'Розслабся та насолоджуйся! У  вартість входять напої, капці та рушники – все необхідне для твого відпочинку.',
          types: [
            {
              mans: 'До 4-х осіб',
            },
            {
              time: '2,5 години',
            },
          ],
          type: 'sauna',
          price: '2 400',
          error2: 'Все заброньовано на твої дати. Додай у вішліст, і я повідомлю, якщо будуть вільні місця!',
        },

        {
          image: {
            src: '/src/assets/img/service-img/bicycle.png',
            alt: 'alt',
          },
          name: 'Велосипеди',
          description: 'Орендуй велосипеди, включаючи дитячі варіанти та крісла. Зручне розташування та екологічний відпочинок гарантовані!',
          types: [
            {
              opened: true,
              mans: 'Необмежена к-ть осіб',
            },
            {
              time: 'Погодинно та подобово',
            },
            {
              opened: true,
              children: 'Дитячий велосипед та крісло',
            },
          ],
          type: 'bicycle',
          price: '100',
          additionalPrice: '1000',
        },

        {
          image: {
            src: '/src/assets/img/service-img/cook.png',
            alt: 'alt',
          },
          name: 'Кухня',
          description: 'Замовляй страви собі на вечерю в день заселення і забирай у моєму пункті видачі.',
          types: [
            {
              cooking: 'Вечеря (13:00 - 20:00)',
            }
          ],
          type: 'cooking',
          price: '135',
        },

        {
          image: {
            src: '/src/assets/img/service-img/tree.png',
            alt: 'alt',
          },
          name: 'Посади дерево в УЛІС',
          description: 'Збережи мій ліс та посади у мене дерево. Внеси свій екологічний вклад в УЛІС.',
          type: 'tree',
          price: '200',
        },

        {
          image: {
            src: '/src/assets/img/service-img/late-check-out.png',
            alt: 'alt',
          },
          name: 'Пізнє виселення та раннє заселення',
          description: 'Обери зручний час для початку та закінчення твого відпочинку, а я підлаштуйсь, щоб ти отримав найбільше задоволення.',
          descriptionOpen: 'Загалом заїзд у мої будинки проходить з 15:00, а виїзд до 11:00. Але за додаткову плату, ти можеш залишитися у мене на довше.',
          type: 'late-check-out',
          price: '200',
        },

      ],


      itemsTest: [
        {
          image: {
            src: '/assets/sauna.png',
            alt: 'alt',
          },
          name: 'Сауна',
          description: 'Розслабся та насолоджуйся! У  вартість входять напої, капці та рушники – все необхідне для твого відпочинку.',
          types: [
            {
              mans: 'До 4-х осіб',
            },
            {
              time: '2 години',
            },
          ],
          type: 'sauna',
          price: '1 600',
        },
        {
          image: {
            src: '/assets/sauna.png',
            alt: 'alt',
          },
          name: 'Сауна',
          description: 'Розслабся та насолоджуйся! У  вартість входять напої, капці та рушники – все необхідне для твого відпочинку.',
          types: [
            {
              mans: 'До 4-х осіб',
            },
            {
              time: '2 години',
            },
          ],
          type: 'sauna',
          price: '1 600',
          error: 'Все заброньовано на твої дати. Додай у вішліст, і я повідомлю, якщо будуть вільні місця!',
        },
        {
          image: {
            src: '/assets/chan.png',
            alt: 'alt',
          },
          name: 'Чан',
          description: 'Розслабся та насолоджуйся! У  вартість входять напої, капці та рушники – все необхідне для твого відпочинку.',
          types: [
            {
              mans: 'До 4-х осіб',
            },
            {
              time: '2,5 години',
            },
          ],
          type: 'sauna',
          price: '2 400',
          error2: 'Все заброньовано на твої дати. Додай у вішліст, і я повідомлю, якщо будуть вільні місця!',
        },

        {
          image: {
            src: '/assets/bicycle.png',
            alt: 'alt',
          },
          name: 'Велосипеди',
          description: 'Орендуй велосипеди, включаючи дитячі варіанти та крісла. Зручне розташування та екологічний відпочинок гарантовані!',
          types: [
            {
              opened: true,
              mans: 'Необмежена к-ть осіб',
            },
            {
              time: 'Погодинно та подобово',
            },
            {
              opened: true,
              children: 'Дитячий велосипед та крісло',
            },
          ],
          type: 'bicycle',
          price: '100',
          additionalPrice: '1000',
        },

        {
          image: {
            src: '/assets/cook.png',
            alt: 'alt',
          },
          name: 'Кухня',
          description: 'Замовляй страви собі на вечерю в день заселення і забирай у моєму пункті видачі.',
          types: [
            {
              cooking: 'Вечеря (13:00 - 20:00)',
            }
          ],
          type: 'cooking',
          price: '135',
        },

        {
          image: {
            src: '/assets/tree.png',
            alt: 'alt',
          },
          name: 'Посади дерево в УЛІС',
          description: 'Збережи мій ліс та посади у мене дерево. Внеси свій екологічний вклад в УЛІС.',
          type: 'tree',
          price: '200',
        },

        {
          image: {
            src: '/assets/late-check-out.png',
            alt: 'alt',
          },
          name: 'Пізнє виселення та раннє заселення',
          description: 'Обери зручний час для початку та закінчення твого відпочинку, а я підлаштуйсь, щоб ти отримав найбільше задоволення.',
          descriptionOpen: 'Загалом заїзд у мої будинки проходить з 15:00, а виїзд до 11:00. Але за додаткову плату, ти можеш залишитися у мене на довше.',
          type: 'late-check-out',
          price: '200',
        },

      ],


    }
  },

  methods: {
    removeService() {
      this.openRemovePopup = true
    },
  }

}
</script>

<style scoped lang="scss">
@import "../../../../../../../scss/colors";
@import "../../../../../../../scss/mixins/mixins";


.services {

  &__buttons {
    margin-top: 0;
  }

  &__btn {
    &:deep(.main-button) {
      @include for-768 {
        width: auto;
      }
    }
  }

  &__list {
    margin-top: 16px;
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

  &__house-tabs {
    margin-top: 16px;
    display: flex;
    border-radius: 8px;
    background: #F4F4F4;
    padding: 4px;
    width: fit-content;

    @include for-550 {
      width: 100%;
      overflow: auto;
    }
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

    @include for-550 {
      min-width: 160px;
    }

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