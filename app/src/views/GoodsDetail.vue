<template>
	<!-- 商品详情页 -->
	<div class="GoodsDetail">
			<h2 >商品详情页</h2>
			<!-- 图片详情以及描述 -->
			
				<myGoodShow :mygoodsInfo = 'goodsInfo'></myGoodShow>
			
			<!-- 相似图片展示 -->
			<div>
				<RelatedImages :mydata="similarMessage" :title='title'></RelatedImages>
			</div>
			
		
	</div>
</template>


<script>
	import RelatedImages from "../components/RelatedImages.vue"
	import myGoodShow from './GoodsDetail/GoodsDetail.vue'
	export default {	
		data() {
			return {
<<<<<<< HEAD
				species: '',
				message:'',
				title:{exhibition:true,text:'相似图片'},
				goodsInfo:'',
=======
				goodsObj: '',
				similarMessage:'',
				title:{exhibition:true,text:'相似图片'}
>>>>>>> 3712c0af6fbd746a3591ff70c47ddb20d3bdc184
			}
		},
		components:{
			RelatedImages,
			myGoodShow
			
		},
		created() {
			
			//获取点击商品的信息
<<<<<<< HEAD
			
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
			
=======
			this.goodsObj = this.$route.query.message
					console.log(this.goodsObj,"000")
			this.axios(`http://127.0.0.1:7001/SimilarImg?species=${this.goodsObj.species}`)
				.then((results) => {
					this.similarMessage = results.data
					console.log(results.data,"222")
>>>>>>> 3712c0af6fbd746a3591ff70c47ddb20d3bdc184
			
		
		}
		
</script>

<style scope="scope">
	.GoodsDetail {
		position: relative;
		top: 70px;
	}
</style>
