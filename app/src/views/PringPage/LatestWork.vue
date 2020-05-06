<template>
	<div class="ShopPopular">
		<!-- 商店热门组件 -->
		<div class="infinite-list-wrapper" style="overflow:auto">
			<div class="list" v-infinite-scroll="load" infinite-scroll-disabled="disabled">
				<div v-for="(item,index) in mydata" class="list-item" :key="index">
					<router-link :to="{name:'GoodsDetail', query:{ message:item}}">
						<img :src="item.src" >
					</router-link>
					<AddToCar :id="item.id" :type="item.type"></AddToCar>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import AddToCar from "../../components/AddToCar.vue"
	export default {
		data() {
			return {
				count: 28,
				loading: false
			}
		},
		props:['mydata'],
		components:{AddToCar}
	}
</script>

<style scoped="scoped">
	.ShopPopular {
		width: 1330px;
	}

	.list {
		width: 100%;
		display: flex;
		justify-content: space-between;
		flex-wrap: wrap;

	}
	.list-item {
		width: 322px;
		position: relative;
		margin-bottom: 15px;
	}
	img {
		width: 100%;
		height: 260px;
	}
	.loading {
		width: 100%;
		height: 50px;
		line-height: 50px;
		text-align: center;
		font-size: 16px;
		margin: 20px auto;
	}
	.nomore {
		width: 100%;
		height: 50px;
		line-height: 50px;
		text-align: center;
		font-weight: 600;
		font-size: 14px;
		margin: 20px auto;
	}
</style>
