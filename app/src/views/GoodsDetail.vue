<template>
	<!-- 商品详情页 -->
	<div class="GoodsDetail">
		
			
			<h2 >商品详情页</h2>
			<!-- 相似图片展示 -->
			<div>
				<RelatedImages :mydata="message" :title='title'></RelatedImages>
			</div>
			
		
	</div>
</template>


<script>
	import RelatedImages from "../components/RelatedImages.vue"
	export default {	
		data() {
			return {
				species: '',
				message:'',
				title:{exhibition:true,text:'相似图片'}
			}
		},
		components:{
			RelatedImages,
			
		},
		mounted() {
			//获取点击商品的信息
			let goodsObj = this.$route.query.message
			
			this.species = goodsObj.species
			this.axios(`http://127.0.0.1:7001/SimilarImg?species=${this.species}`)
				.then((results) => {
					this.message = results.data
					
			
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
