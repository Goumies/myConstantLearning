webpackHotUpdate("static/development/pages/speaker.js", {

    /***/ "./pages/speaker.js":
    /*!**************************!*\
      !*** ./pages/speaker.js ***!
      \**************************/
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
        var next_config__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/config */ "./node_modules/next/dist/next-server/lib/runtime-config.js");
        /* harmony import */
        var next_config__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_config__WEBPACK_IMPORTED_MODULE_8__);


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


        var _getConfig = next_config__WEBPACK_IMPORTED_MODULE_8___default()(),
            serverRuntimeConfig = _getConfig.serverRuntimeConfig,
            publicRuntimeConfig = _getConfig.publicRuntimeConfig;

        var Speaker = /*#__PURE__*/function (_Component) {
            Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__["default"])(Speaker, _Component);

            var _super = _createSuper(Speaker);

            function Speaker() {
                Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, Speaker);

                return _super.apply(this, arguments);
            }

            Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(Speaker, [{
                key: "render",
                value: function render() {
                    if (this.state.isLoading) {
                        return __jsx("div", null, "...isLoading");
                    }

                    return __jsx("div", {
                        className: "container"
                    }, __jsx("div", {
                        className: "row"
                    }, __jsx("h2", {
                        className: "margintopbottom20"
                    }, this.props.speakerDataOne.firstName, " ", this.props.speakerDataOne.lastName), __jsx("p", {
                        className: "margintopbottom20"
                    }, this.props.speakerDataOne.bio)));
                }
            }], [{
                key: "GetSpeakerUrl",
                value: function GetSpeakerUrl() {
                    if (false) {
                    } else {
                        return "http://localhost:4000/speakers";
                    }
                }
            }, {
                key: "getInitialProps",
                value: function getInitialProps(_ref) {
                    var query, promise;
                    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function getInitialProps$(_context) {
                        while (1) {
                            switch (_context.prev = _context.next) {
                                case 0:
                                    query = _ref.query;
                                    promise = axios__WEBPACK_IMPORTED_MODULE_7___default.a.get("".concat(Speaker.GetSpeakerUrl(), "/").concat(query.speakerId)).then(function (response) {
                                        return {
                                            hasErrored: false,
                                            speakerDataOne: response.data
                                        };
                                    })["catch"](function (error) {
                                        return {
                                            hasErrored: true,
                                            message: error.message
                                        };
                                    });
                                    return _context.abrupt("return", promise);

                                case 3:
                                case "end":
                                    return _context.stop();
                            }
                        }
                    }, null, null, null, Promise);
                }
            }]);

            return Speaker;
        }(react__WEBPACK_IMPORTED_MODULE_6__["Component"]);

        Speaker.defaultProps = {};
        /* harmony default export */
        __webpack_exports__["default"] = (Speaker);

        /***/
    })

})
//# sourceMappingURL=speaker.js.c0a572726592616c007a.hot-update.js.map