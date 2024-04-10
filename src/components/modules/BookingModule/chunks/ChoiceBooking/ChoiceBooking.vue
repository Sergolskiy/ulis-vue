<template>
  <div class="choice-booking">
    <div class="choice-booking__inner">
      <div class="choice-booking__title">
        Твій вибір
      </div>
      <div class="choice-booking__info">
        <InfoBlock
            :text="'Ти поки не вніс жодної інформації, як тільки ти заповниш поля на цьому етапі, вони з’являться тут.'"
        />
      </div>
    </div>
  </div>
</template>

<script>
import InfoBlock from "../../../../UI/labels/InfoBlock/InfoBlock.vue";
export default {
  name: "ChoiceBooking",
  components: {InfoBlock}
}
</script>

<style scoped lang="scss">
@import "../../../../../scss/colors";

.choice-booking {
  border: 1px solid $border-grey;
  border-radius: 8px;
  margin-top: 9px;

  &__inner {
    padding: 16px;
  }

  &__title {
    font-size: 20px;
    font-weight: 700;
    line-height: 24px;
  }

  &__info {

  }

}


</style>