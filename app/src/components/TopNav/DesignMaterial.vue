<template>
<!-- 设计素材 -->
    <div class="items_box">
        <span v-for="(items,index) in arr" :key="index" @click=fn(items.name)>{{items.name}}</span>
    </div>
</template>

<script>
export default {
    data() {
        return {
            arr:[{name:"风景"},{name:"人物"},{name:"猫"},{name:"狗"},{name:"建筑"},{name:"居家"},{name:"美食"},{name:"科技"},{name:"活动"}]
        }
    },
	methods:{
		fn(arg){
			this.$emit("maoshen",arg)
		}
	}
}
</script>


<style scoped>
    .items_box{
        width:100%;
        height:100%;
        display:flex;
        flex-direction:row;
        flex-wrap:wrap;
        justify-content:space-around;
        /* background:blue; */
        align-items: center;
    }
    .items_box span{
        width:30%;
        /* height:30%; */
    }
</style>