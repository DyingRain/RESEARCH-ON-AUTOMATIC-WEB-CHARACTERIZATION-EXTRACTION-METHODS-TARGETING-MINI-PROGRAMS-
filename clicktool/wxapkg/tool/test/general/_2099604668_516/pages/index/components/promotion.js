(global.webpackJsonp = global.webpackJsonp || []).push([ [ "pages/index/components/promotion" ], {
    1738: function(n, o, t) {
        t.r(o);
        var e = t(1739), r = t(1741), i = (t(1743), t(126)), u = Object(i.default)(r.default, e.render, e.staticRenderFns, !1, null, "2dffa80b", null);
        u.options.__file = "src/pages/index/components/promotion.vue", o.default = u.exports;
    },
    1739: function(n, o, t) {
        t.r(o);
        var e = t(1740);
        t.d(o, "render", function() {
            return e.render;
        }), t.d(o, "staticRenderFns", function() {
            return e.staticRenderFns;
        });
    },
    1740: function(n, o, t) {
        t.r(o), t.d(o, "render", function() {
            return e;
        }), t.d(o, "staticRenderFns", function() {
            return r;
        });
        var e = function() {
            this.$createElement;
            this._self._c;
        }, r = [];
        e._withStripped = !0;
    },
    1741: function(n, o, t) {
        t.r(o);
        var e = t(1742);
        o.default = e.default;
    },
    1742: function(n, o, t) {
        t.r(o);
        var e = t(1728);
        o.default = {
            props: {
                info: {
                    type: Object,
                    default: {}
                }
            },
            methods: {
                goPromotion: function() {
                    this.info.routerCoordinate && this.info.routerCoordinate.length && (console.log("---this.info.routerCoordinate[0].routerUrl", this.info.routerCoordinate[0].routerUrl), 
                    Object(e.doPromotionJump)({
                        url: this.info.routerCoordinate[0].routerUrl
                    }, this));
                }
            }
        };
    },
    1743: function(n, o, t) {
        t.r(o);
        var e = t(1744), r = t.n(e);
        for (var i in e) [ "default" ].indexOf(i) < 0 && function(n) {
            t.d(o, n, function() {
                return e[n];
            });
        }(i);
        o.default = r.a;
    },
    1744: function(n, o, t) {}
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "pages/index/components/promotion-create-component", {
    "pages/index/components/promotion-create-component": function(n, o, t) {
        t("1").createComponent(t(1738));
    }
}, [ [ "pages/index/components/promotion-create-component" ] ] ]);