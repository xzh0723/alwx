function _decodeCont(t) {
    return t = function (t) {
        return t.split("").map(function (t) {
            var e, i;
            return t.match(/[A-Za-z]/) ? (e = Math.floor(t.charCodeAt(0) / 97),
                i = (t.toLowerCase().charCodeAt(0) - 83) % 26 || 26,
                String.fromCharCode(i + (0 == e ? 64 : 96))) : t
        }).join("")
    }(t),
        function (t) {
            var e, i, a, n, r, c, o, s = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=", d = "",
                l = 0;
            for (t = t.replace(/[^A-Za-z0-9\+\/\=]/g, ""); l < t.length;)
                n = s.indexOf(t.charAt(l++)),
                    r = s.indexOf(t.charAt(l++)),
                    c = s.indexOf(t.charAt(l++)),
                    o = s.indexOf(t.charAt(l++)),
                    e = n << 2 | r >> 4,
                    i = (15 & r) << 4 | c >> 2,
                    a = (3 & c) << 6 | o,
                    d += String.fromCharCode(e),
                64 != c && (d += String.fromCharCode(i)),
                64 != o && (d += String.fromCharCode(a));
            return function (t) {
                for (var e, i = "", a = 0, n = 0, r = 0; a < t.length;)
                    n = t.charCodeAt(a),
                        n < 128 ? (i += String.fromCharCode(n),
                            a++) : n > 191 && n < 224 ? (r = t.charCodeAt(a + 1),
                            i += String.fromCharCode((31 & n) << 6 | 63 & r),
                            a += 2) : (r = t.charCodeAt(a + 1),
                            e = t.charCodeAt(a + 2),
                            i += String.fromCharCode((15 & n) << 12 | (63 & r) << 6 | 63 & e),
                            a += 3);
                return i
            }(d)
        }(t)
}
console.log(_decodeCont("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"));



function t(t, e) {
    var n = (65535 & t) + (65535 & e);
    return (t >> 16) + (e >> 16) + (n >> 16) << 16 | 65535 & n
}
function e(t, e) {
    return t << e | t >>> 32 - e
}
function n(n, a, o, i, r, c) {
    return t(e(t(t(a, n), t(i, c)), r), o)
}
function a(t, e, a, o, i, r, c) {
    return n(e & a | ~e & o, t, e, i, r, c)
}
function o(t, e, a, o, i, r, c) {
    return n(e & o | a & ~o, t, e, i, r, c)
}
function i(t, e, a, o, i, r, c) {
    return n(e ^ a ^ o, t, e, i, r, c)
}
function r(t, e, a, o, i, r, c) {
    return n(a ^ (e | ~o), t, e, i, r, c)
}
function c(e, n) {
    e[n >> 5] |= 128 << n % 32,
        e[14 + (n + 64 >>> 9 << 4)] = n;
    var c, s, l, u, d, p = 1732584193, f = -271733879, h = -1732584194, g = 271733878;
    for (c = 0; c < e.length; c += 16)
        s = p,
            l = f,
            u = h,
            d = g,
            p = a(p, f, h, g, e[c], 7, -680876936),
            g = a(g, p, f, h, e[c + 1], 12, -389564586),
            h = a(h, g, p, f, e[c + 2], 17, 606105819),
            f = a(f, h, g, p, e[c + 3], 22, -1044525330),
            p = a(p, f, h, g, e[c + 4], 7, -176418897),
            g = a(g, p, f, h, e[c + 5], 12, 1200080426),
            h = a(h, g, p, f, e[c + 6], 17, -1473231341),
            f = a(f, h, g, p, e[c + 7], 22, -45705983),
            p = a(p, f, h, g, e[c + 8], 7, 1770035416),
            g = a(g, p, f, h, e[c + 9], 12, -1958414417),
            h = a(h, g, p, f, e[c + 10], 17, -42063),
            f = a(f, h, g, p, e[c + 11], 22, -1990404162),
            p = a(p, f, h, g, e[c + 12], 7, 1804603682),
            g = a(g, p, f, h, e[c + 13], 12, -40341101),
            h = a(h, g, p, f, e[c + 14], 17, -1502002290),
            f = a(f, h, g, p, e[c + 15], 22, 1236535329),
            p = o(p, f, h, g, e[c + 1], 5, -165796510),
            g = o(g, p, f, h, e[c + 6], 9, -1069501632),
            h = o(h, g, p, f, e[c + 11], 14, 643717713),
            f = o(f, h, g, p, e[c], 20, -373897302),
            p = o(p, f, h, g, e[c + 5], 5, -701558691),
            g = o(g, p, f, h, e[c + 10], 9, 38016083),
            h = o(h, g, p, f, e[c + 15], 14, -660478335),
            f = o(f, h, g, p, e[c + 4], 20, -405537848),
            p = o(p, f, h, g, e[c + 9], 5, 568446438),
            g = o(g, p, f, h, e[c + 14], 9, -1019803690),
            h = o(h, g, p, f, e[c + 3], 14, -187363961),
            f = o(f, h, g, p, e[c + 8], 20, 1163531501),
            p = o(p, f, h, g, e[c + 13], 5, -1444681467),
            g = o(g, p, f, h, e[c + 2], 9, -51403784),
            h = o(h, g, p, f, e[c + 7], 14, 1735328473),
            f = o(f, h, g, p, e[c + 12], 20, -1926607734),
            p = i(p, f, h, g, e[c + 5], 4, -378558),
            g = i(g, p, f, h, e[c + 8], 11, -2022574463),
            h = i(h, g, p, f, e[c + 11], 16, 1839030562),
            f = i(f, h, g, p, e[c + 14], 23, -35309556),
            p = i(p, f, h, g, e[c + 1], 4, -1530992060),
            g = i(g, p, f, h, e[c + 4], 11, 1272893353),
            h = i(h, g, p, f, e[c + 7], 16, -155497632),
            f = i(f, h, g, p, e[c + 10], 23, -1094730640),
            p = i(p, f, h, g, e[c + 13], 4, 681279174),
            g = i(g, p, f, h, e[c], 11, -358537222),
            h = i(h, g, p, f, e[c + 3], 16, -722521979),
            f = i(f, h, g, p, e[c + 6], 23, 76029189),
            p = i(p, f, h, g, e[c + 9], 4, -640364487),
            g = i(g, p, f, h, e[c + 12], 11, -421815835),
            h = i(h, g, p, f, e[c + 15], 16, 530742520),
            f = i(f, h, g, p, e[c + 2], 23, -995338651),
            p = r(p, f, h, g, e[c], 6, -198630844),
            g = r(g, p, f, h, e[c + 7], 10, 1126891415),
            h = r(h, g, p, f, e[c + 14], 15, -1416354905),
            f = r(f, h, g, p, e[c + 5], 21, -57434055),
            p = r(p, f, h, g, e[c + 12], 6, 1700485571),
            g = r(g, p, f, h, e[c + 3], 10, -1894986606),
            h = r(h, g, p, f, e[c + 10], 15, -1051523),
            f = r(f, h, g, p, e[c + 1], 21, -2054922799),
            p = r(p, f, h, g, e[c + 8], 6, 1873313359),
            g = r(g, p, f, h, e[c + 15], 10, -30611744),
            h = r(h, g, p, f, e[c + 6], 15, -1560198380),
            f = r(f, h, g, p, e[c + 13], 21, 1309151649),
            p = r(p, f, h, g, e[c + 4], 6, -145523070),
            g = r(g, p, f, h, e[c + 11], 10, -1120210379),
            h = r(h, g, p, f, e[c + 2], 15, 718787259),
            f = r(f, h, g, p, e[c + 9], 21, -343485551),
            p = t(p, s),
            f = t(f, l),
            h = t(h, u),
            g = t(g, d);
    return [p, f, h, g]
}
function s(t) {
    var e, n = "";
    for (e = 0; e < 32 * t.length; e += 8)
        n += String.fromCharCode(t[e >> 5] >>> e % 32 & 255);
    return n
}
function l(t) {
    var e, n = [];
    for (n[(t.length >> 2) - 1] = void 0,
             e = 0; e < n.length; e += 1)
        n[e] = 0;
    for (e = 0; e < 8 * t.length; e += 8)
        n[e >> 5] |= (255 & t.charCodeAt(e / 8)) << e % 32;
    return n
}
function u(t) {
    return s(c(l(t), 8 * t.length))
}
function d(t, e) {
    var n, a, o = l(t), i = [], r = [];
    for (i[15] = r[15] = void 0,
         o.length > 16 && (o = c(o, 8 * t.length)),
             n = 0; 16 > n; n += 1)
        i[n] = 909522486 ^ o[n],
            r[n] = 1549556828 ^ o[n];
    return a = c(i.concat(l(e)), 512 + 8 * e.length),
        s(c(r.concat(a), 640))
}
function p(t) {
    var e, n, a = "0123456789abcdef", o = "";
    for (n = 0; n < t.length; n += 1)
        e = t.charCodeAt(n),
            o += a.charAt(e >>> 4 & 15) + a.charAt(15 & e);
    return o
}
function f(t) {
    return unescape(encodeURIComponent(t))
}
function h(t) {
    return u(f(t))
}
function g(t) {
    return p(h(t))
}
function m(t, e) {
    return d(f(t), f(e))
}
function v(t, e) {
    return p(m(t, e))
}
function md5(t, e, n) {
    return e ? n ? m(e, t) : v(e, t) : n ? h(t) : g(t)
}

var timestamp = ~~(+new Date / 1e3);
var walden = "37e81a9d8f02596e1b895d07c171d5c9";

function get_sign(bookId) {
    return md5("" + bookId + timestamp + walden)
}

// params = {
//     'bookId': '7918072',
//     'chapterId': '1149799',
//     'ut': '1555187703',
//     'num': '1',
//     'ver': '1',
//     'aut': '1562204902'
// };

// params = JSON.stringify(params);
// params = 'bookId=7918072&chapterId=1149799&ut=1555187703&num=1&ver=1&aut=1562204902'
// console.log(get_sign(params));

