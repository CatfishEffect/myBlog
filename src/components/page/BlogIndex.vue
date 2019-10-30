<template>
    <div>
        <section>
          <div></div>
          <div class="content-bar">
            <div>
              <span>文集</span>
            </div>
            <div>
              <span>分享</span>
            </div>
            <div>
              <span>关于</span>
            </div>
          </div>
        </section>
    </div>
</template>

<script>
    export default {
      name: "BlogIndex"
    }
</script>

<style scoped>
section{
  display: flex;
  flex-flow: row nowrap;
}
section>div:first-child{
  width: 300px;
  height: 400px;
  background-color: rgb(255, 127, 206);
}
.content-bar{
  width: calc( 100% - 300px );
  display: flex;
  flex-flow: row wrap;
  color: white;
}
.content-bar>div{
  width: 50%;
  height: 200px;
  line-height: 200px;
}
.content-bar>div:first-child{
  width: 100%;
  background-color: #09a7f7;
}
.content-bar>div:nth-child(2){
  background-color: #b61659;
}
.content-bar>div:last-child{
  background-color: #800000;
}
</style>
