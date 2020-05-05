<template>
<!-- 高端页 -->
    <div>
        我是高端页
        <SearchBar></SearchBar>
		<BaseLink></BaseLink>
    </div>
</template>


<script>
import SearchBar from"@/components/SearchBar.vue"
import BaseLink from "@/components/BaseLink.vue"
export default {
    components:{
            SearchBar,
			BaseLink
        }
}
</script>

<style scope="scope">
    
</style>