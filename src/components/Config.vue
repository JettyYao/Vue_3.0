<template>
    <el-dialog :visible.sync="visible" @close="$emit('update:config', false)" custom-class="config" append-to-body width="800px" :show-close=false>
        <div class="iconChoice">
            <el-row>
                <el-col :span="6">
                    <span @click="userControl=true"><i class="el-icon-zoom-in"></i> Control User</span>
                </el-col>
                <el-col :span="6">
                    <span @click="postAdd=true"><i class="el-icon-circle-plus-outline"></i> Post Add</span>
                </el-col>
                <el-col :span="6">
                    <span @click="tagControl=true"><i class="el-icon-plus"></i> Tag Add</span>
                </el-col>
                <el-col :span="6">
                    <span @click="mailControl=true"><i class="el-icon-message"></i> Mail Control</span>
                </el-col>
            </el-row>
        </div>
        <div class="eachDialog">
            <el-dialog :visible.sync="postAdd" custom-class="postAdd" width="700px" append-to-body
            @close="resetForm('postForm')">
                <span slot="title"><i class="el-icon-edit" style="padding-right:7px"></i> Post Add/Edit Method</span>
                <el-form :model="postForm" ref="postForm" label-width="90px">
                     <el-form-item label="Post标题" prop="title">
                        <el-input v-model="postForm.title" placeholder="请输入Post标题"></el-input>
                    </el-form-item>
                    <el-form-item label="Post类别" prop="tags">
                        <el-select v-model="postForm.tags" placeholder="请选择Post类别" style="width:100%">
                        <el-option label="区域一" value="shanghai"></el-option>
                        <el-option label="区域二" value="beijing"></el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="Post内容">
                        <div class="contentAdd">
                            <span @click="markdownArea=true">
                                <i class="el-icon-plus"></i> Fill Content
                            </span>
                        </div>
                    </el-form-item>
                    <el-form-item>
                        <el-button size="small" class="submitButton">立即创建</el-button>
                        <el-button size="small" class="resetButton" @click="resetForm('postForm')">重置</el-button>
                        <p class="Local"><i class="el-icon-date"></i> Today：Sept 18 2018</p>
                    </el-form-item>
                </el-form>
            </el-dialog>
            <el-dialog :visible.sync="markdownArea" :fullscreen=true append-to-body custom-class="markdownArea" :show-close=false>
                <mavon-editor class="markdown" v-model="value"/>
            </el-dialog>
            <el-dialog :visible.sync="tagControl" custom-class="tagControl" width="500px" append-to-body>
                <span slot="title"><i class="el-icon-d-caret"></i> TAG CONTROL</span>
                <div class="tagList">
                    <el-tag v-for="(tag,index) in tags" :key="index" closable :disable-transitions="true">{{tag.name}}</el-tag> <!--@close="handleClose(tag)"-->
                </div>
                <div class="tagAdd">
                    <el-input class="tagInput" v-if="inputVisible" v-model="inputValue" ref="saveTagInput" size="small" @keyup.enter.native="handleInputConfirm" @blur="handleInputConfirm"></el-input>
                    <el-button class="newTag" v-else size="small" @click="showInput"><i class="fa fa-plus"></i> Create Tag</el-button>
                </div>
            </el-dialog>
            <el-dialog :visible.sync="userControl" custom-class="userControl" width="700px" append-to-body :show-close=false>
                <div class="searchUser" style="padding-left:5px">
                    <el-input placeholder="请输入内容" v-model="userSearch">
                        <el-select v-model="userType" slot="prepend" placeholder="请选择" popper-class="selectDown">
                            <el-option label="餐厅名" value="1"></el-option>
                            <el-option label="订单号" value="2"></el-option>
                            <el-option label="用户电话" value="3"></el-option>
                        </el-select>
                        <el-button slot="append" icon="el-icon-search"></el-button>
                    </el-input>
                </div>
                <div class="userList">
                    <el-collapse v-model="userActiveName" accordion>
                        <el-collapse-item title="符合条件用户 ALLACCORDTOSEARCH" name="3">
                            <span class="eachUser">
                                <span class="email" @click="dataEdit=true">yao1508728331@gmail.com</span>
                                <el-switch v-model="userStop" active-color="#e46060" inactive-color="#aaa"></el-switch>
                            </span>
                            <span class="eachUser">
                                <span class="email" @click="dataEdit=true">yao1508728331@gmail.com</span>
                                <el-switch v-model="userStop" active-color="#e46060" inactive-color="#aaa"></el-switch>
                            </span>
                            <span class="eachUser">
                                <span class="email" @click="dataEdit=true">yao1508728331@gmail.com</span>
                                <el-switch v-model="userStop" active-color="#e46060" inactive-color="#aaa"></el-switch>
                            </span>
                            <span class="eachUser">
                                <span class="email" @click="dataEdit=true">yao1508728331@gmail.com</span>
                                <el-switch v-model="userStop" active-color="#e46060" inactive-color="#aaa"></el-switch>
                            </span>
                            <span class="eachUser">
                                <span class="email" @click="dataEdit=true">yao1508728331@gmail.com</span>
                                <el-switch v-model="userStop" active-color="#e46060" inactive-color="#aaa"></el-switch>
                            </span>
                        </el-collapse-item>
                        <el-collapse-item title="所有活跃用户 ALLACTIVITYUSERLIST" name="1">
                            <span class="eachUser">
                                <span class="email" @click="dataEdit=true">yao1508728331@gmail.com</span>
                                <el-switch v-model="userStop" active-color="#e46060" inactive-color="#aaa"></el-switch>
                            </span>
                            <span class="eachUser">
                                <span class="email" @click="dataEdit=true">yao1508728331@gmail.com</span>
                                <el-switch v-model="userStop" active-color="#e46060" inactive-color="#aaa"></el-switch>
                            </span>
                        </el-collapse-item>
                        <el-collapse-item title="所有封禁用户 ALLUNACTIVITYUSERLIST" name="2">
                            <span class="eachUser">
                                <span class="email" @click="dataEdit=true">yao1508728331@gmail.com</span>
                                <el-switch v-model="userStop" active-color="#e46060" inactive-color="#aaa"></el-switch>
                            </span>
                            <span class="eachUser">
                                <span class="email" @click="dataEdit=true">yao1508728331@gmail.com</span>
                                <el-switch v-model="userStop" active-color="#e46060" inactive-color="#aaa"></el-switch>
                            </span>
                        </el-collapse-item>
                    </el-collapse>
                </div>
            </el-dialog>
            <el-dialog :visible.sync="dataEdit" custom-class="dataEdit" width="700px" append-to-body :show-close=false @close="resetForm('userData')">
                <el-form label-position="right" label-width="130px" :model="userData" ref="userData">
                    <el-form-item label="User Email" prop="name">
                        <el-input v-model="userData.name"></el-input>
                    </el-form-item>
                    <el-form-item label="User Password" prop="password">
                        <el-input v-model="userData.password"></el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-button size="mini" class="submitButton">立即创建</el-button>
                        <el-button size="mini" class="resetButton" @click="resetForm('userData')">重置</el-button>
                    </el-form-item>
                </el-form>
            </el-dialog>
            <el-dialog :visible.sync="mailControl" custom-class="mailControl" width="900px" append-to-body :show-close=false>
                <el-row>
                    <el-col :span="8">
                        <div class="mailList">
                            <div class="search">
                                <el-input placeholder="请输入内容" prefix-icon="el-icon-search" v-model="search" clearable></el-input>
                            </div>
                            <div class="documentList">
                                <ul>
                                  <li>
                                    <h4>From： yao1508728331@gmail.com</h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur dolor quisquam atque blanditiis reprehenderit veritatis expedita odio quos autem facere, repellendus et, voluptatem aspernatur quidem fugit doloribus officia fuga nesciunt.</p>
                                    <div class="other clear">
                                        <span style="float: left">REPLY：none</span><span style="float: right;padding-top:2px"><i class="el-icon-time"></i> 2018 July 18</span>
                                    </div>
                                  </li>
                                  <li>
                                    <h4>From： yao1508728331@gmail.com</h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur dolor quisquam atque blanditiis reprehenderit veritatis expedita odio quos autem facere, repellendus et, voluptatem aspernatur quidem fugit doloribus officia fuga nesciunt.</p>
                                    <div class="other clear">
                                        <span style="float: left">Tag：javascript</span><span style="float: right;padding-top:2px"><i class="el-icon-time"></i> 2018 July 18</span>
                                    </div>
                                  </li>
                                  <li>
                                    <h4>From： yao1508728331@gmail.com</h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur dolor quisquam atque blanditiis reprehenderit veritatis expedita odio quos autem facere, repellendus et, voluptatem aspernatur quidem fugit doloribus officia fuga nesciunt.</p>
                                    <div class="other clear">
                                        <span style="float: left">Tag：javascript</span><span style="float: right;padding-top:2px"><i class="el-icon-time"></i> 2018 July 18</span>
                                    </div>
                                  </li>
                                  <li>
                                    <h4>From： yao1508728331@gmail.com</h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur dolor quisquam atque blanditiis reprehenderit veritatis expedita odio quos autem facere, repellendus et, voluptatem aspernatur quidem fugit doloribus officia fuga nesciunt.</p>
                                    <div class="other clear">
                                        <span style="float: left">Tag：javascript</span><span style="float: right;padding-top:2px"><i class="el-icon-time"></i> 2018 July 18</span>
                                    </div>
                                  </li>
                                </ul>
                            </div>
                        </div>
                    </el-col>
                    <el-col :span="16">
                        <div class="replyArea">
                            <div class="showArea">
                                <div class="mailContent">
                                    <h3>From：yao1508728331@gmail.com (IP: 127.0.0.1)</h3>
                                    <h4>Name：Jetty Smith</h4>
                                    <small>Accept Time：Sept 19 2018</small>
                                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae perspiciatis, harum voluptas velit illum a perferendis voluptates doloremque dolores esse incidunt magni ab minus atque ut laborum eveniet inventore laboriosam!LoremLorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae perspiciatis, harum voluptas velit illum a perferendis voluptates doloremque dolores esse incidunt magni ab minus atque ut laborum eveniet inventore laboriosam!Lorem</p>
                                </div>
                                <div class="mailDone">
                                    <p>
                                        <span><i class="el-icon-delete"></i> DELETE</span>
                                        <span @click="replyBox=!replyBox"><i class="el-icon-message"></i> REPLY</span>
                                    </p>
                                </div>
                                 <transition name="el-zoom-in-top">
                                    <div v-show="replyBox" class="replyBox">
                                        <textarea></textarea>
                                        <div class="button">
                                            <el-button size="mini" class="submitButton">发送回复</el-button>
                                            <el-button size="mini" class="resetButton">重置</el-button>
                                            <span style="float:right;line-height:32px;text-transform:uppercase;font-weight:bold">TIME：Sept 19 2018</span>
                                        </div>
                                    </div>
                                </transition>
                            </div>
                        </div>
                    </el-col>
                </el-row>
            </el-dialog>
        </div>
    </el-dialog>
</template>
<script>
export default {
  name: 'Config',
  props: {
    config: Boolean
  },
  data () {
    return {
      visible: this.config,
      postAdd: false,
      markdownArea: false,
      postForm: {
        title: '',
        tags: ''
      },
      value: '',
      tagControl: false,
      tags: [
        { name: '标签一' },
        { name: '标签二' },
        { name: '标签三' },
        { name: '标签四' },
        { name: '标签一' },
        { name: '标签二' },
        { name: '标签三' },
        { name: '标签四' },
        { name: '标签五' }
      ],
      inputValue: '',
      inputVisible: false,
      userControl: false,
      userSearch: '',
      userType: '',
      userActiveName: '1',
      userStop: false,
      dataEdit: false,
      userData: {
        email: '',
        password: ''
      },
      mailControl: false,
      replyBox: false
    }
  },
  methods: {
    resetForm (formName) {
      this.$refs[formName].resetFields()
    },
    showInput () {
      this.inputVisible = true
      this.$nextTick(_ => {
        this.$refs.saveTagInput.$refs.input.focus()
      })
    },
    handleInputConfirm () {
      let inputValue = this.inputValue
      if (inputValue) {
        this.tags.push({ name: inputValue })
      }
      this.inputVisible = false
      this.inputValue = ''
    }
  },
  watch: {
    config () {
      this.visible = this.config
    }
  }
}
</script>
<style lang="scss" scoped>
.iconChoice span{
    display: block;
    text-align: center;
    cursor: pointer;
    font-weight: bold;
    text-transform: uppercase;
    padding: 10px 0;
    i{
        display: block;
        font-size: 40px;
        padding-bottom: 15px;
    }
    &:hover{
        background-color: #eaeaea;
    }
}
.contentAdd{
    span{
        display: block;
        text-align: center;
        line-height: 150px;
        border: 1px dashed #c0c4cc;
        font-weight: bold;
        color: #c0c4cc;
        cursor: pointer;
        i{
            padding-right: 5px;
        }
    }
}
.markdown{
    height: 100%;
}
.tagControl{
    .tagList{
        padding-left: 10px;
        .el-tag{
            margin: 10px 10px 10px 0;
            color: #fefefe;
            background-color: #666;
            border-color: #666;
        }
    }
    .tagAdd{
        padding: 20px 0 10px 10px;
        border-top: 2px solid #eaeaea;
        margin-top: 10px;
        .newTag{
            width: 100%;
            line-height: 24px;
        }
        .newTag{
            text-transform: uppercase;
            background-color: #666;
            color: #fefefe;
            i{
                padding-right: 5px;
            }
            &:hover{
                background-color: #777;
            }
        }
    }
}
.userControl{
    .userList{
        margin-top: 20px;
        padding: 10px 0 10px 7px;
        .eachUser{
            display: inline-block;
            margin: 0 10px 10px 0;
            background-color: #f4f4f4;
            padding: 10px 15px;
            text-transform: uppercase;
            .el-switch{
                padding-left: 10px;
            }
            .email{
                display: inline-block;
                cursor: pointer;
            }
        }
    }
}
.mailControl{
    .mailList{
        padding: 20px;
        overflow: hidden;
        background-color: #555;
        .search{
            padding: 15px 0 10px;
        }
        .documentList{
            overflow-x: hidden;
            overflow-y: scroll;
            margin-right: -37px;
            padding-right: 17px;
            height: calc(70vh - 101px);
            color: #c0c4cc;
            li{
                cursor: pointer;
                padding: 9px 5px;
                margin-bottom: 3px;
                h4{
                  text-overflow: ellipsis;
                  white-space: nowrap;
                  overflow: hidden;
                  font-size: 14px;
                  color: #c0c4cc;
                }
                p{
                  padding: 5px 0;
                  font-size: 13px;
                  max-height: 36px;
                  overflow: hidden;
                  color: #b4b8bf;
                }
                .other{
                  font-size: 12px;
                  font-weight: bold;
                  color: #9a9fa9;
                  text-transform: uppercase;
                  padding: 5px 3px 0 0;
                  i{
                    font-weight: bold;
                    padding-right: 3px;
                  }
                }
                &:hover,&:active{
                    background-color: #777;
                }
            }
        }
    }
    .replyArea{
        width: 100%;
        height: 70vh;
        padding: 20px 0;
        background-color: #fefefe;
        overflow: hidden;
        color: #777;
        .showArea{
            height: 100%;
            overflow-x: hidden;
            overflow-y: scroll;
            margin-right: -17px;
            padding: 0 37px 10px 20px;
            .mailContent{
                padding: 40px 20px 30px;
                h3{
                    padding: 6px 0;
                }
                small{
                    text-transform: uppercase;
                    display: inline-block;
                    padding: 6px 0;
                }
            }
            .mailDone{
                padding: 0 20px 20px;
                p{
                    span{
                        color: #9a9a9a;
                        display: inline-block;
                        margin-right: 20px;
                        cursor: pointer;
                        &:hover{
                            color: #aaa;
                        }
                    }
                }
            }
            .replyBox{
                padding: 0 20px;
                textarea{
                    resize: none;
                    width: 100%;
                    height: 120px;
                    padding: 10px;
                    outline: 0;
                    border: 1px solid #ccc;
                }
                .button{
                    margin: 10px 0 50px;
                }
            }
        }
    }
}
</style>
<style lang="scss">
.config{
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    margin: 0 !important;
}
.postAdd{
    .el-dialog__body{
        padding: 20px 35px 15px 15px !important;
    }
}
.markdownArea{
    .el-dialog__header{
        display: none;
    }
    .el-dialog__body{
        height: 100%;
        padding: 0 !important
    }
}
.el-tag .el-icon-close:hover{
    color: #fefefe !important;
    background-color: #999 !important;
}
.tagControl{
    .el-tag .el-icon-close{
        color: #d3d3d3;
    }
    .el-dialog__body{
        padding: 15px 20px !important;
    }
    .tagInput input{
        line-height: 44px;
        height: 44px;
    }
}
.userControl{
    .el-select{
        width: 120px;
    }
    .el-input-group__append, .el-input-group__prepend{
        background-color: #fafafa;
        color: #555;
    }
    .el-form-item.is-success .el-input__inner, .el-form-item.is-success .el-input__inner:focus, .el-form-item.is-success .el-textarea__inner, .el-form-item.is-success .el-textarea__inner:focus, .el-textarea__inner:focus, .el-input.is-active .el-input__inner, .el-input__inner:focus{
        border-color: #dcdfe6 !important;
    }
}
.selectDown{
    .el-select-dropdown__item.selected{
        color: #555 !important;
    }
}
.userControl{
    .userList{
        .el-collapse-item__content{
            max-height: 150px;
            overflow-y: scroll;
            overflow-x: hidden;
            margin-right: -17px;
        }
    }
}
.dataEdit{
    .el-dialog__body{
        padding: 15px 30px 15px 10px !important;
    }
}
.mailControl{
    .el-dialog__header{
        display: none;
    }
    .el-dialog__body{
        height: 70vh;
        padding: 0 !important;
    }
}
</style>
