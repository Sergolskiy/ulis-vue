<template>
  <label :for="'light-input-' + id" class="light-input-wrap"
         :class="{
          'active-placeholder' : (placeholder && placeholder.length > 0),
         }"
  >
    <span class="light-input-wrapper">
      <input
          class="light-input"
          v-on:input="handleInput($event.target.value)"
          :type="type"
          :id="'light-input-' + id"
          :value="modelValue"
          :placeholder="placeholder"
          :maxlength="maxLength"
          :name="name ? name : `name-` + id"
          @focus="activeInput = true"
          @blur="blur($event.target.value)"
          @keyup.enter="handleEnter"
          @change="change($event)"
      >
      <span :class="'light-input-ico ' + icoType" @click="handleEnter"></span>
    </span>
  </label>
</template>

<script>

  export default {
    name: "LightInput",

    components: {
    },

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
      placeholder: {
        type: String,
        default: '',
      },
      modelValue: {
        type: [String, Number, Boolean],
        default: '',
      },
      maxLength: {
        type: Number,
        default: null,
      },
      name: {
        type: String,
        default: '',
      },
      icoType: {
        type: [String],
        default: '',
      }
    },

    mounted () {
      this.id = this.$.uid
    },

    methods: {
      change(event){
        this.$emit('update:change', event.target.value)
        if (this.resetAfter === true) {
          event.target.value = ''
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


  .light-input-wrap{
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
      background: $white;
      font-size: 16px;
      line-height: normal;
      width: 100%;
      padding-right: 16px;
      height: 47px;
      box-sizing: border-box;
      border: 0;

      &::placeholder{
        font-size: 16px;
        font-style: normal;
        font-weight: 500;
        line-height: normal;
        color: $middle-grey;
      }

      &:disabled{
        background: $darker-blue;
        color: $middle-grey;
        border-color: $middle-gre;
        opacity: 1;
      }

      &:focus-visible,
      &:focus{
        outline: 0;
      }
    }

    &.disabled &__label{
      color: $middle-grey;
    }

    &.disabled.active input,
    &.disabled input{

    }
  }

  .light-input-wrapper {
    position: relative;
    display: block;
  }


  .light-input-ico {

    &.scale-ico {
      position: absolute;
      //pointer-events: none;
      cursor: pointer;
      top: 13px;
      right: 27px;
      display: block;
      width: 20px;
      height: 20px;
      background: url("../../../../assets/img/UI-group/scale.svg") center center no-repeat;
    }

  }

</style>
