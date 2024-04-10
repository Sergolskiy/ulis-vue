<template>
  <div class="header">
    <div class="header__inner">
      <div class="header__logo">
        <a href="#"><img src="../../../assets/logo.svg" alt="logo"></a>
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
    </div>
  </div>
</template>

<script>
import IN from '../../../assets/img/header/in.svg?skipsvgo'
import FB from '../../../assets/img/header/fb.svg?skipsvgo'
import TW from '../../../assets/img/header/tw.svg?skipsvgo'

export default {
  name: "Header",

  components: {
    IN,
    FB,
    TW,
  },

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
  }

  &__logo {

  }

  &__menu {

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

}


</style>