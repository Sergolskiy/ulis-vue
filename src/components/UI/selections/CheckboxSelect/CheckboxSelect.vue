<template>
  <FormLabel
      v-if="label || labelIcon"
      class="mb-2"
      :type="'black'"
      :label="label"
      :labelIcon="labelIcon"
  />

  <div class="checkbox-select"
       :class="{
          'checkbox-select--active' : active,
          'disabled' : disabled === true,
          'ui-no-valid': error,
          ['checkbox-select_' +id] : id,
        }"
  >
    <div class="checkbox-select__input"
         @click="toggleActive(!active)"
    >
      <template v-for="(item, index) in selectedOptions">
        {{item[textLabel]}}<template v-if="index < selectedOptions.length - 1">, </template>
      </template>
      <div class="checkbox-select__arrow">
        <ArrowSelect/>
      </div>
    </div>
    <div class="checkbox-select__list">
      <DefaultCheckbox
          v-for="(item, index) in dataArray"
          :key="index"
          class="mb-3"
          :modelValue="item[dataLabel]"
          :label="item[textLabel]"
          @update:modelValue="(val) => updateDataArray(val, index)"
      />
    </div>
  </div>
</template>

<script>
import DefaultCheckbox from "../../checkboxes/DefaultCheckbox/DefaultCheckbox.vue";
import FormLabel from "../../labels/FormLabel/FormLabel.vue";
import ArrowSelect from '../../../../assets/img/UI-group/arrow-select.svg'
export default {
  name: "CheckboxSelect",
  components: {
    FormLabel,
    DefaultCheckbox,
    ArrowSelect
  },
  props: {
    dataArray: {
      type: Array,
      default: [],
    },
    error: {
      type: Boolean,
      default: false,
    },
    errorTxt: {
      type: String,
      default: '',
    },
    label: {
      type: String,
      default: '',
    },
    labelIcon: {
      type: [String, Boolean],
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    textLabel: {
      type: String,
      default: '',
    },
    dataLabel: {
      type: String,
      default: '',
    },
  },
  emits: [
    'updateDataArray'
  ],
  computed: {
    selectedOptions() {
      return this.dataArray.filter(item => {
        return item[this.dataLabel]
      })
    }
  },
  mounted() {
    document.addEventListener('click', this.outsideClickListener);
  },
  data() {
    return {
      active: false,
      id: this.$.uid
    }
  },
  methods: {
    toggleActive(val) {
      this.active = val
    },

    outsideClickListener(event) {
      let target = event.target;
      if (!target.classList.contains(`checkbox-select_${this.id}`) && !target.closest(`.checkbox-select_${this.id}`) && this.active) {
        this.active = false
      }
    },

    updateDataArray(val, index) {
      this.dataArray[index][this.dataLabel] = val;
      this.$emit('updateDataArray')
    }
  },
}
</script>

<style lang="scss">
@import "src/scss/colors";

  .checkbox-select {
    position: relative;

    &__input {
      border-radius: 12px;
      border: 1px solid #7BA4EC;
      background: #fff;
      font-size: 14px;
      line-height: 40px;
      width: 100%;
      padding-left: 16px;
      padding-right: 40px;
      height: 42px;
      box-sizing: border-box;
      transition: border-color 0.3s;
      cursor: pointer;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
      position: relative;
    }

    &__arrow {
      position: absolute;
      right: 0;
      top: 0;
      width: 42px;
      height: 42px;
      display: flex;
      align-items: center;
      justify-content: center;
      transform: rotate(180deg);
    }

    &__list {
      position: absolute;
      top: 44px;
      left: 0;
      width: 100%;
      background-color: $white;
      z-index: -10;
      padding: 24px 16px 10px;
      opacity: 0;
      visibility: hidden;
      transition: opacity 0.1s;
      overflow: auto;
      max-height: 250px;
      border: 1px solid $darker-blue;
      border-radius: 10px;
    }
    
    &.disabled {
      cursor: default;

      .checkbox-select__input {
        background: $darker-blue;
        color: $middle-grey;
        border-color: $middle-gre;
      }
    }

    &--active {
      .checkbox-select__list {
        opacity: 1;
        z-index: 5;
        visibility: visible;
      }

      .checkbox-select__arrow {
        transform: rotate(0);
      }
    }
  }
</style>