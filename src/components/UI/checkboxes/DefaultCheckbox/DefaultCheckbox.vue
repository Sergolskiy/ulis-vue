<template>
  <div class="default-checkbox"
       :class="{
          'empty-label' : !label,
          'default-checkbox__big-checkbox-style' : bigCheckboxStyle
        }"
  >
    <input type="checkbox"
           class="default-checkbox__input"
           :id="'default-checkbox-' + id"
           :checked="checked"
           :disabled="disabled"
           @change="change"
           :data-row-name="dataValue"
           :data-order-id="dataOrderId ? dataOrderId : false"
    >
    <label :for="'default-checkbox-' + id" class="default-checkbox__label">
      {{ label }}

      <slot name="content">

      </slot>
    </label>

    <div class="default-checkbox__help-text">
      {{ helpText }}
    </div>

    <span class="default-checkbox__error error-field" v-if="error && errorTxt">{{errorTxt}}</span>
  </div>
</template>

<script>
  export default {
    name: "DefaultCheckbox",

    props: {
      label: {
        type: String,
        default: '',
      },
      modelValue: {
        type: [String, Number, Boolean],
        default: '',
      },
      error: {
        type: Boolean,
        default: false,
      },
      errorTxt: {
        type: String,
        default: '',
      },
      disabled: {
        type: Boolean,
        default: false,
      },
      selectedNow: {
        type: Boolean,
        default: false,
      },
      bigCheckboxStyle: {
        type: Boolean,
        default: false,
      },
      dataValue: {
        type: [String, Number],
        default: '',
      },
      dataOrderId: {
        type: [String, Number],
        default: '',
      },
      helpText: {
        type: String,
        default: '',
      },
    },

    watch: {
      selectedNow: function(newVal) {
        this.checked = newVal
      },
      modelValue(newVal) {
        this.checked = newVal
      }
    },

    data () {
      return {
        id: null,
        checked: this.modelValue,
      }
    },

    mounted () {
      this.id = this.$.uid
      this.checked = this.modelValue
    },

    methods: {
      changeCheckbox(val){
        this.$emit('update:change', val.target.value);
      },

      change(val) {
        if (this.disabled) return

        this.checked = val.target.checked
        this.$emit('update:modelValue', this.checked);
        this.$emit('update:changeCheckbox', this.checked);
      }
    },

  }
</script>

<style lang="scss">
  @import "../../../../scss/mixins/mixins";
  @import "../../../../scss/colors";


  .default-checkbox{
    position: relative;
    width: fit-content;

    &__input{
      display: none;
    }

    &.block &__label{
      display: block;
    }

    &.bold &__label{
      font-weight: 500;
    }

    &__label{
      position: relative;
      padding-left: 27px;
      padding-top: 2px;
      cursor: pointer;
      font-size: 14px;
      font-style: normal;
      font-weight: 500;
      line-height: normal;
      display: flex;


      &:before{
        content: '';
        position: absolute;
        left: 0;
        top: 0;
        width: 20px;
        height: 20px;
        border: 1px solid $middle-grey;
        box-sizing: border-box;
        background: $white;
        border-radius: 4px;
        display: flex;
      }


      &:after{
        content: '';
        position: absolute;
        left: 0;
        top: 0;
        width: 20px;
        height: 20px;
        border-radius: 4px;
        display: flex;
        background-color: $accent-blue;
        background-image: url("../../../../assets/img/UI-group/white-check.svg");
        background-repeat: no-repeat;
        background-position: center;
        background-size: 11px;
        //background-size: contain;
        opacity: 0;
      }
    }

    &.white &__label{

      &:before{
        background: white;
        box-shadow: 0px 0px 1px 0px white;
      }

      &:after{

      }
    }

    &.brown-border &__label {
      &:before {
        //border: 2px solid $brown;
      }
    }

    &.big {
      .default-checkbox__label {
        padding-left: 50px;
      }
      .default-checkbox__label:before,
      .default-checkbox__label:after {
        width: 44px;
        height: 44px;
        border-radius: 12px;
      }
    }

    &__input:checked + &__label{
      &:before{
        //background-color: $brown;
        //border-color: $brown;
      }

      &:after{
        opacity: 1;
      }
    }

    &__input:disabled + &__label{
      cursor: default;
      pointer-events: none;

      &:before{
        opacity: 0.4;
      }
    }

    &__help-text{
      position: absolute;
      top: 100%;
      left: 24px;
      font-size: 12px;
      line-height: 18px;
      color: #8F7A61;
    }

    &__error{
      position: absolute;
      bottom: -18px;
      left: 0;
      font-size: 12px;
      line-height: 13px;
      font-weight: 500;
      color: $red;
      white-space: nowrap;
    }

    &__big-checkbox-style{
      .default-checkbox__label{
        &:before{
          left: 0;
          top: 0;
          width: 19px;
          height: 19px;
        }

        &:after{
          left: 0;
          top: 0;
          width: 19px;
          height: 19px;
        }
      }
    }
  }

  .empty-label{
    min-height: 16px;
  }

</style>
