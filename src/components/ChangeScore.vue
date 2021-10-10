<template>
  <div class="wrap">
    <button @click="editScore">
      <img :src="require('@/assets/img/pencil.svg')" alt="" />
    </button>
  </div>
</template>
<script>
export default {
  name: "ChangeScore",
  methods: {
    editScore() {
      this.$emit("editScore", this.editScore);
    },
  },
};
</script>
<style lang="scss" scoped>
.wrap {
  position: relative;
}
button {
  border: none;
  background: none;
  cursor: pointer;
}
</style>