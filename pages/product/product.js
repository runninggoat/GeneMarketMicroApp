// pages/product.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    images: [
      '../../images/1.jpg',
      '../../images/2.jpg',
      '../../images/3.jpg',
    ],
    title: '',
    price: 0,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.setNavigationBarTitle({
      title: options.title,
    })
    this.setData({
      title: options.title,
      price: options.price,
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

  onClickBuyBtn: function (e) {
    wx.navigateTo({
      url: `../purchase/purchase?title=${this.data.title}&price=${this.data.price}`,
    })
  },
})