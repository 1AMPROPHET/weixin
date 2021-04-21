// components/backtop/backtop.js
Component({
  methods: {
    backtopClick() {
      wx.pageScrollTo({
        duration: 300,
        scrollTop: 0
      })
    }
  }
})
