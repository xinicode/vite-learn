<template>
  <div class="container">
    <a-row>
      <a-col :span="12">col-12</a-col>
      <a-col :span="12">
        <HelloWorld :msg="msg" @onChange="checkVa"></HelloWorld>

        <HelloWorld2 v-bind:msg="msg" @onChange="checkVa" />
        <HelloWorld3 />

        <a-divider />

        <h1>{{ msg2 }}</h1>
        <a-button @click="check">tttt</a-button>
      </a-col>
    </a-row>

    <a-row> </a-row>
  </div>
</template>
<script lang="ts" setup>
import HelloWorld from "@/components/HelloWorld.vue";
import HelloWorld2 from "@/components/HelloWorld2.vue";
import HelloWorld3 from "@/components/HelloWorld3.vue";
import axios from "axios";
import { computed } from "vue";
import { useRouter } from "vue-router";
const msg: string = "";


const msg2 = computed(() => {
  // return store.state.count;
});

const router = useRouter();

const check = function () {
  // router.push({
  //   name: "login2",
  // });
  axios.get("/getList").then((rs) => {
    let datas = rs.data;
    console.log(datas)
  });
};
onMounted: {
}

const checkVa = () => {};
</script>
