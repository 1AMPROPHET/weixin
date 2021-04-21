// pages/category/category.js
import {getCategory, getSubcategory} from '../../service/category.js'

Page({
  data: {
    categories: [],
    subcategories: []
  },
  onLoad() {
    getCategory().then(res => {
      // console.log(res);
      this.setData({
        categories: res.data.data.category.list
      })
      if (this.data.categories !== []) {
        this.subcategory(this.data.categories[0].maitKey)
      }
    })
  },
  subcategory(maitKey) {
    getSubcategory(maitKey).then(res => {
      this.setData({
        subcategories: res.data.data.list
      })
      // console.log(this.data.subcategories);
    })
  },
  switchCategory(evt) {
    // console.log(evt);
    const index = evt.detail.index
    this.subcategory(this.data.categories[index].maitKey)
  }
})