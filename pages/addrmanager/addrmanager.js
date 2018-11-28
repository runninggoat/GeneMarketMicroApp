// pages/addrmanager/addrmanager.js
var app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    addridx: 0,
    addresses: [],
    windowHeight: 0,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.setNavigationBarTitle({
      title: '管理地址',
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
      addridx: app.globalData.addridx,
      addresses: app.globalData.addresses,
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

  selectAddr: function (e) {
    let idx = e.currentTarget.dataset.idx
    this.setData({
      addridx: idx,
    })
    app.globalData.addridx = idx
  },
})