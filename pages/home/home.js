// pages/home/home.js
// import request from '../../service/network.js'
import {getMultidata, getGoodsData} from '../../service/home.js'
import {TOP_DISTANCE} from './homeconfig.js'

Page({
  data: {
    banner: [],
    recommend: [],
    titles: ['流行', '新款', '精选'],
    currentType: 'pop',
    goods: {
      'pop': { page: 0, list: [] },
      'sell': { page: 0, list: [] },
      'new': { page: 0, list: [] },
    },
    TypeList: ['pop', 'new', 'sell'],
    showBacktop: false,
    iid: ''
  },
  onLoad() {
    // 请求数据
    getMultidata().then((res) => {
      // console.log(res);
      // 取出轮播图
      const banners = res.data.data.banner.list
      const recommends = res .data.data.recommend.list
      this.setData({
        banner: this.data.banner = banners,
        recommend: this.data.recommend = recommends
      })
    })
    this.getGoods('pop')
    this.getGoods('new')
    this.getGoods('sell')
  },
  getGoods(type) {
    let page = this.data.goods[type].page + 1
    getGoodsData(type, page).then(res => {
      // console.log(res);
      const list =  this.data.goods[type].list
      list.push(...res.data.data.list)
      const dataType = `goods.${type}.list`
      const dataPage = `goods.${type}.page`
      this.setData({
        [dataType]: list,
        [dataPage]: page
      })
    })
  },
  tabClick(evt) {
    // console.log(evt);
    const index = evt.detail.index
    this.setData({
      currentType: this.data.TypeList[index]
    })
  },
  goodItemTap(evt) {
    // console.log(evt);
    const index = evt.detail.index
    this.setData({
      iid: this.data.goods[this.data.currentType].list[index].iid
    })
    if (this.data.iid !== '') {
      const iid = this.data.iid
      wx.navigateTo({
        url: '/pages/detail/detail',
        success: function(res) {
          res.eventChannel.emit('passData', iid)
        }
      })
    }
  },
  onReachBottom() {
    // 上拉加载更多
    this.getGoods(this.data.currentType)
  },
  onPageScroll(evt) {
    // console.log(evt);
    // 不要在scroll中频繁调用setData()
    // 解决方法
    // 判断flag与状态是否相同，不同了再调用setData()
    const flag = evt.scrollTop > TOP_DISTANCE
    if (flag !== this.data.showBacktop) {
      this.setData({
        showBacktop: flag
      })
    }
  }
})