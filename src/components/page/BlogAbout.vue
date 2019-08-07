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
            <div class="content">
                <div>
                    <svg class="icon" aria-hidden="true">
                        <use xlink:href="#icon-dianhua"></use>
                    </svg>
                    <span>173-6487-1109</span>
                </div>
                <div>
                    <svg class="icon" aria-hidden="true">
                        <use xlink:href="#icon-qq"></use>
                    </svg>
                    <span>346519079</span>
                </div>
                <div>
                    <svg class="icon" aria-hidden="true">
                        <use xlink:href="#icon-weixin"></use>
                    </svg>
                    <span>Butterfly-1995lj</span>
                </div>
                <div>
                    <svg class="icon" aria-hidden="true">
                        <use xlink:href="#icon-tubiao209"></use>
                    </svg>
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
            <!-- workExperience -->
            <h3>
                <span>工作经历</span>       
                <span>Work Experience</span>
            </h3>
            <div class="workExperienceContent">
                <div>
                    <span>{{personalInfo.companyName}}</span>
                    <span>{{personalInfo.workDate}}</span>
                    <span>{{personalInfo.position}}</span>
                </div>
                <p>
                    我所任职的是杭州惊叹号科技有限公司的开发部，进入公司参与公司的宠物平台项目，负责顾客模块的开发工作，后续又参与完成了该项目的微信小程序版本的开发
                </p>
            </div>
        </section>
        <div class="line"></div>
        <section class="aboutMe">
            <h3>
                <span>个人技能</span>       
                <span>Personal Skills</span>
            </h3>
            <div class="skillsContent">
                <ul>
                    <li v-for="item in workingAbility" :key="item.id">{{item.skill}}</li>
                </ul>
            </div>
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
        name: "BlogAbout",
        data () {
            return {
                personalInfo: {
                    workDate: '2018-11~2019-11',
                    companyName: '成都百佳联科技有限公司',
                    position: '前端工程师'
                },
                workingAbility: [
                    {
                        id: 1,
                        skill: '熟练掌握HTML5，CSS3（flex布局）和JavaScript，熟悉ES6'
                    },
                    {
                        id: 2,
                        skill: '可以使用Vue完成项目，了解react'
                    },
                    {
                        id: 3,
                        skill: '熟悉微信小程序开发'
                    },
                    {
                        id: 4,
                        skill: '熟练使用JQuery和Bootstrap进行响应式开发'
                    },
                    {
                        id: 5,
                        skill: '熟悉Ajax数据交互，完成页面数据异步请求'
                    },
                    {
                        id: 6,
                        skill: '熟练使用Element-UI，Muse-UI等UI框架和Echarts等插件'
                    },
                    {
                        id: 7,
                        skill: '熟悉nodejs（能使用express搭建web服务）'
                    },
                    {
                        id: 8,
                        skill: '熟练使用Git版本控制工具，Gulp自动化构建工具'
                    }
                ]
            }
        }
    }
</script>

<style scoped>
.icon{
    color: rgb(69, 182, 144);
    font-size: 1.5em;
    vertical-align: middle;
    margin-right: 15px;
}

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

.content>div{
    width: 40%;
    margin-top: 20px;
    margin-left: 30px;
}

.workExperienceContent>div{
    margin: 20px 0;
}

.workExperienceContent span:first-child{
    border-right: 1px solid #999;
    padding-right: 20px;
    font-size: 16px;
    color: #333;
}
.workExperienceContent span:nth-child(2){
    padding: 0 20px;
}
.workExperienceContent span:last-child{
    border-left: 1px solid #999;
    padding-left: 20px;
    font-size: 16px;
    color: #999;
}
.skillsContent>ul{
    margin: 20px 0;
}
.skillsContent li{
    margin-top: 5px;
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