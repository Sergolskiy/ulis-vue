<template>
<!--  <div class="default-select"-->
<!--       :class="{'default-select&#45;&#45;active' : selected && selected.length > 0}"-->
<!--  >  -->
    <div class="multi-select"
       :class="{
          'multi-select--active' : vSelectModel,
          'searchable-off' : searchable === false,
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
        multiple
        :label="optionsLabel"
        append-to-body
        :calculate-position="withPopper"
        :disabled="disabled"
        :filter-by="myFilter"
        :searchable="searchable"
        :clearable="clearable"
        :selectable="() => (vSelectModel && maxLimit) ? vSelectModel.length < maxLimit : true"
    >

        <template v-slot:open-indicator>
          <div class="v-select__arrow">
            <ArrowSelect/>
          </div>
        </template>

      <template slot="option" slot-scope="option" v-if="customValue !== ''">
<!--        <div class="d-flex" v-if="customValue === 'requestFundsTransactions'">-->
<!--          #{{option.id}} :-->
<!--          ${{option.user_amount}}-->

<!--          <span class="no-transaction-option black-color" v-if="option.tracking_number">&nbsp; *</span>-->
<!--        </div>-->

        <div class="d-flex flex-column" v-if="!customValue">
          {{ option[optionsLabel] }}
        </div>
      </template>


      <template #selected-option="option" v-if="customValue !== ''">
<!--        <template v-if="customValue === 'requestFundsTransactions'">-->
<!--          #{{option.id}} :-->
<!--          ${{option.user_amount}}-->

<!--          <span class="no-transaction-option" v-if="option.tracking_number">&nbsp; *</span>-->
<!--        </template>-->

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

    <span class="multi-select__error error-field" v-if="error && errorTxt">{{errorTxt}}</span>
    <span class="multi-select__caption" v-if="caption">{{caption}}</span>
  </div>
</template>

<script>
  import { createPopper } from '@popperjs/core'
  import FormLabel from "../../labels/FormLabel/FormLabel.vue";
  import ArrowSelect from '../../../../assets/img/UI-group/arrow-select.svg'

  export default {
    name: "MultiSelect",
    components: {
      FormLabel,
      ArrowSelect,
    },

    props: { options: {
        type: Array,
        default: [],
      },
      selected: {
        type: [Object, String, Boolean, Array],
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
      maxLimit: {
        type: [Number, String, Boolean],
        default: false,
      },
    },

    watch: {
      selected: function(newVal) {
        this.vSelectModel = newVal;
      }
    },

    data(){
      return{
        vSelectModel: '',
        placement: 'bottom',

        myFilter: (option, label, search) => {

          // if(this.customValue === 'requestFundsTransactions'){
          //   let temp = search.toLowerCase();
          //   return (option.id+'').toLowerCase().indexOf(temp) > -1 || option.user_amount.toLowerCase().indexOf(temp) > -1
          // }

          return (label || '').toLowerCase().indexOf(search.toLowerCase()) > -1
        }
      }
    },

    mounted() {
      this.vSelectModel = this.selected;
    },

    methods: {

      onChange(value){
        this.$emit('update:modelValue', value);
      },

      withPopper (dropdownList, component, {width}) {
        dropdownList.style.width = width
        const popper = createPopper(component.$refs.toggle, dropdownList, {})
        return () => popper.destroy()
      },

    }
  }
</script>

<style lang="scss" >
  @import "../../../../scss/colors";

  .multi-select{
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
    //    background: white;
    //    background: linear-gradient(0deg, #F8F4EE 0%, #FFFFFF 105.56%);
    //    padding: 0 2px;
    //    font-size: 10px;
    //    line-height: 12px;
    //  }
    //
    //  .v-select .vs__dropdown-toggle{
    //    border-color: #CD9E64;
    //  }
    //}


    &.ui-no-valid .v-select .vs__dropdown-toggle{
      border: 1px solid $warning-red-border;
    }


    &__error{
      position: absolute;
      bottom: -18px;
      right: 0;
      font-size: 11px;
      line-height: 13px;
      color: $warning-red-border;
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
      margin-bottom: -10px;
    }

    .vs__selected-options{
      padding: 0;
      top: 0;
      display: flex;
      flex-wrap: wrap;
      margin-bottom: 4px;

      .vs__selected{
        color: white;
        background: $middle-grey;
        margin-bottom: 3px;
        margin-right: 5px;
        font-size: 14px;
        line-height: 16px;
        padding: 4px;
        padding-left: 20px;
        position: relative;

        &:last-child{
          margin-bottom: 10px;
        }

        .vs__deselect{
          position: absolute;
          left: 1px;
          top: 7px;

          svg path{
            fill: white;
          }
        }
      }
    }

    .vs__no-options{
      height: 42px;
      display: flex;
      align-items: center;
      justify-content: center;
    }

  }



  //  .vs__selected{
  //    padding: 0;
  //    margin: 0;
  //    top: 8px;
  //  }
  //
  //  .vs__dropdown-toggle{
  //    padding-left: 16px;
  //    min-height: 42px;
  //    background: #F8F4EE;
  //    border: 1px solid #BBAD9C;
  //    box-sizing: border-box;
  //    border-radius: 5px;
  //  }
  //
  //  .vs--open .vs__dropdown-toggle{
  //    border-color: #CD9E64;
  //  }
  //
  //  .vs__search, .vs__search:focus{
  //    padding: 0;
  //  }
  //
  //
  //
  //  .v-select__label{
  //    position: absolute;
  //    left: 16px;
  //    top: 13px;
  //    font-size: 14px;
  //    line-height: 16px;
  //    color: #BBAD9C;
  //    transition: 0.15s all;
  //  }
  //
  //  .vs--open .v-select__label{
  //    top: -5px;
  //    background: white;
  //    background: linear-gradient(0deg, #F8F4EE 0%, #FFFFFF 105.56%);
  //    padding: 0 2px;
  //    font-size: 10px;
  //    line-height: 12px;
  //  }
  //
  //  .vs__actions svg path{
  //    fill: #8F7A61;
  //  }
  //
  //  .vs__dropdown-menu{
  //    border-radius: 5px 5px 0 0;
  //    border: 1px solid $mainBg;
  //    box-shadow: 0px 4px 7px $mainBg;
  //    padding-top: 0;
  //    padding-bottom: 0;
  //
  //    &::-webkit-scrollbar {
  //      width: 2px;
  //      height: 2px;
  //      border: 1px;
  //    }
  //
  //    &::-webkit-scrollbar-track {
  //      background: transparent;
  //      margin-right: 8px;
  //    }
  //
  //    &::-webkit-scrollbar-thumb {
  //      background: $borderBrown;
  //    }
  //
  //    &::-webkit-scrollbar-thumb:hover {
  //      background: $borderBrown;
  //      opacity: .5;
  //    }
  //  }
  //
  //  .vs__dropdown-option{
  //    min-height: 42px;
  //    display: flex;
  //    align-items: center;
  //    color: $black;
  //    white-space: normal;
  //    border-bottom: 1px solid $mainBg;
  //
  //    &:last-child{
  //      border-bottom: 0;
  //    }
  //
  //    &--highlight{
  //      background: $borderBrownOpacity02;
  //      color: $black;
  //    }
  //  }
  //
  //
  //.v-select:not(.vs--single){
  //
  //}
  //
  //
  //
  //.searchable-off {
  //
  //  .vs__selected-options{
  //    top: 7px!important;
  //  }
  //
  //  .vs__search{
  //    /*display: none!important;*/
  //    width: 0 !important;
  //    height: 0 !important;
  //    overflow: hidden !important;
  //    padding: 0 !important;
  //    margin: 0 !important;
  //  }
  //
  //  .vs__selected{
  //    top: 0!important;
  //    height: 27px!important;
  //  }
  //}



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

    .vs__dropdown-option--selected {
      background: $dark-blue;
      color: $white;
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
