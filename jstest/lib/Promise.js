//自定义promise函数模块: IIFE
(function (window) {
  //promise:构造函数
  //excutor:执行器函数（同步执行）
  function Promise(excutor) {
    this.status = "pending"; //给promise对象指定status属性，初始值为pending
    this.data = undefined; //给promise对象指定一个用于存储结果数据的属性data，初始值为undefined
    this.callbacks = []; //回调函数      每个元素的结构： {onReolved() {}, onRejected() {}}

    function resolve(value) {
      //将状态改为resolved
      this.status = "resolved";
      //保存value数据
      this.data = value;
      //如果有待执行的callback函数，立即异步执行回调函数onResolved
      //判断callbacks是否有函数存在
      if (this.callbacks.length > 0) {
          //利用setTimeout将回调函数放到队列中执行（异步执行）
        setTimeout(() => {
          //遍历callbacks中的函数
          this.callbacks.forEach((callbacksObj) => {
            callbacksObj.onResolved(value);
          });
        });
      }
    }
    function reject(reason) {}

    //立即同步执行excutor
    excutor(resolve, reject);
  }

  //promise原型对象的then()，指定成功和失败的回调函数，返回一个新的promise对象
  Promise.prototype.then = function (onResolved, onRejected) {};

  //promise原型对象的catch()，指定失败的回调函数，返回一个新的promise对象

  Promise.prototype.catch = function (onRejected) {};

  //promise函数对象的resolve方法，返回一个成功的promise
  Promise.resolve = function (value) {};

  //promise函数对象的reject方法，返回一个失败的promise
  Promise.reject = function (reason) {};

  //promise函数对象的all方法，返回一个promise，只有当所有的promise都成功时才成功，否则只要有一个失败的就失败
  Promise.all = function (promises) {};

  //promise函数对象的race方法，返回一个promise，第一个promise的结果成功就成功，失败就失败，不管后面的promise的结果
  Promise.race = function (promises) {};

  //向外暴露promise函数
  window.Promise = Promise;
});
