webpackHotUpdate("static/development/pages/sessions.js", {

    /***/ "./pages/sessions.js":
    /*!***************************!*\
      !*** ./pages/sessions.js ***!
      \***************************/
    /*! exports provided: default */
    /***/ (function (module, __webpack_exports__, __webpack_require__) {

        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */
        var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
        /* harmony import */
        var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
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
        var axios__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
        /* harmony import */
        var axios__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_7__);
        /* harmony import */
        var _src_SessionCard__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../src/SessionCard */ "./src/SessionCard.js");


        var _jsxFileName = "/Users/romyalula/IdeaProjects/Goumies/myConstantLearning/Back/Javascript/Building Server-side Rendered React Apps for Beginners/src/fundamentals/Building a server-side rendered digital clock/MyApp/pages/sessions.js";
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


        var Sessions = /*#__PURE__*/function (_Component) {
            Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__["default"])(Sessions, _Component);

            var _super = _createSuper(Sessions);

            Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(Sessions, null, [{
                key: "getInitialProps",
                value: function getInitialProps() {
                    var promise;
                    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function getInitialProps$(_context) {
                        while (1) {
                            switch (_context.prev = _context.next) {
                                case 0:
                                    promise = axios__WEBPACK_IMPORTED_MODULE_7___default.a.get('http://localhost:4000/sessions').then(function (response) {
                                        return {
                                            hasErrored: false,
                                            sessionData: response.data
                                        };
                                    })["catch"](function (error) {
                                        return {
                                            hasErrored: true,
                                            message: error.message
                                        };
                                    });
                                    return _context.abrupt("return", promise);

                                case 2:
                                case "end":
                                    return _context.stop();
                            }
                        }
                    }, null, null, null, Promise);
                }
            }]);

            function Sessions(props) {
                var _this;

                Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, Sessions);

                _this = _super.call(this, props);
                console.log('Session:constructor called');
                _this.state = {
                    hasErrored: props.hasErrored,
                    message: props.message,
                    sessionData: props.sessionData
                };
                return _this;
            }

            Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(Sessions, [{
                key: "render",
                value: function render() {
                    var _this2 = this;

                    return __jsx("div", {
                        className: "container",
                        __self: this,
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 35,
                            columnNumber: 13
                        }
                    }, __jsx("div", {
                        className: "row",
                        __self: this,
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 36,
                            columnNumber: 17
                        }
                    }, __jsx("div", {
                        className: "card-deck",
                        __self: this,
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 37,
                            columnNumber: 21
                        }
                    }, this.state.sessionData.map(function (session) {
                        return __jsx("div", {
                            className: "card col-4 cardmin margintopbottom",
                            key: session.id,
                            __self: _this2,
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 39,
                                columnNumber: 29
                            }
                        }, __jsx(_src_SessionCard__WEBPACK_IMPORTED_MODULE_8__["default"], {
                            session: session,
                            __self: _this2,
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 40,
                                columnNumber: 33
                            }
                        }));
                    }))));
                }
            }]);

            return Sessions;
        }(react__WEBPACK_IMPORTED_MODULE_6__["Component"]);

        Sessions.propTypes = {};
        Sessions.defaultProps = {};
        /* harmony default export */
        __webpack_exports__["default"] = (Sessions);

        /***/
    }),

    /***/ "./src/SessionCard.js":
    /*!****************************!*\
      !*** ./src/SessionCard.js ***!
      \****************************/
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


        var _jsxFileName = "/Users/romyalula/IdeaProjects/Goumies/myConstantLearning/Back/Javascript/Building Server-side Rendered React Apps for Beginners/src/fundamentals/Building a server-side rendered digital clock/MyApp/src/SessionCard.js";
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


        var SessionCard = /*#__PURE__*/function (_Component) {
            Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__["default"])(SessionCard, _Component);

            var _super = _createSuper(SessionCard);

            function SessionCard() {
                Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, SessionCard);

                return _super.apply(this, arguments);
            }

            Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(SessionCard, [{
                key: "render",
                value: function render() {
                    return __jsx("div", {
                        className: "card-body",
                        __self: this,
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 6,
                            columnNumber: 13
                        }
                    }, __jsx("h4", {
                        className: "card-title",
                        __self: this,
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 7,
                            columnNumber: 17
                        }
                    }), __jsx("h6", {
                        className: "card-title",
                        __self: this,
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 9,
                            columnNumber: 17
                        }
                    }, this.props.session.speakersNamesCsv), __jsx("p", {
                        className: "card-text",
                        __self: this,
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 10,
                            columnNumber: 17
                        }
                    }, this.props.session.descriptionShort));
                }
            }]);

            return SessionCard;
        }(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

        /* harmony default export */
        __webpack_exports__["default"] = (SessionCard);

        /***/
    })

})
//# sourceMappingURL=sessions.js.349f507c9ca33e92a176.hot-update.js.map