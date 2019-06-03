  commitSearch (res) {
    let val = ((res.detail || {}).value || '').replace(/\s+/g, '')
    this.search(val)
  },
  clearInput () {
    this.setData({
      searchText: '',
    })
  },
  search (val, callback) {
    wx.pageScrollTo({
      scrollTop: 0,
      duration: 300,
    })
    if (val) {
      this.setData({
        located: false,
      })
      this.getWeather(val)
      //this.getHourly(val)
    }
    callback && callback()
  },