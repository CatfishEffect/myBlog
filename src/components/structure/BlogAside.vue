<template>
    <div class="blogAside">
        <div class="info">
          <div >
            <img src="./../../../static/butterflypig.jpg" alt="">
          </div>
          <h4>Li Jing's blog</h4>
        </div>
        <menu class="menuList">
            <div align="left" v-for="(item,index) in menuList" :key="index" @click="routerLinkTo(item.routePath)">
              <svg class="icon" aria-hidden="true">
                <use :xlink:href="item.iconName"></use>
              </svg>
              <a href="#">{{item.name}}</a>
            </div>
        </menu>

    </div>
</template>

<script>
    export default {
        name: "BlogAside",
        data (){
            return {
                menuList:[
                    {
                        id: 1,
                        name: '首页',
                        iconName: '#icon-wxbzhuye',
                        routePath: '/'
                    },
                    {
                        id: 2,
                        name: '文集',
                        iconName: '#icon-wenzhang',
                        routePath: '/article'
                    },
                    {
                        id: 3,
                        name: '分享',
                        iconName: '#icon-zuopin',
                        routePath: '/share'
                    },
                    {
                        id: 4,
                        name: '关于',
                        iconName: '#icon-account',
                        routePath: '/about'
                    },
                ]
            }
        },
        methods:{
            routerLinkTo ( path ){
                console.log('跳转:',path);
                this.$router.push({
                    path: path
                })
            }
        }
    }
</script>

<style scoped>
  .info{
    background-color: #333;
    padding: 30px 0;
  }

  .info>div{
    width: 100px;
    height: 100px;
    margin: 0 auto;
    border-radius: 50%;
    overflow: hidden;
  }

 .info>div>img{
    width: 100%;
    height: auto;
  }
  .info h4{
    color: white;
    margin-top: 20px;
    font-size: 20px;
  }

 /* 图标样式 */
  .icon {
    color: #333;
  }


  .blogAside{
    background-color: #fff;
    box-shadow: 0 2px 2px rgba(0,0,0,.3);

  }

  .menuList{
    padding: 50px 0;
  }
  .menuList>div{
    padding: 10px 0;
    transition: all .3s ease-in-out;
    padding-left: 20px;
  }
  .menuList>div:hover{
    background-color: #F1f2f4;
  }
  .menuList a{
    color: #333;
    font-size: 16px;
    margin-left: 20px;
  }
</style>
