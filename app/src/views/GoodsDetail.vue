<template>
	<!-- 商品详情页 -->
	<div class="GoodsDetail">
			<h2 >商品详情页</h2>
			<!-- 图片详情以及描述 -->
			
				<myGoodShow :mygoodsInfo = 'goodsInfo'></myGoodShow>
			
			<!-- 相似图片展示 -->
			<div>
				<RelatedImages :mydata="message" :title='title'></RelatedImages>
			</div>
			
		
	</div>
</template>


<script>
	import RelatedImages from "../components/RelatedImages.vue"
	import myGoodShow from './GoodsDetail/GoodsDetail.vue'
	export default {	
		data() {
			return {
				species: '',
				message:'',
				title:{exhibition:true,text:'相似图片'},
				goodsInfo:'',
			}
		},
		components:{
			RelatedImages,
			myGoodShow
			
		},
		created() {
			
			//获取点击商品的信息
			
				let goodsObj = this.$route.query.message
				let a = JSON.parse(goodsObj)
				console.log(JSON.parse(goodsObj))
				
				//打包商品的信息
				// console.log(goodsObj)
				this.goodsInfo = a
				
				
				//网络请求获取相似图片
				this.species = a.species
				this.axios(`http://127.0.0.1:7001/SimilarImg?species=${this.species}`)
					.then((results) => {
						this.message = results.data
						
				
					})
				}
			
			
		
		}
		
</script>

<style scope="scope">
	.GoodsDetail {
		position: relative;
		top: 70px;
	}
</style>
