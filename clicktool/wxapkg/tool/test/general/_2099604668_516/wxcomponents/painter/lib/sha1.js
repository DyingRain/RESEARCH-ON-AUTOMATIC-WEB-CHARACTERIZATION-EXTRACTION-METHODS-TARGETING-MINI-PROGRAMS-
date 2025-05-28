function r(r, n, t, e) {
    return r < 20 ? n & t | ~n & e : r < 40 ? n ^ t ^ e : r < 60 ? n & t | n & e | t & e : n ^ t ^ e;
}

function n(r) {
    return r < 20 ? 1518500249 : r < 40 ? 1859775393 : r < 60 ? -1894007588 : -899497514;
}

function t(r, n) {
    var t = (65535 & r) + (65535 & n);
    return (r >> 16) + (n >> 16) + (t >> 16) << 16 | 65535 & t;
}

function e(r, n) {
    return r << n | r >>> 32 - n;
}

module.exports = {
    hex_sha1: function(u) {
        return function(r) {
            for (var n = "0123456789abcdef", t = "", e = 0; e < 4 * r.length; e++) t += n.charAt(r[e >> 2] >> 8 * (3 - e % 4) + 4 & 15) + n.charAt(r[e >> 2] >> 8 * (3 - e % 4) & 15);
            return t;
        }(function(u, o) {
            u[o >> 5] |= 128 << 24 - o % 32, u[15 + (o + 64 >> 9 << 4)] = o;
            for (var a = Array(80), c = 1732584193, f = -271733879, h = -1732584194, i = 271733878, v = -1009589776, A = 0; A < u.length; A += 16) {
                for (var l = c, g = f, s = h, d = i, y = v, x = 0; x < 80; x++) {
                    a[x] = x < 16 ? u[A + x] : e(a[x - 3] ^ a[x - 8] ^ a[x - 14] ^ a[x - 16], 1);
                    var b = t(t(e(c, 5), r(x, f, h, i)), t(t(v, a[x]), n(x)));
                    v = i, i = h, h = e(f, 30), f = c, c = b;
                }
                c = t(c, l), f = t(f, g), h = t(h, s), i = t(i, d), v = t(v, y);
            }
            return Array(c, f, h, i, v);
        }(function(r) {
            for (var n = Array(), t = 0; t < 8 * r.length; t += 8) n[t >> 5] |= (255 & r.charCodeAt(t / 8)) << 24 - t % 32;
            return n;
        }(u), 8 * u.length));
    }
};