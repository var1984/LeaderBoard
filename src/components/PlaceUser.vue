<template>
  <div>
    <div class="wrap_place">
      <img :src="require('@/assets/img/Arrow.svg')" alt="" />
      <p><span>2</span> places</p>
    </div>
  </div>
</template>
<script>
export default {
  name: "PlaceUser",
};
</script>
<style lang="scss" scoped>
.wrap_place {
  display: inline-flex;
  p {
    font-size: 15px;
    line-height: 22px;
  }
}
</style>