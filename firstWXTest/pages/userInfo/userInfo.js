//获取应用实例
const app = getApp()

Page({
  data: {
    message:'俞健',
    userInfo: {},
    hasUserInfo: false
  },
  onLoad: function () {
    console.log("大家好");
  },
  getUserInfo: function (e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})