<template>
  <span class="link-back">
    <span class="link-back__ico">
      <BackArrowIco/>
    </span>
    {{ value }}
  </span>
</template>

<script>
import BackArrowIco from '../../../../../src/assets/img/UI-group/link-back-arrow-icon.svg'
export default {
  name: "LinkBack",
  components: {
    BackArrowIco
  },
  props:[
    'value'
  ]
}
</script>

<style lang="scss" scoped>
@import "../../../../scss/colors";

.link-back {
  display: inline-flex;
  align-items: center;
  font-weight: 500;
  font-size: 14px;
  color: $black;

  &__ico {
    font-size: 0;
    margin-right: 4px;
    display: inline-block;
  }
}
</style>