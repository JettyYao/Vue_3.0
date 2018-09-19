<template>
    <el-dialog :visible.sync="visible" @close="$emit('update:userData', false)" custom-class="UserData" append-to-body width="700px">
        <el-dialog width="700px" :visible.sync="EditBox" append-to-body custom-class="editBox" @close="resetForm('editBox')">
            <p slot="title" style="text-transform:uppercase"><i class="el-icon-edit"></i> Edit Personal Data</p>
            <div class="postUser">
                <el-form :model="editBox" ref="editBox" :rules="rules" label-width="135px">
                    <el-form-item label="用户昵称" prop="name">
                        <el-input v-model="editBox.name"></el-input>
                    </el-form-item>
                    <el-form-item label="User Description" prop="desc">
                        <el-input type="textarea" v-model="editBox.desc" maxlength=300 rows=7 class="userText"></el-input>
                    </el-form-item>
                    <el-form-item>
                        <div><small>如果想要更换登陆邮箱,为保证安全,请与管理员取得联系 ...</small></div>
                        <el-button size="small" class="submitButton">更新信息</el-button>
                        <el-button size="small" class="resetButton" @click="resetForm('editBox')">重置</el-button>
                        <p class="userLocal"><i class="el-icon-location"></i> Shanghai . china</p>
                    </el-form-item>
                </el-form>
            </div>
        </el-dialog>
        <p slot="title" style="text-transform:uppercase"><i class="fa fa-user-circle"></i> User Control</p>
        <div class="userShow">
            <el-row>
                <el-col :span="9">
                    <div class="UserIcon">
                        <span class="fa fa-stack-overflow"></span>
                    </div>
                    <div class="UserEditButton">
                        <span class="editButton" @click="EditBox=true"><i class="fa fa-edit"></i> Edit Personal Data</span>
                    </div>
                </el-col>
                <el-col :span="15">
                    <div class="userDetail">
                        <div>
                            <h3>User Register Mail</h3>
                            <p>yao1508728331@gmail.com</p>
                        </div>
                        <div>
                            <h3>User Display Name</h3>
                            <p>Jetty Smith (Created: Sept 18 2018)</p>
                        </div>
                        <div>
                            <h3>User's Descrption</h3>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus, hic ullam aliquid voluptatum natus recusandae architecto, velit minima adipisci nisi quae necessitatibus beatae deserunt cum quia? Cupiditate a ipsum repellat.</p>
                        </div>
                    </div>
                </el-col>
            </el-row>
        </div>
    </el-dialog>
</template>
<script>
export default {
  name: 'UserData',
  props: {
    userData: Boolean
  },
  data () {
    return {
      visible: this.userData,
      EditBox: false,
      editBox: {
        name: '',
        desc: ''
      },
      rules: {
        name: [{ required: true, message: '用户昵称不能为空', trigger: 'blur' }]
      }
    }
  },
  methods: {
    resetForm (formName) {
      this.$refs[formName].resetFields()
    }
  },
  watch: {
    userData () {
      this.visible = this.userData
    }
  }
}
</script>
<style lang="scss" scoped>
.userShow{
    position: relative;
    color: #555 !important;
    .UserIcon{
        padding: 0 10px;
        span{
            display: block;
            font-size: 60px;
            text-align: center;
            line-height: 124px;
        }
    }
    .UserEditButton{
        position: absolute;
        width: 247.5px;
        bottom: 17px;
        left: 0;
        padding: 0 15px;
        text-align: center;
        .editButton{
            color: #555;
            width: 100%;
            text-transform: uppercase;
            background-color: transparent;
            cursor: pointer;
            &:hover{
                color: #aaa;
            }
        }
    }
    .userDetail{
        padding-left: 20px;
        h3{
            text-transform: uppercase;
        }
        p{
            padding: 5px 0 15px;
        }
    }
}
.submitButton{
    background-color: #555;
    color: #fefefe;
    padding: 9px 30px;
    &:hover,&:active,&:focus{
        background-color: #777;
        color: #fefefe;
    }
}
.resetButton{
    background-color: #9a9a9a;
    color: #fefefe;
    &:hover,&:active,&:focus{
        background-color: #aaa;
        color: #fefefe;
    }
}
.editBox{
    .postUser{
        padding-right: 10px;
    }
    .userLocal{
        // display:inline-block;
        float:right;
        font-weight:bold;
        text-transform:uppercase;
        i{
            padding-right: 5px;
        }
    }
}
</style>
<style lang="scss">
.postUser{
    padding-top: 10px;
    textarea{
        resize: none !important;
        padding-top: 8px;
    }
}
.editBox{
    .el-dialog__body{
        padding: 15px 20px 10px !important;
    }
}
</style>
