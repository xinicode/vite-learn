<template>
  <h1>组件3---- {{ num }}</h1>

  <a-button @click="eee">eee</a-button>
</template>
<script setup lang="ts">
import { mapState } from "vuex";
import store from "@/store";
import { computed, defineEmit, defineProps, reactive } from "vue";
const props = defineProps({
  msg: String,
});

const emit = defineEmit(["onChange"]);

const increment = () => {
  emit("onChange");
};

let num = computed(() => {
  return store.state.count;
});

const eee = () => {
  store.commit("sub", 3);
};

</script>

<style scoped>
a {
  color: #42b983;
}
</style>
