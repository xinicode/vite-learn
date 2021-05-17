<template>
  <a-button @click="state.count++" type="primary"
    >count is: {{ state.count }}</a-button
  >
  <h1>{{ props.msg }}</h1>
  <button @click="increment">bbb</button>
</template>
<script setup lang="ts">
  
import { defineEmit, defineProps, reactive } from "vue";

const props = defineProps({
  msg: String,
});

const emit = defineEmit(["onChange"]);

const increment = () => {
  emit("onChange");
};



const state = reactive({ count: 0 });
</script>

<style scoped>
a {
  color: #42b983;
}
</style>
