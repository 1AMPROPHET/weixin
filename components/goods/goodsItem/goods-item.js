// components/goods/goodsItem/goods-item.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    goodsItem: {
      type: Object,
      value: {}
    }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },
  methods: {
    itemClick(evt) {
      const iid = this.data.goodsItem.iid
      wx.navigateTo({
        url: '/pages/detail/detail?iid=' + iid,
      })
    }
  }
})
