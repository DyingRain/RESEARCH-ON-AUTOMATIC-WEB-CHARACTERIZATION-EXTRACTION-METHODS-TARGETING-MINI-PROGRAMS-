(global.webpackJsonp = global.webpackJsonp || []).push([ [ "components/badge/pot-badge/index" ], {
    3965: function(n, e, t) {
        t.r(e);
        var o = t(3966), r = t(3968), a = (t(3970), t(126)), c = Object(a.default)(r.default, o.render, o.staticRenderFns, !1, null, "3f3ecca2", null);
        c.options.__file = "src/components/badge/pot-badge/index.vue", e.default = c.exports;
    },
    3966: function(n, e, t) {
        t.r(e);
        var o = t(3967);
        t.d(e, "render", function() {
            return o.render;
        }), t.d(e, "staticRenderFns", function() {
            return o.staticRenderFns;
        });
    },
    3967: function(n, e, t) {
        t.r(e), t.d(e, "render", function() {
            return o;
        }), t.d(e, "staticRenderFns", function() {
            return r;
        });
        var o = function() {
            this.$createElement;
            this._self._c;
        }, r = [];
        o._withStripped = !0;
    },
    3968: function(n, e, t) {
        t.r(e);
        var o = t(3969);
        e.default = o.default;
    },
    3969: function(n, e, t) {
        t.r(e), e.default = {
            props: {
                num: {
                    type: Number,
                    default: 0
                }
            },
            computed: {
                amount: function() {
                    return this.num > 99 ? "99+" : this.num;
                }
            }
        };
    },
    3970: function(n, e, t) {
        t.r(e);
        var o = t(3971), r = t.n(o);
        for (var a in o) [ "default" ].indexOf(a) < 0 && function(n) {
            t.d(e, n, function() {
                return o[n];
            });
        }(a);
        e.default = r.a;
    },
    3971: function(n, e, t) {}
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "components/badge/pot-badge/index-create-component", {
    "components/badge/pot-badge/index-create-component": function(n, e, t) {
        t("1").createComponent(t(3965));
    }
}, [ [ "components/badge/pot-badge/index-create-component" ] ] ]);