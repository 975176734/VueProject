<template>
<!-- 轮播图 -->
  <el-carousel :interval="4000" type="card" height="200px">
    <el-carousel-item v-for="(item,index) in lunbo_arr" :key="index">
      <h3 class="medium"><img :src="item.src" class="lunbo_pic"></h3>
    </el-carousel-item>
  </el-carousel>
</template>


<script>
export default {
    data(){
        return {
			lunbo_arr:[]
        }
    },
    created(){
		let that =this;
		console.log(66)
        this.$axios.get('http://localhost:7001/getlunbopic').then(function(response){
			console.log(response)
			that.lunbo_arr = [...response.data]
		})
    }
}
</script>
<style>
  .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 200px;
    margin: 0;
  }
  
  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
  .lunbo_pic{
	  width:100%;
	  height: 100%;
  }
</style>