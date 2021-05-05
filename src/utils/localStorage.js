export const setLocalStorage = (key, value) => {
  try {
    window.localStorage.setItem(key, JSON.stringify(value));
  } catch (e) {
    alert('Ocurrio un error en local storage!!', e.message);
    // catch possible errors:
    // https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API/Using_the_Web_Storage_API
  }
};

export const clearLocalStorage = () => {
  try {
    window.localStorage.clear();
  } catch (error) {
    alert('Ocurrio un error boorando el local storage!!', e.message);
  }
};
export const getLocalStorage = (key, initialValue) => {
  try {
    const value = window.localStorage.getItem(key);
    return value ? JSON.parse(value) : initialValue;
  } catch (e) {
    // if error, return initial value
    return initialValue;
  }
};
