<template>
  {{text}}
</template>

<script>
export default {
  name: "InfoBlock",

  props: {
    text: {
      type: String,
      default: null,
    }
  }

}
</script>

<style scoped>

</style>