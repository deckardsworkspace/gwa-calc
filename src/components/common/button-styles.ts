export type ColorName =
  | 'gray'
  | 'red'
  | 'yellow'
  | 'green'
  | 'blue'
  | 'indigo'
  | 'purple'
  | 'pink'
  | 'orange';

export const baseStyles =
  'hover:enabled:bg-gradient-to-b active:enabled:bg-gradient-to-b border hover:enabled:drop-shadow-sm disabled:bg-gray-100 disabled:text-gray-400 disabled:border-gray-300 disabled:cursor-not-allowed';

export const colorStyles: Record<ColorName, string> = {
  gray: 'bg-gray-50 text-gray-500 border-gray-300 hover:enabled:from-white hover:enabled:to-gray-100 active:enabled:from-gray-100 active:enabled:to-gray-50',
  red: 'bg-red-50 text-red-500 border-red-300 hover:enabled:from-white hover:enabled:to-red-100 active:enabled:from-red-100 active:enabled:to-red-50',
  yellow:
    'bg-yellow-50 text-yellow-500 border-yellow-300 hover:enabled:from-white hover:enabled:to-yellow-100 active:enabled:from-yellow-100 active:enabled:to-yellow-50',
  green:
    'bg-green-50 text-green-500 border-green-300 hover:enabled:from-white hover:enabled:to-green-100 active:enabled:from-green-100 active:enabled:to-green-50',
  blue: 'bg-blue-50 text-blue-500 border-blue-300 hover:enabled:from-white hover:enabled:to-blue-100 active:enabled:from-blue-100 active:enabled:to-blue-50',
  indigo:
    'bg-indigo-50 text-indigo-500 border-indigo-300 hover:enabled:from-white hover:enabled:to-indigo-100 active:enabled:from-indigo-100 active:enabled:to-indigo-50',
  purple:
    'bg-purple-50 text-purple-500 border-purple-300 hover:enabled:from-white hover:enabled:to-purple-100 active:enabled:from-purple-100 active:enabled:to-purple-50',
  pink: 'bg-pink-50 text-pink-500 border-pink-300 hover:enabled:from-white hover:enabled:to-pink-100 active:enabled:from-pink-100 active:enabled:to-pink-50',
  orange:
    'bg-orange-50 text-orange-500 border-orange-300 hover:enabled:from-white hover:enabled:to-orange-100 active:enabled:from-orange-100 active:enabled:to-orange-50',
};
