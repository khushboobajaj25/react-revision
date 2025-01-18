export const apiCall = async (url, method, body) => {
  return fetch(url, {
    headers: {
      "Content-Type": "application/json",
    },
  });
};
