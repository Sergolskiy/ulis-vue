<template>
  <div class="account">
    <div class="account__inner">
      <div class="account__title">
        Твій акаунт
      </div>

      <div class="account__info">
        <InfoBlock
            :text="'Авторизуйся в системі або створи обліковий запис, щоб дізнаватися про спеціальні пропозиції і більше.'"
            :type="'info'"
        />
      </div>

      <div class="account__btn">
        <MainButton
            :label="'Авторизуватися'"
            @click="openSignInPopup = true"
        />
      </div>
    </div>
  </div>

  <ShortSpecialPopup
      v-if="openSignInPopup"
      :shortSpecialPopupText="signInPopupText"
      @closeShortSpecialPopup="openSignInPopup = false"
      @confirm="goToLogin"
  />

</template>

<script>
import InfoBlock from "../../../../UI/labels/InfoBlock/InfoBlock.vue";
import MainButton from "../../../../UI/buttons/MainButton/MainButton.vue";

import ShortSpecialPopup from "@/components/modules/BookingModule/popups/ShortSpecialPopup/ShortSpecialPopup.vue";

export default {
  name: "Account",

  components: {
    MainButton,
    InfoBlock,

    ShortSpecialPopup,
  },

  data() {
    return {
      openSignInPopup: false,
      signInPopupText: {
        title: 'Авторизуйся в системі',
        txt: 'Авторизуйся в системі, щоб першим дізнаватися про вигідні пропозиції, накопичувати бонуси та вести профіль, додаючи у wishlist та waitlist',
        img: true,
        imgType: 'ico',
        imgName: 'signInPopup',
        no: 'Іншим разом',
        yes: 'Авторизуватися',
      },
    }
  },

  methods: {
    goToLogin() {
      const urlParams = new URLSearchParams(window.location.search);

      urlParams.set('page', 'login');

      window.location.search = urlParams;
    },
  }

}
</script>

<style scoped lang="scss">
@import "../../../../../scss/colors";

.account {
  border: 1px solid $border-grey;
  border-radius: 8px;

  &__inner {
    padding: 16px;
  }

  &__title {
    font-size: 20px;
    font-weight: 700;
    line-height: 24px;
  }

  &__info {
    margin-top: 12px;
  }

  &__btn {
    margin-top: 12px;
  }

}


</style>