<template>
    <div>

      <h2>生活分享</h2>

      <div class="share">
        <!-- 图片分享 -->
        <div v-for="(item,index) in article" :key="index">
          <div>
            <img :src="item.image" alt="item.title">
          </div>
          <h5>{{item.title}}</h5>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "BlogShare",
        data(){
          return {
            article: [
              {
                id:1,
                title: '鬼刀漫画图-back2',
                image: './../../../static/image/back2.jpg'
              },
              {
                id:2,
                title: '鬼刀漫画图-cute',
                image: './../../../static/image/cute.jpg'
              },
              {
                id:3,
                title: '鬼刀漫画图-fly',
                image: './../../../static/image/fly.jpg'
              },
              {
                id:4,
                title: '鬼刀漫画图-lay',
                image: './../../../static/image/lay.png'
              },
              {
                id:5,
                title: '鬼刀漫画图-look',
                image: './../../../static/image/look.jpg'
              },
              {
                id:6,
                title: '鬼刀漫画图-shy2',
                image: './../../../static/image/shy2.jpg'
              },
              {
                id:7,
                title: '鬼刀漫画图-sleep',
                image: './../../../static/image/sleep.jpg'
              }
            ]
          }
        }
    }
</script>

<style scoped>
.share{
  display: flex;
  justify-content: space-between;
  flex-flow: row wrap;
}
.share>div{
  margin-top: 30px;
  width: 30%;
  border-radius: 5px;
  overflow: hidden;
  background-color: #fff;
  box-shadow: 0 3px 3px #f1f1f1;
  cursor: pointer;
  transition: all linear .5s;
}
.share>div>div{
  height: 100px;
  overflow: hidden;
}
.share>div>div>img{
  width: 100%;
  height: auto;
  vertical-align: middle;
}

.share h5{
  font-size: 14px;
  color: #666;
  margin-top: 5px;
  padding: 5px 0;
}
.share>div:hover{
  transform: translateY(-20px);
}
</style>
