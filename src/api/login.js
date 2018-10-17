import http from '@/api'
export function getUserInfo(token) {
  return http.request({
    url: '/admin/info',
    method: 'get',
    params: { token }
  })
}

