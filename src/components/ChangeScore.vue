<template>
  <div class="wrap">
    <button @click="showModalChangeScore" class="change_btn">
      <img :src="require('@/assets/img/pencil.svg')" alt="" />
    </button>
    <div class="change-form" v-if="show">
      <h3>Edit user Score</h3>
      <div class="input-wrap">
        <select v-model="selectUser">
          <option v-for="(user, idx) of sortList" :key="idx">
            {{ user.name }}
          </option>
        </select>
        <input type="number" placeholder="Score:" v-model="score" />
      </div>
      <button @click="saveNewScore">Save</button>
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  name: "ChangeScore",
  props: {
    sortList: {
      type: Array,
      require: true,
    },
  },
  data() {
    return {
      show: false,
      score: "",
      selectUser: "",
    };
  },
  computed: {
    ...mapGetters(["USERS"]),
  },
  methods: {
    showModalChangeScore() {
      this.show = true;
    },
    saveNewScore() {
      this.show = false;
      this.USERS.filter((item) => {
        if (item.name === this.selectUser) {
          if (!item.history) {
            item.history = [];
          }
          item.history.push({
            date: new Date().toLocaleDateString(),
            oldScore: item.score,
            newScore: +this.score,
          });
          item.score = +this.score;
        } else {
          item;
        }
      });
      // console.log(this.USERS);
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
.change_btn {
  border: none;
  cursor: pointer;
  background: none;
}
.change-form {
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
    select {
      border: none;
      height: 20px;
      width: 250px;
    }
  }
}
</style>