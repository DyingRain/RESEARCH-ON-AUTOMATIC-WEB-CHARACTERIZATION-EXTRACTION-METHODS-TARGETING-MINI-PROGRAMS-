Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = void 0;

var e = require("../../../@babel/runtime/helpers/typeof"), t = require("../../../@babel/runtime/helpers/createForOfIteratorHelper"), n = require("../../../@babel/runtime/helpers/slicedToArray"), i = require("../../../@babel/runtime/helpers/classCallCheck"), a = require("../../../@babel/runtime/helpers/createClass"), o = require("./util"), r = require("./sha1"), c = 6291456, s = {}, l = function() {
    function e() {
        i(this, e), getApp().PAINTER_MAX_LRU_SPACE && (c = getApp().PAINTER_MAX_LRU_SPACE), 
        wx.getStorage({
            key: "savedFiles",
            success: function(e) {
                e.data && (s = e.data);
            }
        });
    }
    return a(e, [ {
        key: "download",
        value: function(e, t) {
            return new Promise(function(i, a) {
                if (e && o.isValidUrl(e)) {
                    var c = function(e) {
                        if (o.isDataUrl(e)) {
                            var t = /data:image\/(\w+);base64,(.*)/.exec(e) || [], i = n(t, 3), a = i[1], c = i[2];
                            return "".concat(r.hex_sha1(c), ".").concat(a);
                        }
                        return e;
                    }(e);
                    if (t) {
                        var l = function(e) {
                            if (!s[e]) return;
                            return s[e].time = new Date().getTime(), wx.setStorage({
                                key: "savedFiles",
                                data: s
                            }), s[e];
                        }(c);
                        l ? -1 !== l.path.indexOf("//usr/") ? wx.getFileSystemManager().getFileInfo({
                            filePath: l.path,
                            success: function() {
                                i(l.path);
                            },
                            fail: function(n) {
                                console.error("base64 file broken, ".concat(JSON.stringify(n))), f(e, t).then(function(e) {
                                    i(e);
                                }, function() {
                                    a();
                                });
                            }
                        }) : wx.getSavedFileInfo({
                            filePath: l.path,
                            success: function(e) {
                                i(l.path);
                            },
                            fail: function(n) {
                                console.error("the file is broken, redownload it, ".concat(JSON.stringify(n))), 
                                u(e, t).then(function(e) {
                                    i(e);
                                }, function() {
                                    a();
                                });
                            }
                        }) : o.isOnlineUrl(e) ? u(e, t).then(function(e) {
                            i(e);
                        }, function() {
                            a();
                        }) : o.isDataUrl(e) && f(e, t).then(function(e) {
                            i(e);
                        }, function() {
                            a();
                        });
                    } else wx.getFileSystemManager().getFileInfo({
                        filePath: c,
                        success: function() {
                            i(e);
                        },
                        fail: function() {
                            o.isOnlineUrl(e) ? u(e, t).then(function(e) {
                                i(e);
                            }, function() {
                                a();
                            }) : o.isDataUrl(e) && f(e, t).then(function(e) {
                                i(e);
                            }, function() {
                                a();
                            });
                        }
                    });
                } else i(e);
            });
        }
    } ]), e;
}();

function f(e, t) {
    return new Promise(function(i, a) {
        var o = /data:image\/(\w+);base64,(.*)/.exec(e) || [], c = n(o, 3), s = c[1], l = c[2];
        if (!s) return console.error("base parse failed"), void a();
        var f = "".concat(r.hex_sha1(l), ".").concat(s), u = "".concat(wx.env.USER_DATA_PATH, "/").concat(f), g = wx.base64ToArrayBuffer(l.replace(/[\r\n]/g, ""));
        wx.getFileSystemManager().writeFile({
            filePath: u,
            data: g,
            encoding: "binary",
            success: function() {
                wx.getFileSystemManager().getFileInfo({
                    filePath: u,
                    success: function(e) {
                        var n = e.size;
                        t ? h(n).then(function() {
                            d(f, n, u, !0).then(function(e) {
                                i(e);
                            });
                        }, function() {
                            i(u);
                        }) : i(u);
                    },
                    fail: function(e) {
                        console.error("getFileInfo ".concat(u, " failed, ").concat(JSON.stringify(e))), 
                        i(u);
                    }
                });
            },
            fail: function(e) {
                console.log(e);
            }
        });
    });
}

function u(e, t) {
    return new Promise(function(n, i) {
        wx.downloadFile({
            url: e,
            success: function(a) {
                if (200 !== a.statusCode) return console.error("downloadFile ".concat(e, " failed res.statusCode is not 200")), 
                void i();
                var o = a.tempFilePath;
                wx.getFileSystemManager().getFileInfo({
                    filePath: o,
                    success: function(i) {
                        var a = i.size;
                        t ? h(a).then(function() {
                            d(e, a, o).then(function(e) {
                                n(e);
                            });
                        }, function() {
                            n(o);
                        }) : n(o);
                    },
                    fail: function(e) {
                        console.error("getFileInfo ".concat(a.tempFilePath, " failed, ").concat(JSON.stringify(e))), 
                        n(a.tempFilePath);
                    }
                });
            },
            fail: function(e) {
                console.error("downloadFile failed, ".concat(JSON.stringify(e), " ")), i();
            }
        });
    });
}

function d(e, t, n) {
    var i = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
    return new Promise(function(a, o) {
        if (i) {
            var r = s.totalSize ? s.totalSize : 0;
            return s[e] = {}, s[e].path = n, s[e].time = new Date().getTime(), s[e].size = t, 
            s.totalSize = t + r, wx.setStorage({
                key: "savedFiles",
                data: s
            }), void a(n);
        }
        wx.saveFile({
            tempFilePath: n,
            success: function(n) {
                var i = s.totalSize ? s.totalSize : 0;
                s[e] = {}, s[e].path = n.savedFilePath, s[e].time = new Date().getTime(), s[e].size = t, 
                s.totalSize = t + i, wx.setStorage({
                    key: "savedFiles",
                    data: s
                }), a(n.savedFilePath);
            },
            fail: function(t) {
                console.error("saveFile ".concat(e, " failed, then we delete all files, ").concat(JSON.stringify(t))), 
                a(n), g();
            }
        });
    });
}

function g() {
    wx.removeStorage({
        key: "savedFiles",
        success: function() {
            wx.getSavedFileList({
                success: function(e) {
                    v(e.fileList);
                },
                fail: function(e) {
                    console.error("getSavedFileList failed, ".concat(JSON.stringify(e)));
                }
            });
        }
    });
}

function h(e) {
    return e > c ? Promise.reject() : new Promise(function(n, i) {
        var a = s.totalSize ? s.totalSize : 0;
        if (e + a <= c) n(); else {
            var o = [], r = JSON.parse(JSON.stringify(s));
            delete r.totalSize;
            var l, f = Object.keys(r).sort(function(e, t) {
                return r[e].time - r[t].time;
            }), u = t(f);
            try {
                for (u.s(); !(l = u.n()).done; ) {
                    var d = l.value;
                    if (a -= s[d].size, o.push(s[d].path), delete s[d], a + e < c) break;
                }
            } catch (e) {
                u.e(e);
            } finally {
                u.f();
            }
            s.totalSize = a, wx.setStorage({
                key: "savedFiles",
                data: s,
                success: function() {
                    o.length > 0 && v(o), n();
                },
                fail: function(e) {
                    console.error("doLru setStorage failed, ".concat(JSON.stringify(e))), i();
                }
            });
        }
    });
}

function v(n) {
    var i, a = t(n);
    try {
        var o = function() {
            var t = i.value, n = t;
            "object" === e(t) && (n = t.filePath), -1 !== n.indexOf("//usr/") ? wx.getFileSystemManager().unlink({
                filePath: n,
                fail: function(e) {
                    console.error("removeSavedFile ".concat(t, " failed, ").concat(JSON.stringify(e)));
                }
            }) : wx.removeSavedFile({
                filePath: n,
                fail: function(e) {
                    console.error("removeSavedFile ".concat(t, " failed, ").concat(JSON.stringify(e)));
                }
            });
        };
        for (a.s(); !(i = a.n()).done; ) o();
    } catch (e) {
        a.e(e);
    } finally {
        a.f();
    }
}

exports.default = l;