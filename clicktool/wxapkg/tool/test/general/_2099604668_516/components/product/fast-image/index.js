require("../../../@babel/runtime/helpers/Arrayincludes"), (global.webpackJsonp = global.webpackJsonp || []).push([ [ "components/product/fast-image/index" ], {
    1780: function(e, t, n) {
        n.r(t);
        var i = n(1781), r = n(1783), c = (n(1786), n(126)), o = Object(c.default)(r.default, i.render, i.staticRenderFns, !1, null, "a848b446", null);
        o.options.__file = "src/components/product/fast-image/index.vue", t.default = o.exports;
    },
    1781: function(e, t, n) {
        n.r(t);
        var i = n(1782);
        n.d(t, "render", function() {
            return i.render;
        }), n.d(t, "staticRenderFns", function() {
            return i.staticRenderFns;
        });
    },
    1782: function(e, t, n) {
        n.r(t), n.d(t, "render", function() {
            return i;
        }), n.d(t, "staticRenderFns", function() {
            return r;
        });
        var i = function() {
            this.$createElement;
            this._self._c;
        }, r = [];
        i._withStripped = !0;
    },
    1783: function(e, t, n) {
        n.r(t);
        var i = n(1784);
        t.default = i.default;
    },
    1784: function(e, t, n) {
        n.r(t), function(e) {
            var i = n(1785);
            t.default = {
                props: {
                    src: {
                        type: String,
                        required: !0
                    },
                    options: {
                        type: Object
                    },
                    mode: {
                        type: String
                    },
                    alt: {
                        type: String
                    },
                    needSquare: {
                        type: Boolean,
                        default: !1
                    },
                    dpr: {
                        type: Number,
                        default: 3
                    },
                    isLazy: {
                        type: Boolean,
                        default: !0
                    },
                    uiWidth: {
                        type: Number,
                        default: 320
                    },
                    strictSrc: {
                        type: Boolean,
                        default: !1
                    },
                    originalImg: {
                        type: Boolean,
                        default: !1
                    }
                },
                data: function() {
                    return {
                        webp: !0,
                        cdnWidth: 320,
                        defaultH5Src: "https://webimg.dewucdn.com/node-common/7eccc2fbe70bad59309bb58f414d6d0d.png",
                        imageLazyLoadRef: "",
                        uid: this._uid,
                        imgVisible: !1,
                        observer: null
                    };
                },
                computed: {
                    imageSrc: function() {
                        if (!this.cdnWidth || this.strictSrc) return this.src;
                        var e = this.transCdnToWebpCdn(this.src) || this.src;
                        return this.needSquare && e.includes("origin-") && (e = e.replace("origin", "cut")), 
                        i.resizableUrlList.some(function(t) {
                            return e.includes(t);
                        }) && (e = this.resizeImage(e), e = this.addWebpParams(e)), e;
                    }
                },
                methods: {
                    transCdnToWebpCdn: function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
                        return i.IMAGE_MAPLIST.forEach(function(t) {
                            var n = t.sourceUrl, i = t.changeToUrl;
                            e && e.includes(n) && (e = e.replace(n, i));
                        }), e;
                    },
                    resizeImage: function(e) {
                        if (Object(i.isUrlInMimeType)(e)) {
                            var t = e.includes("?") ? e.split("?")[0] : e, n = "?x-oss-process=image/resize".concat(this.cdnWidth ? ",w_" + (this.cdnWidth * this.dpr).toFixed() : "");
                            return "".concat(t).concat(n);
                        }
                        return e;
                    },
                    addWebpParams: function(e) {
                        return e;
                    },
                    getImageOffsetWidth: function() {
                        var t = this;
                        this.uiWidth ? this.cdnWidth = this.uiWidth || this.cdnWidth : e.createSelectorQuery().in(this).select(".lazy-load-".concat(this.uid)).boundingClientRect(function(e) {
                            console.log("得到布局位置信息" + JSON.stringify(e)), t.cdnWidth = e.width;
                        }).exec();
                    },
                    isSupportWebpCheckH5: function() {},
                    lazyLoadImageH5: function() {}
                },
                created: function() {
                    this.isSupportWebpCheckH5();
                },
                mounted: function() {
                    this.getImageOffsetWidth(), this.lazyLoadImageH5();
                },
                destroyed: function() {
                    var e, t;
                    null === (e = this.observer) || void 0 === e || null === (t = e.disconnect) || void 0 === t || t.call(e);
                }
            };
        }.call(this, n(1).default);
    },
    1786: function(e, t, n) {
        n.r(t);
        var i = n(1787), r = n.n(i);
        for (var c in i) [ "default" ].indexOf(c) < 0 && function(e) {
            n.d(t, e, function() {
                return i[e];
            });
        }(c);
        t.default = r.a;
    },
    1787: function(e, t, n) {}
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "components/product/fast-image/index-create-component", {
    "components/product/fast-image/index-create-component": function(e, t, n) {
        n("1").createComponent(n(1780));
    }
}, [ [ "components/product/fast-image/index-create-component" ] ] ]);