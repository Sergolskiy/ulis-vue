<template>
  <div class="payment-block">
    <div class="payment-block__inner">

      <div class="payment-block__title">
        <div class="payment-block__title-num">
          1
        </div>
        Правила УЛІС
      </div>

      <div class="payment-block__section">
        <div class="payment-block__rules">
          <div class="payment-block__rule">
            <div class="payment-block__rule-icon">
              <IconMedia/>
            </div>
            <div class="payment-block__rule-txt">
              <b>
                Насолоджуйся тишею
              </b>
              — не вмикай музику та не галасуй.
            </div>
          </div>
          <div class="payment-block__rule">
            <div class="payment-block__rule-icon">
              <IconNeighborhood/>
            </div>
            <div class="payment-block__rule-txt">
              <b>
                Поважай сусідів
              </b>
              — зберігай тишу протягом твого перебування на території локації.
            </div>
          </div>
          <div class="payment-block__rule">
            <div class="payment-block__rule-icon">
              <IconRoad/>
            </div>
            <div class="payment-block__rule-txt">
              <b>
                Не перевищуйте швидкість
              </b>
               на локації та території села більш ніж 20 км/год.
            </div>
          </div>
          <div class="payment-block__rule">
            <div class="payment-block__rule-icon">
              <IconNature/>
            </div>
            <div class="payment-block__rule-txt">
              <b>
                Бережи природу
              </b>
               — не залишай їжу та сміття на вулиці
            </div>
          </div>
          <div class="payment-block__rule">
            <div class="payment-block__rule-icon">
              <IconForest/>
            </div>
            <div class="payment-block__rule-txt">
              <b>
                Шануй ліс
              </b>
               — не ламай дерева і не пали дрова з лісу, їх ти завжди можеш привезти з собою чи придбати у мене.
            </div>
          </div>
          <div class="payment-block__rule">
            <div class="payment-block__rule-icon">
              <IconNotBurn/>
            </div>
            <div class="payment-block__rule-txt">
              <b>
                Не спалюй сміття в багатті.
              </b>
               Для нього у будинку є симпатичний блискучий бак.
            </div>
          </div>
          <div class="payment-block__rule">
            <div class="payment-block__rule-icon">
              <IconAnimal/>
            </div>
            <div class="payment-block__rule-txt">
              <b>
                Слідкуй за своїми тваринами.
              </b>
               Я обожнюю пухнастиків, але ти несеш відповідальність за своїх чотирилапих друзів та шкоду, яку вони можуть завдати.
            </div>
          </div>
          <div class="payment-block__rule">
            <div class="payment-block__rule-icon">
              <IconNoSmoking/>
            </div>
            <div class="payment-block__rule-txt">
              <b>
                Не пали, будь ласка, в будинку.
              </b>
               Оселі мають пахнути свіжістю та лісом, а щоб вивести запах цигарок мені доведеться списати з твоєї картки додаткові 2000 грн.
            </div>
          </div>
          <div class="payment-block__rule">
            <div class="payment-block__rule-icon">
              <IconCleaning/>
            </div>
            <div class="payment-block__rule-txt">
              <b>
                Залишай чистоту 
              </b>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import IconMedia from '../../../../../../../../src/assets/img/rules/media.svg?skipsvgo'
import IconNeighborhood from '../../../../../../../../src/assets/img/rules/neighborhood.svg?skipsvgo'
import IconRoad from '../../../../../../../../src/assets/img/rules/road.svg?skipsvgo'
import IconNature from '../../../../../../../../src/assets/img/rules/nature.svg?skipsvgo'
import IconForest from '../../../../../../../../src/assets/img/rules/forest.svg?skipsvgo'
import IconNotBurn from '../../../../../../../../src/assets/img/rules/not-burn.svg?skipsvgo'
import IconAnimal from '../../../../../../../../src/assets/img/rules/animal.svg?skipsvgo'
import IconNoSmoking from '../../../../../../../../src/assets/img/rules/no-smoking.svg?skipsvgo'
import IconCleaning from '../../../../../../../../src/assets/img/rules/cleaning.svg?skipsvgo'


export default {
  name: "BookingStepE",
  components: {
    IconMedia,
    IconNeighborhood,
    IconRoad,
    IconNature,
    IconForest,
    IconNotBurn,
    IconAnimal,
    IconNoSmoking,
    IconCleaning,
  },
  props: {
    Booking: {
      type: Object,
      default: null,
    }
  },

}
</script>

<style scoped lang="scss">
@import "../../../../../../../scss/colors";
@import "../../../../../../../scss/mixins/mixins";

.payment-block{

  &__inner {

  }
  &__title {
    display: flex;
    padding-top: 2px;
    font-weight: 600;
    font-size: 20px;
    margin-bottom: 16px;
  }
  &__title-num {
    width: 24px;
    height: 24px;
    border-radius: 50%;
    background: #000000;
    color: #ffffff;
    margin-right: 8px;
    transform: translateY(-2px);
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 600;
    font-size: 12px;
    padding-top: 1px;
  }
  &__section {

  }
  &__rules {
    border-radius: 8px;
    border: 1px solid #DCE0E4;
    display: flex;
    flex-direction: column;
    padding: 16px;
  }
  &__rule {
    display: flex;
    margin-bottom: 12px;

    &:last-child {
      margin-bottom: 0;
    }
  }
  &__rule-icon {
    max-width: 24px;
    width: 100%;
    justify-content: center;
    align-items: center;
    height: 24px;
    margin-right: 12px;
    display: flex;
  }
  &__rule-txt {
    padding-top: 4px;
  }
}

</style>