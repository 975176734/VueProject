<template>
<!-- 高端页 -->
    <div>
		<HigherPageTop>
			<SearchBar></SearchBar>
		</HigherPageTop> 
		 <KeepsLoading></KeepsLoading>
		<BaseLink></BaseLink>
    </div>
</template>


<script>
	
import HigherPageTop from"@/components/HigherPageTop.vue"
import SearchBar from"@/components/SearchBar.vue"
import KeepsLoading from"@/components/KeepsLoading/KeepsLoading.vue"
import BaseLink from "@/components/BaseLink.vue"
export default {
    components:{
			HigherPageTop,
            SearchBar,
			KeepsLoading,
			BaseLink
        }
}
</script>

<style scope="scope">
    
</style>