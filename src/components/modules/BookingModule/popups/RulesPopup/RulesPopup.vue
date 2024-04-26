<template>
  <Modal
      @close="$emit('closeRulesPopup')"
      class="custom-popup rules-popup"
  >
    <template v-slot:header>
      <div class="rules-popup__title">
        Правила УЛІС
      </div>
    </template>
    <template v-slot:body>
      <div class="custom-popup__content">
        <div class="rules-popup__rules">

          <div class="rules-popup__rule"
                v-for="(item, index) in rules"
                :key="index"
          >
            <div class="rules-popup__rule-icon">
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
            <div class="rules-popup__rule-txt"
                  v-html="item.content">
            </div>
          </div>
        </div>

        <div class="rules-popup__forest-img">
          <img src="../../../../../assets/img/forest-artboard.png" alt="rules">
        </div>
      </div>
    </template>
    <template v-slot:footer>
      <div class="custom-popup__btns">
        <div class="custom-popup__btns-item">
          <MainButton
              :label="'Назад'"
              :secondary="true"
              :ico="'arrow'"
              :icoPosition="'left'"
              @click="$emit('closeRulesPopup')"
          />
        </div>
        <div class="custom-popup__btns-item rules-popup__confirm-btn">
          <MainButton
              :label="'Мені підходить'"
              @click="$emit('confirm')"
          />
        </div>
      </div>
    </template>
  </Modal>
</template>

<script>
import Modal from "@/components/coreComponents/Modal/Modal.vue";
import MainButton from "@/components/UI/buttons/MainButton/MainButton.vue";

import IconMedia from '../../../../../../src/assets/img/rules/media.svg?skipsvgo'
import IconNeighborhood from '../../../../../../src/assets/img/rules/neighborhood.svg?skipsvgo'
import IconRoad from '../../../../../../src/assets/img/rules/road.svg?skipsvgo'
import IconNature from '../../../../../../src/assets/img/rules/nature.svg?skipsvgo'
import IconForest from '../../../../../../src/assets/img/rules/forest.svg?skipsvgo'
import IconNotBurn from '../../../../../../src/assets/img/rules/not-burn.svg?skipsvgo'
import IconAnimal from '../../../../../../src/assets/img/rules/animal.svg?skipsvgo'
import IconNoSmoking from '../../../../../../src/assets/img/rules/no-smoking.svg?skipsvgo'
import IconCleaning from '../../../../../../src/assets/img/rules/cleaning.svg?skipsvgo'

export default {
  name: "RulesPopup",
  components: {
    MainButton,
    Modal,

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
  
  },

  data() {
    return {
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

    }
  }

}
</script>

<style scoped lang="scss">
@import "../../../../../scss/mixins/mixins";

.custom-popup {

  &__content {
    text-align: start;
  }

  &__btns {
    display: flex;
    gap: 2px;
    justify-content: space-between;
  }

  &__btns-item {
    width: 100%;
    max-width: 215px;

    @include for-550 {
      .main-button {
        padding-left: 0;
        padding-right: 0;
      }
    }
  }

}

.rules-popup {


  &__title{
    font-size: 20px;
    font-weight: 600;
    margin-bottom: 16px;
    text-align: center;
  }

  &__rules {
    display: flex;
    flex-direction: column;
    margin-bottom: 8px;
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

  &__forest-img{
    margin-bottom: 24px;

    @include for-550 {
      min-height: 86px;
      width: calc(100% + 32px);
      transform: translateX(-16px);
      overflow: hidden;
      display: flex;
      justify-content: flex-end;
      margin-bottom: 32px;
    }

    img{ 
      width: 100%;

      @include for-550 {
        width: auto;
        height: 100%;
        object-fit: contain;
      }
    }
  }

  &__confirm-btn {
    @include for-550 {
      min-width: 162px
    }
  }

  :deep(.modal-component__wrapper) {
    max-width: 686px;

    @include for-550 {
      padding: 0;
      margin-left: 0;
      margin-right: 0;
    }
  }
  :deep(.modal-component__inner) {

    @include for-550 {
      border-radius: 0;
    }
  }
  :deep(.modal-component__content) {
    padding: 32px 16px 16px;

    @include for-550 {
      padding: 24px 16px 32px 16px;
    }
  }
}

</style>