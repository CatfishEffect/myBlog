<template>
    <div class="article" align="left">
        <article v-for="item in articleList" :key="item.id">

            <!-- 文章标题 -->
            <header>
                <h3>{{item.title}}</h3>
                <em>{{item.date}}</em>
            </header>

            <!-- 文章内容 -->
            <p>
                {{item.content}}
            </p>

            <!-- 分割线 -->
            <div class="line"></div>

            <!-- 文章底部功能 -->
            <footer>
                <div>转发</div>
                <div>喜欢</div>
                <div>评论</div>
            </footer>
        </article>
    </div>
</template>

<script>
    export default {
        name: "BlogArticle",
        data() {
            return {
                articleList: [
                    {
                        id: 1,
                        title: '如何成为全栈工程师',
                        date: '2019-7-23',
                        content: '全栈工程师，也叫全端工程师，英文Full Stack developer，是指掌握多种技能，并能利用多种技能独立完成产品的人。'
                    },
                    {
                        id: 2,
                        title: '如何成为全栈工程师',
                        date: '2019-7-23',
                        content: '全栈工程师，也叫全端工程师，英文Full Stack developer，是指掌握多种技能，并能利用多种技能独立完成产品的人。'
                    },
                    {
                        id: 3,
                        title: '如何成为全栈工程师',
                        date: '2019-7-23',
                        content: '全栈工程师，也叫全端工程师，英文Full Stack developer，是指掌握多种技能，并能利用多种技能独立完成产品的人。'
                    },
                    {
                        id: 4,
                        title: '如何成为全栈工程师',
                        date: '2019-7-23',
                        content: '全栈工程师，也叫全端工程师，英文Full Stack developer，是指掌握多种技能，并能利用多种技能独立完成产品的人。'
                    },
                ]
            }
        }
    }
</script>

<style scoped>
    .article>article{
        max-width: 1000px;
        margin-top: 20px; 
        border: 1px solid gray;
        background-color: #fff;
        box-sizing: border-box;
        padding: 30px 30px 30px 50px;

    }
    .article h3{
        display: inline-block;
        margin-right: 30px;
    }
    .article p,.article footer{
        margin-top: 30px;
    }
    .article footer{
        display: flex;
        flex-flow: row-reverse nowrap;

    }
    .article footer>div{
        margin-left: 15px;
        padding-left: 15px;
        border-left: 1px solid gray;
    }
    .article footer>div:last-child{
        border-left: none;
    }
</style>