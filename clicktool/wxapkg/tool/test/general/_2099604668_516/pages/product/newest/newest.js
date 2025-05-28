(global.webpackJsonp = global.webpackJsonp || []).push([ [ "pages/product/newest/newest" ], {
    191: function(t, n, e) {
        e.r(n), function(t) {
            e(7), e(8), e(2), t(e(192).default);
        }.call(this, e(1).createPage);
    },
    192: function(t, n, e) {
        e.r(n);
        var o = e(193), a = e(195), r = (e(200), e(126)), i = Object(r.default)(a.default, o.render, o.staticRenderFns, !1, null, null, null);
        i.options.__file = "src/pages/product/newest/newest.vue", n.default = i.exports;
    },
    193: function(t, n, e) {
        e.r(n);
        var o = e(194);
        e.d(n, "render", function() {
            return o.render;
        }), e.d(n, "staticRenderFns", function() {
            return o.staticRenderFns;
        });
    },
    194: function(t, n, e) {
        e.r(n), e.d(n, "render", function() {
            return o;
        }), e.d(n, "staticRenderFns", function() {
            return a;
        });
        var o = function() {
            var t = this, n = (t.$createElement, t._self._c, t.__map(t.datalist, function(n, e) {
                var o = t.showHeader(t.datalist, e), a = t.ymd(n.product.sellDate), r = t.ymd(n.product.sellDate), i = t.ymd(n.product.sellDate), u = t.ymd(n.product.sellDate), s = t.filter.handleImage(n.product.logoUrl, "300"), d = t.filter.handlePrice(n.item.price), c = t.showFooter(t.datalist, e);
                return {
                    $orig: t.__get_orig(n),
                    m0: o,
                    m1: a,
                    m2: r,
                    m3: i,
                    m4: u,
                    g0: s,
                    g1: d,
                    m5: c
                };
            }));
            t.$mp.data = Object.assign({}, {
                $root: {
                    l0: n
                }
            });
        }, a = [];
        o._withStripped = !0;
    },
    195: function(t, n, e) {
        e.r(n);
        var o = e(196);
        n.default = o.default;
    },
    196: function(t, n, e) {
        e.r(n), function(t) {
            var o = e(197);
            n.default = {
                data: function() {
                    return {
                        datalist: [],
                        lastId: ""
                    };
                },
                onLoad: function(t) {},
                onReady: function() {},
                onShow: function() {
                    this.getProductList(!0);
                },
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
                    ymd: function(t) {
                        if (!t) return {
                            monthNum: "",
                            dayNum: "",
                            monthEn: ""
                        };
                        var n = this.isChinese(t);
                        if (n) return {
                            monthNum: n,
                            dayNum: "",
                            monthEn: this.getSeasons(n)
                        };
                        var e = t.indexOf(".") > -1 ? "." : "-", o = t.split(e);
                        return {
                            monthNum: o[1],
                            dayNum: o[2] || "",
                            monthEn: [ "JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SPT", "OCT", "NOV", "DEC" ][parseInt(o[1] - 1)]
                        };
                    },
                    isChinese: function(t) {
                        return t ? (t.match(/[\u4e00-\u9fa5]/g) || []).join("") : "";
                    },
                    getSeasons: function(t) {
                        return t.indexOf("春") > -1 ? "Spr" : t.indexOf("夏") > -1 ? "Sum" : t.indexOf("秋") > -1 ? "Fal" : t.indexOf("冬") > -1 ? "Win" : "";
                    },
                    showHeader: function(t, n) {
                        if (0 == n) return !0;
                        var e = t[n - 1], o = t[n];
                        return this.ymd(e.product.sellDate).monthNum != this.ymd(o.product.sellDate).monthNum;
                    },
                    showFooter: function(t, n) {
                        if (n == t.length - 1) return !0;
                        var e = t[n + 1], o = t[n];
                        return console.log(n, o.product.title), this.ymd(e.product.sellDate).monthNum != this.ymd(o.product.sellDate).monthNum;
                    },
                    getProductList: function(n) {
                        var e = this;
                        if (0 != n || "" != e.lastId) {
                            var o = {
                                pageSize: 20,
                                lastPage: n ? "" : e.lastId
                            };
                            this.duserver.postRequest("/api/v1/h5/commodity/fire/spu/last-newsold-list", o, {
                                json: !0,
                                stone: !0
                            }).then(function(o) {
                                if (o && 200 == o.status) {
                                    var a = n ? o.data.list : e.datalist.concat(o.data.list), r = o.data.lastId ? o.data.lastId : "";
                                    e.setData({
                                        datalist: a,
                                        lastId: r
                                    });
                                } else t.showToast({
                                    icon: "none",
                                    title: o.msg
                                });
                                setTimeout(function() {
                                    t.hideNavigationBarLoading(), t.stopPullDownRefresh();
                                }, 1e3);
                            });
                        }
                    },
                    enterProductDetail: function(t) {
                        var n = t.currentTarget.dataset.index, e = this.datalist[n];
                        Object(o.pushProductDetail)("/product/ProductDetail?spuId=".concat(e.product.productId, "&sourceName=").concat(e.product.sourceName));
                    }
                }
            };
        }.call(this, e(1).default);
    },
    200: function(t, n, e) {
        e.r(n);
        var o = e(201), a = e.n(o);
        for (var r in o) [ "default" ].indexOf(r) < 0 && function(t) {
            e.d(n, t, function() {
                return o[t];
            });
        }(r);
        n.default = a.a;
    },
    201: function(t, n, e) {}
}, [ [ 191, "common/runtime", "common/vendor" ] ] ]);