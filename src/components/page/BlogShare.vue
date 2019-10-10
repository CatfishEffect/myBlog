<template>
    <div>

      <h2>生活分享</h2>

      <div class="share">
        <!-- 图片分享 -->
        <div v-for="(item,index) in article" :key="index">
          <div>
            <img :src="$url+item.images" alt="item.content">
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
            article: []
          }
        },
        methods: {
          getdata() {
            this.$axios.get(this.$api.getShareData).then((result) => {
              console.log(result);
              this.article = result.data;
              console.log('article',this.article);
            }).catch((err) => {
              console.log(err);
            });
          }
        },
        created () {
          this.getdata();
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
