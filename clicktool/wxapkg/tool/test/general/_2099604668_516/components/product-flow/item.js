(global.webpackJsonp = global.webpackJsonp || []).push([ [ "components/product-flow/item" ], {
    3994: function(t, n, e) {
        e.r(n);
        var o = e(3995), r = e(3997), c = (e(3999), e(126)), i = Object(c.default)(r.default, o.render, o.staticRenderFns, !1, null, "0f92bd16", null);
        i.options.__file = "src/components/product-flow/item.vue", n.default = i.exports;
    },
    3995: function(t, n, e) {
        e.r(n);
        var o = e(3996);
        e.d(n, "render", function() {
            return o.render;
        }), e.d(n, "staticRenderFns", function() {
            return o.staticRenderFns;
        });
    },
    3996: function(t, n, e) {
        e.r(n), e.d(n, "render", function() {
            return o;
        }), e.d(n, "staticRenderFns", function() {
            return r;
        });
        var o = function() {
            this.$createElement;
            var t = (this._self._c, this.filter.handlePrice(this.detail.price));
            this.$mp.data = Object.assign({}, {
                $root: {
                    g0: t
                }
            });
        }, r = [];
        o._withStripped = !0;
    },
    3997: function(t, n, e) {
        e.r(n);
        var o = e(3998);
        n.default = o.default;
    },
    3998: function(t, n, e) {
        e.r(n);
        var o = e(1123), r = e(135);
        n.default = {
            props: {
                detail: {
                    type: Object,
                    default: function() {}
                },
                index: {
                    type: Number,
                    required: !0
                }
            },
            components: {
                FastImage: function() {
                    return Promise.all([ e.e("common/vendor"), e.e("components/product/fast-image/index") ]).then(e.bind(null, 1780));
                }
            },
            data: function() {
                return {
                    uid: this._uid,
                    isLazyload: !1
                };
            },
            mounted: function() {
                var t = this;
                o.default.call(this, ".product-item".concat(this.uid), -10, this).then(function(n) {
                    r.default.$emit("product-exposure", t.detail, t.index);
                }).catch(function(t) {
                    console.log(t);
                });
            }
        };
    },
    3999: function(t, n, e) {
        e.r(n);
        var o = e(4e3), r = e.n(o);
        for (var c in o) [ "default" ].indexOf(c) < 0 && function(t) {
            e.d(n, t, function() {
                return o[t];
            });
        }(c);
        n.default = r.a;
    },
    4000: function(t, n, e) {}
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "components/product-flow/item-create-component", {
    "components/product-flow/item-create-component": function(t, n, e) {
        e("1").createComponent(e(3994));
    }
}, [ [ "components/product-flow/item-create-component" ] ] ]);