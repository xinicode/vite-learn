<template>
  <!-- <HelloWorld msg="aaa" /> -->
  <!-- <h3>aaaaa</h3>
  <button @click="aaat">aaa</button> -->


    <router-view />


  <!-- <div>
    <Suspense>
      <template #default>
        <DemoChild ref="compa" />
      </template>
      <template #fallback> loadding2 </template>
    </Suspense>
  </div> -->

</template>

<script setup lang="ts">
import { ref, onMounted, provide } from "vue";
// import HelloWorld from "@/components/HelloWorld.vue";
import A from "@/components/A.vue";
// import DemoChild from "@/components/DemoChild.vue";

ref: num = 32;
ref: font = {
  size: "3em",
};
ref: color = "red";
const compa = ref(null);

const themeRef = ref("dark");
provide("test1", themeRef);

const aaat = () => {
  themeRef.value = "red";
};
</script>

<style  scoped>
:root {
  --varColor: red;
}
a {
  color: var(--varColor);
}
.ttc {
  color: var(--varColor);
  font-size: v-bind("font.size");
}
</style>