<template>
  <div class="login-module">

    <login 
      v-if="loginShow"
      @confirm="loginShow = false"
    />
    <NumberConfirm v-if="!loginShow"/>

    <div class="login-module__bg">
      <img 
         src="../../../assets/img/login/forest-image.png" 
         alt="forest-bg"
      />
    </div>
  </div>
</template>

<script>
import Login from "@/components/modules/LoginModule/components/Login/Login.vue";
import NumberConfirm from "@/components/modules/LoginModule/components/ConfirmNumber/ConfirmNumber.vue";

export default {
  name: "LoginModule",
  components: {
    Login,
    NumberConfirm
  },

  data() {
    return {
      loginShow: true,
    }
  },
}
</script>

<style scoped lang="scss">
@import "../../../scss/mixins/mixins";
@import "../../../scss/colors";

.login-module {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  min-height: calc(100vh - 101px);

  @include for-1120{
    min-height: calc(100vh - 56px);
  }

  &__bg{
    width: 100%;
    padding-bottom: 16px;

    @include for-992 {
      margin-top: initial;
      height: 150px;
      overflow: hidden;
      display: flex;
      justify-content: flex-end;
    }

    @include for-550 {
      height: 100px;
    }

    @include for-420 {
      height: 72px;
    }

    img {
      width: 100%;

      @include for-992{
        width: auto;
        height: 100%;
        object-fit: contain;
      }
    }
  }
}

</style>