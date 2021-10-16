<template>
	<div class="top-users">
		<ul>
			<li v-for="user of topLeader" :key="user.id">
				<div>
					<img :src="slides[user.name]" alt="" />
					<span class="top_score">{{ user.score }}</span>
				</div>
				<p>{{ user.name }}</p>
			</li>
		</ul>
	</div>
</template>
<script>
export default {
	name: 'TopUSers',
	props: {
		slides: {
			type: Object,
			require: true,
		},
		users: {
			type: Array,
			require: true,
		},
	},
	computed: {
		topLeader() {
			return this.users
				.map(user => user)
				.sort((a, b) => b.score - a.score)
				.slice(0, 4);
		},
	},
};
</script>
<style lang="scss" scoped>
.top-users {
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
					background-color: $wc;
					padding: 2px 8px 3px 9px;
					border-radius: 5px;
				}
				img {
					width: 84px;
					height: 84px;
				}
			}
			p {
				font-size: 12px;
				line-height: 32px;
				color: $wc;
				text-align: center;
			}
		}
		li:first-child {
			margin-left: 0;
		}
	}
}
</style>