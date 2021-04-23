// pages/detail/childrenComps/bottombar/bottom-bar.js
Component({
  properties: {

  },
  data: {
    icons: [
      {icon: "../../../../assets/common/service.png", text: '客服'},
      {icon: "../../../../assets/common/store.png", text: '店铺'},
      {icon: "../../../../assets/common/star.png", text: '收藏'}
    ]
  },
  methods: {
    addToCart() {
      this.triggerEvent('addCart', {}, {})
    }
  }
})
