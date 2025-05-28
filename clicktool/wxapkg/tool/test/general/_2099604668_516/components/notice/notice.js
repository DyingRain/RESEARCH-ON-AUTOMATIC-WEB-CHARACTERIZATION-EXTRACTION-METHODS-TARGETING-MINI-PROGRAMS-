(global.webpackJsonp = global.webpackJsonp || []).push([ [ "components/notice/notice" ], {
    2428: function(t, e, n) {
        n.r(e);
        var r = n(2429), i = n(2431), o = (n(2433), n(126)), a = Object(o.default)(i.default, r.render, r.staticRenderFns, !1, null, "4f859ae2", null);
        a.options.__file = "src/components/notice/notice.vue", e.default = a.exports;
    },
    2429: function(t, e, n) {
        n.r(e);
        var r = n(2430);
        n.d(e, "render", function() {
            return r.render;
        }), n.d(e, "staticRenderFns", function() {
            return r.staticRenderFns;
        });
    },
    2430: function(t, e, n) {
        n.r(e), n.d(e, "render", function() {
            return r;
        }), n.d(e, "staticRenderFns", function() {
            return i;
        });
        var r = function() {
            this.$createElement;
            this._self._c;
        }, i = [];
        r._withStripped = !0;
    },
    2431: function(t, e, n) {
        n.r(e);
        var r = n(2432);
        e.default = r.default;
    },
    2432: function(t, e, n) {
        n.r(e), function(t) {
            var r, i, o = n(4), a = n.n(o), c = n(45);
            function s(t, e) {
                return function(t) {
                    if (Array.isArray(t)) return t;
                }(t) || function(t, e) {
                    var n = null == t ? null : "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
                    if (null != n) {
                        var r, i, o = [], a = !0, c = !1;
                        try {
                            for (n = n.call(t); !(a = (r = n.next()).done) && (o.push(r.value), !e || o.length !== e); a = !0) ;
                        } catch (t) {
                            c = !0, i = t;
                        } finally {
                            try {
                                a || null == n.return || n.return();
                            } finally {
                                if (c) throw i;
                            }
                        }
                        return o;
                    }
                }(t, e) || function(t, e) {
                    if (t) {
                        if ("string" == typeof t) return u(t, e);
                        var n = Object.prototype.toString.call(t).slice(8, -1);
                        return "Object" === n && t.constructor && (n = t.constructor.name), "Map" === n || "Set" === n ? Array.from(t) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? u(t, e) : void 0;
                    }
                }(t, e) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
                }();
            }
            function u(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
                return r;
            }
            function l(t, e, n, r, i, o, a) {
                try {
                    var c = t[o](a), s = c.value;
                } catch (t) {
                    return void n(t);
                }
                c.done ? e(s) : Promise.resolve(s).then(r, i);
            }
            function d(t) {
                return function() {
                    var e = this, n = arguments;
                    return new Promise(function(r, i) {
                        var o = t.apply(e, n);
                        function a(t) {
                            l(o, r, i, a, c, "next", t);
                        }
                        function c(t) {
                            l(o, r, i, a, c, "throw", t);
                        }
                        a(void 0);
                    });
                };
            }
            e.default = {
                components: {
                    FastImage: function() {
                        return Promise.all([ n.e("common/vendor"), n.e("components/product/fast-image/index") ]).then(n.bind(null, 1780));
                    }
                },
                name: "Notice",
                props: [ "pageName", "orderNo", "bizType", "dataType", "data" ],
                data: function() {
                    return {
                        movingAction: !1,
                        show: !1,
                        second: "",
                        copywriting: "",
                        textWidth: "",
                        sw: 0,
                        near: 0,
                        redirectUrl: "",
                        type: 0,
                        copyEleVisible: !1,
                        timer: 0
                    };
                },
                destroyed: function() {
                    clearTimeout(this.timer);
                },
                mounted: function() {
                    this.loadData();
                },
                watch: {
                    data: function() {
                        this.loadData();
                    }
                },
                methods: {
                    loadData: (i = d(a.a.mark(function t() {
                        var e, n, r, i, o;
                        return a.a.wrap(function(t) {
                            for (;;) switch (t.prev = t.next) {
                              case 0:
                                if (1 !== this.dataType) {
                                    t.next = 4;
                                    break;
                                }
                                this.data && this.data.copywriting && (e = this.data, n = e.copywriting, r = e.redirectUrl, 
                                i = e.linkUrl, o = e.type, this.copywriting = n, this.redirectUrl = i || r, this.type = o, 
                                this.start()), t.next = 6;
                                break;

                              case 4:
                                return t.next = 6, this.getData();

                              case 6:
                              case "end":
                                return t.stop();
                            }
                        }, t, this);
                    })), function() {
                        return i.apply(this, arguments);
                    }),
                    start: function() {
                        this.show = !0, 0 === this.type && this.contentInit();
                    },
                    getData: (r = d(a.a.mark(function t() {
                        var e, n, r, i, o, c, s;
                        return a.a.wrap(function(t) {
                            for (;;) switch (t.prev = t.next) {
                              case 0:
                                return e = {
                                    appearType: this.pageName
                                }, this.orderNo && (e.orderNo = this.orderNo), null != this.bizType && this.bizType >= 0 && (e.bizType = "".concat(this.bizType)), 
                                n = {
                                    stone: !0,
                                    json: !0
                                }, t.next = 7, this.duserver.postRequest("/api/v1/h5/order-biz/order/copywriting/detailH5", e, n);

                              case 7:
                                (r = t.sent) && r.data && 200 === r.code && (i = r.data.copywritingDetail, o = i.copywriting, 
                                c = i.redirectUrl, s = i.type, this.copywriting = o, this.redirectUrl = c, this.type = s, 
                                this.start());

                              case 9:
                              case "end":
                                return t.stop();
                            }
                        }, t, this);
                    })), function() {
                        return r.apply(this, arguments);
                    }),
                    contentInit: function() {
                        var e = this;
                        this.$nextTick(function() {
                            var n = t.createSelectorQuery().in(e);
                            n.select(".content-text").boundingClientRect(), n.select(".content-view").boundingClientRect(), 
                            n.exec(function(t) {
                                var n = s(t || [], 2), r = n[0], i = n[1], o = (r || {}).width, a = (i || {}).width;
                                "number" == typeof o && "number" == typeof a && (e.textWidth = o, o > a && (e.timer = setTimeout(function() {
                                    e.copyEleVisible = !0, e.move && e.move();
                                }, 1e3)));
                            });
                        });
                    },
                    move: function() {
                        this.second = this.textWidth / 40, this.movingAction = !0;
                    },
                    redirectTo: function() {
                        1 === this.type && Object(c.navigationToWeb)(this.redirectUrl);
                    }
                }
            };
        }.call(this, n(1).default);
    },
    2433: function(t, e, n) {
        n.r(e);
        var r = n(2434), i = n.n(r);
        for (var o in r) [ "default" ].indexOf(o) < 0 && function(t) {
            n.d(e, t, function() {
                return r[t];
            });
        }(o);
        e.default = i.a;
    },
    2434: function(t, e, n) {}
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "components/notice/notice-create-component", {
    "components/notice/notice-create-component": function(t, e, n) {
        n("1").createComponent(n(2428));
    }
}, [ [ "components/notice/notice-create-component" ] ] ]);