(global.webpackJsonp = global.webpackJsonp || []).push([ [ "common/main" ], {
    0: function(t, e, n) {
        n.r(e), function(t, e) {
            var o = n(4), i = n.n(o), r = (n(7), n(8), n(2)), u = n(12), c = n(127), s = n(16), a = n(18), l = n(128), d = n(106), f = n(129), p = (n(94), 
            n(141), n(136));
            function h(t, e) {
                var n = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var o = Object.getOwnPropertySymbols(t);
                    e && (o = o.filter(function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable;
                    })), n.push.apply(n, o);
                }
                return n;
            }
            function g(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? h(Object(n), !0).forEach(function(e) {
                        m(t, e, n[e]);
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : h(Object(n)).forEach(function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
                    });
                }
                return t;
            }
            function m(t, e, n) {
                return e in t ? Object.defineProperty(t, e, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = n, t;
            }
            function v(t, e, n, o, i, r, u) {
                try {
                    var c = t[r](u), s = c.value;
                } catch (t) {
                    return void n(t);
                }
                c.done ? e(s) : Promise.resolve(s).then(o, i);
            }
            function b(t) {
                return function() {
                    var e = this, n = arguments;
                    return new Promise(function(o, i) {
                        var r = t.apply(e, n);
                        function u(t) {
                            v(r, o, i, u, c, "next", t);
                        }
                        function c(t) {
                            v(r, o, i, u, c, "throw", t);
                        }
                        u(void 0);
                    });
                };
            }
            function O() {
                return (O = b(i.a.mark(function n() {
                    var o;
                    return i.a.wrap(function(n) {
                        for (;;) switch (n.prev = n.next) {
                          case 0:
                            Object(l.checkUpdate)(), Object({
                                NODE_ENV: "development",
                                VUE_APP_PLATFORM: "mp-weixin",
                                BASE_URL: "/"
                            }).VUE_APP_DEV_FLAG, Object(d.sdkWithPrivacyAgreement)(), r.default.prototype.$store = a.default, 
                            r.default.config.productionTip = !1, r.default.filter("webp", c.default.handleImage), 
                            r.default.prototype.setData = function(t) {
                                var e, n, o = this, i = [];
                                Object.keys(t).forEach(function(r) {
                                    i = r.split("."), e = t[r], n = o.$data, i.forEach(function(t, r) {
                                        r + 1 === i.length ? o.$set(n, t, e) : n[t] || o.$set(n, t, {}), n = n[t];
                                    });
                                });
                            }, u.default.mpType = "app", r.default.prototype.$store = a.default, r.default.prototype.duserver = s, 
                            r.default.prototype.filter = c.default, t.setStorageSync("ytv", "pro"), r.default.mixin({
                                methods: {
                                    identifyTrackLog: function(t) {
                                        getApp().sensors.track(t.event, t.data);
                                    }
                                }
                            }), o = new r.default(g({
                                store: a.default
                            }, u.default)), e(o).$mount();

                          case 15:
                          case "end":
                            return n.stop();
                        }
                    }, n);
                }))).apply(this, arguments);
            }
            r.default.component("zan-badge", function() {
                return n.e("components/badge/badge/index").then(n.bind(null, 1659));
            }), r.default.component("uni-popup", function() {
                return n.e("components/uni-popup/uni-popup").then(n.bind(null, 1666));
            }), Object(p.inRunningProduction)() || r.default.component("devPanel", function() {
                return n.e("components/devPanel/index").then(n.bind(null, 1673));
            }), r.default.component("ProtocolPopUp", function() {
                return Promise.all([ n.e("common/vendor"), n.e("pages/login/components/protocol-popup") ]).then(n.bind(null, 1652));
            }), r.default.use(f.default), function() {
                O.apply(this, arguments);
            }();
        }.call(this, n(1).default, n(1).createApp);
    },
    12: function(t, e, n) {
        n.r(e);
        var o = n(13), i = (n(124), n(126)), r = Object(i.default)(o.default, void 0, void 0, !1, null, null, null);
        r.options.__file = "src/App.vue", e.default = r.exports;
    },
    124: function(t, e, n) {
        n.r(e);
        var o = n(125), i = n.n(o);
        for (var r in o) [ "default" ].indexOf(r) < 0 && function(t) {
            n.d(e, t, function() {
                return o[t];
            });
        }(r);
        e.default = i.a;
    },
    125: function(t, e, n) {},
    13: function(t, e, n) {
        n.r(e);
        var o = n(14);
        e.default = o.default;
    },
    130: function(t, e, n) {
        n.r(e);
        var o = n(131), i = n(133), r = (n(139), n(126)), u = Object(r.default)(i.default, o.render, o.staticRenderFns, !1, null, "4fc5ef0b", null);
        u.options.__file = "src/components/login/loginDialog.vue", e.default = u.exports;
    },
    131: function(t, e, n) {
        n.r(e);
        var o = n(132);
        n.d(e, "render", function() {
            return o.render;
        }), n.d(e, "staticRenderFns", function() {
            return o.staticRenderFns;
        });
    },
    132: function(t, e, n) {
        n.r(e), n.d(e, "render", function() {
            return o;
        }), n.d(e, "staticRenderFns", function() {
            return i;
        });
        var o = function() {
            var t = this;
            t.$createElement;
            t._self._c, t._isMounted || (t.e0 = function(t) {
                t.stopPropagation(), t.preventDefault();
            }, t.e1 = function(e) {
                t.mobile = "";
            }, t.e2 = function(e) {
                t.code = "";
            });
        }, i = [];
        o._withStripped = !0;
    },
    133: function(t, e, n) {
        n.r(e);
        var o = n(134);
        e.default = o.default;
    },
    134: function(t, e, n) {
        n.r(e), function(t) {
            var o = n(135), i = n(94), r = n.n(i), u = n(117), c = n(136), s = n(137), a = n(138), l = n(89), d = n(115), f = n(116);
            function p(t, e) {
                var n = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var o = Object.getOwnPropertySymbols(t);
                    e && (o = o.filter(function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable;
                    })), n.push.apply(n, o);
                }
                return n;
            }
            function h(t, e, n) {
                return e in t ? Object.defineProperty(t, e, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = n, t;
            }
            e.default = {
                name: "LoginDialog",
                props: {
                    shareId: {
                        type: String,
                        required: !1
                    },
                    uuid: {
                        type: String,
                        required: !1
                    },
                    uuidtoken: {
                        type: String,
                        required: !1
                    },
                    visible: {
                        type: Boolean,
                        default: !1
                    },
                    onclose: {
                        type: Function,
                        default: function() {}
                    },
                    whyLoginOption: {
                        type: Object,
                        default: {}
                    }
                },
                data: function() {
                    var e = this;
                    return {
                        config: {
                            startText: "获取验证码",
                            endText: "获取验证码",
                            totalTime: 60,
                            tickTime: 1,
                            activeClass: "isRun",
                            computeText: function(t) {
                                return "重发".concat(t);
                            },
                            canTodo: function() {
                                if (!e.computedPhone) return t.showToast({
                                    title: "请输入手机号",
                                    icon: "none"
                                }), !1;
                                var n = /^1[13456789]\d{9}$/.test(e.computedPhone);
                                return console.log("判断是否可以发送验证码", n), n || t.showToast({
                                    title: "手机号格式不正确",
                                    icon: "none"
                                }), n;
                            },
                            todo: function() {
                                console.log("发送验证码");
                            },
                            endCallback: function(t, e) {
                                console.log("发送完成后的回调", t, e);
                            },
                            click: function(t) {
                                console.log("当前验证码状态是:".concat(t ? "发送中" : "可发送", "状态"));
                            },
                            canUse: !0,
                            noCanClass: "no-can"
                        },
                        time: "",
                        isRun: !1,
                        isFirst: !0,
                        firstText: "",
                        totalTime: 60,
                        tickTime: 1,
                        mobile: "",
                        code: "",
                        isPhoneFocus: !1,
                        isCodeFocus: !1,
                        judgement: !1,
                        iosVersion: 0,
                        loginErrorText: "",
                        H5ProtocolPopShow: !1,
                        isCGB: Object(c.isCGB)(),
                        spuId: ""
                    };
                },
                components: {
                    protocolPop: function() {
                        return n.e("components/login/protocolPop").then(n.bind(null, 1680));
                    }
                },
                computed: {
                    computedPhone: function() {
                        var t;
                        return null === (t = this.mobile) || void 0 === t ? void 0 : t.replace(/\s+/g, "");
                    },
                    text: function() {
                        var t = this.config;
                        return this.isFirst ? t.startText : this.isRun ? t.computeText(this.time) : t.endText;
                    },
                    activeClass: function() {
                        var t = this.config;
                        return (t.canUse ? "" : t.noCanClass + " ") + (this.isRun ? t.activeClass : "");
                    },
                    authCode: function() {
                        return this.$store.state.CGBInfo.authCode || "";
                    },
                    H5ProtocolChecked: function() {
                        return this.$store.state.H5ProtocolChecked;
                    }
                },
                created: function() {},
                mounted: function() {
                    this.spuId = t.getStorageSync("loginCheckSpuId");
                },
                methods: {
                    handlePhoneInput: function(t) {
                        var e = t.detail.value.replace(/\s+/g, "");
                        (e = e.replace(/\D/g, "")).length > 3 && e.length <= 7 ? e = e.replace(/^(\d{3})(\d{0,4})/, "$1 $2") : e.length > 7 && (e = e.replace(/^(\d{3})(\d{4})(\d{0,4})/, "$1 $2 $3")), 
                        this.mobile = e;
                    },
                    runtime: function() {
                        var t = this, e = this.config;
                        if (e.click(this.isRun), e.canUse && !this.isRun && e.canTodo()) {
                            var n = {
                                typeId: 0,
                                mobile: this.computedPhone,
                                countryCode: "86"
                            };
                            this.duserver.postRequest("/api/v1/h5/user_core/mapi/users/getCaptcha", n, {
                                json: !0
                            }).then(function(t) {
                                t.body && 200 === t.body.status && (t = t.body, console.log(t.data));
                            }).catch(function(t) {
                                console.log(t);
                            }), this.isFirst = !1, this.isRun = !0, this.time = e.totalTime, e.todo(e), this.timer = setInterval(function() {
                                t.time <= e.tickTime ? t.stop(0) : t.time -= e.tickTime;
                            }, 1e3 * e.tickTime);
                        }
                    },
                    stop: function(t) {
                        var e = this.config;
                        this.isRun && e.endCallback(t, e), this.isRun = !1, clearInterval(this.timer);
                    },
                    doLogin: function() {
                        var e = this;
                        if (0 === this.code.length) return this.loginErrorText = "请输入验证码", !1;
                        if (!this.computedPhone) return this.loginErrorText = "请输入手机号", !1;
                        if (!this.H5ProtocolChecked) return this.H5ProtocolPopShow = !0, !1;
                        var n = function(t) {
                            for (var e = 1; e < arguments.length; e++) {
                                var n = null != arguments[e] ? arguments[e] : {};
                                e % 2 ? p(Object(n), !0).forEach(function(e) {
                                    h(t, e, n[e]);
                                }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : p(Object(n)).forEach(function(e) {
                                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
                                });
                            }
                            return t;
                        }({
                            userName: this.computedPhone,
                            code: this.code,
                            noToast: !0,
                            type: this.checkLoginType(),
                            bizType: this.getBizType(),
                            authCode: this.authCode
                        }, this.whyLoginOption);
                        this.shareId && (n.shareId = this.shareId), this.uuid && (n.uuid = this.uuid), this.uuidtoken && (n.uuidtoken = this.uuidtoken), 
                        this.$store.state.token && (n.token = this.$store.state.token), this.duserver.postRequest("/api/v1/h5/user_center/mapi/users/login", n, {
                            json: !0
                        }).then(function(n) {
                            if (200 === n.status) {
                                var i, c;
                                r.a.set("duToken", n.data.duToken), r.a.set("xAuthToken", n.data.xAuthToken), r.a.set("X-Auth-Token", null === (i = n.data) || void 0 === i ? void 0 : i.xAuthToken), 
                                t.setStorageSync("userInfo", n.data.userInfo), e.loginErrorText = "", e.hideLoginBox(), 
                                e.$emit("loginCallback", n.data), o.default.$emit("loginSuccessCallBack", n.data);
                                var a = n.data.userInfo || {}, d = a.userId;
                                Object(s.setDuOtelSdkConfig)({
                                    userId: d,
                                    userName: null === (c = a.data) || void 0 === c ? void 0 : c.userName
                                });
                                try {
                                    window.dw.bindUser(d);
                                } catch (t) {
                                    Object(l.reportOtel)("dwFunction", {
                                        message: String(t)
                                    }), Object(l.pushMessageToFeiShuBot)(t);
                                }
                                Object(u.bindBehaviorTracking)(), e.commonLoginClickData({
                                    userId: d,
                                    title: "登录",
                                    isSuccess: 1
                                });
                            } else e.loginErrorText = n.msg || "请稍后再试", e.commonLoginClickData({
                                userId: "",
                                title: "登录",
                                isSuccess: 0
                            });
                        });
                    },
                    hideLoginBox: function() {
                        this.onclose();
                    },
                    phoneOff: function() {
                        this.isPhoneFocus = !1, this.isCodeFocus || (this.judgement = !1);
                    },
                    phoneOn: function() {
                        this.isPhoneFocus = !0, 11 === this.iosVersion && (this.judgement = !0);
                    },
                    codeOff: function() {
                        this.isCodeFocus = !1, this.isPhoneFocus || (this.judgement = !1);
                    },
                    codeOn: function() {
                        this.isCodeFocus = !0, 11 == this.iosVersion && (this.judgement = !0);
                    },
                    checkLoginType: function() {
                        var t = "code";
                        return Object(c.isCGB)() && this.authCode && (t = "CGB"), t;
                    },
                    getBizType: function() {
                        var t = "";
                        return Object(c.isCGB)() && (t = "CGB"), t;
                    },
                    goProtocolPage: a.goProtocolPage,
                    toggleCheckProtocol: function() {
                        this.$store.commit("SET_H5_PROTOCOL_CHECKED", !this.H5ProtocolChecked);
                    },
                    commonLoginExposureData: function(t) {
                        var e = t.title, n = f.default.common_singin_login_exposure_1189_2182({
                            title: e,
                            url: Object(f.getCurrentPageUrl)(),
                            spuId: this.spuId
                        });
                        Object(d.oneTrack)(n.eventName, n.data);
                    },
                    commonLoginClickData: function(t) {
                        var e = t.title, n = t.userId, o = t.isSuccess, i = f.default.common_singin_login_click_1189_2182({
                            userId: n,
                            title: e,
                            isSuccess: o,
                            url: Object(f.getCurrentPageUrl)(),
                            spuId: this.spuId
                        });
                        Object(d.oneTrack)(i.eventName, i.data);
                    }
                }
            };
        }.call(this, n(1).default);
    },
    139: function(t, e, n) {
        n.r(e);
        var o = n(140), i = n.n(o);
        for (var r in o) [ "default" ].indexOf(r) < 0 && function(t) {
            n.d(e, t, function() {
                return o[t];
            });
        }(r);
        e.default = i.a;
    },
    14: function(t, e, n) {
        n.r(e);
        var o = n(15);
        n(93), console.log("App.vue__process.env", Object({
            NODE_ENV: "development",
            VUE_APP_PLATFORM: "mp-weixin",
            BASE_URL: "/"
        }).VUE_APP_DEV_FLAG), e.default = {
            data: function() {
                return {};
            },
            mounted: function() {},
            onLaunch: o.AppOnLaunch,
            onShow: o.AppOnShow,
            onPageNotFound: [ function(t) {} ]
        };
    },
    140: function(t, e, n) {}
}, [ [ 0, "common/runtime", "common/vendor" ] ] ]);