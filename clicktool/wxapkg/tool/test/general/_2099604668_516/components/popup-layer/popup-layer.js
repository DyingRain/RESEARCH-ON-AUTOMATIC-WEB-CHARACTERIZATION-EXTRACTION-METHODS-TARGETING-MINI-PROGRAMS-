(global.webpackJsonp = global.webpackJsonp || []).push([ [ "components/popup-layer/popup-layer" ], {
    2526: function(t, n, e) {
        e.r(n);
        var o = e(2527), r = e(2529), a = (e(2531), e(126)), i = Object(a.default)(r.default, o.render, o.staticRenderFns, !1, null, null, null);
        i.options.__file = "src/components/popup-layer/popup-layer.vue", n.default = i.exports;
    },
    2527: function(t, n, e) {
        e.r(n);
        var o = e(2528);
        e.d(n, "render", function() {
            return o.render;
        }), e.d(n, "staticRenderFns", function() {
            return o.staticRenderFns;
        });
    },
    2528: function(t, n, e) {
        e.r(n), e.d(n, "render", function() {
            return o;
        }), e.d(n, "staticRenderFns", function() {
            return r;
        });
        var o = function() {
            this.$createElement;
            this._self._c;
        }, r = [];
        o._withStripped = !0;
    },
    2529: function(t, n, e) {
        e.r(n);
        var o = e(2530);
        n.default = o.default;
    },
    2530: function(t, n, e) {
        e.r(n), function(t) {
            var o = e(17);
            function r(t, n) {
                return function(t) {
                    if (Array.isArray(t)) return t;
                }(t) || function(t, n) {
                    var e = null == t ? null : "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
                    if (null != e) {
                        var o, r, a = [], i = !0, u = !1;
                        try {
                            for (e = e.call(t); !(i = (o = e.next()).done) && (a.push(o.value), !n || a.length !== n); i = !0) ;
                        } catch (t) {
                            u = !0, r = t;
                        } finally {
                            try {
                                i || null == e.return || e.return();
                            } finally {
                                if (u) throw r;
                            }
                        }
                        return a;
                    }
                }(t, n) || function(t, n) {
                    if (t) {
                        if ("string" == typeof t) return a(t, n);
                        var e = Object.prototype.toString.call(t).slice(8, -1);
                        return "Object" === e && t.constructor && (e = t.constructor.name), "Map" === e || "Set" === e ? Array.from(t) : "Arguments" === e || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e) ? a(t, n) : void 0;
                    }
                }(t, n) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
                }();
            }
            function a(t, n) {
                (null == n || n > t.length) && (n = t.length);
                for (var e = 0, o = new Array(n); e < n; e++) o[e] = t[e];
                return o;
            }
            n.default = {
                name: "PopupLayer",
                props: {
                    borderRadius: {
                        type: Boolean,
                        default: !1
                    },
                    showPop: {
                        type: Boolean,
                        default: !1
                    },
                    direction: {
                        type: String,
                        default: "top"
                    },
                    autoClose: {
                        type: Boolean,
                        default: !0
                    }
                },
                data: function() {
                    return {
                        iftoggle: !1,
                        popShow: !1,
                        navTop: 0,
                        navHeight: 0,
                        customNav: !1
                    };
                },
                computed: {
                    translateValue: function() {
                        return this.showPop ? 0 : -100;
                    },
                    _translate: function() {
                        return {
                            top: "transform:translateY(".concat(-this.translateValue, "%)"),
                            bottom: "transform:translateY(".concat(this.translateValue, "%)"),
                            left: "transform:translateX(".concat(-this.translateValue, "%)"),
                            right: "transform:translateX(".concat(this.translateValue, "%)")
                        }[this.direction];
                    },
                    _location: function() {
                        return {
                            top: "bottom:0px;left:0;width:100%;",
                            bottom: "top:0;left:0;width:100%;padding-top:".concat(this.navTop + this.navHeight, "px;"),
                            left: "top:0;right:0px;height:100%;padding-top:".concat(this.navTop + this.navHeight, "px;"),
                            right: "top:0;left:0px;height:100%;padding-top:".concat(this.navTop + this.navHeight, "px;")
                        }[this.direction] + this._translate;
                    }
                },
                mounted: function() {
                    var n = this;
                    this.$nextTick(function() {
                        n.popShow = !0;
                    }), this.showPop && this.show(), t.getSystemInfo().then(function(t) {
                        var e = r(t, 2), a = (e[0], e[1]);
                        n.customNav = a.screenHeight === a.windowHeight, n.customNav && (n.navTop = n.$store.state.deviceInfo.statusBarHeight || Object(o.getNavHeight)().paddingTop, 
                        n.navHeight = n.$store.state.deviceInfo.toolBarHeight || Object(o.getNavHeight)().navHeight);
                    });
                },
                methods: {
                    stopMove: function(t) {
                        console.log(t);
                    },
                    show: function(t) {
                        this.$emit("update:showPop", !0), this.iftoggle = !0;
                    },
                    close: function() {
                        this.$emit("update:showPop", !1), this.$emit("hidePopup"), this.iftoggle = !1;
                    },
                    ableClose: function() {
                        this.autoClose && this.close();
                    },
                    stopEvent: function(t) {},
                    moveHandle: function() {}
                }
            };
        }.call(this, e(1).default);
    },
    2531: function(t, n, e) {
        e.r(n);
        var o = e(2532), r = e.n(o);
        for (var a in o) [ "default" ].indexOf(a) < 0 && function(t) {
            e.d(n, t, function() {
                return o[t];
            });
        }(a);
        n.default = r.a;
    },
    2532: function(t, n, e) {}
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "components/popup-layer/popup-layer-create-component", {
    "components/popup-layer/popup-layer-create-component": function(t, n, e) {
        e("1").createComponent(e(2526));
    }
}, [ [ "components/popup-layer/popup-layer-create-component" ] ] ]);