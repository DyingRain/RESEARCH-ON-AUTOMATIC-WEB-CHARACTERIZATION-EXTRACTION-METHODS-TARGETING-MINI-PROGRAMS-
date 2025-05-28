(global.webpackJsonp = global.webpackJsonp || []).push([ [ "pages/index/components/kingkong-entry" ], {
    1731: function(n, e, t) {
        t.r(e);
        var r = t(1732), o = t(1734), i = (t(1736), t(126)), s = Object(i.default)(o.default, r.render, r.staticRenderFns, !1, null, "c5c0853e", null);
        s.options.__file = "src/pages/index/components/kingkong-entry.vue", e.default = s.exports;
    },
    1732: function(n, e, t) {
        t.r(e);
        var r = t(1733);
        t.d(e, "render", function() {
            return r.render;
        }), t.d(e, "staticRenderFns", function() {
            return r.staticRenderFns;
        });
    },
    1733: function(n, e, t) {
        t.r(e), t.d(e, "render", function() {
            return r;
        }), t.d(e, "staticRenderFns", function() {
            return o;
        });
        var r = function() {
            this.$createElement;
            this._self._c;
        }, o = [];
        r._withStripped = !0;
    },
    1734: function(n, e, t) {
        t.r(e);
        var r = t(1735);
        e.default = r.default;
    },
    1735: function(n, e, t) {
        t.r(e);
        var r = t(1728);
        e.default = {
            props: {
                list: {
                    type: Array,
                    required: !0
                }
            },
            computed: {
                splitList: function() {
                    if (this.list.length <= 10) return [ this.list ];
                    for (var n = JSON.parse(JSON.stringify(this.list)), e = n.length / 10, t = [], r = 0; r < e; r++) t.push(n.slice(10 * r, 10 * (r + 1)));
                    return t;
                }
            },
            methods: {
                handleJump: function(n) {
                    n && n.routerUrl && Object(r.doPromotionJump)({
                        url: n.routerUrl
                    }, this);
                }
            }
        };
    },
    1736: function(n, e, t) {
        t.r(e);
        var r = t(1737), o = t.n(r);
        for (var i in r) [ "default" ].indexOf(i) < 0 && function(n) {
            t.d(e, n, function() {
                return r[n];
            });
        }(i);
        e.default = o.a;
    },
    1737: function(n, e, t) {}
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "pages/index/components/kingkong-entry-create-component", {
    "pages/index/components/kingkong-entry-create-component": function(n, e, t) {
        t("1").createComponent(t(1731));
    }
}, [ [ "pages/index/components/kingkong-entry-create-component" ] ] ]);