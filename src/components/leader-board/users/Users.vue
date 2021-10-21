<template>
	<div class="leaders">
		<button @click="addPost">Open Virtual Scroll POSTS on/off</button>
		<AddPost v-if="visibleModalPosts" />
		<div class="addLeader">
			<h2>Leaders table for this period</h2>

			<Adduser :slides="slides" />
		</div>
		<table class="leaders_list">
			<tr class="leaders_list_item" v-for="(user, index) of sortList" :key="user.id">
				<td class="user_num">{{ index + 1 }}{{ declension(index + 1, words) }}</td>
				<td class="user_icon">
					<img :src="slides[user.name]" alt="" />
				</td>
				<td align="left" class="leaders_list_item-input">
					<input
						type="text"
						class="user_score"
						:value="user.score"
						@keyup.enter="saveNewScore(user, $event, index)"
						ref="input"
					/>
				</td>
				<td align="left" class="user_name">{{ user.name }}</td>
				<td class="place_user" width="400" align="right">
					<PlaceUser :place="user.place" :user="user" :index="index" />
				</td>
				<td class="change_score">
					<ChangeScore @editScore="editScore(index)" />
				</td>
				<HistoryUserScore :user="user" />
			</tr>
		</table>
	</div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import Adduser from './add-user/AddUser';
import PlaceUser from './place-user/PlaceUser';
import ChangeScore from './change-score/ChangeScore';
import HistoryUserScore from './history-user-score/HistoryUserScore';
import AddPost from '../addPost/AddPost';
export default {
	name: 'Users',
	props: {
		slides: {
			type: Object,
			require: true,
		},
	},
	components: {
		PlaceUser,
		Adduser,
		ChangeScore,
		HistoryUserScore,
		AddPost,
	},

	data() {
		return {
			words: ['st', 'nd', 'rd', 'th'],
			edit: true,
			isButtonDisabled: {},
			index: 0,
			users: [],
			visibleModalPosts: false,
		};
	},
	mounted() {
		this.GET_USERS_SCORE();
	},
	computed: {
		...mapGetters(['get_users']),

		sortList() {
			return this.sortUsersByScore(this.users);
		},
	},
	methods: {
		...mapActions(['GET_USERS_SCORE']),

		declension(n, titles) {
			return titles[
				n % 10 == 1 && n % 10 != 11 ? 0 : n % 10 === 2 && n % 10 <= 3 && (n % 100 < 10 || n % 100 >= 20) ? 1 : 3
			];
		},
		saveNewScore(user, event, index) {
			const { name } = user;
			const { target } = event;
			const score = Number(target.value);

			// this.get_users[index].score = score;
			const changedUser = this.users.find(user => name === user.name);
			const oldValue = this.users[index].score;
			changedUser.score = score;
			const indexName = this.users.findIndex(user => user.name === name);

			this.index = indexName;
			if (!this.users[indexName].history) {
				this.users[indexName].history = [];
			}
			this.users[indexName].history.push({
				date: new Date().toLocaleString(),
				oldScore: oldValue,
				newScore: score,
			});
			const newScore = {
				name: name,
				score: score,
			};
			this.$store.commit('SET_NEW_SCORE', newScore);
		},
		sortUsersByScore(users) {
			return users.slice().sort((a, b) => b.score - a.score);
		},
		editScore(index) {
			this.$set(this.isButtonDisabled, index, !this.isButtonDisabled[index]);

			if (this.isButtonDisabled[index]) {
				return this.$refs.input[index].focus();
			}
			this.$refs.input[index].blur();
		},
		addPost() {
			this.visibleModalPosts = !this.visibleModalPosts;
		},
	},
	watch: {
		get_users(newChange) {
			if (newChange) {
				this.users = this.sortUsersByScore(newChange).map((user, index) => ({
					...user,
					place: index + 1,
				}));
			}
		},
	},
};
</script>

<style lang="scss" scoped>
.leaders {
	width: $width-block;
	background: $whiteColor;
	border: 1px solid #eceef5;
	border-radius: 10px;
	margin-top: 36px;
	padding: 0 34px;
	&_list {
		border-spacing: 29px;
		&_item {
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

				img {
					width: 38px;
					height: 38px;
				}
			}

			&-input {
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
}

h2 {
	font-weight: 600;
	font-size: 20px;
	line-height: 32px;
}

.addLeader {
	display: flex;
	justify-content: space-between;
	margin: 22px 0 38px;
}
button {
	margin-top: 20px;
}
</style>