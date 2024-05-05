<script setup lang="ts">
import { IconCheck } from '@iconify-prerendered/vue-material-symbols';
import { computed, ref, watch } from 'vue';
import { useToastStore } from '@/stores/toast';
import { useUserStore } from '@/stores/user';
import RegularButton from '../common/RegularButton.vue';
import BottomSheet from '../common/BottomSheet.vue';

const props = defineProps<{
  open: boolean;
}>();

const emit = defineEmits(['logged-out']);

const open = computed(() => props.open);
const accountForm = ref();

const toastStore = useToastStore();
const userStore = useUserStore();

watch(open, () => {
  if (!accountForm.value) {
    return;
  }

  if (open.value) {
    console.log('[AccountForm] Opened');
    accountForm.value.sheetRef?.open();
  } else {
    console.log('[AccountForm] Closed');
    accountForm.value.sheetRef?.close();
  }
});

const logout = () => {
  userStore.logout();
  toastStore.showToast('Logged out', IconCheck());
  emit('logged-out');
};
</script>

<template>
  <BottomSheet ref="accountForm" @closed="$emit('logged-out')">
    <img class="size-8 rounded-full" :src="userStore.avatarUrl" :alt="userStore.username" />
    <h1>{{ userStore.username }}</h1>
    <RegularButton color="red" @click="logout">Log out</RegularButton>
  </BottomSheet>
</template>
