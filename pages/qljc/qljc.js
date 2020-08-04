// pages/qljc/qljc.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
   

    arr_dldj: ['主干路', '快速路', '次干路', '支路', '街坊路'],
    index_dldj: 0,
    arr_ssfxs: ['型钢', '简易割缝', '梳齿板', '橡胶板', '其他'],
    index_ssfxs: 0,
    arr_sqxjcfx: ['由南往北', '由西往东', '由东往西', '由北往南'],
    index_sqxjcfx: 0,
    arr_hqxjcfx: ['由西往东', '由南往北', '由东往西', '由北往南'],
    index_hqxjcfx: 0,
    arr_qmjg: ['沥青砼', '水泥砼', '其他'],
    index_qmjg: 0,
    arr_qtxs: ['重力式', '轻型桥台', '桩柱式', '其他'],
    index_qtxs: 0,
    arr_qdxs: ['/', '桩柱式', '重力式', '薄壁墩', '其他'],
    index_qdxs: 0,
    arr_jltx: ['简支梁', '连续梁', '先简支后连续', '箱涵', '系杆拱', '连续刚构', '刚架拱', '桁架拱', '实腹式拱', '空腹式拱', '悬臂梁', '板拱', '箱形拱', '肋拱', '吊杆拱', '双曲拱', '其他'],
    index_jltx: 0,
    arr_sgff: ['装配式', '整体现浇', '组合式', '其他'],
    index_sgff: 0,
    arr_hxlx: ['砼铰缝', '横隔板', '湿接缝', '其他'],
    index_hxlx: 0,
    arr_hjmxs: ['空心板', '实心板', 'T梁', '箱梁', '其他'],
    index_hjmxs: 0,
    arr_zzxs: ['板式橡胶', '盆式橡胶', '钢', '油毛毡', '整体砼', '无', '其他'],
    index_zzxs: 0,
    arr_clxs: ['预应力钢筋砼', '普通钢筋砼', '钢', '木', '圬工', '其他'],
    index_clxs: 0,
    arr_zxjj: ['正交', '斜交'],
    index_zxjj: 0,
    customItem: '全部',
    
    
   

    bridgeInfo: {
      //selector
      jcdq: '',
      jcrq: '2020-04-13',
      jcsj: '10:00',
      jcdq: ['浙江省', '杭州市', '西湖区'],
      hqxjcfx: '由西往东',
      sqxjcfx: '由南往北',
      dldj: '主干路',
      qmjg: '沥青砼',
      ssfxs: '型钢',
      zxjj: '正交',

      qtxs: '重力式',
      qdxs: '/',
      jltx: '简支梁',
      hjmxs: '空心板',
      sgff: '装配式',
      hxlx: '砼铰缝',
      zzxs: '板式橡胶',
      clxs: '预应力钢筋砼',
       
      //input
      qlmc: '浙大桥',
      qlks: '',
      kjzh: '',
      hxbz: '',
      lgcc: '',
      lysgd: '',
      tempFilePaths: '',
      lat:0,
      long:0,
      
    },

  },




  map:function(){
   
    wx.getLocation({
      type:'gcj02',

      success:(res)=> {
        var latitude=res.latitude
        var longitude=res.longitude
        this.setData({
          lat:latitude.toFixed(5),
          long:longitude.toFixed(5),
        })
        wx.openLocation({
          latitude: latitude,
          longitude: longitude,      
          scale:28
        })
        this.setData({
          'bridgeInfo.lat': latitude,
          'bridgeInfo.long': longitude
        })
        console.log(latitude.toFixed(5))
        console.log(longitude.toFixed(5))
      }
     
    })
   
  },
  chooseimage: function () {  
         var _this = this;  
        wx.chooseImage({  
           count: 1, // 默认9  
          sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有  
           sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有  
           success: function (res) {  
            // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片  
             _this.setData({  
               tempFilePaths1:res.tempFilePaths  
             })  
           }  
         })  
       },

    chooseimage: function () {  
           var _this = this;  
          wx.chooseImage({  
             count: 1, // 默认9  
            sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有  
             sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有  
             success: function (res) {  
              // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片  
               _this.setData({  
                 tempFilePaths2:res.tempFilePaths  
               })  
             }  
           })  
         },

     

  bind_jcrq:function(e){
    var that=this;
    this.setData({    
      'bridgeInfo.jcrq': e.detail.value,  
    })
    
  }
 ,



bind_jcsj:function(e){
  var that=this;
  this.setData({
    'bridgeInfo.jcsj': e.detail.value,
  })
  
},

bind_jcdq:function(e){
  var that=this;
  this.setData({
    'bridgeInfo.jcdq': e.detail.value,
  })
},




/*注意点！准备提问！*/
bind_hqxjcfx: function(e) {
  var that=this;
   this.index_hqxjcfx=e.detail.value
  this.setData({
    index_hqxjcfx: this.index_hqxjcfx
  })
  this.setData({
    'bridgeInfo.hqxjcfx': this.data.arr_hqxjcfx[this.data.index_hqxjcfx],
  })
} ,
bind_sqxjcfx:function(e){
   var that=this;
   this.index_sqxjcfx=e.detail.value
   this.setData(
     {
       index_sqxjcfx:this.index_sqxjcfx
       
     }
   )
    

  this.setData({
    'bridgeInfo.sqxjcfx': this.data.arr_sqxjcfx[this.data.index_sqxjcfx],
  })
},


bind_qlmc:function(e){
  var that=this;
  this.setData({
    'bridgeInfo.qlmc': e.detail.value,
  })

},

bind_szlm:function(e){
  var that=this;
  this.setData({
    'bridgeInfo.szlm': e.detail.value,
  })

},
bind_kyhl:function(e){
  var that=this;
  this.setData({
    'bridgeInfo.kyhl': e.detail.value,
  })

},
bind_qlks:function(e){
  var that=this;
  this.setData({
    'bridgeInfo.qlks': e.detail.value,
  })

},
bind_kjzh:function(e){
  var that=this;
  this.setData({
    'bridgeInfo.kjzh': e.detail.value,
  })

},
bind_hxbz:function(e){
  var that=this;
  this.setData({
    'bridgeInfo.hxbz': e.detail.value,
  })

},
bind_lgcc:function(e){
  var that=this;
  this.setData({
    'bridgeInfo.lgcc': e.detail.value,
  })

},
bind_lysgd:function(e){
  var that=this;
  this.setData({
    'bridgeInfo.lysgd': e.detail.value,
  })

},
bind_psg:function(e){
  var that=this;
  this.setData({
    'bridgeInfo.psg': e.detail.value,
  })

},
bind_dbcd:function(e){
  var that=this;
  this.setData({
    'bridgeInfo.dbcd': e.detail.value,
  })

},

bind_dldj:function(e){
  var that=this;
  this.index_dldj=e.detail.value
  this.setData(
    {
      index_dldj:this.index_dldj
    }
  )
  this.setData({
    'bridgeInfo.dldj': this.data.arr_dldj[this.data.index_dldj],
  })
},

bind_qmjg:function(e){
  var that=this;
  this.index_qmjg=e.detail.value
  this.setData(
    {
      index_qmjg:this.index_qmjg
    }
  )
  this.setData({
    'bridgeInfo.qmjg': this.data.arr_qmjg[this.data.index_qmjg],
  })
},

bind_ssfxs:function(e){
  var that=this;
   this.index_ssfxs=e.detail.value
   this.setData(
     {
       index_ssfxs:this.index_ssfxs
     }
   )
  this.setData({
    'bridgeInfo.ssfxs': this.data.arr_ssfxs[this.data.index_ssfxs],
  })
},

bind_zxjj:function(e){
  var that=this;
   this.index_zxjj=e.detail.value
   this.setData(
     {
       index_zxjj:this.index_zxjj
     }
   )
  this.setData({
    'bridgeInfo.zxjj': this.data.arr_zxjj[this.data.index_zxjj],
  })
},


bind_qtxs:function(e){
  var that=this;
  this.index_qtxs=e.detail.value
  
  this.setData(
    {
      index_qtxs:this.index_qtxs
    }
  )
  this.setData({
    'bridgeInfo.qtxs': this.data.arr_qtxs[this.data.index_qtxs],
    
  })
},

bind_qdxs:function(e){
  var that=this;
  this.index_qdxs=e.detail.value
  this.setData(
    {
      index_qdxs:this.index_qdxs
    }
  )
  this.setData({
    'bridgeInfo.qdxs': this.data.arr_qdxs[this.data.index_qdxs],
  })
},

bind_jltx:function(e){
  var that=this;
     this.index_jltx=e.detail.value
     this.setData(
       {
         index_jltx:this.index_jltx
       }
     )
  this.setData({
    'bridgeInfo.jltx': this.data.arr_jltx[this.data.index_jltx],
  })
},

bind_hjmxs:function(e){
  var that=this;
    this.index_hjmxs=e.detail.value
    this.setData(
      {
        index_hjmxs:this.index_hjmxs
      }
    )
  this.setData({
    'bridgeInfo.hjmxs': this.data.arr_hjmxs[this.data.index_hjmxs],
  })
},

bind_sgff:function(e){
  var that=this;
  this.index_sgff=e.detail.value
  this.setData(
    {
      index_sgff:this.index_sgff
    }
  )
  this.setData({
    'bridgeInfo.sgff': this.data.arr_sgff[this.data.index_sgff],
  })
},

bind_hxlx:function(e){
  var that=this; 
   this.index_hxlx=e.detail.value
   this.setData(
     {
       index_hxlx:this.index_hxlx
     }
   )
  this.setData({
    'bridgeInfo.hxlx': this.data.arr_hxlx[this.data.index_hxlx],
  })
},

bind_zzxs:function(e){
  var that=this;
  this.index_zzxs=e.detail.value
  this.setData(
    {
      index_zzxs:this.index_zzxs
    }
  )
  this.setData({
    'bridgeInfo.zzxs': this.data.arr_zzxs[this.data.index_zzxs],
  })
},

bind_clxs:function(e){
  var that=this;
  this.index_clxs=e.detail.value
  this.setData(
    {
      index_clxs:this.index_clxs
    }
  )
  this.setData({
    'bridgeInfo.clxs': this.data.arr_clxs[this.data.index_clxs],
  })
},





  formsubmit: function(e) {
              
    var that = this
    var objData = e.detail.value;
    // saveBridgeList(bridgeInfo);
    wx.showModal({
      title: '请确认保存',
      content: '是否保存?',
      success(res) {
        if (res.confirm) {
          console.log('save confirm')
          console.log('form发生了submit事件，携带数据为：', e.detail.value);  
        
          var bridgeList = wx.getStorageSync('bridgeList') || [] //获取本地缓存
          var bridge = that.data.bridgeInfo
          bridgeList.push(bridge);  
          wx.setStorageSync('bridgeList', bridgeList);

         
        } else if (res.cancel) {
          console.log('save cancel')
        }
      }
    })
  },

  


  bind_modify: function() {
    var that = this
    wx.showModal({
      title: '请确认修改',
      content: '是否修改?',
      success(res) {

        if (res.confirm) {
          console.log('modify confirm')
          var bridgeList = wx.getStorageSync('bridgeList') || [] //获取本地缓存
          var qlbh = wx.getStorageSync('qlbh')
          bridgeList[qlbh] = that.data.bridgeInfo
          wx.setStorageSync('bridgeList', bridgeList);

        } else if (res.cancel) {
          console.log('modify cancel')
        }
      }
    })
  },

  bind_rst: function() {
    var that = this
    wx.showModal({
      title: '请确认重置',
      content: '是否重置?',
      success(res) {

        if (res.confirm) {
          console.log('reset confirm')
          var bridgeList = wx.getStorageSync('bridgeList') || [] //获取本地缓存
          var qlbh = wx.getStorageSync('qlbh')
          bridgeList[qlbh] = that.data.bridgeInfo
          wx.setStorageSync('bridgeList', bridgeList);

        } else if (res.cancel) {
          console.log('modify reset')
        }
      }
    })
  },
  bind_history: function() {
    var that = this
    wx.showModal({
      title: '请确认',
      content: '是否前往?',
      success(res) {

        if (res.confirm) {
         
          console.log('history confirm')
          var bridgeList = wx.getStorageSync('bridgeList') || [] //获取本地缓存
          var qlbh = wx.getStorageSync('qlbh')
          bridgeList[qlbh] = that.data.bridgeInfo
          wx.setStorageSync('bridgeList', bridgeList);
          wx.redirectTo({
            url: '../history/history',
            success: (result)=>{
              
            },
           
            fail: ()=>{},
            complete: ()=>{}
          });

        } else if (res.cancel) {
          console.log('modify cancel')
        }
      }
    })
  },
 


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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