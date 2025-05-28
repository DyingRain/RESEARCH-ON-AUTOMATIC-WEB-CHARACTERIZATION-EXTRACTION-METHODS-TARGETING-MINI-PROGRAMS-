(global.webpackJsonp = global.webpackJsonp || []).push([ [ "pages/identify/components/qa/index" ], {
    1796: function(n, t, e) {
        e.r(t);
        var i = e(1797), a = e(1799), o = (e(1801), e(126)), c = Object(o.default)(a.default, i.render, i.staticRenderFns, !1, null, "6225a526", null);
        c.options.__file = "src/pages/identify/components/qa/index.vue", t.default = c.exports;
    },
    1797: function(n, t, e) {
        e.r(t);
        var i = e(1798);
        e.d(t, "render", function() {
            return i.render;
        }), e.d(t, "staticRenderFns", function() {
            return i.staticRenderFns;
        });
    },
    1798: function(n, t, e) {
        e.r(t), e.d(t, "render", function() {
            return i;
        }), e.d(t, "staticRenderFns", function() {
            return a;
        });
        var i = function() {
            var n = this, t = (n.$createElement, n._self._c, JSON.stringify({
                id: "identify_block_content_click_1044_2103",
                block_content_title: "查看更多",
                block_content_url: "/identify/pages/qa/index"
            })), e = JSON.stringify({
                id: "identify_block_content_click_1044_2103",
                block_content_title: "查看更多",
                block_content_url: "/identify/pages/qa/index"
            }), i = n.__map(n.qaData, function(t, e) {
                var i = JSON.stringify({
                    id: "identify_block_content_click_1044_2103",
                    position: e + 1,
                    block_content_title: t.title,
                    block_content_url: "/identify/pages/qa/index"
                });
                return {
                    $orig: n.__get_orig(t),
                    g1: i
                };
            });
            n.$mp.data = Object.assign({}, {
                $root: {
                    g0: t,
                    g2: e,
                    l0: i
                }
            });
        }, a = [];
        i._withStripped = !0;
    },
    1799: function(n, t, e) {
        e.r(t);
        var i = e(1800);
        t.default = i.default;
    },
    1800: function(n, t, e) {
        e.r(t), function(n) {
            var i = e(1793);
            t.default = {
                name: "Qa",
                data: function() {
                    return {
                        identifyer: i.identifyer,
                        qaData: i.qaData
                    };
                },
                methods: {
                    handleqa: function() {
                        n.navigateTo({
                            url: "/identify/pages/qa/index"
                        });
                    },
                    handleAll: function(n) {
                        this.qaData[n].show = !0;
                    }
                }
            };
        }.call(this, e(1).default);
    },
    1801: function(n, t, e) {
        e.r(t);
        var i = e(1802), a = e.n(i);
        for (var o in i) [ "default" ].indexOf(o) < 0 && function(n) {
            e.d(t, n, function() {
                return i[n];
            });
        }(o);
        t.default = a.a;
    },
    1802: function(n, t, e) {}
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "pages/identify/components/qa/index-create-component", {
    "pages/identify/components/qa/index-create-component": function(n, t, e) {
        e("1").createComponent(e(1796));
    }
}, [ [ "pages/identify/components/qa/index-create-component" ] ] ]);