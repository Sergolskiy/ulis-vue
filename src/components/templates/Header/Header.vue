<template>
  <div class="header">
    <div class="header__inner">
      <div class="header__logo">
        <a href="#"><Logo/></a>
      </div>

      <div class="header__menu">
        <div class="header__menu-items">
          <div class="header__item">
            <a href="#" class="header__link">Будинки</a>
          </div>
          <div class="header__item">
            <a href="#" class="header__link">Карпати</a>
          </div>
          <div class="header__item">
            <a href="#" class="header__link">Київ</a>
          </div>
          <div class="header__item">
            <a href="#" class="header__link">Інвестувати</a>
          </div>
          <div class="header__item">
            <a href="#" class="header__link">КСВ</a>
          </div>
        </div>
      </div>

      <div class="header__right">
        <div class="header__social">
          <div class="header__social-items">
            <div class="header__social-item">
              <a href="#" class="header__social-link">
                <IN/>
              </a>
            </div>
            <div class="header__social-item">
              <a href="#" class="header__social-link">
                <TW/>
              </a>
            </div>
            <div class="header__social-item">
              <a href="#" class="header__social-link">
                <FB/>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div class="header__mobile-btn">
        <MobileMenu v-if="!openMenu" @click="toggleOpenMenu"/>
        <MobileMenuClose v-else style="width: 20px;" @click="toggleOpenMenu"/>



      </div>

    </div>
    
    <div class="mobile-header">
      <div class="mobile-header__menu"
           :class="{'mobile-header__menu--open' : openMenu}"
      >
        <div class="mobile-header__inner">
          <div class="mobile-header__title">
            ГОЛОВНЕ
          </div>
          <div class="mobile-header__items">
            <div class="mobile-header__item">
              <a href="#">
                Будинки
              </a>
            </div>
            <div class="mobile-header__item">
               <a href="#">
                Карпати
               </a>
            </div>
            <div class="mobile-header__item">
               <a href="#">
                Київ
               </a>
            </div>
            <div class="mobile-header__item">
               <a href="#">
                Інвестувати
               </a>
            </div>
            <div class="mobile-header__item">
               <a href="#">
                КСВ
               </a>
            </div>
          </div>

          <div class="mobile-header__title">
            СОЦІАЛЬНІ МЕРЕЖІ
          </div>
          <div class="mobile-header__social">
            <div class="mobile-header__social-item">
              <a href="#" class="mobile-header__social-link">
                <INMobile/>
              </a>
            </div>
            <div class="mobile-header__social-item">
              <a href="#" class="mobile-header__social-link">
                <TGMobile/>
              </a>
            </div>
            <div class="mobile-header__social-item">
              <a href="#" class="mobile-header__social-link">
                <FBMobile/>
              </a>
            </div>
          </div>

        </div>
      </div>

    </div>
  </div>
</template>

<script>
import Logo from '../../../assets/img/logo.svg?skipsvgo'
import IN from '../../../assets/img/header/in.svg?skipsvgo'
import FB from '../../../assets/img/header/fb.svg?skipsvgo'
import TW from '../../../assets/img/header/tw.svg?skipsvgo'
import INMobile from '../../../assets/img/header/social-mobile-in.svg?skipsvgo'
import FBMobile from '../../../assets/img/header/social-mobile-fb.svg?skipsvgo'
import TGMobile from '../../../assets/img/header/social-mobile-tg.svg?skipsvgo'
import MobileMenu from '../../../assets/img/header/mobile-menu-btn.svg?skipsvgo'
import MobileMenuClose from '../../../assets/img/header/close-mobile-menu.svg?skipsvgo'

export default {
  name: "Header",

  components: {
    Logo,
    IN,
    FB,
    TW,
    INMobile,
    FBMobile,
    TGMobile,
    MobileMenu,
    MobileMenuClose,
  },

  data() {
    return {
      openMenu: false,
    }
  },

  methods: {
    toggleOpenMenu() {
      this.openMenu = !this.openMenu
      window.scrollTo(0, 0);
      document.body.style.overflow = this.openMenu ? 'hidden' : 'initial'
    },
  }

}
</script>

<style scoped lang="scss">
@import "src/scss/colors";
@import "src/scss/mixins/mixins";

.header {

  &__inner {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 24px 34px;
    background: $black;

    @include for-1120 {
      padding: 12px 16px;
    }
  }

  &__logo {

    a {
      display: flex;
    }

    @include for-1120 {
      svg {
        width: 98px;
        height: 32px;
      }
    }
  }

  &__menu {
    @include for-1120 {
      display: none;
    }
  }

  &__menu-items {
    display: flex;
    align-items: center;
  }

  &__item {

    &:nth-child(n+2) {
      position: relative;
      margin-left: 16px;
      padding-left: 18px;

      &::after {
        content: '';
        position: absolute;
        display: block;
        top: 0;
        left: 0;
        height: 100%;
        width: 2px;
        background: url("../../../assets/img/header/divider.svg") center center no-repeat;
      }
    }
  }

  &__link {
    font-size: 16px;
    font-weight: 500;
    line-height: 25.6px;
    color: $white;
  }

  &__right {

    @include for-1120 {
      display: none;
    }
  }

  &__social {

  }

  &__social-items {
    display: flex;
    align-items: center;
  }

  &__social-item {
    margin-left: 16px;
  }

  &__social-link {

  }

  &__mobile-btn {
    @include from-1120 {
      display: none;
    }
  }




}

.mobile-header {

  &__menu {
    position: fixed;
    top: 56px;
    left: 0;
    width: 100%;
    height: 100%;
    background: $white;
    z-index: 1100;
    transition: 0.3s;

    transform: translateX(100%);

    &--open {
      transform: translateX(0);
    }
  }

  &__inner {
    padding: 24px 16px;
  }

  &__title {
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 20px;
    padding-bottom: 4px;
    border-bottom: 1px solid $border-grey;
  }

  &__items {
    margin-top: 16px;
    margin-bottom: 68px;
  }

  &__item {
    margin-top: 16px;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 20px;

    a {
      color: $black;
    }

    &:first-child {
      margin-top: 0;
    }
  }

  &__social {
    display: flex;
    gap: 16px;
    margin-top: 16px;
  }

  &__social-item {

  }

  &__social-link {

  }
}


</style>