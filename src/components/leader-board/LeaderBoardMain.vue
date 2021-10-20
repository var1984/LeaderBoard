<template>
	<div>
		<header>
			<div class="header">
				<div class="header_leader-list">
					<div class="leader-list">
						<div class="title_scorers">All time Highest Scorers</div>
						<TopUsers :slides="slides" :users="users" />
					</div>
					<div class="img_title">
						<img :src="require('@/assets/img/title_img.png')" alt="" />
					</div>
				</div>
			</div>
		</header>

		<Users :slides="slides" @set="setUser" />
	</div>
</template>

<script>
import TopUsers from './top-users/TopUsers.vue';
import Users from './users/Users';

export default {
	name: 'LeaderBoardMain',
	components: { Users, TopUsers },
	data() {
		return {
			slides: {
				elena: require('../../assets/img/img.png'),
				fred: require('../../assets/img/img2.png'),
				harriet: require('../../assets/img/img3.png'),
				bob: require('../../assets/img/img4.png'),
				chris: require('../../assets/img/img5.png'),
				alice: require('../../assets/img/img6.png'),
				dom: require('../../assets/img/img7.png'),
				grace: require('../../assets/img/img8.png'),
			},
			users: [],
		};
	},
	methods: {
		setUser(user) {
			this.users = user;
		},
	},
};
</script>

<style scoped lang="scss">
.header {
	width: 984px;
	height: 187px;
	background-color: #6b59cc;
	border-radius: 10px;
	padding: 16px 27px 0;

	&_leader-list {
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
	color: $whiteColor;
}
</style>

