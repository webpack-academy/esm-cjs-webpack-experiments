webpackJsonp([0,1],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

const b = __webpack_require__(1);
exports.b = b.foo();
exports.a = 1;

/***/ },
/* 1 */
/***/ function(module, exports) {

module.exports.foo = function(name, key) {
  module.exports[name] = key
}

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

const foo = __webpack_require__(0).default

foo();

/***/ }
],[2]);