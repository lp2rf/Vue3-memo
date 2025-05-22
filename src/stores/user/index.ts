import { defineStore } from "pinia";
import type { UserType } from "./types";
import { ImitateHttp } from "@/utils";
import Login from "@/views/Login.vue";
import { lo } from "element-plus/es/locales.mjs";

const userStore = defineStore("user", {
  state: () => ({
    userInfo: null as UserType | null,
  }),

  actions: {
    setUser(user: UserType) {
      this.userInfo = user;
      localStorage.setItem("login_user", JSON.stringify(user));
    },
    register(form: UserType) {
      return ImitateHttp((s, f) => {
        form.user_id = parseInt(form.phone.slice(-4));
        localStorage.setItem("regis_user", JSON.stringify(form));
        s("ok");
      });
    },
    login(form: UserType) {
      let regins = localStorage.getItem("regis_user");
      return ImitateHttp((s, f) => {
        if (!regins) {
          f("用户未注册");
        } else {
          let user: UserType = JSON.parse(regins);
          if (user.phone == form.phone && user.password == form.password) {
            this.setUser(user);
            s("登录成功");
          } else {
            s("登录失败");
          }
        }
      });
    },
    logout() {
      localStorage.removeItem("login_user");
      this.userInfo = null;
    },
  },
});

export default userStore;
