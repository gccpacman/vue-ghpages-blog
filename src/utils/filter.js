import Timeago from 'timeago.js'

const timeago = new Timeago(null, 'zh_CN')

export default (Vue) => {
  // https://github.com/hustcc/timeago.js#1-usage
  Vue.filter('timeago', str => {
    if (!str) return ''
    return timeago.format(new Date(str))
  })

  // get a string representing the date portion of the given Date
  Vue.filter('formatDate', date => {
    return new Date(date).toLocaleDateString()
  })

  // chinese format date
  Vue.filter('cnDate', date => {
    var dateobj = new Date(date)
    var year = dateobj.getFullYear()
    var month = dateobj.getMonth()
    var day = dateobj.getDate()
    return year + '年' + month + '月' + day + '日'
  })
}
