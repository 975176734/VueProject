<template>
	<!-- 图片页 -->
	<div>
		我是图片页
		<SearchBar></SearchBar>
		<PictureAtlas></PictureAtlas>
		<SwitchPicture></SwitchPicture>
	</div>
</template>


<script>
	import SearchBar from "../components/SearchBar.vue";
	import PictureAtlas from "../components/PictureAtlas.vue"
	import SwitchPicture from "./PringPage/SwitchPicture.vue"
	export default {
		components: {
			SearchBar,
			BaseLink
		},

		components: {
			SearchBar,
			PictureAtlas,
			SwitchPicture
		},
	}
</script>

<style scoped>

</style>
