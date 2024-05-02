<template>
   <div class="not-found-module">
    <div class="not-found-module__inner">
      <div class="not-found-module__image not-found-module__image--desktop">
        <ImageNotFound/>
      </div>
      <div class="not-found-module__image not-found-module__image--mobile">
        <ImageNotFoundMobile/>
      </div>
      <div class="not-found-module__txt-large">
        Ой, щось пішло не так!
      </div>
      <div class="not-found-module__txt-small">
        На жаль, сторінку, яку ти шукаєш, неможливо знайти.
      </div>
      <div class="not-found-module__btn">
        <MainButton
            :label="'На головну'"
        />
      </div>
    </div>
</div>
</template>

<script>
import ImageNotFound from '../../../assets/img/not-found-artboard.svg?skipsvgo'
import ImageNotFoundMobile from '../../../assets/img/not-found-artboard-mob.svg?skipsvgo'
import MainButton from "../../UI/buttons/MainButton/MainButton.vue";


export default {
  name: "NotFoundModule",
  components: {
    ImageNotFound,
    ImageNotFoundMobile,
    MainButton,
  },
}
</script>

<style scoped lang="scss">
@import "../../../scss/mixins/mixins";
@import "../../../scss/colors";

.not-found-module {
  &__inner {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 64px 16px;

    @include for-992 {
      padding: 54px 16px 32px;
    }
  }
  &__image {
    margin-bottom: 96px;
    overflow: hidden;

    @include for-992 {
      margin-bottom: 54px;
    }

    svg {
      height: auto;
      width: 100%;
    }

    &--desktop {
      @include for-992 {
        display: none;
      }
    }
    &--mobile{
      @include from-992 {
        display: none;
      }
    }
  }
  &__txt-large {
    margin-bottom: 16px;
    font-weight: 600;
    font-size: 64px;
    text-align: center;

    @include for-992 {
      font-size: 28px;
      margin-bottom: 8px;
    }
  }
  &__txt-small {
    font-size: 20px;
    margin-bottom: 60px;
    text-align: center;

    @include for-992 {
      font-size: 16px;
      margin-bottom: 24px;
    }
  }
  &__btn {
    max-width: 444px;
    width: 100%;

    .main-button {
      font-weight: 500;
    }
  }
}


</style>