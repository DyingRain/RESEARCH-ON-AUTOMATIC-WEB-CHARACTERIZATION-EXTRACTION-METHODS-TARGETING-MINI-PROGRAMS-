(global.webpackJsonp = global.webpackJsonp || []).push([ [ "pages/identify/index" ], {
    216: function(e, n, t) {
        t.r(n), function(e) {
            t(7), t(8), t(2), e(t(217).default);
        }.call(this, t(1).createPage);
    },
    217: function(e, n, t) {
        t.r(n);
        var i = t(218), o = t(220), r = (t(241), t(126)), a = Object(r.default)(o.default, i.render, i.staticRenderFns, !1, null, "736d6813", null);
        a.options.__file = "src/pages/identify/index.vue", n.default = a.exports;
    },
    218: function(e, n, t) {
        t.r(n);
        var i = t(219);
        t.d(n, "render", function() {
            return i.render;
        }), t.d(n, "staticRenderFns", function() {
            return i.staticRenderFns;
        });
    },
    219: function(e, n, t) {
        t.r(n), t.d(n, "render", function() {
            return i;
        }), t.d(n, "staticRenderFns", function() {
            return o;
        });
        var i = function() {
            this.$createElement;
            var e = (this._self._c, this.thousands(this.home.identifyInfo.totalNum)), n = JSON.stringify({
                id: "identify_block_click_1044_213",
                utm_source: this.channel
            }), t = JSON.stringify({
                id: "identify_block_click_1044_2392"
            }), i = JSON.stringify({
                id: "identify_block_content_click_1044_6",
                position: 2,
                block_content_url: "/account/MyCouponPage"
            }), o = JSON.stringify({
                id: "identify_block_content_click_1044_6",
                position: 1,
                block_content_url: "/identify/pages/identifylist/index"
            });
            this.$mp.data = Object.assign({}, {
                $root: {
                    m0: e,
                    g0: n,
                    g1: t,
                    g2: i,
                    g3: o
                }
            });
        }, o = [];
        i._withStripped = !0;
    },
    220: function(e, n, t) {
        t.r(n);
        var i = t(221);
        n.default = i.default;
    },
    221: function(e, n, t) {
        t.r(n), function(e) {
            var i = t(45), o = t(222), r = (t(223), t(239)), a = t(240);
            function s(e, n) {
                var t = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    n && (i = i.filter(function(n) {
                        return Object.getOwnPropertyDescriptor(e, n).enumerable;
                    })), t.push.apply(t, i);
                }
                return t;
            }
            function d(e) {
                for (var n = 1; n < arguments.length; n++) {
                    var t = null != arguments[n] ? arguments[n] : {};
                    n % 2 ? s(Object(t), !0).forEach(function(n) {
                        c(e, n, t[n]);
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : s(Object(t)).forEach(function(n) {
                        Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
                    });
                }
                return e;
            }
            function c(e, n, t) {
                return n in e ? Object.defineProperty(e, n, {
                    value: t,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[n] = t, e;
            }
            var f = {
                title: "得物在线鉴别",
                path: "pages/identify/index"
            };
            n.default = {
                components: {
                    Identifyer: function() {
                        return Promise.all([ t.e("common/vendor"), t.e("pages/identify/components/identifyer/index") ]).then(t.bind(null, 1788));
                    },
                    Qa: function() {
                        return Promise.all([ t.e("common/vendor"), t.e("pages/identify/components/qa/index") ]).then(t.bind(null, 1796));
                    },
                    Category: function() {
                        return t.e("pages/identify/components/category/index").then(t.bind(null, 1803));
                    },
                    OnlineCategory: function() {
                        return t.e("pages/identify/components/onlinecategory/index").then(t.bind(null, 1810));
                    }
                },
                mixins: [ r.shareMix ],
                data: function() {
                    return {
                        share: d({}, f),
                        showCategory: !1,
                        showonlineCategory: !1,
                        identifyerNum: 0,
                        identifyId: "",
                        isLogin: Object(i.isLogin)(),
                        identifyer: [],
                        onlineNewMessageNum: 0,
                        offlineNewMessageNum: 0,
                        identifyList: [],
                        hidePage: !0,
                        showIntroduce: !1,
                        home: {
                            identifyInfo: {
                                title: "鉴别服务开创者",
                                buttonText: "在线鉴别",
                                totalNum: 262764779,
                                freeNum: 262764779
                            },
                            expertTitle: "124位鉴别师"
                        },
                        channel: "",
                        showWelfareModal: !1,
                        extendInfo: {}
                    };
                },
                computed: {
                    hotBatch: function() {
                        var e = this.onlineNewMessageNum, n = this.offlineNewMessageNum;
                        return e > 0 || n > 0;
                    },
                    hotBatchType: function() {
                        var e = this.onlineNewMessageNum, n = this.offlineNewMessageNum;
                        return e > 0 ? "onlineIdentify" : n > 0 ? "physicalIdentify" : "onlineIdentify";
                    }
                },
                onPullDownRefresh: function() {
                    console.log("onPullDownRefresh", this.isLogin), this.getHomeData(), this.getHint(), 
                    this.getIdentifyer();
                },
                onTabItemTap: function(n) {
                    this.identifyExposureTrack("trade_block_content_click_734_350"), e.hideTabBarRedDot({
                        index: n.index
                    });
                },
                onHide: function() {
                    this.hidePage = !0, this.showCategory = !1;
                },
                onUnload: function() {
                    this.hidePage = !0;
                },
                onShow: function() {
                    this.isLogin = Object(i.isLogin)(), console.log("onShow", this.isLogin), this.getHomeData(), 
                    this.hidePage = !1, this.getIdentifyer(), this.getHint();
                    var n = new a.default().getCurrentPage().options || {};
                    console.log("curparam", n), this.channel = n.channel || "", e.setStorageSync("channel", this.channel), 
                    this.identifyExposureTrack("identify_pageview_1044", {
                        utm_source: this.channel
                    }), this.identifyExposureTrack("identify_block_exposure_1044_2392");
                },
                onLoad: function() {
                    e.setNavigationBarColor({
                        frontColor: "#000000",
                        backgroundColor: "#F5F5F9"
                    });
                },
                methods: {
                    closeWelfareModal: function() {
                        this.showWelfareModal = !1;
                    },
                    modalGoToPublish: function() {
                        this.showWelfareModal = !1, this.identifyStep();
                    },
                    goToPublic: function(n) {
                        var t = n.extra, i = t.productId, r = t.seriesId, a = t.secondClassId, s = t.brandId, d = t.promptId, c = t.status, f = {
                            seriesId: r,
                            promptId: d,
                            secondClassId: a,
                            brandId: s
                        };
                        i && (f = {
                            productId: Number(n.productId),
                            status: c + ""
                        }), e.navigateTo({
                            url: "/identify/pages/publish/index?" + Object(o.urlEncode)(f)
                        });
                    },
                    handleaCouponPage: function() {
                        e.navigateTo({
                            url: "/account/MyCouponPage"
                        });
                    },
                    handlemyidentify: function() {
                        if (console.log("去我的鉴别"), this.isLogin) {
                            var n = [ "online", "offline" ][+("physicalIdentify" === this.hotBatchType)];
                            e.navigateTo({
                                url: "/identify/pages/identifylist/index?mode=".concat(n)
                            });
                        } else this.goLogin();
                    },
                    thousands: function(e) {
                        return function(e) {
                            var n = e.toString(), t = n.indexOf(".") > -1 ? /(\d)(?=(\d{3})+\.)/g : /(\d)(?=(?:\d{3})+$)/g;
                            return n.replace(t, "$1,");
                        }(e);
                    },
                    identifyStep: function() {
                        this.isLogin ? this.showonlineCategory = !0 : this.goLogin();
                    },
                    getIdentifyer: function() {
                        var e = this;
                        this.identifyList = [], this.duserver.getRequest("/identify-server/v1/common/expert/expertOnlineTotalInfoXcx").then(function(n) {
                            200 == (null == n ? void 0 : n.status) && (e.identifyer = n.data, e.identifyerNum = n.data.total, 
                            e.identifyer.expertListMap.forEach(function(n) {
                                var t = parseInt(Math.random() * n.length, 10);
                                n[t] && e.identifyList.push(n[t]);
                            }), e.identifyList.forEach(function(e) {
                                e.desc.replace("/", "|");
                            }));
                        });
                    },
                    getHomeData: function() {
                        var n = this, t = {
                            1: "/identify-index/v1/identify/xcx",
                            0: "/api/v1/h5/identify-index/v1/common/identify/xcx"
                        }[this.isLogin ? "1" : "0"];
                        this.duserver.getRequest(t).then(function(t) {
                            var i, o, r;
                            200 == (null == t ? void 0 : t.status) && (n.home = t.data), e.setStorageSync("serveTitle", n.home.identifyInfo.text), 
                            n.isLogin && (n.extendInfo = n.home.extendInfo ? JSON.parse(n.home.extendInfo) : {}, 
                            n.showWelfareModal = Boolean(null === (i = n.extendInfo) || void 0 === i || null === (o = i.popUpInfo) || void 0 === o ? void 0 : o.image) && (null === (r = n.extendInfo) || void 0 === r ? void 0 : r.popUpInfo)), 
                            setTimeout(function() {
                                e.hideNavigationBarLoading(), e.stopPullDownRefresh();
                            }, 1e3);
                        });
                    },
                    getHint: function() {
                        if (this.isLogin) {
                            var e = this;
                            wx.getStorage({
                                key: "userInfo",
                                success: function(n) {
                                    var t = n.data && n.data.userId || "";
                                    e.duserver.postRequest("/api/v1/h5/hot/hint/v1/getUserH5HotBatch", {
                                        userId: t,
                                        hotType: "number"
                                    }, {
                                        json: !0
                                    }).then(function(n) {
                                        200 == (null == n ? void 0 : n.status) && (e.onlineNewMessageNum = n.data && n.data.identifyNum || 0);
                                    }), e.duserver.getRequest("/identify-order/api/v1/internal/api/physical/hot-hint/get", {
                                        userId: t,
                                        type: "physicalIdentifyNum"
                                    }).then(function(n) {
                                        var t = n.code, i = n.data;
                                        200 === t && (e.offlineNewMessageNum = i && i.num || 0);
                                    }).catch(console.error);
                                }
                            });
                        }
                    },
                    handleofflineIdent: function() {
                        this.showCategory = !0, this.identifyExposureTrack("identify_block_exposure_1305");
                    },
                    goPublish: function(n) {
                        var t = n.brandId, i = n.categoryId, r = n.categoryName, a = n.enableSearch;
                        "" !== t ? (console.log("brandId1", t), e.navigateTo({
                            url: "/identify/pages/offlinepublish/index?" + Object(o.urlEncode)({
                                brandId: t,
                                firstCategoryId: i,
                                firstCategoryName: r
                            })
                        })) : (console.log("brandId2", t), e.navigateTo({
                            url: "/identify/pages/classificationV2/index?firstCategoryId=".concat(i, "&firstCategoryName=").concat(r, "&enableSearch=").concat(a)
                        }));
                    },
                    gopinxuan: function() {
                        e.navigateTo({
                            url: "/identify/pages/web/web?" + Object(o.urlEncode)({
                                url: "https://cdn-fast.dewu.com/nezha-plus/detail/62ecc9d7de095d3d806fc0a7?duWebviewBg=%23ffffff&outside_channel_type=0&share_platform_title=0"
                            })
                        });
                    },
                    closeClass: function() {
                        this.showCategory = !1, this.showonlineCategory = !1;
                    },
                    goLogin: function() {
                        this.isLogin || Object(i.doLogin)();
                    }
                }
            };
        }.call(this, t(1).default);
    },
    241: function(e, n, t) {
        t.r(n);
        var i = t(242), o = t.n(i);
        for (var r in i) [ "default" ].indexOf(r) < 0 && function(e) {
            t.d(n, e, function() {
                return i[e];
            });
        }(r);
        n.default = o.a;
    },
    242: function(e, n, t) {}
}, [ [ 216, "common/runtime", "common/vendor" ] ] ]);