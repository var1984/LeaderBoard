<template>
	<div class="change-score">
		<button @click="editScore">
			<img :src="require('@/assets/img/pencil.svg')" alt="" />
		</button>
	</div>
</template>
<script>
export default {
	name: 'ChangeScore',
	methods: {
		editScore() {
			this.$emit('editScore', this.editScore);
		},
	},
};
</script>
<style lang="scss" scoped>
.change-score {
	position: relative;
	button {
		border: none;
		background: none;
		cursor: pointer;
	}
}
</style>