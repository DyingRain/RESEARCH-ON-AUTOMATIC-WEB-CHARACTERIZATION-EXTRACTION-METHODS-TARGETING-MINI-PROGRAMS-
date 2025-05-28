(global.webpackJsonp = global.webpackJsonp || []).push([ [ "pages/index/components/activity-entery" ], {
    1723: function(t, e, n) {
        n.r(e);
        var o = n(1724), r = n(1726), c = (n(1729), n(126)), i = Object(c.default)(r.default, o.render, o.staticRenderFns, !1, null, "050b9e87", null);
        i.options.__file = "src/pages/index/components/activity-entery.vue", e.default = i.exports;
    },
    1724: function(t, e, n) {
        n.r(e);
        var o = n(1725);
        n.d(e, "render", function() {
            return o.render;
        }), n.d(e, "staticRenderFns", function() {
            return o.staticRenderFns;
        });
    },
    1725: function(t, e, n) {
        n.r(e), n.d(e, "render", function() {
            return o;
        }), n.d(e, "staticRenderFns", function() {
            return r;
        });
        var o = function() {
            this.$createElement;
            this._self._c;
        }, r = [];
        o._withStripped = !0;
    },
    1726: function(t, e, n) {
        n.r(e);
        var o = n(1727);
        e.default = o.default;
    },
    1727: function(t, e, n) {
        n.r(e);
        var o = n(1728);
        e.default = {
            props: {
                type: {
                    type: Number,
                    required: !0
                },
                list: {
                    type: Array,
                    required: !0
                }
            },
            mounted: function() {
                this.doTrack();
            },
            methods: {
                goActivity: function(t, e) {
                    getApp().sensors.track("activity_block_content_click", {
                        current_page: "734",
                        block_type: "1378",
                        block_content_id: t.code || "",
                        block_content_title: t.titleText || "",
                        block_content_position: e + 1,
                        jump_content_id: t.routerUrl,
                        jump_content_url: t.routerUrl,
                        block_content_source: "2"
                    }), t.routerUrl && Object(o.doPromotionJump)({
                        url: t.routerUrl
                    }, this);
                },
                doTrack: function() {
                    var t = this;
                    this.list && this.list.length && this.list.forEach(function(e, n) {
                        var o = e, r = n;
                        console.log("------doTrackdoTrackdoTrackdoTrackdoTrackdoTrack", o, r), t.handleExposure(o, r);
                    });
                },
                handleExposure: function(t, e) {
                    getApp().sensors.track("activity_block_content_exposure", {
                        current_page: "734",
                        block_type: "1378",
                        block_content_id: t.code || "",
                        block_content_title: t.titleText || "",
                        block_content_position: e + 1,
                        jump_content_id: t.routerUrl,
                        jump_content_url: t.routerUrl,
                        block_content_source: "2"
                    });
                }
            }
        };
    },
    1729: function(t, e, n) {
        n.r(e);
        var o = n(1730), r = n.n(o);
        for (var c in o) [ "default" ].indexOf(c) < 0 && function(t) {
            n.d(e, t, function() {
                return o[t];
            });
        }(c);
        e.default = r.a;
    },
    1730: function(t, e, n) {}
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "pages/index/components/activity-entery-create-component", {
    "pages/index/components/activity-entery-create-component": function(t, e, n) {
        n("1").createComponent(n(1723));
    }
}, [ [ "pages/index/components/activity-entery-create-component" ] ] ]);