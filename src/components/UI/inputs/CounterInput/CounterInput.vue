<template>
  <div class="counter-input"
       v-bind:class="{'pointer-none': disabled, 'counter-input--border' : border, 'counter-input--btn-style': btnStyle}"
  >
    <div class="counter-input__control" :class="{'counter-input__control--disabled' : minValue === localValue}" @click="subCount">
      <IconMinus/>
    </div>
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
    <div class="counter-input__control" @click="addCount">
      <IconPlus/>
    </div>

    <div class="counter-input__content">
      <slot name="content">

      </slot>
    </div>


  </div>
</template>

<script>
import DefaultInput from "../DefaultInput/DefaultInput.vue";
import IconPlus from '../../../../assets/img/plus.svg?skipsvgo'
import IconMinus from '../../../../assets/img/minus.svg?skipsvgo'

export default {
  name: "CounterInput",
  components: {
    DefaultInput,
    IconPlus,
    IconMinus,
  },
  props: {
    value: {
      type: [String, Number, Boolean],
      default: '',
    },
    border: {
      type: Boolean,
      default: false,
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
    btnStyle: {
      type: Boolean,
      default: false,
    }
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
      this.$emit('update:updateCounter', this.localValue)
    },
    addCount() {
      this.localValue = +this.localValue + 1
      this.validateLocalValue()
      this.$emit('update:updateCounter', this.localValue)
    },
    passValue(val) {
      this.localValue = val
      this.validateLocalValue()
      this.$emit('update:updateCounter', this.localValue)
    },
    validateLocalValue() {
      if (this.minValue !== undefined && +this.minValue > +this.localValue) {
        this.localValue = this.minValue
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  @import "src/scss/colors";
  @import "src/scss/mixins/mixins";

  .counter-input {
    display: flex;
    align-items: center;

    &--border {
      padding: 8px;
      border: 1px solid $border-grey;
      border-radius: 8px;
    }

    &:deep(.default-input-wrap) {
      pointer-events: none;
    }

    &:deep(.default-input) {
      padding: 0;
      width: 36px;
      height: 32px;
      border: 0;
      font-size: 16px;
      font-style: normal;
      font-weight: 400;
      line-height: 20px;
    }

    &--select &:deep(.default-input){
      @include for-768 {
        width: 20px;
        height: 24px;
        font-size: 14px;
      }
    }

    &__field {
      //width: 58px;
      flex-shrink: 0;

      @include for-550 {
        width: calc(100% - 64px);
        text-align: center;
      }
    }

    &__control {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 32px;
      height: 32px;
      cursor: pointer;
      font-size: 14px;
      font-weight: 500;
      user-select: none;
      flex-shrink: 0;
      background: #F1F5F7;
      border-radius: 4px;

      &--disabled {
        &:deep(svg path) {
          stroke: #BFC6CC;
        }
      }
    }

    &--select &__control {
      @include for-768 {
        width: 25px;
        height: 25px;

        svg {
          width: 15px;
        }
      }
    }

    &--select &__field {
      @include for-768 {
        width: auto;
      }
    }

    .default-input-wrap input {
      padding-left: 6px;
      padding-right: 6px;
    }


    &--btn-style {
      justify-content: space-between;
      background: $black;
      border-radius: 8px;
      min-height: 48px;
      padding: 0 24px;
    }

    &--btn-style &__counter, 
    &--btn-style &__control {
      background: transparent;
    }

    &--btn-style &__control :deep(svg path)  {
      stroke: white;
    }

    &--btn-style :deep(.default-input) {
      color: $white;
      background: transparent;
    }

    &--btn-style &__content{
      display: none;
    }
  }


</style>