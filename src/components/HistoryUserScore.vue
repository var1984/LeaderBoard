<template>
  <div class="history_wrap">
    <h4>History Score</h4>
    <ul v-if="user.history">
      <li v-for="(item, index) of user.history" :key="index">
        <div>New score: {{ item.newScore }}</div>
        <div>Old score:{{ item.oldScore }}</div>
        <div>Change date: {{ item.date }}</div>
      </li>
    </ul>
    <div v-else>No History</div>
  </div>
</template>
<script>
export default {
  name: "HistoryUserScore",
  props: {
    user: {
      type: Object,
    },
  },
  data() {
    return {};
  },
  computed: {},
  methods: {},
};
</script>

<style lang="scss" scoped>
.history_wrap {
  min-width: 200px;
  background-color: blanchedalmond;
  border: 1px solid black;
  position: absolute;
  top: 20px;
  left: 450px;
  opacity: 0;
}
</style>