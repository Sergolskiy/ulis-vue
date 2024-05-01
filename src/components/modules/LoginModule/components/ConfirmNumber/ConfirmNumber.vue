<template>
  <div class="numb-conf__inner">
    <div class="numb-conf__title">
      Підтверди номер телефону
    </div>
    <div class="numb-conf__txt">
      На твій номер телефону надійшов код для підтвердження. Ввведи, будь ласка, його у поле зазначене нижче.
    </div>

    <div class="numb-conf__form">
      <div class="numb-conf__field">
        <input 
          class="big-input"
          :class="{'big-input--empty' : value1 === ''}"
          ref="field1"
          type="text"
          maxlength="1"
          @input="nextField(2)"
          v-model="value1"
        >
      </div>
      <div class="numb-conf__field">
        <input 
          class="big-input"
          :class="{'big-input--empty' : value2 === ''}"
          ref="field2"
          type="text"
          maxlength="1"
          v-model="value2"
          @input="nextField(3)"
          @keydown="(e) => backKey(e, 2, value2)"
        >
      </div>
      <div class="numb-conf__field">
        <input 
          class="big-input"
          :class="{'big-input--empty' : value3 === ''}"
          ref="field3"
          type="text"
          maxlength="1"
          v-model="value3"
          @input="nextField(4)"
          @keydown="(e) => backKey(e, 3, value3)"
        >
      </div>
      <div class="numb-conf__field">
        <input 
          class="big-input"
          :class="{'big-input--empty' : value4 === ''}"
          ref="field4"
          type="text"
          maxlength="1"
          v-model="value4"
          @keydown="(e) => backKey(e, 4, value4)"
        >
      </div>
    </div>

    <div class="numb-conf__register">
      Не отримав код?
      <span class="numb-conf__register-link">
        Відправити повторно
      </span>
    </div>

    <div class="numb-conf__btn">
      <MainButton
          :label="'Продовжити'"
          :disabled="value1 === '' || value2 === '' || value3 === '' || value4 === ''"
      />
    </div>
  </div>
</template>

<script>
import MainButton from "@/components/UI/buttons/MainButton/MainButton.vue";

export default {
  name: "ConfirmNumber",
  components: {
    MainButton,
  },
  
  data() {
    return {
      value1: '',
      value2: '',
      value3: '',
      value4: '',
    }
  },

  methods: {
    nextField(nextNum) {
      this.$refs['field' + nextNum].focus()
    },

    backKey(e, currentNum, val) {
      if(val !== '') {
        return
      }
      if(e.key === 'Backspace') {
        this['value' + (currentNum - 1)] = ''
        this.$refs['field' + (currentNum - 1)].focus()
      }
    }
  }

}
</script>

<style scoped lang="scss">
  @import "../../../../../scss/mixins/mixins";
  @import "../../../../../scss/colors";

  .numb-conf{
 
    &__inner {
      width: 100%;
      max-width: 450px;
      margin-top: 170px;
      display: flex;
      flex-direction: column;

      @include for-1300 {
        margin-top: 100px;
      }

      @include for-992 {
        margin-top: 32px;
        padding-left: 16px;
        padding-right: 16px;
      }

    }
    &__title {
      font-size: 28px;
      font-weight: 600;
      margin-bottom: 16px;

      @include for-768 {
        font-size: 20px;
        margin-bottom: 8px;
      }
    }
    &__txt {
      color: $text-grey;
      margin-bottom: 24px;

      @include for-768 {
        font-size: 14px;
        margin-bottom: 16px;
      }
    }
    &__form {
      margin-bottom: 24px;
      display: flex;
      gap: 20px;

      @include for-768 {
        margin-bottom: 32px;
        gap: 8px;
        margin-bottom: 16px;
      }
    }
    &__field {
      
    }
    &__register {
      padding-bottom: 16px;
      margin-bottom: 24px;

      @include for-768 {
        font-size: 14px;
        order: 1;
        margin-bottom: 0;
      }
    }
    &__register-link {
      margin-left: 16px;
      font-weight: 600;
      text-decoration: underline;
      cursor: pointer;

      &:hover {
        text-decoration: none;
      }
    }

    &__btn {
      margin-bottom: 16px;
    }
  }

  .big-input{
    min-height: 112px;
    width: 100%;
    border-radius: 16px;
    border: 1px solid $border-grey;
    font-size: 48px;
    font-weight: 600;
    padding: 6px;
    text-align: center;
    transition: .3s;
    background: $border-grey;

    @include for-768 {
      min-height: 82px;
      font-size: 32px;
    }

    &--empty {
      background: $white;
    }

    &:hover {
      border-color: $black;
      background: $white;
    }

    &:active {
      border-color: $black;
      background: $white;
    }

    &:focus-visible,
    &:focus{
      outline: 0;
    }
  }


</style>