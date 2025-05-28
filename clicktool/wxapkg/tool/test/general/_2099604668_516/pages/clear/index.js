(global.webpackJsonp = global.webpackJsonp || []).push([ [ "pages/clear/index" ], {
    210: function(e, t, n) {
        n.r(t), function(e) {
            n(7), n(8), n(2), e(n(211).default);
        }.call(this, n(1).createPage);
    },
    211: function(e, t, n) {
        n.r(t);
        var r = n(212), a = n(214), c = n(126), o = Object(c.default)(a.default, r.render, r.staticRenderFns, !1, null, "e1a41088", null);
        o.options.__file = "src/pages/clear/index.vue", t.default = o.exports;
    },
    212: function(e, t, n) {
        n.r(t);
        var r = n(213);
        n.d(t, "render", function() {
            return r.render;
        }), n.d(t, "staticRenderFns", function() {
            return r.staticRenderFns;
        });
    },
    213: function(e, t, n) {
        n.r(t), n.d(t, "render", function() {
            return r;
        }), n.d(t, "staticRenderFns", function() {
            return a;
        });
        var r = function() {
            this.$createElement;
            this._self._c;
        }, a = [];
        r._withStripped = !0;
    },
    214: function(e, t, n) {
        n.r(t);
        var r = n(215);
        t.default = r.default;
    },
    215: function(e, t, n) {
        n.r(t), function(e) {
            var r = n(115), a = n(116);
            t.default = {
                onLoad: function() {
                    e.showLoading({
                        title: "加载中"
                    }), e.redirectTo({
                        url: "/clear/pages/home/home?source=tab"
                    });
                },
                onTabItemTap: function(e) {
                    var t = a.default.trade_block_content_click_734_350({
                        title: e.text.trim(),
                        pos: Number(e.index) + 1
                    });
                    Object(r.oneTrack)(t.eventName, t.data);
                }
            };
        }.call(this, n(1).default);
    }
}, [ [ 210, "common/runtime", "common/vendor" ] ] ]);