<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link
      :to="{
        name: 'User',
        params: { name: 'Van Lap' }
      }"
    >
      User
    </router-link>
  </div>
  <router-view></router-view>
</template>
