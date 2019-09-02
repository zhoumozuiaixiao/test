<template>
  <div id="changepwd">
    <el-form
      :model="ruleForm"
      status-icon
      :rules="rules"
      ref="ruleForm"
      label-width="100px"
      class="demo-ruleForm"
    >
      <el-form-item label="旧密码" prop="password">
        <el-input type="password" v-model="ruleForm.password" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="newPassword">
        <el-input type="password" v-model="ruleForm.newPassword" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="确认密码" prop="confirmPassword">
        <el-input type="password" v-model="ruleForm.confirmPassword" autocomplete="off"></el-input>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
        <el-button @click="resetForm('ruleForm')">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
//用户名的正则表达式
const pwdReg=function(value){
  //正则
  const reg= /^[0-9]*$/;

  return reg.test(value)
}
export default {
  data() {
      //修改密码
    var validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else if (!pwdReg(value)) {
        callback(new Error("密码的格式为纯数字!"));
      } else {
        if (this.ruleForm.confirmPassword !== "") {
          this.$refs.ruleForm.validateField("confirmPassword");
        }
        callback();
      }
    };
    //确认密码
    var validatePass2 = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请再次输入密码"));
      } else if (value !== this.ruleForm.newPassword) {
        callback(new Error("两次输入密码不一致!"));
      } else {
        callback();//验证成功，放行
      }
    };
    return {
      ruleForm: {
        password: "", //旧密码
        newPassword: "", //新密码
        confirmPassword: "" //确认密码
      },
      rules: {
        password: [
          { required: true, message: "请输入密码", trigger: "blur" },
          { min: 3, max: 5, message: "长度在 3 到 5 个字符", trigger: "blur" }
        ],
        newPassword: [{ validator: validatePass, trigger: "blur", required: true }],
        confirmPassword: [{ validator: validatePass2, trigger: "blur", required: true }]
      }
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          alert("submit!");
        } else {
          console.log("error submit!!");
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

<style lang="scss" scoped>
</style>