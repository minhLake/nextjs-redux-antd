import fetch from "isomorphic-unfetch";

const _fetch = (url, data) => {
  const defaultOpts = {
    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    credentials: 'same-origin', // include, same-origin, *omit
    headers: {
      'user-agent': 'Mozilla/4.0 MDN Example',
      'content-type': 'application/json'
    },
    method: 'POST', // *GET, POST, PUT, DELETE, etc.
    mode: 'cors', // no-cors, cors, *same-origin
    redirect: 'follow', // manual, *follow, error
    referrer: 'no-referrer', // *client, no-referrer
  }
  if(!!data.headers) {
    data.headers = { ...defaultOpts.headers, ...data.headers}
  }
  // Default options are marked with *
  return fetch(url, {
    ...defaultOpts,
    ...data
  })
  .then(response => response.json()) // parses response to JSON
}

export default _fetch;
