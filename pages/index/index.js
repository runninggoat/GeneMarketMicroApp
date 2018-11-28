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
      {
        imgsrc: '../../images/product4.jpg',
        title: '祖先溯源套餐',
        price: 499,
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
    
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    
  },

  onClickItem: function (e) {
    let product = e.currentTarget.dataset.product
    wx.navigateTo({
      url: `../product/product?title=${product.title}&price=${product.price}`,
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
