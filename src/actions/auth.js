export const setAuthenticationHeaders = (headers) => {
  localStorage['access-token'] = headers.get('access-token')
  localStorage['token-type'] = headers.get('token-type')
  localStorage['client'] = headers.get('client')
  localStorage['expiry'] = headers.get('expiry')
  localStorage['uid'] = headers.get('uid')
}

export const getAuthenticationHeaders = () => (
  {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    'access-token': localStorage['access-token'],
    'token-type': localStorage['token-type'],
    'client': localStorage['client'],
    'expiry': localStorage['expiry'],
    'uid': localStorage['uid']
  }
)
