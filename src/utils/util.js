// 打印控制
export const isConsoleLog = (msg) => {
  if (process.env.NODE_ENV !== 'production') {
    console.log(msg)
  }
}

// 改变标题
export const changeTitle = (title) => {
  document.title = title
}

// 是否微信打开
export const isWeiXin = () => {
  let ua = window.navigator.userAgent.toLowerCase()
  isConsoleLog(ua) // mozilla/5.0 (iphone cpu iphone os 9_1 like mac os x) applewebkit/601.1.46 (khtml, like gecko)version/9.0 mobile/13b143 safari/601.1
  let r = ua.match(/MicroMessenger/i)
  if (r !== null && r[0] === 'micromessenger') {
    return true
  } else {
    return false
  }
}

// 返回host
export const getHost = () => {
  return window.location.protocol + '//' + window.location.host
}

// 平台、设备和操作系统 ，返回ture或false,true表示是移动端，false表示不是移动端
export const ismobile = () => {
  let mobileArry = ['iPhone', 'iPad', 'Android', 'Windows Phone', 'BB10 Touch', 'BB10 Touch', 'PlayBook', 'Nokia']
  let ua = navigator.userAgent
  let res = mobileArry.filter(function (arr) {
    return ua.indexOf(arr) > 0
  })
  return res.length > 0
}

// 获取查询参数
export const getUrlQueryString = (name) => {
  let reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i')
  let r = window.location.search.substr(1).match(reg)
  if (r !== null) {
    return unescape(r[2])
  }
  return ''
}
