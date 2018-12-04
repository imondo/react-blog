// 时间取值
export function timeSub(value: string, n = 10):string {
  return value ? value.substring(0, n) : '';
}

// 时分秒
export function getTimeDetail(value:string):string {
  const date = new Date(value);
  const h = date.getHours();
  const m = date.getMinutes();
  const s = date.getSeconds();
  return `${timeSub(value)} ${h < 10 ? `0${h}` : h} : ${m < 10 ? `0${m}` : m} : ${s < 10 ? `0${s}` : s}` 
}