webpackHotUpdate("styles", {

    /***/ "./node_modules/react-placeholder/lib/reactPlaceholder.css":
    /*!*****************************************************************!*\
      !*** ./node_modules/react-placeholder/lib/reactPlaceholder.css ***!
      \*****************************************************************/
    /*! no static exports found */
    /***/ (function (module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin;
        if (true) {
            var injectCss = function injectCss(prev, href) {
                var link = prev.cloneNode();
                link.href = href;
                link.onload = function () {
                    prev.parentNode.removeChild(prev);
                };
                prev.stale = true;
                prev.parentNode.insertBefore(link, prev);
            };
            module.hot.dispose(function () {
                window.__webpack_reload_css__ = true;
            });
            if (window.__webpack_reload_css__) {
                module.hot.__webpack_reload_css__ = false;
                console.log("[HMR] Reloading stylesheets...");
                var prefix = document.location.protocol + '//' + document.location.host;
                document
                    .querySelectorAll("link[href][rel=stylesheet]")
                    .forEach(function (link) {
                        if (!link.href.match(prefix) || link.stale) return;
                        injectCss(link, link.href.split("?")[0] + "?unix=1586657839808");
                    });
            }
        }


        /***/
    })

})
//# sourceMappingURL=styles.cd8427709fda3a8166f3.hot-update.js.map