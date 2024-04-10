<template>
  <div class="datepicker-default" :class="{'ui-no-valid': error}">
    <label class="datepicker-default__label"
           :class="{ active: activeInput || value != null || placeholder != null || label != null, disabled : disabled === true}"
           @click="activeInput = true"
           :id="'datepicker-default-' + id"
    >
<!--      <span class="datepicker__txt">-->
<!--        {{label}}-->
<!--      </span>-->

      <FormLabel
          v-if="label || labelIcon"
          class="mb-2"
          :type="'black'"
          :label="label"
          :labelIcon="labelIcon"
          :bigIco="bigIco"
      />
      <slot name="body">

      </slot>
      <span class="default-select__error error-field" v-if="error && errorTxt">{{errorTxt}}</span>
    </label>
  </div>
</template>

<script>

  import FormLabel from "../../labels/FormLabel/FormLabel.vue";

  export default {
    name: "DatePickerDefault",
    components: {FormLabel},
    props: {
      label: {
        type: String,
        default: '',
      },
      value: {
        type: [String, Number],
        default: '',
      },
      placeholder: {
        type: String,
        default: '',
      },
      disabled: {
        type: Boolean,
        default: false,
      },
      error: {
        type: Boolean,
        default: false,
      },
      errorTxt: {
        type: String,
        default: '',
      },
      labelIcon: {
        type: [String, Boolean],
        default: false,
      },
      bigIco: {
        type: Boolean,
        default: false,
      },
    },

    data () {
      return {
        activeInput: false,
        id: this.$.uid,
      }
    },

    mounted(){
      document
        .querySelectorAll(".mx-datepicker .mx-input")
        .forEach(e => (e.readOnly = true))
    },

    methods: {
      go(){
        alert(345)
      }
    }
  }
</script>

<style lang="scss">
  @import '../../../../scss/colors';

  .datepicker-default{
    display: block;
    position: relative;

    &.white input[name='date']{
      background: white;
      border: 1px solid #F4ECE1;
      border-block: none;
    }

    &.white.active span.datepicker__txt {
      background: linear-gradient(0deg, #FFFFFF -0.91%, #F8F4EE 100%);
    }

    &.ui-no-valid input[name='date']{
      border: 1px solid $red;
    }

    input[name='date']{
      width: 100%;
      padding-left: 20px;
      height: 44px;
      background: $white;
      border: 1px solid $middle-gre;
      box-sizing: border-box;
      border-radius: 12px;
      font-size: 14px;
      font-style: normal;
      font-weight: 500;
      line-height: normal;

      &::placeholder{
        font-size: 14px;
        line-height: 16px;
        color: #7BA4EC;
        line-height: revert;
      }
    }

    &--apply {

      .main-button {
        margin-top: -44px;
        margin-left: auto;
        padding: 11px 14px;
      }
    }

    &__label{

      span.datepicker__txt {
        color: $black;
        font-size: 12px;
        font-style: normal;
        font-weight: 500;
        line-height: normal;
        transition: 0.15s all;
        margin-bottom: 8px;
        display: block;
        white-space: nowrap;
        text-overflow: ellipsis;
        max-width: calc(100% - 15px);
        overflow: hidden;
        cursor: text;
        cursor: pointer;
      }

      //&.active span.datepicker__txt{
      //  top: -5px;
      //  background: white;
      //  background: linear-gradient(0deg, #F8F4EE 0%, #FFFFFF 105.56%);
      //  padding: 0 2px;
      //  font-size: 10px;
      //  line-height: 12px;
      //}
      //
      &.disabled {
        cursor: default;
        pointer-events: none;
        //> span.datepicker__txt {
        //  background: #e9e2da !important;
        //}

        .mx-input{
          background: $darker-blue;
          color: $middle-grey;
          border-color: $middle-gre;
        }
      }

    }




    .mx-datepicker{
      width: 100%;
      /*max-width: 150px;*/
    }

    /*&.hideDate .mx-datepicker{*/
      /*width: 100% !important;*/
    /*}*/

    .mx-input[disabled="disabled"]{
      background: #7BA4EC;
    }

    .mx-icon-calendar {
      display: none;
    }

  }
</style>
