require("../../@babel/runtime/helpers/Arrayincludes"), (global.webpackJsonp = global.webpackJsonp || []).push([ [ "components/addressSelector/addressSelector" ], {
    3986: function(e, t, r) {
        r.r(t);
        var a = r(3987), n = r(3989), i = (r(3992), r(126)), s = Object(i.default)(n.default, a.render, a.staticRenderFns, !1, null, "0ab7a477", null);
        s.options.__file = "src/components/addressSelector/addressSelector.vue", t.default = s.exports;
    },
    3987: function(e, t, r) {
        r.r(t);
        var a = r(3988);
        r.d(t, "render", function() {
            return a.render;
        }), r.d(t, "staticRenderFns", function() {
            return a.staticRenderFns;
        });
    },
    3988: function(e, t, r) {
        r.r(t), r.d(t, "render", function() {
            return a;
        }), r.d(t, "staticRenderFns", function() {
            return n;
        });
        var a = function() {
            this.$createElement;
            this._self._c;
        }, n = [];
        a._withStripped = !0;
    },
    3989: function(e, t, r) {
        r.r(t);
        var a = r(3990);
        t.default = a.default;
    },
    3990: function(e, t, r) {
        r.r(t), function(e) {
            var a = r(3991);
            function n(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var a = Object.getOwnPropertySymbols(e);
                    t && (a = a.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable;
                    })), r.push.apply(r, a);
                }
                return r;
            }
            function i(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? n(Object(r), !0).forEach(function(t) {
                        s(e, t, r[t]);
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : n(Object(r)).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
                    });
                }
                return e;
            }
            function s(e, t, r) {
                return t in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r, e;
            }
            function o(e) {
                return function(e) {
                    if (Array.isArray(e)) return l(e);
                }(e) || d(e) || c(e) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
                }();
            }
            function c(e, t) {
                if (e) {
                    if ("string" == typeof e) return l(e, t);
                    var r = Object.prototype.toString.call(e).slice(8, -1);
                    return "Object" === r && e.constructor && (r = e.constructor.name), "Map" === r || "Set" === r ? Array.from(e) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? l(e, t) : void 0;
                }
            }
            function d(e) {
                if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e);
            }
            function l(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var r = 0, a = new Array(t); r < t; r++) a[r] = e[r];
                return a;
            }
            t.default = {
                name: "UniAddressSelector",
                props: {
                    areaInfoSelected: {
                        type: Object,
                        default: {
                            fullAreaTextInitial: "",
                            provinceObj: {},
                            cityObj: {},
                            areaObj: {},
                            streetObj: {}
                        }
                    },
                    selectAreaLevelLimit: {
                        type: Number,
                        default: 4
                    }
                },
                data: function() {
                    return {
                        emptyStreet: null,
                        showIndex: 0,
                        provinceObj: {},
                        cityObj: {},
                        areaObj: {},
                        streetObj: {},
                        provinceData: "",
                        cityData: [],
                        areaData: [],
                        streetsData: []
                    };
                },
                computed: {
                    streetsDataByComputed: function() {
                        return Array.isArray(this.streetsData) && this.streetsData.length ? this.emptyStreet ? [ this.emptyStreet ].concat(o(this.streetsData)) : this.streetsData : [];
                    }
                },
                mounted: function() {
                    var e = this;
                    if (this.areaInfoSelected.fullAreaTextInitial) {
                        var t = this.areaInfoSelected, r = t.fullAreaTextInitial, a = t.provinceObj, n = void 0 === a ? {} : a, i = t.cityObj, s = void 0 === i ? {} : i, o = t.areaObj, c = void 0 === o ? {} : o, d = t.streetObj, l = void 0 === d ? {} : d, h = r.split(",");
                        this.provinceObj = n, this.cityObj = s, this.areaObj = c, this.streetObj = l;
                        var u = {
                            1: {
                                info: "",
                                type: "init",
                                params: {}
                            },
                            2: {
                                info: "provinceObj",
                                type: "pro",
                                params: {}
                            },
                            3: {
                                info: "cityObj",
                                type: "city",
                                params: {
                                    province: n.name,
                                    city: s.name
                                },
                                extendParams: [ c.name ]
                            },
                            4: {
                                info: "areaObj",
                                type: "area",
                                params: {
                                    province: n.name,
                                    city: s.name,
                                    area: c.name
                                },
                                extendParams: [ l.name ]
                            }
                        }[h.length], p = u.info, b = u.type, f = u.params, y = u.extendParams, O = this[p] || {};
                        u && this.getInitCode(f, y, function() {
                            e.handleGetMap(O, b);
                        });
                    } else this.handleGetMap({}, "init");
                },
                onShow: function() {},
                methods: {
                    handleCancel: function() {
                        this.$emit("cancel");
                    },
                    handleSubmit: function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, t = e.parseStreet, r = this.provinceObj, a = this.cityObj, n = this.areaObj, i = this.streetObj, s = [ r, a, n, i ], o = [];
                        s.forEach(function(e) {
                            e.name && o.push(e.name);
                        });
                        var c = {
                            fullAreaTextInitial: o.toString(),
                            fullAreaText: o.toString().replace(/,/g, ""),
                            provinceCode: r.code || "",
                            cityCode: a.code || "",
                            code: n.code || "",
                            streetCode: i.code || "",
                            provinceObj: r,
                            cityObj: a,
                            areaObj: n,
                            streetObj: i
                        }, d = Object.assign({
                            parseStreetForFrontEnd: t
                        }, c);
                        this.$emit("confirm", d);
                    },
                    anewSelect: function(e) {
                        switch (e) {
                          case 0:
                            this.showIndex = 0, this.cityObj = {}, this.areaObj = {}, this.streetObj = {}, this.cityData = [], 
                            this.areaData = [], this.streetsData = [], this.handleGetMap({}, "init");
                            break;

                          case 1:
                            this.showIndex = 1, this.streetObj = {}, this.areaData = [], this.streetsData = [], 
                            this.areaObj = {}, this.handleGetMap(this.provinceObj, "pro");
                            break;

                          case 2:
                            this.showIndex = 2, this.streetsData = [], this.streetObj = {}, this.handleGetMap(this.areaObj, "area");
                        }
                    },
                    handleGetMap: function(t, r) {
                        var n = this;
                        "init" !== r && e.showLoading({
                            title: "加载中",
                            mask: !0
                        });
                        var i = {
                            init: "",
                            pro: [ "province", "provinceCode" ],
                            city: [ "city", "cityCode" ],
                            area: [ "district", "districtCode" ]
                        }, s = {};
                        i[r] && (s[i[r][0]] = t.name || "", s[i[r][1]] = t.code || ""), Object(a.queryAddressLibrary)({
                            addressFilter: s
                        }).then(function(t) {
                            if (e.hideLoading(), 200 === t.code) {
                                var a = {
                                    init: "provinceData",
                                    pro: "cityData",
                                    city: "areaData",
                                    area: "streetsData"
                                };
                                n[a[r]] = t.data.addressItemOutDTOList || [], n.emptyStreet = t.data.emptyStreet, 
                                n.showIndex = [ "init", "pro", "city", "area" ].indexOf(r), n[a[r]].length <= 0 && n.handleSubmit();
                            } else e.hideLoading(), e.showToast({
                                icon: "none",
                                title: t.msg,
                                position: "center",
                                duration: 2e3
                            });
                        }).catch(function(t) {
                            console.error(t), e.showToast({
                                icon: "none",
                                title: t.message
                            });
                        }).finally(function() {
                            e.hideLoading();
                        });
                    },
                    resetAddress: function() {
                        this.provinceObj = {}, this.cityObj = {}, this.areaObj = {}, this.streetObj = {}, 
                        this.anewSelect(0);
                    },
                    getInitCode: function(t, r, n) {
                        var s = this, c = t.province, d = t.city, l = t.area;
                        Object(a.queryAddressLibrary)({
                            addressFilter: t
                        }).then(function(e) {
                            if (200 === e.code && e.data && e.data.addressItemOutDTOList) {
                                var t = [], a = l ? [ c, d, l ].concat(o(r)) : [ c, d ].concat(o(r));
                                s.getNodesByPath(e.data.addressItemOutDTOList, a, t), t && t.length && a.length === t.length ? (s.provinceObj.code = t[0].code, 
                                s.cityObj.code = t[1].code, s.areaObj.code = t[2].code, t[3] && (s.streetObj = i(i({}, s.streetObj), {}, {
                                    code: t[2].code
                                })), n && n()) : s.resetAddress();
                            } else s.resetAddress();
                        }).catch(function(t) {
                            console.log(t), e.showToast({
                                icon: "none",
                                title: t.message
                            });
                        }).finally(function() {
                            e.hideLoading();
                        });
                    },
                    getNodesByPath: function(e, t, r) {
                        var a = this;
                        e && e.forEach(function(e) {
                            if (t.includes(e.name)) {
                                r.push(e);
                                var n = function(e) {
                                    return function(e) {
                                        if (Array.isArray(e)) return e;
                                    }(e) || d(e) || c(e) || function() {
                                        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
                                    }();
                                }(t).slice(1);
                                a.getNodesByPath(e.child, n, r);
                            }
                        });
                    },
                    handleSelectAddress: function(e, t) {
                        var r;
                        switch (e) {
                          case 0:
                            this.handleGetMap(t, "pro"), this.provinceObj = t, this.showIndex = 1, this.cityData = [], 
                            this.areaData = [], this.streetsData = [];
                            break;

                          case 1:
                            this.handleGetMap(t, "city"), this.cityObj = t, this.showIndex = 2, this.areaData = [], 
                            this.streetsData = [];
                            break;

                          case 2:
                            3 === this.selectAreaLevelLimit ? (this.areaObj = t, this.handleSubmit()) : (this.handleGetMap(t, "area"), 
                            this.areaObj = t, this.showIndex = 3, this.streetsData = []);
                            break;

                          case 3:
                            this.streetObj = t, t.code === (null === (r = this.emptyStreet) || void 0 === r ? void 0 : r.code) ? (this.streetObj = {}, 
                            this.handleSubmit({
                                parseStreet: !0
                            })) : this.handleSubmit({
                                parseStreet: !1
                            });
                        }
                    }
                }
            };
        }.call(this, r(1).default);
    },
    3992: function(e, t, r) {
        r.r(t);
        var a = r(3993), n = r.n(a);
        for (var i in a) [ "default" ].indexOf(i) < 0 && function(e) {
            r.d(t, e, function() {
                return a[e];
            });
        }(i);
        t.default = n.a;
    },
    3993: function(e, t, r) {}
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "components/addressSelector/addressSelector-create-component", {
    "components/addressSelector/addressSelector-create-component": function(e, t, r) {
        r("1").createComponent(r(3986));
    }
}, [ [ "components/addressSelector/addressSelector-create-component" ] ] ]);