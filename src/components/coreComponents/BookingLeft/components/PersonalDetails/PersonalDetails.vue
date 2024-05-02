<template>
  <div class="personal-details">

    <div class="personal-details__inner">
      <div class="personal-details__title">
        Особиста інформація
      </div>

      <template v-if="!isLogged">
        <div class="personal-details__info">
          <InfoBlock
              :text="'Ти поки не ввів жодної особистої інформації. Як тільки ти введеш її на цьому етапі, вони з’являться тут.'"
              :type="'warning'"
          />
        </div>
      </template>

      <template v-else>
       <div class="personal-details__content">
        <div class="personal-details__row">
          <div class="personal-details__col-name">
            <div class="personal-details__col-ico">
              <IconUser/>
            </div>
            <span>Ім’я та прізвище:</span>
          </div>
          <div class="personal-details__col-detail">
            Мариніч Марія
          </div>
        </div>
        <div class="personal-details__row">
          <div class="personal-details__col-name">
            <div class="personal-details__col-ico">
              <IconCalendar/>
            </div>
            <span>Дата народження:</span>
          </div>
          <div class="personal-details__col-detail">
            13.01.2002
          </div>
        </div>
        <div class="personal-details__row">
          <div class="personal-details__col-name">
            <div class="personal-details__col-ico">
              <IconGender/>
            </div>
            <span>Стать:</span>
          </div>
          <div class="personal-details__col-detail">
            Жіноча
          </div>
        </div>
        <div class="personal-details__row">
          <div class="personal-details__col-name">
            <div class="personal-details__col-ico">
              <IconMap/>
            </div>
            <span>Місце проживання:</span>
          </div>
          <div class="personal-details__col-detail">
            Київ, Україна
          </div>
        </div>
        <div class="personal-details__row">
          <div class="personal-details__col-name">
            <div class="personal-details__col-ico">
              <IconPhone/>
            </div>
            <span>Телефон:</span>
          </div>
          <div class="personal-details__col-detail">
            +380 95 611 54 97
          </div>
        </div>
        <div class="personal-details__row">
          <div class="personal-details__col-name">
            <div class="personal-details__col-ico">
              <IconMail/>
            </div>
            <span>Email:</span>
          </div>
          <div class="personal-details__col-detail">
            mmarinich13@gmail.com
          </div>
        </div>
        
       </div>
      </template>

    </div>
  </div>

</template>

<script>
import InfoBlock from "../../../../UI/labels/InfoBlock/InfoBlock.vue";
import UserIco from '../../../../../assets/img/user.svg?skipsvgo'

import IconUser from '@/assets/img/user.svg?skipsvgo'
import IconCalendar from '@/assets/img/icons/icon-calendar-16px-grey.svg?skipsvgo'
import IconGender from '@/assets/img/icons/icon-gender.svg?skipsvgo'
import IconMap from "@/assets/img/icons/icon-map-16px-grey.svg?skipsvgo";
import IconPhone from "@/assets/img/icons/icon-phone.svg?skipsvgo";
import IconMail from "@/assets/img/icons/icon-mail.svg?skipsvgo";

export default {
  name: "PersonalDetails",

  components: {
    InfoBlock,
    UserIco,

    IconUser,
    IconCalendar,
    IconGender,
    IconMap,
    IconPhone,
    IconMail,
  },

  computed: {

  },

  data() {
    return {
      isLogged: false
    }
  },

  methods: {

  }

}
</script>

<style scoped lang="scss">
@import "../../../../../scss/colors";

.personal-details {
  border: 1px solid $border-grey;
  border-radius: 8px;

  &__inner {
    padding: 16px;
  }

  &__title {
    font-size: 20px;
    font-weight: 700;
    line-height: 24px;
    margin-bottom: 16px;
  }

  &__info {

    &:deep(.info-block__txt){
      font-size: 14px;
    }
  }


  .personal-details__content {
    display: flex; 
    flex-direction: column;
    gap: 16px;
  }

  .personal-details__row {
    display: flex;
    gap: 8px;
  }

  .personal-details__col-name {
    font-size: 12px;
    color: $text-grey;
    display: flex;

    span {
      padding-top: 2px;
    }
  }

  .personal-details__col-ico {
    min-width: 16px;
    width: 16px;
    height: 16px;
    margin-right: 4px;
    
    
    svg {
      width: 16px;
      height: 16px;
    }

    &::deep(svg path) {
      stroke: $text-grey;
    }
  } 

  .personal-details__col-detail {
    font-size: 14px;
  }

}


</style>