// 使用el-form和el-form-item组件设置登录页面
<template>
  <div class="login-page">
    <el-from class="login-form">
      <h2 class="title">{{ is_login ? "登录" : "注册" }}</h2>
      <el-form-item v-if="!is_login">
        <el-input place-holder="用户名" size="large" v-model="form.user_name" />
      </el-form-item>
      <el-form-item>
        <el-input place-holder="手机号" size="large" v-model="form.phone" />
      </el-form-item>
      <el-form-item>
        <el-input place-holder="密码" size="large" v-model="form.password" />
      </el-form-item>
      <el-form-item>
        <el-button @click="submitForm">
          {{ is_login ? "提交" : "注册" }}
        </el-button>
        <div class="text-row">
          <span class="text-wrap" @click="is_login = !is_login">
            <span>{{
              is_login ? "没有账号？去注册" : "已经注册，前往登录"
            }}</span>
          </span>
        </div>
      </el-form-item>
    </el-from>
  </div>
</template>

<style lang="less">
.login-form {
  width: 360px;
  background-color: #fff;
  padding: 30px 50px 10px 50px;
  border-radius: 10px;
  margin: 20px auto;
  box-shadow: var(--el-box-shadow);
  .title {
    text-align: center;
    margin-bottom: 18px;
  }
}
</style>

<script setup lang="ts">
import { ref } from "vue";
const is_login = ref(true);
const loading = ref(false);
const form = ref({
  user_name: "",
  phone: "",
  password: "",
});
const submitForm = () => {};
</script>
