import request from '@/utils/request.js'

export const getSlideshow = () => {
  return request('banner', 'get', { limit: 4 })
}
