<template>
    <div align="left">
        <header class="header" >
            <img src="" alt="">
            <h2>李静</h2>
            <div>
                <span>web前端</span>
                <span>| 24岁</span>
                <span>| 2年工作经验</span>
            </div>
        </header>
        <section class="aboutMe">
            <h3>
                <span>关于我</span>       
                <span>About Me</span>
            </h3>
            <div>
                <div>
                    <img src="" alt="">
                    <span>173-6487-1109</span>
                </div>
                <div>
                    <img src="" alt="">
                    <span>346519079</span>
                </div>
                <div>
                    <img src="" alt="">
                    <span>Butterfly-1995lj</span>
                </div>
                <div>
                    <img src="" alt="">
                    <span>346519079@qq.com</span>
                </div>
            </div>
        </section>
        <div class="line"></div>
        <section class="aboutMe">
            <h3>
                <span>教育信息</span>       
                <span>Educational Information</span>
            </h3>
            <div>
                <span></span>
                <span>本科</span>

            </div>
        </section>
         <div class="line"></div>
        <section class="aboutMe">
            <h3>
                <span>工作经历</span>       
                <span>Work Experience</span>
            </h3>
            <div>

            </div>
        </section>
        <div class="line"></div>
        <section class="aboutMe">
            <h3>
                <span>个人技能</span>       
                <span>Personal Skills</span>
            </h3>
            <div></div>
        </section>

        <div class="line"></div>
        <section class="aboutMe">
            <h3>
                <span>项目经验</span>       
                <span>Work Experience</span>
            </h3>
        </section>
        <div class="line"></div>
        <section class="aboutMe">
            <h3>
                <span>自我评价</span>       
                <span>Self-Evaluation</span>
            </h3>
        </section>
    </div>
</template>

<script>
    export default {
        name: "BlogAbout"
    }
</script>

<style scoped>
.header{
    color: white;
    height: 300px;
    width: 100%;
    background-color: rgb(69, 182, 144);
}
.header>h2{
    margin-top: 100px;
}
 
.header>h2,.header>div{
    margin-left: 70%;
}
.aboutMe{
    padding: 30px;
}
.aboutMe>h3>span:first-child{
    color: rgb(69, 182, 144);
    margin-right: 30px;
}
.aboutMe>h3>span:last-child,.aboutMe>div{
    font-size: 14px;
    color: #999;
}

.aboutMe>div{
    display: flex;
    flex-flow: row wrap;
}
.aboutMe>div div{
    margin-top: 20px;
    margin-left: 30px;
    width: 40%;
}

section{
    background-color: #fff;
}

.line{
    width: 100%;
    height: 1px;
    background-color: rgba(211, 211, 211, .3);
}
</style>