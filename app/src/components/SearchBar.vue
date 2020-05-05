<template>
  <!-- 搜索栏模块 -->
  <div class="searchModel">
  <el-input placeholder="输入关键字进行搜索" v-model="input1" class="input-with-select" style="width:500px">
    <el-select v-model="select" slot="prepend" placeholder="请选择类别" style="width:130px;color:black;font-size:16px">
      <el-option label="图片" value="picture"></el-option>
      <el-option label="视频" value="media"></el-option>
    </el-select>
    <el-button slot="append" icon="el-icon-search" style="background-color:#FE293F;color:white;font-size:16px" @click="Tosearch"></el-button>
  </el-input>
</div>
</template>


<script>
export default {
    name:"SearchBar",
   data() {
    return {
      input1: '',
      select: ''
    }
  },
  methods: {
    Tosearch(){
      if(this.input1=="" || this.select==""){
        if(this.select==""){
          this.$message('请选择类别');
        }else if(this.input1==""){
          this.$message('请输入关键词');
        }
      }
      else{
        this.$router.push({ name: 'search',params:{type:`${this.select}`,keywords:`${this.input1}`}})
      }
    }
  },
};
</script>

<style scoped>
.searchModel{
  top:80px;
  margin: 0 auto;
  margin-bottom: 50px;
  padding: 1px;
  width: 500px;
  position: relative;
}
</style>