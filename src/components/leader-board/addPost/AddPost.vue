<template>
	<div>
		<VirtualizedList :items="posts" :item-height="65" class="scroller">
			<template v-slot="{ item }">
				<div class="item">
					<span class="item__avatar">{{ item.body }}</span>
				</div>
			</template>
		</VirtualizedList>
	</div>
</template>
<script>
import VirtualizedList from 'vue-virtualized-list';
import { mapGetters, mapActions } from 'vuex';
export default {
	name: 'AddPost',
	components: {
		VirtualizedList,
	},
	mounted() {
		this.GET_POSTS();
	},
	methods: {
		...mapActions(['GET_POSTS']),
	},
	computed: {
		...mapGetters(['posts']),
	},
};
</script>
<style lang="scss" scoped>
.scroller {
	position: absolute !important;

	height: 250px !important;
	overflow: hidden;
	width: 700px !important;
	right: 267px;
	top: 450px;
	background: $main-color;
	z-index: 1000;

	border-radius: 10px;
	.item {
		padding: 40px;
	}
	.item__avatar {
		color: #fff;
	}
}
</style>
