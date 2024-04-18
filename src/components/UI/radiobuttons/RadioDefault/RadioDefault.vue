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
      //padding-top: 2px;
      //padding-left: 28px;
      cursor: pointer;
      font-size: 16px;
      font-style: normal;
      font-weight: 400;
      line-height: 20px;
      padding: 12px 12px 12px 36px;
      border: 1px solid $border-grey;
      border-radius: 8px;


      &:before{
        content: '';
        position: absolute;
        left: 12px;
        top: 13px;
        width: 16px;
        height: 16px;
        border: 1px solid $border-grey;
        box-sizing: border-box;
        display: flex;
        border-radius: 50%;
      }


      &:after{
        content: '';
        position: absolute;
        left: 17px;
        top: 18px;
        width: 6px;
        height: 6px;
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
        background-color: $black;
        border: 1px solid $black;
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
