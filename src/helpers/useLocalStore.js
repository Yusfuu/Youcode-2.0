export const useLocalStore = (key) => {
  const store = localStorage.getItem(key) || '{}';
  return [JSON.parse(store), (value) => localStorage.setItem(key, JSON.stringify(value))];
}