<template>
  <div class="default-select"
       :class="{
          'default-select--active' : vSelectModel,
          'disabled-active' : disabled === true && vSelectModel,
          'disabled' : disabled === true,
          'ui-no-valid': error
        }"
  >


    <FormLabel
        v-if="label || labelIcon"
        class="mb-2"
        :type="'black'"
        :label="label"
        :labelIcon="labelIcon"
    />

    <v-select
        :options="options"
        @update:modelValue="onChange"
        v-model="vSelectModel"
        :label="optionsLabel"
        append-to-body
        :calculate-position="withPopper"
        :disabled="disabled"
        :filter-by="myFilter"
        :clearable="clearable"
        :searchable="searchable"
        :selectable="option => !option.hasOwnProperty('disabled')"
        :placeholder="placeholder"
    >
<!--      <template #header>-->
<!--      -->
<!--      </template>-->

      <template v-slot:open-indicator>
        <div class="v-select__arrow">
          <ArrowSelect/>
        </div>
      </template>

<!--      slot-scope="option"-->
      <template v-slot:option="option"  v-if="customValue !== ''">

        <!-- *********************** ADMIN *********************** -->
<!--        <div v-if="customValue === 'adminItem'">-->
<!--          {{option.user_personal_contact.user_full_name}} <br>-->
<!--          <b>{{option.email}}</b>-->
<!--        </div>-->

        <!-- *********************** DEFAULT *********************** -->
        <div class="d-flex flex-column" v-if="!customValue">
          <div class="d-flex align-items-center" v-if="withIco && option['icoName']">
            <!-- <LinkButton label="" :type="option['icoName']" class="mr-2"/> -->
            {{ option[optionsLabel] }} 
          </div>
          <div class="d-flex align-items-center" v-else-if="imageOptionLabel">
            <div class="default-select__img-icon">
              <img v-if="option[imageOptionLabel]" :src="option[imageOptionLabel]" alt="">
            </div>
            {{ option[optionsLabel] }}
          </div>
          <template v-else>
            {{ option[optionsLabel] }}
          </template>
        </div>
      </template>


      <template #selected-option="option" v-if="customValue !== ''">

        <!-- *********************** DEFAULT *********************** -->
        <template v-if="!customValue">

          {{option[optionsLabel]}}
        </template>
      </template>


      <template slot="no-options" @click="$refs.select.open = false">
        <div v-if="defaultNoOptions">
          {{$t(`${defaultNoOptions}.localization_value.value`)}}
        </div>
        <div v-else>
          {{$t('common_SorryMatchingOptions.localization_value.value')}}
        </div>
      </template>

    </v-select>

    <span class="default-select__error error-field" v-if="error && errorTxt">{{errorTxt}}</span>
    <span class="default-select__caption" v-if="caption">{{caption}}</span>

  </div>
</template>

<script>

import { createPopper } from '@popperjs/core';
import ArrowSelect from '../../../../assets/img/arrov.svg'
import FormLabel from "../../labels/FormLabel/FormLabel.vue";
// import LinkButton from "../../buttons/LinkButton/LinkButton.vue";

export default {
  name: "DefaultSelect",

  components: {
    // LinkButton,
    FormLabel,
    ArrowSelect,
  },

  props: {
    options: {
      type: Array,
      default: [],
    },
    selected: {
      type: [Object, String],
      default: null,
    },
    error: {
      type: Boolean,
      default: false,
    },
    errorTxt: {
      type: String,
      default: '',
    },
    label: {
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
    optionsLabel: {
      type: String,
      default: '',
    },
    heightIco: {
      type: [String, Number],
      default: null,
    },
    optionIcoName: {
      type: String,
      default: null,
    },
    optionIcoVariable: {
      type: String,
      default: null,
    },
    customValue: {
      type: String,
      default: null,
    },
    defaultNoOptions: {
      type: String,
      default: null,
    },
    clearable: {
      type: Boolean,
      default: false,
    },
    searchable: {
      type: Boolean,
      default: true,
    },
    labelIcon: {
      type: [String, Boolean],
      default: false,
    },
    withIco: {
      type: Boolean,
      default: false,
    },
    imageOptionLabel: {
      type: [String, Boolean],
      default: false,
    },
    placeholder: {
      type: String,
      default: false,
    }
  },

  watch: {
    selected: function(newVal) {
      this.vSelectModel = newVal;
    }
  },

  data() {
    return {
      vSelectModel: '',

      myFilter: (option, label, search) => {

        // if(this.otherValue === 'consolidationUnion') {
        //   let temp = search.toLowerCase();
        //   return option?.tracking_number ? option?.tracking_number.toLowerCase().indexOf(temp) > -1 : false
        // }

        return (label || '').toLowerCase().indexOf(search.toLowerCase()) > -1
      }
    }
  },

  mounted() {
    this.vSelectModel = this.selected;
  },

  methods: {
    withPopper (dropdownList, component, {width}) {
      dropdownList.style.width = width
      const popper = createPopper(component.$refs.toggle, dropdownList, {})
      return () => popper.destroy()
    },


    onChange(value){
      this.$emit('update:modelValue', value);
    },

  }

}
</script>

<style lang="scss">


@import "../../../../scss/colors";

.default-select{
  position: relative;

  .vs__dropdown-toggle{
    padding: 0;

    .vs__actions{
      padding: 0;
      min-width: 24px;
   }
  }

  &.white .vs__dropdown-toggle{
    background: white;
  }

  .vs--searchable .vs__search,
  .vs__search{
    height: 100%;
    // padding-left: 12px;

    &::placeholder{
      // color: $gray-text;
      color: #BFC6CC !important;
    }
  }


  &__option-ico{
    margin-right: 10px;
    display: inline-flex;
    justify-content: center;
    align-items: center;
  }


  &.ui-no-valid .v-select .vs__dropdown-toggle{
    border: 1px solid $red;
  }
  

  &__error{
    position: absolute;
    bottom: -18px;
    right: 0;
    font-size: 11px;
    line-height: 13px;
    color: $red;
    z-index: 1;
  }

  &__caption{
    width: 100%;
    text-align: right;
    font-size: 11px;
    line-height: 13px;
    color: $darker-blue;
    display: flex;
    justify-content: flex-end;
    margin-top: 15px;
    margin-bottom: 0;
  }

  &__img-icon {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 24px;
    height: 24px;
    margin-right: 4px;

    img {
      max-width: 100%;
      max-height: 100%;
    }
  }

  .vs__selected-options{
    padding: 0;
  }

  .vs__search, .vs__search:focus{
    padding: 0;
  }
}

// .vs--single.vs--open .vs__selected, .vs--single.vs--loading .vs__selected{
  // this classes  work when you clicked on options, absolute for items 
// }


.v-select {

  &.vs--open,
  &:hover{
    // background-color: $stroke-gray;
    background-color: #DCE0E4;
    transition: .3s;
  }

  &__arrow {
    position: relative;
    // top: 2px;
    left: -6px;
    width: 16px;
    height: 16px;
    position: relative;
    transition: 0.3s;
    transform: rotate(0deg);
  }

  &__icon {
    width: 16px;
    height: 16px;
    position: absolute;
    top: 0;
    left: 0;

    // &.name-icon {
    //   background: url("../../../../assets/img/common/label-ico/fname.svg") center center no-repeat;
    // }
    // &.lname-icon {
    //   background: url("../../../../assets/img/common/label-ico/lname.svg") center center no-repeat;
    // }
    // &.email-icon {
    //   background: url("../../../../assets/img/common/label-ico/email.svg") center center no-repeat;
    // }
    // &.phone-icon {
    //   background: url("../../../../assets/img/common/label-ico/phone.svg") center center no-repeat;
    // }
    // &.pass-icon {
    //   background: url("../../../../assets/img/common/label-ico/lock.svg") center center no-repeat;
    // }
    // &.customer-icon {
    //   background: url("../../../../assets/img/common/label-ico/customer.svg") center center no-repeat;
    // }
    // &.address-icon {
    //   background: url("../../../../assets/img/common/label-ico/address.svg") center center no-repeat;
    // }
    // &.city-icon {
    //   background: url("../../../../assets/img/common/label-ico/city.svg") center center no-repeat;
    // }
    // &.country-icon {
    //   background: url("../../../../assets/img/common/label-ico/country.svg") center center no-repeat;
    // }
    // &.state-icon {
    //   background: url("../../../../assets/img/common/label-ico/state.svg") center center no-repeat;
    // }
    // &.zip-icon {
    //   background: url("../../../../assets/img/common/label-ico/zip.svg") center center no-repeat;
    // }
    // &.discount-icon {
    //   background: url("../../../../assets/img/common/label-ico/discount.svg") center center no-repeat;
    // }
    // &.payments-icon {
    //   background: url("../../../../assets/img/common/label-ico/payments.svg") center center no-repeat;
    // }
    // &.checklist-icon {
    //   background: url("../../../../assets/img/common/label-ico/checklist.svg") center center no-repeat;
    // }
    // &.sales-icon {
    //   background: url("../../../../assets/img/common/label-ico/sales.svg") center center no-repeat;
    // }
    // &.roles-icon {
    //   background: url("../../../../assets/img/common/label-ico/roles.svg") center center no-repeat;
    // }
    // &.customer-2-icon {
    //   background: url("../../../../assets/img/common/label-ico/customer-2.svg") center center no-repeat;
    // }
    // &.status-icon {
    //   background: url("../../../../assets/img/common/label-ico/status.svg") center center no-repeat;
    // }
    // &.group-icon {
    //   background: url("../../../../assets/img/common/label-ico/group.svg") center center no-repeat;
    // }

    &.location-icon {
      background: url("../../../../assets/img/map.svg") center center no-repeat;
    }
  }
}

.v-select__label{
  // color: $gray-dark;
  color: #808080;
  font-size: 14px;
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

  &--icon {
    margin-left: 20px;
  }
}

.vs--open .v-select__arrow{
  transform: rotate(180deg);
}

.vs--open .v-select__label{
  // top: -5px;
  background: white;
  padding: 0 2px;
  font-size: 10px;
  line-height: 12px;
}

.vs--open .vs__dropdown-toggle{
  // border-color: $accent-blue !important;
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
}

.vs__dropdown-toggle{
  padding-left: 12px;
  min-height: 48px;
  // padding-bottom: 12px !important;
  // border: 1px solid $middle-gre;
  box-sizing: border-box;
  border-radius: 8px;
}


.vs--open .vs__dropdown-toggle{
  border-color: $accent-blue;
}

.vs__selected{
  padding: 0;
  margin: 0;
  // top: 8px;
}


.vs__selected-options{
  // top: 2px;
  /*display: block;*/
  /*overflow: hidden;*/
  // min-height: 48px;
}



.vs__dropdown-menu{
  /*top: 0;*/
  border-radius: 12px;
  border: 1px solid $darker-blue;
  border: 1px solid red;
  //box-shadow: 0px 4px 7px red;
  padding-top: 0;
  padding-bottom: 0;
  max-height: 200px;

  /* width */
  &::-webkit-scrollbar {
    width: 2px;
    height: 2px;
    border: 1px;
  }

  /* Track */
  &::-webkit-scrollbar-track {
    background: transparent;
    margin-right: 8px;
  }

  /* Handle */
  &::-webkit-scrollbar-thumb {
    // background: $middle-gre;
  }

  /* Handle on hover */
  &::-webkit-scrollbar-thumb:hover {
    background: $darker-blue;
    opacity: .5;
  }

  .vs__no-options{
    height: 42px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .vs__actions svg path{
    fill: #8F7A61;
  }

  .vs__dropdown-option{
    min-height: 44px;
    display: flex;
    align-items: center;
    color: $black;
    white-space: normal;
    //border-bottom: 1px solid red;

    &:last-child{
      border-bottom: 0;
    }

    &--highlight{
      background: $darker-blue;
      color: $black;
    }
  }

}

[data-popper-placement='top'],
[data-popper-placement='bottom'] {
  border-radius: 12px;
  border: 1px solid $darker-blue;
  box-shadow: none;
  margin-top: 4px !important;
}

[data-popper-placement='top'] {
  margin-bottom: 4px !important;
}

.vs--disabled .vs__dropdown-toggle {
  background: #EBF2FE;
}

.vs--disabled .vs__clear {
  background-color: #EBF2FE;
}

.vs--disabled .vs__search {
  background-color: #EBF2FE;
}

.vs--disabled .vs__selected {
  // color: $middle-grey;
}

</style>