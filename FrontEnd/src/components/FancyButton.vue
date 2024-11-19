<template>
    <button class="fancy-button" @click="handleClick">
        <slot></slot>
    </button>
</template>

<style scoped> 
    .fancy-button { 
        background-color: #4CAF50; /* Green background */ 
        border: none; /* No border */ 
        color: white; /* White text */ 
        padding: 15px 32px; /* Some padding */ 
        text-align: center; /* Centered text */ 
        text-decoration: none; /* No underline */
        display: inline-block; /* Inline-block */ 
        font-size: 16px; /* Increase font size */ 
        margin: 4px 2px; /* Some margin */ 
        transition-duration: 0.4s; /* Transition effect */ 
        cursor: pointer; /* Pointer/hand icon on hover */ 
        border-radius: 12px; /* Rounded corners */ 
        } 
    .fancy-button:hover { 
        background-color: white; /* White background */ 
        color: black; /* Black text */ 
        border: 2px solid #4CAF50; /* Green border */ 
        } 
</style>

<script>
    export default {
        methods: {
            handleClick() {
                this.$emit('click');
            }
        }
    }
</script>