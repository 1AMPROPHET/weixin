// pages/detail/detail.js
import {
  getDetailInfo, 
  getDetailRecommend,
  goodInfo, 
  shopInfo, 
  goodParams,
  userComment
} from '../../service/detail.js'

import {TOP_DISTANCE} from '../home/homeconfig.js'
const app = getApp()
Page({
  data: {
    iid: '',
    goodInformation: {},
    swiperImages: [],
    shopInformation: {},
    detailInfo: {},
    goodParams: {},
    comment: {},
    recommend: {},
    isBacktopShow: false
  },
  onLoad: function (options) {
    // const eventChannel = this.getOpenerEventChannel()
    // eventChannel.on('passData', res => {
    //   this.setData({
    //     iid: res
    //   })
    //   // console.log(this.data.iid);
    // })
    this.setData({
      iid: options.iid
    })
    if (this.data.iid !== '') {
      this.getDetail(this.data.iid)
    }
    getDetailRecommend().then(res => {
      // console.log(res);
      this.setData({
        recommend: res.data.data.list
      })
    })
  },
  getDetail(iid) {
    getDetailInfo(iid).then( res => {
      // console.log(res);
      const data = res.data.result
      this.setData({
        swiperImages: data.itemInfo.topImages,
        goodInformation: new goodInfo(data.itemInfo, data.columns, data.shopInfo.services),
        shopInformation: new shopInfo(data.shopInfo),
        goodParams: new goodParams(data.itemParams.info, data.itemParams.rule),
        comment: new userComment(data.rate.list[0]),
        detailInfo: data.detailInfo
      })
      // console.log(this.data.goodParams);
      // console.log(this.data.comment);
      if (this.data.shopInformation.cSells >= 10000) {
        const sellNum = this.data.shopInformation.cSells
        const cSells = 'shopInformation.cSells'
        this.setData({
          [cSells]: (sellNum / 10000).toFixed(1) + '万'
        })
      }
    })
  },
  onPageScroll(evt) {
    // console.log(evt);
    const flag = evt.scrollTop > TOP_DISTANCE
    if (flag !== this.data.isBacktopShow) {
      this.setData({
        isBacktopShow: flag
      })
    }
  },
  onAddCart() {
    const obj = {}
    obj.iid = this.data.iid;
    obj.imageURL = this.data.swiperImages[0];
    obj.title = this.data.goodInformation.title;
    obj.desc = this.data.goodInformation.desc;
    obj.price = this.data.goodInformation.realPrice;
    // console.log(obj);

    app.addToCart(obj)

    wx.showToast({
      title: '已加入购物车',
      duration: 2000
    })
  }
})