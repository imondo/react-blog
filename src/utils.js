// 时间取值
export function timeSub(value, num) {
  let _num = num || 10;
  return value ? value.substring(0, _num) : '';
}

// 时分秒
export function getTimeDetail(value) {
  let date = new Date(value);
  let h = date.getHours();
  let m = date.getMinutes();
  let s = date.getSeconds();
  return `${timeSub(value)} ${h < 10 ? `0${h}` : h} : ${m < 10 ? `0${m}` : m} : ${s < 10 ? `0${s}` : s}` 
}