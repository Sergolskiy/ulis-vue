<template>
  <div class="default-select"
       :class="{
          'default-select--active' : vSelectModel,
          'disabled-active' : disabled === true && vSelectModel,
          'disabled' : disabled === true,
          'ui-no-valid': error
        }"
  >

<!--    <div v-if="label && labelIcon" class="v-select__icon"-->
<!--          :class="{-->
<!--            [labelIcon]: labelIcon,-->
<!--          }"-->
<!--    ></div>-->
<!--    <div class="v-select__label"-->
<!--         :class="{-->
<!--            'v-select__label&#45;&#45;icon': labelIcon,-->
<!--          }"-->
<!--    >-->
<!--      {{ label }}-->
<!--    </div>-->

    <FormLabel
        v-if="label || labelIcon"
        class="mb-2"
        :type="'black'"
        :label="label"
        :labelIcon="labelIcon"
    />
<!--    :label="optionsLabel"-->
<!--    :getOptionLabel="getOptionLabel"-->
    <v-select
        append-to-body
        :options="options"
        :label="optionsLabel"
        :disabled="disabled"
        :calculate-position="withPopper"
        :clearable="clearable"
        :filterable="false"
        :selectable="option => !option.hasOwnProperty('disabled')"
        v-model="vSelectModel"
        @update:modelValue="onChange"
        @search="functionSearch"
    >
<!--      <template #header>-->
<!--      -->
<!--      </template>-->

      <template v-slot:open-indicator>
        <div class="v-select__arrow">
          <ArrowSelect/>
        </div>
      </template>

      <template v-slot:option="option" v-if="typeSelect !== ''">

        <!-- *********************** ADMIN *********************** -->
        <div v-if="typeSelect === 'users'">
          {{option.first_name}} {{option.last_name}}
        </div>
        <div v-if="typeSelect === 'users-with-company'">
          {{option.first_name}} {{option.last_name}} ({{option.company_name}})
        </div>

        <!-- *********************** DEFAULT *********************** -->
        <div class="d-flex flex-column" v-if="!typeSelect">
          {{ option[optionsLabel] }}
        </div>
      </template>


      <template #selected-option="option" v-if="typeSelect !== ''">

        <!-- *********************** PROFORM HS CODE *********************** -->
        <div v-if="typeSelect === 'users'">
          {{option.first_name}} {{option.last_name}}
        </div>
        <div v-if="typeSelect === 'users-with-company'">
          {{option.first_name}} {{option.last_name}} ({{option.company_name}})
        </div>

        <!-- *********************** DEFAULT *********************** -->
        <template v-if="!typeSelect">
          {{option[optionsLabel]}}
        </template>
      </template>

<!--      @click="$refs.select.open = false"-->
<!--      <template #no-options="option" >-->
<!--        dsfdsf-->
<!--        {{option}}-->
<!--      </template>-->

    </v-select>

    <span class="default-select__error error-field" v-if="error && errorTxt">{{errorTxt}}</span>
    <span class="default-select__caption" v-if="caption">{{caption}}</span>

  </div>
</template>

<script>

import { createPopper } from '@popperjs/core';
import ArrowSelect from '../../../../assets/img/UI-group/arrow-select.svg'
import FormLabel from "../../labels/FormLabel/FormLabel.vue";

export default {
  name: "SearchSelect",

  components: {
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
    typeSelect: {
      type: [String, Boolean],
      default: false,
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
      default: true,
    },
    searchable: {
      type: Boolean,
      default: true,
    },
    labelIcon: {
      type: [String, Boolean],
      default: false,
    },
    functionSearch: {
      type: [String, Boolean, Object, Function],
      default: null,
    },
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

    getOptionLabel(option) {
      if (typeof option === 'object') {
        if (this.typeSelect === 'users') {
          return `${option.first_name} ${option.last_name}`
        }
        if (!option.hasOwnProperty(this[this.optionsLabel])) {
          return console.warn(
              `[vue-select warn]: Label key "option.${this.optionsLabel}" does not` +
              ` exist in options object ${JSON.stringify(option)}.\n` +
              'https://vue-select.org/api/props.html#getoptionlabel'
          )
        }
        return option[this.label]
      }
      return option;
    }

  }

}
</script>

<style lang="scss">


@import "src/scss/colors";

.vs__clear {
  svg {
    position: relative;
    top: 2px;
    right: 4px;

    path {
      fill: $middle-gre;
    }
  }

}

.default-select{
  position: relative;

  &.white .vs__dropdown-toggle{
    background: white;
  }

  &__option-ico{
    margin-right: 10px;
    display: inline-flex;
    justify-content: center;
    align-items: center;
  }

  //&--active {
  //  .v-select__label {
  //    top: -5px;
  //    //top: auto;
  //    //bottom: 36px;
  //    white-space: nowrap;
  //    background: white;
  //    background: linear-gradient(0deg, #F8F4EE 0%, #FFFFFF 105.56%);
  //    padding: 0 2px;
  //    font-size: 10px;
  //    line-height: 12px;
  //  }
  //
  //  .v-select .vs__dropdown-toggle{
  //    border-color: brown;
  //
  //  }
  //}


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

}




.v-select {

  &__arrow {
    position: relative;
    top: 2px;
    left: -6px;
    width: 16px;
    height: 16px;
    position: relative;
    transition: 0.3s;
    transform: rotate(180deg);
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
    &.group-icon {
      background: url("../../../../assets/img/common/label-ico/group.svg") center center no-repeat;
    }
  }
}

.v-select__label{
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

  &--icon {
    margin-left: 20px;
  }
}

.vs--open .v-select__arrow{
  transform: rotate(0);
}

.vs--open .v-select__label{
  top: -5px;
  background: white;
  padding: 0 2px;
  font-size: 10px;
  line-height: 12px;
}

.vs--open .vs__dropdown-toggle{
  border-color: $accent-blue !important;
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
}

.vs__dropdown-toggle{
  padding-left: 19px;
  min-height: 44px;
  padding-bottom: 8px !important;
  border: 1px solid $middle-gre;
  box-sizing: border-box;
  border-radius: 12px;
}

.vs--open .vs__dropdown-toggle{
  border-color: $accent-blue;
}

.vs__selected{
  padding: 0;
  margin: 0;
  top: 8px;


}

.vs__search, .vs__search:focus{
  padding: 0;
}

.vs__selected-options{
  padding: 0;
  top: 2px;
  /*display: block;*/
  /*overflow: hidden;*/
}



.vs__dropdown-menu{
  /*top: 0;*/
  border-radius: 12px;
  border: 1px solid $darker-blue;
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
    background: $middle-gre;
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

//.v-select.drop-up.vs--open .vs__dropdown-toggle {
//  border-radius: 0 0 4px 4px;
//  border-top-color: transparent;
//  border-bottom-color: rgba(60, 60, 60, 0.26);
//  background: red !important;
//}


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

</style>