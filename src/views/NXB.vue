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
            <tr v-for="publisher in publishers" :key="publisher.manxb">
              <td>{{ publisher._id}}</td>
              <td>{{ publisher.tennxb }}</td>
              <td>{{ publisher.diachi }}</td>
              <td>
                <v-btn small color="primary" @click="deletePublisher(publisher._id)">Xóa</v-btn>
              </td>
            </tr>
          </tbody>
        </v-simple-table>
      </v-card-text>
    </v-card>
  </v-container>

  <v-container>
    <v-btn small color="primary" @click="isthemnxb = !isthemnxb">Thêm</v-btn>
    <v-form @submit.prevent="handleSubmit" v-if="isthemnxb">
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
      isthemnxb: false,
      publishers: [],
      form: {
        manxb: "",
        tennxb: "",
        diachi: ""
      },
    };
  },
  methods: {
    editPublisher(publisher) {
      alert(`Chỉnh sửa nhà xuất bản: ${publisher.tennxb}`);
      // Thực hiện các hành động chỉnh sửa tại đây
    },
    async handleSubmit() {
      await nxbService.create({
        manxb: this.form.manxb,
        tennxb: this.form.tennxb,
        diachi: this.form.diachi
      });
      this.publishers = await nxbService.findAll();
      this.isthemnxb = false;
    },
    async deletePublisher(manxb) {
      try {
        await nxbService.delete(manxb);
        this.publishers = await nxbService.findAll();
      } catch (error) {
        console.log(error);
      }
    },
  },
  async mounted() {
    try {
      this.publishers = await nxbService.findAll();
    } catch (error) {
      console.log(error);
    }
  }
};
</script>

<style scoped>
/* Thêm CSS tùy chỉnh nếu cần */
</style>
