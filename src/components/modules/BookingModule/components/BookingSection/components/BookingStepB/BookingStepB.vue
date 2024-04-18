<template>

  <div class="custom-row">
    <div class="custom-col" v-for="(item, index) in houseImg" :key="index">
      <CardHouse
        :Booking="Booking"
        :images="item.images"
        :removeHouseBtn="index === 2"
        @removeHouse="removeHouse"
      />
    </div>
  </div>

  <DeleteItemPopup
      v-if="openRemovePopup"
      :deletePopupText="deletePopupText"
      @closeDeletePopup="openRemovePopup = false"
  />

</template>

<script>
import CardHouse from "../../../../chunks/CardHouse/CardHouse.vue";
import DeleteItemPopup from "@/components/modules/BookingModule/popups/DeleteItemPopup/DeleteItemPopup.vue";

export default {
  name: "BookingStepB",

  emits: ['removeHouse', 'closeDeletePopup'],

  components: {
    DeleteItemPopup,
    CardHouse
  },

  props: {
    Booking: {
      type: Object,
      default: null,
    }
  },

  data() {
    return {
      openRemovePopup: false,

      deletePopupText: {
        title: 'Видалити будинок?',
        txt: 'Ти впевнений, що хочеш виконати цю дію? Якщо ти видалиш будинок, то всі обрані фільтри та сервіси не збережуться.',
        no: 'Не хочу',
        yes: 'Видалити',
      },

      houseImg: [
        {
          images: [
            {
              src: '/src/assets/img/house-img/house.png',
              alt: 'house',
            },
            {
              src: '/src/assets/img/house-img/house.png',
              alt: 'house',
            },
          ],
        },
        {
          images: [
            {
              src: '/src/assets/img/house-img/image 55.png',
              alt: 'house',
            },
            {
              src: '/src/assets/img/house-img/image 55.png',
              alt: 'house',
            },
          ],
        },
        {
          images: [
            {
              src: '/src/assets/img/house-img/image 57.png',
              alt: 'house',
            },
            {
              src: '/src/assets/img/house-img/image 57.png',
              alt: 'house',
            },
          ],
        },
        {
          images: [
            {
              src: '/src/assets/img/house-img/image 58.png',
              alt: 'house',
            },
            {
              src: '/src/assets/img/house-img/image 58.png',
              alt: 'house',
            },
          ],
        },
      ],

      houseImgTest: [
        {
          images: [
            {
              src: '/assets/house.png',
              alt: 'house',
            },
            {
              src: '/assets/house.png',
              alt: 'house',
            },
          ],
        },
        {
          images: [
            {
              src: '/assets/image 55.png',
              alt: 'house',
            },
            {
              src: '/assets/image 55.png',
              alt: 'house',
            },
          ],
        },
        {
          images: [
            {
              src: '/assets/image 57.png',
              alt: 'house',
            },
            {
              src: '/assets/image 57.png',
              alt: 'house',
            },
          ],
        },
        {
          images: [
            {
              src: '/assets/image 58.png',
              alt: 'house',
            },
            {
              src: '/assets/image 58.png',
              alt: 'house',
            },
          ],
        },
      ],

    }
  },

  methods: {
    removeHouse() {
      this.openRemovePopup = true
    },
  },

}
</script>

<style scoped>

</style>