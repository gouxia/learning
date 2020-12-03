<template>
  <div class="login-wrap">
    <el-form
      class="login-from"
      label-position="top"
      label-width="80px"
      :model="formdata"
    >
      <h2>用户登录</h2>
      <el-form-item label="用户名">
        <el-input v-model="formdata.username"></el-input>
      </el-form-item>
      <el-form-item label="密码">
        <el-input v-model="formdata.password"></el-input>
      </el-form-item>
      <el-button
      @click="loginScuess()"
       class="login-btn" type="primary">登录</el-button>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      labelPosition: "top",
      formdata: {
        username: "",
        password: "",
      },
    };
  },
  methods: {
    //登录成功进入管理页
    loginScuess() {
      console.log(this)
      this.$message.success('登录成功')
      this.$router.push({name: 'home'})
    },
  },
};
</script>

<style lang="scss" scoped>
.login-wrap {
  height: 760px;
  background-color: #324152;
  //弹性盒子布局
  display: flex;
  justify-content: center;
  align-items: center;
  .login-from {
    width: 400px;
    background-color: #ffffff;
    border-radius: 5px;
    padding: 30px;
    .login-btn {
      width: 100%;
    }
  }
}
</style>
