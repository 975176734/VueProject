<template>
	<!-- 首页的"精选灵感", "图片灵感", "插画灵感", "视频灵感"四个组件动态切换 -->
	<div class="DynamicInspiration">
		<div class="category-options" >
			<div class="category-option" @click="fn1">{{categoryArr[0]}}</div>
			<div class="category-option" @click="fn2">{{categoryArr[1]}}</div>
			<div class="category-option" @click="fn3">{{categoryArr[2]}}</div>
			<div class="category-option" @click="fn4">{{categoryArr[3]}}</div>					 
		</div>
		<div>
			<components :is="afflatus"></components>
		</div>
		
	</div>
</template>

<script>
	import Select from "./Select.vue"
	import Picture from "./Picture.vue"
	import Illustration from "./Illustration.vue"
	import Video from "./Video.vue"
	export default {
		data() {
			return {
				categoryArr: ["精选灵感", "图片灵感", "插画灵感", "视频灵感"],
				afflatus:Select,
			}
		},
		methods:{
			fn1(){
				this.afflatus=Select;
			},
			fn2(){
				this.afflatus=Picture;
			},
			fn3(){
				this.afflatus=Illustration;
			},
			fn4(){
				this.afflatus=Video;
			}
			
		},
		components:{
			Select,
			Picture,
			Illustration,
			Video
					
		}
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
