<template>
  <div class="atlas">
    <div class="Picture">
      <p class="atlas-title">灵感图集</p>
      <!-- 图片灵感 组件 -->
      <div class="list">
        <div
          class="pic_item"
          v-for="(item,index) in mydata"
          :key="index"
          :style="{backgroundImage: 'url(' + item.bag + ')'}"
        >
          <a href="#">
            <div class="tag">
              <img src="../assets/Picture.png" />
              <!-- <img :src="item.imgsrc"> -->
              <span>{{item.type}}</span>
            </div>
            <div class="text">{{item.describe}}</div>
          </a>
        </div>
        <!-- 插画灵感 -->
        <div class="list">
          <div
            class="pic_item"
            v-for="(item,index) in mydata2"
            :key="index"
            :style="{backgroundImage: 'url(' + item.bag + ')'}"
          >
            <a href="#">
              <div class="tag2">
                <img src="../assets/Illustration.png" />
                <span>{{item.type}}</span>
              </div>
              <div class="text">{{item.describe}}</div>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      mydata: [
        {
          imgsrc: "../../assets/Picture.png",
          type: "图片",
          describe: "凉凉夏日",
          bag:
            "https://q-extra.paixin.com/admin/1587634950040.png?imageMogr2/sharpen/1|imageView2/2/interlace/1/w/400/h/400|imageslim"
        },
        {
          imgsrc: "../../assets/Picture.png",
          type: "图片",
          describe: "夏日时光-视频",
          bag:
            "https://q-extra.paixin.com/admin/1582249391367.png?imageMogr2/sharpen/1|imageView2/2/interlace/1/w/400/h/400|imageslim"
        },
        {
          imgsrc: "../../assets/Picture.png",
          type: "图片",
          describe: "夏日-矢量",
          bag:
            "https://images.gaga.me/images/2019/0516/f555cdd23af20cb4.jpg?imageMogr2/sharpen/1|imageView2/2/interlace/1/w/400/h/400|imageslim"
        },
        {
          imgsrc: "../../assets/Picture.png",
          type: "图片",
          describe: "母亲节",
          bag:
            "http://images.gaga.me/insets/2018/0510/c7b5af3a6b461f96.jpg?imageMogr2/sharpen/1|imageView2/2/interlace/1/w/400/h/400|imageslim"
        },
        {
          imgsrc: "../../assets/Picture.png",
          type: "图片",
          describe: "中国武汉",
          bag:
            "http://images.gaga.me/images/2018/0206/e8e5a7917426d8e7.jpg?imageMogr2/sharpen/1|imageView2/2/interlace/1/w/400/h/400|imageslim"
        }
      ],
      mydata2: [
        {
          imgsrc: "../../assets/Illustration.png",
          type: "插画",
          describe: "凉凉夏日",
          bag:
            "https://images.gaga.me/images/2019/0408/fe15caae91901aab.jpg?imageMogr2/sharpen/1|imageView2/2/interlace/1/w/400/h/400|imageslim"
        },
        {
          imgsrc: "../../assets/Illustration.png",
          type: "插画",
          describe: "夏日时光-视频",
          bag:
            "https://images.gaga.me/images/2019/0806/8045d48dc95e18f9.jpg?imageMogr2/sharpen/1|imageView2/2/interlace/1/w/400/h/400|imageslim"
        },
        {
          imgsrc: "../../assets/Illustration.png",
          type: "插画",
          describe: "夏日-矢量",
          bag:
            "http://res.gaga.me/upload/images/2017/0922/41859c4b207e3d35.jpg?imageMogr2/sharpen/1|imageView2/2/interlace/1/w/400/h/400|imageslim"
        },
        {
          imgsrc: "../../assets/Illustration.png",
          type: "插画",
          describe: "母亲节",
          bag:
            "http://res.gaga.me/upload/images/2017/1020/06a59e96c48cc5a7.jpg?imageMogr2/sharpen/1|imageView2/2/interlace/1/w/400/h/400|imageslim"
        },
        {
          imgsrc: "../../assets/Illustration.png",
          type: "插画",
          describe: "中国武汉",
          bag:
            "http://res.gaga.me/upload/images/2017/0922/65359c4b2363bd9d.jpg?imageMogr2/sharpen/1|imageView2/2/interlace/1/w/400/h/400|imageslim"
        }
      ]
    };
  }
};
</script>
<style scoped>
.atlas {
  position: relative;
  top: 50px;
  margin-bottom: 250px;
}
.Picture {
  width: 1200px;
  height: 200px;
  margin: 0 auto;
}

.list {
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  padding-bottom: 10px;
}
.pic_item {
  width: 234px;
  height: 118px;
  -webkit-transition: all 0.2s ease-in-out;
  transition: all 0.2s ease-in-out;
  background-size: 100%;
  background-position: center;
  background-repeat: no-repeat;
  background-image: url("https://images.gaga.me/images/2019/0628/a2c5d1578981902c.jpg?imageMogr2/sharpen/1|imageView2/2/interlace/1/w/400/h/400|imageslim");
  margin-bottom: 10px;
}

.pic_item:hover {
  background-size: 110%;
}

.text {
  font-size: 22px;
  color: #fff;
  text-align: center;
  line-height: 130px;
}

.tag {
  width: 66px;
  height: 26px;
  background-color: #ff738b;
  border-radius: 0px 0px 14px 0px;
  font-size: 14px;
  font-weight: 600;
  color: white;
  line-height: 26px;
}
.tag2 {
  width: 66px;
  height: 26px;
  background-color: #e659d6;
  border-radius: 0px 0px 14px 0px;
  font-size: 14px;
  font-weight: 600;
  color: white;
  line-height: 26px;
}
.tag img {
  width: 19px;
  height: 16px;
  margin: -4px 5px;
}

.tag span {
  font-size: 7px;
}
.tag2 img {
  width: 19px;
  height: 16px;
  margin: -4px 5px;
}

.tag2 span {
  font-size: 7px;
}
a {
  text-decoration: none;
}
.atlas-title {
  font-size: 24px;
  font-weight: 600;
  color: #333;
  line-height: 33px;
  padding-bottom: 20px;
}
</style>