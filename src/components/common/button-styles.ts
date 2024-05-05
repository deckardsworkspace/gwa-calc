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
  'hover:bg-gradient-to-b active:bg-gradient-to-b border hover:drop-shadow-sm';

export const colorStyles: Record<ColorName, string> = {
  gray: 'bg-gray-50 text-gray-500 border-gray-300 hover:from-white hover:to-gray-100 active:from-gray-100 active:to-gray-50',
  red: 'bg-red-50 text-red-500 border-red-300 hover:from-white hover:to-red-100 active:from-red-100 active:to-red-50',
  yellow:
    'bg-yellow-50 text-yellow-500 border-yellow-300 hover:from-white hover:to-yellow-100 active:from-yellow-100 active:to-yellow-50',
  green:
    'bg-green-50 text-green-500 border-green-300 hover:from-white hover:to-green-100 active:from-green-100 active:to-green-50',
  blue: 'bg-blue-50 text-blue-500 border-blue-300 hover:from-white hover:to-blue-100 active:from-blue-100 active:to-blue-50',
  indigo:
    'bg-indigo-50 text-indigo-500 border-indigo-300 hover:from-white hover:to-indigo-100 active:from-indigo-100 active:to-indigo-50',
  purple:
    'bg-purple-50 text-purple-500 border-purple-300 hover:from-white hover:to-purple-100 active:from-purple-100 active:to-purple-50',
  pink: 'bg-pink-50 text-pink-500 border-pink-300 hover:from-white hover:to-pink-100 active:from-pink-100 active:to-pink-50',
  orange:
    'bg-orange-50 text-orange-500 border-orange-300 hover:from-white hover:to-orange-100 active:from-orange-100 active:to-orange-50',
};
