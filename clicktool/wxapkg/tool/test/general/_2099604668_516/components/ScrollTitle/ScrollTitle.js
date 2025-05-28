(global.webpackJsonp = global.webpackJsonp || []).push([ [ "components/ScrollTitle/ScrollTitle" ], {
    1752: function(e, t, n) {
        n.r(t);
        var i = n(1753), o = n(1755), l = (n(1757), n(126)), c = Object(l.default)(o.default, i.render, i.staticRenderFns, !1, null, "07ffa967", null);
        c.options.__file = "src/components/ScrollTitle/ScrollTitle.vue", t.default = c.exports;
    },
    1753: function(e, t, n) {
        n.r(t);
        var i = n(1754);
        n.d(t, "render", function() {
            return i.render;
        }), n.d(t, "staticRenderFns", function() {
            return i.staticRenderFns;
        });
    },
    1754: function(e, t, n) {
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
    1755: function(e, t, n) {
        n.r(t);
        var i = n(1756);
        t.default = i.default;
    },
    1756: function(e, t, n) {
        n.r(t), function(e) {
            var i = n(115), o = n(116);
            t.default = {
                props: {
                    tabs: {
                        type: Array,
                        default: function() {
                            return [ {
                                title: "",
                                tabId: ""
                            } ];
                        }
                    },
                    useScale: {
                        type: Boolean,
                        default: !1
                    },
                    defaultSelect: {
                        type: Number,
                        default: 0
                    },
                    isShow: {
                        type: Boolean,
                        default: !0
                    }
                },
                data: function() {
                    return {
                        scrollPosition: 0,
                        activeItemIndex: this.defaultSelect,
                        width: 0
                    };
                },
                watch: {
                    defaultSelect: function(e) {
                        this.activeItemIndex !== e && (this.activeItemIndex = this.defaultSelect, this.scrollTitle(this.tabs[e], e));
                    }
                },
                onUnload: function() {},
                mounted: function() {
                    var e = this;
                    this.$nextTick(function() {
                        e.exposureTabItem();
                    });
                },
                methods: {
                    onItemClick: function(t, n, l) {
                        var c = this, r = o.default.trade_brand_profile_block_content_click_734_781({
                            id: t.id,
                            title: t.title,
                            pos: Number(n) + 1
                        });
                        Object(i.oneTrack)(r.eventName, r.data), this.width ? this.scrollTitle(t, n, l) : e.createSelectorQuery().in(this).select(".header-scroll").boundingClientRect(function(e) {
                            c.width = e[0] && e[0].width || c.$store.state.deviceInfo.width, c.scrollTitle(t, n, l);
                        }).exec();
                    },
                    scrollTitle: function(t, n, i) {
                        var o = this;
                        setTimeout(function() {
                            var l = 0;
                            if (i) return l = i.currentTarget.offsetLeft, o.scrollPosition = l - (o.width / 2 - 10), 
                            o.activeItemIndex = n, void o.$emit("on-item-click", {
                                item: t,
                                index: n
                            });
                            e.createSelectorQuery().in(o).selectAll(".header-scroll-item").boundingClientRect(function(e) {
                                l = e.slice(0, n).reduce(function(e, t) {
                                    return e + t.width;
                                }, 0), o.scrollPosition = l - (o.width / 2 + 10), o.activeItemIndex = n;
                            }).exec();
                        }, 0);
                    },
                    exposureTabItem: function() {
                        var t = this;
                        e.createIntersectionObserver(this, {
                            observeAll: !0
                        }).relativeToViewport({
                            left: 30
                        }).observe(".header-scroll-item", function(e) {
                            if (e.intersectionRatio > 0) {
                                var n = (e.dataset || {}).id, l = t.tabs[n] || {}, c = o.default.trade_brand_profile_block_content_exposure_734_781({
                                    pos: +n + 1,
                                    title: l.title,
                                    id: l.id
                                });
                                Object(i.oneTrack)(c.eventName, c.data);
                            }
                        });
                    }
                }
            };
        }.call(this, n(1).default);
    },
    1757: function(e, t, n) {
        n.r(t);
        var i = n(1758), o = n.n(i);
        for (var l in i) [ "default" ].indexOf(l) < 0 && function(e) {
            n.d(t, e, function() {
                return i[e];
            });
        }(l);
        t.default = o.a;
    },
    1758: function(e, t, n) {}
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "components/ScrollTitle/ScrollTitle-create-component", {
    "components/ScrollTitle/ScrollTitle-create-component": function(e, t, n) {
        n("1").createComponent(n(1752));
    }
}, [ [ "components/ScrollTitle/ScrollTitle-create-component" ] ] ]);