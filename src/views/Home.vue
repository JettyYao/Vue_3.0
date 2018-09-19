<template>
  <div class="home">
    <hello-world></hello-world>
    <div class="mainContent">
      <el-row>
        <el-col :span="6" :class="listShow === true ? 'listIn' : 'listOut'">
          <div class="list">
            <div class="header">
              <h2><i class="fa fa-stack-overflow"></i> justforeasy</h2>
              <!-- <i class="el-icon-menu"></i> -->
              <el-dropdown  trigger="click">
                <i class="el-icon-menu"></i>
                <el-dropdown-menu slot="dropdown">
                  <el-dropdown-item>黄金糕</el-dropdown-item>
                  <el-dropdown-item>狮子头</el-dropdown-item>
                  <el-dropdown-item>螺蛳粉</el-dropdown-item>
                  <el-dropdown-item>双皮奶</el-dropdown-item>
                  <el-dropdown-item>蚵仔煎</el-dropdown-item>
                </el-dropdown-menu>
              </el-dropdown>
            </div>
            <div class="search">
              <el-input placeholder="请输入内容" prefix-icon="el-icon-search" v-model="search" clearable></el-input>
            </div>
            <div class="documentList">
              <ul>
                <li>
                  <h4>Lorem ipsum dolor sit, amet consectetur adipisicing elit. A autem quas nulla, necessitatibus quibusdam temporibus quod quam. Neque non nihil dolorum nemo alias asperiores, quidem dolorem eveniet dolores. A, iure.</h4>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur dolor quisquam atque blanditiis reprehenderit veritatis expedita odio quos autem facere, repellendus et, voluptatem aspernatur quidem fugit doloribus officia fuga nesciunt.</p>
                  <div class="other clear">
                    <span style="float: left">Tag：javascript</span><span style="float: right;padding-top:2px"><i class="el-icon-time"></i> 2018 July 18</span>
                  </div>
                </li>
                <li>
                  <h4>Lorem ipsum dolor sit, amet consectetur adipisicing elit. A autem quas nulla, necessitatibus quibusdam temporibus quod quam. Neque non nihil dolorum nemo alias asperiores, quidem dolorem eveniet dolores. A, iure.</h4>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur dolor quisquam atque blanditiis reprehenderit veritatis expedita odio quos autem facere, repellendus et, voluptatem aspernatur quidem fugit doloribus officia fuga nesciunt.</p>
                  <div class="other clear">
                    <span style="float: left">Tag：javascript</span><span style="float: right;padding-top:2px"><i class="el-icon-time"></i> 2018 July 18</span>
                  </div>
                </li>
                <li>
                  <h4>Lorem ipsum dolor sit, amet consectetur adipisicing elit. A autem quas nulla, necessitatibus quibusdam temporibus quod quam. Neque non nihil dolorum nemo alias asperiores, quidem dolorem eveniet dolores. A, iure.</h4>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur dolor quisquam atque blanditiis reprehenderit veritatis expedita odio quos autem facere, repellendus et, voluptatem aspernatur quidem fugit doloribus officia fuga nesciunt.</p>
                  <div class="other clear">
                    <span style="float: left">Tag：javascript</span><span style="float: right;padding-top:2px"><i class="el-icon-time"></i> 2018 July 18</span>
                  </div>
                </li>
                <li>
                  <h4>Lorem ipsum dolor sit, amet consectetur adipisicing elit. A autem quas nulla, necessitatibus quibusdam temporibus quod quam. Neque non nihil dolorum nemo alias asperiores, quidem dolorem eveniet dolores. A, iure.</h4>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur dolor quisquam atque blanditiis reprehenderit veritatis expedita odio quos autem facere, repellendus et, voluptatem aspernatur quidem fugit doloribus officia fuga nesciunt.</p>
                  <div class="other clear">
                    <span style="float: left">Tag：javascript</span><span style="float: right;padding-top:2px"><i class="el-icon-time"></i> 2018 July 18</span>
                  </div>
                </li>
                <li>
                  <h4>Lorem ipsum dolor sit, amet consectetur adipisicing elit. A autem quas nulla, necessitatibus quibusdam temporibus quod quam. Neque non nihil dolorum nemo alias asperiores, quidem dolorem eveniet dolores. A, iure.</h4>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur dolor quisquam atque blanditiis reprehenderit veritatis expedita odio quos autem facere, repellendus et, voluptatem aspernatur quidem fugit doloribus officia fuga nesciunt.</p>
                  <div class="other clear">
                    <span style="float: left">Tag：javascript</span><span style="float: right;padding-top:2px"><i class="el-icon-time"></i> 2018 July 18</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </el-col>
        <el-col :span="18" :class="[listShow == true ? 'widthCut' : 'widthAdd',readType == 'night' ? 'nightType' : 'dayType']" style="position:relative">
          <div class="contentHeader clear">
            <div class="leftIcon">
              <i class="fa fa-columns" @click="listShow = !listShow"></i>
              <i class="fa fa-lightbulb-o" @click="readType == 'night' ? readType = 'day' : readType = 'night'"></i>
            </div>
            <div class="rightIcon">
              <!-- <span @click="userData=true">
                <i class="fa fa-user-circle-o"></i>
                <span class="name">Jetty Smith</span>
              </span> -->
              <span @click="loginBox=true">
                <i class="fa fa-user-circle-o"></i>
                <span class="name">Login / Sign</span>
              </span>
              <el-tooltip class="item" effect="dark" content="Mail Controll" placement="bottom">
                <i class="fa fa-folder-open-o" style="line-height:18px" @click="mailBox=true"></i>
              </el-tooltip>
              <el-dropdown trigger="click" style="margin-left:30px;top:1px">
                <i class="el-icon-more" style="line-height:18px"></i>
                <el-dropdown-menu slot="dropdown">
                  <el-dropdown-item>
                    <div @click="helpManual=true"><i class="el-icon-info" style="padding-right:8px"></i> 网站帮助</div>
                  </el-dropdown-item>
                  <el-dropdown-item><i class="el-icon-close" style="padding-right:8px"></i> 退出</el-dropdown-item>
                </el-dropdown-menu>
              </el-dropdown>
            </div>
          </div>
          <div class="contentArea">
            <div class="contentShow">
              <h2 class="contentTitle">Lorem ipsum dolor sit amet consectetur adipisicing elit.</h2>
              <div class="contentData">
                <span class="contentTag">belong Javascript</span>
                <span class="contentTime">Update July 14 2018</span>
              </div>
              <div class="contentText">
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi fuga recusandae eveniet laboriosam ipsa ipsum sapiente, eligendi eaque ea laudantium, nemo natus assumenda quas maxime expedita dolores corrupti? Cupiditate, perferendis.</p>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi fuga recusandae eveniet laboriosam ipsa ipsum sapiente, eligendi eaque ea laudantium, nemo natus assumenda quas maxime expedita dolores corrupti? Cupiditate, perferendis.</p>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi fuga recusandae eveniet laboriosam ipsa ipsum sapiente, eligendi eaque ea laudantium, nemo natus assumenda quas maxime expedita dolores corrupti? Cupiditate, perferendis.</p>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi fuga recusandae eveniet laboriosam ipsa ipsum sapiente, eligendi eaque ea laudantium, nemo natus assumenda quas maxime expedita dolores corrupti? Cupiditate, perferendis.</p>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi fuga recusandae eveniet laboriosam ipsa ipsum sapiente, eligendi eaque ea laudantium, nemo natus assumenda quas maxime expedita dolores corrupti? Cupiditate, perferendis.</p>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi fuga recusandae eveniet laboriosam ipsa ipsum sapiente, eligendi eaque ea laudantium, nemo natus assumenda quas maxime expedita dolores corrupti? Cupiditate, perferendis.</p>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi fuga recusandae eveniet laboriosam ipsa ipsum sapiente, eligendi eaque ea laudantium, nemo natus assumenda quas maxime expedita dolores corrupti? Cupiditate, perferendis.</p>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi fuga recusandae eveniet laboriosam ipsa ipsum sapiente, eligendi eaque ea laudantium, nemo natus assumenda quas maxime expedita dolores corrupti? Cupiditate, perferendis.</p>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi fuga recusandae eveniet laboriosam ipsa ipsum sapiente, eligendi eaque ea laudantium, nemo natus assumenda quas maxime expedita dolores corrupti? Cupiditate, perferendis.</p>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi fuga recusandae eveniet laboriosam ipsa ipsum sapiente, eligendi eaque ea laudantium, nemo natus assumenda quas maxime expedita dolores corrupti? Cupiditate, perferendis.</p>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi fuga recusandae eveniet laboriosam ipsa ipsum sapiente, eligendi eaque ea laudantium, nemo natus assumenda quas maxime expedita dolores corrupti? Cupiditate, perferendis.</p>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi fuga recusandae eveniet laboriosam ipsa ipsum sapiente, eligendi eaque ea laudantium, nemo natus assumenda quas maxime expedita dolores corrupti? Cupiditate, perferendis.</p>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi fuga recusandae eveniet laboriosam ipsa ipsum sapiente, eligendi eaque ea laudantium, nemo natus assumenda quas maxime expedita dolores corrupti? Cupiditate, perferendis.</p>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi fuga recusandae eveniet laboriosam ipsa ipsum sapiente, eligendi eaque ea laudantium, nemo natus assumenda quas maxime expedita dolores corrupti? Cupiditate, perferendis.</p>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi fuga recusandae eveniet laboriosam ipsa ipsum sapiente, eligendi eaque ea laudantium, nemo natus assumenda quas maxime expedita dolores corrupti? Cupiditate, perferendis.</p>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi fuga recusandae eveniet laboriosam ipsa ipsum sapiente, eligendi eaque ea laudantium, nemo natus assumenda quas maxime expedita dolores corrupti? Cupiditate, perferendis.</p>
              </div>
            </div>
            <div class="easyKey">
              <el-popover placement="left-end" width="250" trigger="click" v-model="sponsorBox" popper-class="sArea">
                <div style="width:200px;margin:0 auto">
                  <img src="../assets/logo.png" alt="">
                  <p>If you like my articles, welcome to sponsor me.</p>
                  <p>如果你喜欢我的文章,希望能够支持我.</p>
                </div>
                <i class="el-icon-star-on" slot="reference" @click="sponsorBox = !sponsorBox"></i>
              </el-popover>
              <el-popover placement="left-end" width="500" trigger="click" v-model="commentBox" popper-class="cArea">
                <div class="commentArea">
                  <h4>Comments Area <span class="clear"><i class="el-icon-warning" style="float:right;padding-top:2px"></i></span></h4>
                  <div class="commentsInput">
                    <textarea class="commentContent" maxlength="250" placeholder="Write down comment here..."></textarea>
                    <div class="commentSubmit clear">
                      <span><i class="el-icon-location"></i> Local:ShangHai , china</span>
                      <el-button size="mini">Submit</el-button>
                    </div>
                  </div>
                  <div class="commentList">
                    <ul>
                      <li>
                        <el-row>
                          <el-col :span="2">
                            <div class="userIcon">
                              <span>E</span>
                            </div>
                          </el-col>
                          <el-col :span="22" class="eachComment">
                            <h4 class="username">Jetty Smith (yao1508728331@gmail.com)</h4>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt iure suscipit culpa, praesentium consequatur ducimus explicabo veritatis quasi officia tenetur voluptatum voluptas cupiditate odit quaerat animi molestias illum quisquam quae.</p>
                          </el-col>
                        </el-row>
                        <div class="commentData clear">
                          <span><i class="el-icon-location"></i> Local:ShangHai , china</span>
                          <span class="reply">
                            <el-tooltip effect="dark" content="Comment Replies" placement="top" style="margin-right: 15px">
                              <i class="fa fa-plus"></i> <!-- @click="" -->
                            </el-tooltip>
                            <el-tooltip effect="dark" content="Comment Replies Show" placement="top">
                              <i class="fa fa-commenting" @click="replyBox = !replyBox"> <span style="padding-left:5px;font-weight:bold">2,000</span></i>
                            </el-tooltip>
                          </span>
                        </div>
                        <div class="replyShow" v-show="replyBox">
                          <div class="replyList">
                            <h5>" See or Write down what you think about the comment "</h5>
                            <ul>
                              <li>
                                <el-row>
                                  <el-col :span="2">
                                    <div class="userIcon">
                                      <span>E</span>
                                    </div>
                                  </el-col>
                                  <el-col :span="22" class="eachReply">
                                    <h4 class="username">Jetty Smith (yao1508728331@gmail.com)</h4>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt iure suscipit culpa, praesentium consequatur ducimus explicabo veritatis quasi officia tenetur voluptatum voluptas cupiditate odit quaerat animi molestias illum quisquam quae.</p>
                                  </el-col>
                                </el-row>
                              </li>
                              <li>
                                <el-row>
                                  <el-col :span="2">
                                    <div class="userIcon">
                                      <span>E</span>
                                    </div>
                                  </el-col>
                                  <el-col :span="22" class="eachReply">
                                    <h4 class="username">Jetty Smith (yao1508728331@gmail.com)</h4>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt iure suscipit culpa, praesentium consequatur ducimus explicabo veritatis quasi officia tenetur voluptatum voluptas cupiditate odit quaerat animi molestias illum quisquam quae.</p>
                                  </el-col>
                                </el-row>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </li>
                      <li>
                        <el-row>
                          <el-col :span="2">
                            <div class="userIcon">
                              <span>E</span>
                            </div>
                          </el-col>
                          <el-col :span="22" class="eachComment">
                            <h4 class="username">Jetty Smith (yao1508728331@gmail.com)</h4>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt iure suscipit culpa, praesentium consequatur ducimus explicabo veritatis quasi officia tenetur voluptatum voluptas cupiditate odit quaerat animi molestias illum quisquam quae.</p>
                          </el-col>
                        </el-row>
                        <div class="commentData clear">
                          <span><i class="el-icon-location"></i> Local:ShangHai , china</span>
                          <span class="reply">
                            <el-tooltip effect="dark" content="Comment Reply" placement="top">
                              <i class="fa fa-commenting"> <span style="padding-left:10px;font-weight:bold">2,000</span></i>
                            </el-tooltip>
                          </span>
                        </div>
                      </li>
                      <li>
                        <el-row>
                          <el-col :span="2">
                            <div class="userIcon">
                              <span>E</span>
                            </div>
                          </el-col>
                          <el-col :span="22" class="eachComment">
                            <h4 class="username">Jetty Smith (yao1508728331@gmail.com)</h4>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt iure suscipit culpa, praesentium consequatur ducimus explicabo veritatis quasi officia tenetur voluptatum voluptas cupiditate odit quaerat animi molestias illum quisquam quae.</p>
                          </el-col>
                        </el-row>
                        <div class="commentData clear">
                          <span><i class="el-icon-location"></i> Local:ShangHai , china</span>
                          <span class="reply">
                            <el-tooltip effect="dark" content="Comment Reply" placement="top">
                              <i class="fa fa-commenting"> <span style="padding-left:10px;font-weight:bold">2,000</span></i>
                            </el-tooltip>
                          </span>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
                <i class="fa fa-commenting" slot="reference" @click="commentBox = !commentBox"></i>
              </el-popover>
              <i class="fa fa-cogs" @click="config=true"></i>
            </div>
          </div>
        </el-col>
      </el-row>
    </div>
    <div class="DialogArea">
      <mail-box :mailBox.sync="mailBox"></mail-box>
      <user-data :userData.sync="userData"></user-data>
      <web-help :helpManual.sync="helpManual"></web-help>
      <config :config.sync="config"></config>
      <el-dialog :visible.sync="loginBox" custom-class="loginBox" width="360px" append-to-body @close="$refs['loginData'].resetFields()">
        <span slot="title"><i class="fa fa-stack-overflow"></i> HELLO GUYS</span>
        <div class="icon">
          <span>Jr</span>
        </div>
        <div class="login">
          <el-form :model="loginData" :rules="loginRule" ref="loginData">
            <el-form-item prop="email">
              <el-input type="email" v-model="loginData.email" autocomplete="off" placeholder="ACCOUNT EMAIL..."></el-input>
            </el-form-item>
            <el-form-item prop="password">
              <el-input type="password" v-model="loginData.password" autocomplete="off" placeholder="ACCOUNT PASSWORD..."></el-input>
            </el-form-item>
            <el-form-item style="margin-bottom: 15px">
              <el-button class="submitButton">LOGIN NOW</el-button>
            </el-form-item>
          </el-form>
          <div class="sign" style="text-align:center">
            <small style="text-transform:uppercase;cursor:pointer" @click="signBox=true">
              <i class="el-icon-info" style="padding-right:5px"></i> Sign Up
            </small>
          </div>
        </div>
      </el-dialog>
      <el-dialog :visible.sync="signBox" custom-class="signBox" width="360px" append-to-body @close="$refs['signData'].resetFields()">
        <p slot="title"><i class="fa fa-stack-overflow"></i> SIGNUP QUICKLY</p>
        <el-form :model="signData" :rules="signRule" ref="signData">
          <el-form-item prop="name">
            <el-input v-model="signData.name" placeholder="ACCOUNT USERNAME..."></el-input>
          </el-form-item>
          <el-form-item prop="email">
            <el-input type="email" v-model="signData.email" autocomplete="off" placeholder="ACCOUNT EMAIL..."></el-input>
          </el-form-item>
          <el-form-item prop="password">
            <el-input type="password" v-model="signData.password" autocomplete="off" placeholder="ACCOUNT PASSWORD..."></el-input>
          </el-form-item>
          <el-form-item prop="checkPass">
            <el-input type="password" v-model="signData.checkPass" autocomplete="off" placeholder="COMFIRM PASSWORD..."></el-input>
          </el-form-item>
          <el-form-item style="margin-bottom: 15px">
            <el-button class="submitButton" style="width:100%">SIGNUP NOW</el-button>
          </el-form-item>
        </el-form>
        <div class="sign" style="text-align:center">
          <small style="text-transform:uppercase" @click="signBox=true">
            <i class="el-icon-info" style="padding-right:5px"></i> Please to your email for comfirm.
          </small>
        </div>
      </el-dialog>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import MailBox from '@/components/MailBox.vue'
import UserData from '@/components/UserData.vue'
import WebHelp from '@/components/WebHelp.vue'
import Config from '@/components/Config.vue'
export default {
  name: 'home',
  components: {
    HelloWorld,
    MailBox,
    UserData,
    WebHelp,
    Config
  },
  data () {
    var checkEmail = (rule, value, callback) => {
      const mailReg = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/
      if (!value) {
        return callback(new Error('EMAIL不能为空'))
      }
      setTimeout(() => {
        if (mailReg.test(value)) {
          callback()
        } else {
          callback(new Error('请输入正确的EMAIL格式'))
        }
      }, 100)
    }
    var validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入Password.'))
      } else {
        if (this.signData.checkPass !== '') {
          this.$refs.signData.validateField('checkPass')
        }
        callback()
      }
    }
    var validatePass2 = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请再次输入Password.'))
      } else if (value !== this.signData.password) {
        callback(new Error('两次输入Password不一致!'))
      } else {
        callback()
      }
    }
    return {
      search: '',
      listShow: true,
      readType: 'day',
      commentBox: false,
      replyBox: false,
      sponsorBox: false,
      mailBox: false,
      userData: false,
      helpManual: false,
      config: false,
      loginBox: false,
      loginData: {
        email: '',
        password: ''
      },
      loginRule: {
        email: [
          { validator: checkEmail, trigger: 'blur' }
        ],
        password: [
          { required: true, message: 'Password不能为空', trigger: 'blur' }
        ]
      },
      signRule: {
        name: [
          { required: true, message: 'Username不能为空', trigger: 'blur' }
        ],
        email: [
          { validator: checkEmail, trigger: 'blur' }
        ],
        password: [
          { validator: validatePass, trigger: 'blur' }
        ],
        checkPass: [
          { validator: validatePass2, trigger: 'blur' }
        ]
      },
      signBox: false,
      signData: {
        name: '',
        email: '',
        password: '',
        checkPass: ''
      }
    }
  }
}
</script>
<style lang="scss" scoped>
.home{
  width: 100%;
  height: 100%;
  position: relative;
  .mainContent{
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 2;
    left: 0;
    top: 0;
    .el-row{
      height: 100%;
      width: 100%;
      .el-col{
        height: 100%;
        .list{
          height: 100%;
          background-color: #555;
          position: relative;
          overflow-x: hidden;
          .header{
            color: #c0c4cc;
            margin: 0 25px;
            padding: 25px 0 15px;
            border-bottom: 1px solid #9d9e9c;
            h2{
              font-size: 16px;
              font-weight: bolder;
              display: inline-block;
              text-transform: uppercase;
            }
            .el-dropdown{
              float: right;
              i{
                cursor: pointer;
              }
            }
          }
          .search{
            width: 100%;
            padding: 25px 25px 0;
          }
          .documentList{
            padding: 15px;
            overflow-x: hidden;
            overflow-y: scroll;
            height: calc(100vh - 140px);
            margin-right: -17px;
            ul{
              width: 100%;
              li{
                list-style: none;
                padding: 16px 15px;
                cursor: pointer;
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
                  height: 52px;
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
              }
              li.active, li:hover{
                background-color: #777;
              }
            }
          }
        }
        .contentHeader{
          // font-weight: bold;
          color: #828282;
          padding: 25px 30px 15px;
          .leftIcon{
            float: left;
            line-height: 18px;
            i{
              padding: 0 30px 0 3px;
              cursor: pointer;
              &:hover{
                color: #c0c4cc;
              }
            }
          }
          .rightIcon{
            float: right;
            line-height: 18px;
            font-size: 13px !important;
            i{
              padding: 0 5px;
              cursor: pointer;
              &:hover{
                color: #c0c4cc;
              }
            }
            span.name{
              display: inline-block;
              max-width: 250px;
              font-size: 14px;
              padding-right: 30px;
              text-transform: uppercase;
              cursor: pointer;
              overflow: hidden;
              white-space: nowrap;
              text-overflow: ellipsis;
              vertical-align: bottom;
            }
          }
        }
      }
    }
    .contentArea{
      padding: 20px 47px 20px 30px;
      margin-right: -17px;
      margin-top: 10px;
      overflow-x: hidden;
      overflow-y: scroll;
      height: 100%;
      .contentShow{
        width: 60%;
        max-width: 590px;
        margin: 10px auto 100px;
        .contentTitle{
          color: #555;
          font-size: 30px;
        }
        .contentData{
          padding: 10px 0;
          span{
            display: inline-block;
            padding-right: 35px;
            text-transform: uppercase;
            font-size: 14px;
            color: #9a9fa9 !important;
            font-weight: bold;
          }
        }
        .contentText{
          font-size: 15px;
          p{
            color: #555;
            padding: 2px 0 9px;
          }
        }
      }
      .easyKey{
        position: absolute;
        color: #555;
        right: 60px;
        bottom: 120px;
        i{
          display: block;
          padding: 12px;
          cursor: pointer;
          &:hover{
            color: #9a9a9a;
          }
        }
      }
    }
  }
}
.listIn{
  opacity: 1;
  width: 25% !important;
  transition: all 1s;
}
.listOut{
  *{
    border: 0 !important;
    padding: 0 !important;
    margin: 0 !important;
    color: #555 !important;
    overflow: hidden !important;
  }
  .search{
    width: 0 !important;
  }
  width: 0;
  opacity: 0;
  transition: all 1s;
}
.widthAdd{
  width: 100% !important;
  transition: all 1s;
}
.widthCut{
  width: 75% !important;
  transition: all 1s;
}
.nightType{
  background-color: #525252;
  *{
    color: #c0c4cc !important;
  }
  i:hover{
    color: #828282 !important;
  }
}
.dayType{
  background-color: #fefefe;
}
.cArea{
  .commentArea{
    padding: 5px 10px;
    h4{
      padding-bottom: 7px;
      text-transform: uppercase;
    }
    .commentsInput{
      padding-bottom: 10px;
      border-bottom: 2px solid #bbb;
      textarea{
        width: 100%;
        height: 100px;
        resize: none;
        outline: none;
        padding: 10px;
        font-family: inherit;
        border: 1px solid #bbb;
      }
      .commentSubmit{
        padding: 3px 0;
        font-size: 12px;
        font-weight: bold;
        line-height: 24px;
        .el-button{
          float: right;
          padding: 5px 30px;
          font-weight: bold;
          color: #fefefe;
          background-color: #555;
          &:hover{
            background-color: #ccc;
          }
        }
      }
    }
    .commentList{
      overflow-x: hidden;
      >ul{
        height: 255px;
        overflow-y: scroll;
        margin-right: -17px;
      }
      li{
        list-style: none;
        padding-top: 10px;
        .userIcon{
          padding-top: 3px;
          span{
            display: inline-block;
            width: 20px;
            height: 20px;
            line-height: 20px;
            text-align: center;
            background-color: #555;
            color: #fefefe;
            border-radius: 2px;
          }
        }
        .eachComment{
          .username{
            font-size: 13px;
            line-height: 24px;
            padding-bottom: 0;
          }
          p{
            font-size: 13px;
            line-height: 1.2;
            background-color: #f4f4f4;
            padding: 7px;
          }
        }
        .commentData{
          padding: 7px 0;
          font-size: 12px;
          font-weight: bold;
          .reply{
            font-size: 12px;
            float: right;
            font-weight: bold;
            padding-right: 1px;
            cursor: pointer;
            i:hover{
              color: #ccc;
            }
          }
        }
        .replyShow{
          margin-left: 37.83px;
          font-size: 12px;
          background-color: #f5f5f5;
          overflow-x: hidden;
          h5{
            color: #555;
            padding: 10px 0 3px;
            text-transform: uppercase;
          }
          li{
            padding: 0 0 15px;
            .eachReply{
              .username{
                padding-top: 6px;
                padding-bottom: 2px;
              }
              p{
                line-height: 1.2;
                padding-right: 10px;
              }
            }
          }
        }
      }
    }
  }
}
.sArea{
  p{
    font-weight: bold;
    padding: 3px 0;
    text-align: center;
  }
}
.loginBox{
  .icon{
    span{
      display: block;
      width: 100%;
      height: 120px;
      line-height: 120px;
      margin: 0 auto 20px;
      text-align: center;
      font-size: 40px;
      font-weight: bold;
      border-radius: 5px;
      background-color: #777;
      color: #fefefe;
    }
  }
  .login{
    padding: 0 3px;
    .submitButton{
      width: 100%;
      border-radius: 3px;
      background-color: #777;
      &:hover{
        background-color: #888;
      }
    }
  }
}
</style>
<style lang="scss">
.header .el-dropdown{
  color: #c0c4cc;
}
.search .el-input{
  input{
    border-radius: 0;
    background-color: transparent !important;
    border: 0;
    border: 1px solid #9e9d9c;
    color: #c0c4cc;
    padding-left: 40px;
    height: 36px;
    line-height: 36px;
  }
  .el-input__prefix{
    i{
      line-height: 36px;
    }
  }
}
.el-dropdown-menu__item:focus, .el-dropdown-menu__item:not(.is-disabled):hover{
  background-color: transparent !important;
  color: #c0c4cc !important;
}
</style>
