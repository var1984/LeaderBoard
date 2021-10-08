<template>
  <div>
    <header>
      <div class="header_conteiner">
        <div class="header_leader-list">
          <div class="leader-list">
            <div class="title_scorers">All time Highest Scorers</div>
            <TopUsers />
          </div>
          <div class="img_title">
            <img :src="require('@/assets/img/title_img.png')" alt="" />
          </div>
        </div>
      </div>
    </header>
    <Users />
  </div>
</template>

<script>
import Users from "./Users";
import TopUsers from "./TopUsers.vue";

export default {
  name: "Header",
  components: { Users, TopUsers },
  data() {
    return {};
  },
};
</script>

<style scoped lang="scss">
.header_conteiner {
  width: 984px;
  height: 187px;
  background-color: #6b59cc;
  border-radius: 10px;
  padding: 16px 27px 0;

  .header_leader-list {
    display: flex;
    justify-content: space-between;
  }
}
.img_title {
  margin-top: 13px;
}
.title_scorers {
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 32px;
  color: #fff;
}
</style>

