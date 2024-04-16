<template>
  <div class="custom-select">
    <FormLabel
        v-if="label"
        class="default-select__label"
        :label="label"
        :type="required"
    />
    <div class="custom-select__inner">
      <div class="custom-select__item"
           @click="toggleSelect"
      >

        <div class="custom-select__inner-ico" v-if="innerIcon" :class="innerIcon"></div>

        <div class="custom-select__selected" v-if="getLabel !== ''">
          {{getLabel}}
        </div>

        <div class="custom-select__placeholder" v-else>
          {{placeholder}}
        </div>


        <div class="custom-select__arrow" :class="{'custom-select__arrow--open' : openSelect}">
          <ArrowSelect/>
        </div>
      </div>

      <div class="custom-select__option" v-if="openSelect" :class="{'custom-select__option--children' : typeSelect === 'children'}">
        <div class="custom-select__option-inner">
          <div class="custom-select__option-top" :class="{'custom-select__option-top--children' : typeSelect === 'children'}">
            <div class="custom-select__option-top-left">
              Діти
            </div>
            <div class="custom-select__option-top-right">
              <CounterInput
                  :value="options[0].count"
                  :minValue="0"
                  @update:updateCounter="(item) => {$emit('updateCounter', item)}"
              />
            </div>
          </div>
          <div class="custom-select__option-item" v-if="options[0].count > 0">
            <div class="custom-select__option-item-left">
              Вік:
            </div>
            <div class="custom-select__option-item-right">
              <div class="custom-select__option-select"
                   v-for="(item, index) in getSelections"
                   :key="index"
              >
                <DefaultSelect
                    class="small-select"
                    :options="item.options"
                    :customValue="'true'"
                    :optionsLabel="'years'"
                    :innerSelect="true"
                    :selected="item.selected"
                    @update:modelValue="(changed) => {item.selected = changed}"
                />
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import FormLabel from "@/components/UI/labels/FormLabel/FormLabel.vue";
import ArrowSelect from "@/assets/img/arrow.svg";
import DefaultSelect from "@/components/UI/selections/DefaultSelect/DefaultSelect.vue";
import CounterInput from "@/components/UI/inputs/CounterInput/CounterInput.vue";

export default {
  name: "CustomSelect",
  components: {CounterInput, DefaultSelect, ArrowSelect, FormLabel},

  props: {
    options: {
      type: Array,
      default: [],
    },

    required: {
      type: String,
      default: '',
    },

    label: {
      type: String,
      default: '',
    },

    selected: {
      type: [Object, String],
      default: null,
    },

    disabled: {
      type: Boolean,
      default: false,
    },

    innerIcon: {
      type: [String, Boolean],
      default: false,
    },

    placeholder: {
      type: String,
      default: false,
    },

    optionsLabel: {
      type: String,
      default: '',
    },

    typeSelect: {
      type: String,
      default: '',
    },

  },

  computed: {
    getLabel() {
      if(this.selected && this.selected[this.optionsLabel]) {
        return this.selected[this.optionsLabel]
      }
      return ''
    },

    getSelections() {

      if(this.options.length > 0 && this.options[0]?.selections) {
        console.log(this.options[0].selections);
        return this.options[0].selections
      }

      return []
    }
  },

  data() {
    return {
      openSelect: false,
    }
  },

  mounted() {
    document.addEventListener('click', event => {
      if(!event.target.closest('.custom-select') && this.openSelect) {
        this.toggleSelect()
      }
    })
  },

  methods: {
    toggleSelect() {
      this.openSelect = !this.openSelect
    },
  },

}
</script>

<style scoped lang="scss">
@import "../../../../scss/colors";
@import "../../../../scss/mixins/mixins";

.custom-select {
  position: relative;

  &__label {

  }

  &__item {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 46px;
    border-radius: 8px;
    border: 1px solid $border-grey;
    min-height: 48px;
    box-sizing: border-box;
    padding-left: 44px;
    padding-right: 16px;
    cursor: pointer;
  }

  &__inner {
    position: relative;
  }

  &__selected {

  }

  &__placeholder {
    padding-top: 2px;
  }

  &__arrow {
    transition: 0.3s;

    &--open {
      transform: rotate(180deg);
    }
  }

  &__option {
    position: absolute;
    top: 52px;
    left: 0;
    box-shadow: 0 0 32px 0 rgba(0, 0, 0, 0.16);
    width: 100%;
    min-width: 375px;
    background: $white;
    border-radius: 8px;
    z-index: 100;

    @include for-768 {
      min-width: 100%;
    }
  }

  &__option-inner {

  }

  &__option-top {
    height: 48px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-right: 12px;
    border-bottom: 1px solid $border-grey;
  }

  &__option-top-left {
    padding-left: 44px;

    @include for-768 {
      padding-left: 16px;
    }
  }

  &__option-top-right {

  }

  &__option-item {
    display: flex;
    justify-content: space-between;
    padding-top: 6px;
    padding-right: 12px;
    padding-bottom: 6px;
  }

  &__option-item-left {
    padding-left: 44px;
    padding-top: 8px;

    @include for-768 {
      padding-left: 16px;
    }
  }

  &__option-item-right {
    display: flex;
    justify-content: flex-end;
    flex-wrap: wrap;
    gap: 8px;
    max-width: 230px;
  }

  &__option-select {

  }

  &__inner-ico {
    position: absolute;
    width: 24px;
    height: 24px;
    top: 12px;
    left: 12px;

    &.location {
      background: url("../../../../assets/img/map.svg") center center no-repeat;
    }

    &.people {
      background: url("../../../../assets/img/people.svg") center center no-repeat;
    }
  }
  
}


</style>