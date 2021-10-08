<template>
  <div>
    <ul>
      <li v-for="(user, idx) of topLeader" :key="idx">
        <div>
          <img :src="require('@/assets/img/Img1.png')" alt="" />
          <span class="top_score">{{ user.score }}</span>
        </div>
        <p>{{ user.name }}</p>
      </li>
    </ul>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  name: "TopUSers",
  computed: {
    ...mapGetters(["USERS"]),
    topLeader() {
      return this.USERS.map((user) => ({ ...user, score: user.score || 0 }))
        .sort((a, b) => b.score - a.score)
        .slice(0, 4);
    },
  },
};
</script>
<style lang="scss" scoped>
ul {
  margin-top: 16px;
  display: flex;
  li {
    margin-left: 28px;

    div {
      position: relative;
      display: flex;
      justify-content: center;
      .top_score {
        position: absolute;
        bottom: 12px;
        font-weight: 600;
        font-size: 20px;
        line-height: 32px;
        color: #81c926;
        background-color: #fff;
        padding: 2px 8px 3px 9px;
        border-radius: 5px;
      }
    }
    p {
      font-size: 12px;
      line-height: 32px;
      color: #ffffff;
      text-align: center;
    }
  }
  li:first-child {
    margin-left: 0;
  }
}
</style>