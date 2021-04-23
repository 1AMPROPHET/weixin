// pages/cart/cart.js
const app = getApp()
Page({
  data: {
    cartList: [],
    totalPrice: 0,
    totalCount: 0,
    selectAll: true
  },
  onLoad: function (options) {
    this.changeTitle()
    this.setData({
      cartList: app.globalData.cartList
    })
    app.addToCartCallback = () => {
      this.setData({
        cartList: app.globalData.cartList
      })
      this.changeData()
    }
    app.changeGoodStatus = (index, good) => {
      this.setData({
        [`cartList[${index}]`]: good
      })
      const selectAll = !this.data.cartList.find(item => !item.checked)
      this.setData({
        selectAll: selectAll
      })
      this.changeData() 
    }
    app.deleteItem = (index) => {
      app.globalData.cartList.splice(index, 1)
      // console.log(app.globalData.cartList);
      app.addToCartCallback()
    }
  },
  onShow() {
    this.changeTitle()
    this.changeData()
  },
  changeData() {
    let count = 0
    let totalPrice = 0
    for (let item of this.data.cartList) {
      if (item.checked) {
        totalPrice += item.price * item.count
        count++
      }
    }
    this.setData({
      totalPrice: totalPrice.toFixed(2),
      totalCount: count
    })
    this.changeTitle()
    if (this.data.totalCount !== this.data.cartList.length) {
      this.setData({
        selectAll: false
      })
    } else {
      this.setData({
        selectAll: true
      })
    }
    // console.log(this.data.cartList);
    // console.log(this.data.selectAll);
    // console.log(this.data.totalPrice);
  },
  changeTitle() {
    const barTitle = '购物车(' + this.data.cartList.length + ')'
    wx.setNavigationBarTitle({
      title: barTitle
    })
  },
  onSelectAll() {
    // 若是全选状态
    if (this.data.selectAll) {
      this.data.cartList.forEach(item => {
        item.checked = false
      })
      this.setData({
        cartList: this.data.cartList,
        selectAll: false
      })
    } else {
      this.data.cartList.forEach(item => {
        item.checked = true
      })
      this.setData({
        cartList: this.data.cartList,
        selectAll: true
      })
    }
    this.changeData()
  }
})