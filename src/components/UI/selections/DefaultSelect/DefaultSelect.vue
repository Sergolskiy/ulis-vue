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
        v-if="label"
        class="default-select__label"
        :label="label"
        :type="required"
    />

    <div class="default-select__wrapper">

      <div class="default-select__inner-ico" v-if="innerIcon" :class="innerIcon"></div>
      <v-select
          :class="{'with-ico' : innerIcon}"
          class="v-select-item"
          :options="options"
          :label="optionsLabel"
          :calculate-position="withPopper"
          :append-to-body="!innerSelect"
          :disabled="disabled"
          :filter-by="myFilter"
          :clearable="clearable"
          :searchable="searchable"
          :selectable="option => !option.hasOwnProperty('disabled')"
          :placeholder="placeholder"
          v-model="vSelectModel"
          @update:modelValue="onChange"
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
    </div>


    <span class="default-select__error error-field" v-if="error && errorTxt">{{errorTxt}}</span>
    <span class="default-select__caption" v-if="caption">{{caption}}</span>

  </div>
</template>

<script>

import { createPopper } from '@popperjs/core';
import ArrowSelect from '../../../../assets/img/arrow.svg'
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
    required: {
      type: String,
      default: '',
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
      default: false,
    },
    innerIcon: {
      type: [String, Boolean],
      default: false,
    },
    // labelIcon: {
    //   type: [String, Boolean],
    //   default: false,
    // },
    // withIco: {
    //   type: Boolean,
    //   default: false,
    // },
    imageOptionLabel: {
      type: [String, Boolean],
      default: false,
    },
    placeholder: {
      type: String,
      default: false,
    },
    innerSelect: {
      type: Boolean,
      default: false,
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

  }

}
</script>

<style lang="scss">


@import "../../../../scss/colors";


.v-select-item {
  &.with-ico {
    .vs__search:focus,
    .vs__search {
      //padding-left: 44px;
    }
  }

  .vs__selected-options {
    padding-left: 44px;
  }
}

.default-select{
  position: relative;

  &__label {
    margin-bottom: 4px;
  }

  &__wrapper {
    position: relative;
  }

  &__inner-ico {
    position: absolute;
    width: 24px;
    height: 24px;
    top: 12px;
    left: 12px;

    &.location {
      background: url("../../../../assets/img/map.svg") center center no-repeat;
    }

    &.people {
      background: url("../../../../assets/img/people.svg") center center no-repeat;
    }
  }



  .vs__search,
  .vs__selected{
    padding: 0 !important;
    margin: 0 !important;
    padding-top: 3px !important;
  }

  .vs--single.vs--open .vs__selected {
    position: static;
  }

  .vs__dropdown-toggle {
    border-radius: 8px;
    border-color: $border-grey;
    min-height: 48px;
    box-sizing: border-box;
    padding: 0;

    .vs__actions{
      padding: 0;
      min-width: 24px;
    }
  }

  .vs--open .vs__dropdown-toggle {
    border-color: $border-grey;
    border-bottom-color: $border-grey;
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

}

.vs__dropdown-menu {
  box-shadow: 0 0 32px 0 rgba(0, 0, 0, 0.16) !important;
  border: 0 !important;
}

.vs__dropdown-menu .vs__dropdown-option {
  padding-left: 44px;

  &--highlight {
    background: $white;
  }
}

.vs__dropdown-option--selected {
  position: relative;

  &:after {
    content: '';
    display: block;
    position: absolute;
    top: 10px;
    right: 12px;
    width: 24px;
    height: 24px;
    background: url("../../../../assets/img/checked.svg") center center no-repeat;
  }
}

.v-select {

  &.vs--open,
  &:hover{
    background-color: #DCE0E4;
    transition: .3s;
  }

  &__arrow {
    position: relative;
    left: -6px;
    width: 16px;
    height: 16px;
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
  }
}

.v-select__label{
  color: $text-grey;
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



.vs__dropdown-menu{
  border-radius: 8px;
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
    border-bottom: 1px solid $border-grey;

    &:last-child{
      border-bottom: 0;
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

.v-select.vs--open, .v-select:hover {
  background-color: transparent;
}


.small-select {
  width: 70px;
  height: 36px;

  .v-select-item .vs__selected-options {
    padding-left: 14px;
  }

  .vs__dropdown-toggle {
    min-height: 36px;
    border-radius: 6px;
  }

  .v-select__arrow {
    left: 0;
  }

  .vs__dropdown-menu .vs__dropdown-option {
    min-height: 32px;
    padding-left: 16px;
  }

  .vs__dropdown-menu {
    min-width: 70px;
    max-height: 163px;
  }

  .vs__dropdown-option--selected:after {
    top: 3px;
    right: 3px;
    width: 20px;
    height: 20px;
    background-size: contain;
  }
}


</style>