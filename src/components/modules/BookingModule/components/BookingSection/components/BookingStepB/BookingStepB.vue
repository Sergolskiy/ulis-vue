<template>

  <div class="custom-row">
    <div class="custom-col" v-for="(item, index) in houseImg" :key="index">
      <CardHouse
        :Booking="Booking"
        :images="item.images"
      />
    </div>
  </div>

</template>

<script>
import CardHouse from "../../../../chunks/CardHouse/CardHouse.vue";

export default {
  name: "BookingStepB",

  components: {
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

    }
  }

}
</script>

<style scoped>

</style>