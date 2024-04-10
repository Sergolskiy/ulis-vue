<template>
  <label :for="'sum-input-' + id" class="sum-input-wrap"
         :class="{
          active: activeInput || ((modelValue || typeof modelValue === 'number') && modelValue.toString().length > 0),
          'active-placeholder' : (placeholder && placeholder.length > 0),
          'disabled' : disabled == true,
          'ui-no-valid': error
         }"
  >
    <FormLabel
        v-if="label || labelIcon"
        class="mb-2"
        :type="'black'"
        :label="label"
        :labelIcon="labelIcon"
        :bigIco="bigIco"
    />
    <span class="sum-input-wrapper">
      <input
          class="sum-input"
          v-on:input="handleInput($event.target.value)"
          v-maska:[priceMaskOptions]
          data-maska="0.99"
          data-maska-tokens="0:\d:multiple|9:\d:optional"
          :id="'sum-input-' + id"
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
      <span :class="'sum-input-wrap__ico ' + icoType"></span>
    </span>
    <span class="sum-input-wrap__caption" v-if="caption">{{caption}}</span>
    <span class="sum-input-wrap__error error-field" v-if="error && errorTxt">{{errorTxt}}</span>
  </label>
</template>

<script>
import FormLabel from "../../labels/FormLabel/FormLabel.vue";
import { vMaska } from "maska";
export default {
  name: "InputSum",
  components: {FormLabel},
  directives: { maska: vMaska },
  data () {
    return {
      id: null,
      activeInput: false,
      priceMaskOptions: {
        preProcess: val => val.replace(/[$,]/g, ''),
        postProcess: val => {
          if (!val) return ''

          const sub = 3 - (val.includes('.') ? val.length - val.indexOf('.') : 0)

          return Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
          }).format(val).replace('$', '')
              .slice(0, sub ? -sub : undefined)
        }
      },
    }
  },

  props: {
    type: {
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
    resetAfter: {
      type: Boolean,
      default: false,
    },
    labelIcon: {
      type: [String, Boolean],
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

  methods: {
    change(event){
      this.$emit('update:change', event.target.value)
      //only use if no value/v-model was passed
      if (this.resetAfter === true) {
        event.target.value = ''
      }
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

  }
}
</script>

<style lang="scss">
@import "../../../../scss/mixins/mixins";
@import "../../../../scss/colors";


.sum-input-wrap{
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
    border-radius: 12px;
    border: 1px solid $middle-gre;
    background: $white;
    font-size: 14px;
    line-height: 16px;
    width: 100%;
    padding-left: 16px;
    padding-right: 16px;
    height: 42px;
    box-sizing: border-box;
    transition: border-color 0.3s;

    &::placeholder{
      font-size: 14px;
      vertical-align: middle;
      line-height: revert;
    }

    &:disabled{
      background: $darker-blue;
      color: $middle-grey;
      border-color: $middle-gre;
      opacity: 1;
    }

    &:focus-visible,
    &:focus{
      border-color: $accent-blue;
      outline: 0;
    }
  }

  &--alt {
    input {
      border-bottom: 1px solid $middle-gre;
      border-left: none;
      border-right: none;
      border-top: none;
      border-radius: 0;
      padding-left: 0;
      padding-right: 0;
    }
  }

  &.ui-no-valid input {
    border-color: $red;
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

  &__icon {
    width: 16px;
    height: 16px;
    position: absolute;
    top: 0;
    left: 0;

    &.name-icon {
      background: url("../../../../assets/img/common/label-ico/fname.svg") center center no-repeat;
    }
    &.lname-icon {
      background: url("../../../../assets/img/common/label-ico/lname.svg") center center no-repeat;
    }
    &.email-icon {
      background: url("../../../../assets/img/common/label-ico/email.svg") center center no-repeat;
    }
    &.phone-icon {
      background: url("../../../../assets/img/common/label-ico/phone.svg") center center no-repeat;
    }
    &.pass-icon {
      background: url("../../../../assets/img/common/label-ico/lock.svg") center center no-repeat;
    }
    &.customer-icon {
      background: url("../../../../assets/img/common/label-ico/customer.svg") center center no-repeat;
    }
    &.address-icon {
      background: url("../../../../assets/img/common/label-ico/address.svg") center center no-repeat;
    }
    &.city-icon {
      background: url("../../../../assets/img/common/label-ico/city.svg") center center no-repeat;
    }
    &.country-icon {
      background: url("../../../../assets/img/common/label-ico/country.svg") center center no-repeat;
    }
    &.state-icon {
      background: url("../../../../assets/img/common/label-ico/state.svg") center center no-repeat;
    }
    &.zip-icon {
      background: url("../../../../assets/img/common/label-ico/zip.svg") center center no-repeat;
    }
    &.discount-icon {
      background: url("../../../../assets/img/common/label-ico/discount.svg") center center no-repeat;
    }
    &.payments-icon {
      background: url("../../../../assets/img/common/label-ico/payments.svg") center center no-repeat;
    }
    &.checklist-icon {
      background: url("../../../../assets/img/common/label-ico/checklist.svg") center center no-repeat;
    }
    &.list-icon {
      background: url("../../../../assets/img/common/label-ico/list.svg") center center no-repeat;
    }
    &.sales-icon {
      background: url("../../../../assets/img/common/label-ico/sales.svg") center center no-repeat;
    }
    &.roles-icon {
      background: url("../../../../assets/img/common/label-ico/roles.svg") center center no-repeat;
    }
    &.customer-2-icon {
      background: url("../../../../assets/img/common/label-ico/customer-2.svg") center center no-repeat;
    }
    &.status-icon {
      background: url("../../../../assets/img/common/label-ico/status.svg") center center no-repeat;
    }
    &.company-icon {
      background: url("../../../../assets/img/common/label-ico/company.svg") center center no-repeat;
    }
    &.dollar-icon {
      background: url("../../../../assets/img/common/label-ico/dollar.svg") center center no-repeat;
    }
    &.count-icon {
      background: url("../../../../assets/img/common/label-ico/count.svg") center center no-repeat;
    }
    &.inventory-icon {
      background: url("../../../../assets/img/common/label-ico/inventory.svg") center center no-repeat;
    }
    &.retail-price-icon {
      background: url("../../../../assets/img/common/label-ico/retail-price.svg") center center no-repeat;
    }
    &.controller-icon {
      background: url("../../../../assets/img/common/label-ico/controller.svg") center center no-repeat;
    }
    &.profit-icon {
      background: url("../../../../assets/img/common/label-ico/profit.svg") center center no-repeat;
    }
    &.structure-icon {
      background: url("../../../../assets/img/common/label-ico/structure.svg") center center no-repeat;
    }
    &.crown-icon {
      background: url("../../../../assets/img/common/label-ico/crown.svg") center center no-repeat;
    }
    &.refresh-mirr-icon {
      background: url("../../../../assets/img/common/refresh-mirrored.svg") center center no-repeat;
    }
    &.dimensions-icon {
      background: url("../../../../assets/img/common/label-ico/dimensions.svg") center center no-repeat;
    }
  }

  //&.big-ico

  &.disabled &__label{
    color: $middle-grey;
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
    font-weight: 500;
    line-height: normal;
    color: $red;
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
    color: $middle-grey;
    display: flex;
    justify-content: flex-end;
    margin-top: 3px;
    margin-bottom: -10px;
  }

  &__popup {
    position: absolute;
    display: block;
    width: 100%;
    padding: 16px 16px 20px;
    background-color: $white;
    border-radius: 12px;
    border: 1px solid $darker-blue;
    left: 0;
    top: calc(100% + 4px);
    z-index: 3;
  }

  &.scan-ico{
    &:before{
      content: '';
      position: absolute;
      left: 16px;
      top: 14px;
      width: 12px;
      height: 12px;
      //background: url("../../../../assets/img/UI-group/scan-ico.svg") center/contain no-repeat;
    }
  }
  &.scan-ico .sum-input{
    padding-left: 32px;
  }
  &.scan-ico:not(.active) &__label{
    padding-left: 20px;
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

.sum-input-wrapper {
  position: relative;
  display: block;
}




</style>
