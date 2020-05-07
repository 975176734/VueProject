<template>
<<<<<<< HEAD
	<!-- 图片页 -->
	<div>
		我是图片页
		<SearchBar></SearchBar>
		<PictureAtlas></PictureAtlas>
		<SwitchPicture></SwitchPicture>
	</div>
=======
  <!-- 图片页 -->
  <div class="PringPage">
    <div class="SearchBar"><SearchBar></SearchBar></div>
    <PictureAtlas></PictureAtlas>
    <SwitchPicture></SwitchPicture>
  </div>
>>>>>>> 75a2bedb4e65a6982cb3ff851e8a31229a46591d
</template>
<script>
<<<<<<< HEAD
	import SearchBar from "../components/SearchBar.vue"
	import PictureAtlas from "../components/PictureAtlas.vue"
	import SwitchPicture from "./PringPage/SwitchPicture.vue"
	export default {
		components: {
			SearchBar,
			PictureAtlas,
			SwitchPicture
		},
	}

</script>

<style scoped>

</style>
=======
import SearchBar from "./PringPage/SearchBar.vue";
import PictureAtlas from "../components/PictureAtlas.vue"
import SwitchPicture from "./PringPage/SwitchPicture.vue"
export default {
  components: {
    SearchBar,
    PictureAtlas,
    SwitchPicture
  },
};
</script>

<style scoped>
  .PringPage{
    background-color: #F1F4F7;
  }
  .SearchBar{
    width: 100%;
    height: 200px;
    background-color: #434D65;
  }
</style>
>>>>>>> 75a2bedb4e65a6982cb3ff851e8a31229a46591d
