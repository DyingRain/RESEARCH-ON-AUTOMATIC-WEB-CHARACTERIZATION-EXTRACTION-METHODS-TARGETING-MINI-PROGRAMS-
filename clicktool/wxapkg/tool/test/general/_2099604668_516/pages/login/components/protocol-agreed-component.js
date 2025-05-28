(global.webpackJsonp = global.webpackJsonp || []).push([ [ "pages/login/components/protocol-agreed-component" ], {
    1773: function(e, n, o) {
        o.r(n);
        var t = o(1774), r = o(1776), c = (o(1778), o(126)), a = Object(c.default)(r.default, t.render, t.staticRenderFns, !1, null, "40399624", null);
        a.options.__file = "src/pages/login/components/protocol-agreed-component.vue", n.default = a.exports;
    },
    1774: function(e, n, o) {
        o.r(n);
        var t = o(1775);
        o.d(n, "render", function() {
            return t.render;
        }), o.d(n, "staticRenderFns", function() {
            return t.staticRenderFns;
        });
    },
    1775: function(e, n, o) {
        o.r(n), o.d(n, "render", function() {
            return t;
        }), o.d(n, "staticRenderFns", function() {
            return r;
        });
        var t = function() {
            this.$createElement;
            this._self._c;
        }, r = [];
        t._withStripped = !0;
    },
    1776: function(e, n, o) {
        o.r(n);
        var t = o(1777);
        n.default = t.default;
    },
    1777: function(e, n, o) {
        o.r(n);
        var t = o(138);
        n.default = {
            name: "ProtocolAgreed",
            props: {
                agreed: {
                    type: Boolean,
                    default: !1
                }
            },
            data: function() {
                return {
                    isIdentifyMP: Object({
                        NODE_ENV: "development",
                        VUE_APP_PLATFORM: "mp-weixin",
                        BASE_URL: "/"
                    }).VUE_APP_IDENTIFY_WEIXIN_MP
                };
            },
            methods: {
                toggleCheck: function() {
                    this.$emit("toggleCheck", !this.agreed);
                },
                goProtocolPage: t.goProtocolPage
            }
        };
    },
    1778: function(e, n, o) {
        o.r(n);
        var t = o(1779), r = o.n(t);
        for (var c in t) [ "default" ].indexOf(c) < 0 && function(e) {
            o.d(n, e, function() {
                return t[e];
            });
        }(c);
        n.default = r.a;
    },
    1779: function(e, n, o) {}
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "pages/login/components/protocol-agreed-component-create-component", {
    "pages/login/components/protocol-agreed-component-create-component": function(e, n, o) {
        o("1").createComponent(o(1773));
    }
}, [ [ "pages/login/components/protocol-agreed-component-create-component" ] ] ]);