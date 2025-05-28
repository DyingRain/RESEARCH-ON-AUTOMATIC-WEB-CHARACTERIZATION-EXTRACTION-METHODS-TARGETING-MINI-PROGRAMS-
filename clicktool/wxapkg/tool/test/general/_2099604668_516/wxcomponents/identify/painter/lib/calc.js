module.exports = function e(r) {
    r = r.trim();
    for (var a = new Array(), s = "+", p = "", o = r.length, t = 0; t < o; ++t) {
        if ("." === r[t] || !isNaN(Number(r[t])) && " " !== r[t]) p += r[t]; else if ("(" === r[t]) {
            for (var c = 1, i = t; c > 0; ) "(" === r[i += 1] && (c += 1), ")" === r[i] && (c -= 1);
            p = "".concat(e(r.slice(t + 1, i))), t = i;
        }
        if (isNaN(Number(r[t])) && "." !== r[t] || t === o - 1) {
            var u = parseFloat(p);
            switch (s) {
              case "+":
                a.push(u);
                break;

              case "-":
                a.push(-u);
                break;

              case "*":
                a.push(a.pop() * u);
                break;

              case "/":
                a.push(a.pop() / u);
            }
            s = r[t], p = "";
        }
    }
    for (var f = 0; a.length; ) f += a.pop();
    return f;
};