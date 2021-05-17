<template>
  <a-auto-complete
    v-model:value="value"
    style="width: 200px"
    placeholder="input here"
    @select="onSelect"
    @search="onSearch"
  >
    <template #dataSource>
      <a-select-option v-for="email in result" :key="email">
        {{ email }}
      </a-select-option>
    </template>
  </a-auto-complete>

  <h3>{{ num }}</h3>
  {{ theme }}
  <button @click="increment">bbb</button>
  <ul>
    <li v-for="item in products" :key="item.id">
      {{ item.title }}
    </li>
  </ul>
</template>
<script setup lang="ts">
import { ref, useContext, provide, inject, watchEffect } from "vue";

import userProducts from "@/views/model/product.model";

const { expose } = useContext();

interface MockVal {
  value: string;
}

const value = ref("");

const options = ref<MockVal[]>([
  //  {
  //    value:"1",
  //  },
  //  {
  //    value:"1",
  //  }
]);

const num = ref(123);

const onSelect = (value: string) => {
};

const result = ref<string[]>([]);

const mockVal = (str: string, repeat = 1): MockVal => {
  return {
    value: str.repeat(repeat),
  };
};

const onSearch = (val: string) => {
  let res: string[];
  if (!val || val.indexOf("@") >= 0) {
    res = [];
  } else {
    res = ["gmail.com", "163.com", "qq.com"].map(
      (domain) => `${val}@${domain}`
    );
  }
  result.value = res;
};

const theme = inject("test1");

ref: obj = 123;
const increment = () => {
  num.value = Math.random();
};

watchEffect(() => {
});

expose({
  increment,
});

const { products } = await userProducts();
</script>

<style scoped>
a {
  color: #42b983;
}
</style>
