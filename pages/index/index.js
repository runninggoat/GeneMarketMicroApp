//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    products: [
      {
        id: 0,
        imgsrc: '../../images/product1.jpg',
        title: '数字生命包',
      },
      {
        id: 1,
        imgsrc: '../../images/product2.jpg',
        title: '精准护肤套餐',
      },
    ],
    active: 1,
    windowHeight: 0,
    windowWidth: 0,
  },

  onLoad: function () {
    wx.getSystemInfo({
      success: res => {
        this.setData({
          windowHeight: res.windowHeight,
          windowWidth: res.windowWidth,
        })
      },
    })
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    
  },

  onClickItem: function (e) {
    console.log(e.currentTarget.dataset.idx)
  },
})
