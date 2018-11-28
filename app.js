//app.js
App({
  onLaunch: function () {
    wx.getSystemInfo({
      success: res => {
        this.globalData.windowHeight = res.windowHeight;
        this.globalData.windowWidth = res.windowWidth;
      },
    })
  },
  globalData: {
    windowHeight: 0,
    windowWidth: 0,
    addridx: 0,
    addresses: [
      {
        name: 'Tom',
        phone: '13800138000',
        location: '广东省广州市天河区冼村路XX号XX村XX街XX花园XX栋XX层XX房或者很长很长很长很长很长很长',
      },
      {
        name: 'Tom',
        phone: '15820574629',
        location: '广东省广州市天河区冼村路XX号XX层XX房',
      },
    ],
  }
})