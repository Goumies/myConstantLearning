webpackHotUpdate("static/development/pages/index.js", {

    /***/ "./src/DigitalClock.js":
    /*!*****************************!*\
      !*** ./src/DigitalClock.js ***!
      \*****************************/
    /*! exports provided: default */
    /***/ (function (module, __webpack_exports__, __webpack_require__) {

        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */
        var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
        /* harmony import */
        var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
        /* harmony import */
        var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
        /* harmony import */
        var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
        /* harmony import */
        var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
        /* harmony import */
        var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
        /* harmony import */
        var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
        /* harmony import */
        var _DigitalClock_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./DigitalClock.css */ "./src/DigitalClock.css");
        /* harmony import */
        var _DigitalClock_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_DigitalClock_css__WEBPACK_IMPORTED_MODULE_6__);


        var _jsxFileName = "/Users/romyalula/IdeaProjects/Goumies/myConstantLearning/Back/Javascript/Building Server-side Rendered React Apps for Beginners/src/fundamentals/Building a server-side rendered digital clock/MyApp/src/DigitalClock.js";
        var __jsx = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement;

        function _createSuper(Derived) {
            return function () {
                var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(Derived),
                    result;
                if (_isNativeReflectConstruct()) {
                    var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(this).constructor;
                    result = Reflect.construct(Super, arguments, NewTarget);
                } else {
                    result = Super.apply(this, arguments);
                }
                return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, result);
            };
        }

        function _isNativeReflectConstruct() {
            if (typeof Reflect === "undefined" || !Reflect.construct) return false;
            if (Reflect.construct.sham) return false;
            if (typeof Proxy === "function") return true;
            try {
                Date.prototype.toString.call(Reflect.construct(Date, [], function () {
                }));
                return true;
            } catch (e) {
                return false;
            }
        }


        var DigitalClock = /*#__PURE__*/function (_Component) {
            Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__["default"])(DigitalClock, _Component);

            var _super = _createSuper(DigitalClock);

            function DigitalClock() {
                Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, DigitalClock);

                return _super.apply(this, arguments);
            }

            Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(DigitalClock, [{
                key: "render",
                value: function render() {
                    var date = new Date(this.props.time.toLocaleString());
                    console.log(date);
                    var h = date.getHours();
                    var m = date.getMinutes();
                    var s = (date.getSeconds() + date.getMilliseconds() / 1000.0).toFixed(3);
                    var session = "AM";

                    if (h == 0) {
                        h = 12;
                    }

                    if (h > 12) {
                        h = h - 12;
                        session = "PM";
                    }

                    h = h < 10 ? "0" + h : h;
                    m = m < 10 ? "0" + m : m;
                    s = s < 10 ? "0" + s : s;
                    var time = h + ":" + m + ":" + s + " " + session;
                    return __jsx("div", {
                        className: "clock",
                        __self: this,
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 26,
                            columnNumber: 13
                        }
                    }, time);
                }
            }]);

            return DigitalClock;
        }(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

        DigitalClock.propTypes = {};
        DigitalClock.defaultProps = {};
        /* harmony default export */
        __webpack_exports__["default"] = (DigitalClock);

        /***/
    })

})
//# sourceMappingURL=index.js.2d9c2a86a6a64d118206.hot-update.js.map