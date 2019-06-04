// 处理promise错误
export function promiseCatch(promise) {
  return promise.then(data => [null, data]).catch(err => [err]);
}