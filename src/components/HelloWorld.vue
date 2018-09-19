<template>
  <div class="hello" :class="percent === 100 ? 'leftAni' : ''">
      <div>
        <div style="padding-bottom: 40px">
          <h1>Just For Easy Reading</h1>
          <p>简单读, 简单学, 知识并没有那么复杂.</p>
        </div>
          <el-progress :show-text=false :stroke-width="14" :percentage="percent" color="#444"></el-progress>
      </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data () {
    return {
      percent: 0
    }
  },
  methods: {
    perAni: function () {
      let add = setInterval(() => {
        this.percent += 2
        if (this.percent === 100) {
          clearInterval(add)
        }
      }, 60)
    }
  },
  mounted: function () {
    this.perAni()
  },
  watch: {
    percent: function (newQuestion, oldQuestion) {
      return this.oldQuestion
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.hello{
  width: 100%;
  height: 100%;
  position: relative;
  z-index: 99;
  background-color: #fefefe;
  >div{
    width: 100%;
    text-align: center;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    color: #444;
    h1{
      font-size: 40px;
      font-weight: bolder;
      padding-bottom: 10px;
      text-transform: uppercase;
      &:after{
        content: '@';
        font-size: 16px;
        vertical-align: text-top;
        font-weight: bolder;
      }
    }
  }
}
.leftAni{
  opacity: 0;
  z-index: 1 !important;
  transition: all 2s;
}
</style>
<style lang="scss">
.hello{
  .el-progress-bar__inner,.el-progress-bar__outer{
    border-radius: 0 !important;
  }
}
</style>
