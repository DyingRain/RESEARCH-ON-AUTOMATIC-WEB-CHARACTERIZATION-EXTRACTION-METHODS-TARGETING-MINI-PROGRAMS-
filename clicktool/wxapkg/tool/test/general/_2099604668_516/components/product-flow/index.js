(global.webpackJsonp = global.webpackJsonp || []).push([ [ "components/product-flow/index" ], {
    1860: function(n, e, t) {
        t.r(e);
        var o = t(1861), r = t(1863), c = (t(1865), t(126)), i = Object(c.default)(r.default, o.render, o.staticRenderFns, !1, null, "34e2eedf", null);
        i.options.__file = "src/components/product-flow/index.vue", e.default = i.exports;
    },
    1861: function(n, e, t) {
        t.r(e);
        var o = t(1862);
        t.d(e, "render", function() {
            return o.render;
        }), t.d(e, "staticRenderFns", function() {
            return o.staticRenderFns;
        });
    },
    1862: function(n, e, t) {
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
    1863: function(n, e, t) {
        t.r(e);
        var o = t(1864);
        e.default = o.default;
    },
    1864: function(n, e, t) {
        t.r(e), function(n) {
            var o = t(135), r = null;
            e.default = {
                components: {
                    ProductItem: function() {
                        return Promise.all([ t.e("common/vendor"), t.e("components/product-flow/item") ]).then(t.bind(null, 3994));
                    }
                },
                props: {
                    list: {
                        type: Array,
                        default: function() {
                            return [ {} ];
                        }
                    }
                },
                computed: {
                    isDefaultSlot: function() {
                        return this.$slots.default;
                    }
                },
                watch: {
                    list: function(e) {
                        var t = this;
                        Array.isArray(e) && e.length && (r && r.disconnect && r.disconnect(), this.$nextTick(function() {
                            (r = n.createIntersectionObserver(t, {
                                observeAll: !0
                            })).relativeToViewport().observe(".product-item", function(n) {
                                if (n.intersectionRatio > 0) {
                                    var o = n.dataset.index;
                                    t.$emit("item-exposure", {
                                        index: o,
                                        item: e[o]
                                    });
                                }
                            });
                        }));
                    }
                },
                created: function() {
                    var n = this;
                    o.default.$on("product-exposure", function() {
                        for (var e = arguments.length, t = new Array(e), o = 0; o < e; o++) t[o] = arguments[o];
                        n.$emit("product-exposure", t);
                    });
                },
                destroyed: function() {
                    r = null;
                }
            };
        }.call(this, t(1).default);
    },
    1865: function(n, e, t) {
        t.r(e);
        var o = t(1866), r = t.n(o);
        for (var c in o) [ "default" ].indexOf(c) < 0 && function(n) {
            t.d(e, n, function() {
                return o[n];
            });
        }(c);
        e.default = r.a;
    },
    1866: function(n, e, t) {}
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "components/product-flow/index-create-component", {
    "components/product-flow/index-create-component": function(n, e, t) {
        t("1").createComponent(t(1860));
    }
}, [ [ "components/product-flow/index-create-component" ] ] ]);