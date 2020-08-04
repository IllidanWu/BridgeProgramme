// pages/history/history.js
var qlbh;
Page({

  data: {
    bridgeList:[],
    
  },

  bind_qlbh:function(e){
    qlbh=e.detail.value
     this.setData({
     qlbh:e.detail.value
     })
  },
  bind_query:function(){
    var bridgeList = wx.getStorageSync('bridgeList')
    wx.setStorageSync('qlbh', qlbh);
    console.log(qlbh)
   
    {
    wx.navigateTo({
      url: '../lscx/lscx',
      success: (result) => {
        console.log(bridgeList[qlbh])
      },
      fail: () => { },
      complete: () => { }
    });
    // this.setData({
      // bridgeList:wx.getStorageSync("bridgeList")||[]
      // bridgeInfo.jcsj=bridgeList[this.data.qlbh].jcsj
    // });
  }
},

  bind_clear:function(){
    var that=this

    wx.showModal({
      title: '请确认清空记录',
      content: '是否要清空记录？',
      success(res) {

        if (res.confirm) {
          console.log('clear confirm')
          try{
            wx.clearStorageSync()
            that.setData({
              bridgeList:wx.getStorageSync("bridgeList")||[]
            })
            // console.log('success')
          }catch(e){
            console.log(e)
          }
        } else if (res.cancel) {
          console.log('clear cancel')
        }
      }
    })

  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      bridgeList:wx.getStorageSync("bridgeList")||[],
    })
  },
 
   bind_reveal:function(e){
        var bridgeList = wx.getStorageSync('bridgeList')
        console.log(bridgeList[4])
        console.log(bridgeList[3])
        console.log(bridgeList[5])
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

  }
})