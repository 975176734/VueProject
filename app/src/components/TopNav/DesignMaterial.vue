<template>
<!-- 设计素材 -->
    <div class="items_box">
        <span v-for="(items,index) in arr" :key="index">{{items.name}}</span>
    </div>
</template>

<script>
export default {
    data() {
        return {
            arr:[{name:"医疗"},{name:"教育"},{name:"情感"},{name:"动物"},{name:"人物"},{name:"设计"},{name:"宗教"},{name:"工艺/技术"},{name:"色彩"}]
        }
    },
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
        align-items: center;
    }
    .items_box span{
        width:30%;
        /* height:30%; */
    }
</style>