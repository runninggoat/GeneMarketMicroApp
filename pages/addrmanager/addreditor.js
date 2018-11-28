// pages/addrmanager/addreditor.js
var app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    location: '',
    name: '',
    phone: '',
    type: 'unknow',
    addridx: 0,
    windowHeight: 0,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      type: options.type,
    })
    let title = '管理地址'
    switch (options.type) {
      case 'add': {
        title = '新增地址信息'
        break
      }
      case 'edit': {
        title = '编辑地址信息'
        this.setData({
          addridx: options.addridx,
          location: app.globalData.addresses[options.addridx].location,
          name: app.globalData.addresses[options.addridx].name,
          phone: app.globalData.addresses[options.addridx].phone,
        })
        break
      }
      default: break
    }
    wx.setNavigationBarTitle({
      title: title,
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

  onInput: function (e) {
    this.setData({
      [e.currentTarget.dataset.key]: e.detail.value,
    })
  },

  onSave: function (e) {
    if (!this.validate()) {
      wx.showToast({
        title: '请填写完整',
        icon: 'none',
        duration: 2000,
      })
    }
    switch (this.data.type) {
      case 'add': {
        let newAddresses = Object.assign([], app.globalData.addresses)
        newAddresses.push({
          name: this.data.name,
          phone: this.data.phone,
          location: this.data.location,
        })
        app.globalData.addresses = newAddresses
        app.globalData.addridx = newAddresses.length - 1
        break
      }
      case 'edit': {
        app.globalData.addresses[this.data.addridx].name = this.data.name
        app.globalData.addresses[this.data.addridx].phone = this.data.phone
        app.globalData.addresses[this.data.addridx].location = this.data.location
        break
      }
      default: break
    }
    wx.navigateBack({})
  },

  validate: function () {
    let items = ['name', 'phone', 'location']
    for (var k in items) {
      if (this.data[items[k]].length < 1) return false
    }
    return true
  }
})