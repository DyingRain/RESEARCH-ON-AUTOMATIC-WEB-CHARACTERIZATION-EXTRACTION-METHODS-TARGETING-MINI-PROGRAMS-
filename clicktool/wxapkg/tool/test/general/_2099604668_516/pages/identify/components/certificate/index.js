(global.webpackJsonp = global.webpackJsonp || []).push([ [ "pages/identify/components/certificate/index" ], {
    4557: function(t, e, i) {
        i.r(e);
        var n = i(4558), a = i(4560), s = (i(4563), i(126)), o = Object(s.default)(a.default, n.render, n.staticRenderFns, !1, null, "4aaa75f0", null);
        o.options.__file = "src/pages/identify/components/certificate/index.vue", e.default = o.exports;
    },
    4558: function(t, e, i) {
        i.r(e);
        var n = i(4559);
        i.d(e, "render", function() {
            return n.render;
        }), i.d(e, "staticRenderFns", function() {
            return n.staticRenderFns;
        });
    },
    4559: function(t, e, i) {
        i.r(e), i.d(e, "render", function() {
            return n;
        }), i.d(e, "staticRenderFns", function() {
            return a;
        });
        var n = function() {
            this.$createElement;
            this._self._c;
        }, a = [];
        n._withStripped = !0;
    },
    4560: function(t, e, i) {
        i.r(e);
        var n = i(4561);
        e.default = n.default;
    },
    4561: function(t, e, i) {
        i.r(e), function(t) {
            var n = i(240), a = i(222), s = (i(223), i(4562)), o = i(1592);
            e.default = {
                name: "identify-certificate",
                props: {
                    message: {
                        type: Array,
                        default: function() {
                            return [ "问题：", "备注：", "待鉴别" ];
                        }
                    },
                    shareData: {
                        type: Object,
                        default: function() {}
                    }
                },
                data: function() {
                    return {
                        wxCode: "",
                        isNewUrl: !1,
                        painterParams: {},
                        painterShow: !1,
                        isReady: !1,
                        aiInfo: {},
                        expert: {},
                        detail: {},
                        isAI: !1,
                        result: {
                            title: this.message[2]
                        },
                        dataSource: {},
                        okUrl: "",
                        template: "",
                        customStyle: "position: relative; left: 0; top:0"
                    };
                },
                mounted: function() {
                    var t = this;
                    console.log("onShow"), this.isNewUrl = !1, new n.default().getCurrentPage().options;
                    var e = {
                        identifyId: Number(this.shareData.identifyId)
                    };
                    this.getData(e), console.log("getData", this.shareData), Object(a.getMiniCode)({
                        scene: "shareKey=".concat(e.identifyId, "&owner=false&encryptId=").concat(this.shareData.encryptId),
                        page: "identify/pages/detail/index",
                        width: 80
                    }).then(function(e) {
                        t.wxCode = e, console.log("qrCode", e);
                    });
                },
                watch: {
                    wxCode: function(t) {
                        t && this.painterShow && this.addPainter();
                    }
                },
                methods: {
                    getData: function(e) {
                        var i = this;
                        this.duserver.getRequest("/identify-server/v1/identify/detail", e).then(function(e) {
                            console.log("api res", e), 200 == e.status ? (i.dataSource = e.data, i.analysis(e.data.detail.question, e.data.detail.status, !!i.isEffective(e.data.detail.question)), 
                            i.initIdentifyResult(e.data), i.addPainter(), i.isReady = !0) : t.showToast({
                                icon: "none",
                                title: e.msg
                            });
                        });
                    },
                    onImgOk: function(t) {
                        this.okUrl = t.detail.path, this.okUrl && this.$emit("getImgUrl", {
                            isNewUrl: this.isNewUrl,
                            url: this.okUrl
                        }), console.log("ok", t);
                    },
                    onImgErr: function(t) {
                        console.log("error", t);
                    },
                    analysis: function(t, e, i) {
                        var n = o.identifyResultsMap[0], a = {
                            8: o.jkIdentifyResultsMap,
                            10: o.petIdentifyResultsMap
                        }, s = a[e] ? a[e] : o.identifyResultsMap;
                        i ? (s[t] && (n = s[t]), this.result = n) : this.result = n;
                    },
                    addPainter: function() {
                        var e, i = t.getStorageSync("serveTitle"), n = this.dataSource.aiInfo && this.dataSource.aiInfo.question === this.detail.question, a = {
                            result: {
                                title: this.result.title,
                                icon: "",
                                textimg: this.identificationConclusionUrl,
                                resultOfCauseDesc: n ? this.dataSource.aiResultOfCauseDesc : this.dataSource.resultOfCauseDesc
                            },
                            expert: {
                                icon: this.expert.userInfo.icon,
                                userName: this.expert.userInfo.userName
                            },
                            aiInfo: {
                                isAI: this.isAI,
                                userName: this.isAI ? this.aiInfo.userInfo.userName : "",
                                icon: this.isAI ? this.aiInfo.userInfo.icon : ""
                            },
                            tipsMessage: [ "鉴别结果由资深鉴别师和AI鉴别师双重鉴别得出", "鉴别结果由资深鉴别师根据用户信息得出", "鉴别贴编号" ],
                            detail: {
                                identifyId: this.detail.identifyId,
                                title: this.detail.title,
                                userName: this.detail.userInfo.userName,
                                formatTime: this.detail.formatTime,
                                images: this.detail.images.filter(function(t, e) {
                                    return e < 3;
                                }),
                                contentForApp: this.detail.contentForApp
                            },
                            wxCode: this.wxCode,
                            title: i,
                            reportNoticeForApp: null === (e = this.dataSource) || void 0 === e ? void 0 : e.reportNoticeForApp
                        };
                        this.painterParams = a, this.isNewUrl = !1, this.template = new s.default().palette(a), 
                        this.painterShow = !0, this.$emit("getDetailInfo", {
                            question: this.detail.question,
                            icon: this.identificationConclusionStampUrl
                        });
                    },
                    getNewImage: function() {
                        this.painterParams.result.icon = this.identificationConclusionStampUrl, this.painterParams.tipsMessage = [ "鉴别结果由资深鉴别师和AI鉴别师双重鉴别得出", "鉴别结果由资深鉴别师根据用户信息得出", "鉴别贴编号 " ], 
                        this.isNewUrl = !0, this.template = new s.default().palette(this.painterParams);
                    },
                    initIdentifyResult: function(t) {
                        var e = t.aiInfo, i = t.detail, n = t.expert;
                        this.detail = i, this.aiInfo = e, this.expert = n, this.isAI = e && e.question === i.question, 
                        this.identificationConclusionUrl = null != i && i.identificationConclusionUrl ? null == i ? void 0 : i.identificationConclusionUrl : this.result.textimg || "", 
                        this.identificationConclusionStampUrl = null != i && i.identificationConclusionStampUrl ? null == i ? void 0 : i.identificationConclusionStampUrl : this.result.icon || "";
                    },
                    isEffective: function(t) {
                        return !(t === o.IdentifyStatus.HANG);
                    }
                }
            };
        }.call(this, i(1).default);
    },
    4563: function(t, e, i) {
        i.r(e);
        var n = i(4564), a = i.n(n);
        for (var s in n) [ "default" ].indexOf(s) < 0 && function(t) {
            i.d(e, t, function() {
                return n[t];
            });
        }(s);
        e.default = a.a;
    },
    4564: function(t, e, i) {}
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "pages/identify/components/certificate/index-create-component", {
    "pages/identify/components/certificate/index-create-component": function(t, e, i) {
        i("1").createComponent(i(4557));
    }
}, [ [ "pages/identify/components/certificate/index-create-component" ] ] ]);