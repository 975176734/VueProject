<template>
<!-- 视频页 -->
    <div>
        我是视频页
        <SearchBar></SearchBar>
    </div>
</template>


<script>
import SearchBar from"@/components/SearchBar.vue"
export default {
    components:{
            SearchBar,
        }
}
</script>

<style scope="scope">
    .vido{
		margin-top: 10px;
	}
</style>