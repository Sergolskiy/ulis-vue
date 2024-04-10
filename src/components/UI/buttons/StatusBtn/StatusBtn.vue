<template>

  <div class="status-btn" :class="type">
    <div class="status-btn__inner">
            <span class="status-btn__ico">
                <ArrowDownPink v-if="type === 'new-order'"/>
                <StarGreenLight v-else-if="type === 'approved'"/>
                <HandStopGrey v-else-if="type === 'pre-order'"/>
                <CirclesBlueLight v-else-if="type === 'fulfilment'"/>
                <TickGreenLight v-else-if="type === 'delivered' || type === 'active'"/>
                <ArrowRotateTopPurple v-else-if="type === 'shipped'"/>
                <LineCycleRedLight v-else-if="type === 'return'"/>
                <Active v-else-if="type === 'active'"/>
                <CloseRedLight v-else-if="type === 'cansel' || type === 'inactive'"/>

                <StatusPartially v-else-if="type === 'status-partially'"/>
                <StatusUnpaid v-else-if="type === 'status-unpaid'"/>
                <StatusUnpaid class="grey-type" v-else-if="type === 'status-draft'"/>
                <StatusSuccess v-else-if="type === 'status-success'"/>
                <StatusCanceled v-else-if="type === 'status-canceled'"/>
            </span>
      <span class="status-btn__txt">{{ label }}</span>
    </div>
  </div>

</template>

<script>
import Active from '@/assets/img/common/status/active.svg';
import Cancel from '@/assets/img/common/status/cancel.svg';
import ArrowDownPink from '@/assets/img/common/status/arrow-down--pink.svg';
import ArrowRotateTopPurple from '@/assets/img/common/status/arrow-rotate-top--purple.svg';
import CirclesBlueLight from '@/assets/img/common/status/circles--blue-light.svg';
import CloseRedLight from '@/assets/img/common/status/close--red-light.svg';
import HandStopGrey from '@/assets/img/common/status/hand-stop--grey.svg';
import LineCycleRedLight from '@/assets/img/common/status/line-cycle--red-light.svg';
import StarGreenLight from '@/assets/img/common/status/star--green-light.svg';
import TickGreenLight from '@/assets/img/common/status/tick-green-light.svg';
import StatusPartially from '../../../../assets/img/common/status/status-partially.svg?skipsvgo'
import StatusUnpaid from '../../../../assets/img/common/status/status-unpaid.svg?skipsvgo'
import StatusSuccess from '../../../../assets/img/common/status/status-success.svg?skipsvgo'
import StatusCanceled from '../../../../assets/img/common/status/status-canceled.svg?skipsvgo'

export default {
  name: "StatusBtn",
  components: {
    Active,
    Cancel,
    ArrowDownPink,
    ArrowRotateTopPurple,
    CirclesBlueLight,
    CloseRedLight,
    HandStopGrey,
    LineCycleRedLight,
    StarGreenLight,
    TickGreenLight,
    StatusPartially,
    StatusUnpaid,
    StatusSuccess,
    StatusCanceled,
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

.status-btn {
  width: fit-content;

  &.new-order &__inner {
    background-color: $violet-pale;
  }

  &.active &__inner,
  &.approved &__inner {
    background-color: $mint;
  }

  &.pre-order &__inner {
    background-color: $platinum;
  }

  &.fulfilment &__inner {
    background-color: $blue-alice;
  }

  &.delivered &__inner {
    background-color: $cyan-light;
  }

  &.shipped &__inner {
    background-color: $purple-pale;
  }

  &.return &__inner {
    background-color: $seashell;
  }

  &.status-partially &__inner {
    background-color: #E4ECF9;
  }

  &.status-unpaid &__inner {
    background-color: #FAE3D6;
  }

  &.status-draft &__inner {
    background-color: #e0e0e0e0;
  }

  &.status-success &__inner {
    background-color: #D9F4EF;
  }

  &.status-canceled &__inner,
  &.cansel &__inner,
  &.inactive &__inner {
    background-color: $pink-pale;
  }

  &__inner {
    display: flex;
    align-items: center;
    padding: 4px 6px;
    gap: 4px;
    border-radius: 40px;
  }

  &__ico {
    @include widthHeightSquare(16px);
    @include flexCenter;
  }

  &__txt {
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    white-space: nowrap;

    color: $black;
  }
}

.grey-type :deep(circle){
  fill: #e2e3e4;
}
.grey-type :deep(path){
  fill: gray;
}
</style>