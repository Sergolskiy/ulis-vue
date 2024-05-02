<template>
  <div class="booking__inner">
    <div class="booking__main">
      <div class="booking__left">
        <BookingLeft
            :Booking="Booking"
            :type="'certificate'"
        />
      </div>

      <div class="booking__content">
        <div class="personal-info">
          <div class="personal-info__inner">
            <div class="personal-info__title">
              Введіть особисту інформацію
            </div>

            <InfoBlock
                class="mt-3 mb-3"
                text='Заповни всі поля, щоб я підготував та надіслав тобі електронний подарунковий сертифікат на відпочинок в УЛІС.'
                :type="'success'"
            />

            <div class="certificate-fields">
              <PersonalInfoFields
                  :Personal="Booking"
                  :withGender="false"
              />
            </div>


          </div>
        </div>

        <div class="certificate-payment">
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


            <div class="price-summary mt-4 mb-4">
              <div class="price-summary__total">
                <div class="price-summary__total-txt">
                  <div class="payment-block__title mb-0">
                    Всього:
                  </div>
                  <FormLabel
                      class="mt-2"
                      :label="'Ціна за сертифікат фіксована'"
                  />
                </div>
                <div class="price-summary__price">
                  <div>
                    <IconUAH/>
                    5 000
                  </div>
                </div>
              </div>
            </div>

            <div class="price-summary price-summary--green mt-4 mb-4">
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

            <div class="payment-block__confirm-btn">
              <MainButton
                  :label="'Підтвердити замовлення'"
                  @click="$emit('confirmBooking')"
              />
            </div>
          </div>
        </div>


        <div class="booking__buttons mb-5">

          <div class="booking__btn">
            <MainButton
                :label="'Назад'"
                :secondary="true"
                :ico="'arrow'"
                :icoPosition="'left'"
                @click="goToProfile"
            />
          </div>
          <div class="booking__btn">
            <MainButton
                :label="'Оплатити'"
                :icoPosition="'right'"
                :disabled="false"
            />
          </div>
        </div>

      </div>

    </div>


  </div>
</template>

<script>
import BookingLeft from "@/components/coreComponents/BookingLeft/BookingLeft.vue";
import {Booking} from "@/components/modules/BookingModule/models/Booking.js";
import PersonalInfoFields from "@/components/coreComponents/PersonalInfoFields/PersonalInfoFields.vue";
import MainButton from "@/components/UI/buttons/MainButton/MainButton.vue";
import DefaultInput from "@/components/UI/inputs/DefaultInput/DefaultInput.vue";
import InfoBlock from "@/components/UI/labels/InfoBlock/InfoBlock.vue";
import DefaultCheckbox from "@/components/UI/checkboxes/DefaultCheckbox/DefaultCheckbox.vue";
import FormLabel from "@/components/UI/labels/FormLabel/FormLabel.vue";
import IconUAH from "@/assets/img/currencies.svg?skipsvgo";

export default {
  name: "CertificateModule",
  components: {IconUAH, FormLabel, DefaultCheckbox, InfoBlock, DefaultInput, MainButton, PersonalInfoFields, BookingLeft},

  data() {
    return {
      Booking: new Booking(),

      checked: false,

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

  methods: {
    goToProfile() {
      const urlParams = new URLSearchParams(window.location.search);

      urlParams.set('page', 'profile');

      localStorage.setItem('logged', 'true')

      window.location.search = urlParams;
    },
  }

}
</script>

<style scoped lang="scss">
@import "../../../scss/colors";

.certificate-payment {
  margin-top: 50px;
}

.certificate-fields:deep(.info-block) {
  display: none;
}

.small-currency {
  width: 17px;
  margin-right: 0;
  &:deep(path) {
    stroke: $text-grey;
  }
}

</style>