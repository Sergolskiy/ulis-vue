<template>
  <div class="account">

    <div class="account__inner">
      <div class="account__title">
        Твій акаунт
      </div>

      <template v-if="!isLogged">
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
      </template>

      <template v-else>
        <div class="account__user">
          <div class="account__user-inner">
            <div class="account__user-left">
              <div class="account__user-ico">
                <UserIco/>
              </div>
            </div>
            <div class="account__user-right">
              <div class="account__user-name">
                Марія Бондаренко
              </div>
              <div class="account__user-mail">
                m_bondarnko13@gmail.com
              </div>
            </div>
          </div>
          <div class="account__user-caption">
            Ви увійшли в свій акаунт!
          </div>
        </div>
      </template>

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
import UserIco from '../../../../../assets/img/user.svg?skipsvgo'
import ShortSpecialPopup from "@/components/modules/BookingModule/popups/ShortSpecialPopup/ShortSpecialPopup.vue";

export default {
  name: "Account",

  components: {
    MainButton,
    InfoBlock,
    UserIco,
    ShortSpecialPopup,
  },

  computed: {
    isLogged() {
      return localStorage.getItem('logged')
    },
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

  &__user {
    margin-top: 12px;
  }

  &__user-inner {
    display: flex;
    align-items: center;
    gap: 12px;
  }

  &__user-left {

  }

  &__user-ico {
    display: flex;
    justify-content: center;
    align-items: center;
    min-width: 56px;
    max-width: 56px;
    height: 56px;
    border-radius: 50%;
    border: 1px solid $border-grey;
  }

  &__user-right {

  }

  &__user-name {
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 18px;
  }

  &__user-mail {
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 18px;
    color: $text-grey;
    margin-top: 4px;
  }

  &__user-caption {
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 18px;
    color: $green;
    margin-top: 8px;
  }


}


</style>