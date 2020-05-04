<template>
<!-- 视频页 -->
    <div>
        <div style="width: 100%; height: 50px;"></div>
		<SearchBar></SearchBar>
		<MyVideo :my_src="items.src" :my_index="index" v-for="(items,index) in video_arr" :key="index" class="vido"></MyVideo>
    </div>
</template>


<script>
import SearchBar from"@/components/SearchBar.vue"
export default {
	data() {
		return {
			video_arr:[]
		}
	},
    components:{
		MyVideo:()=>import("./VideoPage/Video_pic.vue"),
		SearchBar
	},
	created(){
		let that = this;
		this.axios("http://localhost:7001/getMedia").then((response) => {
				console.log(response)
		 		that.video_arr = [...response.data]
		 	})
	}
}
</script>

<style scope="scope">
    .vido{
		margin-top: 10px;
	}
</style>