//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    //商城首页的数据
    products: [
      {
        imgsrc: '../../images/product1.jpg',
        title: '数字生命包',
        price: 599,
      },
      {
        imgsrc: '../../images/product2.jpg',
        title: '精准护肤套餐',
        price: 1099,
      },
      {
        imgsrc: '../../images/product3.jpg',
        title: '易感疾病基因检测',
        price: 1599,
      },
    ],
    active: '1',

    //”我的“页面的数据
    nickname: 'Tom',
    avatar: '../../images/avatar.png',
    features: [
      {
        text: '会员资料',
        icon: 'icon-fuzhi',
        page: 'profile',
      },
      {
        text: '我的订单',
        icon: 'icon-dizhi',
        page: 'order',
      },
      {
        text: '我的报告',
        icon: 'icon-fuzhi',
        page: 'report',
      },
      {
        text: '我的样品',
        icon: 'icon-qian',
        page: 'sample',
      },
    ],
  },

  onLoad: function () {
    
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    
  },

  /**
   * 生命周期函数--到达页面底部触发
   */
  onReachBottom: function () {
    
  },

  onClickItem: function (e) {
    let product = e.currentTarget.dataset.product
    wx.navigateTo({
      url: `../product/product?title=${product.title}&price=${product.price}`,
    })
  },

  /**
   * 切换tab
   */
  onClickTab: function (e) {
    let activeTab = e.currentTarget.dataset.tab
    if (activeTab !== this.data.active) {
      // console.log(activeTab)
      this.setData({
        active: activeTab,
      })
    }
  },

  navigateFeature: function (e) {
    let page = e.currentTarget.dataset.page
    wx.navigateTo({
      url: `../${page}/${page}`,
    })
  },
})
