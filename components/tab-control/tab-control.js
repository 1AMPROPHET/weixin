// components/tab-control/tab-control.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    titles: {
      type: Array,
      value: []
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    currentIndex: 0
  },
  methods: {
    tabClick(evt) {
      this.setData({
        currentIndex: evt.currentTarget.dataset.index
      })
      const data = {index: this.data.currentIndex}
      this.triggerEvent('tabClick', data, {})
    }
  }
})
