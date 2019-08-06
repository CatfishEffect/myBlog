<template>
    <div id="app">
        <div>
          <header></header>
          <section class="content">
              <aside>
                  <BlogAside></BlogAside>
              </aside>
              <main>
                  <transition name="fade" mode="out-in">
                    <router-view/>  
                  </transition>
              </main>
          </section>
        </div>
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

<style scoped>
    .fade-enter-active, .fade-leave-active {
        transition: all .3s linear;
    }
    #app{
      width: 100%;
      height: 100%;

    }
    #app>div{
      margin: 0 auto;
      width: 1000px;
    }

    .content{
      margin-top: 20px;
      width: 100%;
      display: flex;
      flex-flow: row nowrap;
    }
    .content>aside{
      width: 250px;
    }
    .content>main{
      margin-left: 20px;
      width: calc( 100% - 270px );
    }
</style>

<style>
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
    }
    /*公共样式--开始*/
    html, body,menu, div, ul, li, h1, h2, h3, h4, h5, h6, p, dl, dt, dd, ol, form, input, textarea, th, td, select {
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

    /*  */
    .icon{
      width: 1.2em;
      height: 1.2em;
      vertical-align: -0.15em;
      fill: currentColor;
      overflow: hidden;
    }
</style>
