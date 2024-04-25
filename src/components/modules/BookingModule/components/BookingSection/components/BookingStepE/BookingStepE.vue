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

          <div class="payment-block__rule"
                v-for="(item, index) in rules"
                :key="index"
          >
            <div class="payment-block__rule-icon">
              <IconMedia v-if="item.name == 'media'"/>
              <IconNeighborhood v-if="item.name == 'neighborhood'"/>
              <IconRoad v-if="item.name == 'road'"/>
              <IconNature v-if="item.name == 'nature'"/>
              <IconForest v-if="item.name == 'forest'"/>
              <IconNotBurn v-if="item.name == 'not-burn'"/>
              <IconAnimal v-if="item.name == 'animal'"/>
              <IconNoSmoking v-if="item.name == 'no-smoking'"/>
              <IconCleaning v-if="item.name == 'cleaning'"/>
            </div>
            <div class="payment-block__rule-txt"
                  v-html="item.content">
            </div>
          </div>
        </div>
      </div>
    

      <div class="payment-block__rules-agree-block payment-block__checkbox">
        <DefaultCheckbox
            class="lable-pl-38"
            :label="'Я погоджуюсь з правилами проживання в УЛІС'"
            :required="'required'"
        />
      </div>

      <div class="payment-block__title">
        <div class="payment-block__title-num">
          2
        </div>
        Оплата
      </div>

      <div class="payment-block__section">
        <div class="payment-block__title">
          Що буде після оплати?
        </div>

        <ul>
          <li>
            Ти отримаєш повні інструкції щодо завершення та підтвердження бронювання на свою електронну адресу; 
          </li>
          <li>
            Наступного листа від команди з точною геолокацією та кодом-паролем від будиночку чекай вранці в день заселення та насолоджуйся тишею.
          </li>
        </ul>
      </div>

      <div class="payment-block__section">
        <div class="payment-block__title">
          Підтвердження замовлення
        </div>

        <div class="payment-block__checkbox mb-2">
          <DefaultCheckbox
            class="lable-pl-38 label-weight-medium mh-42"
            :label="'Оплата бонусами'"
            :helpText="'У тебе 154,6 бонусів'"
            v-model="checked"
            :disabled="true"
          />
        </div>

        <div class="please-login">
          <div class="please-login__inner">
            <div class="please-login__info">
              <InfoBlock
                  :text="'<b>Авторизуйся</b> в системі, накопичуй бонуси та розплачуйся ними!'"
                  :type="'info'"
              />
            </div>
            <div class="please-login__btn">
              <MainButton
                  :label="'Авторизуватися'"
              />
            </div>
          </div>
        </div>


        <div class="payment-block__promo">
          <FormLabel
              class="mt-4"
              :label="'Вкажіть промокод або кодове слово для подарункового сертифікату'"
          />

          <div class="promo-field">
            <div class="promo-field__inner">
              <DefaultInput
                  :label="''"
                  :placeholder="'Ввести'"
              />
              <MainButton
                  class="promo-field__btn h-40"
                  :label="'Застосувати'"
                  :disabled="true"
              />
            </div>
          </div>

        </div>

        <div class="payment-block__price-summary">
          <div class="price-summary">

            <div class="payment-block__title">
              Підсумок цін
            </div>

            <div class="price-summary__list">
              <div class="price-summary__item"
                  v-for="(item, index) in priceSummary"
                  :key="index"
              >
                <div class="price-summary__item-name price-summary__col">
                  {{ item.seviceName }}
                </div>
                <div class="price-summary__item-price price-summary__col">
                  {{ item.servicePrice }}
                </div>
              </div>

              <div class="price-summary__item price-summary__item--green">
                <div class="price-summary__item-name price-summary__col">
                  Знижка за промокодом
                </div>
                <div class="price-summary__item-price price-summary__col">
                  -5000.00 грн
                </div>
              </div>
            </div>

            <div class="price-summary__total">
              <div class="price-summary__total-txt">
                <div class="payment-block__title mb-0">
                  Всього:
                </div>
              </div>
              <div class="price-summary__price">
                <IconUAH/>
                17 900
              </div>
            </div>
          </div>
        </div>

        <div class="payment-block__confirm-btn">
          <MainButton
              :label="'Підтвердити бронювання'"
          />
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
import IconUAH from '../../../../../../../../src/assets/img/currencies.svg?skipsvgo'
import DefaultCheckbox from "@/components/UI/checkboxes/DefaultCheckbox/DefaultCheckbox.vue";
import InfoBlock from "@/components/UI/labels/InfoBlock/InfoBlock.vue";
import MainButton from "@/components/UI/buttons/MainButton/MainButton.vue";
import DefaultInput from "@/components/UI/inputs/DefaultInput/DefaultInput.vue";
import FormLabel from "../../../../../../UI/labels/FormLabel/FormLabel.vue";


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
    IconUAH,
    DefaultCheckbox,
    InfoBlock,
    MainButton,
    DefaultInput,
    FormLabel
  },
  props: {
    Booking: {
      type: Object,
      default: null,
    }
  },

  data () {
    return {
      checked: false,
      rules: [
        {
          name: 'media',
          content: '<b>Насолоджуйся тишею</b> — не вмикай музику та не галасуй.',
        },
        {
          name: 'neighborhood',
          content: ' <b> Поважай сусідів</b> — зберігай тишу протягом твого перебування на території локації.',
        },
        {
          name: 'road',
          content: '<b>Не перевищуйте швидкість</b> на локації та території села більш ніж 20 км/год.',
        },
        {
          name: 'nature',
          content: '<b>Бережи природу</b> — не залишай їжу та сміття на вулиці',
        },
        {
          name: 'forest',
          content: '<b>Шануй ліс</b> — не ламай дерева і не пали дрова з лісу, їх ти завжди можеш привезти з собою чи придбати у мене.',
        },
        {
          name: 'not-burn',
          content: '<b>Не спалюй сміття в багатті.</b> Для нього у будинку є симпатичний блискучий бак.',
        },
        {
          name: 'animal',
          content: ' <b>Слідкуй за своїми тваринами.</b> Я обожнюю пухнастиків, але ти несеш відповідальність за своїх чотирилапих друзів та шкоду, яку вони можуть завдати.',
        },
        {
          name: 'no-smoking',
          content: '<b>Не пали, будь ласка, в будинку.</b> Оселі мають пахнути свіжістю та лісом, а щоб вивести запах цигарок мені доведеться списати з твоєї картки додаткові 2000 грн.',
        },
        {
          name: 'cleaning',
          content: '<b>Залишай чистоту</b>',
        },
      ],

      priceSummary: [
        {
          seviceName: 'Будинок №1',
          servicePrice: '4 600.00 грн'
        },
        {
          seviceName: 'Будинок №2',
          servicePrice: '4 600.00 грн'
        },
        {
          seviceName: 'Підготовка будинку',
          servicePrice: '1000.00 грн'
        },
        {
          seviceName: 'Додаткові сервіси',
          servicePrice: '2 500.00 грн'
        },
        {
          seviceName: 'Туристичний збір',
          servicePrice: '35.50 грн'
        },
        {
          seviceName: 'ПДВ (входить у вартість)',
          servicePrice: '153.50 грн'
        },
      ],
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
    background: $black;
    color: $white;
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
    margin-bottom: 16px;
    border-radius: 8px;
    border: 1px solid $border-grey;
    padding: 16px;
  }
  &__rules {
    display: flex;
    flex-direction: column;
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
  &__rules-agree-block {
    margin-bottom: 48px;
  }
  &__checkbox{
    padding-left: 16px;
    padding-right: 16px;
  }
  ul {
    padding-left: 22px;
  }
  &__promo{
    margin-bottom: 24px;
  }
  &__price-summary {
    margin-bottom: 24px;
  }
  &__confirm-btn{
    width: fit-content;
    margin-left: auto;
  }
}


.please-login {

  &__inner {
    padding: 12px 12px 12px 16px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-radius: 8px;
    background: $grey-hover;
  }

  &__info {
    margin-right: 12px;

    :deep(.info-block__txt){
      font-size: 16px;
    }
  }

  &__btn {

  }
}

.promo-field {

  &__inner {
    position: relative;
  }

  &__btn {
    position: absolute;
    top: 4px;
    right: 4px;
    width: 143px;
  }
}

.price-summary {
  border-radius: 8px;
  border: 1px solid $border-grey;
  padding: 16px;

  &__list {
    padding-bottom: 8px;
    position: relative;
    border-bottom: 1px solid $border-grey;
    margin-bottom: 16px;
  }
  &__item {
    display: grid;
    grid-template-columns: 1fr auto;
    margin-bottom: 8px;

    &--green > div {
      color: $green;
    }
  }
  &__col {
    color: $text-grey;
    font-size: 16px;
  }
  &__item-name {
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }
  &__item-price {
    display: grid;
    justify-items: end;
  }
  &__total {
    display: flex;
    justify-content: space-between;
  }
  &__total-txt {

  }
  &__price {
    font-size: 24px;
    font-weight: 600;
    display: flex;

    svg{
      width: 24px;
      height: 24px;
      margin-right: 4px;
    }
  }
}




</style>