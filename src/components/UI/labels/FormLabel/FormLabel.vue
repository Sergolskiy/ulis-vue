<template>
  <div class="form-label"
       :class="{
          'form-label--info': type === 'info',
          'form-label--black': type === 'black',
       }"
  >
    <div v-if="label && labelIcon" class="form-label__icon"
         :class="{
            [labelIcon]: labelIcon,
            'big-ico': bigIco,
          }"
    ></div>
    <div class="form-label__txt"
         :class="{
            'form-label__txt--icon': labelIcon,
          }">
      {{label}}
    </div>
  </div>

</template>

<script>
export default {
  name: "FormLabel",

  props: {
    label: {
      type: String,
      default: '',
    },
    type: {
      type: String,
      default: null,
    },
    labelIcon: {
      type: [String, Boolean],
      default: false,
    },
    bigIco: {
      type: Boolean,
      default: false,
    },
  },

}
</script>

<style scoped lang="scss">
@import "src/scss/colors";

.form-label {
  position: relative;
  display: flex;

  &--info {
    .form-label__txt {
      font-size: 14px;
      font-style: normal;
      font-weight: 500;
      line-height: normal;
      // color: $middle-grey;
    }
  }

  &--black {
    .form-label__txt {
      font-size: 14px;
      font-style: normal;
      font-weight: 500;
      line-height: normal;
      color: $black;
    }
  }

  &__txt {
    font-size: 12px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;

    &--icon {
      margin-left: 20px;
    }
  }

  &__icon {
    width: 16px;
    height: 16px;
    position: absolute;
    top: 0;
    left: 0;

    &.name-icon {
      background: url("../../../../assets/img/common/label-ico/fname.svg") center center no-repeat;
    }
    &.lname-icon {
      background: url("../../../../assets/img/common/label-ico/lname.svg") center center no-repeat;
    }
    &.email-icon {
      background: url("../../../../assets/img/common/label-ico/email.svg") center center no-repeat;
    }
    &.email-big-icon {
      background: url("../../../../assets/img/common/label-ico/email-big.svg") center center no-repeat;
    }
    &.phone-icon {
      background: url("../../../../assets/img/common/label-ico/phone.svg") center center no-repeat;
    }
    &.pass-icon {
      background: url("../../../../assets/img/common/label-ico/lock.svg") center center no-repeat;
    }
    &.customer-icon {
      background: url("../../../../assets/img/common/label-ico/customer.svg") center center no-repeat;
    }
    &.address-icon {
      background: url("../../../../assets/img/common/label-ico/address.svg") center center no-repeat;
    }
    &.city-icon {
      background: url("../../../../assets/img/common/label-ico/city.svg") center center no-repeat;
    }
    &.country-icon {
      background: url("../../../../assets/img/common/label-ico/country.svg") center center no-repeat;
    }
    &.state-icon {
      background: url("../../../../assets/img/common/label-ico/state.svg") center center no-repeat;
    }
    &.zip-icon {
      background: url("../../../../assets/img/common/label-ico/zip.svg") center center no-repeat;
    }
    &.discount-icon {
      background: url("../../../../assets/img/common/label-ico/discount.svg") center center no-repeat;
    }
    &.payments-icon {
      background: url("../../../../assets/img/common/label-ico/payments.svg") center center no-repeat;
    }
    &.checklist-icon {
      background: url("../../../../assets/img/common/label-ico/checklist.svg") center center no-repeat;
    }
    &.sales-icon {
      background: url("../../../../assets/img/common/label-ico/sales.svg") center center no-repeat;
    }
    &.roles-icon {
      background: url("../../../../assets/img/common/label-ico/roles.svg") center center no-repeat;
    }
    &.customer-2-icon {
      background: url("../../../../assets/img/common/label-ico/customer-2.svg") center center no-repeat;
    }
    &.status-icon {
      background: url("../../../../assets/img/common/label-ico/status.svg") center center no-repeat;
    }
    &.company-icon {
      background: url("../../../../assets/img/common/label-ico/company.svg") center center no-repeat;
    }
    &.star-icon {
      background: url("../../../../assets/img/common/label-ico/star.svg") center center no-repeat;
    }
    &.calendar-icon {
      background: url("../../../../assets/img/common/label-ico/calendar.svg") center center no-repeat;
    }
    &.dollar-icon {
      background: url("../../../../assets/img/common/label-ico/dollar.svg") center center no-repeat;
      background-size: 7px;
      top: 1px;
    }
    &.id-icon {
      background: url("../../../../assets/img/common/label-ico/id-ico.svg") center center no-repeat;
    }
    &.company-big-icon {
      background: url("../../../../assets/img/common/label-ico/company-big.svg") center center no-repeat;
    }
    &.type-icon {
      background: url("../../../../assets/img/common/label-ico/type.svg") center center no-repeat;
    }
    &.group-icon {
      background: url("../../../../assets/img/common/label-ico/group.svg") center center no-repeat;
    }
    &.list-icon {
      background: url("../../../../assets/img/common/label-ico/list.svg") center center no-repeat;
    }
    &.count-icon {
      background: url("../../../../assets/img/common/label-ico/count.svg") center center no-repeat;
    }
    &.inventory-icon {
      background: url("../../../../assets/img/common/label-ico/inventory.svg") center center no-repeat;
    }
    &.retail-price-icon {
      background: url("../../../../assets/img/common/label-ico/retail-price.svg") center center no-repeat;
    }
    &.controller-icon {
      background: url("../../../../assets/img/common/label-ico/controller.svg") center center no-repeat;
    }
    &.profit-icon {
      background: url("../../../../assets/img/common/label-ico/profit.svg") center center no-repeat;
    }
    &.structure-icon {
      background: url("../../../../assets/img/common/label-ico/structure.svg") center center no-repeat;
    }
    &.crown-icon {
      background: url("../../../../assets/img/common/label-ico/crown.svg") center center no-repeat;
    }
    &.refresh-mirr-icon {
      background: url("../../../../assets/img/common/refresh-mirrored.svg") center center no-repeat;
    }
    &.dimensions-icon {
      background: url("../../../../assets/img/common/label-ico/dimensions.svg") center center no-repeat;
    }
    &.box-icon {
      background: url("../../../../assets/img/common/label-ico/box.svg") center center no-repeat;
    }
    &.box2-icon {
      background: url("../../../../assets/img/common/label-ico/box2.svg") center center no-repeat;
    }
    &.box3-icon {
      background: url("../../../../assets/img/common/label-ico/box3.svg") center center no-repeat;
    }
    &.delivery-icon {
      background: url("../../../../assets/img/common/label-ico/truck.svg") center center no-repeat;
    }
    &.warehouse-icon {
      background: url("../../../../assets/img/common/label-ico/warehouse.svg") center center no-repeat;
    }
    &.barcode-icon {
      background: url("../../../../assets/img/common/label-ico/barcode.svg") center center no-repeat;
    }
    &.product-cost-icon {
      background: url("../../../../assets/img/common/label-ico/product-cost.svg") center center no-repeat;
    }
    &.shipping-cost-icon {
      background: url("../../../../assets/img/common/label-ico/shipping-cost.svg") center center no-repeat;
    }
    &.tax-icon {
      background: url("../../../../assets/img/common/label-ico/tax.svg") center center no-repeat;
    }
    &.link-icon {
      background: url("../../../../assets/img/common/label-ico/link.svg") center center no-repeat;
    }
    &.calendar2-icon {
      background: url("../../../../assets/img/common/label-ico/calendar2.svg") center center no-repeat;
    }
    &.payment-icon {
      background: url("../../../../assets/img/common/label-ico/payment.svg") center center no-repeat;
    }
    &.transaction-icon {
      background: url("../../../../assets/img/common/label-ico/transaction.svg") center center no-repeat;
    }
    &.circle-dollar-icon {
      background: url("../../../../assets/img/common/label-ico/circle-dollar.svg") center center no-repeat;
    }
    &.pay-icon {
      background: url("../../../../assets/img/common/label-ico/pay.svg") center center no-repeat;
    }
    &.signature-icon {
      background: url("../../../../assets/img/common/label-ico/signature.svg") center center no-repeat;
      background-size: contain;
    }
    &.product-icon {
      background: url("../../../../assets/img/common/label-ico/product.svg") center center no-repeat;
    }


    &.big-ico {
      width: 20px;
      height: 20px;

      & + .form-label__txt--icon {
        margin-left: 25px;
      }
    }
  }
}

</style>