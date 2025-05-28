require("../../../@babel/runtime/helpers/Arrayincludes"), (global.webpackJsonp = global.webpackJsonp || []).push([ [ "pages/index/components/swiper-banner" ], {
    1695: function(e, n, t) {
        t.r(n);
        var r = t(1696), a = t(1698), i = (t(1700), t(126)), o = Object(i.default)(a.default, r.render, r.staticRenderFns, !1, null, "3c1c5e89", null);
        o.options.__file = "src/pages/index/components/swiper-banner.vue", n.default = o.exports;
    },
    1696: function(e, n, t) {
        t.r(n);
        var r = t(1697);
        t.d(n, "render", function() {
            return r.render;
        }), t.d(n, "staticRenderFns", function() {
            return r.staticRenderFns;
        });
    },
    1697: function(e, n, t) {
        t.r(n), t.d(n, "render", function() {
            return r;
        }), t.d(n, "staticRenderFns", function() {
            return a;
        });
        var r = function() {
            this.$createElement;
            this._self._c;
        }, a = [];
        r._withStripped = !0;
    },
    1698: function(e, n, t) {
        t.r(n);
        var r = t(1699);
        n.default = r.default;
    },
    1699: function(e, n, t) {
        t.r(n), function(e) {
            var r = t(601), a = t(630), i = t.n(a);
            n.default = {
                props: {
                    list: {
                        type: Array,
                        required: !0
                    },
                    options: {
                        type: Object,
                        required: !0
                    },
                    type: {
                        type: Number,
                        required: !0
                    }
                },
                data: function() {
                    return {
                        activeIndex: 0
                    };
                },
                methods: {
                    itemClick: function(n) {
                        e.reportAnalytics("trade_banner", {
                            bannerid: n.advId
                        });
                        var t = n.routerUrl;
                        if (t) if (t.includes("/product/ProductDetail")) e.navigateTo({
                            url: Object(r.parse)(t).path.replace("/router", "")
                        }); else if (t.indexOf("/games/trend-brainSpeed/home/index") > -1) e.navigateTo({
                            url: t
                        }); else {
                            if (t.includes("/web/BrowserPage")) {
                                var a = Object(r.parse)(t), o = new i.a(a.query);
                                return this.$store.commit("SET_WEB_URL", o.get("loadUrl") || ""), void e.navigateTo({
                                    url: "/packageSecond/pages/web/web"
                                });
                            }
                            this.$store.commit("SET_WEB_URL", t), e.navigateTo({
                                url: "/packageSecond/pages/web/web"
                            });
                        }
                    },
                    checkUrl: function(n) {
                        n.indexOf("/games/trend-brainSpeed/home/index") > -1 ? e.navigateTo({
                            url: n
                        }) : (this.$store.commit("SET_WEB_URL", n), e.navigateTo({
                            url: "/packageSecond/pages/web/web"
                        }));
                    },
                    change: function(e) {
                        null != e.detail.current && (this.activeIndex = e.detail.current);
                    }
                }
            };
        }.call(this, t(1).default);
    },
    1700: function(e, n, t) {
        t.r(n);
        var r = t(1701), a = t.n(r);
        for (var i in r) [ "default" ].indexOf(i) < 0 && function(e) {
            t.d(n, e, function() {
                return r[e];
            });
        }(i);
        n.default = a.a;
    },
    1701: function(e, n, t) {}
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "pages/index/components/swiper-banner-create-component", {
    "pages/index/components/swiper-banner-create-component": function(e, n, t) {
        t("1").createComponent(t(1695));
    }
}, [ [ "pages/index/components/swiper-banner-create-component" ] ] ]);