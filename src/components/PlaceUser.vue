<template>
  <div>
    <div class="wrap_place">
      <img
        :src="require('@/assets/img/ArrowUp.svg')"
        alt=""
        v-if="user.place - 1 > idx"
      />
      <img
        :src="require('@/assets/img/ArrowDown.svg')"
        alt=""
        v-else-if="this.user.place - 1 < this.idx"
      />
      <img :src="require('@/assets/img/ArrowRight.svg')" alt="" v-else />
      <p>
        <span :class="scoreStatus" v-if="textStatus">{{ place }}</span>
        <span :class="scoreStatus" v-if="textStatus">places</span>
        <span :class="scoreStatus" v-else>No change</span>
      </p>
    </div>
  </div>
</template>
<script>
export default {
  name: "PlaceUser",
  props: ["place", "user", "idx"],
  data() {
    return {};
  },
  computed: {
    scoreStatus() {
      return {
        green: this.user.place - 1 > this.idx ? true : false,
        red: this.user.place - 1 < this.idx ? true : false,
        yellow: this.user.place - 1 === this.idx ? true : false,
      };
    },
    textStatus() {
      return this.user.place - 1 < this.idx || this.user.place - 1 > this.idx;
    },
  },
};
</script>
<style lang="scss" scoped>
.red {
  color: red;
}
.green {
  color: green;
}
.yellow {
  color: yellow;
}
.wrap_place {
  display: inline-flex;
  p {
    font-size: 15px;
    line-height: 22px;
    margin-left: 10px;
    span {
      margin-right: 3px;
    }
  }
}
</style>