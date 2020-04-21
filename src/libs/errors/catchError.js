import Vue from 'vue'

const reportError = error => {
  console.log('get--err', error)
}
// window全局捕获错误
const errorHandler = (error, vm) => {
  reportError(error)
}

// promise捕获
// var _wrapPromiseFunction = fn => {
//   if (typeof fn !== 'function') {
//     return null
//   }

//   return function () {
//     try {
//       return fn.apply(this, arguments)
//     } catch (error) {
//       reportError(error)
//       throw (error)
//     }
//   }
// }
// 捕获promise错误
if (Promise && Promise.prototype.then) {
  var promiseThen = Promise.prototype.then

  console.log('promiseThen', promiseThen)
  // Promise.prototype.then = (resolve, reject) => {
  //   return promiseThen.call(this, _wrapPromiseFunction(resolve), _wrapPromiseFunction(reject))
  // }
}

Vue.config.errorHandler = errorHandler

Vue.prototype.$throw = (error, msg) => errorHandler(error, this)
