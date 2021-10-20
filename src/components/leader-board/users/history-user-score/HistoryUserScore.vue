<template>
	<div class="history_wrap">
		<h4>History Score</h4>
		<ul v-if="user.history">
			<li v-for="user of user.history" :key="user.id">
				<div>New score: {{ user.newScore }}</div>
				<div>Old score:{{ user.oldScore }}</div>
				<div>Change date: {{ user.date }}</div>
			</li>
		</ul>
		<div v-else>No History</div>
	</div>
</template>
<script>
export default {
	name: 'HistoryUserScore',
	props: {
		user: {
			type: Object,
		},
	},
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