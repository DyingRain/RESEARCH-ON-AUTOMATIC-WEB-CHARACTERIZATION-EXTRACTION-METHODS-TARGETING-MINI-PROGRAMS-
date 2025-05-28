(global.webpackJsonp = global.webpackJsonp || []).push([ [ "pages/index/index" ], {
    142: function(t, e, n) {
        n.r(e), function(t) {
            n(7), n(8), n(2), t(n(143).default);
        }.call(this, n(1).createPage);
    },
    143: function(t, e, n) {
        n.r(e);
        var a = n(144), i = n(146), r = (n(151), n(126)), o = Object(r.default)(i.default, a.render, a.staticRenderFns, !1, null, "1badc801", null);
        o.options.__file = "src/pages/index/index.vue", e.default = o.exports;
    },
    144: function(t, e, n) {
        n.r(e);
        var a = n(145);
        n.d(e, "render", function() {
            return a.render;
        }), n.d(e, "staticRenderFns", function() {
            return a.staticRenderFns;
        });
    },
    145: function(t, e, n) {
        n.r(e), n.d(e, "render", function() {
            return a;
        }), n.d(e, "staticRenderFns", function() {
            return i;
        });
        var a = function() {
            var t = this, e = (t.$createElement, t._self._c, t.channels.slice(0, 4));
            t._isMounted || (t.e0 = function(e) {
                t.downLoadModalShow = !1;
            }), t.$mp.data = Object.assign({}, {
                $root: {
                    g0: e
                }
            });
        }, i = [];
        a._withStripped = !0;
    },
    146: function(t, e, n) {
        n.r(e);
        var a = n(147);
        e.default = a.default;
    },
    147: function(t, e, n) {
        n.r(e), function(t) {
            var a, i, r = n(4), o = n.n(r), s = n(148), u = n(19), c = n(115), l = n(116), d = n(149), p = n(136), h = n(150), f = n(15), m = n(45);
            function g(t, e, n, a, i, r, o) {
                try {
                    var s = t[r](o), u = s.value;
                } catch (t) {
                    return void n(t);
                }
                s.done ? e(u) : Promise.resolve(u).then(a, i);
            }
            function b(t) {
                return function() {
                    var e = this, n = arguments;
                    return new Promise(function(a, i) {
                        var r = t.apply(e, n);
                        function o(t) {
                            g(r, a, i, o, s, "next", t);
                        }
                        function s(t) {
                            g(r, a, i, o, s, "throw", t);
                        }
                        o(void 0);
                    });
                };
            }
            function v(t, e) {
                var n = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var a = Object.getOwnPropertySymbols(t);
                    e && (a = a.filter(function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable;
                    })), n.push.apply(n, a);
                }
                return n;
            }
            function w(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? v(Object(n), !0).forEach(function(e) {
                        x(t, e, n[e]);
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : v(Object(n)).forEach(function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
                    });
                }
                return t;
            }
            function x(t, e, n) {
                return e in t ? Object.defineProperty(t, e, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = n, t;
            }
            e.default = {
                components: {
                    Loadmore: function() {
                        return n.e("components/loadmore/index").then(n.bind(null, 1716));
                    },
                    ScrollTitle: function() {
                        return n.e("components/ScrollTitle/ScrollTitle").then(n.bind(null, 1752));
                    },
                    SearchBar: function() {
                        return Promise.all([ n.e("common/vendor"), n.e("pages/index/components/search-bar") ]).then(n.bind(null, 1687));
                    },
                    SwiperBanner: function() {
                        return Promise.all([ n.e("common/vendor"), n.e("pages/index/components/swiper-banner") ]).then(n.bind(null, 1695));
                    },
                    DeclarationBar: function() {
                        return n.e("pages/index/components/declaration-bar").then(n.bind(null, 1702));
                    },
                    HotList: function() {
                        return Promise.all([ n.e("common/vendor"), n.e("pages/index/components/hot-list") ]).then(n.bind(null, 1709));
                    },
                    downLoadModal: function() {
                        return n.e("components/download-modal/index").then(n.bind(null, 1745));
                    },
                    ActivityEntery: function() {
                        return Promise.all([ n.e("common/vendor"), n.e("pages/index/components/activity-entery") ]).then(n.bind(null, 1723));
                    },
                    KingkongEntry: function() {
                        return Promise.all([ n.e("common/vendor"), n.e("pages/index/components/kingkong-entry") ]).then(n.bind(null, 1731));
                    },
                    Promotion: function() {
                        return Promise.all([ n.e("common/vendor"), n.e("pages/index/components/promotion") ]).then(n.bind(null, 1738));
                    }
                },
                data: function() {
                    return {
                        gotoV5: !1,
                        greyFilter: !1,
                        downLoadModalShow: !1,
                        selectTitleIndex: 0,
                        userInfo: {},
                        dataList: [],
                        banner: [],
                        seriesList: [],
                        bottomLoading: !1,
                        pageLoading: !1,
                        swiperBannerOptions: {
                            autoplay: !1,
                            duration: 250
                        },
                        channels: [],
                        actBanner: [],
                        params: {
                            tabId: "",
                            limit: 20,
                            lastId: ""
                        }
                    };
                },
                computed: w({}, Object(u.mapGetters)({
                    tabs: "indexTabList"
                })),
                onLoad: function(e) {
                    this.getGreyFilter(), Object(p.isCGB)() && t.setNavigationBarTitle({
                        title: "得物"
                    }), d.cgbTrackConfig.third_dw_mall_01("购买"), this.getData(!0), t.showShareMenu({
                        withShareTicket: !0,
                        menus: [ "shareAppMessage", "shareTimeline" ]
                    });
                    var n = l.default.trade_pageview_734({
                        url: Object(l.getCurrentPageUrl)()
                    });
                    Object(c.oneTrack)(n.eventName, n.data), "1" === e.recallcoupon && (Object(m.isLogin)() || Object(m.doLogin)());
                },
                onShow: function() {
                    this.sameClickTimes = 0, this.swiperBannerOptions.autoplay = !0, t.hideNavigationBarLoading(), 
                    t.stopPullDownRefresh(), Object(f.getInitData)();
                },
                onReachBottom: function() {
                    this.getData(!1);
                },
                onPullDownRefresh: function() {
                    this.getData(!0);
                },
                onShareAppMessage: function(t) {
                    return {
                        title: "得物App新一代潮流生活方式平台，下载app得520新人礼包！",
                        imageUrl: ""
                    };
                },
                onShareTimeline: function() {
                    return {
                        title: "得物App新一代潮流生活方式平台，下载app得520新人礼包！",
                        query: "from=pyq"
                    };
                },
                onTabItemTap: function(t) {
                    var e = l.default.trade_block_content_click_734_350({
                        title: t.text,
                        pos: Number(t.index) + 1
                    });
                    Object(c.oneTrack)(e.eventName, e.data);
                },
                methods: {
                    getGreyFilter: function() {
                        var t = this;
                        Object(h.getConfigByKey)("indexGreyFilter", {
                            open: !1
                        }).then(function(e) {
                            t.greyFilter = e.open;
                        });
                    },
                    swiperBannerClick: function(t) {
                        t.key || (this.downLoadModalShow = !0);
                    },
                    getShopping: (i = b(o.a.mark(function e(n) {
                        var a, i, r, u, c, l, d, p, h, f, m, g, b;
                        return o.a.wrap(function(e) {
                            for (;;) switch (e.prev = e.next) {
                              case 0:
                                if (n || this.params.lastId) {
                                    e.next = 2;
                                    break;
                                }
                                return e.abrupt("return");

                              case 2:
                                if (!this.bottomLoading) {
                                    e.next = 4;
                                    break;
                                }
                                return e.abrupt("return");

                              case 4:
                                return this.startLoading(n), this.params.lastId = n ? "" : this.params.lastId, u = w({}, this.params), 
                                n && (u.limit += 1), u.platform = "h5", u.version = "4.73.0", u.isVisitor = !1, 
                                e.next = 13, s.default.getShopping(Object.assign(u, {
                                    newAdvForH5: !0
                                })).catch(function(t) {
                                    return t;
                                });

                              case 13:
                                if (c = e.sent, this.stopLoading(), !c || 200 === c.status) {
                                    e.next = 18;
                                    break;
                                }
                                return c.msg && t.showToast({
                                    title: c.msg,
                                    icon: "none"
                                }), e.abrupt("return");

                              case 18:
                                if (this.params.lastId = +(null == c || null === (a = c.data) || void 0 === a ? void 0 : a.lastId), 
                                n) {
                                    e.next = 22;
                                    break;
                                }
                                return this.dataList = this.dataList.concat(this.fixImage(null == c || null === (l = c.data) || void 0 === l ? void 0 : l.hotList)), 
                                e.abrupt("return");

                              case 22:
                                d = (null == c ? void 0 : c.data) || {}, p = d.hotList, h = void 0 === p ? [] : p, 
                                f = d.growthChannels, m = void 0 === f ? {} : f, g = d.actBanner, b = void 0 === g ? [] : g, 
                                h[0] && 1 === h[0].typeId && (h = h.slice(1)), this.banner = (null == c || null === (i = c.data) || void 0 === i ? void 0 : i.banner) || [], 
                                this.seriesList = (null == c || null === (r = c.data) || void 0 === r ? void 0 : r.seriesList) || [], 
                                this.dataList = this.fixImage(h), this.channels = m.channels || [], this.actBanner = b;

                              case 29:
                              case "end":
                                return e.stop();
                            }
                        }, e, this);
                    })), function(t) {
                        return i.apply(this, arguments);
                    }),
                    fixImage: function(t) {
                        return (t || []).forEach(function(t) {
                            if (2 === t.typeId) {
                                var e = t.boutique.images;
                                e.length > 6 && (t.boutique.images = e.slice(0, 6));
                            }
                        }), t;
                    },
                    getTabDetail: (a = b(o.a.mark(function e(n) {
                        var a, i, r, u, c;
                        return o.a.wrap(function(e) {
                            for (;;) switch (e.prev = e.next) {
                              case 0:
                                if (n || this.params.lastId) {
                                    e.next = 2;
                                    break;
                                }
                                return e.abrupt("return");

                              case 2:
                                if (!this.bottomLoading) {
                                    e.next = 4;
                                    break;
                                }
                                return e.abrupt("return");

                              case 4:
                                return this.startLoading(n), this.params.lastId = n ? "" : this.params.lastId, e.next = 8, 
                                s.default.getTabDetail(w({}, this.params)).catch(function(t) {
                                    return t;
                                });

                              case 8:
                                if (r = e.sent, this.stopLoading(), !r || 200 === r.status) {
                                    e.next = 13;
                                    break;
                                }
                                return r.msg && t.showToast({
                                    title: r.msg,
                                    icon: "none"
                                }), e.abrupt("return");

                              case 13:
                                if (this.params.lastId = +(null == r || null === (a = r.data) || void 0 === a ? void 0 : a.lastId), 
                                (u = null == r || null === (i = r.data) || void 0 === i ? void 0 : i.list) && u.length) {
                                    e.next = 18;
                                    break;
                                }
                                return this.params.lastId = "", e.abrupt("return");

                              case 18:
                                if (n) {
                                    e.next = 21;
                                    break;
                                }
                                return this.dataList = this.dataList.concat(null == r || null === (c = r.data) || void 0 === c ? void 0 : c.list), 
                                e.abrupt("return");

                              case 21:
                                this.dataList = u;

                              case 22:
                              case "end":
                                return e.stop();
                            }
                        }, e, this);
                    })), function(t) {
                        return a.apply(this, arguments);
                    }),
                    handleTabClick: function(t) {
                        var e = t.item, n = t.index;
                        this.selectTitleIndex !== n && (this.selectTitleIndex = n, this.params.tabId = e.id, 
                        this.getData(!0));
                    },
                    getData: function(t) {
                        0 === this.selectTitleIndex ? this.getShopping(t) : this.getTabDetail(t);
                    },
                    startLoading: function(e) {
                        e || (this.bottomLoading = !0), t.showNavigationBarLoading();
                    },
                    stopLoading: function() {
                        t.hideNavigationBarLoading(), t.stopPullDownRefresh(), this.bottomLoading = !1;
                    }
                }
            };
        }.call(this, n(1).default);
    },
    151: function(t, e, n) {
        n.r(e);
        var a = n(152), i = n.n(a);
        for (var r in a) [ "default" ].indexOf(r) < 0 && function(t) {
            n.d(e, t, function() {
                return a[t];
            });
        }(r);
        e.default = i.a;
    },
    152: function(t, e, n) {}
}, [ [ 142, "common/runtime", "common/vendor" ] ] ]);