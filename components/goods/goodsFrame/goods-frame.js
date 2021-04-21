// components/goods/goodsFrame/goods-frame.js
Component({
  properties: {
    goodsList: {
      type: Array,
      value: []
    },
    iid: {
      type: String,
      value: ''
    }
  },
  data: {

  },
  methods: {
    goodTap(evt) {
      // console.log(evt);
      const itemIndex = evt.currentTarget.dataset.index
      const data = {index: itemIndex}
      this.triggerEvent('goodItemTap', data, {})
    }
  }
})
