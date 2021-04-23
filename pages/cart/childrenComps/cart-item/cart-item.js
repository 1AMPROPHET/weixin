// pages/cart/childrenComps/cart-item/cart-item.js
const app = getApp()
Component({
  properties: {
    goodInfo: {
      type: Object,
      value: {}
    },
    index: {
      type: Number,
      value: 0
    }
  },
  data: {
    
  },
  methods: {
    select(evt) {
      const good = app.globalData.cartList.find(item => item.iid === this.data.goodInfo.iid)
      good.checked = !good.checked
      // console.log(evt);
      const index = evt.currentTarget.dataset.index
      app.changeGoodStatus(index, good)
    },
    deleteTap(evt) {
      // console.log(evt);
      const index = evt.currentTarget.dataset.index
      app.deleteItem(index)
    }
  }
})
