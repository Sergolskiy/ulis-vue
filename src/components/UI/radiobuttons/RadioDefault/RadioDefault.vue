<template>
  <div class="radio-default">
    <input type="radio"
           class="radio-default__input"
           :id="'radio-default-' + id"
           :checked="checked"
           :disabled="disabled"
           @change="change"
           :name="name"
    >
    <label :for="'radio-default-' + id" class="radio-default__label" v-bind:class="{'d-flex': cardFlex}">
      {{ label }}

      <slot name="card">

      </slot>
    </label>

    <div class="radio-default__help-text">
      {{ helpText }}
    </div>

    <span class="radio-default__error error-field" v-if="error && errorTxt">{{errorTxt}}</span>
  </div>
</template>

<script>
  export default {
    name: "RadioDefault",

    data () {
      return {
        id: null,
        checked: this.value,
      }
    },

    props: {
      label: {
        type: String,
        default: '',
      },
      modelValue: {
        type: [String, Number, Boolean],
        default: '',
      },
      helpText: {
        type: String,
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
      name: {
        type: String,
        default: '',
      },
      cardFlex: {
        type: Boolean,
        default: false,
      },
    },

    watch: {
      modelValue(newVal) {
        this.checked = newVal
      }
    },

    mounted () {
      this.id = this.$.uid
      this.checked = this.modelValue
    },

    methods: {

      change: function() {
        this.$emit('update:modelValue', this.checked);
      }
    }
  }
</script>

<style lang="scss">
  @import "../../../../scss/mixins/mixins";
  @import "../../../../scss/colors";


  .radio-default{
    display: flex;
    position: relative;
    width: 100%;

    &__input{
      display: none;
    }

    &__label{
      position: relative;
      padding-top: 2px;
      padding-left: 28px;
      cursor: pointer;
      font-size: 14px;
      line-height: 21px;
      color: $black;
      font-weight: 600;


      &:before{
        content: '';
        position: absolute;
        left: 0;
        top: 2px;
        width: 20px;
        height: 20px;
        border: 1px solid $middle-grey;
        box-sizing: border-box;
        display: flex;
        border-radius: 50%;
      }


      &:after{
        content: '';
        position: absolute;
        left: 6px;
        top: 8px;
        width: 8px;
        height: 8px;
        display: flex;
        opacity: 0;
        border-radius: 50%;
        background-color: $white;
      }
    }

    &__input:checked + &__label{
      &:before{
        /*background-color: $brown;*/
        //border-color: $brown;
        background-color: $accent-blue;
        border: 1px solid $accent-blue;
      }

      &:after{
        opacity: 1;
      }
    }

    &__input:disabled + &__label{
      &:before{
        opacity: 0.4;
      }
    }

    &__input:checked:disabled + &__label{
      &:after{
        opacity: 0.4;
      }
    }

    &__help-text{
      position: absolute;
      top: 100%;
      left: 24px;
      font-size: 12px;
      line-height: 18px;
      //color: $borderBrown;
    }

    &__error{
      position: absolute;
      bottom: -18px;
      left: 0;
      font-size: 11px;
      line-height: 13px;
      //color: $orange;
    }
  }

  .empty-label{
    min-height: 20px;
  }
</style>
