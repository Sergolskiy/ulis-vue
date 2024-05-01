<template>
  <div class="login__inner">
    <div class="login__title">
      Увійди у свій акаунт
    </div>
    <div class="login__txt">
      Увійди у свій акаунт за допомогою одного із запропонованих варіантів.
    </div>

    <div class="login__form">
      <div class="login__field">
        <FormLabel
          class="mb-1"
          :label="'Номер телефону'"
          :type="'required'"
        />

        <DefaultInput
            :placeholder="'+380'"
            v-model="phone"
        />
      </div>
      <div class="login__btn">
        <MainButton
            :label="'Продовжити'"
            :disabled="phone.length === 0"
            @click="$emit('confirm')"
        />
      </div>
    </div>

    <div class="login__horizontal-txt">
      <span>
        або оберіть один з варіантів
      </span>
    </div>

    <div class="login__social-media">
      <div class="login__social-media-btn">
        <SocialMediaBtn
          type="diia"
        />
      </div>
      <div class="login__social-media-btn">
        <SocialMediaBtn
          type="fb"
        />
      </div>
      <div class="login__social-media-btn">
        <SocialMediaBtn
          type="google"
        />
      </div>
      <div class="login__social-media-btn">
        <SocialMediaBtn
          type="apple"
        />
      </div>
    </div>

    <div class="login__register">
      Немає акаунту?
      <span class="login__register-link" @click="goToRegistration">
        Зареєструватися
      </span>
    </div>

  </div>
</template>

<script>
import DefaultInput from "@/components/UI/inputs/DefaultInput/DefaultInput.vue";
import FormLabel from "@/components/UI/labels/FormLabel/FormLabel.vue";
import MainButton from "@/components/UI/buttons/MainButton/MainButton.vue";
import SocialMediaBtn from "@/components/UI/buttons/SocialMediaBtn/SocialMediaBtn.vue";

export default {
  name: "Login", 
  components: {
    DefaultInput,
    FormLabel,
    MainButton,
    SocialMediaBtn,
  },

  emits: [
    'confirm',
  ],
  
  data() {
    return {
      phone: '',
    }
  },

  methods: {
    goToRegistration() {
      const urlParams = new URLSearchParams(window.location.search);

      urlParams.set('page', 'registration');

      window.location.search = urlParams;
    },
  }

}
</script>

<style scoped lang="scss">
  @import "../../../../../scss/mixins/mixins";
  @import "../../../../../scss/colors";

  .login{
 
    &__inner {
      width: 100%;
      max-width: 450px;
      margin-top: 170px;

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

      @include for-768 {
        margin-bottom: 32px;
      }
    }
    &__field {
      margin-bottom: 16px;
    }
    &__btn {

    }
    &__horizontal-txt {
      margin-bottom: 24px;

      @include for-768 {
        font-size: 14px;
      }
  
      span {
        width: 100%;
        display: flex;
        white-space: nowrap;
        align-items: center;
        text-align: center;
        gap: 16px;
        color: $text-grey;

        &:before,
        &:after {
          content: '';
          height: 1px;
          width: 100%;
          background: $border-grey;
        }
      }
    }
    &__social-media {
      display: flex;
      justify-content: space-between;
      gap: 20px;
      margin-bottom: 48px;

      @include for-768 {
        gap: 16px;
        margin-bottom: 16px;
      }
    }
    &__register {
      padding-bottom: 16px;

      @include for-768 {
        font-size: 14px;
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
  }


</style>