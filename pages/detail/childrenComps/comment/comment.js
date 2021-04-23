// pages/detail/childrenComps/comment/comment.js
import {formatDate} from "../../../../utils/formatdate.js"
Component({
  properties: {
    comment: {
      type: Object,
      value: {}
    }
  },
  data: {
    date: 0,
    realDate: ''
  },
  methods: {
    getDate(time) {
      let date = new Date(time * 1000)
      return formatDate(date, "yyyy-MM-dd hh:mm")
    }
  },
  lifetimes: {
    attached() {
      setTimeout(() => {
        // console.log(this.data.comment.date);
        this.setData({
          date: this.data.comment.date
        })
        if (this.data.date !== 0) {
          // console.log(this.data.date);
          this.setData({
            realDate: this.getDate(1535697272)
          })
        }
      }, 300)
    }
  }
})
