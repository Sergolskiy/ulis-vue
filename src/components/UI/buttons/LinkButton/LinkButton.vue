<template>
  <router-link v-if="link" :to="link"
               class="link-btn"
               :class="{'disabled': disabled}"
  >
    <div v-if="type" class="link-btn__icon">
      <DeleteIcon v-if="type === 'delete'"/>
      <EditIcon v-if="type === 'edit'"/>
      <ExportIcon v-if="type === 'export'"/>
      <CopyIcon v-if="type === 'copy'"/>
      <ArchiveIcon v-if="type === 'archive'"/>
      <ImportIcon v-if="type === 'import'"/>
      <StatusDraft v-if="type === 'status-draft'"/>
      <StatusPartially v-if="type === 'status-partially'"/>
      <StatusUnpaid v-if="type === 'status-unpaid'"/>
      <StatusSuccess v-if="type === 'status-success'"/>
      <StatusCanceled v-if="type === 'status-canceled'"/>
      <PaymentSquare v-if="type === 'payment-square'"/>
      <PaymentQuickBooks v-if="type === 'payment-quick-books'"/>
      <PaymentCash v-if="type === 'payment-cash'"/>
      <PaymentCheck v-if="type === 'payment-check'"/>
      <Pay v-if="type === 'pay'"/>
      <MailIco v-if="type === 'email'"/>
    </div>
    <div v-if="label" class="link-btn__label">{{label}}</div>
  </router-link>
  <div v-else
       class="link-btn"
       :class="{'disabled': disabled}"
  >
    <div v-if="type" class="link-btn__icon">
      <DeleteIcon v-if="type === 'delete'"/>
      <EditIcon v-if="type === 'edit'"/>
      <ExportIcon v-if="type === 'export'"/>
      <CopyIcon v-if="type === 'copy'"/>
      <ArchiveIcon v-if="type === 'archive'"/>
      <ImportIcon v-if="type === 'import'"/>
      <StatusDraft v-if="type === 'status-draft'"/>
      <StatusPartially v-if="type === 'status-partially'"/>
      <StatusUnpaid v-if="type === 'status-unpaid'"/>
      <StatusSuccess v-if="type === 'status-success'"/>
      <StatusCanceled v-if="type === 'status-canceled'"/>
      <PaymentSquare v-if="type === 'payment-square'"/>
      <PaymentQuickBooks v-if="type === 'payment-quick-books'"/>
      <PaymentCash v-if="type === 'payment-cash'"/>
      <PaymentCheck v-if="type === 'payment-check'"/>
      <Pay v-if="type === 'pay'"/>
      <MailIco v-if="type === 'email'"/>
    </div>
    <div v-if="label" class="link-btn__label">{{label}}</div>
  </div>
</template>

<script>
import DeleteIcon from '../../../../../src/assets/img/UI-group/delete-icon.svg?skipsvgo'
import EditIcon from '../../../../../src/assets/img/UI-group/edit-icon.svg?skipsvgo'
import ArrowRotateTopBlue from '../../../../../src/assets/img/common/arrow-rotate-top--blue.svg';
import ExportIcon from '../../../../../src/assets/img/common/download-ico.svg';
import CopyIcon from "../../../../assets/img/common/copy-clipboard.svg"
import ArchiveIcon from "../../../../assets/img/common/label-ico/box.svg"
import ImportIcon from '../../../../assets/img/common/import-ico.svg?skipsvgo'
import StatusPartially from '../../../../assets/img/common/status/status-partially.svg?skipsvgo'
import StatusUnpaid from '../../../../assets/img/common/status/status-unpaid.svg?skipsvgo'
import StatusDraft from '../../../../assets/img/common/status/status-draft.svg?skipsvgo'
import StatusSuccess from '../../../../assets/img/common/status/status-success.svg?skipsvgo'
import StatusCanceled from '../../../../assets/img/common/status/status-canceled.svg?skipsvgo'
import PaymentSquare from '../../../../assets/img/common/payments/payment-square.svg?skipsvgo'
import PaymentQuickBooks from '../../../../assets/img/common/payments/payment-quick-books.svg?skipsvgo'
import PaymentCash from '../../../../assets/img/common/payments/payment-cash.svg?skipsvgo'
import PaymentCheck from '../../../../assets/img/common/payments/payment-check.svg?skipsvgo'
import Pay from '../../../../assets/img/common/label-ico/pay.svg?skipsvgo'
import MailIco from '../../../../assets/img/common/label-ico/mail-ico.svg?skipsvgo'

export default {
  name: "LinkButton",
  components: {
    DeleteIcon,
    EditIcon,
    ArrowRotateTopBlue,
    ExportIcon,
    CopyIcon,
    ArchiveIcon,
    ImportIcon,
    StatusPartially,
    StatusDraft,
    StatusUnpaid,
    StatusSuccess,
    StatusCanceled,
    PaymentSquare,
    PaymentQuickBooks,
    PaymentCash,
    PaymentCheck,
    Pay,
    MailIco,
  },
  props: {
    link: {
      type: String,
      default: '',
    },
    type: {
      type: String,
      default: '',
    },
    label: {
      type: String,
      default: '',
    },
    disabled: {
      type: Boolean,
      default: false,
    }
  },
}
</script>

<style lang="scss">
  @import "src/scss/colors";
  @import "src/scss/mixins/mixins";

  .link-btn {
    cursor: pointer;
    display: flex;
    align-items: center;
    width: fit-content;

    &.email {
      .link-btn__icon {
        width: 16px;
      }
    }

    &.cursor-initial {
      cursor: initial;
    }

    &__icon {
      width: 20px;
      height: 20px;
      flex-shrink: 0;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    &__label {
      margin-left: 4px;
      font-size: 14px;
      font-weight: 500;
    }

    &.disabled{
      pointer-events: none;
      opacity: .5;
      transition: none!important;

      * {
        transition: none!important;
      }
    }

    &.big {
      .link-btn__label {
        font-size: 16px;
        font-weight: 800;
      }
    }

    &.blue {
      .link-btn__icon svg path {
        stroke: $accent-blue;
      }
      .link-btn__label {
        color: $accent-blue;
      }
    }

    &.red {
      .link-btn__icon svg path {
        stroke: $warning-red-border;
      }
      .link-btn__label {
        color: $warning-red-border;
      }
    }
  }
</style>