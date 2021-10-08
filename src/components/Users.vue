<template>
  <div class="leaders_wrap">
    <div class="addLeader">
      <h2>Leaders table for this period</h2>
      <Adduser />
    </div>
    <table class="leaders_list">
      <tr class="leaders_item" v-for="(user, idx) of sortList" :key="idx">
        <th class="user_num">{{ idx + 1 }}{{ declension(idx + 1, words) }}</th>
        <th class="user_icon">
          <img :src="require('@/assets/img/Img1.png')" alt="" />
        </th>
        <th align="left" class="user-score">{{ user.score }}</th>
        <th align="left" class="user-name">{{ user.name }}</th>
        <th class="place_user" width="400" align="right"><PlaceUser /></th>
        <th class="change_score">
          <ChangeScore :sortList="sortList" @history="getHistory" />
        </th>
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
      history: [],
    };
  },
  mounted() {
    this.GET_USERS_SCORE();
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
    getHistory(history) {
      this.history = history;
      console.log(this.history);
    },
  },
  computed: {
    ...mapGetters(["USERS"]),
    sortList() {
      return this.USERS.map((user) => ({
        ...user,
        score: user.score || 0,
      }))
        .slice()
        .sort((a, b) => b.score - a.score);
    },
  },
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
    .user-score {
      font-weight: bold;
      font-size: 30px;
      line-height: 21px;
      color: #1b1d1a;
      opacity: 0.91;
    }
    .user-name {
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