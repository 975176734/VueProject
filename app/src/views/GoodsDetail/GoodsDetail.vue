<template>
  <div class="mybox">
    <el-container>
      <el-header>
        <el-row>
          <el-col :span="12">
            <div class="grid-content bg-purple">{{goodsInfo.name}}</div>
          </el-col>
          <el-col :span="12">
            <div class="grid-content bg-purple-light">该商品可用于个人用途/商家版权</div>
          </el-col>
        </el-row>
      </el-header>
      <el-container>
        <el-aside width="50%">
          <!-- <img :src='goodsInfo.src'> -->
          <!-- 图片展示 -->
          <div class="demo-image__preview">
            <el-image style="width: 100%; height: 300px" :src=goodsInfo.src></el-image>
          </div>
          <p class="left_items">图片描述:{{goodsInfo.describes}}</p>
          <p class="left_items">关键字:{{goodsInfo.keywords}}</p>
        </el-aside>
        <el-main>
          <p>价格:{{goodsInfo.price}}</p>
          <button>点击购买</button>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      goodsInfo: "",
      url: "",
      srcList: ["", ""]
    };
  },
  props: ["mygoodsInfo"],
  created() {
    // console.log(this.mygoodsInfo,666666)
    this.goodsInfo = this.mygoodsInfo; //父组件传值给子组件并绑定DATA
  },
  watch: {
    mygoodsInfo: function(newVal, oldVal) {
      //不能用箭头函数
	  this.goodsInfo = newVal;
    }
  }
};
</script>

<style>
.mybox {
  width: 70%;
  margin: auto;
}

/*容器布局*/
.el-header,
.el-footer {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  line-height: 60px;
}

.el-aside {
  background-color: #d3dce6;
  color: #333;
  text-align: center;
  line-height: 200px;
}

.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  line-height: 160px;
}

.el-container {
  margin-bottom: 40px;
  width: 100%;
  height: 650px;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}

.el-row {
  margin-bottom: 20px;
  &:last-child {
    margin-bottom: 0;
  }
}
.el-col {
  border-radius: 4px;
}
.bg-purple-dark {
  background: #99a9bf;
}
.bg-purple {
  background: #d3dce6;
}
.bg-purple-light {
  background: #e5e9f2;
}
.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}
.left_items {
  padding: 0;
  width: 100%;
  height: 40px;
}

/*头部分栏*/
.el-row {
  margin-bottom: 20px;
  &:last-child {
    margin-bottom: 0;
  }
}
.el-col {
  border-radius: 4px;
}
.bg-purple-dark {
  background: #99a9bf;
}
.bg-purple {
  background: #d3dce6;
}
.bg-purple-light {
  background: #e5e9f2;
}
.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}
.grid-content {
  height: 60px;
}
</style>
