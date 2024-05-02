<template>
  <div class="personal-info">
    <div class="personal-info__inner pb-0">
      <div class="personal-info__title">
        Особиста інформація
      </div>

      <PersonalInfoFields
          class="pb-0"
          :Personal="Booking"
      />

    </div>


    <MainButton
        class="save-profile"
        :label="'Зберегти зміни'"
    />

  </div>

  <div class="personal-info combine-accounts">
    <div class="personal-info__inner">
      <div class="personal-info__title">
        Об’єднати акаунти
      </div>


      <FormLabel
          class="mt-2"
          :label="'Ви можете пов’язати свій профіль із такими сервісами та профілями в соціальних мережах:'"
      />

      <div class="profile__social-media">
        <div class="profile__social-media-btn">
          <SocialMediaBtn
              type="diia"
          />
        </div>
        <div class="profile__social-media-btn">
          <SocialMediaBtn
              type="fb"
          />
        </div>
        <div class="profile__social-media-btn">
          <SocialMediaBtn
              type="google"
          />
        </div>
        <div class="profile__social-media-btn">
          <SocialMediaBtn
              type="apple"
          />
        </div>
      </div>
    </div>
  </div>

  <div class="personal-info mt-3">
    <div class="personal-info__inner">
      <div class="personal-info__title">
        Твої зв'язані профілі
      </div>

      <FormLabel
          class="mt-2"
          :label="'Тут відображаються соціальні мережі та сервіси, з якими ти пов’язав свій профіль.'"
      />

      <InfoBlock
          class="mt-4"
          :text="'Ти поки не пов’язав свій акаунт з жодним сервісом або соціальною мережею.'"
          :type="'error'"
      />

    </div>
  </div>

  <div class="personal-info account-bonus mt-4">
    <div class="personal-info__inner">
      <div class="account-bonus__left">
        <div class="personal-info__title">
          Бонусний рахунок
        </div>

        <FormLabel
            class="mt-2"
            :label="'Накопичуйте бали та використовуйте їх при оплаті нових бронювань на сайті.'"
        />
      </div>
      <div class="account-bonus__right">
        <div class="account-bonus__bonuses">
          <div class="account-bonus__top">
            Активні бонуси
            <StatusInfoGreen/>
          </div>
          <div class="account-bonus__price">
            <IconUAH/>
            179
          </div>
        </div>
      </div>
    </div>

  </div>

  <div class="personal-info generate-promo-code mt-4">
    <div class="personal-info__inner">
      <div class="personal-info__title">
        Дружній промокод
      </div>

      <InfoBlock
          class="mt-3"
          :text="'Це промокод на знижку у 12%. Подаруй його другу, якщо він використає його, ти отримаєш на свій віртуальний рахунок суму знижки.'"
          :type="'success'"
      />

      <FormLabel
          class="mt-3"
          :type="'required'"
          :label="'Твій промокод для друга'"
      />

      <div class="generate-promo-code__field mt-2">
        <DefaultInput
            class="w-100"
            :placeholder="'Твій промокод буде тут'"
            :icoType="'copy'"
            :disabled="promo.length === 0"
            :model-value="promo"
            @update:icoClick="copyToClipboard"
        />

        <MainButton
            class="wfc nowrap"
            :label="'Згенерувати промокод'"
            @click="generateCode"
        />
      </div>

    </div>
  </div>

  <div class="personal-info certificate mt-4 mb-5">
    <div class="personal-info__inner">
      <div class="personal-info__title">
        Сертифікат для друга
      </div>

      <InfoBlock
          class="mt-3"
          :text="'Ти можеш придбати подарунковий сертифікат. Введи суму і натисни кнопку “купити сертифікат” і після цього ти зможеш внести всю потрібну інформацію. Ти отримаєш клектронний сертифікат на пошту, і, за бажанням, зможеш його роздрукувати.'"
          :type="'success'"
      />

      <FormLabel
          class="mt-3"
          :type="'required'"
          :label="'Сума сертифікату'"
      />

      <div class="certificate__field mt-2">
        <DefaultInput
            class="w-100"
            :placeholder="'Вкажи суму'"
            :icoType="'currency'"
            v-model="certificate"
        />

        <MainButton
            class="wfc nowrap"
            :disabled="certificate.length === 0"
            :label="'Купити сертифікат'"
            @click="goToCertificate"
        />
      </div>

    </div>
  </div>

</template>

<script>
import PersonalInfoFields from "@/components/coreComponents/PersonalInfoFields/PersonalInfoFields.vue";
import MainButton from "@/components/UI/buttons/MainButton/MainButton.vue";
import FormLabel from "@/components/UI/labels/FormLabel/FormLabel.vue";
import SocialMediaBtn from "@/components/UI/buttons/SocialMediaBtn/SocialMediaBtn.vue";
import InfoBlock from "@/components/UI/labels/InfoBlock/InfoBlock.vue";
import IconUAH from "@/assets/img/currencies.svg?skipsvgo";
import StatusInfoGreen from "@/assets/img/info-green.svg?skipsvgo";
import DefaultInput from "@/components/UI/inputs/DefaultInput/DefaultInput.vue";

export default {
  name: "Profile",
  components: {
    DefaultInput,
    StatusInfoGreen,
    IconUAH, InfoBlock, SocialMediaBtn, FormLabel, MainButton, PersonalInfoFields
  },

  props: {
    Booking: {
      type: Object,
      default: null,
    },
  },

  data() {
    return {
      promo: '',
      certificate: '',
    }
  },

  methods: {
    goToCertificate() {
      const urlParams = new URLSearchParams(window.location.search);

      urlParams.set('page', 'certificate');

      window.location.search = urlParams;
    },

    generateCode() {
      this.promo = 'SfdsSADF&*%^'
    },

    copyToClipboard() {
      navigator.clipboard.writeText(this.promo)
    },
  },

}
</script>

<style scoped lang="scss">
@import "../../../../../scss/mixins/mixins";
@import "../../../../../scss/colors";

.save-profile {
  max-width: 333px;
  margin-left: auto;
  margin-top: 24px;
}

.combine-accounts {
  margin-top: 48px;
}

.generate-promo-code__field,
.certificate__field {
  display: flex;
  gap: 16px;

  @include for-550 {
    flex-direction: column;

    &:deep(.main-button) {
      width: 100% !important;
    }
  }
}

.profile {
  &__social-media {
    display: flex;
    justify-content: space-between;
    gap: 24px;
    max-width: 450px;
    margin-top: 24px;

    @include for-992 {
      max-width: 302px;
    }

    @include for-768 {
      gap: 6px;
      margin-bottom: 16px;
    }
  }
}

.account-bonus {

  .personal-info__inner {
    display: flex;

    @include for-550 {
      flex-direction: column;
      gap: 16px;
    }
  }

  &__left {
    width: 100%;
  }

  &__right {
    min-width: 184px;
    height: 116px;
    padding: 24px;
    border-radius: 8px;
    background: $green-bg;
  }

  &__bonuses {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }

  &__top {
    display: flex;
    align-items: center;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 20px;
    color: $green;

    svg {
      width: 16px;
      height: 16px;
      margin-left: 4px;
    }
  }

  &__price {
    font-size: 32px;
    font-style: normal;
    font-weight: 700;
    line-height: 40px;
  }

}


</style>