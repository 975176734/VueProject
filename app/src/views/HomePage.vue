<template>
  <!-- 首页 -->
  <div>
    我是主页 
    <SearchBar></SearchBar>
    <AdvertisingSide></AdvertisingSide>
    <AdvertisingCenter></AdvertisingCenter>
    <DynamicComponents></DynamicComponents>
    <KeepsLoading></KeepsLoading>
	<BaseLink></BaseLink>
  </div>
</template>


<script>
import SearchBar from '@/components/SearchBar.vue'
import BaseLink from "@/components/BaseLink.vue"
export default {
  name: "HomePage",
  components: {
    SearchBar,
    AdvertisingSide: () => import("@/components/AdvertisingSide.vue"),
    AdvertisingCenter: () => import("@/components/AdvertisingCenter.vue"),
    KeepsLoading: () => import("@/components/KeepsLoading/KeepsLoading.vue"),
    DynamicComponents: () =>import("@/components/DynamicComponents/DynamicComponents.vue"),
	BaseLink
  },
  
};
</script>

<style scope="scope">
</style>

