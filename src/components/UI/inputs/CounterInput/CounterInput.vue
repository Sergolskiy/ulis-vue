<template>
  <div class="counter-input"
       v-bind:class="{'pointer-none': disabled}"
  >
    <div class="counter-input__control" @click="subCount">-</div>
    <div class="counter-input__field">
      <DefaultInput
          class="center"
          v-model="localValue"
          :label="''"
          :labelIcon="''"
          :type="'number'"
          :error="error"
          :errorTxt="errorTxt"
          :disabled="disabled"
          @update:modelValue="passValue"
      />
    </div>
    <div class="counter-input__control" @click="addCount">+</div>
  </div>
</template>

<script>
import DefaultInput from "../DefaultInput/DefaultInput.vue";
export default {
  name: "CounterInput",
  components: {
    DefaultInput,
  },
  props: {
    value: {
      type: [String, Number, Boolean],
      default: '',
    },
    error: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    errorTxt: {
      type: String,
      default: '',
    },
    minValue: Number,
  },
  mounted() {
    this.localValue = this.value
  },
  watch: {
    value(newValue) {
      this.localValue = newValue
    }
  },
  data() {
    return {
      localValue: ''
    }
  },
  methods: {
    subCount() {
      this.localValue = +this.localValue - 1
      this.validateLocalValue()
      this.$emit('updateCounter', this.localValue)
    },
    addCount() {
      this.localValue = +this.localValue + 1
      this.validateLocalValue()
      this.$emit('updateCounter', this.localValue)
    },
    passValue(val) {
      this.localValue = val
      this.validateLocalValue()
      this.$emit('updateCounter', this.localValue)
    },
    validateLocalValue() {
      if (this.minValue !== undefined && +this.minValue > +this.localValue) {
        this.localValue = this.minValue
      }
    }
  }
}
</script>

<style lang="scss">
  @import "src/scss/colors";
  .counter-input {
    display: flex;
    align-items: center;

    &__field {
      width: 58px;
      flex-shrink: 0;
    }

    &__control {
      padding: 8px;
      cursor: pointer;
      font-size: 14px;
      font-weight: 500;
      color: $middle-grey;
      user-select: none;
      flex-shrink: 0;
    }

    .default-input-wrap input {
      padding-left: 6px;
      padding-right: 6px;
    }
  }
</style>