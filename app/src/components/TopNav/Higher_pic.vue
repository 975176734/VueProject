<template>
<!-- 7KM -->
    <div class="items_box">
        <span v-for="(items,index) in arr" :key="index" @click=fn(items.name)>{{items.name}}</span>
    </div>
</template>

<script>
export default {
    data() {
        return {
            arr:[{name:"北京"},{name:"上海"},{name:"成都"},{name:"重庆"},{name:"樱之物语"},{name:"自然风光"},{name:"美食"},{name:"创意"},{name:"科技"}]
        }
    },
	methods:{
		fn(arg){
			this.$emit("maoshen",arg)
		}
	}
}
</script>


<style scope="scope">
    .items_box{
        width:100%;
        height:100%;
        display:flex;
        flex-direction:row;
        flex-wrap:wrap;
        justify-content:space-around;
        /* background:blue; */
    }
    .items_box span{
        width:30%;
        /* height:30%; */
    }
</style>