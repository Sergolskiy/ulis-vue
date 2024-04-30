<template>
  <div class="textarea-default"
       :class="{
          active: activeInput || (modelValue && modelValue.length > 0) || (placeholder && placeholder.length > 0),
          'disabled' : disabled === true
       }">
<!--    :class="{ active: activeInput || (modelValue && modelValue.length > 0) }"-->
    <label :for="'default-input-' + id" class="textarea-default__label">
      <FormLabel
          v-if="label || labelIcon"
          class="mb-2"
          :type="'black'"
          :label="label"
          :labelIcon="labelIcon"
          :bigIco="bigIco"
      />
    </label>

    <textarea
        :id="'default-input-' + id"
        class="textarea-default"
        :class="{
          'force-78px-mh' : forceMinHeight === true
       }"
        v-on:input="handleTextarea($event.target.value)"
        :value="modelValue"
        @focus="activeInput = true"
        @blur="activeInput = false"
        :disabled="disabled"
        @keyup.enter="handleEnter"
        :placeholder="placeholder"
        :maxLength="maxLength"
    >
    </textarea>
    <span class="textarea-default__counter" v-if="maxLengthCounter">
      <template v-if="modelValue && modelValue.length">{{modelValue.length}}</template><template v-else>0</template>/{{maxLength}}
    </span>
    <span class="default-input-wrap__caption" v-if="caption">{{caption}}</span>
    <span class="textarea-default__error error-field" v-if="error && errorTxt">{{errorTxt}}</span>
  </div>
</template>

<script>
  import FormLabel from "../../labels/FormLabel/FormLabel.vue";

  export default {
    name: "TextareaDefault",
    components: {FormLabel},
    data () {
      return {
        id: null,
        activeInput: false,
      }
    },

    props: {
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
      forceMinHeight: {
        type: Boolean,
        default: false,
      },
      maxLengthCounter: {
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
    },

    mounted () {
      this.id = this.$.uid
    },

    methods: {
      handleTextarea (value) {
        this.$emit('update:modelValue', value)
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

  .disabled .textarea-default{
    background-color: $darker-blue !important;
    border: 0 !important;
  }

  .textarea-default{
    display: block;
    position: relative;

    textarea{
      border-radius: 12px;
      border: 1px solid $middle-gre;
      background: $white;
      font-size: 14px;
      line-height: 16px;
      width: 100%;
      padding-left: 19px;
      padding-top: 13px;
      height: 42px;
      box-sizing: border-box;
      padding-bottom: 15px;
      min-height: 115px;
      resize: none;

      &.force-78px-mh {
        min-height: 78px;
      }

      &::placeholder{
        font-size: 14px;
        line-height: revert;
      }

      &:focus-visible,
      &:focus{
        outline: 0;
      }

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
        //background: $borderBrown;
      }

      /* Handle on hover */
      &::-webkit-scrollbar-thumb:hover {
        //background: $borderBrown;
        opacity: .5;
      }
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
    }

    &.active .textarea-default__label{

    }

    &.active textarea{
      /*border-color: $accent;*/
    }

    &:focus{
      //border-color: $accent;
    }

    &__error{
      position: absolute;
      bottom: -16px;
      right: 0;
      font-size: 12px;
      font-style: normal;
      //font-weight: 500;
      line-height: normal;
      color: $warning-red-border;
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

    &__counter {
      margin-left: auto;
      display: block;
      width: fit-content;
      font-size: 12px;
      color: $middle-grey;
      margin-top: 8px;
    }

    &.ui-no-valid .textarea-default{
      //border: 2px solid $orange;
    }
  }

  .textarea-template-edit {
    textarea {
      min-height: 320px;
      line-height: 20px;
    }
  }
</style>
