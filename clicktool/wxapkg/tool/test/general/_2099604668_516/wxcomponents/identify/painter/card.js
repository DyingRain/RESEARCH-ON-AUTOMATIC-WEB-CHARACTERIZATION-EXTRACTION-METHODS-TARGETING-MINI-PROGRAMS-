Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = void 0;

var t = require("../../../@babel/runtime/helpers/classCallCheck"), r = require("../../../@babel/runtime/helpers/createClass"), e = function() {
    function e() {
        t(this, e);
    }
    return r(e, [ {
        key: "palette",
        value: function() {
            return {
                width: "654rpx",
                height: "1000rpx",
                background: "#eee",
                views: [ i("overline", 0), i("underline", 1), i("line-through", 2), i("overline underline line-through", 3, "red"), {
                    type: "rect",
                    css: {
                        width: "200rpx",
                        right: "20rpx",
                        top: "30rpx",
                        height: "100rpx",
                        borderRadius: "100%",
                        shadow: "10rpx 10rpx 5rpx #888888",
                        color: "linear-gradient(-135deg, #fedcba 0%, rgba(18, 52, 86, 1) 20%, #987 80%)"
                    }
                }, {
                    id: "my_text_id",
                    type: "text",
                    text: "fontWeight: 'bold'",
                    css: [ {
                        top: "".concat(p + 4 * o, "rpx"),
                        shadow: "10rpx 10rpx 5rpx #888888",
                        fontWeight: "bold"
                    }, x ]
                }, {
                    type: "rect",
                    css: {
                        width: "20rpx",
                        height: "20rpx",
                        color: "red",
                        left: "calc(my_text_id.right + 20rpx)",
                        top: "".concat(p + 4 * o + 15, "rpx")
                    }
                }, {
                    id: "text_id_2",
                    type: "text",
                    text: "我是把width设置为400rpx后，我就换行了xx行了",
                    css: [ {
                        top: "".concat(p + 5 * o, "rpx"),
                        align: "center",
                        width: "400rpx",
                        background: "#538e60",
                        textAlign: "center",
                        padding: "10rpx",
                        scalable: !0,
                        deletable: !0
                    }, x, {
                        left: "300rpx"
                    } ]
                }, {
                    type: "rect",
                    css: {
                        width: "20rpx",
                        height: "20rpx",
                        color: "red",
                        left: "200rpx",
                        top: "calc(text_id_2.bottom + 20rpx)"
                    }
                }, {
                    type: "text",
                    text: "我设置了maxLines为1，看看会产生什么效果",
                    css: [ {
                        top: "".concat(p + 7 * o, "rpx"),
                        width: "500rpx",
                        maxLines: 1
                    }, x ]
                }, c(0), a(0, "普通"), c(1, 30), a(1, "rotate: 30"), c(2, 30, "20rpx"), a(2, "borderRadius: 30rpx"), c(3, 0, "60rpx"), a(3, "圆形"), {
                    type: "image",
                    url: "/palette/avatar.jpg",
                    css: {
                        bottom: "40rpx",
                        left: "40rpx",
                        borderRadius: "50rpx",
                        borderWidth: "10rpx",
                        borderColor: "yellow",
                        width: "100rpx",
                        height: "100rpx"
                    }
                }, {
                    type: "qrcode",
                    content: "https://github.com/Kujiale-Mobile/Painter",
                    css: {
                        bottom: "40rpx",
                        left: "180rpx",
                        color: "red",
                        borderWidth: "10rpx",
                        borderColor: "blue",
                        borderStyle: "dashed",
                        width: "120rpx",
                        height: "120rpx"
                    }
                }, {
                    id: "rect",
                    type: "rect",
                    css: {
                        scalable: !0,
                        bottom: "40rpx",
                        right: "40rpx",
                        color: "radial-gradient(rgba(0, 0, 0, 0) 5%, #0ff 15%, #f0f 60%)",
                        borderRadius: "20rpx",
                        borderWidth: "10rpx",
                        width: "120rpx",
                        height: "120rpx"
                    }
                }, {
                    type: "text",
                    text: "borderWidth",
                    css: {
                        bottom: "40rpx",
                        right: "200rpx",
                        color: "green",
                        borderWidth: "2rpx"
                    }
                }, {
                    type: "rect",
                    css: {
                        width: "100rpx",
                        height: "100rpx",
                        color: "rgba(0,0,0,0.2)",
                        left: "50%",
                        top: "50%",
                        align: "center",
                        verticalAlign: "center"
                    }
                } ]
            };
        }
    } ]), e;
}();

exports.default = e;

var p = 50, o = 70, x = {
    left: "".concat(20, "rpx"),
    fontSize: "40rpx"
};

function i(t, r, e) {
    return {
        type: "text",
        text: t,
        css: [ {
            top: "".concat(p + r * o, "rpx"),
            color: e,
            textDecoration: t
        }, x ]
    };
}

function c(t, r, e) {
    return {
        id: "image-".concat(t),
        type: "image",
        url: "/palette/avatar.jpg",
        css: {
            top: "".concat(p + 8.5 * o, "rpx"),
            left: "".concat(20 + 160 * t, "rpx"),
            width: "120rpx",
            height: "120rpx",
            shadow: "10rpx 10rpx 5rpx #888888",
            rotate: r,
            minWidth: "60rpx",
            borderRadius: e,
            scalable: !0
        }
    };
}

function a(t, r) {
    var e = {
        type: "text",
        text: r,
        css: {
            fontSize: "22rpx",
            top: "".concat(p + 8.5 * o + 140, "rpx")
        }
    };
    return 3 === t ? e.css.right = "60rpx" : e.css.left = "".concat(20 + 120 * t + 30, "rpx"), 
    e;
}