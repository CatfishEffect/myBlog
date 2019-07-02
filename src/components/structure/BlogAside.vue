<template>
    <div>
        <h3>菜单</h3>
        <div>
            <div v-for="(item,index) in menuList" :key="index" @click="routerLinkTo(item.routePath)">{{item.name}}</div>
        </div>
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
                        routePath: '/'
                    },
                    {
                        id: 2,
                        name: '文集',
                        routePath: '/article'
                    },
                    {
                        id: 3,
                        name: '分享',
                        routePath: '/share'
                    },
                    {
                        id: 4,
                        name: '关于',
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

</style>