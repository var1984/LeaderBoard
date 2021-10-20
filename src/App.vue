<template>
	<div id="app">
		<h1>Cube <span>19</span> Leaderboard</h1>
		<div class="link_wrap">
			<router-link to="/" class="link">Home</router-link>
			<router-link to="/info" class="link">Info</router-link>
		</div>
		<router-view></router-view>
	</div>
</template>
<script>
export default {
	name: 'App',
};
</script>
<style lang="scss" scoped>
#app {
	width: $width-block;
	height: 187px;
	margin: 0 auto;
	h1 {
		font-weight: bold;
		font-size: 34px;
		line-height: 32px;
		color: #1a1c1d;
		text-align: center;
		margin: 116px 0 53px;
		span {
			color: #ffe600;
		}
	}
	.link_wrap {
		text-align: center;
		margin-bottom: 25px;
		.link {
			margin-left: 20px;
		}
	}
}
</style>
