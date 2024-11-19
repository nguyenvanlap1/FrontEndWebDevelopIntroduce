<script setup>
     import FancyButton from '../components/FancyButton.vue';
</script>
<template>
    <p>Ten toi la: {{ username }}</p>
    <FancyButton  @click="changeUserName">Change Username</FancyButton>
    <v-icon
        color="warning"
        icon="mdi-information"
        size="small"
    ></v-icon>
</template>

<script>
    export default {
        props: {
            username: String
        },
        emits: ['change-username'],
        methods: {
            changeUserName() {
                this.$emit('change-username', 'Nguyen Minh Trung');
            }
        }
    }
</script>