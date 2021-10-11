<template>
  <div class="leaders_wrap">
    <div class="addLeader">
      <h2>Leaders table for this period</h2>
      <Adduser />
    </div>
    <table class="leaders_list">
      <tr class="leaders_item" v-for="(user, idx) of sortList" :key="user.id">
        <td class="user_num">{{ idx + 1 }}{{ declension(idx + 1, words) }}</td>
        <td class="user_icon">
          <img :src="require('@/assets/img/Img1.png')" alt="" />
        </td>
        <td align="left" class="input_wrap">
          <input
            type="text"
            class="user_score"
            :value="user.score"
            @keyup.enter="saveNewScore(user, $event, idx)"
            ref="input"
            
          />
        </td>
        <td align="left" class="user_name">{{ user.name }}</td>
        <td class="place_user" width="400" align="right">
          <PlaceUser :place=" user.place - idx - 1" />
        </td>
        <td class="change_score">
          <ChangeScore @editScore="editScore(idx)" />
        </td>
        <HistoryUserScore :user="user" />
      </tr>
    </table>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import Adduser from "./AddUser";
import PlaceUser from "./PlaceUser";
import ChangeScore from "./ChangeScore";
import HistoryUserScore from "./HistoryUserScore.vue";
export default {
  name: "Users",
  components: {
    PlaceUser,
    Adduser,
    ChangeScore,
    HistoryUserScore,
  },

  data() {
    return {
      words: ["st", "nd", "rd", "th"],
      edit: true,
      isButtonDisabled: {},
      users: [],
    };
  },
  mounted() {
    this.GET_USERS_SCORE();
  },
  computed: {
    ...mapGetters(["USERS"]),
    sortList() {
      return this.sortUsersByScore(this.users);
    },
  },
  methods: {
    ...mapActions(["GET_USERS_SCORE"]),

    declension(n, titles) {
      //   let cases = [2, 0, 1, 1, 1, 2];
      // return txt[ (number%100>4 && number%100<20)? 2 : cases[(number%10<5)?number%10:5] ];
      return titles[
        n % 10 == 1 && n % 100 != 11
          ? 0
          : n % 10 >= 2 && n % 10 <= 4 && (n % 100 < 10 || n % 100 >= 20)
          ? 1
          : 2
      ];
    },
    saveNewScore({name}, { target },idx) {
      const score = Number(target.value);
      const changedUser = this.users.find((user) => name === user.name);
       const oldValue = this.users[idx].score;
      changedUser.score = score;
      const index = this.users.findIndex((user) => user.name === name);
     
      if (!this.users[index].history) {
        this.users[index].history = [];
      }
      this.users[index].history.push({
        date: new Date().toLocaleDateString(),
        oldScore: oldValue,
        newScore: score,
      });
      console.log(this.users[index].history);
    },
    sortUsersByScore(users) {
      return users.slice().sort((a, b) => b.score - a.score);
    },
    editScore(i) {
      this.$set(this.isButtonDisabled, i, !this.isButtonDisabled[i]);

      if (this.isButtonDisabled[i]) {
        return this.$refs.input[i].focus();
      }
      this.$refs.input[i].blur();
      // this.esitScore = !this.esitScore;
      // if (this.edit) {
      //   this.$refs.input[idx].focus();
      //   this.edit = false;
      // }
      // this.edit = true;
      // // console.log(this.$refs.input[idx]);
    },
    // place(val) {
    //   const indexOld = this.sortList.findIndex(({ score }) => score === val);
    //   console.log(indexOld);
    //   const indexNew = this.sortList.findIndex(({ score }) => score === val);
    //   return  indexNew - indexOld;
    // },
  },
  watch:{
    USERS(newChange){
        if(newChange.length > 0){
          this.users = this.sortUsersByScore(newChange).map((user, i) => ({
      ...user,
      place: i + 1,
    }));
        }
    }
  }
};
</script>

<style lang="scss" scoped>
.leaders_wrap {
  width: 984px;
  background: #fff;
  border: 1px solid #eceef5;
  border-radius: 10px;
  margin-top: 36px;
  padding: 0 34px;
}

h2 {
  font-weight: 600;
  font-size: 20px;
  line-height: 32px;
}

.leaders_list {
  border-spacing: 29px;
  .leaders_item {
    .user_num {
      font-weight: bold;
      font-size: 20px;
      line-height: 21px;
      color: #e0e0e0;
      min-width: 35px;
      padding-right: 33px;
    }
    .user_icon {
      padding-right: 42px;
    }

    .input_wrap {
      min-width: 70px;
      .user_score {
        font-weight: bold;
        font-size: 30px;
        line-height: 21px;
        color: #1b1d1a;
        opacity: 0.91;
        width: 100%;
        border: none;
      }
    }
    .user_name {
      font-size: 14px;
      line-height: 21px;
      padding-left: 31px;
    }
    &:hover .history_wrap {
      opacity: 1;
    }
    position: relative;
  }
}
.addLeader {
  display: flex;
  justify-content: space-between;
  margin: 22px 0 38px;
}
</style>