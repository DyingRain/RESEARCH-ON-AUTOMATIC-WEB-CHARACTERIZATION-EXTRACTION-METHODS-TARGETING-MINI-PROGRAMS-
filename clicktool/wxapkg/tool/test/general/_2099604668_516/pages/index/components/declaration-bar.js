(global.webpackJsonp = global.webpackJsonp || []).push([ [ "pages/index/components/declaration-bar" ], {
    1702: function(e, n, t) {
        t.r(n);
        var a = t(1703), o = t(1705), r = (t(1707), t(126)), c = Object(r.default)(o.default, a.render, a.staticRenderFns, !1, null, "45b79bb0", null);
        c.options.__file = "src/pages/index/components/declaration-bar.vue", n.default = c.exports;
    },
    1703: function(e, n, t) {
        t.r(n);
        var a = t(1704);
        t.d(n, "render", function() {
            return a.render;
        }), t.d(n, "staticRenderFns", function() {
            return a.staticRenderFns;
        });
    },
    1704: function(e, n, t) {
        t.r(n), t.d(n, "render", function() {
            return a;
        }), t.d(n, "staticRenderFns", function() {
            return o;
        });
        var a = function() {
            this.$createElement;
            this._self._c;
        }, o = [];
        a._withStripped = !0;
    },
    1705: function(e, n, t) {
        t.r(n);
        var a = t(1706);
        n.default = a.default;
    },
    1706: function(e, n, t) {
        t.r(n), function(e) {
            n.default = {
                props: {
                    type: {
                        type: Number,
                        required: !0
                    }
                },
                methods: {
                    goDeclaration: function() {
                        this.$store.commit("SET_WEB_URL", "https://fast.dewu.com/nezha-plus/detail/600d0e219f02f854989d3757"), 
                        e.navigateTo({
                            url: "/packageSecond/pages/web/web"
                        });
                    }
                }
            };
        }.call(this, t(1).default);
    },
    1707: function(e, n, t) {
        t.r(n);
        var a = t(1708), o = t.n(a);
        for (var r in a) [ "default" ].indexOf(r) < 0 && function(e) {
            t.d(n, e, function() {
                return a[e];
            });
        }(r);
        n.default = o.a;
    },
    1708: function(e, n, t) {}
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "pages/index/components/declaration-bar-create-component", {
    "pages/index/components/declaration-bar-create-component": function(e, n, t) {
        t("1").createComponent(t(1702));
    }
}, [ [ "pages/index/components/declaration-bar-create-component" ] ] ]);