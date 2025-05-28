(global.webpackJsonp = global.webpackJsonp || []).push([ [ "pages/index/components/hot-list" ], {
    1709: function(e, t, n) {
        n.r(t);
        var o = n(1710), r = n(1712), a = (n(1714), n(126)), c = Object(a.default)(r.default, o.render, o.staticRenderFns, !1, null, "4504cd66", null);
        c.options.__file = "src/pages/index/components/hot-list.vue", t.default = c.exports;
    },
    1710: function(e, t, n) {
        n.r(t);
        var o = n(1711);
        n.d(t, "render", function() {
            return o.render;
        }), n.d(t, "staticRenderFns", function() {
            return o.staticRenderFns;
        });
    },
    1711: function(e, t, n) {
        n.r(t), n.d(t, "render", function() {
            return o;
        }), n.d(t, "staticRenderFns", function() {
            return r;
        });
        var o = function() {
            var e = this, t = (e.$createElement, e._self._c, e.__map(e.list, function(t, n) {
                var o = e.showListItem(t, 0), r = e.filter.handlePrice(t.product, "price"), a = e.showListItem(t, 2), c = e.showListItem(t, 4);
                return {
                    $orig: e.__get_orig(t),
                    m0: o,
                    g0: r,
                    m1: a,
                    m2: c
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
    1712: function(e, t, n) {
        n.r(t);
        var o = n(1713);
        t.default = o.default;
    },
    1713: function(e, t, n) {
        n.r(t), function(e) {
            var o = n(16), r = n(149), a = n(115), c = n(116), i = n(197);
            t.default = {
                components: {
                    FastImage: function() {
                        return Promise.all([ n.e("common/vendor"), n.e("components/product/fast-image/index") ]).then(n.bind(null, 1780));
                    },
                    calendar: function() {
                        return Promise.all([ n.e("common/vendor"), n.e("pages/index/components/calendar") ]).then(n.bind(null, 3958));
                    }
                },
                props: {
                    list: {
                        type: Array,
                        required: !0
                    }
                },
                data: function() {
                    return {
                        showTypes: [ 0 ],
                        showCalendar: !1
                    };
                },
                computed: {
                    showListItem: function() {
                        var e = this;
                        return function(t, n) {
                            return e.showTypes.includes(t.typeId) && t.typeId === n;
                        };
                    }
                },
                watch: {
                    list: function() {
                        var e = this;
                        this.$nextTick(function() {
                            e.exposureProductItem();
                        });
                    }
                },
                onUnload: function() {},
                mounted: function() {
                    this.getABData();
                },
                methods: {
                    goProductDetail: function(e, t) {
                        var n = e.product, o = void 0 === n ? {} : n, u = e.typeId, d = "/product/ProductDetail?spuId=".concat(o.spuId, "&sourceName=").concat(o.sourceName, "&propertyValueId=").concat(o.propertyValueId);
                        r.cgbTrackConfig.third_dw_mall_02(o.title, o.price);
                        var s = c.default.trade_recommend_feed_click_734_9({
                            id: o.spuId,
                            title: o.title,
                            list: [ {
                                contentType: "",
                                contentID: u,
                                position: t,
                                requestID: o.recommendRequestId,
                                channelID: "",
                                propertyValueId: o.propertyValueId,
                                targetPropertyValueId: "",
                                contentSlogan: "",
                                itemType: u
                            } ],
                            acm: "",
                            is_spu: 2 === u ? 0 : 1,
                            url: d
                        });
                        Object(a.oneTrack)(s.eventName, s.data), Object(i.pushProductDetail)(d);
                    },
                    goRecommend: function(t, n) {
                        var o = t.boutique, r = void 0 === o ? {} : o, i = t.typeId, u = r.detail, d = void 0 === u ? {} : u, s = r.requestId, l = void 0 === s ? "" : s, p = r.detail.url.split("?") ? r.detail.url.split("?")[1] : r.detail.url, m = c.default.trade_recommend_feed_click_734_9({
                            id: d.id,
                            title: d.title,
                            list: [ {
                                contentType: "",
                                contentID: i,
                                position: n,
                                requestID: l,
                                channelID: "",
                                propertyValueId: "",
                                targetPropertyValueId: "",
                                contentSlogan: "",
                                itemType: i
                            } ],
                            acm: r.acm,
                            is_spu: 2 === i ? 0 : 1,
                            url: "/product/BoutiqueRecommendDetailPage?".concat(p)
                        });
                        Object(a.oneTrack)(m.eventName, m.data), e.navigateTo({
                            url: "/product/BoutiqueRecommendDetailPage?".concat(p)
                        });
                    },
                    exposureProductItem: function() {
                        var t = this;
                        e.createIntersectionObserver(this, {
                            observeAll: !0
                        }).relativeToViewport().observe(".exposure-item", function(e) {
                            if (e.intersectionRatio > 0) {
                                var n = (e.dataset || {}).id, o = t.list[n] || {}, r = o.product, i = void 0 === r ? {} : r, u = o.boutique, d = void 0 === u ? {} : u, s = o.typeId;
                                if (4 === s) {
                                    var l = c.default.trade_common_exposure_734_49();
                                    Object(a.oneTrack)(l.eventName, l.data);
                                } else {
                                    var p = d || {}, m = p.requestId, f = void 0 === m ? "" : m, I = p.detail, h = void 0 === I ? {
                                        url: ""
                                    } : I, v = "/product/ProductDetail?spuId=".concat(i.spuId, "&sourceName=").concat(i.sourceName, "&propertyValueId=").concat(i.propertyValueId), _ = h.url.split("?") ? h.url.split("?")[1] : h.url, g = c.default.trade_recommend_feed_begin_exposure_734_9({
                                        list: [ {
                                            contentType: "",
                                            contentID: s,
                                            position: n,
                                            requestID: i.recommendRequestId || f,
                                            channelID: "",
                                            propertyValueId: i.propertyValueId || "",
                                            targetPropertyValueId: "",
                                            contentSlogan: "",
                                            itemType: s
                                        } ],
                                        is_spu: 2 === s ? 0 : 1,
                                        url: 2 === s ? _ : v
                                    });
                                    Object(a.oneTrack)(g.eventName, g.data);
                                }
                            }
                        });
                    },
                    getABData: function() {
                        var t = this, n = e.getStorageSync("userInfo").userId || "", r = "488_wx_FSRL";
                        Object(o.postRequest)("/api/v1/h5/abtestsdk/upgrade/h5", {
                            userId: n,
                            currentGroupParm: r,
                            noToast: !0
                        }, {
                            stone: !0,
                            json: !0
                        }).then(function(e) {
                            e && e.data && "2" === e.data[r] && (t.showCalendar = !0, t.showTypes = [ 0, 4 ]);
                        }).catch(function(e) {
                            console.log(e);
                        });
                    }
                }
            };
        }.call(this, n(1).default);
    },
    1714: function(e, t, n) {
        n.r(t);
        var o = n(1715), r = n.n(o);
        for (var a in o) [ "default" ].indexOf(a) < 0 && function(e) {
            n.d(t, e, function() {
                return o[e];
            });
        }(a);
        t.default = r.a;
    },
    1715: function(e, t, n) {}
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "pages/index/components/hot-list-create-component", {
    "pages/index/components/hot-list-create-component": function(e, t, n) {
        n("1").createComponent(n(1709));
    }
}, [ [ "pages/index/components/hot-list-create-component" ] ] ]);