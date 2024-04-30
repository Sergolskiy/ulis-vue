<template>
  <div class="social-media-btn"
      :class="type"
  >
  
  </div>
</template>

<script>

export default {
  name: "SocialMediaBtn", 
  props: {
    type: String,
    default: null,
  },
}
</script>

<style scoped lang="scss">
  @import "../../../../scss/mixins/mixins";
  @import "../../../../scss/colors";

  .social-media-btn {
    width: 97px;
    height: 97px;
    background-repeat: no-repeat;
    background-position: center;
    background-size: 100%, 100%;
    cursor: pointer;

    &:hover {
      background-size: 0%, 100%;
    }

    &.diia {
      background-image: url("../../../../assets/img/social-media/logo-diia.png"), url("../../../../assets/img/social-media/logo-diia-hover.png");

    }

    &.fb {
      background-image: url("../../../../assets/img/social-media/logo-fb.png"), url("../../../../assets/img/social-media/logo-fb-hover.png");

    }

    &.google {
      background-image: url("../../../../assets/img/social-media/logo-google.png"), url("../../../../assets/img/social-media/logo-google-hover.png");
    }

    &.apple {
      background-image: url("../../../../assets/img/social-media/logo-apple.png"),  url("../../../../assets/img/social-media/logo-apple-hover.png");
    }

    @include for-992 {
      width: 60px;
      height: 60px;
    }

  }

</style>