export const postData = async (url, data) =>
  fetch(url, {
    credentials: "include",
    mode: "cors",
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  }).then(async res => {
    if (!res.ok) {
      return Promise.reject((await res.json()).message);
    }
  });
