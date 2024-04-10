<template>
    <div class="action-btn">
        <Dots/>
    </div>
</template>

<script>
import Dots from '@/assets/img/common/dots--h.svg'

export default {
    name: "ActionBtn",
    components: {
        Dots
    }
}
</script>

<style scoped lang="scss">
@import "src/scss/main";

.action-btn {
  cursor: pointer;
  @include flexCenter;
  @include widthHeightSquare(44px);
  background-color: $darker-blue;
  border-radius: 12px;
	transition: .3s;

	&.hover,
	&:hover {
    background-color: rgba($middle-gre, 0.2);
	}
}

</style>