<template>
  <v-app-bar :elevation="2">
    <template v-slot:prepend>
      <v-app-bar-nav-icon></v-app-bar-nav-icon>
    </template>

    <v-app-bar-title>Application Bar</v-app-bar-title>

    <v-spacer></v-spacer>

    <v-btn text>Home</v-btn>
    <v-btn text>About</v-btn>
    <v-btn text>Contact</v-btn>
    <v-btn text @click="login">Đăng Nhập</v-btn>
    <v-btn text>Đăng Xuất</v-btn>
  </v-app-bar>
</template>

<script>
import authService from '../services/auth.service';

export default {
  name: 'AppBar',
  methods: {
    async login() {
      try {
        const result = await authService.login({ msnv: 'NV12345', password: "12345" });
        console.log(result);
      } catch (error) {
        console.error('Failed to login:', error.message);
      }
    },
  },
};
</script>

<style scoped>
/* Thêm CSS tùy chỉnh ở đây nếu cần */
</style>
