(global.webpackJsonp = global.webpackJsonp || []).push([ [ "components/customNavigation/customNavigation" ], {
    1766: function(t, e, n) {
        n.r(e);
        var o = n(1767), r = n(1769), c = (n(1771), n(126)), a = Object(c.default)(r.default, o.render, o.staticRenderFns, !1, null, "16c7a96f", null);
        a.options.__file = "src/components/customNavigation/customNavigation.vue", e.default = a.exports;
    },
    1767: function(t, e, n) {
        n.r(e);
        var o = n(1768);
        n.d(e, "render", function() {
            return o.render;
        }), n.d(e, "staticRenderFns", function() {
            return o.staticRenderFns;
        });
    },
    1768: function(t, e, n) {
        n.r(e), n.d(e, "render", function() {
            return o;
        }), n.d(e, "staticRenderFns", function() {
            return r;
        });
        var o = function() {
            this.$createElement;
            this._self._c;
        }, r = [];
        o._withStripped = !0;
    },
    1769: function(t, e, n) {
        n.r(e);
        var o = n(1770);
        e.default = o.default;
    },
    1770: function(t, e, n) {
        n.r(e), function(t) {
            var o = n(17), r = n(19);
            function c(t, e) {
                var n = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var o = Object.getOwnPropertySymbols(t);
                    e && (o = o.filter(function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable;
                    })), n.push.apply(n, o);
                }
                return n;
            }
            function a(t, e, n) {
                return e in t ? Object.defineProperty(t, e, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = n, t;
            }
            e.default = {
                props: {
                    background: {
                        type: String,
                        default: function() {
                            return "#fff";
                        }
                    },
                    title: {
                        type: String,
                        default: function() {
                            return "得物App";
                        }
                    },
                    show: {
                        type: Object,
                        default: function() {
                            return {
                                showBack: !0,
                                showHome: !0
                            };
                        }
                    }
                },
                data: function() {
                    return {};
                },
                computed: function(t) {
                    for (var e = 1; e < arguments.length; e++) {
                        var n = null != arguments[e] ? arguments[e] : {};
                        e % 2 ? c(Object(n), !0).forEach(function(e) {
                            a(t, e, n[e]);
                        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : c(Object(n)).forEach(function(e) {
                            Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
                        });
                    }
                    return t;
                }({}, Object(r.mapState)({
                    navTop: function(t) {
                        return t.deviceInfo.statusBarHeight || Object(o.getNavHeight)().paddingTop || 20;
                    },
                    navHeight: function(t) {
                        return t.deviceInfo.toolBarHeight || Object(o.getNavHeight)().navHeight || 44;
                    }
                })),
                created: function() {},
                methods: {
                    goBack: function() {
                        1 !== getCurrentPages().length ? t.navigateBack({
                            delta: 1
                        }) : this.goHome();
                    },
                    goHome: function() {
                        t.switchTab({
                            url: "/pages/index/index"
                        });
                    }
                }
            };
        }.call(this, n(1).default);
    },
    1771: function(t, e, n) {
        n.r(e);
        var o = n(1772), r = n.n(o);
        for (var c in o) [ "default" ].indexOf(c) < 0 && function(t) {
            n.d(e, t, function() {
                return o[t];
            });
        }(c);
        e.default = r.a;
    },
    1772: function(t, e, n) {}
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "components/customNavigation/customNavigation-create-component", {
    "components/customNavigation/customNavigation-create-component": function(t, e, n) {
        n("1").createComponent(n(1766));
    }
}, [ [ "components/customNavigation/customNavigation-create-component" ] ] ]);