(global.webpackJsonp = global.webpackJsonp || []).push([ [ "pages/identify/components/identifyer/index" ], {
    1788: function(n, e, t) {
        t.r(e);
        var i = t(1789), r = t(1791), o = (t(1794), t(126)), f = Object(o.default)(r.default, i.render, i.staticRenderFns, !1, null, "b7ffb254", null);
        f.options.__file = "src/pages/identify/components/identifyer/index.vue", e.default = f.exports;
    },
    1789: function(n, e, t) {
        t.r(e);
        var i = t(1790);
        t.d(e, "render", function() {
            return i.render;
        }), t.d(e, "staticRenderFns", function() {
            return i.staticRenderFns;
        });
    },
    1790: function(n, e, t) {
        t.r(e), t.d(e, "render", function() {
            return i;
        }), t.d(e, "staticRenderFns", function() {
            return r;
        });
        var i = function() {
            var n = this, e = (n.$createElement, n._self._c, JSON.stringify({
                id: "identify_block_content_click_1044_220"
            })), t = JSON.stringify({
                id: "identify_block_content_click_1044_220"
            }), i = n.__map(n.identifyList, function(e, t) {
                var i = n.identifyNum(e.count);
                return {
                    $orig: n.__get_orig(e),
                    m0: i
                };
            });
            n.$mp.data = Object.assign({}, {
                $root: {
                    g0: e,
                    g1: t,
                    l0: i
                }
            });
        }, r = [];
        i._withStripped = !0;
    },
    1791: function(n, e, t) {
        t.r(e);
        var i = t(1792);
        e.default = i.default;
    },
    1792: function(n, e, t) {
        t.r(e), function(n) {
            var i = t(1793), r = t(222);
            e.default = {
                props: {
                    identifyList: {
                        type: Array,
                        default: function() {}
                    },
                    total: {
                        type: Number,
                        default: function() {
                            return 0;
                        }
                    }
                },
                name: "Identifyer",
                data: function() {
                    return {
                        typeList: i.typeList
                    };
                },
                methods: {
                    handleIdentifyer: function() {
                        n.navigateTo({
                            url: "/identify/pages/identifyerlist/index"
                        });
                    },
                    identifyNum: function(n) {
                        return Object(r.formatIdentifyNum)(n);
                    }
                }
            };
        }.call(this, t(1).default);
    },
    1794: function(n, e, t) {
        t.r(e);
        var i = t(1795), r = t.n(i);
        for (var o in i) [ "default" ].indexOf(o) < 0 && function(n) {
            t.d(e, n, function() {
                return i[n];
            });
        }(o);
        e.default = r.a;
    },
    1795: function(n, e, t) {}
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "pages/identify/components/identifyer/index-create-component", {
    "pages/identify/components/identifyer/index-create-component": function(n, e, t) {
        t("1").createComponent(t(1788));
    }
}, [ [ "pages/identify/components/identifyer/index-create-component" ] ] ]);