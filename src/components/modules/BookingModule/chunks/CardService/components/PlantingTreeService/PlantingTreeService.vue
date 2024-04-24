<template>

  <div class="service-content service-content--planting-tree">
   
    <div class="custom-row">
      <div class="custom-col wfc">
          <div class="service-content__title">
            <FormLabel
                :label="'К-ть послуг'"
                :type="'required'"
            />
          </div>
          <CounterInput
              class="mt-1"
              :border="true"
              :value="serviceCount"
              :minValue="0"
              @update:updateCounter="(item) => serviceCount = item"
          />
        </div>
    </div>

  </div>

</template>

<script>
import MainButton from "@/components/UI/buttons/MainButton/MainButton.vue";
import FormLabel from "@/components/UI/labels/FormLabel/FormLabel.vue";
import CounterInput from "@/components/UI/inputs/CounterInput/CounterInput.vue";

export default {
  name: "PlantingTreeService",
  components: {
    MainButton,
    CounterInput,
    FormLabel,
  },

  data() {
    return {
      serviceCount: 0,
    }
  },


}
</script>

<style lang="scss" scoped>
@import "../../../../../../../scss/colors";
@import "../../../../../../../scss/mixins/mixins";


  .service-content--planting-tree{
    padding-top: 16px;
  }

</style>