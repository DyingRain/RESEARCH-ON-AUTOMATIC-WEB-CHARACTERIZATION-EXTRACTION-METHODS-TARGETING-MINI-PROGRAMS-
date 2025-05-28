(global.webpackJsonp = global.webpackJsonp || []).push([ [ "pages/product/related/related" ], {
    202: function(t, n, e) {
        e.r(n), function(t) {
            e(7), e(8), e(2), t(e(203).default);
        }.call(this, e(1).createPage);
    },
    203: function(t, n, e) {
        e.r(n);
        var a = e(204), o = e(206), r = (e(208), e(126)), i = Object(r.default)(o.default, a.render, a.staticRenderFns, !1, null, null, null);
        i.options.__file = "src/pages/product/related/related.vue", n.default = i.exports;
    },
    204: function(t, n, e) {
        e.r(n);
        var a = e(205);
        e.d(n, "render", function() {
            return a.render;
        }), e.d(n, "staticRenderFns", function() {
            return a.staticRenderFns;
        });
    },
    205: function(t, n, e) {
        e.r(n), e.d(n, "render", function() {
            return a;
        }), e.d(n, "staticRenderFns", function() {
            return o;
        });
        var a = function() {
            var t = this, n = (t.$createElement, t._self._c, t.__map(t.datalist, function(n, e) {
                var a = t.filter.handleImage(n.logoUrl, "300"), o = t.filter.handlePrice(n.price);
                return {
                    $orig: t.__get_orig(n),
                    g0: a,
                    g1: o
                };
            }));
            t.$mp.data = Object.assign({}, {
                $root: {
                    l0: n
                }
            });
        }, o = [];
        a._withStripped = !0;
    },
    206: function(t, n, e) {
        e.r(n);
        var a = e(207);
        n.default = a.default;
    },
    207: function(t, n, e) {
        e.r(n), function(t) {
            var a = e(197);
            n.default = {
                data: function() {
                    return {
                        datalist: [],
                        productId: 0,
                        lastId: ""
                    };
                },
                onLoad: function(t) {
                    this.setData({
                        productId: t.productId
                    }), this.getProductList(!0);
                },
                onReady: function() {},
                onShow: function() {},
                onHide: function() {},
                onUnload: function() {},
                onPullDownRefresh: function() {
                    this.getProductList(!0);
                },
                onReachBottom: function() {
                    this.getProductList(!1);
                },
                onShareAppMessage: function() {},
                methods: {
                    enterProductDetail: function(t) {
                        var n = t.currentTarget.dataset.index, e = this.datalist[n];
                        Object(a.pushProductDetail)("/product/ProductDetail?spuId=".concat(e.spuId));
                    },
                    getProductList: function(n) {
                        var e = this;
                        if (0 != n || "" != e.lastId) {
                            var a = {
                                limit: 20,
                                spuId: e.productId,
                                lastId: n ? "" : e.lastId
                            };
                            this.duserver.postRequest("/api/v1/h5/commodity/fire/relation-list", a, {
                                stone: !0,
                                json: !0
                            }).then(function(a) {
                                if (a && 200 === a.status) {
                                    var o = n ? a.data.list : e.datalist.concat(a.data.list), r = a.data.lastId ? a.data.lastId : "";
                                    e.setData({
                                        datalist: o,
                                        lastId: r
                                    });
                                } else t.showToast({
                                    icon: "none",
                                    title: a.msg
                                });
                                setTimeout(function() {
                                    t.hideNavigationBarLoading(), t.stopPullDownRefresh();
                                }, 1e3);
                            });
                        }
                    }
                }
            };
        }.call(this, e(1).default);
    },
    208: function(t, n, e) {
        e.r(n);
        var a = e(209), o = e.n(a);
        for (var r in a) [ "default" ].indexOf(r) < 0 && function(t) {
            e.d(n, t, function() {
                return a[t];
            });
        }(r);
        n.default = o.a;
    },
    209: function(t, n, e) {}
}, [ [ 202, "common/runtime", "common/vendor" ] ] ]);