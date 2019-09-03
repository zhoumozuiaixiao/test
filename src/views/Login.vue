<template>
  <div id="login">
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>登录</span>
        <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>
      </div>
      <el-form
        :model="ruleForm"
        status-icon
        :rules="rules"
        ref="ruleForm"
        label-width="100px"
        class="demo-ruleForm"
      >
        <el-form-item label="用户名" prop="username">
          <el-input v-model="ruleForm.username"></el-input>
        </el-form-item>
        <el-form-item>
          <el-form-item label="密码" prop="password">
            <el-input type="password" v-model="ruleForm.password" autocomplete="off"></el-input>
          </el-form-item>
          <el-button type="primary" @click="submitForm">提交</el-button>
          <el-button @click="resetForm('ruleForm')">重置</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script>
//引入login接口
import { postLogin } from "../apis/apis";
//用户名的正则表达式
const usernameReg = function(value) {
  //正则
  const reg = /^[0-9]*$/;

  return reg.test(value);
};
export default {
  data() {
    //用户名
    var username = (rule, value, callback) => {
      //获取长度
      let len = value.length;
      //判断
      if (value === "") {
        callback(new Error("请输入用户名"));
      } else if (len < 2 || len > 10) {
        callback("用户名长度为2到10位");
      } else if (!usernameReg(value)) {
        callback(new Error("用户名仅支持数字"));
      } else {
        callback();
      }
    };
    return {
      ruleForm: {
        username: "", //用户名
        password: "" //密码
      },
      rules: {
        username: [{ validator: username, trigger: "blur" }],
        password: [
          { required: true, message: "请输入密码", trigger: "blur" },
          { min: 1, max: 5, message: "长度在 1 到 5 个字符", trigger: "blur" }
          //  { validator:username, trigger: 'blur' }
        ]
      }
    };
  },
  methods: {
    submitForm() {
      this.$refs.ruleForm.validate(valid => {
        //获取用户名和密码
        let { username, password } = this.ruleForm;
        let user = {
          username,
          password
        };
        if (valid) {
           postLogin(user).then(res => {
            console.log(res);
            if (res.token) {                
                //将token保存到本地
               localStorage.setItem("token", res.token);
                //将分组保留在本地
                localStorage.setItem("userGroup", res.userGroup);
                //页面跳转
                this.$router.replace("/index"); 
       
              }else {
                alert("登录失败");
            }
          });
          console.log(1);
          
        } else {
          // console.log('error submit!!');
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  }
};
</script>

<style lang="less" scoped>
</style>