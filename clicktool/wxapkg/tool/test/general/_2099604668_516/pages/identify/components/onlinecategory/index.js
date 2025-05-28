(global.webpackJsonp = global.webpackJsonp || []).push([ [ "pages/identify/components/onlinecategory/index" ], {
    1810: function(e, t, n) {
        n.r(t);
        var o = n(1811), r = n(1813), i = (n(1815), n(126)), a = Object(i.default)(r.default, o.render, o.staticRenderFns, !1, null, "6cc91f6e", null);
        a.options.__file = "src/pages/identify/components/onlinecategory/index.vue", t.default = a.exports;
    },
    1811: function(e, t, n) {
        n.r(t);
        var o = n(1812);
        n.d(t, "render", function() {
            return o.render;
        }), n.d(t, "staticRenderFns", function() {
            return o.staticRenderFns;
        });
    },
    1812: function(e, t, n) {
        n.r(t), n.d(t, "render", function() {
            return o;
        }), n.d(t, "staticRenderFns", function() {
            return r;
        });
        var o = function() {
            var e = this, t = (e.$createElement, e._self._c, e.__map(e.category, function(t, n) {
                var o = JSON.stringify({
                    id: "identify_filter_category_click_397",
                    block_content_title: t.newFlag ? "New" : "",
                    identify_category_name: t.name
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
        }, r = [];
        o._withStripped = !0;
    },
    1813: function(e, t, n) {
        n.r(t);
        var o = n(1814);
        t.default = o.default;
    },
    1814: function(e, t, n) {
        n.r(t), function(e) {
            function n(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var o = Object.getOwnPropertySymbols(e);
                    t && (o = o.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable;
                    })), n.push.apply(n, o);
                }
                return n;
            }
            function o(e, t, n) {
                return t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n, e;
            }
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
                        category: [],
                        isready: !1
                    };
                },
                mounted: function() {},
                watch: {
                    showCategory: function(e) {
                        e && (this.categoryList(), this.identifyExposureTrack("identify_pageview_397"));
                    }
                },
                methods: {
                    close: function() {
                        this.$emit("closeClass", !1);
                    },
                    nextStep: function(t) {
                        e.removeStorageSync("aIselectData"), 29 === t.identifyFirstClassId || 1 === t.identifyFirstClassId ? (this.goPhoto(t), 
                        e.setStorageSync("aIselectData", t)) : this.goBrand(t);
                    },
                    goPhoto: function(t) {
                        e.navigateTo({
                            url: "/identify/pages/photograph/index?step=0&data=".concat(encodeURIComponent(), "&isAI=1&identifyFirstClassId=").concat(t.identifyFirstClassId)
                        });
                    },
                    goBrand: function(t) {
                        var r = JSON.stringify(function(e) {
                            for (var t = 1; t < arguments.length; t++) {
                                var r = null != arguments[t] ? arguments[t] : {};
                                t % 2 ? n(Object(r), !0).forEach(function(t) {
                                    o(e, t, r[t]);
                                }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : n(Object(r)).forEach(function(t) {
                                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
                                });
                            }
                            return e;
                        }({}, t));
                        e.navigateTo({
                            url: "/identify/pages/classification/index?firstCategory=".concat(encodeURIComponent(r))
                        });
                    },
                    categoryList: function() {
                        var e = this;
                        try {
                            this.isready = !1, this.duserver.getRequest("/identify-server/v1/class/first-list", {
                                json: !0
                            }).then(function(t) {
                                200 == t.status && (console.log("category", t), e.category = t.data || [], e.isready = !0);
                            });
                        } catch (e) {
                            console.log("category", e);
                        }
                    }
                }
            };
        }.call(this, n(1).default);
    },
    1815: function(e, t, n) {
        n.r(t);
        var o = n(1816), r = n.n(o);
        for (var i in o) [ "default" ].indexOf(i) < 0 && function(e) {
            n.d(t, e, function() {
                return o[e];
            });
        }(i);
        t.default = r.a;
    },
    1816: function(e, t, n) {}
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "pages/identify/components/onlinecategory/index-create-component", {
    "pages/identify/components/onlinecategory/index-create-component": function(e, t, n) {
        n("1").createComponent(n(1810));
    }
}, [ [ "pages/identify/components/onlinecategory/index-create-component" ] ] ]);