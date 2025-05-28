var t = require("../../@babel/runtime/helpers/interopRequireDefault"), e = require("../../@babel/runtime/helpers/typeof"), i = require("../../@babel/runtime/helpers/slicedToArray"), n = t(require("../../@babel/runtime/regenerator")), s = require("../../@babel/runtime/helpers/asyncToGenerator"), r = require("../../@babel/runtime/helpers/createForOfIteratorHelper"), o = require("../../@babel/runtime/helpers/toConsumableArray"), a = function(t, i) {
    if (!i && t && t.__esModule) return t;
    if (null === t || "object" !== e(t) && "function" != typeof t) return {
        default: t
    };
    var n = u(i);
    if (n && n.has(t)) return n.get(t);
    var s = {}, r = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for (var o in t) if ("default" !== o && Object.prototype.hasOwnProperty.call(t, o)) {
        var a = r ? Object.getOwnPropertyDescriptor(t, o) : null;
        a && (a.get || a.set) ? Object.defineProperty(s, o, a) : s[o] = t[o];
    }
    s.default = t, n && n.set(t, s);
    return s;
}(require("./lib/pen")), c = t(require("./lib/downloader")), h = t(require("./lib/wx-canvas"));

function u(t) {
    if ("function" != typeof WeakMap) return null;
    var e = new WeakMap(), i = new WeakMap();
    return (u = function(t) {
        return t ? i : e;
    })(t);
}

var d = require("./lib/util"), l = require("./lib/calc"), p = new c.default();

function f(t, e) {
    String.prototype.toPx = function(n, s) {
        if ("0" === this) return 0;
        var r = /-?[0-9]+(\.[0-9]+)?(rpx|px|%)/, o = function(i) {
            var n = new RegExp(r).exec(i);
            if (!i || !n) return console.error("The size: ".concat(i, " is illegal")), 0;
            var o = n[2], a = parseFloat(i), c = 0;
            return "rpx" === o ? c = Math.round(a * (t || .5) * (e || 1)) : "px" === o ? c = Math.round(a * (e || 1)) : "%" === o && (c = Math.round(a * s / 100)), 
            c;
        }, c = /^calc\((.+)\)$/.exec(this);
        if (c && c[1]) {
            var h = c[1].replace(/([^\s\(\+\-\*\/]+)\.(left|right|bottom|top|width|height)/g, function(t) {
                var e = t.split("."), n = i(e, 2), s = n[0], r = n[1];
                return a.penCache.viewRect[s][r];
            }).replace(new RegExp(r, "g"), o);
            return l(h);
        }
        return o(this);
    };
}

Component({
    canvasWidthInPx: 0,
    canvasHeightInPx: 0,
    canvasNode: null,
    paintCount: 0,
    currentPalette: {},
    outterDisabled: !1,
    isDisabled: !1,
    needClear: !1,
    properties: {
        use2D: {
            type: Boolean
        },
        customStyle: {
            type: String
        },
        customActionStyle: {
            type: Object
        },
        palette: {
            type: Object,
            observer: function(t, e) {
                this.isNeedRefresh(t, e) && (this.paintCount = 0, (0, a.clearPenCache)(), this.startPaint());
            }
        },
        dancePalette: {
            type: Object,
            observer: function(t, e) {
                this.isEmpty(t) || this.properties.use2D || ((0, a.clearPenCache)(), this.initDancePalette(t));
            }
        },
        scaleRatio: {
            type: Number,
            value: 1
        },
        widthPixels: {
            type: Number,
            value: 0
        },
        dirty: {
            type: Boolean,
            value: !1
        },
        LRU: {
            type: Boolean,
            value: !1
        },
        action: {
            type: Object,
            observer: function(t, e) {
                !t || this.isEmpty(t) || this.properties.use2D || this.doAction(t, null, !1, !0);
            }
        },
        disableAction: {
            type: Boolean,
            observer: function(t) {
                this.outterDisabled = t, this.isDisabled = t;
            }
        },
        clearActionBox: {
            type: Boolean,
            observer: function(t) {
                var e = this;
                t && !this.needClear && this.frontContext && (setTimeout(function() {
                    e.frontContext.draw();
                }, 100), this.touchedView = {}, this.prevFindedIndex = this.findedIndex, this.findedIndex = -1), 
                this.needClear = t;
            }
        }
    },
    data: {
        picURL: "",
        showCanvas: !0,
        painterStyle: ""
    },
    methods: {
        isEmpty: function(t) {
            for (var e in t) return !1;
            return !0;
        },
        isNeedRefresh: function(t, e) {
            return !(!t || this.isEmpty(t) || this.data.dirty && d.equal(t, e));
        },
        getBox: function(t, e) {
            var i = {
                type: "rect",
                css: {
                    height: "".concat(t.bottom - t.top, "px"),
                    width: "".concat(t.right - t.left, "px"),
                    left: "".concat(t.left, "px"),
                    top: "".concat(t.top, "px"),
                    borderWidth: "4rpx",
                    borderColor: "#1A7AF8",
                    color: "transparent"
                }
            };
            return "text" === e && (i.css = Object.assign({}, i.css, {
                borderStyle: "dashed"
            })), this.properties.customActionStyle && this.properties.customActionStyle.border && (i.css = Object.assign({}, i.css, this.properties.customActionStyle.border)), 
            Object.assign(i, {
                id: "box"
            }), i;
        },
        getScaleIcon: function(t, e) {
            var i = {}, n = this.properties.customActionStyle;
            return (i = n && n.scale ? {
                type: "image",
                url: "text" === e ? n.scale.textIcon : n.scale.imageIcon,
                css: {
                    height: "".concat(48, "rpx"),
                    width: "".concat(48, "rpx"),
                    borderRadius: "".concat(24, "rpx")
                }
            } : {
                type: "rect",
                css: {
                    height: "".concat(48, "rpx"),
                    width: "".concat(48, "rpx"),
                    borderRadius: "".concat(24, "rpx"),
                    color: "#0000ff"
                }
            }).css = Object.assign({}, i.css, {
                align: "center",
                left: "".concat(t.right + "2rpx".toPx(), "px"),
                top: "".concat("text" === e ? t.top - "2rpx".toPx() - i.css.height.toPx() / 2 : t.bottom - "2rpx".toPx() - i.css.height.toPx() / 2, "px")
            }), Object.assign(i, {
                id: "scale"
            }), i;
        },
        getDeleteIcon: function(t) {
            var e = {}, i = this.properties.customActionStyle;
            return (e = i && i.scale ? {
                type: "image",
                url: i.delete.icon,
                css: {
                    height: "".concat(48, "rpx"),
                    width: "".concat(48, "rpx"),
                    borderRadius: "".concat(24, "rpx")
                }
            } : {
                type: "rect",
                css: {
                    height: "".concat(48, "rpx"),
                    width: "".concat(48, "rpx"),
                    borderRadius: "".concat(24, "rpx"),
                    color: "#0000ff"
                }
            }).css = Object.assign({}, e.css, {
                align: "center",
                left: "".concat(t.left - "2rpx".toPx(), "px"),
                top: "".concat(t.top - "2rpx".toPx() - e.css.height.toPx() / 2, "px")
            }), Object.assign(e, {
                id: "delete"
            }), e;
        },
        doAction: function(t, e, i, n) {
            var s = this;
            if (!this.properties.use2D) {
                var r = null;
                if (t && (r = t.view), r && r.id && this.touchedView.id !== r.id) for (var a = this.currentPalette.views, c = 0; c < a.length; c++) if (a[c].id === r.id) {
                    this.touchedView = a[c], this.findedIndex = c, this.sliceLayers();
                    break;
                }
                var h = this.touchedView;
                h && !this.isEmpty(h) && (r && r.css && (n ? h.css = r.css : Array.isArray(h.css) && Array.isArray(r.css) ? h.css = Object.assign.apply(Object, [ {} ].concat(o(h.css), o(r.css))) : Array.isArray(h.css) ? h.css = Object.assign.apply(Object, [ {} ].concat(o(h.css), [ r.css ])) : Array.isArray(r.css) ? h.css = Object.assign.apply(Object, [ {}, h.css ].concat(o(r.css))) : h.css = Object.assign({}, h.css, r.css)), 
                r && r.rect && (h.rect = r.rect), r && r.url && h.url && r.url !== h.url ? p.download(r.url, this.properties.LRU).then(function(t) {
                    r.url.startsWith("https") && (h.originUrl = r.url), h.url = t, wx.getImageInfo({
                        src: t,
                        success: function(t) {
                            h.sHeight = t.height, h.sWidth = t.width, s.reDraw(h, e, i);
                        },
                        fail: function() {
                            s.reDraw(h, e, i);
                        }
                    });
                }).catch(function(t) {
                    console.error(t), s.reDraw(h, e, i);
                }) : (r && r.text && h.text && r.text !== h.text && (h.text = r.text), r && r.content && h.content && r.content !== h.content && (h.content = r.content), 
                this.reDraw(h, e, i)));
            }
        },
        reDraw: function(t, e, i) {
            var n = this, s = {
                width: this.currentPalette.width,
                height: this.currentPalette.height,
                views: this.isEmpty(t) ? [] : [ t ]
            };
            new a.default(this.globalContext, s).paint(function(t) {
                e && e(t), n.triggerEvent("viewUpdate", {
                    view: n.touchedView
                });
            });
            var r = t.rect, o = t.css, c = t.type;
            this.block = {
                width: this.currentPalette.width,
                height: this.currentPalette.height,
                views: this.isEmpty(t) ? [] : [ this.getBox(r, t.type) ]
            }, o && o.scalable && this.block.views.push(this.getScaleIcon(r, c)), o && o.deletable && this.block.views.push(this.getDeleteIcon(r)), 
            new a.default(this.frontContext, this.block).paint();
        },
        isInView: function(t, e, i) {
            return t > i.left && e > i.top && t < i.right && e < i.bottom;
        },
        isInDelete: function(t, e) {
            var i, n = r(this.block.views);
            try {
                for (n.s(); !(i = n.n()).done; ) {
                    var s = i.value;
                    if ("delete" === s.id) return t > s.rect.left && e > s.rect.top && t < s.rect.right && e < s.rect.bottom;
                }
            } catch (t) {
                n.e(t);
            } finally {
                n.f();
            }
            return !1;
        },
        isInScale: function(t, e) {
            var i, n = r(this.block.views);
            try {
                for (n.s(); !(i = n.n()).done; ) {
                    var s = i.value;
                    if ("scale" === s.id) return t > s.rect.left && e > s.rect.top && t < s.rect.right && e < s.rect.bottom;
                }
            } catch (t) {
                n.e(t);
            } finally {
                n.f();
            }
            return !1;
        },
        touchedView: {},
        findedIndex: -1,
        onClick: function() {
            for (var t = this.startX, e = this.startY, i = [], n = !1, s = -1, r = this.currentPalette.views.length - 1; r >= 0; r--) {
                var o = this.currentPalette.views[r], a = o.rect;
                if (this.touchedView && this.touchedView.id && this.touchedView.id === o.id && this.isInDelete(t, e, a)) {
                    i.length = 0, s = r, n = !0;
                    break;
                }
                this.isInView(t, e, a) && i.push({
                    view: o,
                    index: r
                });
            }
            if (this.touchedView = {}, 0 === i.length) this.findedIndex = -1; else {
                var c = 0, h = i.filter(function(t) {
                    return Boolean(t.view.id);
                });
                if (0 === h.length) this.findedIndex = i[0].index; else {
                    for (c = 0; c < h.length; c++) if (this.findedIndex === h[c].index) {
                        c++;
                        break;
                    }
                    c === h.length && (c = 0), this.touchedView = h[c].view, this.findedIndex = h[c].index, 
                    this.triggerEvent("viewClicked", {
                        view: this.touchedView
                    });
                }
            }
            this.findedIndex < 0 || this.touchedView && !this.touchedView.id ? (this.frontContext.draw(), 
            n ? (this.triggerEvent("touchEnd", {
                view: this.currentPalette.views[s],
                index: s,
                type: "delete"
            }), this.doAction()) : this.findedIndex < 0 && this.triggerEvent("viewClicked", {}), 
            this.findedIndex = -1, this.prevFindedIndex = -1) : this.touchedView && this.touchedView.id && this.sliceLayers();
        },
        sliceLayers: function() {
            var t = this.currentPalette.views.slice(0, this.findedIndex), e = this.currentPalette.views.slice(this.findedIndex + 1), i = {
                width: this.currentPalette.width,
                height: this.currentPalette.height,
                background: this.currentPalette.background,
                views: t
            }, n = {
                width: this.currentPalette.width,
                height: this.currentPalette.height,
                views: e
            };
            this.prevFindedIndex < this.findedIndex ? (new a.default(this.bottomContext, i).paint(), 
            this.doAction(), new a.default(this.topContext, n).paint()) : (new a.default(this.topContext, n).paint(), 
            this.doAction(), new a.default(this.bottomContext, i).paint()), this.prevFindedIndex = this.findedIndex;
        },
        startX: 0,
        startY: 0,
        startH: 0,
        startW: 0,
        isScale: !1,
        startTimeStamp: 0,
        onTouchStart: function(t) {
            if (!this.isDisabled) {
                var e = t.touches[0], i = e.x, n = e.y;
                if (this.startX = i, this.startY = n, this.startTimeStamp = new Date().getTime(), 
                this.touchedView && !this.isEmpty(this.touchedView)) {
                    var s = this.touchedView.rect;
                    this.isInScale(i, n, s) ? (this.isScale = !0, this.startH = s.bottom - s.top, this.startW = s.right - s.left) : this.isScale = !1;
                } else this.isScale = !1;
            }
        },
        onTouchEnd: function(t) {
            this.isDisabled || (new Date().getTime() - this.startTimeStamp <= 500 && !this.hasMove ? !this.isScale && this.onClick(t) : this.touchedView && !this.isEmpty(this.touchedView) && this.triggerEvent("touchEnd", {
                view: this.touchedView
            }), this.hasMove = !1);
        },
        onTouchCancel: function(t) {
            this.isDisabled || this.onTouchEnd(t);
        },
        hasMove: !1,
        onTouchMove: function(t) {
            if (!this.isDisabled && (this.hasMove = !0, this.touchedView && (!this.touchedView || this.touchedView.id))) {
                var e = t.touches[0], i = e.x, n = e.y, s = i - this.startX, r = n - this.startY, o = this.touchedView, c = o.rect, h = o.type, u = {};
                if (this.isScale) {
                    (0, a.clearPenCache)(this.touchedView.id);
                    var d = this.startW + s > 1 ? this.startW + s : 1;
                    if (this.touchedView.css && this.touchedView.css.minWidth && d < this.touchedView.css.minWidth.toPx()) return;
                    if (this.touchedView.rect && this.touchedView.rect.minWidth && d < this.touchedView.rect.minWidth) return;
                    var l = this.startH + r > 1 ? this.startH + r : 1;
                    u = {
                        width: "".concat(d, "px")
                    }, "text" !== h && (u.height = "".concat("image" === h ? d * this.startH / this.startW : l, "px"));
                } else this.startX = i, this.startY = n, u = {
                    left: "".concat(c.x + s, "px"),
                    top: "".concat(c.y + r, "px"),
                    right: void 0,
                    bottom: void 0
                };
                this.doAction({
                    view: {
                        css: u
                    }
                }, null, !this.isScale);
            }
        },
        initScreenK: function() {
            if (!(getApp() && getApp().systemInfo && getApp().systemInfo.screenWidth)) try {
                getApp().systemInfo = wx.getSystemInfoSync();
            } catch (t) {
                return void console.error("Painter get system info failed, ".concat(JSON.stringify(t)));
            }
            this.screenK = .5, getApp() && getApp().systemInfo && getApp().systemInfo.screenWidth && (this.screenK = getApp().systemInfo.screenWidth / 750), 
            f(this.screenK, this.properties.scaleRatio);
        },
        initDancePalette: function() {
            var t = this;
            this.properties.use2D || (this.isDisabled = !0, this.initScreenK(), this.downloadImages(this.properties.dancePalette).then(function() {
                var e = s(n.default.mark(function e(i) {
                    var s, r;
                    return n.default.wrap(function(e) {
                        for (;;) switch (e.prev = e.next) {
                          case 0:
                            if (t.currentPalette = i, s = i.width, r = i.height, s && r) {
                                e.next = 5;
                                break;
                            }
                            return console.error("You should set width and height correctly for painter, width: ".concat(s, ", height: ").concat(r)), 
                            e.abrupt("return");

                          case 5:
                            if (t.setData({
                                painterStyle: "width:".concat(s.toPx(), "px;height:").concat(r.toPx(), "px;")
                            }), e.t0 = t.frontContext, e.t0) {
                                e.next = 11;
                                break;
                            }
                            return e.next = 10, t.getCanvasContext(t.properties.use2D, "front");

                          case 10:
                            t.frontContext = e.sent;

                          case 11:
                            if (e.t1 = t.bottomContext, e.t1) {
                                e.next = 16;
                                break;
                            }
                            return e.next = 15, t.getCanvasContext(t.properties.use2D, "bottom");

                          case 15:
                            t.bottomContext = e.sent;

                          case 16:
                            if (e.t2 = t.topContext, e.t2) {
                                e.next = 21;
                                break;
                            }
                            return e.next = 20, t.getCanvasContext(t.properties.use2D, "top");

                          case 20:
                            t.topContext = e.sent;

                          case 21:
                            if (e.t3 = t.globalContext, e.t3) {
                                e.next = 26;
                                break;
                            }
                            return e.next = 25, t.getCanvasContext(t.properties.use2D, "k-canvas");

                          case 25:
                            t.globalContext = e.sent;

                          case 26:
                            new a.default(t.bottomContext, i, t.properties.use2D).paint(function() {
                                t.isDisabled = !1, t.isDisabled = t.outterDisabled, t.triggerEvent("didShow");
                            }), t.globalContext.draw(), t.frontContext.draw(), t.topContext.draw();

                          case 30:
                          case "end":
                            return e.stop();
                        }
                    }, e);
                }));
                return function(t) {
                    return e.apply(this, arguments);
                };
            }()), this.touchedView = {});
        },
        startPaint: function() {
            this.initScreenK();
            var t = this.properties.palette, e = t.width, i = t.height;
            if (e && i) {
                var r = !1;
                e.toPx() !== this.canvasWidthInPx && (this.canvasWidthInPx = e.toPx(), r = this.properties.use2D), 
                this.properties.widthPixels && (f(this.screenK, this.properties.widthPixels / this.canvasWidthInPx), 
                this.canvasWidthInPx = this.properties.widthPixels), this.canvasHeightInPx !== i.toPx() && (this.canvasHeightInPx = i.toPx(), 
                r = r || this.properties.use2D), this.setData({
                    photoStyle: "width:".concat(this.canvasWidthInPx, "px;height:").concat(this.canvasHeightInPx, "px;")
                }, function() {
                    var t = this;
                    this.downloadImages(this.properties.palette).then(function() {
                        var e = s(n.default.mark(function e(i) {
                            var s;
                            return n.default.wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                  case 0:
                                    if (t.photoContext) {
                                        e.next = 4;
                                        break;
                                    }
                                    return e.next = 3, t.getCanvasContext(t.properties.use2D, "photo");

                                  case 3:
                                    t.photoContext = e.sent;

                                  case 4:
                                    r && (s = getApp().systemInfo.pixelRatio, t.photoContext.width = t.canvasWidthInPx * s, 
                                    t.photoContext.height = t.canvasHeightInPx * s, t.photoContext.scale(s, s)), new a.default(t.photoContext, i).paint(function() {
                                        t.saveImgToLocal();
                                    }), f(t.screenK, t.properties.scaleRatio);

                                  case 7:
                                  case "end":
                                    return e.stop();
                                }
                            }, e);
                        }));
                        return function(t) {
                            return e.apply(this, arguments);
                        };
                    }());
                });
            } else console.error("You should set width and height correctly for painter, width: ".concat(e, ", height: ").concat(i));
        },
        downloadImages: function(t) {
            var e = this;
            return new Promise(function(i, n) {
                var s = 0, o = 0, a = JSON.parse(JSON.stringify(t));
                if (a.background && (s++, p.download(a.background, e.properties.LRU).then(function(t) {
                    a.background = t, o++, s === o && i(a);
                }, function() {
                    o++, s === o && i(a);
                })), a.views) {
                    var c, h = r(a.views);
                    try {
                        var u = function() {
                            var t = c.value;
                            t && "image" === t.type && t.url && (s++, p.download(t.url, e.properties.LRU).then(function(e) {
                                t.originUrl = t.url, t.url = e, wx.getImageInfo({
                                    src: e,
                                    success: function(e) {
                                        t.sWidth = e.width, t.sHeight = e.height;
                                    },
                                    fail: function(e) {
                                        console.warn("getImageInfo ".concat(t.originUrl, " failed, ").concat(JSON.stringify(e))), 
                                        t.url = "";
                                    },
                                    complete: function() {
                                        o++, s === o && i(a);
                                    }
                                });
                            }, function() {
                                o++, s === o && i(a);
                            }));
                        };
                        for (h.s(); !(c = h.n()).done; ) u();
                    } catch (t) {
                        h.e(t);
                    } finally {
                        h.f();
                    }
                }
                0 === s && i(a);
            });
        },
        saveImgToLocal: function() {
            var t = this, e = this;
            setTimeout(function() {
                wx.canvasToTempFilePath({
                    canvasId: "photo",
                    canvas: e.properties.use2D ? e.canvasNode : null,
                    destWidth: e.canvasWidthInPx,
                    destHeight: e.canvasHeightInPx,
                    success: function(t) {
                        e.getImageInfo(t.tempFilePath);
                    },
                    fail: function(t) {
                        console.error("canvasToTempFilePath failed, ".concat(JSON.stringify(t))), e.triggerEvent("imgErr", {
                            error: t
                        });
                    }
                }, t);
            }, 300);
        },
        getCanvasContext: function(t, e) {
            var i = this;
            return new Promise(function(n) {
                if (t) {
                    var s = wx.createSelectorQuery().in(i), r = "#".concat(e);
                    s.select(r).fields({
                        node: !0,
                        size: !0
                    }).exec(function(t) {
                        i.canvasNode = t[0].node;
                        var s = i.canvasNode.getContext("2d"), r = new h.default("2d", s, e, !0, i.canvasNode);
                        n(r);
                    });
                } else {
                    var o = wx.createCanvasContext(e, i);
                    n(new h.default("mina", o, e, !0));
                }
            });
        },
        getImageInfo: function(t) {
            var e = this;
            wx.getImageInfo({
                src: t,
                success: function(i) {
                    if (e.paintCount > 5) {
                        var n = "The result is always fault, even we tried ".concat(5, " times");
                        return console.error(n), void e.triggerEvent("imgErr", {
                            error: n
                        });
                    }
                    Math.abs((i.width * e.canvasHeightInPx - e.canvasWidthInPx * i.height) / (i.height * e.canvasHeightInPx)) < .01 ? e.triggerEvent("imgOK", {
                        path: t
                    }) : e.startPaint(), e.paintCount++;
                },
                fail: function(t) {
                    console.error("getImageInfo failed, ".concat(JSON.stringify(t))), e.triggerEvent("imgErr", {
                        error: t
                    });
                }
            });
        }
    }
});