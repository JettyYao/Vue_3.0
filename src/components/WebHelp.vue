<template>
    <el-dialog :visible.sync="visible" @close="$emit('update:helpManual', false)" custom-class="helpManual" append-to-body width="700px">
        <p slot="title" style="text-transform:uppercase"><i class="fa fa-user-circle"></i> WebSite Help Manual</p>
        <div class="helpShow">
            <el-collapse v-model="activeName" accordion>
                <el-collapse-item title="滚动问题 RollingProblem" name="1">
                    <div>问题 Problem：开发时因部分原因未能完成自定义滚轮插件,故隐藏了滚动样式,实际上不影响使用.</div>
                    <div>解决方式：鼠标滚轮,键盘则使用上下方向键即可.</div>
                </el-collapse-item>
                <el-collapse-item title="内容问题 ContentProblem" name="2">
                    <div>问题 Problem：本站撰写的内容仅供学习、讨论,部分内容借鉴网络咨询,或存在版权等问题.</div>
                    <div>解决方式：如涉及版权或其他问题,请致信管理员,确认后将及时更正.</div>
                </el-collapse-item>
                <el-collapse-item title="账号问题 AccountProblem" name="3">
                    <div>问题 Problem：注册时问题综合答复.</div>
                    <div>解决方式：注册时会发送确认邮件,服务可能延时,若长时间未接收到,可在垃圾邮件中查看是否存在,上述情况皆无请联系管理员</div>
                </el-collapse-item>
                <el-collapse-item title="注销问题 CancelProblem" name="4">
                    <div>问题 Problem：遵守网络安全准则,本站将对发送恶意内容的账号实施封停措施.</div>
                    <div>解决方式：如非本人操作,可联系管理员进行说明解除封停措施.</div>
                </el-collapse-item>
            </el-collapse>
            <small><i class="el-icon-info"></i> 若有其他问题,请咨询管理员.</small>
        </div>
    </el-dialog>
</template>
<script>
export default {
  name: 'WebHelp',
  props: {
    helpManual: Boolean
  },
  data () {
    return {
      visible: this.helpManual,
      activeName: '1'
    }
  },
  methods: {
  },
  watch: {
    helpManual () {
      this.visible = this.helpManual
    }
  }
}
</script>
<style lang="scss">
.el-carousel__mask, .el-cascader-menu, .el-cascader-menu__item.is-disabled:hover, .el-collapse-item__header, .el-collapse-item__wrap{
    background-color: transparent !important;
}
.helpShow{
    .el-collapse{
        padding-left: 7px;
    }
    small{
        display: block;
        text-align: center;
        padding: 30px 0 10px;
    }
}
</style>
