import { defineStore } from "pinia";

interface State {
  userList: UserInfo[];
  user: UserInfo;
}

interface UserInfo {
  name: string;
  age: number;
}

export const useUserStore = defineStore("user", {
  state: (): State => {
    return {
      userList: [],
      user: null,
    };
  },
});
