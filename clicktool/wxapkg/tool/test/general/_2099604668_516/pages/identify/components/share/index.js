require("../../../../@babel/runtime/helpers/Arrayincludes"), (global.webpackJsonp = global.webpackJsonp || []).push([ [ "pages/identify/components/share/index" ], {
    3888: function(e, t, n) {
        n.r(t);
        var i = n(3889), o = n(3891), s = (n(3893), n(126)), a = Object(s.default)(o.default, i.render, i.staticRenderFns, !1, null, "7cdf20b8", null);
        a.options.__file = "src/pages/identify/components/share/index.vue", t.default = a.exports;
    },
    3889: function(e, t, n) {
        n.r(t);
        var i = n(3890);
        n.d(t, "render", function() {
            return i.render;
        }), n.d(t, "staticRenderFns", function() {
            return i.staticRenderFns;
        });
    },
    3890: function(e, t, n) {
        n.r(t), n.d(t, "render", function() {
            return i;
        }), n.d(t, "staticRenderFns", function() {
            return o;
        });
        var i = function() {
            this.$createElement;
            this._self._c;
        }, o = [];
        i._withStripped = !0;
    },
    3891: function(e, t, n) {
        n.r(t);
        var i = n(3892);
        t.default = i.default;
    },
    3892: function(e, t, n) {
        n.r(t), function(e) {
            var i, o = n(1592);
            t.default = {
                name: "share",
                components: {
                    Certificate: function() {
                        return Promise.all([ n.e("common/vendor"), n.e("pages/identify/components/certificate/index") ]).then(n.bind(null, 4557));
                    }
                },
                props: {
                    shareData: {
                        type: Object,
                        default: function() {}
                    }
                },
                data: function() {
                    return {
                        okUrl: "",
                        iconUrl: "",
                        question: 0,
                        isReady: !1,
                        ewmImg: "",
                        openSettingBtnHidden: !0,
                        showGif: !1,
                        painterClearId: null,
                        gifClearId: null,
                        gifStart: null
                    };
                },
                mounted: function(t) {
                    e.showLoading({
                        title: "正在生成中"
                    }), console.log(t, "options"), i = this;
                },
                unmounted: function() {
                    clearTimeout(this.painterClearId), clearTimeout(this.gifClearId);
                },
                methods: {
                    wechatCb: function() {
                        this.$emit("btnCb", {
                            type: "wechat"
                        });
                    },
                    getImgUrl: function(t) {
                        var n = this, s = t.url, a = t.isNewUrl;
                        s && (a ? (i.ewmImg = s, this.$emit("getImgUrl", {
                            url: s
                        }), o.IdentifyStatus.Success === Number(this.question) && (this.showGif = !0, this.hideGif())) : (this.okUrl = s, 
                        this.isReady = !0, this.gifStart = setTimeout(function() {
                            n.showGif = !0, n.hideGif(), clearTimeout(n.gifStart);
                        }, 800), e.hideLoading(), this.painterClearId = setTimeout(function() {
                            n.$refs.painter.getNewImage();
                        }, 50)));
                    },
                    getDetailInfo: function(e) {
                        var t = e.question, n = e.icon;
                        o.IdentifyStatus.Success === Number(t) && (this.question = Number(t)), [ o.IdentifyStatus.Success, o.IdentifyStatus.FAIL, o.IdentifyStatus.UNABLE ].includes(t) && (this.iconUrl = n);
                    },
                    handleClose: function() {
                        this.$emit("handleClose", {});
                    },
                    handleSetting: function(e) {
                        e.detail.authSetting["scope.writePhotosAlbum"] ? i.openSettingBtnHidden = !0 : i.openSettingBtnHidden = !1;
                    },
                    saveImage: function(t) {
                        this.$emit("btnCb", {
                            type: "save",
                            imgUrl: i.ewmImg
                        }), e.getSetting({
                            success: function(t) {
                                t.authSetting["scope.writePhotosAlbum"] ? i.saveImgToLocal() : e.authorize({
                                    scope: "scope.writePhotosAlbum",
                                    success: function() {
                                        i.saveImgToLocal();
                                    },
                                    fail: function() {
                                        i.openSettingBtnHidden = !1;
                                    }
                                });
                            }
                        });
                    },
                    saveImgToLocal: function() {
                        i.ewmImg || e.showToast({
                            title: "重新试下",
                            icon: "none"
                        }), e.saveImageToPhotosAlbum({
                            filePath: i.ewmImg,
                            success: function() {
                                e.showToast({
                                    title: "成功保存至相册",
                                    icon: "none"
                                });
                            },
                            fail: function() {
                                e.showToast({
                                    title: "保存失败",
                                    icon: "none"
                                });
                            }
                        });
                    },
                    hideGif: function() {
                        var e = this;
                        this.gifClearId = setTimeout(function() {
                            e.showGif = !1;
                        }, 1e3);
                    }
                }
            };
        }.call(this, n(1).default);
    },
    3893: function(e, t, n) {
        n.r(t);
        var i = n(3894), o = n.n(i);
        for (var s in i) [ "default" ].indexOf(s) < 0 && function(e) {
            n.d(t, e, function() {
                return i[e];
            });
        }(s);
        t.default = o.a;
    },
    3894: function(e, t, n) {}
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "pages/identify/components/share/index-create-component", {
    "pages/identify/components/share/index-create-component": function(e, t, n) {
        n("1").createComponent(n(3888));
    }
}, [ [ "pages/identify/components/share/index-create-component" ] ] ]);