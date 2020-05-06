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
<<<<<<< HEAD
    components:{SearchBar,BaseLink}
}
=======
  components: {
    SearchBar,
    PictureAtlas,
    SwitchPicture
  },
};
>>>>>>> fa40baf93ae4ee8bf1ba53d3b5520f1d3bb293c6
</script>

<style scoped>

</style>