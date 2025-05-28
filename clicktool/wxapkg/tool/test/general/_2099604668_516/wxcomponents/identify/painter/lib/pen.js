Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = exports.clearPenCache = exports.penCache = void 0;

var t = require("../../../../@babel/runtime/helpers/toConsumableArray"), e = require("../../../../@babel/runtime/helpers/createForOfIteratorHelper"), s = require("../../../../@babel/runtime/helpers/classCallCheck"), i = require("../../../../@babel/runtime/helpers/createClass"), r = require("./qrcode.js"), h = require("./gradient.js"), c = /[^\u0020-\u007E\u00A0-\u00BE\u2E80-\uA4CF\uF900-\uFAFF\uFE30-\uFE4F\uFF00-\uFFEF\u0080-\u009F\u2000-\u201f\u2026\u2022\u20ac\r\n]$/, o = {
    viewRect: {},
    textLines: {}
};

exports.penCache = o;

exports.clearPenCache = function(t) {
    t ? (o.viewRect[t] = null, o.textLines[t] = null) : (o.viewRect = {}, o.textLines = {});
};

var a = function() {
    function a(t, e) {
        s(this, a), this.ctx = t, this.data = e;
    }
    return i(a, [ {
        key: "paint",
        value: function(t) {
            this.style = {
                width: this.data.width.toPx(),
                height: this.data.height.toPx()
            }, this._background();
            var s, i = e(this.data.views);
            try {
                for (i.s(); !(s = i.n()).done; ) {
                    var r = s.value;
                    this._drawAbsolute(r);
                }
            } catch (t) {
                i.e(t);
            } finally {
                i.f();
            }
            this.ctx.draw(!1, function() {
                t && t();
            });
        }
    }, {
        key: "_background",
        value: function() {
            this.ctx.save();
            var t = this.style, e = t.width, s = t.height, i = this.data.background;
            this.ctx.translate(e / 2, s / 2), this._doClip(this.data.borderRadius, e, s), i ? i.startsWith("#") || i.startsWith("rgba") || "transparent" === i.toLowerCase() ? (this.ctx.fillStyle = i, 
            this.ctx.fillRect(-e / 2, -s / 2, e, s)) : h.api.isGradient(i) ? (h.api.doGradient(i, e, s, this.ctx), 
            this.ctx.fillRect(-e / 2, -s / 2, e, s)) : this.ctx.drawImage(i, -e / 2, -s / 2, e, s) : (this.ctx.fillStyle = "transparent", 
            this.ctx.fillRect(-e / 2, -s / 2, e, s)), this.ctx.restore();
        }
    }, {
        key: "_drawAbsolute",
        value: function(e) {
            if (e && e.type) switch (e.css && e.css.length && (e.css = Object.assign.apply(Object, t(e.css))), 
            e.type) {
              case "image":
                this._drawAbsImage(e);
                break;

              case "text":
                this._fillAbsText(e);
                break;

              case "rect":
                this._drawAbsRect(e);
                break;

              case "qrcode":
                this._drawQRCode(e);
            }
        }
    }, {
        key: "_border",
        value: function(t) {
            var e = t.borderRadius, s = void 0 === e ? 0 : e, i = t.width, r = t.height, h = t.borderWidth, c = void 0 === h ? 0 : h, o = t.borderStyle, a = void 0 === o ? "solid" : o, l = 0, n = 0, d = 0, x = 0, u = Math.min(i, r);
            if (s) {
                var g = s.split(/\s+/);
                4 === g.length ? (l = Math.min(g[0].toPx(!1, u), i / 2, r / 2), n = Math.min(g[1].toPx(!1, u), i / 2, r / 2), 
                d = Math.min(g[2].toPx(!1, u), i / 2, r / 2), x = Math.min(g[3].toPx(!1, u), i / 2, r / 2)) : l = n = d = x = Math.min(s && s.toPx(!1, u), i / 2, r / 2);
            }
            var f = c && c.toPx(!1, u);
            this.ctx.lineWidth = f, "dashed" === a ? this.ctx.setLineDash([ 4 * f / 3, 4 * f / 3 ]) : "dotted" === a && this.ctx.setLineDash([ f, f ]);
            var v = "solid" !== a;
            this.ctx.beginPath(), v && 0 === l && this.ctx.moveTo(-i / 2 - f, -r / 2 - f / 2), 
            0 !== l && this.ctx.arc(-i / 2 + l, -r / 2 + l, l + f / 2, 1 * Math.PI, 1.5 * Math.PI), 
            this.ctx.lineTo(0 === n ? v ? i / 2 : i / 2 + f / 2 : i / 2 - n, -r / 2 - f / 2), 
            v && 0 === n && this.ctx.moveTo(i / 2 + f / 2, -r / 2 - f), 0 !== n && this.ctx.arc(i / 2 - n, -r / 2 + n, n + f / 2, 1.5 * Math.PI, 2 * Math.PI), 
            this.ctx.lineTo(i / 2 + f / 2, 0 === d ? v ? r / 2 : r / 2 + f / 2 : r / 2 - d), 
            v && 0 === d && this.ctx.moveTo(i / 2 + f, r / 2 + f / 2), 0 !== d && this.ctx.arc(i / 2 - d, r / 2 - d, d + f / 2, 0, .5 * Math.PI), 
            this.ctx.lineTo(0 === x ? v ? -i / 2 : -i / 2 - f / 2 : -i / 2 + x, r / 2 + f / 2), 
            v && 0 === x && this.ctx.moveTo(-i / 2 - f / 2, r / 2 + f), 0 !== x && this.ctx.arc(-i / 2 + x, r / 2 - x, x + f / 2, .5 * Math.PI, 1 * Math.PI), 
            this.ctx.lineTo(-i / 2 - f / 2, 0 === l ? v ? -r / 2 : -r / 2 - f / 2 : -r / 2 + l), 
            v && 0 === l && this.ctx.moveTo(-i / 2 - f, -r / 2 - f / 2), v || this.ctx.closePath();
        }
    }, {
        key: "_doClip",
        value: function(t, e, s, i) {
            t && e && s && (this.ctx.globalAlpha = 0, this.ctx.fillStyle = "white", this._border({
                borderRadius: t,
                width: e,
                height: s,
                borderStyle: i
            }), this.ctx.fill(), getApp().systemInfo && getApp().systemInfo.version <= "6.6.6" && "ios" === getApp().systemInfo.platform || this.ctx.clip(), 
            this.ctx.globalAlpha = 1);
        }
    }, {
        key: "_doBorder",
        value: function(t, e, s) {
            if (t.css) {
                var i = t.css, r = i.borderRadius, h = i.borderWidth, c = i.borderColor, o = i.borderStyle;
                h && (this.ctx.save(), this._preProcess(t, !0), this.ctx.strokeStyle = c || "black", 
                this._border({
                    borderRadius: r,
                    width: e,
                    height: s,
                    borderWidth: h,
                    borderStyle: o
                }), this.ctx.stroke(), this.ctx.restore());
            }
        }
    }, {
        key: "_preProcess",
        value: function(t, e) {
            var s, i, r, h, c = 0, a = this._doPaddings(t);
            switch (t.type) {
              case "text":
                for (var l = String(t.text).split("\n"), n = 0; n < l.length; ++n) "" === l[n] && (l[n] = " ");
                var d = t.css.fontWeight || "400", x = t.css.textStyle || "normal";
                t.css.fontSize || (t.css.fontSize = "20rpx"), this.ctx.font = "".concat(x, " ").concat(d, " ").concat(t.css.fontSize.toPx(), 'px "').concat(t.css.fontFamily || "sans-serif", '"');
                for (var u = 0, g = [], f = 0; f < l.length; ++f) {
                    var v = this.ctx.measureText(l[f]).width, b = t.css.fontSize.toPx() + a[1] + a[3], p = t.css.width ? t.css.width.toPx(!1, this.style.width) - a[1] - a[3] : v;
                    p < b && (p = b);
                    var y = Math.ceil(v / p);
                    c = p > c ? p : c, u += y, g[f] = y;
                }
                u = t.css.maxLines < u ? t.css.maxLines : u;
                var w = t.css.lineHeight ? t.css.lineHeight.toPx() : t.css.fontSize.toPx();
                s = w * u, i = {
                    lines: u,
                    lineHeight: w,
                    textArray: l,
                    linesArray: g
                };
                break;

              case "image":
                var P = getApp().systemInfo.pixelRatio ? getApp().systemInfo.pixelRatio : 2;
                t.css && (t.css.width || (t.css.width = "auto"), t.css.height || (t.css.height = "auto")), 
                !t.css || "auto" === t.css.width && "auto" === t.css.height ? (c = Math.round(t.sWidth / P), 
                s = Math.round(t.sHeight / P)) : "auto" === t.css.width ? (s = t.css.height.toPx(!1, this.style.height), 
                c = t.sWidth / t.sHeight * s) : "auto" === t.css.height ? (c = t.css.width.toPx(!1, this.style.width), 
                s = t.sHeight / t.sWidth * c) : (c = t.css.width.toPx(!1, this.style.width), s = t.css.height.toPx(!1, this.style.height));
                break;

              default:
                if (!t.css.width || !t.css.height) return void console.error("You should set width and height");
                c = t.css.width.toPx(!1, this.style.width), s = t.css.height.toPx(!1, this.style.height);
            }
            if (t.css && t.css.right) if ("string" == typeof t.css.right) r = this.style.width - t.css.right.toPx(!0, this.style.width); else {
                var m = t.css.right;
                r = this.style.width - m[0].toPx(!0, this.style.width) - o.viewRect[m[1]].width * (m[2] || 1);
            } else if (t.css && t.css.left) if ("string" == typeof t.css.left) r = t.css.left.toPx(!0, this.style.width); else {
                var k = t.css.left;
                r = k[0].toPx(!0, this.style.width) + o.viewRect[k[1]].width * (k[2] || 1);
            } else r = 0;
            if (t.css && t.css.bottom) h = this.style.height - s - t.css.bottom.toPx(!0, this.style.height); else if (t.css && t.css.top) if ("string" == typeof t.css.top) h = t.css.top.toPx(!0, this.style.height); else {
                var _ = t.css.top;
                h = _[0].toPx(!0, this.style.height) + o.viewRect[_[1]].height * (_[2] || 1);
            } else h = 0;
            var T = t.css && t.css.rotate ? this._getAngle(t.css.rotate) : 0, S = t.css && t.css.align ? t.css.align : t.css && t.css.right ? "right" : "left", A = t.css && t.css.verticalAlign ? t.css.verticalAlign : "top", R = 0;
            switch (S) {
              case "center":
                R = r;
                break;

              case "right":
                R = r - c / 2;
                break;

              default:
                R = r + c / 2;
            }
            var W = 0;
            switch (A) {
              case "center":
                W = h;
                break;

              case "bottom":
                W = h - s / 2;
                break;

              default:
                W = h + s / 2;
            }
            this.ctx.translate(R, W);
            var I = r;
            "center" === S ? I = r - c / 2 : "right" === S && (I = r - c);
            var M = h;
            return "center" === A ? M = h - s / 2 : "bottom" === A && (M = h - s), t.rect ? (t.rect.left = I, 
            t.rect.top = M, t.rect.right = I + c, t.rect.bottom = M + s, t.rect.x = t.css && t.css.right ? r - c : r, 
            t.rect.y = h) : t.rect = {
                left: I,
                top: M,
                right: I + c,
                bottom: M + s,
                x: t.css && t.css.right ? r - c : r,
                y: h
            }, t.rect.left = t.rect.left - a[3], t.rect.top = t.rect.top - a[0], t.rect.right = t.rect.right + a[1], 
            t.rect.bottom = t.rect.bottom + a[2], "text" === t.type && (t.rect.minWidth = t.css.fontSize.toPx() + a[1] + a[3]), 
            this.ctx.rotate(T), !e && t.css && t.css.borderRadius && "rect" !== t.type && this._doClip(t.css.borderRadius, c, s, t.css.borderStyle), 
            this._doShadow(t), t.id && (o.viewRect[t.id] = {
                width: c,
                height: s,
                left: t.rect.left,
                top: t.rect.top,
                right: t.rect.right,
                bottom: t.rect.bottom
            }), {
                width: c,
                height: s,
                x: r,
                y: h,
                extra: i
            };
        }
    }, {
        key: "_doPaddings",
        value: function(t) {
            var e = (t.css ? t.css : {}).padding, s = [ 0, 0, 0, 0 ];
            if (e) {
                var i = e.split(/\s+/);
                if (1 === i.length) {
                    var r = i[0].toPx();
                    s = [ r, r, r, r ];
                }
                if (2 === i.length) {
                    var h = i[0].toPx(), c = i[1].toPx();
                    s = [ h, c, h, c ];
                }
                if (3 === i.length) {
                    var o = i[0].toPx(), a = i[1].toPx();
                    s = [ o, a, i[2].toPx(), a ];
                }
                if (4 === i.length) s = [ i[0].toPx(), i[1].toPx(), i[2].toPx(), i[3].toPx() ];
            }
            return s;
        }
    }, {
        key: "_doBackground",
        value: function(t) {
            this.ctx.save();
            var e = this._preProcess(t, !0), s = e.width, i = e.height, r = t.css.background, c = this._doPaddings(t), o = s + c[1] + c[3], a = i + c[0] + c[2];
            this._doClip(t.css.borderRadius, o, a, t.css.borderStyle), h.api.isGradient(r) ? h.api.doGradient(r, o, a, this.ctx) : this.ctx.fillStyle = r, 
            this.ctx.fillRect(-o / 2, -a / 2, o, a), this.ctx.restore();
        }
    }, {
        key: "_drawQRCode",
        value: function(t) {
            this.ctx.save();
            var e = this._preProcess(t), s = e.width, i = e.height;
            r.api.draw(t.content, this.ctx, -s / 2, -i / 2, s, i, t.css.background, t.css.color), 
            this.ctx.restore(), this._doBorder(t, s, i);
        }
    }, {
        key: "_drawAbsImage",
        value: function(t) {
            if (t.url) {
                this.ctx.save();
                var e = this._preProcess(t), s = e.width, i = e.height, r = t.sWidth, h = t.sHeight, c = 0, o = 0, a = s / i;
                a >= t.sWidth / t.sHeight ? (h = r / a, o = Math.round((t.sHeight - h) / 2)) : (r = h * a, 
                c = Math.round((t.sWidth - r) / 2)), t.css && "scaleToFill" === t.css.mode ? this.ctx.drawImage(t.url, -s / 2, -i / 2, s, i) : (this.ctx.drawImage(t.url, c, o, r, h, -s / 2, -i / 2, s, i), 
                t.rect.startX = c / t.sWidth, t.rect.startY = o / t.sHeight, t.rect.endX = (c + r) / t.sWidth, 
                t.rect.endY = (o + h) / t.sHeight), this.ctx.restore(), this._doBorder(t, s, i);
            }
        }
    }, {
        key: "_fillAbsText",
        value: function(s) {
            if (s.text) {
                s.css.background && this._doBackground(s), this.ctx.save();
                var i = this._preProcess(s, s.css.background && s.css.borderRadius), r = i.width, h = i.height, a = i.extra;
                if (this.ctx.fillStyle = s.css.color || "black", s.id && o.textLines[s.id]) {
                    this.ctx.textAlign = s.css.textAlign ? s.css.textAlign : "left";
                    var l, n = e(o.textLines[s.id]);
                    try {
                        for (n.s(); !(l = n.n()).done; ) {
                            var d = l.value, x = d.measuredWith, u = d.text, g = d.x, f = d.y, v = d.textDecoration;
                            if ("stroke" === s.css.textStyle ? this.ctx.strokeText(u, g, f, x) : this.ctx.fillText(u, g, f, x), 
                            v) {
                                var b, p, y = s.css.fontSize.toPx();
                                this.ctx.lineWidth = y / 13, this.ctx.beginPath(), (b = this.ctx).moveTo.apply(b, t(v.moveTo)), 
                                (p = this.ctx).lineTo.apply(p, t(v.lineTo)), this.ctx.closePath(), this.ctx.strokeStyle = s.css.color, 
                                this.ctx.stroke();
                            }
                        }
                    } catch (t) {
                        n.e(t);
                    } finally {
                        n.f();
                    }
                } else {
                    var w = a.lines, P = a.lineHeight, m = a.textArray, k = a.linesArray;
                    if (s.id) {
                        for (var _ = 0, T = 0; T < m.length; ++T) {
                            var S = this.ctx.measureText(m[T]).width;
                            _ = S > _ ? S : _;
                        }
                        o.viewRect[s.id].width = r ? _ < r ? _ : r : _;
                    }
                    for (var A = 0, R = 0; R < m.length; ++R) for (var W = Math.ceil(m[R].length / k[R]), I = 0, M = 0, C = 0; C < k[R] && !(A >= w); ++C) {
                        M = W;
                        for (var F = m[R].substr(I, M), H = this.ctx.measureText(F).width; I + M <= m[R].length && (r - H > s.css.fontSize.toPx() || H - r > s.css.fontSize.toPx()); ) {
                            if (H < r) F = m[R].substr(I, ++M), c.test(F) && (F = m[R].substr(I, ++M)); else {
                                if (F.length <= 1) break;
                                F = m[R].substr(I, --M), c.test(F) && (F = m[R].substr(I, --M));
                            }
                            H = this.ctx.measureText(F).width;
                        }
                        if (I += F.length, A === w - 1 && (R < m.length - 1 || I < m[R].length)) {
                            for (;this.ctx.measureText("".concat(F, "...")).width > r && !(F.length <= 1); ) F = F.substring(0, F.length - (c.test(F) ? 2 : 1));
                            F += "...", H = this.ctx.measureText(F).width;
                        }
                        this.ctx.textAlign = s.css.textAlign ? s.css.textAlign : "left";
                        var L = void 0, z = void 0;
                        switch (s.css.textAlign) {
                          case "center":
                            z = (L = 0) - H / 2;
                            break;

                          case "right":
                            z = (L = r / 2) - H;
                            break;

                          default:
                            z = L = -r / 2;
                        }
                        var B = -h / 2 + (0 === A ? s.css.fontSize.toPx() : s.css.fontSize.toPx() + A * P);
                        A++, "stroke" === s.css.textStyle ? this.ctx.strokeText(F, L, B, H) : this.ctx.fillText(F, L, B, H);
                        var D = s.css.fontSize.toPx(), q = void 0;
                        s.css.textDecoration && (this.ctx.lineWidth = D / 13, this.ctx.beginPath(), /\bunderline\b/.test(s.css.textDecoration) && (this.ctx.moveTo(z, B), 
                        this.ctx.lineTo(z + H, B), q = {
                            moveTo: [ z, B ],
                            lineTo: [ z + H, B ]
                        }), /\boverline\b/.test(s.css.textDecoration) && (this.ctx.moveTo(z, B - D), this.ctx.lineTo(z + H, B - D), 
                        q = {
                            moveTo: [ z, B - D ],
                            lineTo: [ z + H, B - D ]
                        }), /\bline-through\b/.test(s.css.textDecoration) && (this.ctx.moveTo(z, B - D / 3), 
                        this.ctx.lineTo(z + H, B - D / 3), q = {
                            moveTo: [ z, B - D / 3 ],
                            lineTo: [ z + H, B - D / 3 ]
                        }), this.ctx.closePath(), this.ctx.strokeStyle = s.css.color, this.ctx.stroke()), 
                        s.id && (o.textLines[s.id] ? o.textLines[s.id].push({
                            text: F,
                            x: L,
                            y: B,
                            measuredWith: H,
                            textDecoration: q
                        }) : o.textLines[s.id] = [ {
                            text: F,
                            x: L,
                            y: B,
                            measuredWith: H,
                            textDecoration: q
                        } ]);
                    }
                }
                this.ctx.restore(), this._doBorder(s, r, h);
            }
        }
    }, {
        key: "_drawAbsRect",
        value: function(t) {
            this.ctx.save();
            var e = this._preProcess(t), s = e.width, i = e.height;
            h.api.isGradient(t.css.color) ? h.api.doGradient(t.css.color, s, i, this.ctx) : this.ctx.fillStyle = t.css.color;
            var r = t.css, c = r.borderRadius, o = r.borderStyle, a = r.borderWidth;
            this._border({
                borderRadius: c,
                width: s,
                height: i,
                borderWidth: a,
                borderStyle: o
            }), this.ctx.fill(), this.ctx.restore(), this._doBorder(t, s, i);
        }
    }, {
        key: "_doShadow",
        value: function(t) {
            if (t.css && t.css.shadow) {
                var e = t.css.shadow.replace(/,\s+/g, ",").split(/\s+/);
                e.length > 4 ? console.error("shadow don't spread option") : (this.ctx.shadowOffsetX = parseInt(e[0], 10), 
                this.ctx.shadowOffsetY = parseInt(e[1], 10), this.ctx.shadowBlur = parseInt(e[2], 10), 
                this.ctx.shadowColor = e[3]);
            }
        }
    }, {
        key: "_getAngle",
        value: function(t) {
            return Number(t) * Math.PI / 180;
        }
    } ]), a;
}();

exports.default = a;