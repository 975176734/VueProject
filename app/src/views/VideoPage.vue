<template>
<!-- 视频页 -->
    <div>
        我是视频页
        <div class="searchBar"><SearchBar></SearchBar></div>
        <BackgroundMedia></BackgroundMedia>
		<BaseLink></BaseLink>
    </div>
</template>


<script>
import SearchBar from"@/components/SearchBar.vue"
import BackgroundMedia from "@/components/BackgroundMedia.vue"
import BaseLink from "@/components/BaseLink.vue"
export default {
    components:{
            SearchBar,
            BackgroundMedia,
			BaseLink
        }
}
</script>

<style scope="scope">
    .vido{
		margin-top: 10px;
	}
</style>