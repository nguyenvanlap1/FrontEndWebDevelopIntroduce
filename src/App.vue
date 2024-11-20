<template>
  <v-app>
    <AppHeader />
    <v-main>
      <v-container>
        <div id="nav">
          <!-- <router-link to="/">Home</router-link> |
          <router-link to="/about">About</router-link> | -->
          <!-- <router-link
            :to="{
              name: 'User',
              params: { name: 'Van Lap' }
            }"
          >
            User
          </router-link> -->
        </div>
        <router-view />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import AppHeader from './components/AppHeader.vue';

export default {
  components: {
    AppHeader,
  },
};
</script>

<style>
/* Thêm CSS tùy chỉnh ở đây nếu cần */
</style>
