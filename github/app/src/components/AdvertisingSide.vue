<template>
	<div class="AdvertisingSide">
		<!-- 侧边悬停广告，点击“X”关闭，关闭后1分钟自动弹出-->
		<div role="alert" class="el-notification right" style="top: 16px; z-index: 2002;">
			<!---->
			<div class="el-notification__group">
				<div class="el-notification__closeBtn el-icon-close" @click="close()"></div>
			</div>
		</div>
	</div>

</template>

<script>
	
	export default {
		methods: {
			close() {
				document.querySelector(".el-notification").style.display="none"
			}
		},
		mounted() {
			setInterval(function(){
				document.querySelector(".el-notification").style.display="inline-block"
			},60000)
		}
	}
</script>
<style scoped="scoped">
	.el-notification {
		width: 219px;
		height: 218px;
		background-size: cover;
		background-color: transparent;
		background-image: url(../assets/Advertising.png);
		border: 1px solid transparent;
		box-shadow: 0 0px 0px 0 transparent;
		margin-top: 145px;
	}
</style>
