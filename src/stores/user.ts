import { ref, type Ref } from 'vue';
import { defineStore } from 'pinia';
import { useStorage } from '@vueuse/core';
import {
  LS_KEY_AUTH_TOKEN,
  LS_KEY_USERNAME,
  LS_KEY_EMAIL,
  LS_KEY_AVATAR_URL,
} from '@/utils/constants';
import sha256 from 'crypto-js/sha256';

interface UserStore {
  username: Ref<string | undefined>;
  email: Ref<string | undefined>;
  avatarUrl: Ref<string | undefined>;
  authToken: Ref<string | undefined>;
}

const createUserStore = (): UserStore => {
  const username = useStorage(LS_KEY_USERNAME, ref<string | undefined>(undefined));
  const email = useStorage(LS_KEY_EMAIL, ref<string | undefined>(undefined));
  const avatarUrl = useStorage(LS_KEY_AVATAR_URL, ref<string | undefined>(undefined));
  const authToken = useStorage(LS_KEY_AUTH_TOKEN, ref<string | undefined>(undefined));

  return { username, email, avatarUrl, authToken };
};

export const useUserStore = defineStore('user', {
  state: () => createUserStore(),
  actions: {
    async login(username: string, email: string) {
      this.username = username;
      this.email = email;

      const emailHash = sha256(email).toString();
      const avatarUrl = `https://www.gravatar.com/avatar/${emailHash}`;
      const response = await fetch(avatarUrl, { method: 'HEAD' });
      if (response.ok) {
        this.avatarUrl = avatarUrl;
      }
    },
    logout() {
      this.username = undefined;
      this.email = undefined;
      this.avatarUrl = undefined;
      this.authToken = undefined;
    },
  },
});
