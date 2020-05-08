<template>
  <!-- 图片页 -->
  <div class="PringPage">
    <div class="SearchBar"><SearchBar></SearchBar></div>
    <PictureAtlas></PictureAtlas>
    <SwitchPicture></SwitchPicture>
  </div>
<<<<<<< HEAD

</template>
<script>

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

=======
</template>
<script>
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
>>>>>>> 3765312c794d8bc7fb7088682dce5b8f15efb5e3
</script>

<style scoped>
  .PringPage{
    background-color: #F1F4F7;
  }
  .SearchBar{
    width: 100%;
    height: 240px;
    background-color: #434D65;
  }
</style>
