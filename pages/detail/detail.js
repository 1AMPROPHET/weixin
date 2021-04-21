// pages/detail/detail.js
import {getDetailInfo, goodInfo, shopInfo} from '../../service/detail.js'
Page({
  data: {
    iid: '',
    goodInformation: {},
    swiperImages: [],
    shopInformation: {}
  },
  onLoad: function (options) {
    const eventChannel = this.getOpenerEventChannel()
    eventChannel.on('passData', res => {
      this.setData({
        iid: res
      })
      // console.log(this.data.iid);
    })
    if (this.data.iid !== '') {
      this.getDetail(this.data.iid)
    }
  },
  getDetail(iid) {
    getDetailInfo(iid).then( res => {
      console.log(res);
      const data = res.data.result
      this.setData({
        swiperImages: data.itemInfo.topImages,
        goodInformation: new goodInfo(data.itemInfo, data.columns, data.shopInfo.services),
        shopInformation: new shopInfo(data.shopInfo)
      })
      if (this.data.shopInformation.cSells >= 10000) {
        const sellNum = this.data.shopInformation.cSells
        const cSells = 'shopInformation.cSells'
        this.setData({
          [cSells]: (sellNum / 10000).toFixed(1) + '万'
        })
      }
    })
  },
})