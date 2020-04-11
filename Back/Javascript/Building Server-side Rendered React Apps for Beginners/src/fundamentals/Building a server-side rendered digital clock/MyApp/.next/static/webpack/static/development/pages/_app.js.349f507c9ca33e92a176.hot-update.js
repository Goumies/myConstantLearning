webpackHotUpdate("static/development/pages/_app.js", {

    /***/ "./node_modules/react-dom/index.js":
        false,

    /***/ "./pages/_app.js":
    /*!***********************!*\
      !*** ./pages/_app.js ***!
      \***********************/
    /*! exports provided: default */
    /***/ (function (module, __webpack_exports__, __webpack_require__) {

        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "default", function () {
            return MyApp;
        });
        /* harmony import */
        var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
        /* harmony import */
        var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
        /* harmony import */
        var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
        /* harmony import */
        var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
        /* harmony import */
        var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
        /* harmony import */
        var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
        /* harmony import */
        var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
        /* harmony import */
        var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
        /* harmony import */
        var next_app__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/app */ "./node_modules/next/app.js");
        /* harmony import */
        var next_app__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_app__WEBPACK_IMPORTED_MODULE_7__);
        /* harmony import */
        var _src_Layout__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../src/Layout */ "./src/Layout.js");


        var _jsxFileName = "/Users/romyalula/IdeaProjects/Goumies/myConstantLearning/Back/Javascript/Building Server-side Rendered React Apps for Beginners/src/fundamentals/Building a server-side rendered digital clock/MyApp/pages/_app.js";
        var __jsx = react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement;

        function _createSuper(Derived) {
            return function () {
                var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(Derived),
                    result;
                if (_isNativeReflectConstruct()) {
                    var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(this).constructor;
                    result = Reflect.construct(Super, arguments, NewTarget);
                } else {
                    result = Super.apply(this, arguments);
                }
                return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, result);
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


        var MyApp = /*#__PURE__*/function (_App) {
            Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__["default"])(MyApp, _App);

            var _super = _createSuper(MyApp);

            function MyApp() {
                Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, MyApp);

                return _super.apply(this, arguments);
            }

            Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(MyApp, [{
                key: "render",
                value: function render() {
                    var _this$props = this.props,
                        Component = _this$props.Component,
                        pageProps = _this$props.pageProps;
                    return __jsx(_src_Layout__WEBPACK_IMPORTED_MODULE_8__["Layout"], {
                        __self: this,
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 9,
                            columnNumber: 13
                        }
                    }, __jsx(Component, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, pageProps, {
                        __self: this,
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 10,
                            columnNumber: 17
                        }
                    })));
                }
            }]);

            return MyApp;
        }(next_app__WEBPACK_IMPORTED_MODULE_7___default.a);


        /***/
    }),

    /***/ "./src/Footer.js":
    /*!***********************!*\
      !*** ./src/Footer.js ***!
      \***********************/
    /*! exports provided: default */
    /***/ (function (module, __webpack_exports__, __webpack_require__) {

        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "default", function () {
            return Footer;
        });
        /* harmony import */
        var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
        /* harmony import */
        var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
        var _jsxFileName = "/Users/romyalula/IdeaProjects/Goumies/myConstantLearning/Back/Javascript/Building Server-side Rendered React Apps for Beginners/src/fundamentals/Building a server-side rendered digital clock/MyApp/src/Footer.js";
        var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

        function Footer() {
            return __jsx("div", {
                className: "jumbotron text-center",
                __self: this,
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 5,
                    columnNumber: 9
                }
            }, __jsx("h7", {
                __self: this,
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 6,
                    columnNumber: 13
                }
            }, __jsx("b", {
                __self: this,
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 6,
                    columnNumber: 17
                }
            }, "Silicon Valley Code Camp 2018"), " is Hosted by PayPal in San Jose at their Town Hall location. 2121 North First Street. ", __jsx("b", {
                __self: this,
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 7,
                    columnNumber: 71
                }
            }, "October 13-14 2018")));
        }

        /***/
    }),

    /***/ "./src/Header.js":
    /*!***********************!*\
      !*** ./src/Header.js ***!
      \***********************/
    /*! exports provided: default */
    /***/ (function (module, __webpack_exports__, __webpack_require__) {

        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "default", function () {
            return Header;
        });
        /* harmony import */
        var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
        /* harmony import */
        var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
        var _jsxFileName = "/Users/romyalula/IdeaProjects/Goumies/myConstantLearning/Back/Javascript/Building Server-side Rendered React Apps for Beginners/src/fundamentals/Building a server-side rendered digital clock/MyApp/src/Header.js";
        var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

        function Header() {
            return __jsx("div", {
                className: "jumbotron",
                __self: this,
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 5,
                    columnNumber: 9
                }
            }, __jsx("div", {
                className: "row",
                __self: this,
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 6,
                    columnNumber: 13
                }
            }, __jsx("div", {
                className: "col-12 col-sm-4 text-center",
                __self: this,
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 7,
                    columnNumber: 17
                }
            }, __jsx("h6", {
                className: "text-uppercase",
                __self: this,
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 8,
                    columnNumber: 21
                }
            }, "October 13-14\xA0\xA02018"), __jsx("h6", {
                className: "text-uppercase",
                __self: this,
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 9,
                    columnNumber: 21
                }
            }, "San Jose, California")), __jsx("div", {
                className: "col-12 col-sm-8 text-lg-right",
                __self: this,
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 11,
                    columnNumber: 17
                }
            }, __jsx("div", {
                __self: this,
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 12,
                    columnNumber: 21
                }
            }, __jsx("img", {
                src: "/SVCClogo.png",
                __self: this,
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 12,
                    columnNumber: 26
                }
            })), __jsx("h2", {
                __self: this,
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 13,
                    columnNumber: 21
                }
            }, "Silicon Valley Code Camp 2018"))));
        }

        /***/
    }),

    /***/ "./src/Menu.js":
    /*!*********************!*\
      !*** ./src/Menu.js ***!
      \*********************/
    /*! exports provided: default */
    /***/ (function (module, __webpack_exports__, __webpack_require__) {

        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "default", function () {
            return Menu;
        });
        /* harmony import */
        var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
        /* harmony import */
        var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
        /* harmony import */
        var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
        /* harmony import */
        var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
        var _jsxFileName = "/Users/romyalula/IdeaProjects/Goumies/myConstantLearning/Back/Javascript/Building Server-side Rendered React Apps for Beginners/src/fundamentals/Building a server-side rendered digital clock/MyApp/src/Menu.js";
        var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


        function Menu() {
            return __jsx("nav", {
                className: "navbar navbar-expand-sm bg-dark navbar-dark",
                __self: this,
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 7,
                    columnNumber: 9
                }
            }, __jsx("div", {
                className: "navbar",
                __self: this,
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 8,
                    columnNumber: 13
                }
            }, __jsx("ul", {
                className: "navbar-nav",
                __self: this,
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 9,
                    columnNumber: 17
                }
            }, __jsx("li", {
                className: "nav-item",
                __self: this,
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 10,
                    columnNumber: 21
                }
            }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
                href: "/",
                __self: this,
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 11,
                    columnNumber: 25
                }
            }, __jsx("a", {
                className: "nav-link",
                href: "#",
                __self: this,
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 12,
                    columnNumber: 29
                }
            }, "Home"))), __jsx("li", {
                className: "nav-item",
                __self: this,
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 15,
                    columnNumber: 21
                }
            }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
                href: "/speakers",
                __self: this,
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 16,
                    columnNumber: 25
                }
            }, __jsx("a", {
                className: "nav-link",
                href: "#",
                __self: this,
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 17,
                    columnNumber: 29
                }
            }, "Speakers"))), __jsx("li", {
                className: "nav-item",
                __self: this,
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 20,
                    columnNumber: 21
                }
            }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
                href: "/sessions",
                __self: this,
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 21,
                    columnNumber: 25
                }
            }, __jsx("a", {
                className: "nav-link",
                href: "#",
                __self: this,
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 22,
                    columnNumber: 29
                }
            }, "Sessions"))))));
        }

        /***/
    })

})
//# sourceMappingURL=_app.js.349f507c9ca33e92a176.hot-update.js.map