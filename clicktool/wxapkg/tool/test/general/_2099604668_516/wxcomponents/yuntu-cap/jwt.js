Object.defineProperty(exports, "__esModule", {
    value: !0
});

var t = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=", e = /^(?:[A-Za-z\d+\/]{4})*?(?:[A-Za-z\d+\/]{2}(?:==)?|[A-Za-z\d+\/]{3}=?)?$/;

function r(t) {
    var e = t.replace(/-/g, "+").replace(/_/g, "/");
    switch (e.length % 4) {
      case 0:
        break;

      case 2:
        e += "==";
        break;

      case 3:
        e += "=";
        break;

      default:
        throw "Illegal base64url string!";
    }
    try {
        return function(t) {
            return decodeURIComponent(exports.weAtob(t).replace(/(.)/g, function(t) {
                var e = t.charCodeAt(0).toString(16).toUpperCase();
                return e.length < 2 && (e = "0" + e), "%" + e;
            }));
        }(e);
    } catch (t) {
        return exports.weAtob(e);
    }
}

exports.weBtoa = function(e) {
    for (var r, n, i, o, s = "", a = 0, c = (e = String(e)).length % 3; a < e.length; ) {
        if ((n = e.charCodeAt(a++)) > 255 || (i = e.charCodeAt(a++)) > 255 || (o = e.charCodeAt(a++)) > 255) throw new TypeError("Failed to execute 'btoa' on 'Window': The string to be encoded contains characters outside of the Latin1 range.");
        s += t.charAt((r = n << 16 | i << 8 | o) >> 18 & 63) + t.charAt(r >> 12 & 63) + t.charAt(r >> 6 & 63) + t.charAt(63 & r);
    }
    return c ? s.slice(0, c - 3) + "===".substring(c) : s;
}, exports.weAtob = function(r) {
    if (r = String(r).replace(/[\t\n\f\r ]+/g, ""), !e.test(r)) throw new TypeError("Failed to execute 'atob' on 'Window': The string to be decoded is not correctly encoded.");
    r += "==".slice(2 - (3 & r.length));
    for (var n, i, o, s = "", a = 0; a < r.length; ) n = t.indexOf(r.charAt(a++)) << 18 | t.indexOf(r.charAt(a++)) << 12 | (i = t.indexOf(r.charAt(a++))) << 6 | (o = t.indexOf(r.charAt(a++))), 
    s += 64 === i ? String.fromCharCode(n >> 16 & 255) : 64 === o ? String.fromCharCode(n >> 16 & 255, n >> 8 & 255) : String.fromCharCode(n >> 16 & 255, n >> 8 & 255, 255 & n);
    return s;
}, exports.default = function(t, e) {
    if ("string" != typeof t) throw "Invalid token specified";
    var n = !0 === (e = e || {}).header ? 0 : 1;
    try {
        return JSON.parse(r(t.split(".")[n]));
    } catch (t) {
        throw "Invalid token specified: " + t.message;
    }
};

var n, i, o, s, a, c = c || function(t, e) {
    var r = {}, n = r.lib = {}, i = function() {}, o = n.Base = {
        extend: function(t) {
            i.prototype = this;
            var e = new i();
            return t && e.mixIn(t), e.hasOwnProperty("init") || (e.init = function() {
                e.$super.init.apply(this, arguments);
            }), e.init.prototype = e, e.$super = this, e;
        },
        create: function() {
            var t = this.extend();
            return t.init.apply(t, arguments), t;
        },
        init: function() {},
        mixIn: function(t) {
            for (var e in t) t.hasOwnProperty(e) && (this[e] = t[e]);
            t.hasOwnProperty("toString") && (this.toString = t.toString);
        },
        clone: function() {
            return this.init.prototype.extend(this);
        }
    }, s = n.WordArray = o.extend({
        init: function(t, e) {
            t = this.words = t || [], this.sigBytes = null != e ? e : 4 * t.length;
        },
        toString: function(t) {
            return (t || c).stringify(this);
        },
        concat: function(t) {
            var e = this.words, r = t.words, n = this.sigBytes;
            if (t = t.sigBytes, this.clamp(), n % 4) for (var i = 0; i < t; i++) e[n + i >>> 2] |= (r[i >>> 2] >>> 24 - i % 4 * 8 & 255) << 24 - (n + i) % 4 * 8; else if (65535 < r.length) for (i = 0; i < t; i += 4) e[n + i >>> 2] = r[i >>> 2]; else e.push.apply(e, r);
            return this.sigBytes += t, this;
        },
        clamp: function() {
            var e = this.words, r = this.sigBytes;
            e[r >>> 2] &= 4294967295 << 32 - r % 4 * 8, e.length = t.ceil(r / 4);
        },
        clone: function() {
            var t = o.clone.call(this);
            return t.words = this.words.slice(0), t;
        },
        random: function(e) {
            for (var r = [], n = 0; n < e; n += 4) r.push(4294967296 * t.random() | 0);
            return new s.init(r, e);
        }
    }), a = r.enc = {}, c = a.Hex = {
        stringify: function(t) {
            var e = t.words;
            t = t.sigBytes;
            for (var r = [], n = 0; n < t; n++) {
                var i = e[n >>> 2] >>> 24 - n % 4 * 8 & 255;
                r.push((i >>> 4).toString(16)), r.push((15 & i).toString(16));
            }
            return r.join("");
        },
        parse: function(t) {
            for (var e = t.length, r = [], n = 0; n < e; n += 2) r[n >>> 3] |= parseInt(t.substr(n, 2), 16) << 24 - n % 8 * 4;
            return new s.init(r, e / 2);
        }
    }, h = a.Latin1 = {
        stringify: function(t) {
            var e = t.words;
            t = t.sigBytes;
            for (var r = [], n = 0; n < t; n++) r.push(String.fromCharCode(e[n >>> 2] >>> 24 - n % 4 * 8 & 255));
            return r.join("");
        },
        parse: function(t) {
            for (var e = t.length, r = [], n = 0; n < e; n++) r[n >>> 2] |= (255 & t.charCodeAt(n)) << 24 - n % 4 * 8;
            return new s.init(r, e);
        }
    }, u = a.Utf8 = {
        stringify: function(t) {
            try {
                return decodeURIComponent(escape(h.stringify(t)));
            } catch (t) {
                throw Error("Malformed UTF-8 data");
            }
        },
        parse: function(t) {
            return h.parse(unescape(encodeURIComponent(t)));
        }
    }, f = n.BufferedBlockAlgorithm = o.extend({
        reset: function() {
            this._data = new s.init(), this._nDataBytes = 0;
        },
        _append: function(t) {
            "string" == typeof t && (t = u.parse(t)), this._data.concat(t), this._nDataBytes += t.sigBytes;
        },
        _process: function(e) {
            var r = this._data, n = r.words, i = r.sigBytes, o = this.blockSize, a = i / (4 * o);
            if (e = (a = e ? t.ceil(a) : t.max((0 | a) - this._minBufferSize, 0)) * o, i = t.min(4 * e, i), 
            e) {
                for (var c = 0; c < e; c += o) this._doProcessBlock(n, c);
                c = n.splice(0, e), r.sigBytes -= i;
            }
            return new s.init(c, i);
        },
        clone: function() {
            var t = o.clone.call(this);
            return t._data = this._data.clone(), t;
        },
        _minBufferSize: 0
    });
    n.Hasher = f.extend({
        cfg: o.extend(),
        init: function(t) {
            this.cfg = this.cfg.extend(t), this.reset();
        },
        reset: function() {
            f.reset.call(this), this._doReset();
        },
        update: function(t) {
            return this._append(t), this._process(), this;
        },
        finalize: function(t) {
            return t && this._append(t), this._doFinalize();
        },
        blockSize: 16,
        _createHelper: function(t) {
            return function(e, r) {
                return new t.init(r).finalize(e);
            };
        },
        _createHmacHelper: function(t) {
            return function(e, r) {
                return new d.HMAC.init(t, r).finalize(e);
            };
        }
    });
    var d = r.algo = {};
    return r;
}(Math);

!function(t) {
    function e(t, e, r, n, i, o, s) {
        return ((t = t + (e & r | ~e & n) + i + s) << o | t >>> 32 - o) + e;
    }
    function r(t, e, r, n, i, o, s) {
        return ((t = t + (e & n | r & ~n) + i + s) << o | t >>> 32 - o) + e;
    }
    function n(t, e, r, n, i, o, s) {
        return ((t = t + (e ^ r ^ n) + i + s) << o | t >>> 32 - o) + e;
    }
    function i(t, e, r, n, i, o, s) {
        return ((t = t + (r ^ (e | ~n)) + i + s) << o | t >>> 32 - o) + e;
    }
    for (var o = c, s = (h = o.lib).WordArray, a = h.Hasher, h = o.algo, u = [], f = 0; 64 > f; f++) u[f] = 4294967296 * t.abs(t.sin(f + 1)) | 0;
    h = h.MD5 = a.extend({
        _doReset: function() {
            this._hash = new s.init([ 1732584193, 4023233417, 2562383102, 271733878 ]);
        },
        _doProcessBlock: function(t, o) {
            for (var s = 0; 16 > s; s++) {
                var a = t[c = o + s];
                t[c] = 16711935 & (a << 8 | a >>> 24) | 4278255360 & (a << 24 | a >>> 8);
            }
            s = this._hash.words;
            var c = t[o + 0], h = (a = t[o + 1], t[o + 2]), f = t[o + 3], d = t[o + 4], l = t[o + 5], p = t[o + 6], g = t[o + 7], y = t[o + 8], v = t[o + 9], w = t[o + 10], _ = t[o + 11], x = t[o + 12], m = t[o + 13], B = t[o + 14], A = t[o + 15], S = e(S = s[0], z = s[1], C = s[2], b = s[3], c, 7, u[0]), b = e(b, S, z, C, a, 12, u[1]), C = e(C, b, S, z, h, 17, u[2]), z = e(z, C, b, S, f, 22, u[3]);
            S = e(S, z, C, b, d, 7, u[4]), b = e(b, S, z, C, l, 12, u[5]), C = e(C, b, S, z, p, 17, u[6]), 
            z = e(z, C, b, S, g, 22, u[7]), S = e(S, z, C, b, y, 7, u[8]), b = e(b, S, z, C, v, 12, u[9]), 
            C = e(C, b, S, z, w, 17, u[10]), z = e(z, C, b, S, _, 22, u[11]), S = e(S, z, C, b, x, 7, u[12]), 
            b = e(b, S, z, C, m, 12, u[13]), C = e(C, b, S, z, B, 17, u[14]), S = r(S, z = e(z, C, b, S, A, 22, u[15]), C, b, a, 5, u[16]), 
            b = r(b, S, z, C, p, 9, u[17]), C = r(C, b, S, z, _, 14, u[18]), z = r(z, C, b, S, c, 20, u[19]), 
            S = r(S, z, C, b, l, 5, u[20]), b = r(b, S, z, C, w, 9, u[21]), C = r(C, b, S, z, A, 14, u[22]), 
            z = r(z, C, b, S, d, 20, u[23]), S = r(S, z, C, b, v, 5, u[24]), b = r(b, S, z, C, B, 9, u[25]), 
            C = r(C, b, S, z, f, 14, u[26]), z = r(z, C, b, S, y, 20, u[27]), S = r(S, z, C, b, m, 5, u[28]), 
            b = r(b, S, z, C, h, 9, u[29]), C = r(C, b, S, z, g, 14, u[30]), S = n(S, z = r(z, C, b, S, x, 20, u[31]), C, b, l, 4, u[32]), 
            b = n(b, S, z, C, y, 11, u[33]), C = n(C, b, S, z, _, 16, u[34]), z = n(z, C, b, S, B, 23, u[35]), 
            S = n(S, z, C, b, a, 4, u[36]), b = n(b, S, z, C, d, 11, u[37]), C = n(C, b, S, z, g, 16, u[38]), 
            z = n(z, C, b, S, w, 23, u[39]), S = n(S, z, C, b, m, 4, u[40]), b = n(b, S, z, C, c, 11, u[41]), 
            C = n(C, b, S, z, f, 16, u[42]), z = n(z, C, b, S, p, 23, u[43]), S = n(S, z, C, b, v, 4, u[44]), 
            b = n(b, S, z, C, x, 11, u[45]), C = n(C, b, S, z, A, 16, u[46]), S = i(S, z = n(z, C, b, S, h, 23, u[47]), C, b, c, 6, u[48]), 
            b = i(b, S, z, C, g, 10, u[49]), C = i(C, b, S, z, B, 15, u[50]), z = i(z, C, b, S, l, 21, u[51]), 
            S = i(S, z, C, b, x, 6, u[52]), b = i(b, S, z, C, f, 10, u[53]), C = i(C, b, S, z, w, 15, u[54]), 
            z = i(z, C, b, S, a, 21, u[55]), S = i(S, z, C, b, y, 6, u[56]), b = i(b, S, z, C, A, 10, u[57]), 
            C = i(C, b, S, z, p, 15, u[58]), z = i(z, C, b, S, m, 21, u[59]), S = i(S, z, C, b, d, 6, u[60]), 
            b = i(b, S, z, C, _, 10, u[61]), C = i(C, b, S, z, h, 15, u[62]), z = i(z, C, b, S, v, 21, u[63]);
            s[0] = s[0] + S | 0, s[1] = s[1] + z | 0, s[2] = s[2] + C | 0, s[3] = s[3] + b | 0;
        },
        _doFinalize: function() {
            var e = this._data, r = e.words, n = 8 * this._nDataBytes, i = 8 * e.sigBytes;
            r[i >>> 5] |= 128 << 24 - i % 32;
            var o = t.floor(n / 4294967296);
            for (r[15 + (i + 64 >>> 9 << 4)] = 16711935 & (o << 8 | o >>> 24) | 4278255360 & (o << 24 | o >>> 8), 
            r[14 + (i + 64 >>> 9 << 4)] = 16711935 & (n << 8 | n >>> 24) | 4278255360 & (n << 24 | n >>> 8), 
            e.sigBytes = 4 * (r.length + 1), this._process(), r = (e = this._hash).words, n = 0; 4 > n; n++) i = r[n], 
            r[n] = 16711935 & (i << 8 | i >>> 24) | 4278255360 & (i << 24 | i >>> 8);
            return e;
        },
        clone: function() {
            var t = a.clone.call(this);
            return t._hash = this._hash.clone(), t;
        }
    }), o.MD5 = a._createHelper(h), o.HmacMD5 = a._createHmacHelper(h);
}(Math), o = (n = (i = c).lib).Base, s = n.WordArray, a = (n = i.algo).EvpKDF = o.extend({
    cfg: o.extend({
        keySize: 4,
        hasher: n.MD5,
        iterations: 1
    }),
    init: function(t) {
        this.cfg = this.cfg.extend(t);
    },
    compute: function(t, e) {
        for (var r = (a = this.cfg).hasher.create(), n = s.create(), i = n.words, o = a.keySize, a = a.iterations; i.length < o; ) {
            c && r.update(c);
            var c = r.update(t).finalize(e);
            r.reset();
            for (var h = 1; h < a; h++) c = r.finalize(c), r.reset();
            n.concat(c);
        }
        return n.sigBytes = 4 * o, n;
    }
}), i.EvpKDF = function(t, e, r) {
    return a.create(r).compute(t, e);
}, exports.md5 = function(t) {
    return c.MD5(t).toString();
};