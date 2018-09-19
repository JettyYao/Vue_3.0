<template>
    <el-dialog :visible.sync="visible" @close="$emit('update:mailBox', false)" custom-class="MailBox" append-to-body width="700px">
        <el-dialog width="700px" :visible.sync="innerMail" append-to-body custom-class="SendBox" @close="resetForm('mailContent')">
            <p slot="title" style="text-transform:uppercase"><i class="el-icon-message"></i> Send Mail Here</p>
            <div class="postMail">
                <el-form :model="mailContent" ref="mailContent" :rules="rules" label-width="135px">
                    <el-form-item label="用户昵称" prop="name">
                        <el-input v-model="mailContent.name"></el-input>
                    </el-form-item>
                    <el-form-item label="用户邮箱" prop="email">
                        <el-input v-model="mailContent.email"></el-input>
                    </el-form-item>
                    <el-form-item label="Message Content" prop="content">
                        <el-input type="textarea" v-model="mailContent.content" maxlength=300 rows=7 class="mailText"></el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-button size="small" class="submitButton">立即创建</el-button>
                        <el-button size="small" class="resetButton" @click="resetForm('mailContent')">重置</el-button>
                        <p class="Local"><i class="el-icon-location"></i> Shanghai . china</p>
                    </el-form-item>
                </el-form>
            </div>
        </el-dialog>
        <p slot="title" style="text-transform:uppercase"><i class="el-icon-message"></i> Mail Control</p>
        <div class="mailList">
            <p class="modularTitle">Message From Website ( Newest 3 mails )</p>
            <div class="mailShow">
                <el-collapse accordion v-model="activeMail">
                    <el-collapse-item name="1">
                        <p slot="title">Accept At：<span style="text-transform:uppercase">{{mailFirstData.date}}</span></p>
                        <div>与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；</div>
                        <div>在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。</div>
                    </el-collapse-item>
                    <el-collapse-item v-for="(item,index) in mailData" :key="index">
                        <p slot="title">Accept At：<span style="text-transform:uppercase">July 15 2018</span></p>
                        <div>与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；</div>
                        <div>在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。</div>
                    </el-collapse-item>
                </el-collapse>
            </div>
        </div>
        <div class="sendMail">
            <span @click="innerMail = true"><i class="fa fa-plus"></i> Send Email</span>
        </div>
    </el-dialog>
</template>
<script>
export default {
  name: 'MailBox',
  props: {
    mailBox: Boolean
  },
  data () {
    return {
      visible: this.mailBox,
      innerMail: false,
      mailFirstData: { date: 'July 15 2018' },
      mailData: ['1', '2'],
      activeMail: '1',
      mailContent: {
        name: '',
        email: '',
        content: ''
      },
      rules: {
        name: [{ required: true, message: '请输入用户昵称', trigger: 'blur' }],
        email: [{ required: true, message: '请输入用户邮箱', trigger: 'blur' }],
        content: [{ required: true, message: '请输入发送内容', trigger: 'blur' }]
      }
    }
  },
  methods: {
    resetForm (formName) {
      this.$refs[formName].resetFields()
    }
  },
  watch: {
    mailBox () {
      this.visible = this.mailBox
    }
  }
}
</script>
<style lang="scss" scoped>
.MailBox{
    background-color: #fafafa;
    .mailList{
        .modularTitle{
            font-size: 15px;
            padding-bottom: 7px;
            color: #aaa;
        }
        .mailShow{
            background-color: #fafafa;
            padding: 10px 10px 10px 3px;
        }
    }
    .sendMail{
        padding-right: 10px;
        span{
            margin: 15px 0;
            display: block;
            line-height: 100px;
            text-align: center;
            border: 1px solid #9a9a9a;
            color: #9a9a9a;
            cursor: pointer;
            i{
                padding-right: 10px;
            }
            &:hover{
                border-color: #acacac;
                color: #acacac;
            }
        }
    }
}
.SendBox{
    .postMail{
        padding-right: 10px;
    }
}
</style>
<style lang="scss">
.MailBox{
    padding-left: 5px !important;
}
.mailShow{
    .el-carousel__mask, .el-cascader-menu, .el-cascader-menu__item.is-disabled:hover, .el-collapse-item__header, .el-collapse-item__wrap{
        background-color: #fafafa;
    }
}
.mailText{
    textarea{
        resize: none !important;
        padding-top: 8px;
    }
}
.SendBox{
    .el-dialog__body{
        padding: 20px !important;
    }
}
</style>
