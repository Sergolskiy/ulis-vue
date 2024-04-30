<template>

    <router-link to="#" class="link-btn" :class="type" v-if="type=== 'link'">
        <div class="link-btn__inner">
            <span class="link-btn__ico">
                <Backet v-if="type === 'delete'"/>
                <Pan v-else-if="type === 'edit'"/>
                <ArrowRotateTopBlue v-else-if="type === 'link'"/>
            </span>
            <span class="link-btn__txt">{{ label }}</span>
        </div>
    </router-link>

    <button class="link-btn" :class="type" v-else>
        <span class="link-btn__inner">
            <span class="link-btn__ico">
                <Backet v-if="type === 'delete'"/>
                <Pan v-else-if="type === 'edit'"/>
                <ArrowRotateTopBlue v-else-if="type === 'link'"/>
            </span>
            <span class="link-btn__txt">{{ label }}</span>
        </span>
    </button>

</template>

<script>
import Backet from '@/assets/img/common/basket.svg';
import Pan from '@/assets/img/common/pan.svg';
import ArrowRotateTopBlue from '@/assets/img/common/arrow-rotate-top--blue.svg';

export default {
    name: "LinkBtn",
    components: {
        Backet,
        Pan,
        ArrowRotateTopBlue,
    },
    props: {
        type: {
            type: String,
            required: true,
        },
        label: {
            type: String,
            required: true,
        },
    }
}
</script>

<style scoped lang="scss">
@import "src/scss/main";

.link-btn {
  cursor: pointer;
  width: fit-content;
  background-color: transparent;
  padding: 0;

  &.delete,
  &.edit {
    outline: none;
    border: 0;

    &:hover {
      opacity: 0.8;
    }
  }

  &.link {
  }

  &.delete,
  &.edit,
  &.link {
    display: flex;
    width: fit-content;
    position: relative;
    z-index: 2;
    transition: .3s;

    &:after {
      opacity: 0;
      position: absolute;
      z-index: -1;
      content: '';
      top: 50%;
      left: 53%;
      transform: translate(-50%, -50%);
      border-radius: 40px;
      background-color: $blue-alice;
      width: 110%;
      height: 110%;
      transition: .3s;
    }

    &:hover {
      &:after {
        opacity: 1;
      }
    }
  }

  &.delete {
    &:after {
      background-color: rgba($pink-pale, 0.6);
    }
  }

  &__inner {
    display: flex;
    align-items: center;
    gap: 4px;
  }

  &__ico {
    @include widthHeightSquare(20px);
    @include flexCenter;
  }

  &__txt {
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    white-space: nowrap;

    color: $accent-blue;
  }

  &.delete &__txt {
    color: $warning-red-border;
  }

  &.delete &__ico svg path {
    fill: $warning-red-border;
    stroke: $warning-red-border;
  }

}
</style>