//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    //商城首页的数据
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
    active: '2',
    windowHeight: 0,
    windowWidth: 0,

    //”我的“页面的数据
    nickname: 'Tom',
    avatar: '../../images/avatar.png',
    features: [
      {
        text: '会员资料',
        icon: 'icon-fuzhi',
      },
      {
        text: '我的订单',
        icon: 'icon-dizhi',
      },
      {
        text: '我的报告',
        icon: 'icon-fuzhi',
      },
      {
        text: '我的样品',
        icon: 'icon-qian',
      },
    ],
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
    let idx = e.currentTarget.dataset.idx
    wx.navigateTo({
      url: `../product/product?id=${idx}`,
    })
  },

  /** 切换tab */
  onClickTab: function (e) {
    let activeTab = e.currentTarget.dataset.tab
    if (activeTab !== this.data.active) {
      // console.log(activeTab)
      this.setData({
        active: activeTab,
      })
    }
  }
})
