<template>
  <div class="index-page">
    <div class="catalogs">
      <Cataloge></Cataloge>
    </div>
    <div class="memos">
      <Memos></Memos>
    </div>
    <div class="details"></div>
  </div>
</template>

<script setup lang="ts">
import indexStore from "@/stores";
import Cataloge from "./cataloge.vue";
import Memos from "./memos.vue";
const store = indexStore();
</script>

<style lang="less">
.index-page {
  display: flex;
  align-items: stretch;
  height: calc(100vh - 55px);
}
.catalogs {
  width: 20%;
  background: #f9f9f9;
}
.memos {
  width: 25%;
}
.details {
  flex: 1;
}
</style>
