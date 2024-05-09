<template>

  <div class="custom-row">
    <div class="custom-col" v-for="(item, index) in houseImgTest" :key="index">
      <CardHouse
        :Booking="Booking"
        :images="item.images"
        :removeHouseBtn="index === 2"
        @removeHouse="removeHouse"
      />
    </div>
  </div>



</template>

<script>
import CardHouse from "../../../../chunks/CardHouse/CardHouse.vue";
import DeleteItemPopup from "@/components/modules/BookingModule/popups/DeleteItemPopup/DeleteItemPopup.vue";

export default {
  name: "BookingStepB",

  emits: ['closeDeletePopup', 'removeHouse'],

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
      this.$emit('removeHouse')
    },
  },

}
</script>

<style scoped>

</style>