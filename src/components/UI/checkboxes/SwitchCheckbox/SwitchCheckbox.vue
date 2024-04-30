<template>
  <div class="switch-checkbox"
       :class="{
          'horizontal' : horizontal === true
        }"
  >
    <input type="checkbox"
           class="switch-checkbox__input"
           :id="'switch-checkbox-' + id"
           :checked="checked"
           :disabled="disabled"
           @change="change"
    >
    <label
        class="switch-checkbox__label"
        :for="'switch-checkbox-' + id"
        v-bind:class="{
          'switch-checkbox__label--no-hover': noHover === true,
          'switch-checkbox__label--with-divider': withDivider
        }"
    >
      <span class="switch-checkbox__label-txt"
        v-if="horizontal || withDivider"
      >
        {{ label }}
      </span>
      <template v-else>
        {{label}}
      </template>

      <slot name="tooltip">

      </slot>

      <span v-if="withDivider" class="switch-checkbox__divider"></span>

      <span class="switch-checkbox__ico" v-bind:class="{active: checked}"></span>
    </label>

    <div class="switch-checkbox__help-text">
      {{ helpText }}
    </div>

    <span class="switch-checkbox__error error-field" v-if="error && errorTxt">{{errorTxt}}</span>
  </div>
</template>

<script>
  export default {
    name: "SwitchCheckbox",

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
      noHover: {
        type: Boolean,
        default: false,
      },
      horizontal: {
        type: Boolean,
        default: false,
      },
      helpText: {
        type: String,
        default: '',
      },
      withDivider: {
        type: Boolean,
        default: false,
      }
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


  .switch-checkbox{
    display: flex;
    position: relative;

    &__input{
      display: none;
    }

    &.brown &__label{
      //color: $brown;
    }

    &.fw-medium &__label{
      font-weight: 500;
    }

    &.table-head-style{

      font-size: 16px;
      line-height: 19px;
    }

    &__label{
      position: relative;
      display: flex;
      align-items: center;
      cursor: pointer;
      font-size: 14px;
      line-height: 16px;

      &--no-hover {
        cursor: initial;
      }

      &--with-divider {
        width: 100%;

        .switch-checkbox__label-txt {
          flex-shrink: 0;
        }

        .switch-checkbox__ico {
          margin-left: 0;
          flex-shrink: 0;
        }
      }
    }

    &__divider {
      width: 100%;
      height: 1px;
      background-color: $darker-blue;
      margin: 0 8px;
      display: block;
    }

    &__ico{
      position: relative;
      width: 38px;
      height: 22px;
      border: 1px solid $darker-blue;
      background: $white;
      border-radius: 29px;
      display: block;
      margin-left: 15px;

      &.active {
        background: $darker-blue;
      }

      &:after{
        content: "";
        position: absolute;
        top: -1px;
        left: -1px;
        display: block;
        width: 22px;
        height: 22px;
        background: $white;
        border: 1px solid $middle-grey;
        border-radius: 50%;
        transition: 0.3s;
      }

      &.active:after{
        left: 16px;
        background: $accent-blue;
        border-color: $accent-blue;
        opacity: 1;
      }
    }

    &__input:checked + &__label{
      &:before{
        //background-color: #8F7A61;
        //border-color: #8F7A61;
      }

      &:after{
        opacity: 1;
      }
    }

    &__input:disabled + &__label{
      color: $black;

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
      font-size: 11px;
      line-height: 13px;
      color: $warning-red-border;
    }

    &.horizontal{
      .switch-checkbox__label{
        padding-right: 30px;
        width: 100%;

        &:after{
          content: '';
          //background: red;
          width: calc(100% - 30px);
          height: 1px;
          position: absolute;
          left: 0;
          top: 50%;
          transform: translateY(-50%);
          opacity: 0.3;
        }
      }

      .switch-checkbox__ico{
        position: absolute;
        right: 0;
        top: 50%;
        transform: translateY(-50%);
        margin-left: 0;
      }

      .switch-checkbox__label-txt{
        font-size: 14px;
        line-height: 16px;
        font-weight: normal;
        color: $black;
        background: white;
        position: relative;
        z-index: 1;
        padding-right: 5px;
      }
    }

    &.wider-gap {
      .switch-checkbox__ico {
        margin-left: 32px;
      }
    }

    &.fsz-16 {
      .switch-checkbox__label-txt {
        font-size: 16px;
        font-weight: 500;
        line-height: 19px;
      }
    }
  }

  .empty-label{
    min-height: 20px;
  }

</style>
