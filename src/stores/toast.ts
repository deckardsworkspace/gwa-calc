import { ref, type Ref, type VNode } from 'vue';
import { defineStore } from 'pinia';

const INITIAL_MESSAGE = 'Inactive';
const TOAST_TIMEOUT_MSEC = 3500;

interface ToastStore {
  message: Ref<string>;
  icon?: Ref<VNode | undefined>;
  isVisible: Ref<boolean>;
  showToast: (message: string, icon?: VNode) => void;
}

const createToastStore = (): ToastStore => {
  const message = ref<string>(INITIAL_MESSAGE);
  const icon = ref<VNode | undefined>(undefined);
  const isVisible = ref<boolean>(false);
  const timeoutId = ref<NodeJS.Timeout | undefined>(undefined);

  const showToast = (newMessage: string, newIcon?: VNode) => {
    if (timeoutId.value) {
      clearTimeout(timeoutId.value);
    }

    message.value = newMessage;
    icon.value = newIcon;
    isVisible.value = true;

    timeoutId.value = setTimeout(() => {
      isVisible.value = false;
    }, TOAST_TIMEOUT_MSEC);
  };

  return { message, icon, isVisible, showToast };
};

export const useToastStore = defineStore('toast', createToastStore);
