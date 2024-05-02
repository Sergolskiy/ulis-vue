<template>
  <label :for="'default-input-' + id" class="default-input-wrap"
         :class="{
          active: activeInput || ((modelValue || typeof modelValue === 'number') && modelValue.toString().length > 0),
          'active-placeholder' : (placeholder && placeholder.length > 0),
          'disabled' : disabled === true,
          'default-input-wrap--text-security' : textSecurity && !showSecurity,
          'ui-no-valid': error
         }"
  >
<!--        v-bind:class="{'iphone-input': iphoneDetect()}"-->
<!--    <span class="default-input-wrap__label"-->
<!--          :class="{-->
<!--            'default-input-wrap__label&#45;&#45;icon': labelIcon,-->
<!--          }"-->
<!--          v-if="label"-->
<!--    >-->
<!--      {{ label }}-->
<!--    </span>-->
<!--    <span v-if="label && labelIcon" class="default-input-wrap__icon"-->
<!--          :class="{-->
<!--            [labelIcon]: labelIcon,-->
<!--          }"-->
<!--    ></span>-->
    <FormLabel
        v-if="label || labelIcon"
        class="mb-2"
        :label="label"
        :type="labelType"
    />
    <span class="default-input-wrapper">
      <input
          class="default-input"
          v-on:input="handleInput($event.target.value)"
          :id="'default-input-' + id"
          :type="checkType()"
          :value="modelValue"
          :placeholder="placeholder"
          :disabled="disabled === true"
          :maxlength="maxLength"
          :name="name ? name : `name-` + id"
          :readonly="readonly ? 'readonly' : false"
          :pattern="pattern"
          :autocomplete="autocomplete ? autocomplete : autocompleteOff ? 'new-password' : false"
          :x-autocompletetype="autocompletetype"
          @focus="activeInput = true"
          @blur="blur($event.target.value)"
          @keyup.enter="handleEnter"
          @change="change($event)"
      >
      <span class="default-input-wrap__pass" @click="showPass" v-if="type === 'password'"></span>
      <span class="default-input-wrap__pass" @click="showSecurityFunc" v-if="textSecurity"></span>
      <span :class="'default-input-wrap__ico ' + icoType"
            @click="icoClick"
      ></span>

<!--      <span v-if="passwordValidate && activeInput"-->
<!--            class="default-input-wrap__popup"-->
<!--      >-->
<!--        <PasswordRequirements-->
<!--            :value="modelValue"-->
<!--            :visibleValidation="true"-->
<!--        />-->
<!--        <span class="password-reqs-info">The password expiration period is one year</span>-->
<!--      </span>-->
    </span>
    <span class="default-input-wrap__caption" v-if="caption">{{caption}}</span>
    <span class="default-input-wrap__error error-field" v-if="error && errorTxt">{{errorTxt}}</span>
  </label>
</template>

<script>
  // import PasswordRequirements from "../../../coreComponents/PasswordRequirements/PasswordRequirements.vue";
  import FormLabel from "../../labels/FormLabel/FormLabel.vue";
  export default {
    name: "DefaultInput",
    components: {FormLabel},
    data () {
      return {
        id: null,
        isShowPass: false,
        activeInput: false,

        showSecurity: false,
      }
    },

    props: {
      type: {
        type: String,
        default: 'text',
      },
      labelType: {
        type: String,
        default: 'text',
      },
      label: {
        type: String,
        default: '',
      },
      placeholder: {
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
      caption: {
        type: String,
        default: '',
      },
      disabled: {
        type: Boolean,
        default: false,
      },
      maxLength: {
        type: Number,
        default: null,
      },
      name: {
        type: String,
        default: '',
      },
      readonly: {
        type: Boolean,
        default: false,
      },
      autocompleteOff: {
        type: [String, Boolean],
        default: '',
      },
      autocomplete: {
        type: [String, Boolean],
        default: '',
      },
      autocompletetype: {
        type: [String, Boolean],
        default: '',
      },
      pattern: {
        type: String,
        default: '',
      },
      textSecurity: {
        type: String,
        default: '',
      },
      resetAfter: {
        type: Boolean,
        default: false,
      },
      labelIcon: {
        type: [String, Boolean],
        default: false,
      },
      passwordValidate: {
        type: Boolean,
        default: false,
      },
      bigIco: {
        type: Boolean,
        default: false,
      },
      icoType: {
        type: [String],
        default: '',
      },
    },

    mounted () {
      this.id = this.$.uid
    },

    // watch: {
    //   modelValue(newVal) {
    //     this.modelValue = newVal
    //   }
    // },

    methods: {
      change(event){
        this.$emit('update:change', event.target.value)
        //only use if no value/v-model was passed
        if (this.resetAfter === true) {
          event.target.value = ''
        }
      },

      showPass() {
        this.isShowPass = !this.isShowPass
      },

      showSecurityFunc() {
        this.showSecurity = !this.showSecurity
      },

      checkType() {
        if(this.type === 'password' && this.isShowPass){
          return 'text'
        } else {
          return this.type;
        }
      },

      handleInput (value) {
        this.$emit('update:modelValue', value)
      },

      blur(value) {
        this.activeInput = false
        this.$emit('update:blur', value)
      },

      handleEnter() {
        this.$emit('update:onEnter')
      },

      icoClick() {
        this.$emit('update:icoClick')
      },

    }
  }
</script>

<style lang="scss">
  @import "../../../../scss/mixins/mixins";
  @import "../../../../scss/colors";


  .default-input-wrap{
    display: block;
    position: relative;

    &--text-security {
      input {
        -webkit-text-security: disc;
      }
    }

    &.center input{
      text-align: center;
    }

    &.right input{
      text-align: right;
    }

    input{
      border-radius: 8px;
      border: 1px solid $border-grey;
      background: $white;
      font-size: 16px;
      font-style: normal;
      font-weight: 400;
      line-height: 24px;
      width: 100%;
      padding-left: 16px;
      padding-right: 16px;
      height: 48px;
      box-sizing: border-box;
      transition: border-color 0.3s;

      &::placeholder{
        // font-size: 14px;
        color: $grey;
        font-size: 16px;
        vertical-align: middle;
        line-height: revert;
      }

      &:disabled{
        background: $white;
        //color: $border-grey;
        //border-color: $border-grey;
        opacity: 1;
      }

      &:focus-visible,
      &:focus{
        //border-color: $accent-blue;
        outline: 0;
      }
    }

    &--alt {
      input {
        border-bottom: 1px solid $border-grey;
        border-left: none;
        border-right: none;
        border-top: none;
        border-radius: 0;
        padding-left: 0;
        padding-right: 0;
      }
    }

    &.ui-no-valid input {
      border-color: $warning-red-border;
    }

    &__label{
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
      cursor: pointer;

      &--icon {
        margin-left: 20px;
      }
    }

    &__ico {
      width: 24px;
      height: 24px;
      position: absolute;
      top: 50%;
      margin-top: -12px;
      right: 12px;

      &.copy {
        background: url("../../../../assets/img/copy-text.svg") center center no-repeat;
        cursor: pointer;
      }

      &.currency {
        background: url("../../../../assets/img/currencies.svg") center center no-repeat;
      }
    }

    &.disabled .default-input-wrap__ico {
      opacity: 0.25;
    }

    //&.big-ico

    &.disabled &__label{
      color: $border-grey;
    }

    &.disabled.active input,
    &.disabled input{

    }

    &__pass{
      display: block;
      width: 16px;
      height: 16px;
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      right: 16px;
      background: url("../../../../assets/img/common/pass-show.svg") center center no-repeat;
      cursor: pointer;
    }

    &__error{
      position: absolute;
      bottom: -18px;
      right: 0;
      font-size: 12px;
      font-style: normal;
      //font-weight: 500;
      line-height: normal;
      color: $warning-red-border;
      white-space: nowrap;
      z-index: 1;

      //@include for-768{
      //  bottom: -15px;
      //}
    }

    &__caption{
      width: 100%;
      text-align: right;
      font-size: 12px;
      font-style: normal;
      font-weight: 500;
      line-height: normal;
      color: $border-grey;
      display: flex;
      justify-content: flex-end;
      margin-top: 3px;
      margin-bottom: -10px;
    }
    &__ico {

      &.scale-ico {
        position: absolute;
        //pointer-events: none;
        cursor: pointer;
        top: 12px;
        right: 12px;
        display: block;
        width: 16px;
        height: 16px;
        background: url("../../../../assets/img/UI-group/scale.svg") center center no-repeat;
        background-size: cover;
      }

    }

  }

  .default-input-wrapper {
    position: relative;
    display: block;
  }




</style>
