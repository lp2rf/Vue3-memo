import { defineStore } from "pinia";
import type { CatalogType, MemoType } from "./type";
import { geneId, localGetItem, localSetItem } from "@/utils";
const indexStore = defineStore("index", {
  state: () => ({
    catalogs: [] as CatalogType[],
    memos: [] as MemoType[],
    active_cataid: null as number | null,
    active_memoid: null as number | null,
  }),

  actions: {
    getCatalogs() {
      let data = localGetItem("catalogs");
      if (data) {
        this.catalogs = data;
      }
    },
    getMemos() {
      let data = localGetItem("memos");
      if (data) {
        this.memos = data;
      }
    },
    setMemos(id: number | null) {
      this.active_memoid = id;
      localSetItem("active_memoid", id);
    },
    setCataid(id: number | null) {
      this.active_cataid = id;
      localSetItem("active_cataid", id);
    },
    createCata(val: CatalogType) {
      let curcata = Object.assign({}, val, { cata_id: geneId() });
      this.catalogs.push(curcata);
      localSetItem("catalogs", this.catalogs);
    },
  },
});
export default indexStore;
