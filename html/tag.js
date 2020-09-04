/**
 * 删除HTML标签
 * @param String htmlStr html字符串
 */
export function deleteHtmlTag(htmlStr) {
  str = str.replace(/<[^>]+>|&[^>]+;/g, '').trim() //去掉所有的html标签和&nbsp;之类的特殊符合
  return str
}
