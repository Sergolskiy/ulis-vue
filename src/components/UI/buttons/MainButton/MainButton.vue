<template>
  <button class="main-button"
          :type="type"
          :class="{'main-button--tooltip' : tooltip == true,
            'disabled-btn' : disabled,
            'secondary' : secondary,
            'big' : big,
            'text-btn' : textBtn,
          }"
  >
    <div class="main-button__ico" v-if="ico">
        <slot name="ico">

        </slot>
    </div>
    {{label}}

<!--    <span-->
<!--        v-if="tooltip"-->
<!--        class="main-button__tooltip"-->
<!--    >-->
<!--      <v-popover-->
<!--          class="site-tooltip"-->
<!--          :disabled="!tooltipActive"-->
<!--          offset="5"-->
<!--          placement="top"-->
<!--          trigger="hover"-->

<!--      >-->
<!--        <TooltipBtn-->
<!--            class="tooltip-target"-->

<!--        />-->
<!--          <template slot="popover">-->
<!--            <slot name="tooltip">-->

<!--            </slot>-->
<!--&lt;!&ndash;            <a v-close-popover class="tooltip__close"></a>&ndash;&gt;-->
<!--          </template>-->
<!--      </v-popover>-->
<!--    </span>-->
  </button>
</template>

<script>
  // import { VPopover  } from 'v-tooltip'
  // import TooltipBtn from "../../tooltips/TooltipBtn/TooltipBtn.vue"


  export default {
    name: "MainButton",

    components: {
      // VPopover,
      // TooltipBtn
    },

    props: {
      tooltip: Boolean,
      ico: Boolean,
      disabled: {
        type: Boolean,
        default: false,
      },
      secondary: {
        type: Boolean,
        default: false,
      },
      big: {
        type: Boolean,
        default: false,
      },
      textBtn: {
        type: Boolean,
        default: false,
      },
      label: [String, Object, Number],
      type: {
        type: String,
        default: 'button'
      }
    },

    data () {
      return {
        id: null,
        isShowPass: false,
        tooltipActive: true,
      }
    },

    mounted () {

    },

    methods: {

    },
  }
</script>

<style lang="scss">
  @import "../../../../scss/mixins/mixins";
  @import "../../../../scss/colors";

  .main-button{
    display: flex;
    //height: 43px;
    //max-width: 149px;
    width: 100%;
    //width: fit-content;
    align-items: center;
    justify-content: center;
    background: $black;
    border-radius: 8px;
    font-weight: 400;
    font-size: 16px;
    //line-height: 21px;
    line-height: normal;
    color: $white;
    cursor: pointer;
    outline: 0;
    transition: 0.3s;
    padding: 14px 28px;
    border: 1px solid $black;
    position: relative;

    &.disabled-btn {
      background: $grey-hover !important;
      color: #BFC6CC;

      svg path {
        fill: #BFC6CC;
      }
    }

    &.no-bg {
      background: transparent !important;
    }

    &.filter-count {
      display: flex;
      align-items: center;

      .main-button__ico {
        order: 2;
        margin-left: 2px;
        margin-right: 0;
        color: $red;
      }
    }

    &.auto-with{
      max-width: initial;
    }

    &.w-100{
      width: 100%;
    }

    &.btn--big {
      height: 72px;
    }

    &.fsz-16{
      font-size: 16px;
      padding: 0 20px;
      height: 40px;
    }


    //&:hover{
    //  box-shadow: 0px 0 3px #00000052;
    //  background: $black-hover;
    //  border-color: $black-hover;
    //}

    &.sharp{
      border-radius: 0;
    }


    &.secondary{
      color: $black;
      border-color: $border-grey;
      background: $white;


      .main-button__ico svg path{
        transition: .3s;
      }
      &:hover{
        border-color: $border-grey-hover;
        background: $grey-hover;


        .main-button__ico svg path{

        }
      }


      &.disabled-btn {
        border-color: $border-grey-hover;
        color: #BFC6CC;
      }
    }

    &.text-btn {
      box-shadow: none;
      border: 0 ;
      font-size: 16px;
      font-style: normal;
      font-weight: 800;
      line-height: normal;
      color: $accent-blue;
      background: white;
      padding: 8px 13px;
    }

    &.big {
      padding-top: 25px;
      padding-bottom: 25px;
    }


    &__ico{
      /*width: 19px;*/
      /*height: 19px;*/
      max-width: 30px;
      margin-right: 5px;

      svg{
        width: 100%;
      }
    }

    &--tooltip{
      max-width: 100%;
      width: fit-content;
      min-width: auto!important;
      white-space: nowrap;
      padding: 0 24px;

      @include for-550{
        padding: 0 16px;
      }

      &:hover{
        svg circle {
          fill: #8F7A61;
        }
      }

      &:not(.secondary){
        .tooltip-btn__ico svg{
          rect,
          path{
            //fill: $accent;
          }

          circle{
            fill: white;
          }
        }
      }
    }

    &__tooltip{
      position: absolute;
      top: 2px;
      right: 2px;
    }
  }
</style>
