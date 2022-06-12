<template>
  <div>
    <div id="tab-nav">
      <div class="w">
        <top-navigation>
          <span slot="login">你有账号？</span>
        </top-navigation>
      </div>
    </div>

    <div class="w">
      <div class="register">
        <h1>欢迎注册</h1>
          <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
            <el-form-item label="用户名" prop="userName">
              <el-input v-model="ruleForm.userName"></el-input>
            </el-form-item>
            <el-form-item label="密码" prop="pass">
              <el-input type="password" v-model="ruleForm.pass" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="确认密码" prop="checkPass">
              <el-input type="password" v-model="ruleForm.checkPass" autocomplete="off"></el-input>
            </el-form-item>

            <el-form-item label="身份证" prop="userID">
              <el-input v-model="ruleForm.userID"></el-input>
            </el-form-item>

            <el-form-item label="年龄" prop="age">
              <el-input v-model.number="ruleForm.age"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
              <el-button @click="resetForm('ruleForm')">重置</el-button>
            </el-form-item>
          </el-form>
        </div>
    </div>
  </div>
</template>

<script>
  import TopNavigation from "../../components/common/TopNavigation";
  export default {
    name: "Register",
    components: {TopNavigation},
    data() {
      var checkAge = (rule, value, callback) => {
        if (!value) {
          return callback(new Error('年龄不能为空'));
        }
        setTimeout(() => {
          if (!Number.isInteger(value)) {
            callback(new Error('请输入数字值'));
          } else {
            if (value < 18) {
              callback(new Error('必须年满18岁'));
            } else {
              callback();
            }
          }
        }, 1000);
      };

      var userId = (rule, value, callback) => {
        if (value.length < 9) {
          callback(new Error("请输入身份证"));
        } else {
          if (/^\d{17}[x,X]|\d{18}$/.test(value)) {
            callback();
          }else {
            callback(new Error("输入身份证格式不对！"));
          }
        }
      };

      var validatePass = (rule, value, callback) => {
        if (value.length < 9) {
          callback(new Error("请输入身份证"));
        } else {
          if (/^(?=.*?[A-Za-z]+)(?=.*?[0-9]+)(?=.*?[A-Z]).*$/.test(value)) {
            callback();
          }else {
            callback(new Error("密码必须包含数字、字母，字母必须有大小写!"));
          }
        }
      };
      var validatePass2 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请再次输入密码'));
        } else if (value !== this.ruleForm.pass) {
          callback(new Error('两次输入密码不一致!'));
        } else {
          callback();
        }
      };
      return {
        ruleForm: {
          pass: '',
          checkPass: '',
          age: '',
          userName: '',
          userID: ''
        },
        rules: {
          pass: [
            { required:true, validator: validatePass, trigger: 'blur' }
          ],
          checkPass: [
            { required:true, validator: validatePass2, trigger: 'blur' }
          ],
          age: [
            { validator: checkAge, trigger: 'blur' }
          ],
          userName: [
            { required: true, message: "请输入用户名", trigger: "blur" },
            { min: 3, max: 5, message: "长度在 3 到 5 个字符", trigger: "blur" }
          ],
          userID: [
            { required: true, validator: userId, trigger: "blur" }
          ]
        }
      };
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            this.$message({
              message: '注册成功',
              type: 'success'
            });
          } else {
            this.$message.error('您输入的信息格式不对');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }
  }
</script>

<style lang="less" scoped>
  #tab-nav {
    background-color: #e3e4e5;
    border-top: 1px solid #666;
    border-bottom: 1px solid #ccc;
  }

  .register {
    width: 460px;
    margin: 80px auto;

    /deep/ .el-button--primary span{
      color: #fff;
    }

    h1 {
      text-align: center;
      margin-bottom: 50px;
    }
  }

</style>
