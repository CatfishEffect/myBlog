<template>
    <div align="left">
        <header class="header" >
            <img src="" alt="">
            <h2>{{personalInfo.name}}</h2>
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
                    <span>{{personalInfo.mobile}}</span>
                </div>
                <div>
                    <svg class="icon" aria-hidden="true">
                        <use xlink:href="#icon-qq"></use>
                    </svg>
                    <span>{{personalInfo.QQ}}</span>
                </div>
                <div>
                    <svg class="icon" aria-hidden="true">
                        <use xlink:href="#icon-weixin"></use>
                    </svg>
                    <span>{{personalInfo.weChat}}</span>
                </div>
                <div>
                    <svg class="icon" aria-hidden="true">
                        <use xlink:href="#icon-tubiao209"></use>
                    </svg>
                    <span>{{personalInfo.email}}</span>
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
                <span>{{educationList.school}}</span>
                <span>{{educationList.profession}}</span>
                <span>{{educationList.education}}</span>
                <span>{{educationList.admissionTime}}</span>
                <span>{{educationList.graduationTime}}</span>

            </div>
        </section>
         <div class="line"></div>
        <section class="aboutMe">
            <!-- workExperience -->
            <h3>
                <span>工作经历</span>
                <span>Work Experience</span>
            </h3>
            <div class="workExperienceContent" v-for="(item,index) in data" :key="index">
               <div>
                  <div>
                    <span>{{item.companyName}}</span>
                    <span>{{item.entryTime}} ~ {{item.separationTime}}</span>
                    <span>{{item.department}}</span>
                  </div>
                  <p>
                    {{item.detailsIntroduction}}
                  </p>
               </div>
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
                    <li v-for="item in workingAbility" :key="item.id">
                        <svg class="icon" aria-hidden="true">
                            <use xlink:href="#icon-jian"></use>
                        </svg>
                        <span>{{item}}</span>
                    </li>
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
                data: '',
                personalInfo: '',
                educationList: '',
                workingAbility: []
            }
        },
        methods: {
          getData() {
            this.$axios.get(this.$api.getAboutData).then((result) => {
              console.log(result);
              if(result.data){

                this.personalInfo = result.data;
                this.data = result.data.company;
                this.workingAbility = result.data.skills;
                if ( result.data.evaluation_content ) {
                  this.educationList = result.data.evaluation_content;
                }
              }



            }).catch((err) => {
              console.log(err);

            });
          }
        },
        created() {
          this.getData();
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

.workExperienceContent p{
  margin-top: 20px;
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
    margin-top: 15px;
    margin-left: 30px;
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
