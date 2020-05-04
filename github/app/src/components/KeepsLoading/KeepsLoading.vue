<template>
	<div class="KeepsLoading">
		<!--“高端"模块里的（"热门推荐", "商店热门", "最新作品"）三个组件动态切换，滚动条下拉图片不断加载-->
		<div class="category-options" >
			<div class="category-option" @click="fn1">{{categoryArr[0]}}</div>
			<div class="category-option" @click="fn2">{{categoryArr[1]}}</div>
			<div class="category-option" @click="fn3">{{categoryArr[2]}}</div>				 
		</div>
		<div>
			<components :is="afflatus" :mydata='mydata'></components>
		</div>
		
	</div>
</template>
<script>
	import HotRecommended from "./HotRecommended.vue"
	import ShopPopular from "./ShopPopular.vue"
	import LatestWork from "./LatestWork.vue"
	export default {
		data() {
			return {
				categoryArr: ["热门推荐", "商店热门", "最新作品"],
				afflatus:HotRecommended,
				mydata:''
				
			}
		},
		methods:{
			fn1(){
				this.afflatus=HotRecommended;
			},
			fn2(){
				this.afflatus=ShopPopular;
				this.axios("http://127.0.0.1:7001/goods?number=31")
				.then((results)=>{
					console.log(results.data)
					this.mydata=results.data
				})
			},
			fn3(){
				this.afflatus=LatestWork;
				this.axios("http://127.0.0.1:7001/goods?number=66")
				.then((results)=>{
					console.log(results.data)
					this.mydata=results.data
				})
			}
			
		},
	}
</script>

<style scoped="scoped">
	.DynamicInspiration {
		padding: 1px 0;
	}
	
	.category-options {
		
		box-sizing: border-box;
		width: 800px;
		margin: 40px auto 34px;
		display: flex;
		justify-content: space-around;
		flex-wrap: nowrap;
		align-items: center;
		font-size: 24px;
		color: #333333;
		font-weight: 600;
		
	}
	.category-option {
		cursor: pointer;
	}
</style>

