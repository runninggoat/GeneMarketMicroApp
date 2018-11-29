// pages/profile/profile.js
var app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    windowHeight: 0,
    profile: [
      {
        key: 'name',
        title: '姓名',
        placeholder: '请填写真实姓名',
        value: '',
      },
      {
        key: 'phone',
        title: '电话',
        placeholder: '请填写常用电话',
        value: '',
      },
      {
        key: 'address',
        title: '地址',
        placeholder: '请填写常住地址',
        value: '',
      },
      {
        key: 'age',
        title: '年龄',
        placeholder: '请填写满岁年龄',
        value: '',
      },
      {
        key: 'weight',
        title: '体重',
        placeholder: '请填写体重（kg）',
        value: '',
      },
      {
        key: 'tall',
        title: '身高',
        placeholder: '请填写身高（cm）',
        value: '',
      },
      {
        key: 'bloodtype',
        title: '血型',
        placeholder: '请填写血型（A/B/AB/O）',
        value: '',
      },
    ],
    editing: false,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var self = this

    wx.setNavigationBarTitle({
      title: '用户资料',
    })

    this.setData({
      windowHeight: app.globalData.windowHeight,
    })

    //打开这个页面的时候读取用户信息缓存
    wx.getStorage({
      key: 'profile',
      success: function(res) {
        let profile = res.data
        if (profile) {
          self.setData({
            profile: profile,
          })
        }
      },
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

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    this.saveProfile()
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    this.saveProfile()
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

  saveProfile: function () {
    //保存用户资料到缓存中
    wx.setStorage({
      key: 'profile',
      data: this.data.profile,
    })
  },

  enableEditing: function () {
    this.setData({
      editing: true,
    })
  },

  saveAndDisableEditing: function () {
    this.setData({
      editing: false,
    })
    this.saveProfile()
  },

  onInput: function (e) {
    let idx = e.currentTarget.dataset.idx
    let newProfile = Object.assign([], this.data.profile)
    newProfile[idx].value = e.detail.value
    this.setData({
      profile: newProfile,
    })
  },
})