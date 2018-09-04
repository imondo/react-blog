// 时间取值
export function timeSub(value, num) {
  let _num = num || 10;
  return value ? value.substring(0, _num) : '';
}