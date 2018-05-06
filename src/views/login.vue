<template>
  <div>
    <div class="login-top">Admin System</div>
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>用户登录</span>
      </div>
      <div class="login-area">
        <el-form :model="loginForm" :rules="rules" ref="loginForm" label-width="70px" class="demo-ruleForm">
          <el-form-item label="账号" prop="account">
            <el-input v-model="loginForm.account"></el-input>
          </el-form-item>
          <el-form-item label="密码" prop="password">
            <el-input v-model="loginForm.password"></el-input>
          </el-form-item>
        </el-form>
        <el-form>
          <el-button type="primary">登录</el-button>
        </el-form>
      </div>
    </el-card>
  </div>
</template>

<script>
export default {
  data () {
    return {
      loginForm: {
        account: null,
        password: null
      },
      rules: {
        account: [
          {required: true, message: '请输入账号', trigger: 'blur'}
        ],
        password: [
          {required: true, message: '请输入密码', trigger: 'blur'}
        ]
      }
    }
  }
}
</script>

<style lang="less">
.login-top{
  padding:0 30px;
  height: 70px;
  line-height: 70px;
  background: #409EFF;
  text-align: left;
  font-size: 20px;
  color:#fff;
}
.box-card {
    margin: 100px auto 0;
    width: 480px;
}
</style>
