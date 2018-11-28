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
    if (app.globalData.addresses.length < 1) {
      wx.showToast({
        title: '请填写地址',
        icon: 'none',
        duration: 2000,
      })
    }
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

  deleteAddr: function (e) {
    if (this.data.addresses.length < 2) {
      wx.showToast({
        title: '请至少保持一个地址',
        icon: 'none',
        duration: 2000,
      })
      return
    }
    let idx = parseInt(e.currentTarget.dataset.idx)
    let newIdx = 0
    if (idx > 1) {
      newIdx = idx - 1
    }
    let newAddresses = Object.assign([], this.data.addresses)
    newAddresses.splice(idx, 1)
    this.setData({
      addridx: newIdx,
      addresses: newAddresses,
    })
    app.globalData.addridx = newIdx
    app.globalData.addresses = newAddresses
  },

  editAddress: function (e) {
    let type = e.currentTarget.dataset.type
    if (type === 'add') {
      wx.navigateTo({
        url: `addreditor?type=${type}`,
      })
    } else if (type === 'edit') {
      let idx = e.currentTarget.dataset.idx
      wx.navigateTo({
        url: `addreditor?type=${type}&addridx=${idx}`,
      })
    }
  },
})
