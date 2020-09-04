/**
 * html标签转义相关
 * 参考： https://www.hangge.com/blog/cache/detail_1774.html
 */

/**
 * HTML标签转义（< -> &lt;）
 */
export function html2Escape(htmlStr) {
  return htmlStr.replace(/[<>&"]/g, function (c) {
    return { '<': '&lt;', '>': '&gt;', '&': '&amp;', '"': '&quot;' }[c]
  })
}

/**
 * HTML标签反转义（&lt; -> <）， 常用在反专义后台返回的富文本
 * @param str 被转义了的HTML字符串
 */
export function escape2Html(str) {
  var arrEntities = { lt: '<', gt: '>', nbsp: ' ', amp: '&', quot: '"' }
  return str.replace(/&(lt|gt|nbsp|amp|quot);/gi, function (all, t) {
    return arrEntities[t]
  })
}
