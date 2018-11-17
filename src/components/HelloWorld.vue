<template>
    <div class="hello">
        <h1>请求测试</h1>
        <p>{{ msg }}</p>
        <img src="../assets/test.jpg" alt="">
    </div>
</template>

<script>
    export default {
        name: 'HelloWorld',
        data () {
            return {
                msg: ''
            }
        },
        created: function () {
            this.getDetail();
        },
        methods: {
            getDetail: function () {
                this.$ajax.post('/v1/getCouponDetail',JSON.stringify({sessionId:'a',type:'021001'})).then((res)=>{
                    console.log(res);
                    this.msg = res.data;
                })
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    img {
        width: 100%;
    }
    h1, h2 {
        font-weight: normal;
    }

    ul {
        list-style-type: none;
        padding: 0;
    }

    li {
        display: inline-block;
        margin: 0 10px;
    }

    a {
        color: #42b983;
    }
</style>
