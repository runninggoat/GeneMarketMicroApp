// pages/purchase/purchase.js
var app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    title: '',
    price: 0,
    quantity: 1,
    totalAmount: 0,
    address: {},
    windowHeight: 0,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.setNavigationBarTitle({
      title: '产品购买',
    })
    this.setData({
      title: options.title,
      price: options.price,
      totalAmount: this.data.quantity * options.price,
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
    this.setData({
      address: app.globalData.address,
      windowHeight: app.globalData.windowHeight,
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

  changeQuantity: function (e) {
    let delta = parseInt(e.currentTarget.dataset.delta)
    let newQuantity = this.data.quantity + delta
    if (newQuantity < 1) return
    this.setData({
      quantity: newQuantity,
      totalAmount: newQuantity * this.data.price,
    })
  },
})