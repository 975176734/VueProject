<template>
  <!-- 个人中心页 -->
  <div class="mybox">
    <!-- <button @click="test">点击打印用户名</button> -->
    <el-container>
      <!-- 头像部分 -->
      <el-header>
        <el-row :gutter="20">
          <el-col :span="16">
            <div class="grid-content bg-purple">
              <span style="float: left; width: 0;height: 0;">{{myid}}</span>

              <!-- 头像展示 -->
              <el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></el-avatar>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="grid-content bg-purple"></div>
          </el-col>
        </el-row>
      </el-header>
      <el-container>
        <!-- 侧边栏 -->
        <el-aside width="200px">
          <el-row class="tac">
            <el-col :span="12" class="aside_items">
              <el-menu
                default-active="2"
                class="el-menu-vertical-demo"
                @open="handleOpen"
                @close="handleClose"
              >
                <el-menu-item index="2" @click="myCollect">
                  <i class="el-icon-menu"></i>
                  <span slot="title">我的收藏</span>
                </el-menu-item>

                <el-menu-item index="4" @click="changePassword">
                  <i class="el-icon-setting"></i>
                  <span slot="title">修改密码</span>
                </el-menu-item>
              </el-menu>
            </el-col>
          </el-row>
        </el-aside>
        <el-container>
          <el-main>
            <!-- 点击切换组件 -->
            <component :is="subassembly"></component>
          </el-main>
          <!-- <el-footer>Footer</el-footer> -->
        </el-container>
      </el-container>
    </el-container>
	
	<BaseLink></BaseLink>
  </div>
</template>


<script>
import Mygoods from "./MycenterPage/Mygoods.vue";
import ChangePw from "./MycenterPage/ChangePw.vue";
import BaseLink from "@/components/BaseLink.vue"
export default {
  data() {
    return {
      subassembly: "Mygoods",
      myid: "username",
      imageUrl: ""
    };
  },
  // 获取登录用户的name然后给data
  created() {
    this.myid = this.$store.state.a.userName;
  },
  methods: {
    test() {
      console.log(this.$store.state.a.isLogin, this.$store.state.a.userName);
    },
    myCollect() {
      console.log(123);
      this.subassembly = "Mygoods";
    },
    changePassword() {
      console.log(456);
      this.subassembly = "ChangePw";
    }
  },
  components: {
    Mygoods,
    ChangePw,
	BaseLink
  }
};
</script>

<style scope="scope">
* {
  margin: 0;
}
.mybox {
position: relative;
	top:100px;
  width: 80%;
  height: 1000px;
  margin: auto;
  /* margin-top: 200px; */
}

/* 容器布局样式 */
.el-header {
  width: 100%;
  height: 20% !important;
}
.el-header,
.el-footer {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  line-height: 150px;
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
  height: 1000px;
  margin-bottom: 40px;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}
/* .el-col .el-col-12{
		  width: 100%;
	  } */
.aside_items {
  width: 100%;
  height: 100%;
}
.tac {
  height: 500px;
}
.el-menu-vertical-demo {
  height: 100%;
}
.el-menu-item {
  margin-top: 50px;
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

/* 头部分栏样式 */
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
  height: 200px;
}

/*头像部分样式*/
.el-avatar {
  /* position: relative;
		left: 0;
		top: 0; */
  float: left;
}
</style>