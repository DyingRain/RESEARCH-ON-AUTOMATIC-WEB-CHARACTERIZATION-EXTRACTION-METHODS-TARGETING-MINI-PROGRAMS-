require("../../@babel/runtime/helpers/Arrayincludes"), (global.webpackJsonp = global.webpackJsonp || []).push([ [ "components/addressInput/index" ], {
    1852: function(e, t, n) {
        n.r(t);
        var s = n(1853), r = n(1855), i = (n(1858), n(126)), a = Object(i.default)(r.default, s.render, s.staticRenderFns, !1, null, "4b1f396e", null);
        a.options.__file = "src/components/addressInput/index.vue", t.default = a.exports;
    },
    1853: function(e, t, n) {
        n.r(t);
        var s = n(1854);
        n.d(t, "render", function() {
            return s.render;
        }), n.d(t, "staticRenderFns", function() {
            return s.staticRenderFns;
        });
    },
    1854: function(e, t, n) {
        n.r(t), n.d(t, "render", function() {
            return s;
        }), n.d(t, "staticRenderFns", function() {
            return r;
        });
        var s = function() {
            this.$createElement;
            var e = (this._self._c, this.getAreaTxt()), t = this.getAreaTxt();
            this.$mp.data = Object.assign({}, {
                $root: {
                    m0: e,
                    m1: t
                }
            });
        }, r = [];
        s._withStripped = !0;
    },
    1855: function(e, t, n) {
        n.r(t);
        var s = n(1856);
        t.default = s.default;
    },
    1856: function(e, t, n) {
        n.r(t), function(e) {
            var s = n(4), r = n.n(s), i = n(1857), a = n(19), o = n(1425), d = [ "parseStreetForFrontEnd" ];
            function c(e, t, n, s, r, i, a) {
                try {
                    var o = e[i](a), d = o.value;
                } catch (e) {
                    return void n(e);
                }
                o.done ? t(d) : Promise.resolve(d).then(s, r);
            }
            function u(e) {
                return function() {
                    var t = this, n = arguments;
                    return new Promise(function(s, r) {
                        var i = e.apply(t, n);
                        function a(e) {
                            c(i, s, r, a, o, "next", e);
                        }
                        function o(e) {
                            c(i, s, r, a, o, "throw", e);
                        }
                        a(void 0);
                    });
                };
            }
            function h(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var s = Object.getOwnPropertySymbols(e);
                    t && (s = s.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable;
                    })), n.push.apply(n, s);
                }
                return n;
            }
            function l(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? h(Object(n), !0).forEach(function(t) {
                        p(e, t, n[t]);
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : h(Object(n)).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
                    });
                }
                return e;
            }
            function p(e, t, n) {
                return t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n, e;
            }
            var f, m, b, g, v, O = Object(a.createNamespacedHelpers)("accountAddress").mapMutations, A = {
                "无": 0,
                "收货人": 1,
                "电话": 2
            };
            t.default = {
                props: [ "options" ],
                components: {
                    UniAddressSelector: function() {
                        return Promise.all([ n.e("common/vendor"), n.e("components/addressSelector/addressSelector") ]).then(n.bind(null, 3986));
                    }
                },
                data: function() {
                    return {
                        successCallBack: null,
                        parseStreetForFrontEnd: !1,
                        needParseStreet: !1,
                        suggestInfoData: {},
                        suggestAlertModal: !1,
                        showUniAddressSelector: !1,
                        areaInfoObj: {
                            provinceObj: {
                                code: "",
                                name: ""
                            },
                            cityObj: {
                                code: "",
                                name: ""
                            },
                            areaObj: {
                                code: "",
                                name: ""
                            },
                            streetObj: {
                                code: "",
                                name: ""
                            },
                            fullAreaTextInitial: ""
                        },
                        isChange: !0,
                        origin: {},
                        userAddressId: "",
                        name: "",
                        phone: "",
                        detailAddress: "",
                        isSaveButtonTap: !0,
                        arrowImage: "https://h5static.dewucdn.com/node-common/YXJyb3dfcmlnaHQ=.png",
                        api: {
                            addressInfo: "/api/v1/h5/user/fire/user/addressInfo",
                            editAddress: "/api/v1/h5/user/fire/user/editAddress"
                        },
                        isIdentifyOrder: !1,
                        phoneConfig: {},
                        showComplete: !1,
                        addressList: [],
                        addressModalEnum: A,
                        addressMode: A.无,
                        showFadeAni: !1
                    };
                },
                watch: {
                    options: {
                        deep: !0,
                        immediate: !0,
                        handler: function(e) {
                            e && this.pageInit(e);
                        }
                    }
                },
                computed: {
                    getAddressList: function() {
                        if (this.addressMode === A.电话) {
                            var e = {};
                            return this.addressList.reduce(function(t, n) {
                                return e[n.realMobile] || (e[n.realMobile] = t.push(n)), t;
                            }, []);
                        }
                        return this.addressList;
                    }
                },
                methods: l(l({}, O([ "SET_UPDATE_UPDATE_ADDRESS" ])), {}, {
                    handleInputClick: function(e, t) {
                        this.$emit("inputClick", {
                            filed: e,
                            data: t
                        });
                    },
                    pageInit: (v = u(r.a.mark(function e(t) {
                        var n, s, a = this;
                        return r.a.wrap(function(e) {
                            for (;;) switch (e.prev = e.next) {
                              case 0:
                                n = t.userAddressId, s = t.isIdentifyorder, this.isIdentifyOrder = 1 == s, 0 == n || null == n ? this.createPageInit(t) : this.editPageInit(t), 
                                Object(i.queryListAddress)().then(function(e) {
                                    var t, n;
                                    a.addressList = null == e || null === (t = e.data) || void 0 === t || null === (n = t.list) || void 0 === n ? void 0 : n.map(function(e) {
                                        return l(l({}, e), {}, {
                                            realMobile: Object(o.decrypt)(e.encryptMobile.slice(0, -2), "mobile0123456789")
                                        });
                                    });
                                });

                              case 4:
                              case "end":
                                return e.stop();
                            }
                        }, e, this);
                    })), function(e) {
                        return v.apply(this, arguments);
                    }),
                    createPageInit: (g = u(r.a.mark(function t(n) {
                        var s, a, d;
                        return r.a.wrap(function(t) {
                            for (;;) switch (t.prev = t.next) {
                              case 0:
                                return e.setNavigationBarTitle({
                                    title: "编辑新地址"
                                }), t.next = 3, Object(i.queryUserInfo)();

                              case 3:
                                if (t.t0 = t.sent, t.t0) {
                                    t.next = 6;
                                    break;
                                }
                                t.t0 = {};

                              case 6:
                                s = t.t0, a = s.code, d = s.data, 200 === a && d && d.encryptMobile && (this.phoneConfig = {
                                    real: Object(o.decrypt)(d.encryptMobile.slice(0, -2), "mobile0123456789"),
                                    mask: d.desensitizedMobile
                                }, this.phone = this.phoneConfig.mask);

                              case 10:
                              case "end":
                                return t.stop();
                            }
                        }, t, this);
                    })), function(e) {
                        return g.apply(this, arguments);
                    }),
                    editPageInit: (b = u(r.a.mark(function t(n) {
                        var s, i, a, d, c;
                        return r.a.wrap(function(t) {
                            for (;;) switch (t.prev = t.next) {
                              case 0:
                                return s = n.userAddressId, e.setNavigationBarTitle({
                                    title: "编辑地址"
                                }), this.setData({
                                    userAddressId: s
                                }), i = {
                                    userAddressId: s
                                }, t.next = 6, this.duserver.getRequest(this.api.addressInfo, i);

                              case 6:
                                (a = t.sent) && 200 == a.status && a.data && (d = [ a.data.province, a.data.city, a.data.district ], 
                                a.data.street && d.push(a.data.street), c = d.join(","), this.phoneConfig = {
                                    real: Object(o.decrypt)(a.data.encryptMobile.slice(0, -2), "mobile0123456789"),
                                    mask: a.data.mobile
                                }, this.phone = this.phoneConfig.mask, this.setData({
                                    origin: a.data,
                                    name: a.data.name,
                                    phone: this.phoneConfig.mask,
                                    detailAddress: a.data.newAddress || a.data.address,
                                    areaInfoObj: {
                                        provinceObj: {
                                            code: a.data.provinceCode,
                                            name: a.data.province
                                        },
                                        cityObj: {
                                            code: a.data.cityCode,
                                            name: a.data.city
                                        },
                                        areaObj: {
                                            code: a.data.districtCode,
                                            name: a.data.district
                                        },
                                        streetObj: {
                                            code: a.data.streetCode,
                                            name: a.data.street
                                        },
                                        fullAreaTextInitial: c
                                    }
                                }));

                              case 8:
                              case "end":
                                return t.stop();
                            }
                        }, t, this);
                    })), function(e) {
                        return b.apply(this, arguments);
                    }),
                    getAreaTxt: function() {
                        var e = this.areaInfoObj, t = e.provinceObj, n = void 0 === t ? {} : t, s = e.cityObj, r = void 0 === s ? {} : s, i = e.areaObj, a = void 0 === i ? {} : i, o = e.streetObj, d = void 0 === o ? {} : o;
                        if (n.name) return "".concat(n.name || "").concat(r.name || "").concat(a.name || "").concat(d.name || "");
                    },
                    handleCancel: function() {
                        this.showUniAddressSelector = !1;
                    },
                    showUniAddress: function() {
                        this.handleInputClick("所在区域", this.getAreaTxt() || "省、市、区、街道"), this.showUniAddressSelector = !0;
                    },
                    handleConfirm: function(e) {
                        var t = e.parseStreetForFrontEnd, n = function(e, t) {
                            if (null == e) return {};
                            var n, s, r = function(e, t) {
                                if (null == e) return {};
                                var n, s, r = {}, i = Object.keys(e);
                                for (s = 0; s < i.length; s++) n = i[s], t.indexOf(n) >= 0 || (r[n] = e[n]);
                                return r;
                            }(e, t);
                            if (Object.getOwnPropertySymbols) {
                                var i = Object.getOwnPropertySymbols(e);
                                for (s = 0; s < i.length; s++) n = i[s], t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
                            }
                            return r;
                        }(e, d);
                        this.parseStreetForFrontEnd = t, this.showUniAddressSelector = !1, this.areaInfoObj = n;
                    },
                    validate: function() {
                        var t, n, s = this.areaInfoObj, r = s.provinceObj, i = s.cityObj, a = s.areaObj;
                        return null == this.name || "" == this.name ? (e.showToast({
                            title: "收货人信息不能为空",
                            icon: "none"
                        }), !1) : /[/\\.]/.test(this.name) ? (e.showToast({
                            title: "收货人姓名中含有特殊字符",
                            icon: "none"
                        }), !1) : this.phone ? this.isChangePhone() && this.phone && !/^1[3456789]\d{9}$/.test(this.phone) ? (e.showToast({
                            title: "请输入正确的手机号",
                            icon: "none"
                        }), !1) : null == this.detailAddress || "" == this.detailAddress ? (e.showToast({
                            title: "详细地址不能为空",
                            icon: "none"
                        }), !1) : (null === (t = this.detailAddress) || void 0 === t ? void 0 : t.length) >= 61 || (null === (n = this.detailAddress) || void 0 === n ? void 0 : n.length) < 4 ? (e.showToast({
                            title: "详细地址长度需在4-61值之间",
                            icon: "none"
                        }), !1) : "" != r.name && "" != i.name && "" != a.name || (e.showToast({
                            title: "请选择所在区域",
                            icon: "none"
                        }), !1) : (e.showToast({
                            title: "请填写手机号",
                            icon: "none"
                        }), !1);
                    },
                    handleSuggestModal: function(e) {
                        this.parseStreetForFrontEnd = !1, this.suggestAlertModal = !1, e ? (this.needParseStreet = !0, 
                        this.streetObj = {
                            name: this.suggestInfoData.name,
                            code: this.suggestInfoData.code
                        }) : (this.needParseStreet = !1, this.streetObj = {}), this.saveAddressTap();
                    },
                    saveAddressTap: (m = u(r.a.mark(function t(n) {
                        var s, a, o, d, c, u, h, l, p, f, m = this;
                        return r.a.wrap(function(t) {
                            for (;;) switch (t.prev = t.next) {
                              case 0:
                                if (this.successCallBack || (this.successCallBack = n), s = {}, a = this.areaInfoObj, 
                                o = a.provinceObj, d = a.cityObj, c = a.areaObj, u = a.streetObj, this.validate()) {
                                    t.next = 5;
                                    break;
                                }
                                return t.abrupt("return");

                              case 5:
                                if (!this.parseStreetForFrontEnd) {
                                    t.next = 13;
                                    break;
                                }
                                return t.next = 8, Object(i.parseStreet)({
                                    province: o.name || "",
                                    city: d.name || "",
                                    district: c.name || "",
                                    address: this.detailAddress || ""
                                });

                              case 8:
                                if (200 !== (l = t.sent).code || null == l || null === (h = l.data) || void 0 === h || !h.suggestedStreetDTO) {
                                    t.next = 13;
                                    break;
                                }
                                return this.suggestInfoData = {
                                    name: l.data.suggestedStreetDTO.street,
                                    code: l.data.suggestedStreetDTO.streetCode
                                }, this.suggestAlertModal = !0, t.abrupt("return");

                              case 13:
                                if (p = {
                                    typeId: 0,
                                    name: this.name,
                                    mobile: this.isChangePhone() ? this.phone : this.phoneConfig.real,
                                    province: o.name || "",
                                    city: d.name || "",
                                    district: c.name || "",
                                    street: u.name || "",
                                    provinceCode: o.code || "",
                                    cityCode: d.code || "",
                                    districtCode: c.code || "",
                                    streetCode: u.code || "",
                                    address: this.detailAddress || "",
                                    needParseStreet: this.needParseStreet
                                }, this.userAddressId && (s.userAddressId = this.userAddressId, s.typeId = 1, s.isChangeMobile = this.isChangePhone() ? 1 : 0), 
                                p = Object.assign(p, s), 0 != this.isSaveButtonTap) {
                                    t.next = 18;
                                    break;
                                }
                                return t.abrupt("return");

                              case 18:
                                return this.isSaveButtonTap = !1, e.showLoading(), t.next = 22, this.duserver.postRequest(this.api.editAddress, p);

                              case 22:
                                f = t.sent, this.needParseStreet = !1, e.hideLoading(), f && 200 == f.status ? (e.showToast({
                                    title: "地址保存成功",
                                    icon: "none"
                                }), this.SET_UPDATE_UPDATE_ADDRESS({
                                    name: this.name,
                                    mobile: this.phone,
                                    province: o.name,
                                    city: d.name,
                                    district: c.name,
                                    address: this.detailAddress,
                                    addressId: this.userAddressId,
                                    changeMobile: this.isChangePhone()
                                }), setTimeout(function() {
                                    m.successCallBack ? m.successCallBack(f.data) : e.navigateBack({});
                                }, 1e3)) : (this.isSaveButtonTap = !0, e.showToast({
                                    icon: "none",
                                    title: f.msg
                                }));

                              case 26:
                              case "end":
                                return t.stop();
                            }
                        }, t, this);
                    })), function(e) {
                        return m.apply(this, arguments);
                    }),
                    deleteAddressTap: function() {
                        var t = this;
                        e.showModal({
                            title: "",
                            content: "删除地址？",
                            confirmColor: "#01c2c3",
                            success: function(e) {
                                e.confirm ? t.confirmDelete() : e.cancel;
                            }
                        });
                    },
                    confirmDelete: (f = u(r.a.mark(function t() {
                        var n, s;
                        return r.a.wrap(function(t) {
                            for (;;) switch (t.prev = t.next) {
                              case 0:
                                return n = {
                                    userAddressId: this.userAddressId,
                                    typeId: 2
                                }, e.showLoading(), t.next = 4, this.duserver.postRequest(this.api.editAddress, n);

                              case 4:
                                s = t.sent, e.hideLoading(), s && 200 == s.status ? (e.showToast({
                                    title: "删除成功",
                                    icon: "none"
                                }), setTimeout(function() {
                                    e.navigateBack({});
                                }, 1e3)) : e.showToast({
                                    icon: "none",
                                    title: s.msg
                                });

                              case 7:
                              case "end":
                                return t.stop();
                            }
                        }, t, this);
                    })), function() {
                        return f.apply(this, arguments);
                    }),
                    goAddressList: function() {
                        e.navigateTo({
                            url: "/account/ShippingAddressPage?supportSelect=1&noSupportTip=description"
                        });
                    },
                    handlePhone: function() {
                        this.handleInputClick("联系电话", ""), this.isIdentifyOrder && (this.phone = "");
                    },
                    toggleShow: function() {
                        this.showComplete = !this.showComplete, this.phone = this.showComplete ? this.phoneConfig.real : this.phoneConfig.mask;
                    },
                    isChangePhone: function() {
                        return ![ this.phoneConfig.mask, this.phoneConfig.real ].includes(this.phone);
                    },
                    focus: function(e) {
                        this.addressList.length > 0 && (this.addressMode = A[e]);
                    },
                    closeModal: function() {
                        var e = this;
                        this.showFadeAni = !0, setTimeout(function() {
                            e.showFadeAni = !1, e.addressMode = A.无;
                        }, 300);
                    },
                    handleChoosePhone: function(e) {
                        this.addressMode === A.收货人 && (this.name = e.name), this.phone = e.realMobile, this.closeModal();
                    }
                })
            };
        }.call(this, n(1).default);
    },
    1858: function(e, t, n) {
        n.r(t);
        var s = n(1859), r = n.n(s);
        for (var i in s) [ "default" ].indexOf(i) < 0 && function(e) {
            n.d(t, e, function() {
                return s[e];
            });
        }(i);
        t.default = r.a;
    },
    1859: function(e, t, n) {}
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "components/addressInput/index-create-component", {
    "components/addressInput/index-create-component": function(e, t, n) {
        n("1").createComponent(n(1852));
    }
}, [ [ "components/addressInput/index-create-component" ] ] ]);