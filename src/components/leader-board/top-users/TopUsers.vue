<template>
	<div class="top-users">
		<ul>
			<li v-for="user of top_leader" :key="user.id">
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
import { mapGetters } from 'vuex';
export default {
	name: 'TopUSers',
	props: {
		slides: {
			type: Object,
			require: true,
		},
	},
	computed: {
		...mapGetters(['top_leader']),
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
					background-color: $whiteColor;
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
				color: $whiteColor;
				text-align: center;
			}
		}
		li:first-child {
			margin-left: 0;
		}
	}
}
</style>