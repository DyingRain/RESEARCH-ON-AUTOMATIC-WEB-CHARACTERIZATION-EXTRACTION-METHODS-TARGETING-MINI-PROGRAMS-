(global.webpackJsonp = global.webpackJsonp || []).push([ [ "components/badge/badge/index" ], {
    1659: function(e, n, t) {
        t.r(n);
        var o = t(1660), r = t(1662), a = (t(1664), t(126)), d = Object(a.default)(r.default, o.render, o.staticRenderFns, !1, null, "1f795bcc", null);
        d.options.__file = "src/components/badge/badge/index.vue", n.default = d.exports;
    },
    1660: function(e, n, t) {
        t.r(n);
        var o = t(1661);
        t.d(n, "render", function() {
            return o.render;
        }), t.d(n, "staticRenderFns", function() {
            return o.staticRenderFns;
        });
    },
    1661: function(e, n, t) {
        t.r(n), t.d(n, "render", function() {
            return o;
        }), t.d(n, "staticRenderFns", function() {
            return r;
        });
        var o = function() {
            this.$createElement;
            this._self._c;
        }, r = [];
        o._withStripped = !0;
    },
    1662: function(e, n, t) {
        t.r(n);
        var o = t(1663);
        n.default = o.default;
    },
    1663: function(e, n, t) {
        t.r(n), n.default = {
            props: {
                color: {
                    type: String,
                    default: "#fff"
                },
                backgroundColor: {
                    type: String,
                    default: "#f44"
                },
                fontSize: {
                    type: Number,
                    default: 10
                },
                boxShadow: {
                    type: String,
                    default: "0 0 0 2px #fff"
                },
                styles: {
                    type: String,
                    default: ""
                }
            }
        };
    },
    1664: function(e, n, t) {
        t.r(n);
        var o = t(1665), r = t.n(o);
        for (var a in o) [ "default" ].indexOf(a) < 0 && function(e) {
            t.d(n, e, function() {
                return o[e];
            });
        }(a);
        n.default = r.a;
    },
    1665: function(e, n, t) {}
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "components/badge/badge/index-create-component", {
    "components/badge/badge/index-create-component": function(e, n, t) {
        t("1").createComponent(t(1659));
    }
}, [ [ "components/badge/badge/index-create-component" ] ] ]);