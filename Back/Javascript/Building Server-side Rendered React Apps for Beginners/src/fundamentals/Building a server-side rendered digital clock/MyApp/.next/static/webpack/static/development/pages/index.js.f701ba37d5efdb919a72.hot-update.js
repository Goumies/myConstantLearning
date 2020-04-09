webpackHotUpdate("static/development/pages/index.js", {

    /***/ "./pages/index.js":
    /*!************************!*\
      !*** ./pages/index.js ***!
      \************************/
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
        var _src_DigitalClock__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../src/DigitalClock */ "./src/DigitalClock.js");


        var _jsxFileName = "/Users/romyalula/IdeaProjects/Goumies/myConstantLearning/Back/Javascript/Building Server-side Rendered React Apps for Beginners/src/fundamentals/Building a server-side rendered digital clock/MyApp/pages/index.js";
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


        var Index = /*#__PURE__*/function (_Component) {
            Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__["default"])(Index, _Component);

            var _super = _createSuper(Index);

            function Index(props) {
                var _this;

                Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Index);

                _this = _super.call(this, props);
                _this.state = {
                    time: new Date().toLocaleString()
                };
                return _this;
            }

            Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Index, [{
                key: "tick",
                value: function tick() {
                    // replacing with new state
                    this.setState(function () {
                        return {
                            time: new Date().toLocaleString()
                        };
                    });
                } // Once a class component is loaded and ready

            }, {
                key: "componentDidMount",
                value: function componentDidMount() {
                    var _this2 = this;

                    this.interval = setInterval(function () {
                        return _this2.tick();
                    }, 1000);
                } // If the component is removed from the page, the timer is cleared
                // to avoid a memory leak with a 'dangling' timer

            }, {
                key: "componentWillUnmount",
                value: function componentWillUnmount() {
                    clearInterval(this.interval);
                }
            }, {
                key: "render",
                value: function render() {
                    return __jsx(_src_DigitalClock__WEBPACK_IMPORTED_MODULE_6__["default"], {
                        time: this.state.time,
                        __self: this,
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 34,
                            columnNumber: 16
                        }
                    });
                }
            }]);

            return Index;
        }(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

        /* harmony default export */
        __webpack_exports__["default"] = (Index);

        /***/
    })

})
//# sourceMappingURL=index.js.f701ba37d5efdb919a72.hot-update.js.map