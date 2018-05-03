/* globals fetch */
export function getJSON (url) {
  return fetch(url, {
    credentials: 'include',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
  }).then(onResponse)
}

export function postJSON (url, data) {
  return fetch(url, {
    credentials: 'include',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    method: 'POST',
    body: JSON.stringify(data)
  }).then(onResponse)
}

export function putJSON (url, data) {
  return fetch(url, {
    credentials: 'include',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    method: 'PUT',
    body: JSON.stringify(data)
  }).then(onResponse)
}

export function deleteJSON (url) {
  return fetch(url, {
    credentials: 'include',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    method: 'DELETE'
  }).then(onResponse)
}

function onResponse (res) {
  return res.json().then((json) => {
    if (res.ok) return json
    // HACK: this is nasty, but it's effective so I'm doing it
    if (res.status === 401) window.location.href = '/login'
    const err = new Error(json.message)
    err.status = res.status
    throw err
  })
}
