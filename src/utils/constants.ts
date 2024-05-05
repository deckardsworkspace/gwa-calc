import { PshsTerm } from './terms-pshs';

export const DEFAULT_TERM: PshsTerm = PshsTerm.GRADE_7;

export const API_HOST: string = import.meta.env.VITE_API_URL ?? 'http://localhost:9050';
export const BASE_HOST: string = import.meta.env.VITE_BASE_URL ?? 'http://localhost:3050';

export const LS_KEY_AUTH_TOKEN: string = 'authToken';
export const LS_KEY_USERNAME: string = 'username';
export const LS_KEY_EMAIL: string = 'email';
export const LS_KEY_AVATAR_URL: string = 'avatarUrl';

export const QK_USER_DETAILS: string = 'userDetails';
