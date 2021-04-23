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
    },
    selectAll: {
      type: Boolean,
      value: true
    }
  },
  methods: {
    selectAll() {
      this.triggerEvent('selectAllTap')
    }
  }
})
