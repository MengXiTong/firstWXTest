//获取应用实例
const app = getApp()

Page({
  data: {
    message: '俞健',
    userInfo: {},
    hasUserInfo: false
  },
  onLoad: function() {
    console.log("大家好");
    this.getLocation();
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  getLocation: () => {
    // wx.getLocation({
    //   type: 'wgs84',
    //   success: (res) => {
    //     this.data.latitude = res.latitude;
    //     this.data.longitude = res.longitude;
    //     console.log(this);
    //   }
    // })
  },
  takeEncode: ()=>{
    wx.scanCode({
      success: (res) => {
        console.log(res);
      }
    })
  }
})