(global.webpackJsonp = global.webpackJsonp || []).push([ [ "components/guide/index" ], {
    1951: function(e, t, n) {
        n.r(t);
        var r = n(1952), o = n(1954), c = (n(1956), n(126)), i = Object(c.default)(o.default, r.render, r.staticRenderFns, !1, null, "67ef2ac2", null);
        i.options.__file = "src/components/guide/index.vue", t.default = i.exports;
    },
    1952: function(e, t, n) {
        n.r(t);
        var r = n(1953);
        n.d(t, "render", function() {
            return r.render;
        }), n.d(t, "staticRenderFns", function() {
            return r.staticRenderFns;
        });
    },
    1953: function(e, t, n) {
        n.r(t), n.d(t, "render", function() {
            return r;
        }), n.d(t, "staticRenderFns", function() {
            return o;
        });
        var r = function() {
            this.$createElement;
            this._self._c;
        }, o = [];
        r._withStripped = !0;
    },
    1954: function(e, t, n) {
        n.r(t);
        var r = n(1955);
        t.default = r.default;
    },
    1955: function(e, t, n) {
        n.r(t), function(e) {
            var r, o, c = n(4), i = n.n(c), u = n(19), a = n(94), s = n.n(a), f = n(45), d = n(16);
            function p(e, t, n, r, o, c, i) {
                try {
                    var u = e[c](i), a = u.value;
                } catch (e) {
                    return void n(e);
                }
                u.done ? t(a) : Promise.resolve(a).then(r, o);
            }
            function l(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable;
                    })), n.push.apply(n, r);
                }
                return n;
            }
            function h(e, t, n) {
                return t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n, e;
            }
            t.default = {
                name: "Guide",
                props: {
                    showGuide: {
                        type: Boolean,
                        default: !1
                    },
                    guideImg: {
                        type: String,
                        default: "https://webimg.dewucdn.com/node-common/3e606fd9241316fd34dff065e30ecfe1.png"
                    }
                },
                computed: function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {};
                        t % 2 ? l(Object(n), !0).forEach(function(t) {
                            h(e, t, n[t]);
                        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : l(Object(n)).forEach(function(t) {
                            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
                        });
                    }
                    return e;
                }({}, Object(u.mapState)([ "SERVICE_ENV" ])),
                methods: {
                    pushCustomerService: (r = i.a.mark(function t() {
                        var n, r, o, c, u, a, p, l;
                        return i.a.wrap(function(t) {
                            for (;;) switch (t.prev = t.next) {
                              case 0:
                                return t.next = 2, Object(d.postRequest)("/api/v1/h5/index/fire/user-info", {}, {
                                    json: !0
                                });

                              case 2:
                                (n = t.sent) && 200 === n.code && (r = e.getStorageSync("X-Auth-Token") || s.a.get("xAuthToken"), 
                                o = e.getStorageSync("userInfo") || "", c = o.userId, u = o.icon, a = "https://".concat(this.SERVICE_ENV, "-chat.dewu.com/h5?"), 
                                "pro" === this.SERVICE_ENV && (a = "https://chat.dewu.com/h5?"), p = new Date().getTime(), 
                                l = "".concat(a, "im=") + encodeURIComponent("ts=".concat(p, "&channel=10002&sourceId=10003&fromPage=myOrder&fromTitle=我的购买&userId=").concat(c, "&avatar=").concat(u, "&token=").concat(r)), 
                                console.log("webUrl", this.SERVICE_ENV, l), Object(f.navigationToWeb)(l));

                              case 4:
                              case "end":
                                return t.stop();
                            }
                        }, t, this);
                    }), o = function() {
                        var e = this, t = arguments;
                        return new Promise(function(n, o) {
                            var c = r.apply(e, t);
                            function i(e) {
                                p(c, n, o, i, u, "next", e);
                            }
                            function u(e) {
                                p(c, n, o, i, u, "throw", e);
                            }
                            i(void 0);
                        });
                    }, function() {
                        return o.apply(this, arguments);
                    }),
                    closeGuide: function() {
                        this.$emit("update:showGuide", !1);
                    }
                }
            };
        }.call(this, n(1).default);
    },
    1956: function(e, t, n) {
        n.r(t);
        var r = n(1957), o = n.n(r);
        for (var c in r) [ "default" ].indexOf(c) < 0 && function(e) {
            n.d(t, e, function() {
                return r[e];
            });
        }(c);
        t.default = o.a;
    },
    1957: function(e, t, n) {}
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "components/guide/index-create-component", {
    "components/guide/index-create-component": function(e, t, n) {
        n("1").createComponent(n(1951));
    }
}, [ [ "components/guide/index-create-component" ] ] ]);