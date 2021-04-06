const handleError = (res) => {
  if (res.status >= 400 && res.status < 600) {
    throw new Error('Ocurrio un error');
  }
};
const fetcher = (url, token) =>
  fetch(url, {
    method: 'GET',
    headers: new Headers({ 'Content-Type': 'application/json', token }),
    credentials: 'same-origin',
  }).then((res) => res.json());

const postData = async (url, data, token) => {
  try {
    const res = await fetch(url, {
      method: 'POST',
      headers: new Headers({ 'Content-Type': 'application/json', token }),
      credentials: 'same-origin',
      body: JSON.stringify(data),
    });
    handleError(res);
    const { message, ...rest } = await res.json();
    return { message, rest };
  } catch (error) {
    return { error };
  }
};

const putData = async (url, data, token) => {
  try {
    const res = await fetch(url, {
      method: 'PUT',
      headers: new Headers({ 'Content-Type': 'application/json', token }),
      credentials: 'same-origin',
      body: JSON.stringify(data),
    });
    handleError(res);

    const { uid, message } = await res.json();
    return { uid, message };
  } catch (error) {
    return { error };
  }
};

export { fetcher as default, putData, postData };
