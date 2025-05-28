(global.webpackJsonp = global.webpackJsonp || []).push([ [ "pages/login/login/login" ], {
    165: function(e, t, n) {
        n.r(t), function(e) {
            n(7), n(8), n(2), e(n(166).default);
        }.call(this, n(1).createPage);
    },
    166: function(e, t, n) {
        n.r(t);
        var o = n(167), i = n(169), r = (n(173), n(126)), c = Object(r.default)(i.default, o.render, o.staticRenderFns, !1, null, null, null);
        c.options.__file = "src/pages/login/login/login.vue", t.default = c.exports;
    },
    167: function(e, t, n) {
        n.r(t);
        var o = n(168);
        n.d(t, "render", function() {
            return o.render;
        }), n.d(t, "staticRenderFns", function() {
            return o.staticRenderFns;
        });
    },
    168: function(e, t, n) {
        n.r(t), n.d(t, "render", function() {
            return o;
        }), n.d(t, "staticRenderFns", function() {
            return i;
        });
        var o = function() {
            this.$createElement;
            this._self._c;
        }, i = [];
        o._withStripped = !0;
    },
    169: function(e, t, n) {
        n.r(t);
        var o = n(170);
        t.default = o.default;
    },
    170: function(e, t, n) {
        n.r(t), function(e) {
            var o, i, r, c, a = n(4), s = n.n(a), u = n(45), d = n(15), l = n(115), p = n(116), f = n(83), h = n(171), g = n(172), m = n.n(g);
            function v(e, t, n, o, i, r, c) {
                try {
                    var a = e[r](c), s = a.value;
                } catch (e) {
                    return void n(e);
                }
                a.done ? t(s) : Promise.resolve(s).then(o, i);
            }
            function b(e) {
                return function() {
                    var t = this, n = arguments;
                    return new Promise(function(o, i) {
                        var r = e.apply(t, n);
                        function c(e) {
                            v(r, o, i, c, a, "next", e);
                        }
                        function a(e) {
                            v(r, o, i, c, a, "throw", e);
                        }
                        c(void 0);
                    });
                };
            }
            t.default = {
                components: {
                    customNavigation: function() {
                        return n.e("components/customNavigation/customNavigation").then(n.bind(null, 1766));
                    },
                    ProtocolAgreed: function() {
                        return Promise.all([ n.e("common/vendor"), n.e("pages/login/components/protocol-agreed-component") ]).then(n.bind(null, 1773));
                    },
                    FastImage: function() {
                        return Promise.all([ n.e("common/vendor"), n.e("components/product/fast-image/index") ]).then(n.bind(null, 1780));
                    }
                },
                data: function() {
                    return {
                        initFetching: !0,
                        token: "",
                        promiseId: "",
                        protocolAgreed: !1,
                        isFromGrowthGift: "",
                        showProtocolPopUp: !1,
                        spuId: "",
                        isIdentifyMP: Object({
                            NODE_ENV: "development",
                            VUE_APP_PLATFORM: "mp-weixin",
                            BASE_URL: "/"
                        }).VUE_APP_IDENTIFY_WEIXIN_MP,
                        bindInfo: {
                            bind: !1,
                            openId: ""
                        },
                        getCodeTime: null,
                        getCodeTimestamp: null
                    };
                },
                onShow: function() {
                    this.initBindInfo();
                },
                onLoad: function(t) {
                    e.setStorageSync("loginRefererUrlInWebView", t.loginRefererUrlInWebView), this.token = t.token || "", 
                    this.isFromGrowthGift = t.isFromGrowthGift || "", this.spuId = e.getStorageSync("loginCheckSpuId");
                },
                mounted: function() {
                    this.commonLoginExposureData({
                        title: "一键登录"
                    }), this.commonLoginExposureData({
                        title: "手机号登录/注册"
                    });
                },
                methods: {
                    toggleCheck: function(e) {
                        this.protocolAgreed = e;
                    },
                    onBindUserLogin: m()(b(s.a.mark(function t() {
                        var n, o;
                        return s.a.wrap(function(t) {
                            for (;;) switch (t.prev = t.next) {
                              case 0:
                                return t.next = 2, this.getWechatCode();

                              case 2:
                                n = t.sent, o = {
                                    type: "wxapp",
                                    code: n,
                                    deviceId: e.getStorageSync("deviceIdByUuid"),
                                    newFlow: !0,
                                    hitGray: !0
                                }, Object(d.bindUserLogin)(o, "appMobileLogin");

                              case 5:
                              case "end":
                                return t.stop();
                            }
                        }, t, this);
                    })), 500, {
                        leading: !0,
                        trailing: !1
                    }),
                    initBindInfo: (c = b(s.a.mark(function t() {
                        var n, o, i;
                        return s.a.wrap(function(t) {
                            for (;;) switch (t.prev = t.next) {
                              case 0:
                                return this.initFetching = !0, t.prev = 1, t.next = 4, this.getWechatCode();

                              case 4:
                                return n = t.sent, t.next = 7, Object(h.queryBindInfo)({
                                    deviceId: e.getStorageSync("deviceIdByUuid"),
                                    code: n,
                                    type: "wxapp"
                                });

                              case 7:
                                (o = t.sent).code && 200 === o.code && (i = o.data, this.bindInfo = {
                                    bind: !0 === (null == i ? void 0 : i.bind),
                                    openId: null == i ? void 0 : i.openId
                                }), this.initFetching = !1, t.next = 16;
                                break;

                              case 12:
                                t.prev = 12, t.t0 = t.catch(1), console.error(t.t0), this.initFetching = !1;

                              case 16:
                              case "end":
                                return t.stop();
                            }
                        }, t, this, [ [ 1, 12 ] ]);
                    })), function() {
                        return c.apply(this, arguments);
                    }),
                    getWechatCode: (r = b(s.a.mark(function t() {
                        var n, o, i;
                        return s.a.wrap(function(t) {
                            for (;;) switch (t.prev = t.next) {
                              case 0:
                                if (!this.codeFromWxLogin || !this.getCodeTimestamp) {
                                    t.next = 4;
                                    break;
                                }
                                if (!(new Date().getTime() < Number(this.getCodeTimestamp) + 24e4)) {
                                    t.next = 4;
                                    break;
                                }
                                return t.abrupt("return", this.codeFromWxLogin);

                              case 4:
                                return t.prev = 4, t.next = 7, e.login();

                              case 7:
                                n = t.sent, o = n[0] ? n[0].errMsg : "", i = n[1] ? n[1].code : "", t.next = 15;
                                break;

                              case 12:
                                t.prev = 12, t.t0 = t.catch(4), console.error(t.t0);

                              case 15:
                                if (!o) {
                                    t.next = 20;
                                    break;
                                }
                                return e.showToast({
                                    title: o || "未知错误，请稍后再试",
                                    icon: "none"
                                }), t.abrupt("return", Promise.reject());

                              case 20:
                                if (!i) {
                                    t.next = 24;
                                    break;
                                }
                                return this.getCodeTimestamp = new Date().getTime(), this.codeFromWxLogin = i, t.abrupt("return", i);

                              case 24:
                              case "end":
                                return t.stop();
                            }
                        }, t, this, [ [ 4, 12 ] ]);
                    })), function() {
                        return r.apply(this, arguments);
                    }),
                    onClickWithoutProtocolAgreed: (i = b(s.a.mark(function e() {
                        return s.a.wrap(function(e) {
                            for (;;) switch (e.prev = e.next) {
                              case 0:
                                this.protocolAgreed || (this.showProtocolPopUp = !0);

                              case 1:
                              case "end":
                                return e.stop();
                            }
                        }, e, this);
                    })), function() {
                        return i.apply(this, arguments);
                    }),
                    getPhoneNumber: (o = b(s.a.mark(function t(n) {
                        var o, i, r, c, a, u;
                        return s.a.wrap(function(t) {
                            for (;;) switch (t.prev = t.next) {
                              case 0:
                                if (this.protocolAgreed) {
                                    t.next = 3;
                                    break;
                                }
                                return this.showProtocolPopUp = !0, t.abrupt("return");

                              case 3:
                                return t.next = 5, this.getWechatCode();

                              case 5:
                                if (o = t.sent, i = n.detail, r = i.iv, c = i.encryptedData, r && c) {
                                    t.next = 9;
                                    break;
                                }
                                return t.abrupt("return");

                              case 9:
                                a = Object({
                                    NODE_ENV: "development",
                                    VUE_APP_PLATFORM: "mp-weixin",
                                    BASE_URL: "/"
                                }).VUE_APP_IDENTIFY_WEIXIN_MP ? "idwxapp" : "wxapp", u = {
                                    type: a,
                                    code: o,
                                    weixinData: JSON.stringify({
                                        encryptedData: c,
                                        iv: r
                                    }),
                                    deviceId: e.getStorageSync("deviceIdByUuid")
                                }, Object(d.bindUserLogin)(u, "bindMobile");

                              case 12:
                              case "end":
                                return t.stop();
                            }
                        }, t, this);
                    })), function(e) {
                        return o.apply(this, arguments);
                    }),
                    goDuLogin: function() {
                        var t = this.protocolAgreed;
                        if (t) {
                            var n = "/pages/login/duLogin/login?token=" + this.token;
                            t && (n += "&protocal=1"), e.navigateTo({
                                url: n
                            });
                        } else this.showProtocolPopUp = !0;
                    },
                    commonLoginExposureData: function(e) {
                        var t = e.title, n = p.default.common_singin_login_exposure_1189_2182({
                            title: t,
                            url: Object(p.getCurrentPageUrl)(),
                            spuId: this.spuId
                        });
                        Object(l.oneTrack)(n.eventName, n.data);
                    },
                    closeProtocolPopup: function() {
                        this.showProtocolPopUp = !1;
                    },
                    handleAgreed: function() {
                        this.protocolAgreed = !0, this.showProtocolPopUp = !1, this.isIdentifyMP && (Object(u.setPrivacyAgreement)(!0), 
                        Object(f.riskInit)("wx"));
                    },
                    notLogin: function() {
                        if (!this.isIdentifyMP) return this.isFromGrowthGift ? e.navigateBack({}) : void e.switchTab({
                            url: "/pages/index/index"
                        });
                        e.switchTab({
                            url: "/pages/identify/index"
                        });
                    },
                    notLoginIcon: function() {
                        e.showModal({
                            title: "",
                            content: "如果您想购买商品，请在登录之后操作",
                            cancelText: "确定",
                            showCancel: !1
                        });
                    }
                }
            };
        }.call(this, n(1).default);
    },
    173: function(e, t, n) {
        n.r(t);
        var o = n(174), i = n.n(o);
        for (var r in o) [ "default" ].indexOf(r) < 0 && function(e) {
            n.d(t, e, function() {
                return o[e];
            });
        }(r);
        t.default = i.a;
    },
    174: function(e, t, n) {}
}, [ [ 165, "common/runtime", "common/vendor" ] ] ]);