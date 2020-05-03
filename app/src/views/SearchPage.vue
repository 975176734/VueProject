<template>
  <!-- 搜索组件 -->
  <div style="margin-top: 0px;" class="searchModel">
    <el-input
      placeholder="输入关键字进行搜索"
      v-model="input1"
      class="input-with-select"
      style="width:100%;boder:none"
    >
      <el-select
        v-model="select"
        slot="prepend"
        placeholder="请选择类别"
        style="width:130px;color:black;font-size:16px;boder:none"
      >
        <el-option label="图片" value="picture"></el-option>
        <el-option label="视频" value="media"></el-option>
      </el-select>
      <el-button
        slot="append"
        icon="el-icon-search"
        style="background-color:#FE293F;color:white;font-size:16px;boder:none"
        @click="search"
      ></el-button>
    </el-input>
    
    <!-- 搜索显示 -->
    <!-- <div class="picture" v-for="(item,index) in items" :key="index">
      <a href="#" v-if="picture">
        <img :src="item.src" alt />
      </a>
      <a href="#" v-if="media">
        <video :src="item.src" controls="controls"></video>
      </a>
      <AddToCar :id="item.id" :type="item.type"></AddToCar>
    </div> -->
	<!-- 搜索图片显示 -->
	<RelatedImages :mydata='items' :title='title'></RelatedImages>
    <ShoppingCar></ShoppingCar>
  </div>
</template>


<script>
import RelatedImages from '../components/RelatedImages.vue'
import AddToCar from "../components/AddToCar.vue"
import ShoppingCar from "../components/ShoppingCar.vue"
export default {
  name: "SearchBar",
  components:{AddToCar,RelatedImages,ShoppingCar},
  data() {
    return {
      input1: "",
      select: "",
      currentDate: new Date(),
      items: [],
      picture: false,
      media: false,
	   title:{exhibition:false,text:''}
    };
  },
  created() {
    this.input1 = this.$route.params.keywords;
    this.select = this.$route.params.type;
    this.search();
  },
  methods: {
    search() {

      if (this.select == "media") {
        this.media = true;
        this.picture = false;
      }
      else if (this.select == "picture") {
        this.picture = true;
        this.media = false;
      }     
       if (this.input1 == "" || this.select == "") {
        if (this.select == "") {
          alert("请选择类别");
        } else if (this.input1 == "") {
          alert("请输入关键词");
        }
      }
       else {
        this.axios
          .get(
            `http://127.0.0.1:7001/search?type=${this.select}&keywords=${this.input1}`
          )
          .then(res => {
            this.items = res.data;
          });
      }
    }
  }
};
</script>

<style scoped>
.searchModel {
  margin: 15px auto;
  width: 80%;
}
.picture{
  position: relative;
}
.input-with-select{
  margin-top: 100px;
   margin-bottom: 60px;
}
</style>
