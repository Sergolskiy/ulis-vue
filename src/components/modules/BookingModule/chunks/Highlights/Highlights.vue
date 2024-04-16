<template>
 
  <div class="highlights">

    <Highlight 
           v-for="(highlight, index) in highlights"
          :key="index"
          :highlight="highlight"
    />
  </div>
</template>

<script>
import Highlight from '../Highlights/Highlight.vue'

export default {
  name: "Highlights",
  components: {
    Highlight
  },

  props: {
    highlights: {
      type: Array,
      default: []
    }
  },

  data: function () {
    return {

    };
  },
}
</script>

<style scoped lang="scss">
@import "../../../../../scss/colors";
@import "../../../../../scss/mixins/mixins";

</style>