<template>
<!-- 图片页 -->
    <div>
        我是图片页
        <SearchBar></SearchBar>
        <!-- 测试 -->
        <!-- <button @click="test">点击打印用户名</button> -->
        
        
    </div>
</template>


<script>
import SearchBar from "../components/SearchBar.vue"
export default {
    //测试
    components:{SearchBar},
    //  methods: {
    //     test(){
    //         console.log(this.$store.state.a.isLogin,this.$store.state.a.userName)
    //     }
    // },
}
</script>

<style scope="scope">
    
</style>