<template>
  <div>
    <a-row>
      <a-col :span="12">
        <h1>{{ textValue }}</h1>
      </a-col>
      <a-col :span="12">
        <div id="app">
          <a-input
            placeholder=""
            class="my_ipt"
            @change="handelInput"
            :value="textValue"
          />
          <a-button type="primary" @click="addList">添加事项</a-button>

          <a-list item-layout="horizontal" :data-source="infoList">
            <template #renderItem="{ item }">
              <a-list-item>
                <a-checkbox
                  :checked="item.done"
                  @change="dbStatus($event, item.id)"
                  >{{ item.title }}</a-checkbox
                >
                <a slot="actions" @click="removeItem(item.id)">删除</a>
              </a-list-item>
            </template>

            <template #footer>
              <div class="footer">
                <span>{{ unDoneLength }}条剩余</span>
                <a-button-group>
                  <a-button
                    :type="viewkey === 'all' ? 'primary' : 'default'"
                    @click="changeList('all')"
                    >全部</a-button
                  >
                  <a-button
                    :type="viewkey === 'unDone' ? 'primary' : 'default'"
                    @click="changeList('unDone')"
                    >未完成</a-button
                  >
                  <a-button
                    :type="viewkey === 'done' ? 'primary' : 'default'"
                    @click="changeList('done')"
                    >已完成</a-button
                  >
                </a-button-group>
                <a @click="clean">清除已完成</a>
              </div>
            </template>
          </a-list>
        </div>
      </a-col>

      <a-col :span="12"></a-col>
      <a-col :span="12">
        <a-button type="primary" @click="goBack">go</a-button>
      </a-col>
    </a-row>
  </div>
</template>
<script setup lang="ts">
import store from "@/store";
import { computed } from "vue";
import { useRouter } from "vue-router";

interface DataItem {
  title: string;
}

const router = useRouter();

const goBack = () => {
  router.go(-1);
};

onMounted: {
}

const addList = () => {
  store.commit("addList");
};

const unDoneList = () => {
  store.commit("unDoneList");
};

const doneList = () => {
  store.commit("doneList");
};

const handelInput = (e: any) => {
  store.commit("setInputValue", e.target.value);
};

let viewkey = computed(() => {
  return store.state.viewKey;
});

let unDoneLength = computed(() => {
  return store.getters.unDoneLength;
});

let textValue = computed(() => {
  return store.state.textValue;
});

let infoList = computed(() => {
  return store.getters.infoList;
});

let removeItem = (id: any) => {
  store.commit("removeListObj", id);
};

let dbStatus = (e: any, id: any) => {
  const param = {
    id: id,
    status: e.target.checked,
  };
  store.commit("changeStatus", param);
};

const changeList = (key: string) => {
  store.commit("changeViewKey", key);
};

let clean = () => {
  store.commit("cleanDone");
};


</script>

