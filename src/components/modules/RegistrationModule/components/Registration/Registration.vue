<template>
  <div class="registration">
    <div class="registration__inner">
      <div class="registration__title">
        Реєстрація акаунту
      </div>


      <PersonalInfoFields
          :Personal="Personal"
      />

      <DefaultCheckbox
          class="w-100"
          label='Реєструючи акаунт, ти погоджуєшся з <a href="#" style="font-weight: 500; color: black; text-decoration: underline;">Правилами та умовами</a> та <a href="#" style="font-weight: 500; color: black; text-decoration: underline;">Політикою конфіленційності.</a>'
          :required="'required'"
          v-model="checked"
      />

      <MainButton
          class="w-100 registration__btn"
          :label="'Створити акаунт'"
          :disabled="!checked"
      />

      <div class="registration__horizontal-txt">
        <span>
          або оберіть один з варіантів
        </span>
      </div>

      <div class="registration__social-media">
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

    </div>
  </div>
</template>

<script>
import InfoBlock from "@/components/UI/labels/InfoBlock/InfoBlock.vue";
import {Personal} from "@/components/globalModels/personal/Personal.js";
import PersonalInfoFields from "@/components/coreComponents/PersonalInfoFields/PersonalInfoFields.vue";
import DefaultCheckbox from "@/components/UI/checkboxes/DefaultCheckbox/DefaultCheckbox.vue";
import MainButton from "@/components/UI/buttons/MainButton/MainButton.vue";
import SocialMediaBtn from "@/components/UI/buttons/SocialMediaBtn/SocialMediaBtn.vue";

export default {
  name: "Registration",
  components: {
    SocialMediaBtn,
    MainButton,
    DefaultCheckbox,
    PersonalInfoFields,
    InfoBlock
  },

  data() {
    return {
      Personal: new Personal(),

      checked: false,
    }
  }

}
</script>

<style scoped lang="scss">
@import "../../../../../scss/mixins/mixins";
@import "../../../../../scss/colors";

.registration {
  padding-top: 48px;

  &__inner {
    margin: 0 auto;
    max-width: 718px;
    padding: 0 16px;
  }

  &__title {
    font-size: 28px;
    font-style: normal;
    font-weight: 700;
    line-height: 32px;
    margin-bottom: 16px;
  }

  &__btn {
    margin-top: 25px;
  }

  &__horizontal-txt {
    margin-top: 48px;
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
    max-width: 450px;
    margin-left: auto;
    margin-right: auto;

    @include for-992 {
      max-width: 302px;
    }

    @include for-768 {
      gap: 16px;
      margin-bottom: 16px;
    }
  }
}

</style>