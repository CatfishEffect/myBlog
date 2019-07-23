<template>
    <div id="app">

        <header></header>
        <section class="content">
            <aside>
                <BlogAside></BlogAside>
            </aside>
            <main>
                <router-view/>
            </main>
        </section>
    </div>
</template>

<script>

    //组件懒加载
    const BlogAside =()=>import('./components/structure/BlogAside');
    const BlogMain =()=>import('./components/structure/BlogMain');
    const BlogHeader =()=>import('./components/structure/BlogHeader');
    const BlogFooter =()=>import('./components/structure/BlogFooter');

    export default {
        name: 'App',
        components: {
            BlogAside,
            BlogMain,
            BlogHeader,
            BlogFooter
        }
    }
</script>

<style>
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
       
    }
    /*公共样式--开始*/
    html, body, div, ul, li, h1, h2, h3, h4, h5, h6, p, dl, dt, dd, ol, form, input, textarea, th, td, select {
        margin: 0;
        padding: 0;
    }
    *{box-sizing: border-box;}
    html, body {
        width: 100%;
        height: 100vh;
    }

    body {
        font-family: "Microsoft YaHei",serif;
        font-size:14px;
        color:#333;
        background-color: #f5f5f5;
    }
    h1, h2, h3, h4, h5, h6{font-weight:normal;}
    ul,ol {
        list-style: none;
    }

    img {
        border: none;
        vertical-align: middle;
    }

    a {
        text-decoration: none;
        color: #232323;
    }

    table {
        border-collapse: collapse;
        table-layout: fixed;
    }

    input, textarea {
        outline: none;
        border: none;
    }

    textarea {
        resize: none;
        overflow: auto;
    }
    .content{
        display: flex;
        flex-flow: row nowrap;
    }
    .content>aside{
        width: 300px;
    }
    .content>main{
        width: calc( 100% - 300px );
    }
</style>
