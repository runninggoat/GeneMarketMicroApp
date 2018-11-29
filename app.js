//app.js
App({
  //全局数据
  globalData: {
    windowHeight: 0,
    windowWidth: 0,
    addridx: 0,
    addresses: [],
  },

  onLaunch: function () {
    var self = this
  
    //启动的时候读取窗口宽高
    wx.getSystemInfo({
      success: res => {
        this.globalData.windowHeight = res.windowHeight;
        this.globalData.windowWidth = res.windowWidth;
      },
    })
  
    //启动的时候尝试从缓存中读取地址信息
    wx.getStorage({
      key: 'addresses',
      success: function(res) {
        if (res.data && typeof(res.data) === 'object' && res.data.length > 0) {
          self.globalData.addresses = res.data
        }
      },
    })
    wx.getStorage({
      key: 'addridx',
      success: function (res) {
        if (res.data && typeof (res.data) === 'number') {
          self.globalData.addridx = res.data
        }
      },
    })
  },

  onHide: function () {
    //小程序被切到后台时保存地址信息到缓存中
    wx.setStorage({
      key: 'addresses',
      data: this.globalData.addresses,
    })
    wx.setStorage({
      key: 'addridx',
      data: this.globalData.addridx,
    })
  },
})