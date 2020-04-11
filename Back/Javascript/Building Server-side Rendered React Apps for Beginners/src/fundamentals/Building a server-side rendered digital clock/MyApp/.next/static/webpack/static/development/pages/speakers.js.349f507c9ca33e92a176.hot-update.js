webpackHotUpdate("static/development/pages/speakers.js", {

    /***/ "./node_modules/@babel/runtime/helpers/arrayWithHoles.js":
        false,

    /***/ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js":
        false,

    /***/ "./node_modules/@babel/runtime/helpers/classCallCheck.js":
        false,

    /***/ "./node_modules/@babel/runtime/helpers/construct.js":
        false,

    /***/ "./node_modules/@babel/runtime/helpers/createClass.js":
        false,

    /***/ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js":
        false,

    /***/ "./node_modules/@babel/runtime/helpers/inherits.js":
        false,

    /***/ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js":
        false,

    /***/ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js":
        false,

    /***/ "./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js":
        false,

    /***/ "./node_modules/@babel/runtime/helpers/nonIterableRest.js":
        false,

    /***/ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js":
        false,

    /***/ "./node_modules/@babel/runtime/helpers/setPrototypeOf.js":
        false,

    /***/ "./node_modules/@babel/runtime/helpers/slicedToArray.js":
        false,

    /***/ "./node_modules/@babel/runtime/helpers/typeof.js":
        false,

    /***/ "./node_modules/function-bind/implementation.js":
        false,

    /***/ "./node_modules/function-bind/index.js":
        false,

    /***/ "./node_modules/has/src/index.js":
        false,

    /***/ "./node_modules/native-url/dist/index.js":
        false,

    /***/ "./node_modules/next/dist/build/polyfills/object-assign.js":
        false,

    /***/ "./node_modules/next/dist/build/polyfills/object.assign/index.js":
        false,

    /***/ "./node_modules/next/dist/client/link.js":
        false,

    /***/ "./node_modules/next/dist/client/router.js":
        false,

    /***/ "./node_modules/next/dist/client/with-router.js":
        false,

    /***/ "./node_modules/next/dist/next-server/lib/mitt.js":
        false,

    /***/ "./node_modules/next/dist/next-server/lib/router-context.js":
        false,

    /***/ "./node_modules/next/dist/next-server/lib/router/router.js":
        false,

    /***/ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js":
        false,

    /***/ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js":
        false,

    /***/ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js":
        false,

    /***/ "./node_modules/next/dist/next-server/lib/utils.js":
        false,

    /***/ "./node_modules/next/link.js":
        false,

    /***/ "./node_modules/prop-types-exact/build/helpers/isPlainObject.js":
        false,

    /***/ "./node_modules/prop-types-exact/build/index.js":
        false,

    /***/ "./node_modules/prop-types/checkPropTypes.js":
        false,

    /***/ "./node_modules/prop-types/factoryWithTypeCheckers.js":
        false,

    /***/ "./node_modules/prop-types/index.js":
        false,

    /***/ "./node_modules/prop-types/lib/ReactPropTypesSecret.js":
        false,

    /***/ "./node_modules/querystring-es3/decode.js":
        false,

    /***/ "./node_modules/querystring-es3/encode.js":
        false,

    /***/ "./node_modules/querystring-es3/index.js":
        false,

    /***/ "./node_modules/react-is/cjs/react-is.development.js":
        false,

    /***/ "./node_modules/react-is/index.js":
        false,

    /***/ "./pages/speakers.js":
    /*!***************************!*\
      !*** ./pages/speakers.js ***!
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
        var _src_SpeakerCard__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../src/SpeakerCard */ "./src/SpeakerCard.js");


        var _jsxFileName = "/Users/romyalula/IdeaProjects/Goumies/myConstantLearning/Back/Javascript/Building Server-side Rendered React Apps for Beginners/src/fundamentals/Building a server-side rendered digital clock/MyApp/pages/speakers.js";
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


        var Speakers = /*#__PURE__*/function (_Component) {
            Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__["default"])(Speakers, _Component);

            var _super = _createSuper(Speakers);

            Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(Speakers, null, [{
                key: "getInitialProps",
                // Next framework runs getInitialProps()
                // before the component construction
                value: function getInitialProps() {
                    var promise;
                    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function getInitialProps$(_context) {
                        while (1) {
                            switch (_context.prev = _context.next) {
                                case 0:
                                    promise = axios__WEBPACK_IMPORTED_MODULE_7___default.a.get('http://localhost:4000/speakers').then(function (response) {
                                        return {
                                            hasErrored: false,
                                            speakerData: response.data
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
                } // getInitialProps() returns then

            }]);

            function Speakers(props) {
                var _this;

                Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, Speakers);

                _this = _super.call(this, props);
                console.log('Speakers:constructor called');
                _this.state = {
                    hasErrored: props.hasErrored,
                    message: props.message,
                    speakerData: props.speakerData
                };
                return _this;
            } // Once a class component is loaded and ready


            Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(Speakers, [{
                key: "componentDidMount",
                value: function componentDidMount() {
                } // If the component is removed from the page, the timer is cleared
                // to avoid a memory leak with a 'dangling' timer

            }, {
                key: "componentWillUnmount",
                value: function componentWillUnmount() {
                }
            }, {
                key: "render",
                value: function render() {
                    var _this2 = this;

                    return __jsx("div", {
                        className: "container",
                        __self: this,
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 48,
                            columnNumber: 13
                        }
                    }, __jsx("div", {
                        className: "row",
                        __self: this,
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 49,
                            columnNumber: 17
                        }
                    }, __jsx("div", {
                        className: "card-deck",
                        __self: this,
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 50,
                            columnNumber: 21
                        }
                    }, this.state.speakerData.map(function (speaker) {
                        return __jsx("div", {
                            className: "card col-4 cardmin margintopbottom20",
                            key: speaker.id,
                            __self: _this2,
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 52,
                                columnNumber: 29
                            }
                        }, __jsx(_src_SpeakerCard__WEBPACK_IMPORTED_MODULE_8__["default"], {
                            speaker: speaker,
                            __self: _this2,
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 53,
                                columnNumber: 33
                            }
                        }));
                    }))));
                }
            }]);

            return Speakers;
        }(react__WEBPACK_IMPORTED_MODULE_6__["Component"]);

        /* harmony default export */
        __webpack_exports__["default"] = (Speakers);

        /***/
    })

})
//# sourceMappingURL=speakers.js.349f507c9ca33e92a176.hot-update.js.map