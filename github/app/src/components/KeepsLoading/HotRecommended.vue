<template>
	<div class="HotRecommended">
		<!-- 热门推荐组件 -->
		<div class="infinite-list-wrapper" style="overflow:auto">
			<div class="list" v-infinite-scroll="load" infinite-scroll-disabled="disabled">
				<div v-for="i in count" class="list-item" :key="i">
					<a href="#">
						<img :src="imgdata[i].src">
					</a><AddToCar :id="imgdata[i].id" :type="imgdata[i].type"></AddToCar>
				</div>	
			</div>
			<p v-if="loading" class="loading">加载中...</p>
			<p v-if="noMore" class="nomore">没有更多了</p>
		</div>
	</div>
</template>

<script>
import AddToCar from "../AddToCar.vue"
	export default {
		data() {
			return {
				count: 8,
				loading: false,
				imgdata:''
			}
		},
		computed: {
			noMore() {
				return this.count >= 28
			},
			disabled() {
				return this.loading || this.noMore
			}
		},
		methods: {
			load() {
				this.loading = true
				setTimeout(() => {
					this.count += 4
					this.loading = false
				}, 1200)
			}
		},
		mounted() {
			this.axios("http://127.0.0.1:7001/goods?number=0")
			.then((results)=>{
				console.log(results.data)
				this.imgdata=results.data
			})
		},
		components:{AddToCar}
	}
</script>

<style scoped="scoped">
	.HotRecommended {
		width: 1330px;
	}

	.list {
		width: 100%;
		display: flex;
		justify-content: space-around;
		flex-wrap: wrap;

	}
	.list-item {
		width: 322px;
		position: relative;
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
