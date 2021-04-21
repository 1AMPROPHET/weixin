import request from './network.js'
import {baseURL} from './config.js'
export function getCategory() {
  return request({
    url: baseURL + '/category'
  })
}

export function getSubcategory(maitKey) {
  return request({
    url: baseURL + '/subcategory',
    data: {
      maitKey
    }
  })
}