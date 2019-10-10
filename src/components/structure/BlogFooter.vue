<template>
    <div class="my-footer">
        <div>
            <div>
                <h5>设计师-<svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-weixin"></use>
                </svg>李倩友情赞助</h5>
                <h6>
                    <span>版权归</span>
                    <a href="https://github.com/Butterflypig">
                        <svg class="icon" aria-hidden="true">
                            <use xlink:href="#icon-github"></use>
                        </svg>
                        李静
                    </a>
                    所有
                </h6>
            </div>
            <div>
                <img src="./../../../static/avatar/designer.jpg" alt="">
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "BlogFooter"
    }
</script>

<style scoped>
    .my-footer{
        width: 100%;
        background-color: #fff;
        margin-top: 30px;
    }
    .my-footer>div{
        margin: 0 auto;
        width: 400px;
        height: 300px;
        display: flex;
        justify-content: space-around;
    }
    .my-footer>div>div{
        vertical-align: center;
        margin-top: 103px;
    }
    .my-footer h5{
        margin-top: 25px;
    }
    .my-footer h6{
        margin-top: 20px;
    }
    .my-footer a{
        text-decoration: underline;
    }
</style>