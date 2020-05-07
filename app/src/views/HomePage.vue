<template>
  <!-- 首页 -->
  <div>
    我是主页 
    <SearchBar></SearchBar>
	<VideoPic></VideoPic>
	<Lunbo></Lunbo>
    <AdvertisingSide></AdvertisingSide>
    <AdvertisingCenter></AdvertisingCenter>
    <DynamicComponents></DynamicComponents>
    <KeepsLoading></KeepsLoading>
  </div>
</template>


<script>
import SearchBar from '@/components/SearchBar.vue'
export default {
  name: "HomePage",
  components: {
    SearchBar,
    AdvertisingSide: () => import("@/components/AdvertisingSide.vue"),
    AdvertisingCenter: () => import("@/components/AdvertisingCenter.vue"),
    KeepsLoading: () => import("@/components/KeepsLoading/KeepsLoading.vue"),
    DynamicComponents: () =>import("@/components/DynamicComponents/DynamicComponents.vue"),
	Lunbo:()=>import("./HomePage/lunbo.vue"),
	VideoPic:()=>import('./HomePage/BackgroundMedia.vue')
  },
  
};
</script>

<style scoped>
</style>

