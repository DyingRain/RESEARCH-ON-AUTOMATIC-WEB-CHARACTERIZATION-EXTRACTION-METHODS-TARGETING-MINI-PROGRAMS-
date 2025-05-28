(global.webpackJsonp = global.webpackJsonp || []).push([ [ "pages/protocol/protocol" ], {
    183: function(e, t, r) {
        r.r(t), function(e) {
            r(7), r(8), r(2), e(r(184).default);
        }.call(this, r(1).createPage);
    },
    184: function(e, t, r) {
        r.r(t);
        var n = r(185), o = r(187), c = (r(189), r(126)), i = Object(c.default)(o.default, n.render, n.staticRenderFns, !1, null, null, null);
        i.options.__file = "src/pages/protocol/protocol.vue", t.default = i.exports;
    },
    185: function(e, t, r) {
        r.r(t);
        var n = r(186);
        r.d(t, "render", function() {
            return n.render;
        }), r.d(t, "staticRenderFns", function() {
            return n.staticRenderFns;
        });
    },
    186: function(e, t, r) {
        r.r(t), r.d(t, "render", function() {
            return n;
        }), r.d(t, "staticRenderFns", function() {
            return o;
        });
        var n = function() {
            this.$createElement;
            this._self._c;
        }, o = [];
        n._withStripped = !0;
    },
    187: function(e, t, r) {
        r.r(t);
        var n = r(188);
        t.default = n.default;
    },
    188: function(e, t, r) {
        r.r(t), function(e) {
            var n = r(19), o = r(45), c = r(106);
            function i(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable;
                    })), r.push.apply(r, n);
                }
                return r;
            }
            function u(e, t, r) {
                return t in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r, e;
            }
            t.default = {
                data: function() {
                    return {
                        redirectRoute: "/pages/index/index"
                    };
                },
                computed: function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = null != arguments[t] ? arguments[t] : {};
                        t % 2 ? i(Object(r), !0).forEach(function(t) {
                            u(e, t, r[t]);
                        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : i(Object(r)).forEach(function(t) {
                            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
                        });
                    }
                    return e;
                }({}, Object(n.mapState)([ "SERVICE_ENV" ])),
                methods: {
                    agreeWith: function() {
                        Object(o.setPrivacyAgreement)(!0), Object(c.sdkWithPrivacyAgreement)(), this.redirectRoute.includes("ProductDetail") ? e.reLaunch({
                            url: "/pages/index/index"
                        }) : e.reLaunch({
                            url: this.redirectRoute
                        });
                    },
                    doNotAgree: function() {
                        Object(o.setPrivacyAgreement)(!1), Object({
                            NODE_ENV: "development",
                            VUE_APP_PLATFORM: "mp-weixin",
                            BASE_URL: "/"
                        }).VUE_APP_IDENTIFY_WEIXIN_MP ? e.reLaunch({
                            url: "/pages/identify/index"
                        }) : "pro" === this.SERVICE_ENV ? Object(o.navigationToWeb)("https://m.dewu.com/h5-preview/") : Object(o.navigationToWeb)("https://t1-m.dewu.net/h5-preview/");
                    },
                    getUrlFromRoute: function(e) {
                        e.path && ("ProductDetail" === e.path ? this.redirectRoute = this.transformUrl(e, "product/ProductDetail") : this.redirectRoute = this.transformUrl(e));
                    },
                    transformUrl: function(e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "", r = Object.keys(e).filter(function(e) {
                            return "path" !== e;
                        }).reduce(function(t, r) {
                            return "".concat(t, "&").concat(r, "=").concat(e[r]);
                        }, "/".concat(t || e.path, "?"));
                        return r;
                    }
                },
                onLoad: function(e) {
                    this.getUrlFromRoute(e), Object(o.getPrivacyAgreement)() && this.agreeWith();
                }
            };
        }.call(this, r(1).default);
    },
    189: function(e, t, r) {
        r.r(t);
        var n = r(190), o = r.n(n);
        for (var c in n) [ "default" ].indexOf(c) < 0 && function(e) {
            r.d(t, e, function() {
                return n[e];
            });
        }(c);
        t.default = o.a;
    },
    190: function(e, t, r) {}
}, [ [ 183, "common/runtime", "common/vendor" ] ] ]);