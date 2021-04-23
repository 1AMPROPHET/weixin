import request from './network.js'
import {baseURL} from './config.js'

export function getDetailInfo(iid) {
  return request({
    url: baseURL + '/detail',
    data: {
      iid
    }
  })
}
export function getDetailRecommend() {
  return request({
    url: baseURL + '/recommend'
  })
}
export class goodInfo {
  constructor(itemInfo, columns, services) {
    this.title = itemInfo.title
    this.desc = itemInfo.desc
    this.newPrice = itemInfo.price
    this.oldPrice = itemInfo.oldPrice
    this.discount = itemInfo.discountDesc
    this.columns = columns
    this.services = services
    this.realPrice = itemInfo.lowNowPrice
    this.services = services
  }
}
export class shopInfo {
  constructor(shopInformation) {
    this.cFans = shopInformation.cFans
    this.cSells = shopInformation.cSells
    this.score = shopInformation.score
    this.name = shopInformation.name
    this.shopLogo = shopInformation.shopLogo
    this.cGoods = shopInformation.cGoods
  }
}
export class goodParams {
  constructor(info, rule) {
    this.image = info.images ? info.images[0] : ''
    this.infos = info.set;
    this.sizeTable = rule.tables;
  }
}
export class userComment {
  constructor(list) {
    this.comment = list.content
    this.username = list.user.uname
    this.avatar = list.user.avatar
    this.date = list.created
    this.style = list.style
  }
}