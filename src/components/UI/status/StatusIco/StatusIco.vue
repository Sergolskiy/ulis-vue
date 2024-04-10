<template>
  <span class="status-ico" :class="{[type]: type}"></span>
</template>

<script>

export default {
  name: "StatusIco",
  props: {
    type: String
  }
}
</script>

<style lang="scss" scoped>
.status-ico {
  display: inline-block;
  height: 16px;
  width: 16px;
  flex-shrink: 0;
  background-position: center center;
  background-size: cover;

  &.medium {
    height: 20px;
    width: 20px;
 }

  &.active {
    background-image: url("../../../../assets/img/common/status/active.svg");
  }
  &.cancel {
    background-image: url("../../../../assets/img/common/status/cancel.svg");
  }
}
</style>