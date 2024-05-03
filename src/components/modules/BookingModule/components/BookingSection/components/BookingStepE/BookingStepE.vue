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
            :centerBox="true"
            :error="Booking.validation.agreeWithRules"
            :errorTxt="Booking.validationTranslate.agreeWithRules"
            v-model="Booking.data.agreeWithRules"
        />
      </div>

      <div class="payment-block__title">
        <div class="payment-block__title-num">
          2
        </div>
        Оплата
      </div>

      <div class="payment-block__section payment-block__section--after-pay">
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

        <div class="please-login" v-if="!Booking.data.isAuth">
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


        <div class="payment-block__promo" v-if="Booking.data.isAuth">
          <FormLabel
              class="mt-4 mb-1"
              :label="'Вкажи кодове слово для сертифікату'"
          />

          <InfoBlock
              v-if="pomocodeConfirm"
              :text="'Подарунковий сертифікат на 10 000 грн. Буде застосовано на екрані оплати.'"
              :type="'success'"
          />

          <div class="promo-field" v-else>
            <div class="promo-field__inner">
              <DefaultInput
                  :label="''"
                  :placeholder="'Ввести'"
                  v-model="pomocode"
              />
              <MainButton
                  class="promo-field__btn h-40"
                  :label="'Застосувати'"
                  :disabled="pomocode.length === 0"
                  @click="pomocodeConfirm = true"
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

              <div class="price-summary__item price-summary__item--green"
                   v-if="pomocodeConfirm"
              >
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
                <div>
                  <IconUAH/>
                  17 900
                </div>
              </div>
            </div>
          </div>

          <div class="price-summary price-summary--green mt-4 mb-4" v-if="Booking.data.isAuth">
            <div class="price-summary__total">
              <div class="price-summary__total-txt">
                <div class="payment-block__title mb-0">
                  Буде нараховано бонусів:
                </div>
                <FormLabel
                    class="mt-2"
                    :label="'Всього бонусів:'"
                />
              </div>
              <div class="price-summary__price">
                <div>
                  <IconUAH/>
                  179
                </div>
                <div>
                  <IconUAH class="small-currency"/>
                  <FormLabel
                      class="mt-1"
                      :label="'255'"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="payment-block__confirm-btn">
          <MainButton
              :label="'Підтвердити бронювання'"
              @click="$emit('confirmBooking')"
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

  emits: ['confirmBooking'],

  props: {
    Booking: {
      type: Object,
      default: null,
    }
  },

  data () {
    return {
      checked: false,
      pomocode: '',
      pomocodeConfirm: '',
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







</style>