<template>
  <div class="catalogs-comp">
    <div class="handle">
      <el-button round @click="toCreate">新建文件夹</el-button>
    </div>
    <div class="catas-list">
      <div
        v-for="item in store.catalogs"
        :key="item.cata_id"
        :class="
          store.active_cataid == item.cata_id ? 'cata-item active' : 'cata-item'
        "
        @click="Store.setCataId(item.cata_id)"
      >
        <el-icon :size="17">
          <FolderOpened v-if="store.active_cataid == item.cata_id" />
          <FolderRemove v-else />
        </el-icon>
        <span class="text">{{ item.cata_name }}</span>
      </div>
    </div>
  </div>
</template>
