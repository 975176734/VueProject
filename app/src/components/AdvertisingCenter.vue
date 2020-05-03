<template>
	<div class="AdvertisingCenter">
		<!-- 打开首页，页面中央弹出广告组件 -->
		<div tabindex="-1" role="dialog" aria-modal="true" aria-label="HTML 片段" class="el-message-box__wrapper" style="z-index: 2001;">
			<div class="el-message-box__header">
				<button type="button" aria-label="Close" class="el-message-box__headerbtn">
					<i class="el-message-box__close el-icon-close" @click="close()"></i>
				</button>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		methods: {
			close() {
				document.querySelector(".el-message-box__wrapper").style.display = "none"
			}
		}
	}
</script>
<style scoped="scoped">
	.el-message-box__wrapper {
		width: 600px;
		height: 260px;
		margin: 170px auto 0px;
		background-color: #FAEBD7;
		line-height: 260px;
		background-image: url(https://static.paixin.com/paixin-vision/static/img/banner1.4997457.png);
	}
</style>
