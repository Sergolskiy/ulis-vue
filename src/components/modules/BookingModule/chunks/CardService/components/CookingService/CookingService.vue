<template>
  <div class="service-content service-content--cooking">

    <div class="service-cook">
      <template v-if="!openCookingCart">
        <div class="service-cook__large-title">
          Мої страви
          <div class="service-cook__large-title-icon">
            <IconBasket/>
          </div>
        </div>

        <InfoBlock
            class="mt-3 mb-3"
            :text="'Обери страви, які тобі до вподоби, і я приготую їх тобі на вечерю в день заселення!'"
            :type="'success'"
        />

        <div class="service-cook__list service-cook__slider">

          <Splide class="cocking-slider" :options="optionsSlider" aria-label="My Favorite Images">
            <SplideSlide v-for="(item, index) in slidesTest" :key="index">
              <CookingSlide
                  :item="item"
                  :slides="slidesTest"
              />
            </SplideSlide>
          </Splide>


        </div>
      </template>



      <template v-if="openCookingCart">

        <div class="service-cook__large-back" @click="$emit('goBackCooking')"></div>

        <div class="service-cook__large-title">
          Твій кошик
          <div class="service-cook__large-title-icon">
            <IconBasket/>
          </div>
        </div>

        <InfoBlock
            class="mt-3 mb-3"
            :text="'Ці страви я приготую для тебе на вечерю в день заселення! Тобі залишилось обрати час, на який їх приготувати та будинок!'"
            :type="'success'"
        />

        <div class="service-cook__list-basket">

          <div class="service-cook-line-card service-cook__item-line-card">
            <div class="service-cook-line-card__photo">
              <div class="service-cook-line-card__photo-img">
                <img src="../../../../../../../assets/img/service-img/dish02.png" alt="dish">
              </div>
            </div>
            <div class="service-cook-line-card__info">
              <div class="service-cook-line-card__name">
<!--              <span class="service-cook-line-card__name-count nowrap">-->
<!--                1 x-->
<!--              </span>-->
                <span class="service-cook-line-card__name-txt">
                Соковита котлета по-київськи з картопляним пюре
              </span>
              </div>
              <div class="service-cook-line-card__gram">
                300 г
              </div>
            </div>
            <div class="service-cook-line-card__price">
              255
              <IconUAH/>
            </div>
            <div class="service-cook-line-card__count">
              <CounterInput
                  :border="true"
                  :value="countDish"
                  :minValue="0"
                  @update:updateCounter="(item) => countDish = item"
              >
<!--                <template #content>-->
<!--                  <div class="d-flex align-items-center">-->
<!--                    <span class="ml-2">днів</span>-->
<!--                  </div>-->
<!--                </template>-->
              </CounterInput>
            </div>
            <div class="service-cook-line-card__delete">
              <div class="square-delete-btn"
                   @click="removeDish"
              >
                <div class="square-delete-btn__inner">
                  <IconDelete/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </template>

    </div>


  </div>

  <DeleteItemPopup
      v-if="openRemovePopup"
      :deletePopupText="deletePopupText"
      @closeDeletePopup="openRemovePopup = false"
  />

</template>

<script>
import MainButton from "@/components/UI/buttons/MainButton/MainButton.vue";
import CounterInput from "@/components/UI/inputs/CounterInput/CounterInput.vue";
import IconUAH from "@/assets/img/currencies.svg?skipsvgo";
import IconHeart from "@/assets/img/icons/icon-heart.svg?skipsvgo";
import IconDelete from "@/assets/img/icons/icon-delete.svg?skipsvgo";
import IconBasket from '@/assets/img/icons/icon-basket.svg?skipsvgo'
import CookingSlide from "@/components/modules/BookingModule/chunks/CookingSlide/CookingSlide.vue";
import { Splide, SplideSlide } from '@splidejs/vue-splide';
import '@splidejs/vue-splide/css';
import DeleteItemPopup from "@/components/modules/BookingModule/popups/DeleteItemPopup/DeleteItemPopup.vue";
import InfoBlock from "@/components/UI/labels/InfoBlock/InfoBlock.vue";

export default {
  name: "CookingService",
  components: {
    InfoBlock,
    CookingSlide,
    MainButton,
    CounterInput,
    IconUAH,
    IconHeart,
    IconDelete,
    IconBasket,
    Splide,
    SplideSlide,
    DeleteItemPopup,
  },

  emits: ['goBackCooking'],

  props: {
    openCookingCart: Boolean,
  },

  data() {
    return {
      slides: [
        {
          img: '/src/assets/img/service-img/dish02.png',
        },
        {
          img: '/src/assets/img/service-img/dish02.png',
        },
        {
          img: '/src/assets/img/service-img/dish02.png',
        },
        {
          img: '/src/assets/img/service-img/dish02.png',
        },
      ],

      slidesTest: [
        {
          img: '/assets/dish02.png',
        },
        {
          img: '/assets/dish02.png',
        },
        {
          img: '/assets/dish02.png',
        },
        {
          img: '/assets/dish02.png',
        },
      ],

      optionsSlider: {
        rewind: false,
        autoWidth: true,
        gap: 23,
        perPage: 3,
        breakpoints: {
          850: {
            perPage: 2,
          },
          640: {
            perPage: 1,
          },
        }
      },

      countDish: 0,

      openRemovePopup: false,
      deletePopupText: {
        title: 'Видалити страву?',
        txt: 'Ти впевнений, що хочеш виконати цю дію? Якщо ти видалиш цю страву, то всі обрані фільтри не збережуться.',
        no: 'Не хочу',
        yes: 'Видалити',
      },
    }
  },

  methods: {
    removeDish() {
      this.openRemovePopup = true
    },
  },

}
</script>

<style lang="scss" scoped>
@import "../../../../../../../scss/colors";
@import "../../../../../../../scss/mixins/mixins";

.service-cook{

  &__large-back {
    width: 32px;
    height: 32px;
    background: #000000 url('../../../../../../../assets/img/arrow-white.svg') center center no-repeat;
    border-radius: 50%;
    cursor: pointer;
    transform: rotate(-180deg);
    margin-bottom: 24px;

    @include for-768 {
      margin-bottom: 16px;
    }
  }

  &__large-title {
    display: flex;
    align-items: center;
    font-size: 32px;
    font-weight: 600;
    margin-bottom: 16px;

    @include for-768 {
      font-size: 28px;
    }
  }

  &__large-title-icon{
    width: 40px;
    height: 40px;
    border-radius: 8px;
    border: 1px solid $border-grey;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: auto;

    //@include from-768 {
    //  display: none;
    //}

    svg {
      width: 24px;
      height: 24px;
    }
  }

  &__list {

  }

  &__item {

  }

  &__list-basket{

    @include for-550 {
      border-radius: 8px;
      border: 1px solid $border-grey;
    }
  }

  //&__card {
  //  border-radius: 8px;
  //  background: $white;
  //  display: flex;
  //  flex-direction: column;
  //  position: relative;
  //  padding: 16px;
  //  border: 1px solid $border-grey;
  //}
  //
  //&__photo {
  //  height: 209px;
  //  margin-bottom: 8px;
  //}
  //
  //&__photo-img {
  //  display: flex;
  //  justify-content: center;
  //  align-items: center;
  //  object-fit: cover;
  //}


}

.service-cook-card {
  //border-radius: 8px;
  //border: 1px solid $border-grey;
  //background: $white;
  //display: flex;
  //flex-direction: column;
  //position: relative;
  //padding: 16px;



  &__photo {
    height: 209px;
    margin-bottom: 8px;
  }

  &__photo-img {
    display: flex;
    justify-content: center;
    align-items: center;
    object-fit: cover;
  }

  &__date {
    position: absolute;
    top: 16px;
    left: 16px;
    color: $white;
    font-size: 12px;
    background-color: rgba(0,0,0,.5);
    border-radius: 4px;
    padding: 2px 8px 0;
    min-height: 30px;
    display: flex;
    align-items: center;
  }

  &__favorite {
    position: absolute;
    right: 16px;
    top: 16px;
    height: 40px;
    width: 40px;
    background: $black;
    transition: .3s;
    border-radius: 8px;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;

    &:hover{
      //box-shadow: 0px 0 3px #00000052;
      background: $black-hover;
      border-color: $black-hover;
    }

    &--active {
      svg {
        fill: $white !important;
      }
    }
  }

  &__name {
    font-size: 16px;
    font-weight: 500;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    margin-bottom: 4px;
  }

  &__row {
    display: flex;
    margin-bottom: 16px;
  }

  &__gram {
    border-radius: 8px;
    border: 1px solid $border-grey;
    font-size: 14px;
    padding-left: 12px;
    padding-right: 12px;
    display: flex;
    align-items: center;
    min-height: 28px;
  }

  &__price {
    font-size: 16px;
    font-weight: 500;
    display: flex;
    align-items: center;
    justify-content: end;
    min-height: 28px;
    flex: 1px;

    svg{
      width: 16px;
      height: 16px;
      margin-top: -4px;
    }
  }

}


.service-cook-line-card {
  padding: 16px;
  display: flex;
  align-items: center;
  position: relative;

  @include from-550{
    border-radius: 8px;
    border: 1px solid $border-grey;
    margin-bottom: 16px;
  }

  @include for-768 {
    align-items: initial;
    flex-wrap: wrap;
    min-height: 100px;
  }


  &:not(:last-child):after{
    @include for-550 {
      content: '';
      position: absolute;
      bottom: 0;
      left: 50%;
      transform: translate(-50%);
      height: 1px;
      width: calc(100% - 32px);
      background: $border-grey;
    }
  }


  &__photo {
    max-width: 72px;
    width: 100%;
    height: 72px;
    margin-right: 16px;

    @include for-768 {
      margin-right: 0;
      position: absolute;
      left: 16px;
      top: 16px;
    }

    @include for-550 {
      width: 56px;
      height: 56px;
    }
  }

  &__photo-img {
    display: flex;
    justify-content: center;
    align-items: center;
    object-fit: cover;

    img {
      width: 100%;
      height: 100%;
    }
  }

  &__info {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;

    @include for-768 {
      padding-left: 80px;
      min-height: 70px;
      width: calc(100% - 36px);
      order: 2;
      margin-bottom: 16px;
    }

    @include for-550 {
      padding-left: 64px;
      min-height: 56px;
    }
  }

  &__name {
    font-weight: 500;
    display: flex;
    margin-bottom: 12px;

    @include for-550 {
      font-size: 12px;
      margin-bottom: 4px;

      font-size: 12px;
      font-weight: 400;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      overflow: hidden;
    }
  }

  &__name-count {
    min-width: 25px;
    margin-right: 4px;

    // @include for-550 {
    //   display: none;
    // }
  }

  &__gram {
    border-radius: 8px;
    border: 1px solid $border-grey;
    font-size: 14px;
    padding-left: 12px;
    padding-right: 12px;
    display: flex;
    align-items: center;
    min-height: 40px;
    width: fit-content;

    @include for-768 {
      padding-top: 4px;
      border-radius: 4px;
      min-height: 21px;
      font-size: 12px;
      padding-left: 8px;
      padding-right: 8px;
      margin-top: auto;
    }

    // @include for-550{
    //   display: none;
    // }
  }

  &__price {
    margin-left: 8px;
    font-size: 24px;
    font-weight: 600;
    display: flex;
    align-items: center;
    justify-content: end;
    min-height: 28px;
    flex: 1;

    @include for-768 {
      margin-left: 0;
      min-height: 32px;
      order: 5;
    }


    svg{
      width: 24px;
      height: 24px;
      margin-top: -4px;

      @include for-550 {
        width: 16px;
        height: 16px;
      }
    }
  }

  &__count {
    margin-left: 16px;

    @include for-768{
      order: 4;
      margin-left: 0;
    }

    @include for-550{
      align-self: flex-end;
      margin-left: 4px;
    }

    :deep(.counter-input) {
      @include for-550{
        padding: 0;
        border: none;
      }
    }

    :deep(.counter-input__content) {
      @include for-768{
        display: none;
      }
    }
  }

  &__delete {
    margin-left: 16px;

    @include for-768{
      order: 3;
      margin-left: 4px;

      .square-delete-btn {
        width: 32px;
        height: 32px;
        border-radius: 6px;

        &__inner {
          width: 32px;
          height: 32px;
        }

        svg {
          width: 20px;
          height: 20px;
        }
      }
    }
  }


}

.square-delete-btn {
  height: 48px;
  width: 48px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;

  &__inner{
    border: 1px solid $warning-red-border;
    border-radius: 8px;
    transition: .15s;
    display: flex;
    height: 47px;
    width: 47px;
    display: flex;
    justify-content: center;
    align-items: center;
    transform: scale(1);

    &:hover {
      &:hover{
        transform: scale(.9);
        background: $warning-red-border;

        svg {
          transform: scale(1.1);
        }
        :deep(svg path){
          stroke: $white!important;
        }
      }
    }
  }

}
.cocking-slider {
  margin-bottom: 50px;

  @include for-420 {
    &:deep(.splide__slide) {
      width: 100%;
    }
  }

  &:deep(.splide__pagination) {
    display: none;
  }

  &:deep(.splide__arrows) {
    position: absolute;
    top: 100%;
    margin-top: 33px;
    width: 120px;
    left: 50%;
    margin-left: -60px;
  }

  &:deep(.splide__arrow) {
    opacity: 1;
    background: $black url("../../../../../../../assets/img/arrow-white.svg") center center no-repeat;

    svg {
      display: none;
    }

    &.splide__arrow {
      &[disabled] {
        pointer-events: none;
        background: $black url("../../../../../../../assets/img/arrow-grey.svg") center center no-repeat;
      }
    }

    &.splide__arrow--prev {
      transform: translateY(-50%) rotate(-180deg);
    }
  }

  &:deep(.splide__pagination__page) {
    background: rgba(0, 0, 0, 0.30);
    border: 0;
    opacity: 1;

    &.is-active {
      transform: scale(1);
      background: $black;
    }
  }
}


</style>