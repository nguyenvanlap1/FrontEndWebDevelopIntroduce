<template>
  <v-container>
    <v-form @submit.prevent="submitForm">
      <v-text-field
        label="Tên người dùng"
        v-model="username"
        :rules="[rules.required]"
      ></v-text-field>
      <v-text-field
        label="Mật khẩu"
        v-model="password"
        :type="'password'"
        :rules="[rules.required]"
      ></v-text-field>
      <v-btn type="submit" color="primary">Đăng nhập</v-btn>
    </v-form>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      username: '',
      password: '',
      rules: {
        required: value => !!value || 'Trường này là bắt buộc',
      },
    };
  },
  methods: {
    submitForm() {
      alert(`Tên người dùng: ${this.username}\nMật khẩu: ${this.password}`);
    },
  },
};
</script>

<style scoped>
/* Thêm CSS tùy chọn ở đây */
</style>
