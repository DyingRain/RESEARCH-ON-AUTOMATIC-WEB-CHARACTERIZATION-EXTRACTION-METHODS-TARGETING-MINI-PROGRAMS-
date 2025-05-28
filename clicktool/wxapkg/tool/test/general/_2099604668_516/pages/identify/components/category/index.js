(global.webpackJsonp = global.webpackJsonp || []).push([ [ "pages/identify/components/category/index" ], {
    1803: function(e, t, n) {
        n.r(t);
        var o = n(1804), a = n(1806), r = (n(1808), n(126)), c = Object(r.default)(a.default, o.render, o.staticRenderFns, !1, null, "28625d4a", null);
        c.options.__file = "src/pages/identify/components/category/index.vue", t.default = c.exports;
    },
    1804: function(e, t, n) {
        n.r(t);
        var o = n(1805);
        n.d(t, "render", function() {
            return o.render;
        }), n.d(t, "staticRenderFns", function() {
            return o.staticRenderFns;
        });
    },
    1805: function(e, t, n) {
        n.r(t), n.d(t, "render", function() {
            return o;
        }), n.d(t, "staticRenderFns", function() {
            return a;
        });
        var o = function() {
            var e = this, t = (e.$createElement, e._self._c, e.__map(e.category, function(t, n) {
                var o = JSON.stringify({
                    id: "identify_filter_category_click_1305",
                    identify_category_name: t.categoryName
                });
                return {
                    $orig: e.__get_orig(t),
                    g0: o
                };
            }));
            e.$mp.data = Object.assign({}, {
                $root: {
                    l0: t
                }
            });
        }, a = [];
        o._withStripped = !0;
    },
    1806: function(e, t, n) {
        n.r(t);
        var o = n(1807);
        t.default = o.default;
    },
    1807: function(e, t, n) {
        n.r(t), function(e) {
            t.default = {
                name: "Category",
                props: {
                    showCategory: {
                        type: Boolean,
                        default: function() {
                            return !1;
                        }
                    }
                },
                data: function() {
                    return {
                        show: !0,
                        category: []
                    };
                },
                mounted: function() {},
                watch: {
                    showCategory: function(e) {
                        e && this.categoryList();
                    }
                },
                methods: {
                    close: function() {
                        this.$emit("closeClass", !1);
                    },
                    categoryList: function() {
                        var e = this;
                        try {
                            this.duserver.getRequest("/identify-order/api/v1/internal/api/physical/category/list", {
                                json: !0
                            }).then(function(t) {
                                200 == t.status && (console.log("category", t), e.category = t.data || []);
                            });
                        } catch (e) {
                            console.log("category", e);
                        }
                    },
                    goBrand: function(t) {
                        var n = t.categoryName, o = t.categoryId, a = t.enableSearch;
                        e.navigateTo({
                            url: "/identify/pages/classificationV2/index?firstCategoryId=".concat(o, "&firstCategoryName=").concat(n, "&enableSearch=").concat(a)
                        });
                    }
                }
            };
        }.call(this, n(1).default);
    },
    1808: function(e, t, n) {
        n.r(t);
        var o = n(1809), a = n.n(o);
        for (var r in o) [ "default" ].indexOf(r) < 0 && function(e) {
            n.d(t, e, function() {
                return o[e];
            });
        }(r);
        t.default = a.a;
    },
    1809: function(e, t, n) {}
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "pages/identify/components/category/index-create-component", {
    "pages/identify/components/category/index-create-component": function(e, t, n) {
        n("1").createComponent(n(1803));
    }
}, [ [ "pages/identify/components/category/index-create-component" ] ] ]);