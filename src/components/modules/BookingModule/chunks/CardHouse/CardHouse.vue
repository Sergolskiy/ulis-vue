<template>
  <div class="card-house">
    <div class="card-house__inner">
      <div class="card-house__section d-flex">
        <div class="card-house__photo"
             :class="{'card-house__photo--big' : detailedInfo}"
        >
          <img class="card-house__photo-img"
               src="../../../../../assets/img/house.png" alt="house">

          <div class="card-house__photo-scale">
            <IconScaleButton/>
          </div>
        </div>
        <div class="card-house__overview">
          <div class="card-house__name">
            Будинок на 1 спальню у лісі
          </div>
          <div class="card-house__features features"
               :class="{'card-house__features--active' : detailedInfo}"
          >
            <div class="card-house__features-item features__item">
              <div class="card-house__features-ico features__ico">
                <IconPeople/>
              </div>
              <div class="card-house__features-txt features__name">
                Для 2-х гостей (+1)
              </div>
            </div>
            <div class="card-house__features-item features__item">
              <div class="card-house__features-ico features__ico">
               <IconMap/>
              </div>
              <div class="card-house__features-txt features__name">
                Київ, Дудки
              </div>
            </div>
            <div class="card-house__features-item features__item">
              <div class="card-house__features-ico features__ico">
                <IconBuildings/>
              </div>
              <div class="card-house__features-txt features__name">
                36 м<sup>2</sup>
              </div>
            </div>
          </div>

          <div class="card-house__description"
              v-if="detailedInfo"
          >
            <p>
              Будинок з однією спальною кімнатою обладнано функціональною кухнею та санвузлом. 
               спальні є місце для роботи, а у вітальні є камін та панорамні вікна з чудовими краєвидами. Будинок має садові меблі та мангал.
            </p>
              Спальні місця:<br>
              - спальня 1 - двоспальне ліжко шир. 160 см,<br>
              - вітальня - диван (додактове місце). <br><br>
              Заїзд з 15:00. Виїзд до 11:00.<br>
              Ми pet-friendly, тому завжди раді вашим пухнастим друзям.
          </div>
          <div class="card-house__price-block"
               v-if="!detailedInfo"
          >
            <div class="card-house__overview-txt">
              1 ніч, 2 дорослих
            </div>
            <div class="card-house__price">
              <IconUAH/>
              4 600
            </div>
            <div class="card-house__more-btn">
              <MainButton 
                :label="'Детальніше'"
                :ico="'plus'"
                :icoPosition="'right'"
                @click="detailedInfo = true"
              />
            </div>
          </div>
        </div>
      </div>

      <div class="card-house__section"
           v-if="detailedInfo"
      >
        <div class="card-house__toggle-section">
          
        </div>
      </div>

      <div class="card-house__section"
           v-if="detailedInfo"
      >
        <div class="card-house__categories">
          <div class="card-house__categories-item">
            <div class="card-house__categories-title">
              <div class="card-house__categories-icon">
                <IconBathroom/>
              </div>
              <div class="card-house__categories-name">
                Ванна кімната
              </div>
            </div>
            <div class="card-house__categories-row">
              <div class="card-house__categories-col">
                <div class="card-house__categories-item-content">
                  Косметичні засоби
                </div>
              </div>
              <div class="card-house__categories-col">
                <div class="card-house__categories-item-content">
                  Комплект рушників
                </div>
              </div>
            </div>
          </div>

          <!-- <div class="card-house__categories-item">
            <div class="card-house__categories-title">
              <div class="card-house__categories-icon">

              </div>
              <div class="card-house__categories-name">

              </div>
            </div>
            <div class="card-house__categories-row">
              <div class="card-house__categories-col">
                <div class="card-house__categories-item-content">
                
                </div>
              </div>
            </div>
          </div> -->
        </div>
      </div>

      <div class="card-house__section"
           v-if="detailedInfo"
      >
        <div class="card-house__price-section">
          <div class="card-house__price-row">
            <div class="card-house__price-col card-house__price-col--left">
              <div class="card-house__overview-txt">
                + 550 грн за додаткового гостя
              </div>
              <div class="card-house__overview-txt">
                + 600 грн за прибирання за пухнастиком
              </div>
            </div>
            <div class="card-house__price-col card-house__price-col--right">
              <div class="card-house__house-number">
                <DefaultSelect
                    :options="[`1.1`, '1.2', '2.1']"
                    :selected="'1.1'"
                />
              </div>

              <div class="card-house__price-block">
                <div class="card-house__overview-txt">
                  1 ніч, 2 дорослих
                </div>
                <div class="card-house__price">
                  <IconUAH/>
                  4 600
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


      <div class="card-house__section"
           v-if="detailedInfo"
      >
        <div class="card-house__bottom">
          <div class="card-house__bottom-btn">
            <MainButton 
              :label="'Закрити'"
              :secondary="true"
              @click="detailedInfo = false"
            />
          </div>
          <div class="card-house__bottom-btn">
            <MainButton 
              :label="'Забронювати'"
            />
          </div>
        </div>
      </div>
    </div>
    
   
  </div>
</template>

<script>
// import InfoBlock from "../../../../UI/labels/InfoBlock/InfoBlock.vue";
import MainButton from "../../../../UI/buttons/MainButton/MainButton.vue";
import DefaultSelect from "../../../../UI/selections/DefaultSelect/DefaultSelect.vue";
import IconScaleButton from '../../../../../assets/img/scale-button.svg?skipsvgo'
import IconUAH from '../../../../../assets/img/currencies.svg?skipsvgo'
import IconMap from '../../../../../assets/img/icon-map-16px-grey.svg?skipsvgo'
import IconPeople from '../../../../../assets/img/icon-people-16px-grey.svg?skipsvgo'
import IconBuildings from '../../../../../assets/img/icon-buildings-16px-grey.svg?skipsvgo'
import IconBathroom from '../../../../../assets/img/card/bathroom.svg?skipsvgo'


export default {
  name: "CardHouse",
  components: {
    // InfoBlock, 
    MainButton,
    DefaultSelect,
    IconScaleButton,
    IconUAH,
    IconMap,
    IconPeople,
    IconBuildings,
    IconBathroom
  },

  data: function () {
    return {
      detailedInfo: false
    };
  },
}
</script>

<style scoped lang="scss">
@import "../../../../../scss/colors";
@import "../../../../../scss/mixins/mixins";

.card-house{
  
  &__inner {
    padding: 16px;
    border: 1px solid $border-grey;
    border-radius: 8px;
  }

  &__section {
    
  }

  &__photo {
    height: 256px;
    width: 256px;
    min-width: 256px;
    position: relative;
    border-radius: 8px;
    overflow: hidden;

    &--big {
      height: 369px;
      width: 369px;
      min-width: 369px;
    }
  }

  &__photo-scale {
    position: absolute;
    right: 8px;
    bottom: 8px;
    width: 32px;
    height: 32px;
    border-radius: 4px;
    background: #8C6D46;
    cursor: pointer;
  }

  &__photo-img {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  &__overview {
    padding-left: 20px;
    display: flex;
    flex-direction: column;
    width: 100%;
  }

  &__name {
    font-size: 20px;
    color: #1E1E1E;
    font-weight: 600;
    margin-bottom: 16px;
  }

  &__description{

  }

  &__features{

    &--active {
      display: flex;
      flex-wrap: wrap;
      margin: 0 -8px;
      margin-bottom: 20px;

      .features__item {
        padding: 0 8px;
      }

      &.features_ico {
        margin-right: 4px;
      }

      .features__name {
        padding-top: 4px;
        color: $text-grey;
        font-size: 14px;
      }
    }
  }

  &__price-block {
    display: flex;
    flex-direction: column;
    align-items: end;
    flex: 1 1 auto;
    justify-content: end;
  }

  &__overview-txt {
    font-size: 12px;
    color: $text-grey;
    margin-bottom: 4px;
  }

  &__price {
    color: #1E1E1E;
    font-size: 24px;
    font-weight: 600;
    display: flex;
  }

  &__more-btn {
    margin-top: 16px;
    max-width: 215px;
    width: 100%;
  }

  &__toggle-section{
    margin-bottom: 16px;
  }

  &__categories {

  }

  &__categories-item {

  }

  &__categories-title {
    display: flex;
    margin-bottom: 8px;
  }

  &__categories-icon {
    width: 20px;
    height: 20px;
    margin-right: 10px;
  }

  &__categories-name {
    font-weight: 500;
    padding-top: 4px;
  }

  &__categories-row {
    display: flex;
    flex-wrap: wrap;
    margin: 0 -4px;
    margin-bottom: 8px;
  }

  &__categories-col {
    padding: 0 4px;
    margin-bottom: 8px;
  }

  &__categories-item-content {
    padding: 8px;
    font-size: 12px;
    border-radius: 8px;
    border: 1px solid $border-grey;
  }

  &__price-section {
    margin-bottom: 24px;
  }

  &__price-row {
    display: flex;
    align-items: center;
  }

  &__price-col {

    &--left{
      flex: 1 1 auto;
    }

    &--right {
      display: flex;
      align-items: end;
    }
  }

  &__house-number{
    margin-right: 24px;
    min-width: 79px;
    // max-width: 79px;
    max-width: 100px;
  }

  &__bottom {
    display: flex;
    margin: 0 -12px;
    justify-content: flex-end;
  }

  &__bottom-btn {
    padding: 0 12px;
  }
}

.features{

  &__item {
    margin-bottom: 4px;
    display: flex;
    align-items: center;
  }

  &__ico {
    min-width: 24px;
    width: 24px;
    height: 24px;
    margin-right: 8px;
    
    svg{
      width: 100%;
      height: 100%;
    }
  }

  &__name {
    padding-top: 4px;
    color: $text-grey;
    font-size: 16px;
  }
}




</style>