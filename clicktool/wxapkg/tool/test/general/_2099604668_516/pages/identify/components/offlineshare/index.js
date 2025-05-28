(global.webpackJsonp = global.webpackJsonp || []).push([ [ "pages/identify/components/offlineshare/index" ], {
    3895: function(e, t, n) {
        n.r(t);
        var i = n(3896), o = n(3898), s = (n(3900), n(126)), a = Object(s.default)(o.default, i.render, i.staticRenderFns, !1, null, "7e62ddb9", null);
        a.options.__file = "src/pages/identify/components/offlineshare/index.vue", t.default = a.exports;
    },
    3896: function(e, t, n) {
        n.r(t);
        var i = n(3897);
        n.d(t, "render", function() {
            return i.render;
        }), n.d(t, "staticRenderFns", function() {
            return i.staticRenderFns;
        });
    },
    3897: function(e, t, n) {
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
    3898: function(e, t, n) {
        n.r(t);
        var i = n(3899);
        t.default = i.default;
    },
    3899: function(e, t, n) {
        n.r(t), function(e) {
            var i, o = n(1592);
            t.default = {
                name: "share",
                components: {
                    Certificate: function() {
                        return Promise.all([ n.e("common/vendor"), n.e("pages/identify/components/offlinecertificate/index") ]).then(n.bind(null, 4565));
                    }
                },
                props: {
                    identifyData: {
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
                        }), console.log("isNewUrl", s), o.IdentifyStatus.Success === Number(this.question) && (this.showGif = !0, 
                        this.hideGif())) : (this.ewmImg = s, this.okUrl = s, this.isReady = !0, this.gifStart = setTimeout(function() {
                            n.showGif = !0, n.hideGif(), clearTimeout(n.gifStart);
                        }, 800), e.hideLoading(), this.painterClearId = setTimeout(function() {
                            n.$refs.painter.getNewImage(), console.log("getNewImage", a, s);
                        }, 50))), console.log("getImgUrl33", a, s);
                    },
                    getDetailInfo: function(e) {
                        e.question, e.icon;
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
    3900: function(e, t, n) {
        n.r(t);
        var i = n(3901), o = n.n(i);
        for (var s in i) [ "default" ].indexOf(s) < 0 && function(e) {
            n.d(t, e, function() {
                return i[e];
            });
        }(s);
        t.default = o.a;
    },
    3901: function(e, t, n) {}
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "pages/identify/components/offlineshare/index-create-component", {
    "pages/identify/components/offlineshare/index-create-component": function(e, t, n) {
        n("1").createComponent(n(3895));
    }
}, [ [ "pages/identify/components/offlineshare/index-create-component" ] ] ]);