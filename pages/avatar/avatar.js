Page({
    data: {
      avatarUrl: ''
    },
    chooseAvatar() {
      wx.chooseAvatar({
        success: (res) => {
          this.setData({
            avatarUrl: res.avatarUrl
          })
          wx.showToast({
            title: '头像选择成功',
            icon: 'success'
          })
        },
        fail: (err) => {
          console.error('选择头像失败', err)
          wx.showToast({
            title: '头像选择失败',
            icon: 'none'
          })
        }
      })
    },
    uploadAvatar() {
      if (!this.data.avatarUrl) {
        wx.showToast({
          title: '请先选择头像',
          icon: 'none'
        })
        return
      }
      
      wx.uploadFile({
        url: 'https://example.com/upload',
        filePath: this.data.avatarUrl,
        name: 'avatar',
        success: (res) => {
          wx.showToast({
            title: '上传成功',
            icon: 'success'
          })
        },
        fail: (err) => {
          console.error('上传失败', err)
          wx.showToast({
            title: '上传失败',
            icon: 'none'
          })
        }
      })
    }
  })
      