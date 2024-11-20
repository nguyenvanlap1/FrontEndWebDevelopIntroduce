<template>
  <v-container>
    <v-card>
      <v-card-title class="headline">Danh Sách Các Nhà Xuất Bản</v-card-title>
      <v-card-text>
        <v-simple-table>
          <thead>
            <tr>
              <th>Mã NXB</th>
              <th>Tên NXB</th>
              <th>Địa Chỉ</th>
              <th>Hành Động</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="nxb in nxbs" :key="nxb._id">
              <td>{{ nxb._id }}</td>
              <td>{{ nxb.tennxb }}</td>
              <td>{{ nxb.diachi }}</td>
              <td>
                <v-btn small color="primary" @click="deleteNxb(nxb._id)">Xóa</v-btn>
              </td>
            </tr>
          </tbody>
        </v-simple-table>
      </v-card-text>
    </v-card>

    <v-btn small color="primary" @click="codangthemnxb = !codangthemnxb">Thêm</v-btn>
    <v-form @submit.prevent="handleSubmit" v-if="codangthemnxb">
      <v-text-field
        v-model="form.manxb"
        label="Mã NXB"
        required
      ></v-text-field>
      <v-text-field
        v-model="form.tennxb"
        label="Tên NXB"
        required
      ></v-text-field>
      <v-text-field
        v-model="form.diachi"
        label="Địa Chỉ"
        required
      ></v-text-field>
      <v-btn type="submit" color="primary">Gửi</v-btn>
    </v-form>
  </v-container>
</template>

<script>
import nxbService from '../services/nxb.service';

export default {
  data() {
    return {
      codangthemnxb: false,
      nxbs: [],
      form: {
        manxb: "",
        tennxb: "",
        diachi: ""
      },
    };
  },
  methods: {
    async handleSubmit() {
      await nxbService.create(this.form);
      this.nxbs = await nxbService.findAll();
      this.isthemnxb = false;
    },
    async deleteNxb(id) {
      await nxbService.delete(id);
      this.nxbs = await nxbService.findAll();
    }
  },
  async mounted() {
    this.nxbs = await nxbService.findAll();
  }
};
</script>

<style scoped>
/* Thêm CSS tùy chỉnh nếu cần */
</style>
