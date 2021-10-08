<template>
  <div class="wrap">
    <button class="btn_add-score" @click="showModal">+ Add new score</button>
    <div class="score-form" v-if="show">
      <h3>Add user Score</h3>
      <div class="input-wrap">
        <input type="text" placeholder="Name:" v-model="name" />
        <input type="number" placeholder="Score:" v-model="score" />
      </div>
      <button @click="saveScore">Save</button>
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  name: "Adduser",
  data() {
    return {
      show: false,
      name: "",
      score: "",
    };
  },
  computed: {
    ...mapGetters(["USERS"]),
  },
  methods: {
    showModal() {
      this.show = true;
    },
    saveScore() {
      this.show = false;
      this.USERS.push({ ...this.USERS, name: this.name, score: this.score });
      this.name = "";
      this.score = "";
    },
  },
};
</script>
<style lang="scss" scoped>
.wrap {
  position: relative;
}
button {
  padding: 12px 24px;
  background-color: #6b59cc;
  border: none;
  border-radius: 6px;
  color: #fff;
  font-weight: bold;
  font-size: 12px;
  line-height: 18px;
  cursor: pointer;
}

.score-form {
  width: 500px;
  border: 1px solid black;
  border-radius: 10px;
  text-align: center;
  padding: 25px;
  position: absolute;
  right: 150px;
  top: 0;
  background-color: #fff;
  z-index: 100;
  h3 {
    font-size: 35px;
    font-weight: 700;
  }
  .input-wrap {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 15px 0;
    input {
      border: none;
      height: 20px;
      width: 250px;
      padding-left: 10px;
    }
  }
}
</style>