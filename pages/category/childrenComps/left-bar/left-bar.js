// pages/category/childrenComps/left-bar/left-bar.js
Component({
  properties: {
    titles: {
      type: Array,
      value: []
    }
  },
  data: {
    currentIndex: 0
  },
  methods: {
    barItemClick(evt) {
      // console.log(evt);
      if (evt.currentTarget !== undefined) {
        this.setData({
          currentIndex: evt.currentTarget.dataset.index
        })
      }
      const data = {index: this.data.currentIndex}
      this.triggerEvent('categoryClick', data, {})
    }
  }
})
