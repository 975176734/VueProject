<template>
	<!-- 商品详情页 -->
	<div class="GoodsDetail">
		
			
			<h2 >商品详情页</h2>
			<!-- 相似图片展示 -->
			<div>
				<RelatedImages :mydata="similarMessage" :title='title'></RelatedImages>
			</div>
			
		
	</div>
</template>


<script>
	import RelatedImages from "../components/RelatedImages.vue"
	export default {	
		data() {
			return {
				goodsObj: '',
				similarMessage:'',
				title:{exhibition:true,text:'相似图片'}
			}
		},
		components:{
			RelatedImages,
			
		},
		mounted() {
			//获取点击商品的信息
			this.goodsObj = this.$route.query.message
					console.log(this.goodsObj,"000")
			this.axios(`http://127.0.0.1:7001/SimilarImg?species=${this.goodsObj.species}`)
				.then((results) => {
					this.similarMessage = results.data
					console.log(results.data,"222")
			
				})
			},
		
		}
		
</script>

<style scope="scope">
	.GoodsDetail {
		position: relative;
		top: 70px;
	}
</style>
