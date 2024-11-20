<template>
  <v-app-bar :elevation="2">
    <template v-slot:prepend>
      <v-app-bar-nav-icon></v-app-bar-nav-icon>
    </template>

    <v-app-bar-title>Application Bar</v-app-bar-title>

    <v-spacer></v-spacer>

    <v-btn text>Home</v-btn>
    <v-btn text>About</v-btn>
    <v-btn text><router-link @click="findAll" to="/nxb">NXB</router-link></v-btn>
    <v-btn text><router-link to="/login">Đăng Nhập</router-link></v-btn>
    <v-btn text @Click="logout">Đăng Xuất</v-btn>
  </v-app-bar>
</template>
<script>
import authService from '../services/auth.service';
import nxbService from '../services/nxb.service';
export default {
  name: 'AppBar',
  methods: {
    async logout() {
      try {
        console.log(await authService.logout());
      } catch(error) {
        console.log(error);
      }
    },

    async  findAll() {
      try{
        console.log(await nxbService.findAll());
      }catch(error) {
          console.log(error);
        }
      }
    },
  async mounted() {
      try{
        console.log(await authService.checkLogin());
      } catch(error) {
        console.log(error);
      }
  }
};
</script>

<style scoped>
/* Thêm CSS tùy chỉnh ở đây nếu cần */
</style>
