<template>
<!-- 视频页 -->
    <div>
        我是视频页
        <div class="searchBar"><SearchBar></SearchBar></div>
        <BackgroundMedia></BackgroundMedia>
    </div>
</template>


<script>
import SearchBar from"@/components/SearchBar.vue"
import BackgroundMedia from "@/components/BackgroundMedia.vue"
export default {
    components:{
            SearchBar,
            BackgroundMedia,
        }
}
</script>

<style scope="scope">
    .vido{
		margin-top: 10px;
	}
</style>