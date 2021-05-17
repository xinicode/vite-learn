<template>
  <h1>组件4----- {{ count }}</h1>

  <a-button type="primary" @click="dd">组件4</a-button>
</template>
<script lang="ts">
import store from "@/store";
import { defineComponent } from "vue";
import { mapState } from "vuex";

export default defineComponent({
  setup() {
    const num = "aaa";
    const dd = () => {
      // store.dispatch("addNasync", 2);
      let t = store.getters.getTodoById(1)
    };
    return {
      num,
      dd,
    };
  },
  computed: mapState({
    count: (state) => store.state.count,
  }),
});
</script>
