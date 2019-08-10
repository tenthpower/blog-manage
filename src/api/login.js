import request from '@/utils/request'

export function login(username, password) {
  return request({
    url: '/tenthpower_user/api/user/login',
    method: 'post',
    data: {
      username,
      password
    }
  })
}

export function getInfo(token) {
  return request({
    url: '/tenthpower_user/api/user/info',
    method: 'get',
    params: { token }
  })
}

export function logout() {
  return request({
    url: '/tenthpower_user/api/user/logout',
    method: 'post'
  })
}
