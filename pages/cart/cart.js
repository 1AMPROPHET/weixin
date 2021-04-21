// pages/cart/cart.js
Page({
  data: {
    itemCount: 0
  },
  onLoad: function (options) {
    this.changeTitle()
  },
  changeTitle() {
    const barTitle = '购物车(' + this.data.itemCount + ')'
    wx.setNavigationBarTitle({
      title: barTitle
    })
  }
})