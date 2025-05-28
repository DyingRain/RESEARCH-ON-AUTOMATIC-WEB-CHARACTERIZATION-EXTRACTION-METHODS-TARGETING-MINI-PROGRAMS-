(global.webpackJsonp = global.webpackJsonp || []).push([ [ "components/download/download" ], {
    2566: function(n, o, e) {
        e.r(o);
        var t = e(2567), a = e(2569), d = (e(2571), e(126)), c = Object(d.default)(a.default, t.render, t.staticRenderFns, !1, null, "c48eea62", null);
        c.options.__file = "src/components/download/download.vue", o.default = c.exports;
    },
    2567: function(n, o, e) {
        e.r(o);
        var t = e(2568);
        e.d(o, "render", function() {
            return t.render;
        }), e.d(o, "staticRenderFns", function() {
            return t.staticRenderFns;
        });
    },
    2568: function(n, o, e) {
        e.r(o), e.d(o, "render", function() {
            return t;
        }), e.d(o, "staticRenderFns", function() {
            return a;
        });
        var t = function() {
            this.$createElement;
            this._self._c;
        }, a = [];
        t._withStripped = !0;
    },
    2569: function(n, o, e) {
        e.r(o);
        var t = e(2570);
        o.default = t.default;
    },
    2570: function(n, o, e) {
        e.r(o);
        var t = e(45);
        o.default = {
            name: "Download",
            props: {
                show: {
                    type: Boolean,
                    default: !0
                }
            },
            methods: {
                closeDownLoad: function() {
                    this.$emit("hide");
                },
                down: function() {
                    Object(t.navigationToWeb)("https://h5.dewu.com/");
                }
            }
        };
    },
    2571: function(n, o, e) {
        e.r(o);
        var t = e(2572), a = e.n(t);
        for (var d in t) [ "default" ].indexOf(d) < 0 && function(n) {
            e.d(o, n, function() {
                return t[n];
            });
        }(d);
        o.default = a.a;
    },
    2572: function(n, o, e) {}
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "components/download/download-create-component", {
    "components/download/download-create-component": function(n, o, e) {
        e("1").createComponent(e(2566));
    }
}, [ [ "components/download/download-create-component" ] ] ]);