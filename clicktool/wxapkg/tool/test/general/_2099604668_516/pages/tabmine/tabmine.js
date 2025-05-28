(global.webpackJsonp = global.webpackJsonp || []).push([ [ "pages/tabmine/tabmine" ], {
    153: function(t, e, n) {
        n.r(e), function(t) {
            n(7), n(8), n(2), t(n(154).default);
        }.call(this, n(1).createPage);
    },
    154: function(t, e, n) {
        n.r(e);
        var o = n(155), r = n(157), i = (n(163), n(126)), a = Object(i.default)(r.default, o.render, o.staticRenderFns, !1, null, "0cd40e6d", null);
        a.options.__file = "src/pages/tabmine/tabmine.vue", e.default = a.exports;
    },
    155: function(t, e, n) {
        n.r(e);
        var o = n(156);
        n.d(e, "render", function() {
            return o.render;
        }), n.d(e, "staticRenderFns", function() {
            return o.staticRenderFns;
        });
    },
    156: function(t, e, n) {
        n.r(e), n.d(e, "render", function() {
            return o;
        }), n.d(e, "staticRenderFns", function() {
            return r;
        });
        var o = function() {
            this.$createElement;
            this._self._c;
        }, r = [];
        o._withStripped = !0;
    },
    157: function(t, e, n) {
        n.r(e);
        var o = n(158);
        e.default = o.default;
    },
    158: function(t, e, n) {
        n.r(e), function(t) {
            var o, r, i = n(4), a = n.n(i), c = n(94), u = n.n(c), s = n(15), l = n(19), f = (n(135), 
            n(136)), d = n(54), h = n(117), g = n(159), v = n(115), b = n(116), m = n(161), p = n(16), _ = n(123), y = n(149), S = n(45), E = n(162), O = n(138), T = n(83);
            function k(t, e) {
                return function(t) {
                    if (Array.isArray(t)) return t;
                }(t) || function(t, e) {
                    var n = null == t ? null : "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
                    if (null != n) {
                        var o, r, i = [], a = !0, c = !1;
                        try {
                            for (n = n.call(t); !(a = (o = n.next()).done) && (i.push(o.value), !e || i.length !== e); a = !0) ;
                        } catch (t) {
                            c = !0, r = t;
                        } finally {
                            try {
                                a || null == n.return || n.return();
                            } finally {
                                if (c) throw r;
                            }
                        }
                        return i;
                    }
                }(t, e) || function(t, e) {
                    if (t) {
                        if ("string" == typeof t) return w(t, e);
                        var n = Object.prototype.toString.call(t).slice(8, -1);
                        return "Object" === n && t.constructor && (n = t.constructor.name), "Map" === n || "Set" === n ? Array.from(t) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? w(t, e) : void 0;
                    }
                }(t, e) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
                }();
            }
            function w(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var n = 0, o = new Array(e); n < e; n++) o[n] = t[n];
                return o;
            }
            function j(t, e, n, o, r, i, a) {
                try {
                    var c = t[i](a), u = c.value;
                } catch (t) {
                    return void n(t);
                }
                c.done ? e(u) : Promise.resolve(u).then(o, r);
            }
            function C(t) {
                return function() {
                    var e = this, n = arguments;
                    return new Promise(function(o, r) {
                        var i = t.apply(e, n);
                        function a(t) {
                            j(i, o, r, a, c, "next", t);
                        }
                        function c(t) {
                            j(i, o, r, a, c, "throw", t);
                        }
                        a(void 0);
                    });
                };
            }
            function I(t, e) {
                var n = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var o = Object.getOwnPropertySymbols(t);
                    e && (o = o.filter(function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable;
                    })), n.push.apply(n, o);
                }
                return n;
            }
            function N(t, e, n) {
                return e in t ? Object.defineProperty(t, e, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = n, t;
            }
            e.default = {
                name: "Tabmine",
                components: {
                    MineOrder: function() {
                        return n.e("components/mineOrder/index").then(n.bind(null, 1759));
                    }
                },
                data: function() {
                    return {
                        data: {
                            userInfo: {
                                icon: ""
                            },
                            total: {
                                couponNum: ""
                            },
                            subCount: 0,
                            favoriteProductCount: 0,
                            assets: {
                                cashBalance: 0
                            },
                            myOrder: {
                                unpaid: {
                                    count: 0
                                },
                                unShipped: {
                                    count: 0
                                },
                                toBeReceived: {
                                    count: 0
                                }
                            }
                        },
                        notice: {
                            buyerNum: "",
                            officialNum: ""
                        },
                        customerServiceCenterUrl: "",
                        isLogin: !1,
                        ENV_Array: Array.from(d.BASE_ENV_LIST.keys()),
                        ENV_MAP_KEYS: d.BASE_ENV_LIST.keys(),
                        userId: "",
                        showCollectButton: !1,
                        showSubButton: !1,
                        runCGB: !1
                    };
                },
                computed: function(t) {
                    for (var e = 1; e < arguments.length; e++) {
                        var n = null != arguments[e] ? arguments[e] : {};
                        e % 2 ? I(Object(n), !0).forEach(function(e) {
                            N(t, e, n[e]);
                        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : I(Object(n)).forEach(function(e) {
                            Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
                        });
                    }
                    return t;
                }({}, Object(l.mapState)([ "IS_PRODUCTION", "SERVICE_ENV", "isShowClear", "loginToken", "platform" ])),
                onLoad: function() {
                    y.cgbTrackConfig.third_dw_mall_01("我的"), this.getData();
                },
                onUnload: function() {},
                onShow: function() {
                    var e = this;
                    console.log("onShow 进来了"), t.getStorageSync("loginToken") || (this.isLogin = !1, 
                    this.$set(this.data, "myOrder", {})), this.getData(), this.getABData();
                    var n = b.default.trade_common_pageview_1314({
                        url: Object(b.getCurrentPageUrl)()
                    });
                    Object(v.oneTrack)(n.eventName, n.data), this.$nextTick(function() {
                        t.createIntersectionObserver(e, {
                            observeAll: !0
                        }).relativeToViewport().observe(".track-button", function(t) {
                            t.intersectionRatio > 0 && setTimeout(function() {
                                var n = t.dataset.type, o = {
                                    collect: "我的收藏",
                                    sub: "我的订阅",
                                    follow: "关注服务号"
                                }[n], r = "follow" === n ? "" : e.data.favoriteProductCount, i = m.default.trade_common_exposure_1314_2405({
                                    block_content_id: r,
                                    block_content_title: o
                                });
                                Object(v.oneTrack)(i.eventName, i.data);
                            }, 500);
                        });
                    });
                },
                onTabItemTap: function(t) {
                    var e = b.default.trade_block_content_click_734_350({
                        title: t.text,
                        pos: Number(t.index) + 1
                    });
                    Object(v.oneTrack)(e.eventName, e.data);
                },
                methods: {
                    checkEnv: function() {},
                    getABData: function() {
                        var e = this, n = t.getStorageSync("userInfo").userId || "", o = "490_wx_collection";
                        Object(p.postRequest)("/api/v1/h5/abtestsdk/upgrade/h5", {
                            userId: n,
                            currentGroupParm: o,
                            noToast: !0
                        }, {
                            stone: !0,
                            json: !0
                        }).then(function(t) {
                            console.log("490_wx_collection", t), t && t.data && "2" === t.data[o] ? e.showCollectButton = !0 : e.showCollectButton = !1;
                        }).catch(function(t) {
                            e.showCollectButton = !1, console.log(t);
                        });
                    },
                    getData: function() {
                        var t = this;
                        this.duserver.postRequest("/api/v1/h5/index/fire/user-info", {
                            noToast: !0
                        }, {
                            stone: !0,
                            json: !0,
                            notCallLogin: !0
                        }).then(function(e) {
                            if (e && 200 === e.status) {
                                t.isLogin = !0;
                                var n = e.data.userInfo || {};
                                e.data.features.forEach(function(e) {
                                    7 === e.id && (t.customerServiceCenterUrl = "https://m.dewu.com/hybird/h5customerService/serviceCenter?faqGroup=1&v=4.11.0");
                                }), t.data = e.data, t.notice = e.tradeNotice || {}, t.userId = n.userId, t.RiskSDK && t.RiskSDK.bindUser("wx", t.userId), 
                                Object(h.bindBehaviorTracking)(), Object(g.default)();
                            }
                        });
                    },
                    pushMyCollect: function() {
                        if (this.isLogin) {
                            var e = m.default.trade_common_click_1314_2405({
                                block_content_id: this.data.favoriteProductCount,
                                block_content_title: "我的收藏"
                            });
                            Object(v.oneTrack)(e.eventName, e.data), t.navigateTo({
                                url: "/product/myCollect/myCollect"
                            });
                        } else Object(s.login)(!0);
                    },
                    pushMySub: function() {
                        if (this.isLogin) {
                            var e = m.default.trade_common_click_1314_2405({
                                block_content_id: this.data.subCount,
                                block_content_title: "我的订阅"
                            });
                            Object(v.oneTrack)(e.eventName, e.data), t.navigateTo({
                                url: "/product/mySubscription/mySubscription"
                            });
                        } else Object(s.login)(!0);
                    },
                    pushMessageVC: function() {
                        this.isLogin ? t.navigateTo({
                            url: "/notice/NoticeListPage"
                        }) : Object(s.login)(!0);
                    },
                    cleanOrderHistory: function() {
                        t.navigateTo({
                            url: "/clear/pages/orderHistory/orderHistory"
                        });
                    },
                    pushMyAddress: function() {
                        this.isLogin ? t.navigateTo({
                            url: "/account/ShippingAddressPage"
                        }) : Object(s.login)(!0);
                    },
                    pushMyCoupon: function() {
                        this.isLogin ? t.navigateTo({
                            url: "/account/MyCouponPage"
                        }) : Object(s.login)(!0);
                    },
                    pushCustomerService: function() {
                        if (Object(f.isCGB)()) t.makePhoneCall({
                            phoneNumber: "4008919888"
                        }); else {
                            var e, n = t.getStorageSync("X-Auth-Token") || u.a.get("xAuthToken"), o = this.data.userInfo, r = o.userId, i = o.icon, a = /https:\/\/(.+)/.exec(this.customerServiceCenterUrl)[1];
                            e = "pre" === this.SERVICE_ENV ? a.replace("poizon.com", "dewu.com") : a.replace("poizon.com", "dewu.net");
                            var c = "".concat("pro" === this.SERVICE_ENV ? "".concat(this.customerServiceCenterUrl.replace("m.poizon.com", "m.dewu.com"), "&im=") : "https://".concat(this.SERVICE_ENV, "-").concat(e, "&im=")), s = new Date().getTime(), l = "".concat(c) + encodeURIComponent("ts=".concat(s, "?channel=10002&sourceId=10006&fromPage=tabmine&fromTitle=客服中心&userId=").concat(r, "&avatar=").concat(i, "&token=").concat(n));
                            console.log("webUrl", l), Object(S.navigationToWeb)(l);
                        }
                    },
                    pushAccount: function(e) {
                        if (this.isLogin) {
                            var n = this.data.assets.cashBalance ? this.data.assets.cashBalance : 0;
                            t.navigateTo({
                                url: "/account/MyCashPage?cashBalance=" + n
                            });
                        } else Object(s.login)(!0);
                    },
                    goPrivacyProtocol: function() {
                        Object(S.navigationToWeb)(O.pageName2urlMap.privacy);
                    },
                    pushMyOrder: function() {
                        this.isLogin ? t.navigateTo({
                            url: "/order/buyer/orderList"
                        }) : Object(s.login)(!0);
                    },
                    goLogin: function() {
                        var t = this;
                        this.isLogin || Object(s.login)(!0).then(function() {
                            t.getData();
                        }).catch(function() {
                            console.log("登录失败");
                        });
                    },
                    logout: (r = C(a.a.mark(function e() {
                        var n;
                        return a.a.wrap(function(e) {
                            for (;;) switch (e.prev = e.next) {
                              case 0:
                                return e.next = 2, t.showModal({
                                    title: "提示",
                                    content: "确认退出登录？",
                                    cancelText: "取消",
                                    confirmText: "确定"
                                }).then(function(t) {
                                    return t[1];
                                });

                              case 2:
                                if (!(n = e.sent).confirm) {
                                    e.next = 20;
                                    break;
                                }
                                return this.$store.state.loginToken = "", this.$store.state.openId = "", this.notice = {
                                    buyerNum: "",
                                    officialNum: ""
                                }, this.data.myOrder = {
                                    unpaid: {
                                        count: 0
                                    },
                                    unShipped: {
                                        count: 0
                                    },
                                    toBeReceived: {
                                        count: 0
                                    }
                                }, e.next = 10, t.removeStorage({
                                    key: "loginToken"
                                });

                              case 10:
                                return e.next = 12, t.removeStorage({
                                    key: "X-Auth-Token"
                                });

                              case 12:
                                return e.next = 14, t.removeStorage({
                                    key: "userInfo"
                                });

                              case 14:
                                return e.next = 16, t.removeStorage({
                                    key: "MP-WEIXIN-UNION-ID"
                                });

                              case 16:
                                this.isLogin = !1, t.showToast({
                                    title: "退出登录成功",
                                    icon: "none"
                                }), e.next = 21;
                                break;

                              case 20:
                                n.cancel;

                              case 21:
                              case "end":
                                return e.stop();
                            }
                        }, e, this);
                    })), function() {
                        return r.apply(this, arguments);
                    }),
                    changeServiceEnv: function() {
                        var e = this.ENV_MAP_KEYS.next();
                        if (e.done) return this.ENV_MAP_KEYS = d.BASE_ENV_LIST.keys(), void this.changeServiceEnv();
                        e.value !== this.SERVICE_ENV ? (this.$store.commit("SET_SERVICE_ENV", e.value), 
                        t.showToast({
                            title: "当前环境是".concat(this.SERVICE_ENV)
                        })) : this.changeServiceEnv();
                    },
                    radioChange: function(e) {
                        var n = e.detail.value;
                        this.$store.commit("SET_SERVICE_ENV", n), t.showToast({
                            title: "当前环境是".concat(this.SERVICE_ENV)
                        }), t.setStorageSync("fan_pa_env", n), setTimeout(function() {
                            Object(T.riskInit)("wx"), null === _.initLoginAb || void 0 === _.initLoginAb || Object(_.initLoginAb)();
                        }, 500);
                    },
                    getCode: (o = C(a.a.mark(function e() {
                        var n, o, r, i;
                        return a.a.wrap(function(e) {
                            for (;;) switch (e.prev = e.next) {
                              case 0:
                                return e.next = 2, t.login();

                              case 2:
                                n = e.sent, o = k(n, 2), r = o[0], i = o[1], r && t.showToast({
                                    icon: "none",
                                    title: r
                                }), i.code || t.showToast({
                                    icon: "none",
                                    title: "未获取到微信凭证"
                                }), i && i.code && t.setClipboardData({
                                    data: i.code,
                                    success: function(e) {
                                        t.showToast({
                                            title: "复制成功"
                                        });
                                    }
                                });

                              case 9:
                              case "end":
                                return e.stop();
                            }
                        }, e);
                    })), function() {
                        return o.apply(this, arguments);
                    }),
                    goAccountLayoutPage: function() {
                        var t = d.BASE_ENV_LIST.get(this.$store.state.SERVICE_ENV).NEZHA_URL;
                        this.$store.commit("SET_WEB_URL", t), Object(S.navigationToWeb)(t, !0);
                    },
                    goSettingPrivacyPage: function() {
                        t.navigateTo({
                            url: "/account/PrivacySettingPage?userId=".concat(this.userId)
                        });
                    },
                    goFollowNumber: function() {
                        var t = m.default.trade_common_click_1314_2405({
                            block_content_id: "",
                            block_content_title: "关注服务号"
                        });
                        Object(v.oneTrack)(t.eventName, t.data), Object(S.navigationToWeb)(E.followServiceUrl);
                    },
                    goGovPage: function() {
                        Object(S.navigationToWeb)(E.govLinkUrl);
                    }
                }
            };
        }.call(this, n(1).default);
    },
    163: function(t, e, n) {
        n.r(e);
        var o = n(164), r = n.n(o);
        for (var i in o) [ "default" ].indexOf(i) < 0 && function(t) {
            n.d(e, t, function() {
                return o[t];
            });
        }(i);
        e.default = r.a;
    },
    164: function(t, e, n) {}
}, [ [ 153, "common/runtime", "common/vendor" ] ] ]);