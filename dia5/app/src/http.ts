const request = (url: string, options?: RequestInit) =>
  fetch(url, options)
    .then(r => r.json())
    .catch(e => ({ error: true, message: e.message }))

type Methods = "GET" | "POST" | "DELETE"


const createRequest = (method: Methods) => <T>(url: string, data: T) => request(url, {
  method,
  headers: {
    'content-type': 'application/json',
  },
  body: JSON.stringify(data)
})

export const get = (url: string) => request(url)
export const post = createRequest('POST')
export const del = createRequest('DELETE')
