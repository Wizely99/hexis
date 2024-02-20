type LocalStorageMethods<T> = {
    setItem: (value: T) => void;
    getItem: () => T | undefined;
    removeItem: () => void;
  };
  
  export const useLocalStorage = <T>(key: string, defaultValue?: T): LocalStorageMethods<T> => {
    const setItem = (value: T): void => {
      try {
        window.localStorage.setItem(key, JSON.stringify(value));
      } catch (error) {
        console.error(`Error setting localStorage item for key '${key}':`, error);
      }
    };
  
    const getItem = (): T | undefined => {
      try {
        const item = window.localStorage.getItem(key);
        return item ? JSON.parse(item) : defaultValue;
      } catch (error) {
        console.error(`Error getting localStorage item for key '${key}':`, error);
        return defaultValue;
      }
    };
  
    const removeItem = (): void => {
      try {
        window.localStorage.removeItem(key);
      } catch (error) {
        console.error(`Error removing localStorage item for key '${key}':`, error);
      }
    };
  
    return { setItem, getItem, removeItem };
  };
  