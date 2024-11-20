<template>
  <v-container>
    <v-form @submit.prevent="handleLogin">
      <v-text-field v-model="msnv" label="Tên Đăng Nhập"></v-text-field>
      <v-text-field v-model="password" label="Mật Khẩu" type="password"></v-text-field>
      <v-btn type="submit" color="primary">Đăng Nhập</v-btn>
    </v-form>
  </v-container>
</template>

<script>
import authService from '../services/auth.service';
export default {
  data() {
    return {
      msnv: '',
      password: '',
    };
  },
  methods: {
    async handleLogin() {
        try{
            await authService.login({msnv: this.msnv,password: this.password});
            alert(`Tên Đăng Nhập: ${this.msnv}\nMật Khẩu: ${this.password}`);
        } catch(error) {
            console.log(error);
        }
    },
  },
};
</script>

<style scoped>
/* CSS tùy chỉnh nếu cần */
</style>
