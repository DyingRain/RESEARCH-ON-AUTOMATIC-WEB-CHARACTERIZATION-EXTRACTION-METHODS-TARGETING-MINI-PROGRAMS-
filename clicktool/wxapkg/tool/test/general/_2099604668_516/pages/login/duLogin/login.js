(global.webpackJsonp = global.webpackJsonp || []).push([ [ "pages/login/duLogin/login" ], {
    175: function(e, t, o) {
        o.r(t), function(e) {
            o(7), o(8), o(2), e(o(176).default);
        }.call(this, o(1).createPage);
    },
    176: function(e, t, o) {
        o.r(t);
        var n = o(177), i = o(179), s = (o(181), o(126)), c = Object(s.default)(i.default, n.render, n.staticRenderFns, !1, null, null, null);
        c.options.__file = "src/pages/login/duLogin/login.vue", t.default = c.exports;
    },
    177: function(e, t, o) {
        o.r(t);
        var n = o(178);
        o.d(t, "render", function() {
            return n.render;
        }), o.d(t, "staticRenderFns", function() {
            return n.staticRenderFns;
        });
    },
    178: function(e, t, o) {
        o.r(t), o.d(t, "render", function() {
            return n;
        }), o.d(t, "staticRenderFns", function() {
            return i;
        });
        var n = function() {
            this.$createElement;
            this._self._c;
        }, i = [];
        n._withStripped = !0;
    },
    179: function(e, t, o) {
        o.r(t);
        var n = o(180);
        t.default = n.default;
    },
    180: function(e, t, o) {
        o.r(t), function(e) {
            var n = o(15), i = o(117), s = o(115), c = o(116);
            t.default = {
                components: {
                    ProtocolAgreed: function() {
                        return Promise.all([ o.e("common/vendor"), o.e("pages/login/components/protocol-agreed-component") ]).then(o.bind(null, 1773));
                    },
                    ProtocolPopUp: function() {
                        return Promise.all([ o.e("common/vendor"), o.e("pages/login/components/protocol-popup") ]).then(o.bind(null, 1652));
                    }
                },
                data: function() {
                    return {
                        isIos: !0,
                        token: "",
                        hidden: !1,
                        mobile: "",
                        code: "",
                        mobileInAjax: !1,
                        codeInAjax: !1,
                        text: "获取验证码",
                        time: 60,
                        userInfo: {},
                        placeholderStyle: " color: #e4e4ef;font-family: PingFangSC-Medium;font-size: 50rpx;transform: scale(0.52);transform-origin: center left;height: 60rpx;line-height: 60rpx;",
                        loginErrorText: "",
                        protocolAgreed: !1,
                        showProtocolPopUp: !1,
                        spuId: ""
                    };
                },
                computed: {
                    isActive: function() {
                        return 11 === this.mobile.length;
                    }
                },
                onLoad: function(t) {
                    this.token = t.token || "", this.protocolAgreed = !!t.protocal;
                    var o = this;
                    e.getUserInfo({
                        success: function(e) {
                            console.log("getUserInfo调用成功", e.userInfo), o.setData({
                                userInfo: e.userInfo
                            });
                        },
                        fail: function(e) {
                            console.log("getUserInfo调用失败");
                        }
                    }), this.spuId = e.getStorageSync("loginCheckSpuId"), this.commonLoginExposureData({
                        title: "登录"
                    });
                },
                methods: {
                    toggleCheck: function(e) {
                        this.protocolAgreed = e;
                    },
                    clearText: function() {
                        this.mobile = "";
                    },
                    cancel: function() {
                        this.setData({
                            hidden: !0
                        });
                    },
                    handerMobile: function(e) {
                        this.mobile = e.detail.value;
                    },
                    handerCode: function(e) {
                        this.setData({
                            code: e.detail.value
                        });
                    },
                    setCodeSuccessCallback: function() {
                        this.setData({
                            codeInAjax: !0
                        });
                    },
                    checkCodeIsActive: function() {
                        return this.codeInAjax;
                    },
                    checkPhoneUnavailable: function() {
                        return ("" === this.mobile || void 0 === this.mobile) && (this.loginErrorText = "请输入电话号码", 
                        !0);
                    },
                    checkCodeUnavailable: function() {
                        return ("" === this.code || void 0 === this.code) && (this.loginErrorText = "请输入验证码", 
                        !0);
                    },
                    runtime: function() {
                        var e = this;
                        this.timer = setInterval(function() {
                            e.setData({
                                codeInAjax: !0
                            }), e.time <= 0 ? e.stop() : (e.setData({
                                time: e.time - 1
                            }), e.setText(e.time));
                        }, 1e3);
                    },
                    stop: function() {
                        this.codeInAjax = !1, this.setData({
                            text: "获取验证码",
                            codeInAjax: !1,
                            time: 60
                        }), this.timer && clearInterval(this.timer);
                    },
                    setText: function(e) {
                        this.setData({
                            text: "".concat(e, "s重发")
                        });
                    },
                    getCode: function() {
                        if (!this.codeInAjax && !this.checkCodeIsActive() && !this.checkPhoneUnavailable()) {
                            var t = {
                                typeId: 0,
                                mobile: this.mobile,
                                countryCode: "86"
                            };
                            this.codeInAjax = !0, this.setData({
                                codeInAjax: !1
                            }), this.runtime(), this.duserver.postRequest("/api/v1/h5/user/fire/user/getCaptcha", t, {
                                emulateJSON: !0
                            }).then(function(t) {
                                t.msg = "ok" === t.msg ? "验证短信已发出，请注意查收" : t.msg, e.showToast({
                                    title: t.msg,
                                    icon: "none"
                                });
                            });
                        }
                    },
                    onClickWithoutProtocolAgreed: function() {
                        this.protocolAgreed || (this.showProtocolPopUp = !0);
                    },
                    doLogin: function() {
                        var t = this;
                        if (this.protocolAgreed) {
                            if (!this.mobileInAjax && !this.checkPhoneUnavailable() && !this.checkCodeUnavailable()) {
                                var o = {};
                                o = {
                                    type: Object({
                                        NODE_ENV: "development",
                                        VUE_APP_PLATFORM: "mp-weixin",
                                        BASE_URL: "/"
                                    }).VUE_APP_IDENTIFY_WEIXIN_MP ? "idwxapp" : "wxapp",
                                    isMobileCode: 1,
                                    mobile: this.mobile,
                                    verifyCode: this.code,
                                    token: this.token,
                                    noToast: !0,
                                    deviceId: e.getStorageSync("deviceIdByUuid")
                                }, "1" === e.getStorageSync("abByUuid") && (delete o.token, o.newFlow = !0), this.mobileInAjax = !0, 
                                this.duserver.postRequest("mapi/users/appMobileLogin", o, {
                                    php: !0
                                }).then(function(o) {
                                    if (t.mobileInAjax = !1, 200 === o.status) {
                                        t.loginErrorText = "", e.showToast({
                                            title: o.msg,
                                            icon: "none"
                                        }), Object(n.loginSuccessCallBack)(o.data, !0, 2);
                                        var s = o.data.userInfo || {}, c = s.userId;
                                        t.RiskSDK && t.RiskSDK.bindUser("wx", c), Object(i.bindBehaviorTracking)(), t.commonSinginLogin({
                                            userId: s.userId,
                                            title: "手机号登录/注册",
                                            isSuccess: 1
                                        });
                                    } else 757 === o.code ? (t.token = "", t.loginErrorText = "请稍后再试") : t.loginErrorText = o.msg || "请稍后再试", 
                                    t.commonSinginLogin({
                                        userId: "",
                                        title: "手机号登录/注册",
                                        isSuccess: 0
                                    });
                                }).catch(function(e) {
                                    console.log("login fail:" + e), t.commonSinginLogin({
                                        userId: "",
                                        title: "手机号登录/注册",
                                        isSuccess: 0
                                    });
                                }).catch(function(e) {
                                    console.log(e), t.commonSinginLogin({
                                        userId: "",
                                        title: "手机号登录/注册",
                                        isSuccess: 0
                                    });
                                });
                            }
                        } else this.showProtocolPopUp = !0;
                    },
                    commonSinginLogin: function(e) {
                        var t = e.title, o = e.userId, n = e.isSuccess, i = c.default.common_singin_login_click_1189_2182({
                            userId: o,
                            title: t,
                            isSuccess: n,
                            url: Object(c.getCurrentPageUrl)(),
                            spuId: this.spuId
                        });
                        Object(s.oneTrack)(i.eventName, i.data);
                    },
                    closeProtocolPopup: function() {
                        this.showProtocolPopUp = !1;
                    },
                    handleAgreed: function() {
                        this.protocolAgreed = !0, this.showProtocolPopUp = !1;
                    },
                    commonLoginExposureData: function(e) {
                        var t = e.title, o = c.default.common_singin_login_exposure_1189_2182({
                            title: t,
                            url: Object(c.getCurrentPageUrl)(),
                            spuId: this.spuId
                        });
                        Object(s.oneTrack)(o.eventName, o.data);
                    }
                }
            };
        }.call(this, o(1).default);
    },
    181: function(e, t, o) {
        o.r(t);
        var n = o(182), i = o.n(n);
        for (var s in n) [ "default" ].indexOf(s) < 0 && function(e) {
            o.d(t, e, function() {
                return n[e];
            });
        }(s);
        t.default = i.a;
    },
    182: function(e, t, o) {}
}, [ [ 175, "common/runtime", "common/vendor" ] ] ]);