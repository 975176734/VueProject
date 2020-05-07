<template><video id="v1" autoplay loop muted>
    <source
      src="http://d301.paixin.com/thumbs/1292828/91699508/api_thumb_600.mp4"
      type="video/mp4"
    />
  </video>
 
</template>
<script>
export default {};
</script>
<style scoped>
video {
  position: relative;
  right: 0px;
  bottom: 300px;
  min-width: 100%;
  min-height: 100%;
  height: auto;
  width: auto;
  /*加滤镜*/
  /*filter: blur(15px); //背景模糊设置 */
  /*-webkit-filter: grayscale(100%);*/
  /*filter:grayscale(100%); //背景灰度设置*/
  z-index: -11;
  padding: 0;
  margin: 0;
}
source {
  min-width: 100%;
  min-height: 100%;
  height: auto;
  width: auto;
}
</style>