// pages/order/order.js
var app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    windowHeight: 0,
    orders: [
      {
        title: '数字生命包',
        status: 'fail',
        name: 'Tom',
        phone: '13800138000',
        location: '广州市天河区冼村路11号交通银行大厦3001',
        orderid: 'ZLM90458920181125091136',
        timestamp: 1543108296000,
      },
      {
        title: '数字生命包',
        status: 'pending',
        name: 'Tom',
        phone: '13800138000',
        location: '广州市天河区冼村路11号交通银行大厦3001',
        orderid: 'ZLM90458920181125101136',
        timestamp: 1543111896000,
      },
      {
        title: '数字生命包',
        status: 'success',
        name: 'Tom',
        phone: '13800138000',
        location: '广州市天河区冼村路11号交通银行大厦3001',
        orderid: 'ZLM90458920181125111136',
        timestamp: 1543115496000,
      },
    ],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.setNavigationBarTitle({
      title: '我的订单',
    })
    this.setData({
      windowHeight: app.globalData.windowHeight,
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    //格式化所以订单时间戳
    let newOrders = Object.assign([], this.data.orders)
    for (let i = 0; i < newOrders.length; i++) {
      newOrders[i].timestamp = this.formatTimestamp(newOrders[i].timestamp)
    }
    this.setData({
      orders: newOrders,
    })
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },

  formatTimestamp: function (timestamp) {
    let d = new Date(timestamp)
    let year = d.getFullYear()
    let month = d.getMonth() + 1
    let date = d.getDate()
    let hour = d.getHours()
    let minute = d.getMinutes()
    let second = d.getSeconds()
    return `${year}-${month}-${date} ${hour}:${minute}:${second}`
  },
})