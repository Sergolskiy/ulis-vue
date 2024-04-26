<template>

  <div class="service-content service-content--sauna">
    <div class="service-content__item">
      <div class="service-content__title">
        <FormLabel
            class="mt-4"
            :label="'Дати'"
            :type="'required'"
        />
      </div>

      <div class="custom-row custom-row--p4 flex-wrap mt-1">
        <div class="custom-col custom-col--p4 wfc">
          <RadioDefault
              :label="'4 грудня'"
              :modelValue="day === 1"
              :name="'day'"
              @update:modelValue="day = 1"
          />
        </div>
        <div class="custom-col custom-col--p4 wfc">
          <RadioDefault
              :label="'5 грудня'"
              :modelValue="day === 2"
              :name="'day'"
              @update:modelValue="day = 2"
          />
        </div>
        <div class="custom-col custom-col--p4 wfc">
          <RadioDefault
              :label="'6 грудня'"
              :modelValue="day === 3"
              :name="'day'"
              @update:modelValue="day = 3"
          />
        </div>
        <div class="custom-col custom-col--p4 wfc">
          <RadioDefault
              :label="'7 грудня'"
              :modelValue="day === 4"
              :name="'day'"
              @update:modelValue="day = 4"
          />
        </div>
      </div>
    </div>

    <div class="service-content__item">
      <div class="service-content__title">
        <FormLabel
            :label="'Час'"
            :type="'required'"
        />
      </div>

      <div class="custom-row custom-row--p4 flex-wrap mt-1">
        <div class="custom-col custom-col--p4 wfc">
          <RadioDefault
              :label="'10:00 - 12:00'"
              :modelValue="time === 1"
              :name="'time'"
              @update:modelValue="time = 1"
          />
        </div>
        <div class="custom-col custom-col--p4 wfc">
          <RadioDefault
              :label="'14:00 - 16:00'"
              :modelValue="time === 2"
              :name="'time'"
              @update:modelValue="time = 2"
          />
        </div>
        <div class="custom-col custom-col--p4 wfc">
          <RadioDefault
              :label="'18:00 - 20:00'"
              :modelValue="time === 3"
              :name="'time'"
              @update:modelValue="time = 3"
          />
        </div>
      </div>
    </div>

    <FormLabel
        :label="'Час'"
        :type="'required'"
    />
    <InfoBlock
        class="mb-3 mt-1"
        v-if="item.error2"
        :text="item.error2"
        :type="'error'"
    />

    <div class="service-content__item">

      <div class="custom-row flex-wrap">
        <div class="custom-col wfc">
          <div class="service-content__title">
            <FormLabel
                :label="'Кількість осіб'"
                :type="'required'"
            />
          </div>
          <CounterInput
              class="mt-1"
              :border="true"
              :value="countPeople"
              :minValue="0"
              @update:updateCounter="(item) => countPeople = item"
          />
        </div>

        <div class="custom-col wfc">
          <div class="service-content__title">
            <FormLabel
                :label="'Віники'"
            />
          </div>
          <CounterInput
              class="mt-1"
              :border="true"
              :value="countBrooms"
              :minValue="0"
              @update:updateCounter="(item) => countBrooms = item"
          >
            <template #content>
              <div class="d-flex align-items-center service-content__brooms-price">
                <IconUAH style="transform: scale(0.8);"/>
                <span>100</span>
              </div>
            </template>
          </CounterInput>
        </div>
      </div>
    </div>


    <div class="service-content__item mt-4">
      <IconPlus style="transform: translateY(6px); filter: grayscale(1)"/>
      <span class="service-content__caption ml-1">Капці, шапочки, рушники та напої</span>
    </div>

  </div>

</template>

<script>
import FormLabel from "@/components/UI/labels/FormLabel/FormLabel.vue";
import RadioDefault from "@/components/UI/radiobuttons/RadioDefault/RadioDefault.vue";
import CounterInput from "@/components/UI/inputs/CounterInput/CounterInput.vue";
import IconUAH from "@/assets/img/currencies.svg?skipsvgo";
import IconPlus from "@/assets/img/plus-gray.svg?skipsvgo";
import InfoBlock from "@/components/UI/labels/InfoBlock/InfoBlock.vue";

export default {
  name: "SaunaChanService",
  components: {
    InfoBlock,
    IconPlus,
    IconUAH,
    CounterInput,
    RadioDefault,
    FormLabel
  },

  props: {
    item: Object,
  },

  data() {
    return {
      day: 1,
      time: 1,
      countPeople: 0,
      countBrooms: 0,
    }
  }
}
</script>

<style scoped lang="scss">

</style>