// pages/cart/childrenComps/bottom-bar/bottom-bar.js
Component({
  properties: {
    itemCount: {
      type: Number,
      value: 0
    },
    totalPrice: {
      type: Number,
      value: 0
    }
  },
  data: {
    isSelect: false,
  },
  methods: {
    selectAll() {
      this.setData({
        isSelect: !this.data.isSelect
      })
    }
  }
})
