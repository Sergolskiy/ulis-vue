<template>

  <div class="service-cook__item-card">
    <div class="service-cook__card service-cook-card">
      <div class="service-cook-card__photo">
        <div class="service-cook-card__photo-img">
          <img :src="item.img" alt="dish">
        </div>
      </div>
      <div class="service-cook-card__date">
        13:00 - 20:00
      </div>
      <div class="service-cook-card__favorite"
           :class="{'service-cook-card__favorite--active' : inFavor}"
           @click="inFavor = !inFavor"
      >
        <IconHeart/>
      </div>
      <div class="service-cook-card__name">
        Соковита котлета по-київськи з картопляним пюре
      </div>
      <div class="service-cook-card__row">
        <div class="service-cook-card__gram">
          300 г
        </div>
        <div class="service-cook-card__price">
          255
          <IconUAH/>
        </div>
      </div>
      <div class="service-cook-card__footer">
        <div class="service-cook-card__btn"
             v-if="!wantedFlag"
        >
          <MainButton
              :label="'Хочу'"
              @click="wantedFlag = true"
          />
        </div>
        <div class="service-cook-card__counter"
             v-if="wantedFlag"
        >
          <CounterInput
              :value="countDish"
              :minValue="0"
              :btnStyle="true"
              @update:updateCounter="(item) => countDish = item"
          />
        </div>
      </div>
    </div>
  </div>

<!--    <div class="service-cook__item">-->
<!--      <div class="service-cook__card">-->
<!--        <div class="service-cook__photo">-->
<!--          <div class="service-cook__photo-img">-->
<!--            <img :src="item.img" alt="dish">-->
<!--          </div>-->
<!--        </div>-->
<!--        <div class="service-cook__date">-->
<!--          13:00 - 20:00-->
<!--        </div>-->
<!--        <div class="service-cook__favorite"-->
<!--             :class="{'service-cook__favorite&#45;&#45;active' : inFavor}"-->
<!--             @click="inFavor = !inFavor"-->
<!--        >-->
<!--          <IconHeart/>-->
<!--        </div>-->
<!--        <div class="service-cook__name">-->
<!--          Соковита котлета по-київськи з картопляним пюре-->
<!--        </div>-->
<!--        <div class="service-cook__row">-->
<!--          <div class="service-cook__gram">-->
<!--            300 г-->
<!--          </div>-->
<!--          <div class="service-cook__price">-->
<!--            255-->
<!--            <IconUAH/>-->
<!--          </div>-->
<!--        </div>-->
<!--        <div class="service-cook__footer">-->
<!--          <div class="service-cook__btn"-->
<!--               v-if="!wantedFlag"-->
<!--          >-->
<!--            <MainButton-->
<!--                :label="'Хочу'"-->
<!--                @click="wantedFlag = true"-->
<!--            />-->
<!--          </div>-->
<!--          <div class="service-cook__counter"-->
<!--               v-if="wantedFlag"-->
<!--          >-->
<!--            <CounterInput-->
<!--                :value="countDish"-->
<!--                :minValue="0"-->
<!--                :btnStyle="true"-->
<!--                @update:updateCounter="(item) => countDish = item"-->
<!--            />-->
<!--          </div>-->
<!--        </div>-->
<!--      </div>-->
<!--    </div>-->




</template>

<script>
import IconUAH from "@/assets/img/currencies.svg?skipsvgo";
import CounterInput from "@/components/UI/inputs/CounterInput/CounterInput.vue";
import MainButton from "@/components/UI/buttons/MainButton/MainButton.vue";
import IconHeart from "@/assets/img/icon-heart.svg?skipsvgo";

export default {
  name: "CookingSlider",
  components: {
    IconHeart,
    MainButton,
    CounterInput,
    IconUAH,
  },

  props: {
    item: Object,
  },

  data() {
    return {
      countDish: 0,
      inFavor: false,
      wantedFlag: false,
    }
  },

}
</script>

<style scoped lang="scss">
@import "../../../../../scss/colors";
@import "../../../../../scss/mixins/mixins";

//.service-cook {
//  &__item {
//    max-width: 241px;
//    width: 100%;
//  }
//
//  &__card {
//    border-radius: 8px;
//    background: $white;
//    display: flex;
//    flex-direction: column;
//    position: relative;
//    padding: 16px;
//    border: 1px solid $border-grey;
//  }
//
//  &__photo {
//    height: 209px;
//    margin-bottom: 8px;
//  }
//
//  &__photo-img {
//    display: flex;
//    justify-content: center;
//    align-items: center;
//    object-fit: cover;
//  }
//
//  &__date {
//    position: absolute;
//    top: 16px;
//    left: 16px;
//    color: $white;
//    font-size: 12px;
//    background-color: rgba(0,0,0,.5);
//    border-radius: 4px;
//    padding: 2px 8px 0;
//    min-height: 30px;
//    display: flex;
//    align-items: center;
//  }
//
//  &__favorite {
//    position: absolute;
//    right: 16px;
//    top: 16px;
//    height: 40px;
//    width: 40px;
//    background: $black;
//    transition: .3s;
//    border-radius: 8px;
//    cursor: pointer;
//    display: flex;
//    justify-content: center;
//    align-items: center;
//
//    &:hover {
//      //box-shadow: 0px 0 3px #00000052;
//      background: $black-hover;
//      border-color: $black-hover;
//    }
//
//    &--active {
//      svg {
//        fill: $white !important;
//      }
//    }
//  }
//
//
//  &__name {
//    font-size: 16px;
//    font-weight: 500;
//    display: -webkit-box;
//    -webkit-line-clamp: 2;
//    -webkit-box-orient: vertical;
//    overflow: hidden;
//    margin-bottom: 4px;
//  }
//
//  &__row {
//    display: flex;
//    margin-bottom: 16px;
//  }
//
//  &__gram {
//    border-radius: 8px;
//    border: 1px solid $border-grey;
//    font-size: 14px;
//    padding-left: 12px;
//    padding-right: 12px;
//    display: flex;
//    align-items: center;
//    min-height: 28px;
//  }
//
//  &__price {
//    font-size: 16px;
//    font-weight: 500;
//    display: flex;
//    align-items: center;
//    justify-content: end;
//    min-height: 28px;
//    flex: 1px;
//
//    svg{
//      width: 16px;
//      height: 16px;
//      margin-top: -4px;
//    }
//  }
//}


.service-cook-card {
  border-radius: 8px;
  border: 1px solid $border-grey;
  background: $white;
  display: flex;
  flex-direction: column;
  position: relative;
  padding: 16px;
  max-width: 241px;
  width: 100%;


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

  &__footer {

  }

  &__btn {

  }

  &__counter {

  }
}

</style>