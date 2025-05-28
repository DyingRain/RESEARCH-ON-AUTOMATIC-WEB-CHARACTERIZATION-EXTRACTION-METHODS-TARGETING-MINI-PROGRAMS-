var t = require("../../../@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = void 0;

var e = t(require("../../../@babel/runtime/regenerator")), a = require("../../../@babel/runtime/helpers/createForOfIteratorHelper"), n = require("../../../@babel/runtime/helpers/asyncToGenerator"), s = require("../../../@babel/runtime/helpers/toConsumableArray"), i = require("../../../@babel/runtime/helpers/classCallCheck"), r = require("../../../@babel/runtime/helpers/createClass"), o = function() {
    function t(e, a, n, s, r) {
        i(this, t), this.ctx = a, this.canvasId = n, this.stepList = [], this.canvasPrototype = {}, 
        this.type = e, s && (this.canvasNode = r || {});
    }
    var o;
    return r(t, [ {
        key: "width",
        get: function() {
            return this.canvasNode ? this.canvasNode.width : 0;
        },
        set: function(t) {
            this.canvasNode && (this.canvasNode.width = t);
        }
    }, {
        key: "height",
        get: function() {
            return this.canvasNode ? this.canvasNode.height : 0;
        },
        set: function(t) {
            this.canvasNode && (this.canvasNode.height = t);
        }
    }, {
        key: "lineWidth",
        get: function() {
            return this.canvasPrototype.lineWidth;
        },
        set: function(t) {
            this.canvasPrototype.lineWidth = t, this.stepList.push({
                action: "lineWidth",
                args: t,
                actionType: "set"
            });
        }
    }, {
        key: "lineCap",
        get: function() {
            return this.canvasPrototype.lineCap;
        },
        set: function(t) {
            this.canvasPrototype.lineCap = t, this.stepList.push({
                action: "lineCap",
                args: t,
                actionType: "set"
            });
        }
    }, {
        key: "lineJoin",
        get: function() {
            return this.canvasPrototype.lineJoin;
        },
        set: function(t) {
            this.canvasPrototype.lineJoin = t, this.stepList.push({
                action: "lineJoin",
                args: t,
                actionType: "set"
            });
        }
    }, {
        key: "miterLimit",
        get: function() {
            return this.canvasPrototype.miterLimit;
        },
        set: function(t) {
            this.canvasPrototype.miterLimit = t, this.stepList.push({
                action: "miterLimit",
                args: t,
                actionType: "set"
            });
        }
    }, {
        key: "lineDashOffset",
        get: function() {
            return this.canvasPrototype.lineDashOffset;
        },
        set: function(t) {
            this.canvasPrototype.lineDashOffset = t, this.stepList.push({
                action: "lineDashOffset",
                args: t,
                actionType: "set"
            });
        }
    }, {
        key: "font",
        get: function() {
            return this.canvasPrototype.font;
        },
        set: function(t) {
            this.canvasPrototype.font = t, this.ctx.font = t, this.stepList.push({
                action: "font",
                args: t,
                actionType: "set"
            });
        }
    }, {
        key: "textAlign",
        get: function() {
            return this.canvasPrototype.textAlign;
        },
        set: function(t) {
            this.canvasPrototype.textAlign = t, this.stepList.push({
                action: "textAlign",
                args: t,
                actionType: "set"
            });
        }
    }, {
        key: "textBaseline",
        get: function() {
            return this.canvasPrototype.textBaseline;
        },
        set: function(t) {
            this.canvasPrototype.textBaseline = t, this.stepList.push({
                action: "textBaseline",
                args: t,
                actionType: "set"
            });
        }
    }, {
        key: "fillStyle",
        get: function() {
            return this.canvasPrototype.fillStyle;
        },
        set: function(t) {
            this.canvasPrototype.fillStyle = t, this.stepList.push({
                action: "fillStyle",
                args: t,
                actionType: "set"
            });
        }
    }, {
        key: "strokeStyle",
        get: function() {
            return this.canvasPrototype.strokeStyle;
        },
        set: function(t) {
            this.canvasPrototype.strokeStyle = t, this.stepList.push({
                action: "strokeStyle",
                args: t,
                actionType: "set"
            });
        }
    }, {
        key: "globalAlpha",
        get: function() {
            return this.canvasPrototype.globalAlpha;
        },
        set: function(t) {
            this.canvasPrototype.globalAlpha = t, this.stepList.push({
                action: "globalAlpha",
                args: t,
                actionType: "set"
            });
        }
    }, {
        key: "globalCompositeOperation",
        get: function() {
            return this.canvasPrototype.globalCompositeOperation;
        },
        set: function(t) {
            this.canvasPrototype.globalCompositeOperation = t, this.stepList.push({
                action: "globalCompositeOperation",
                args: t,
                actionType: "set"
            });
        }
    }, {
        key: "shadowColor",
        get: function() {
            return this.canvasPrototype.shadowColor;
        },
        set: function(t) {
            this.canvasPrototype.shadowColor = t, this.stepList.push({
                action: "shadowColor",
                args: t,
                actionType: "set"
            });
        }
    }, {
        key: "shadowOffsetX",
        get: function() {
            return this.canvasPrototype.shadowOffsetX;
        },
        set: function(t) {
            this.canvasPrototype.shadowOffsetX = t, this.stepList.push({
                action: "shadowOffsetX",
                args: t,
                actionType: "set"
            });
        }
    }, {
        key: "shadowOffsetY",
        get: function() {
            return this.canvasPrototype.shadowOffsetY;
        },
        set: function(t) {
            this.canvasPrototype.shadowOffsetY = t, this.stepList.push({
                action: "shadowOffsetY",
                args: t,
                actionType: "set"
            });
        }
    }, {
        key: "shadowBlur",
        get: function() {
            return this.canvasPrototype.shadowBlur;
        },
        set: function(t) {
            this.canvasPrototype.shadowBlur = t, this.stepList.push({
                action: "shadowBlur",
                args: t,
                actionType: "set"
            });
        }
    }, {
        key: "save",
        value: function() {
            this.stepList.push({
                action: "save",
                args: null,
                actionType: "func"
            });
        }
    }, {
        key: "restore",
        value: function() {
            this.stepList.push({
                action: "restore",
                args: null,
                actionType: "func"
            });
        }
    }, {
        key: "setLineDash",
        value: function() {
            for (var t = arguments.length, e = new Array(t), a = 0; a < t; a++) e[a] = arguments[a];
            this.canvasPrototype.lineDash = e, this.stepList.push({
                action: "setLineDash",
                args: e,
                actionType: "func"
            });
        }
    }, {
        key: "moveTo",
        value: function() {
            for (var t = arguments.length, e = new Array(t), a = 0; a < t; a++) e[a] = arguments[a];
            this.stepList.push({
                action: "moveTo",
                args: e,
                actionType: "func"
            });
        }
    }, {
        key: "closePath",
        value: function() {
            this.stepList.push({
                action: "closePath",
                args: null,
                actionType: "func"
            });
        }
    }, {
        key: "lineTo",
        value: function() {
            for (var t = arguments.length, e = new Array(t), a = 0; a < t; a++) e[a] = arguments[a];
            this.stepList.push({
                action: "lineTo",
                args: e,
                actionType: "func"
            });
        }
    }, {
        key: "quadraticCurveTo",
        value: function() {
            for (var t = arguments.length, e = new Array(t), a = 0; a < t; a++) e[a] = arguments[a];
            this.stepList.push({
                action: "quadraticCurveTo",
                args: e,
                actionType: "func"
            });
        }
    }, {
        key: "bezierCurveTo",
        value: function() {
            for (var t = arguments.length, e = new Array(t), a = 0; a < t; a++) e[a] = arguments[a];
            this.stepList.push({
                action: "bezierCurveTo",
                args: e,
                actionType: "func"
            });
        }
    }, {
        key: "arcTo",
        value: function() {
            for (var t = arguments.length, e = new Array(t), a = 0; a < t; a++) e[a] = arguments[a];
            this.stepList.push({
                action: "arcTo",
                args: e,
                actionType: "func"
            });
        }
    }, {
        key: "arc",
        value: function() {
            for (var t = arguments.length, e = new Array(t), a = 0; a < t; a++) e[a] = arguments[a];
            this.stepList.push({
                action: "arc",
                args: e,
                actionType: "func"
            });
        }
    }, {
        key: "rect",
        value: function() {
            for (var t = arguments.length, e = new Array(t), a = 0; a < t; a++) e[a] = arguments[a];
            this.stepList.push({
                action: "rect",
                args: e,
                actionType: "func"
            });
        }
    }, {
        key: "scale",
        value: function() {
            for (var t = arguments.length, e = new Array(t), a = 0; a < t; a++) e[a] = arguments[a];
            this.stepList.push({
                action: "scale",
                args: e,
                actionType: "func"
            });
        }
    }, {
        key: "rotate",
        value: function() {
            for (var t = arguments.length, e = new Array(t), a = 0; a < t; a++) e[a] = arguments[a];
            this.stepList.push({
                action: "rotate",
                args: e,
                actionType: "func"
            });
        }
    }, {
        key: "translate",
        value: function() {
            for (var t = arguments.length, e = new Array(t), a = 0; a < t; a++) e[a] = arguments[a];
            this.stepList.push({
                action: "translate",
                args: e,
                actionType: "func"
            });
        }
    }, {
        key: "transform",
        value: function() {
            for (var t = arguments.length, e = new Array(t), a = 0; a < t; a++) e[a] = arguments[a];
            this.stepList.push({
                action: "transform",
                args: e,
                actionType: "func"
            });
        }
    }, {
        key: "setTransform",
        value: function() {
            for (var t = arguments.length, e = new Array(t), a = 0; a < t; a++) e[a] = arguments[a];
            this.stepList.push({
                action: "setTransform",
                args: e,
                actionType: "func"
            });
        }
    }, {
        key: "clearRect",
        value: function() {
            for (var t = arguments.length, e = new Array(t), a = 0; a < t; a++) e[a] = arguments[a];
            this.stepList.push({
                action: "clearRect",
                args: e,
                actionType: "func"
            });
        }
    }, {
        key: "fillRect",
        value: function() {
            for (var t = arguments.length, e = new Array(t), a = 0; a < t; a++) e[a] = arguments[a];
            this.stepList.push({
                action: "fillRect",
                args: e,
                actionType: "func"
            });
        }
    }, {
        key: "strokeRect",
        value: function() {
            for (var t = arguments.length, e = new Array(t), a = 0; a < t; a++) e[a] = arguments[a];
            this.stepList.push({
                action: "strokeRect",
                args: e,
                actionType: "func"
            });
        }
    }, {
        key: "fillText",
        value: function() {
            for (var t = arguments.length, e = new Array(t), a = 0; a < t; a++) e[a] = arguments[a];
            this.stepList.push({
                action: "fillText",
                args: e,
                actionType: "func"
            });
        }
    }, {
        key: "strokeText",
        value: function() {
            for (var t = arguments.length, e = new Array(t), a = 0; a < t; a++) e[a] = arguments[a];
            this.stepList.push({
                action: "strokeText",
                args: e,
                actionType: "func"
            });
        }
    }, {
        key: "beginPath",
        value: function() {
            this.stepList.push({
                action: "beginPath",
                args: null,
                actionType: "func"
            });
        }
    }, {
        key: "fill",
        value: function() {
            this.stepList.push({
                action: "fill",
                args: null,
                actionType: "func"
            });
        }
    }, {
        key: "stroke",
        value: function() {
            this.stepList.push({
                action: "stroke",
                args: null,
                actionType: "func"
            });
        }
    }, {
        key: "drawFocusIfNeeded",
        value: function() {
            for (var t = arguments.length, e = new Array(t), a = 0; a < t; a++) e[a] = arguments[a];
            this.stepList.push({
                action: "drawFocusIfNeeded",
                args: e,
                actionType: "func"
            });
        }
    }, {
        key: "clip",
        value: function() {
            this.stepList.push({
                action: "clip",
                args: null,
                actionType: "func"
            });
        }
    }, {
        key: "isPointInPath",
        value: function() {
            for (var t = arguments.length, e = new Array(t), a = 0; a < t; a++) e[a] = arguments[a];
            this.stepList.push({
                action: "isPointInPath",
                args: e,
                actionType: "func"
            });
        }
    }, {
        key: "drawImage",
        value: function() {
            for (var t = arguments.length, e = new Array(t), a = 0; a < t; a++) e[a] = arguments[a];
            this.stepList.push({
                action: "drawImage",
                args: e,
                actionType: "func"
            });
        }
    }, {
        key: "addHitRegion",
        value: function() {
            for (var t = arguments.length, e = new Array(t), a = 0; a < t; a++) e[a] = arguments[a];
            this.stepList.push({
                action: "addHitRegion",
                args: e,
                actionType: "func"
            });
        }
    }, {
        key: "removeHitRegion",
        value: function() {
            for (var t = arguments.length, e = new Array(t), a = 0; a < t; a++) e[a] = arguments[a];
            this.stepList.push({
                action: "removeHitRegion",
                args: e,
                actionType: "func"
            });
        }
    }, {
        key: "clearHitRegions",
        value: function() {
            for (var t = arguments.length, e = new Array(t), a = 0; a < t; a++) e[a] = arguments[a];
            this.stepList.push({
                action: "clearHitRegions",
                args: e,
                actionType: "func"
            });
        }
    }, {
        key: "putImageData",
        value: function() {
            for (var t = arguments.length, e = new Array(t), a = 0; a < t; a++) e[a] = arguments[a];
            this.stepList.push({
                action: "putImageData",
                args: e,
                actionType: "func"
            });
        }
    }, {
        key: "getLineDash",
        value: function() {
            return this.canvasPrototype.lineDash;
        }
    }, {
        key: "createLinearGradient",
        value: function() {
            var t;
            return (t = this.ctx).createLinearGradient.apply(t, arguments);
        }
    }, {
        key: "createRadialGradient",
        value: function() {
            for (var t = arguments.length, e = new Array(t), a = 0; a < t; a++) e[a] = arguments[a];
            var n, i;
            return "2d" === this.type ? (n = this.ctx).createRadialGradient.apply(n, e) : (i = this.ctx).createCircularGradient.apply(i, s(e.slice(3, 6)));
        }
    }, {
        key: "createPattern",
        value: function() {
            var t;
            return (t = this.ctx).createPattern.apply(t, arguments);
        }
    }, {
        key: "measureText",
        value: function() {
            var t;
            return (t = this.ctx).measureText.apply(t, arguments);
        }
    }, {
        key: "createImageData",
        value: function() {
            var t;
            return (t = this.ctx).createImageData.apply(t, arguments);
        }
    }, {
        key: "getImageData",
        value: function() {
            var t;
            return (t = this.ctx).getImageData.apply(t, arguments);
        }
    }, {
        key: "draw",
        value: (o = n(e.default.mark(function t(n, s) {
            var i, r, o, c, u, h, p;
            return e.default.wrap(function(t) {
                for (;;) switch (t.prev = t.next) {
                  case 0:
                    if (i = this.stepList.slice(), this.stepList.length = 0, "mina" !== this.type) {
                        t.next = 7;
                        break;
                    }
                    if (i.length > 0) {
                        r = a(i);
                        try {
                            for (r.s(); !(o = r.n()).done; ) c = o.value, this.implementMinaStep(c);
                        } catch (t) {
                            r.e(t);
                        } finally {
                            r.f();
                        }
                        i.length = 0;
                    }
                    this.ctx.draw(n, s), t.next = 29;
                    break;

                  case 7:
                    if ("2d" !== this.type) {
                        t.next = 29;
                        break;
                    }
                    if (n || this.ctx.clearRect(0, 0, this.canvasNode.width, this.canvasNode.height), 
                    !(i.length > 0)) {
                        t.next = 28;
                        break;
                    }
                    u = a(i), t.prev = 11, u.s();

                  case 13:
                    if ((h = u.n()).done) {
                        t.next = 19;
                        break;
                    }
                    return p = h.value, t.next = 17, this.implement2DStep(p);

                  case 17:
                    t.next = 13;
                    break;

                  case 19:
                    t.next = 24;
                    break;

                  case 21:
                    t.prev = 21, t.t0 = t.catch(11), u.e(t.t0);

                  case 24:
                    return t.prev = 24, u.f(), t.finish(24);

                  case 27:
                    i.length = 0;

                  case 28:
                    s && s();

                  case 29:
                    i.length = 0;

                  case 30:
                  case "end":
                    return t.stop();
                }
            }, t, this, [ [ 11, 21, 24, 27 ] ]);
        })), function(t, e) {
            return o.apply(this, arguments);
        })
    }, {
        key: "implementMinaStep",
        value: function(t) {
            switch (t.action) {
              case "textAlign":
                this.ctx.setTextAlign(t.args);
                break;

              case "textBaseline":
                this.ctx.setTextBaseline(t.args);
                break;

              default:
                if ("set" === t.actionType) this.ctx[t.action] = t.args; else if ("func" === t.actionType) {
                    var e;
                    if (t.args) (e = this.ctx)[t.action].apply(e, s(t.args)); else this.ctx[t.action]();
                }
            }
        }
    }, {
        key: "implement2DStep",
        value: function(t) {
            var e = this;
            return new Promise(function(a) {
                if ("drawImage" === t.action) {
                    var n = e.canvasNode.createImage();
                    n.src = t.args[0], n.onload = function() {
                        var i;
                        (i = e.ctx).drawImage.apply(i, [ n ].concat(s(t.args.slice(1)))), a();
                    };
                } else {
                    if ("set" === t.actionType) e.ctx[t.action] = t.args; else if ("func" === t.actionType) {
                        var i;
                        if (t.args) (i = e.ctx)[t.action].apply(i, s(t.args)); else e.ctx[t.action]();
                    }
                    a();
                }
            });
        }
    } ]), t;
}();

exports.default = o;