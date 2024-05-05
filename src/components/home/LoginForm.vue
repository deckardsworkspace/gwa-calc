<script setup lang="ts">
import {
  IconCheck,
  IconError,
  IconLoginSharp,
  IconPassword2,
  IconPerson,
} from '@iconify-prerendered/vue-material-symbols';
import { computed, ref, watch, type Ref } from 'vue';
import { useMutation, useQuery } from '@tanstack/vue-query';
import { type LoginResponse } from '@/api';
import { LS_KEY_AUTH_TOKEN, QK_USER_DETAILS } from '@/utils/constants';
import { useToastStore } from '@/stores/toast';
import { useUserStore } from '@/stores/user';
import apiClient from '@/api/client';
import RegularButton from '../common/RegularButton.vue';
import TextInput from '@/components/common/TextInput.vue';
import BottomSheet from '@/components/common/BottomSheet.vue';

const props = defineProps<{
  open: boolean;
}>();

const open = computed(() => props.open);
const loginForm = ref();

watch(open, () => {
  if (!loginForm.value) {
    return;
  }

  if (open.value) {
    console.log('[LoginForm] Opened');
    loginForm.value.sheetRef?.open();
  } else {
    console.log('[LoginForm] Closed');
    loginForm.value.sheetRef?.close();
  }
});

const email: Ref<string | undefined> = ref(undefined);
const password: Ref<string | undefined> = ref(undefined);

const userStore = useUserStore();
const toastStore = useToastStore();
const emit = defineEmits(['logged-in']);

const {
  refetch: getUserDetails,
  data: userDetails,
  isLoading: isGettingUserDetails,
} = useQuery({
  queryKey: [QK_USER_DETAILS],
  queryFn: () => apiClient.accountApi.getLoggedInUser(),
  enabled: false,
  refetchOnWindowFocus: false,
});

const { mutateAsync: login, isPending: isLoggingIn } = useMutation({
  mutationFn: (): Promise<LoginResponse> => {
    if (!email.value || !password.value) {
      return new Promise((_, reject) => reject(new Error('Email and password are required')));
    }

    return apiClient.accountApi.login({
      loginRequest: {
        email: email.value,
        password: password.value,
      },
    });
  },
  onSuccess: async (data: LoginResponse) => {
    localStorage.setItem(LS_KEY_AUTH_TOKEN, data.token);
    getUserDetails();
  },
  onError: (error: Error) => {
    toastStore.showToast(error.message, IconError());
  },
});

watch(userDetails, () => {
  if (userDetails.value && email.value) {
    userStore.login(userDetails.value.name, email.value);
    toastStore.showToast('Logged in', IconCheck());
    emit('logged-in');
  }
});

const isPending = computed(() => isLoggingIn.value === true || isGettingUserDetails.value === true);
</script>

<template>
  <BottomSheet ref="loginForm" @closed="$emit('logged-in')">
    <div class="py-8 flex flex-col items-center">
      <h3 class="text-lg font-semibold">Welcome to GWA Calc 2</h3>
      <p class="text-sm text-gray-500 pb-8">Log in to sync your grades</p>

      <div class="max-w-80 w-full">
        <TextInput
          v-model="email"
          placeholder="Email address"
          type="email"
          :icon="IconPerson"
          :disabled="isPending"
          required
        />
        <TextInput
          class="mt-2"
          v-model="password"
          placeholder="Password"
          type="password"
          :disabled="isPending"
          :icon="IconPassword2"
          required
        />
        <RegularButton
          class="mt-4 w-full"
          color="blue"
          :left-icon="IconLoginSharp"
          :disabled="isPending"
          @click="login"
          >Log in</RegularButton
        >
      </div>
    </div>
  </BottomSheet>
</template>
