webpackHotUpdate("static/development/pages/speakers.js", {

    /***/ "./src/SpeakerCard.js":
    /*!****************************!*\
      !*** ./src/SpeakerCard.js ***!
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
        /* harmony import */
        var next_link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
        /* harmony import */
        var next_link__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_6__);
        /* harmony import */
        var react_placeholder__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-placeholder */ "./node_modules/react-placeholder/lib/index.js");
        /* harmony import */
        var react_placeholder__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_placeholder__WEBPACK_IMPORTED_MODULE_7__);
        /* harmony import */
        var react_placeholder_lib_reactPlaceholder_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-placeholder/lib/reactPlaceholder.css */ "./node_modules/react-placeholder/lib/reactPlaceholder.css");
        /* harmony import */
        var react_placeholder_lib_reactPlaceholder_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_placeholder_lib_reactPlaceholder_css__WEBPACK_IMPORTED_MODULE_8__);
        /* harmony import */
        var react_placeholder_lib_placeholders__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-placeholder/lib/placeholders */ "./node_modules/react-placeholder/lib/placeholders/index.js");
        /* harmony import */
        var react_placeholder_lib_placeholders__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_placeholder_lib_placeholders__WEBPACK_IMPORTED_MODULE_9__);


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


        var SpeakerCard = /*#__PURE__*/function (_Component) {
            Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__["default"])(SpeakerCard, _Component);

            var _super = _createSuper(SpeakerCard);

            function SpeakerCard() {
                Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, SpeakerCard);

                return _super.apply(this, arguments);
            }

            Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(SpeakerCard, [{
                key: "render",
                value: function render() {
                    var awesomePlaceholder1 = __jsx(react_placeholder_lib_placeholders__WEBPACK_IMPORTED_MODULE_9__["MediaBlock"], {
                        color: "#E0E0E0",
                        rows: 6
                    });

                    return __jsx(react_placeholder__WEBPACK_IMPORTED_MODULE_7___default.a, {
                        showLoadingAnimation: true,
                        delay: 5000,
                        ready: !this.props.isLoading,
                        customPlaceholder: awesomePlaceholder1
                    }, __jsx("img", {
                        className: "card-img-top",
                        src: "/speakers/Speaker-".concat(this.props.speaker.id, ".jpg")
                    }), __jsx("div", {
                        className: "card-body"
                    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
                        href: {
                            pathname: '/speaker',
                            query: {
                                speakerId: this.props.speaker.id
                            }
                        },
                        as: "speaker/".concat(this.props.speaker.id)
                    }, __jsx("a", {
                        className: "btn btn-lg btn-block btn-outline-primary"
                    }, "Details")), __jsx("h4", {
                        className: "card-title"
                    }, this.props.speaker.userFirstName, " ", this.props.speaker.userLastName, " "), __jsx("p", {
                        className: "card-text"
                    }, this.props.speaker.bioShort)));
                }
            }]);

            return SpeakerCard;
        }(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

        /* harmony default export */
        __webpack_exports__["default"] = (SpeakerCard);

        /***/
    })

})
//# sourceMappingURL=speakers.js.5da505c755f1bf8c2c91.hot-update.js.map