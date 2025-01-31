if (function(e, t) {
    "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function(e) {
        if (!e.document) throw new Error("jQuery requires a window with a document");
        return t(e);
    } : t(e);
}("undefined" != typeof window ? window : this, function(C, e) {
    var t = [], E = C.document, c = t.slice, g = t.concat, s = t.push, i = t.indexOf, n = {}, r = n.toString, h = n.hasOwnProperty, m = {}, o = "2.2.4", T = function(e, t) {
        return new T.fn.init(e, t);
    }, a = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, l = /^-ms-/, u = /-([\da-z])/gi, d = function(e, t) {
        return t.toUpperCase();
    };
    function f(e) {
        var t = !!e && "length" in e && e.length, n = T.type(e);
        return "function" !== n && !T.isWindow(e) && ("array" === n || 0 === t || "number" == typeof t && 0 < t && t - 1 in e);
    }
    T.fn = T.prototype = {
        jquery: o,
        constructor: T,
        selector: "",
        length: 0,
        toArray: function() {
            return c.call(this);
        },
        get: function(e) {
            return null != e ? e < 0 ? this[e + this.length] : this[e] : c.call(this);
        },
        pushStack: function(e) {
            var t = T.merge(this.constructor(), e);
            return t.prevObject = this, t.context = this.context, t;
        },
        each: function(e) {
            return T.each(this, e);
        },
        map: function(n) {
            return this.pushStack(T.map(this, function(e, t) {
                return n.call(e, t, e);
            }));
        },
        slice: function() {
            return this.pushStack(c.apply(this, arguments));
        },
        first: function() {
            return this.eq(0);
        },
        last: function() {
            return this.eq(-1);
        },
        eq: function(e) {
            var t = this.length, n = +e + (e < 0 ? t : 0);
            return this.pushStack(0 <= n && n < t ? [ this[n] ] : []);
        },
        end: function() {
            return this.prevObject || this.constructor();
        },
        push: s,
        sort: t.sort,
        splice: t.splice
    }, T.extend = T.fn.extend = function() {
        var e, t, n, r, i, o, a = arguments[0] || {}, s = 1, l = arguments.length, u = !1;
        for ("boolean" == typeof a && (u = a, a = arguments[s] || {}, s++), "object" == typeof a || T.isFunction(a) || (a = {}), 
        s === l && (a = this, s--); s < l; s++) if (null != (e = arguments[s])) for (t in e) n = a[t], 
        a !== (r = e[t]) && (u && r && (T.isPlainObject(r) || (i = T.isArray(r))) ? (i ? (i = !1, 
        o = n && T.isArray(n) ? n : []) : o = n && T.isPlainObject(n) ? n : {}, a[t] = T.extend(u, o, r)) : void 0 !== r && (a[t] = r));
        return a;
    }, T.extend({
        expando: "jQuery" + (o + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(e) {
            throw new Error(e);
        },
        noop: function() {},
        isFunction: function(e) {
            return "function" === T.type(e);
        },
        isArray: Array.isArray,
        isWindow: function(e) {
            return null != e && e === e.window;
        },
        isNumeric: function(e) {
            var t = e && e.toString();
            return !T.isArray(e) && 0 <= t - parseFloat(t) + 1;
        },
        isPlainObject: function(e) {
            var t;
            if ("object" !== T.type(e) || e.nodeType || T.isWindow(e)) return !1;
            if (e.constructor && !h.call(e, "constructor") && !h.call(e.constructor.prototype || {}, "isPrototypeOf")) return !1;
            for (t in e) ;
            return void 0 === t || h.call(e, t);
        },
        isEmptyObject: function(e) {
            var t;
            for (t in e) return !1;
            return !0;
        },
        type: function(e) {
            return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? n[r.call(e)] || "object" : typeof e;
        },
        globalEval: function(e) {
            var t, n = eval;
            (e = T.trim(e)) && (1 === e.indexOf("use strict") ? ((t = E.createElement("script")).text = e, 
            E.head.appendChild(t).parentNode.removeChild(t)) : n(e));
        },
        camelCase: function(e) {
            return e.replace(l, "ms-").replace(u, d);
        },
        nodeName: function(e, t) {
            return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
        },
        each: function(e, t) {
            var n, r = 0;
            if (f(e)) for (n = e.length; r < n && !1 !== t.call(e[r], r, e[r]); r++) ; else for (r in e) if (!1 === t.call(e[r], r, e[r])) break;
            return e;
        },
        trim: function(e) {
            return null == e ? "" : (e + "").replace(a, "");
        },
        makeArray: function(e, t) {
            var n = t || [];
            return null != e && (f(Object(e)) ? T.merge(n, "string" == typeof e ? [ e ] : e) : s.call(n, e)), 
            n;
        },
        inArray: function(e, t, n) {
            return null == t ? -1 : i.call(t, e, n);
        },
        merge: function(e, t) {
            for (var n = +t.length, r = 0, i = e.length; r < n; r++) e[i++] = t[r];
            return e.length = i, e;
        },
        grep: function(e, t, n) {
            for (var r = [], i = 0, o = e.length, a = !n; i < o; i++) !t(e[i], i) !== a && r.push(e[i]);
            return r;
        },
        map: function(e, t, n) {
            var r, i, o = 0, a = [];
            if (f(e)) for (r = e.length; o < r; o++) null != (i = t(e[o], o, n)) && a.push(i); else for (o in e) null != (i = t(e[o], o, n)) && a.push(i);
            return g.apply([], a);
        },
        guid: 1,
        proxy: function(e, t) {
            var n, r, i;
            return "string" == typeof t && (n = e[t], t = e, e = n), T.isFunction(e) ? (r = c.call(arguments, 2), 
            (i = function() {
                return e.apply(t || this, r.concat(c.call(arguments)));
            }).guid = e.guid = e.guid || T.guid++, i) : void 0;
        },
        now: Date.now,
        support: m
    }), "function" == typeof Symbol && (T.fn[Symbol.iterator] = t[Symbol.iterator]), 
    T.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(e, t) {
        n["[object " + t + "]"] = t.toLowerCase();
    });
    var p = function(n) {
        var e, h, x, o, i, g, d, m, w, l, u, S, C, a, E, v, s, c, y, T = "sizzle" + 1 * new Date(), b = n.document, A = 0, r = 0, f = ie(), p = ie(), k = ie(), M = function(e, t) {
            return e === t && (u = !0), 0;
        }, F = {}.hasOwnProperty, t = [], N = t.pop, O = t.push, j = t.push, P = t.slice, D = function(e, t) {
            for (var n = 0, r = e.length; n < r; n++) if (e[n] === t) return n;
            return -1;
        }, L = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", q = "[\\x20\\t\\r\\n\\f]", H = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+", U = "\\[" + q + "*(" + H + ")(?:" + q + "*([*^$|!~]?=)" + q + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + H + "))|)" + q + "*\\]", I = ":(" + H + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + U + ")*)|.*)\\)|)", $ = new RegExp(q + "+", "g"), R = new RegExp("^" + q + "+|((?:^|[^\\\\])(?:\\\\.)*)" + q + "+$", "g"), V = new RegExp("^" + q + "*," + q + "*"), W = new RegExp("^" + q + "*([>+~]|" + q + ")" + q + "*"), z = new RegExp("=" + q + "*([^\\]'\"]*?)" + q + "*\\]", "g"), _ = new RegExp(I), B = new RegExp("^" + H + "$"), X = {
            ID: new RegExp("^#(" + H + ")"),
            CLASS: new RegExp("^\\.(" + H + ")"),
            TAG: new RegExp("^(" + H + "|[*])"),
            ATTR: new RegExp("^" + U),
            PSEUDO: new RegExp("^" + I),
            CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + q + "*(even|odd|(([+-]|)(\\d*)n|)" + q + "*(?:([+-]|)" + q + "*(\\d+)|))" + q + "*\\)|)", "i"),
            bool: new RegExp("^(?:" + L + ")$", "i"),
            needsContext: new RegExp("^" + q + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + q + "*((?:-\\d)?\\d*)" + q + "*\\)|)(?=[^-]|$)", "i")
        }, Y = /^(?:input|select|textarea|button)$/i, G = /^h\d$/i, K = /^[^{]+\{\s*\[native \w/, Q = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, Z = /[+~]/, J = /'|\\/g, ee = new RegExp("\\\\([\\da-f]{1,6}" + q + "?|(" + q + ")|.)", "ig"), te = function(e, t, n) {
            var r = "0x" + t - 65536;
            return r != r || n ? t : r < 0 ? String.fromCharCode(r + 65536) : String.fromCharCode(r >> 10 | 55296, 1023 & r | 56320);
        }, ne = function() {
            S();
        };
        try {
            j.apply(t = P.call(b.childNodes), b.childNodes), t[b.childNodes.length].nodeType;
        } catch (e) {
            j = {
                apply: t.length ? function(e, t) {
                    O.apply(e, P.call(t));
                } : function(e, t) {
                    for (var n = e.length, r = 0; e[n++] = t[r++]; ) ;
                    e.length = n - 1;
                }
            };
        }
        function re(e, t, n, r) {
            var i, o, a, s, l, u, c, d, f = t && t.ownerDocument, p = t ? t.nodeType : 9;
            if (n = n || [], "string" != typeof e || !e || 1 !== p && 9 !== p && 11 !== p) return n;
            if (!r && ((t ? t.ownerDocument || t : b) !== C && S(t), t = t || C, E)) {
                if (11 !== p && (u = Q.exec(e))) if (i = u[1]) {
                    if (9 === p) {
                        if (!(a = t.getElementById(i))) return n;
                        if (a.id === i) return n.push(a), n;
                    } else if (f && (a = f.getElementById(i)) && y(t, a) && a.id === i) return n.push(a), 
                    n;
                } else {
                    if (u[2]) return j.apply(n, t.getElementsByTagName(e)), n;
                    if ((i = u[3]) && h.getElementsByClassName && t.getElementsByClassName) return j.apply(n, t.getElementsByClassName(i)), 
                    n;
                }
                if (h.qsa && !k[e + " "] && (!v || !v.test(e))) {
                    if (1 !== p) f = t, d = e; else if ("object" !== t.nodeName.toLowerCase()) {
                        for ((s = t.getAttribute("id")) ? s = s.replace(J, "\\$&") : t.setAttribute("id", s = T), 
                        o = (c = g(e)).length, l = B.test(s) ? "#" + s : "[id='" + s + "']"; o--; ) c[o] = l + " " + he(c[o]);
                        d = c.join(","), f = Z.test(e) && fe(t.parentNode) || t;
                    }
                    if (d) try {
                        return j.apply(n, f.querySelectorAll(d)), n;
                    } catch (e) {} finally {
                        s === T && t.removeAttribute("id");
                    }
                }
            }
            return m(e.replace(R, "$1"), t, n, r);
        }
        function ie() {
            var r = [];
            return function e(t, n) {
                return r.push(t + " ") > x.cacheLength && delete e[r.shift()], e[t + " "] = n;
            };
        }
        function oe(e) {
            return e[T] = !0, e;
        }
        function ae(e) {
            var t = C.createElement("div");
            try {
                return !!e(t);
            } catch (e) {
                return !1;
            } finally {
                t.parentNode && t.parentNode.removeChild(t), t = null;
            }
        }
        function se(e, t) {
            for (var n = e.split("|"), r = n.length; r--; ) x.attrHandle[n[r]] = t;
        }
        function le(e, t) {
            var n = t && e, r = n && 1 === e.nodeType && 1 === t.nodeType && (~t.sourceIndex || 1 << 31) - (~e.sourceIndex || 1 << 31);
            if (r) return r;
            if (n) for (;n = n.nextSibling; ) if (n === t) return -1;
            return e ? 1 : -1;
        }
        function ue(t) {
            return function(e) {
                return "input" === e.nodeName.toLowerCase() && e.type === t;
            };
        }
        function ce(n) {
            return function(e) {
                var t = e.nodeName.toLowerCase();
                return ("input" === t || "button" === t) && e.type === n;
            };
        }
        function de(a) {
            return oe(function(o) {
                return o = +o, oe(function(e, t) {
                    for (var n, r = a([], e.length, o), i = r.length; i--; ) e[n = r[i]] && (e[n] = !(t[n] = e[n]));
                });
            });
        }
        function fe(e) {
            return e && void 0 !== e.getElementsByTagName && e;
        }
        for (e in h = re.support = {}, i = re.isXML = function(e) {
            var t = e && (e.ownerDocument || e).documentElement;
            return !!t && "HTML" !== t.nodeName;
        }, S = re.setDocument = function(e) {
            var t, n, r = e ? e.ownerDocument || e : b;
            return r !== C && 9 === r.nodeType && r.documentElement && (a = (C = r).documentElement, 
            E = !i(C), (n = C.defaultView) && n.top !== n && (n.addEventListener ? n.addEventListener("unload", ne, !1) : n.attachEvent && n.attachEvent("onunload", ne)), 
            h.attributes = ae(function(e) {
                return e.className = "i", !e.getAttribute("className");
            }), h.getElementsByTagName = ae(function(e) {
                return e.appendChild(C.createComment("")), !e.getElementsByTagName("*").length;
            }), h.getElementsByClassName = K.test(C.getElementsByClassName), h.getById = ae(function(e) {
                return a.appendChild(e).id = T, !C.getElementsByName || !C.getElementsByName(T).length;
            }), h.getById ? (x.find.ID = function(e, t) {
                if (void 0 !== t.getElementById && E) {
                    var n = t.getElementById(e);
                    return n ? [ n ] : [];
                }
            }, x.filter.ID = function(e) {
                var t = e.replace(ee, te);
                return function(e) {
                    return e.getAttribute("id") === t;
                };
            }) : (delete x.find.ID, x.filter.ID = function(e) {
                var n = e.replace(ee, te);
                return function(e) {
                    var t = void 0 !== e.getAttributeNode && e.getAttributeNode("id");
                    return t && t.value === n;
                };
            }), x.find.TAG = h.getElementsByTagName ? function(e, t) {
                return void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e) : h.qsa ? t.querySelectorAll(e) : void 0;
            } : function(e, t) {
                var n, r = [], i = 0, o = t.getElementsByTagName(e);
                if ("*" === e) {
                    for (;n = o[i++]; ) 1 === n.nodeType && r.push(n);
                    return r;
                }
                return o;
            }, x.find.CLASS = h.getElementsByClassName && function(e, t) {
                return void 0 !== t.getElementsByClassName && E ? t.getElementsByClassName(e) : void 0;
            }, s = [], v = [], (h.qsa = K.test(C.querySelectorAll)) && (ae(function(e) {
                a.appendChild(e).innerHTML = "<a id='" + T + "'></a><select id='" + T + "-\r\\' msallowcapture=''><option selected=''></option></select>", 
                e.querySelectorAll("[msallowcapture^='']").length && v.push("[*^$]=" + q + "*(?:''|\"\")"), 
                e.querySelectorAll("[selected]").length || v.push("\\[" + q + "*(?:value|" + L + ")"), 
                e.querySelectorAll("[id~=" + T + "-]").length || v.push("~="), e.querySelectorAll(":checked").length || v.push(":checked"), 
                e.querySelectorAll("a#" + T + "+*").length || v.push(".#.+[+~]");
            }), ae(function(e) {
                var t = C.createElement("input");
                t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && v.push("name" + q + "*[*^$|!~]?="), 
                e.querySelectorAll(":enabled").length || v.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), 
                v.push(",.*:");
            })), (h.matchesSelector = K.test(c = a.matches || a.webkitMatchesSelector || a.mozMatchesSelector || a.oMatchesSelector || a.msMatchesSelector)) && ae(function(e) {
                h.disconnectedMatch = c.call(e, "div"), c.call(e, "[s!='']:x"), s.push("!=", I);
            }), v = v.length && new RegExp(v.join("|")), s = s.length && new RegExp(s.join("|")), 
            t = K.test(a.compareDocumentPosition), y = t || K.test(a.contains) ? function(e, t) {
                var n = 9 === e.nodeType ? e.documentElement : e, r = t && t.parentNode;
                return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)));
            } : function(e, t) {
                if (t) for (;t = t.parentNode; ) if (t === e) return !0;
                return !1;
            }, M = t ? function(e, t) {
                if (e === t) return u = !0, 0;
                var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
                return n || (1 & (n = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !h.sortDetached && t.compareDocumentPosition(e) === n ? e === C || e.ownerDocument === b && y(b, e) ? -1 : t === C || t.ownerDocument === b && y(b, t) ? 1 : l ? D(l, e) - D(l, t) : 0 : 4 & n ? -1 : 1);
            } : function(e, t) {
                if (e === t) return u = !0, 0;
                var n, r = 0, i = e.parentNode, o = t.parentNode, a = [ e ], s = [ t ];
                if (!i || !o) return e === C ? -1 : t === C ? 1 : i ? -1 : o ? 1 : l ? D(l, e) - D(l, t) : 0;
                if (i === o) return le(e, t);
                for (n = e; n = n.parentNode; ) a.unshift(n);
                for (n = t; n = n.parentNode; ) s.unshift(n);
                for (;a[r] === s[r]; ) r++;
                return r ? le(a[r], s[r]) : a[r] === b ? -1 : s[r] === b ? 1 : 0;
            }), C;
        }, re.matches = function(e, t) {
            return re(e, null, null, t);
        }, re.matchesSelector = function(e, t) {
            if ((e.ownerDocument || e) !== C && S(e), t = t.replace(z, "='$1']"), h.matchesSelector && E && !k[t + " "] && (!s || !s.test(t)) && (!v || !v.test(t))) try {
                var n = c.call(e, t);
                if (n || h.disconnectedMatch || e.document && 11 !== e.document.nodeType) return n;
            } catch (e) {}
            return 0 < re(t, C, null, [ e ]).length;
        }, re.contains = function(e, t) {
            return (e.ownerDocument || e) !== C && S(e), y(e, t);
        }, re.attr = function(e, t) {
            (e.ownerDocument || e) !== C && S(e);
            var n = x.attrHandle[t.toLowerCase()], r = n && F.call(x.attrHandle, t.toLowerCase()) ? n(e, t, !E) : void 0;
            return void 0 !== r ? r : h.attributes || !E ? e.getAttribute(t) : (r = e.getAttributeNode(t)) && r.specified ? r.value : null;
        }, re.error = function(e) {
            throw new Error("Syntax error, unrecognized expression: " + e);
        }, re.uniqueSort = function(e) {
            var t, n = [], r = 0, i = 0;
            if (u = !h.detectDuplicates, l = !h.sortStable && e.slice(0), e.sort(M), u) {
                for (;t = e[i++]; ) t === e[i] && (r = n.push(i));
                for (;r--; ) e.splice(n[r], 1);
            }
            return l = null, e;
        }, o = re.getText = function(e) {
            var t, n = "", r = 0, i = e.nodeType;
            if (i) {
                if (1 === i || 9 === i || 11 === i) {
                    if ("string" == typeof e.textContent) return e.textContent;
                    for (e = e.firstChild; e; e = e.nextSibling) n += o(e);
                } else if (3 === i || 4 === i) return e.nodeValue;
            } else for (;t = e[r++]; ) n += o(t);
            return n;
        }, (x = re.selectors = {
            cacheLength: 50,
            createPseudo: oe,
            match: X,
            attrHandle: {},
            find: {},
            relative: {
                ">": {
                    dir: "parentNode",
                    first: !0
                },
                " ": {
                    dir: "parentNode"
                },
                "+": {
                    dir: "previousSibling",
                    first: !0
                },
                "~": {
                    dir: "previousSibling"
                }
            },
            preFilter: {
                ATTR: function(e) {
                    return e[1] = e[1].replace(ee, te), e[3] = (e[3] || e[4] || e[5] || "").replace(ee, te), 
                    "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4);
                },
                CHILD: function(e) {
                    return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || re.error(e[0]), 
                    e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && re.error(e[0]), 
                    e;
                },
                PSEUDO: function(e) {
                    var t, n = !e[6] && e[2];
                    return X.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && _.test(n) && (t = g(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), 
                    e[2] = n.slice(0, t)), e.slice(0, 3));
                }
            },
            filter: {
                TAG: function(e) {
                    var t = e.replace(ee, te).toLowerCase();
                    return "*" === e ? function() {
                        return !0;
                    } : function(e) {
                        return e.nodeName && e.nodeName.toLowerCase() === t;
                    };
                },
                CLASS: function(e) {
                    var t = f[e + " "];
                    return t || (t = new RegExp("(^|" + q + ")" + e + "(" + q + "|$)")) && f(e, function(e) {
                        return t.test("string" == typeof e.className && e.className || void 0 !== e.getAttribute && e.getAttribute("class") || "");
                    });
                },
                ATTR: function(n, r, i) {
                    return function(e) {
                        var t = re.attr(e, n);
                        return null == t ? "!=" === r : !r || (t += "", "=" === r ? t === i : "!=" === r ? t !== i : "^=" === r ? i && 0 === t.indexOf(i) : "*=" === r ? i && -1 < t.indexOf(i) : "$=" === r ? i && t.slice(-i.length) === i : "~=" === r ? -1 < (" " + t.replace($, " ") + " ").indexOf(i) : "|=" === r && (t === i || t.slice(0, i.length + 1) === i + "-"));
                    };
                },
                CHILD: function(h, e, t, g, m) {
                    var v = "nth" !== h.slice(0, 3), y = "last" !== h.slice(-4), b = "of-type" === e;
                    return 1 === g && 0 === m ? function(e) {
                        return !!e.parentNode;
                    } : function(e, t, n) {
                        var r, i, o, a, s, l, u = v !== y ? "nextSibling" : "previousSibling", c = e.parentNode, d = b && e.nodeName.toLowerCase(), f = !n && !b, p = !1;
                        if (c) {
                            if (v) {
                                for (;u; ) {
                                    for (a = e; a = a[u]; ) if (b ? a.nodeName.toLowerCase() === d : 1 === a.nodeType) return !1;
                                    l = u = "only" === h && !l && "nextSibling";
                                }
                                return !0;
                            }
                            if (l = [ y ? c.firstChild : c.lastChild ], y && f) {
                                for (p = (s = (r = (i = (o = (a = c)[T] || (a[T] = {}))[a.uniqueID] || (o[a.uniqueID] = {}))[h] || [])[0] === A && r[1]) && r[2], 
                                a = s && c.childNodes[s]; a = ++s && a && a[u] || (p = s = 0) || l.pop(); ) if (1 === a.nodeType && ++p && a === e) {
                                    i[h] = [ A, s, p ];
                                    break;
                                }
                            } else if (f && (p = s = (r = (i = (o = (a = e)[T] || (a[T] = {}))[a.uniqueID] || (o[a.uniqueID] = {}))[h] || [])[0] === A && r[1]), 
                            !1 === p) for (;(a = ++s && a && a[u] || (p = s = 0) || l.pop()) && ((b ? a.nodeName.toLowerCase() !== d : 1 !== a.nodeType) || !++p || (f && ((i = (o = a[T] || (a[T] = {}))[a.uniqueID] || (o[a.uniqueID] = {}))[h] = [ A, p ]), 
                            a !== e)); ) ;
                            return (p -= m) === g || p % g == 0 && 0 <= p / g;
                        }
                    };
                },
                PSEUDO: function(e, o) {
                    var t, a = x.pseudos[e] || x.setFilters[e.toLowerCase()] || re.error("unsupported pseudo: " + e);
                    return a[T] ? a(o) : 1 < a.length ? (t = [ e, e, "", o ], x.setFilters.hasOwnProperty(e.toLowerCase()) ? oe(function(e, t) {
                        for (var n, r = a(e, o), i = r.length; i--; ) e[n = D(e, r[i])] = !(t[n] = r[i]);
                    }) : function(e) {
                        return a(e, 0, t);
                    }) : a;
                }
            },
            pseudos: {
                not: oe(function(e) {
                    var r = [], i = [], s = d(e.replace(R, "$1"));
                    return s[T] ? oe(function(e, t, n, r) {
                        for (var i, o = s(e, null, r, []), a = e.length; a--; ) (i = o[a]) && (e[a] = !(t[a] = i));
                    }) : function(e, t, n) {
                        return r[0] = e, s(r, null, n, i), r[0] = null, !i.pop();
                    };
                }),
                has: oe(function(t) {
                    return function(e) {
                        return 0 < re(t, e).length;
                    };
                }),
                contains: oe(function(t) {
                    return t = t.replace(ee, te), function(e) {
                        return -1 < (e.textContent || e.innerText || o(e)).indexOf(t);
                    };
                }),
                lang: oe(function(n) {
                    return B.test(n || "") || re.error("unsupported lang: " + n), n = n.replace(ee, te).toLowerCase(), 
                    function(e) {
                        var t;
                        do {
                            if (t = E ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang")) return (t = t.toLowerCase()) === n || 0 === t.indexOf(n + "-");
                        } while ((e = e.parentNode) && 1 === e.nodeType);
                        return !1;
                    };
                }),
                target: function(e) {
                    var t = n.location && n.location.hash;
                    return t && t.slice(1) === e.id;
                },
                root: function(e) {
                    return e === a;
                },
                focus: function(e) {
                    return e === C.activeElement && (!C.hasFocus || C.hasFocus()) && !!(e.type || e.href || ~e.tabIndex);
                },
                enabled: function(e) {
                    return !1 === e.disabled;
                },
                disabled: function(e) {
                    return !0 === e.disabled;
                },
                checked: function(e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && !!e.checked || "option" === t && !!e.selected;
                },
                selected: function(e) {
                    return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected;
                },
                empty: function(e) {
                    for (e = e.firstChild; e; e = e.nextSibling) if (e.nodeType < 6) return !1;
                    return !0;
                },
                parent: function(e) {
                    return !x.pseudos.empty(e);
                },
                header: function(e) {
                    return G.test(e.nodeName);
                },
                input: function(e) {
                    return Y.test(e.nodeName);
                },
                button: function(e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && "button" === e.type || "button" === t;
                },
                text: function(e) {
                    var t;
                    return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase());
                },
                first: de(function() {
                    return [ 0 ];
                }),
                last: de(function(e, t) {
                    return [ t - 1 ];
                }),
                eq: de(function(e, t, n) {
                    return [ n < 0 ? n + t : n ];
                }),
                even: de(function(e, t) {
                    for (var n = 0; n < t; n += 2) e.push(n);
                    return e;
                }),
                odd: de(function(e, t) {
                    for (var n = 1; n < t; n += 2) e.push(n);
                    return e;
                }),
                lt: de(function(e, t, n) {
                    for (var r = n < 0 ? n + t : n; 0 <= --r; ) e.push(r);
                    return e;
                }),
                gt: de(function(e, t, n) {
                    for (var r = n < 0 ? n + t : n; ++r < t; ) e.push(r);
                    return e;
                })
            }
        }).pseudos.nth = x.pseudos.eq, {
            radio: !0,
            checkbox: !0,
            file: !0,
            password: !0,
            image: !0
        }) x.pseudos[e] = ue(e);
        for (e in {
            submit: !0,
            reset: !0
        }) x.pseudos[e] = ce(e);
        function pe() {}
        function he(e) {
            for (var t = 0, n = e.length, r = ""; t < n; t++) r += e[t].value;
            return r;
        }
        function ge(s, e, t) {
            var l = e.dir, u = t && "parentNode" === l, c = r++;
            return e.first ? function(e, t, n) {
                for (;e = e[l]; ) if (1 === e.nodeType || u) return s(e, t, n);
            } : function(e, t, n) {
                var r, i, o, a = [ A, c ];
                if (n) {
                    for (;e = e[l]; ) if ((1 === e.nodeType || u) && s(e, t, n)) return !0;
                } else for (;e = e[l]; ) if (1 === e.nodeType || u) {
                    if ((r = (i = (o = e[T] || (e[T] = {}))[e.uniqueID] || (o[e.uniqueID] = {}))[l]) && r[0] === A && r[1] === c) return a[2] = r[2];
                    if ((i[l] = a)[2] = s(e, t, n)) return !0;
                }
            };
        }
        function me(i) {
            return 1 < i.length ? function(e, t, n) {
                for (var r = i.length; r--; ) if (!i[r](e, t, n)) return !1;
                return !0;
            } : i[0];
        }
        function ve(e, t, n, r, i) {
            for (var o, a = [], s = 0, l = e.length, u = null != t; s < l; s++) (o = e[s]) && (n && !n(o, r, i) || (a.push(o), 
            u && t.push(s)));
            return a;
        }
        function ye(p, h, g, m, v, e) {
            return m && !m[T] && (m = ye(m)), v && !v[T] && (v = ye(v, e)), oe(function(e, t, n, r) {
                var i, o, a, s = [], l = [], u = t.length, c = e || function(e, t, n) {
                    for (var r = 0, i = t.length; r < i; r++) re(e, t[r], n);
                    return n;
                }(h || "*", n.nodeType ? [ n ] : n, []), d = !p || !e && h ? c : ve(c, s, p, n, r), f = g ? v || (e ? p : u || m) ? [] : t : d;
                if (g && g(d, f, n, r), m) for (i = ve(f, l), m(i, [], n, r), o = i.length; o--; ) (a = i[o]) && (f[l[o]] = !(d[l[o]] = a));
                if (e) {
                    if (v || p) {
                        if (v) {
                            for (i = [], o = f.length; o--; ) (a = f[o]) && i.push(d[o] = a);
                            v(null, f = [], i, r);
                        }
                        for (o = f.length; o--; ) (a = f[o]) && -1 < (i = v ? D(e, a) : s[o]) && (e[i] = !(t[i] = a));
                    }
                } else f = ve(f === t ? f.splice(u, f.length) : f), v ? v(null, t, f, r) : j.apply(t, f);
            });
        }
        function be(e) {
            for (var i, t, n, r = e.length, o = x.relative[e[0].type], a = o || x.relative[" "], s = o ? 1 : 0, l = ge(function(e) {
                return e === i;
            }, a, !0), u = ge(function(e) {
                return -1 < D(i, e);
            }, a, !0), c = [ function(e, t, n) {
                var r = !o && (n || t !== w) || ((i = t).nodeType ? l(e, t, n) : u(e, t, n));
                return i = null, r;
            } ]; s < r; s++) if (t = x.relative[e[s].type]) c = [ ge(me(c), t) ]; else {
                if ((t = x.filter[e[s].type].apply(null, e[s].matches))[T]) {
                    for (n = ++s; n < r && !x.relative[e[n].type]; n++) ;
                    return ye(1 < s && me(c), 1 < s && he(e.slice(0, s - 1).concat({
                        value: " " === e[s - 2].type ? "*" : ""
                    })).replace(R, "$1"), t, s < n && be(e.slice(s, n)), n < r && be(e = e.slice(n)), n < r && he(e));
                }
                c.push(t);
            }
            return me(c);
        }
        return pe.prototype = x.filters = x.pseudos, x.setFilters = new pe(), g = re.tokenize = function(e, t) {
            var n, r, i, o, a, s, l, u = p[e + " "];
            if (u) return t ? 0 : u.slice(0);
            for (a = e, s = [], l = x.preFilter; a; ) {
                for (o in n && !(r = V.exec(a)) || (r && (a = a.slice(r[0].length) || a), s.push(i = [])), 
                n = !1, (r = W.exec(a)) && (n = r.shift(), i.push({
                    value: n,
                    type: r[0].replace(R, " ")
                }), a = a.slice(n.length)), x.filter) !(r = X[o].exec(a)) || l[o] && !(r = l[o](r)) || (n = r.shift(), 
                i.push({
                    value: n,
                    type: o,
                    matches: r
                }), a = a.slice(n.length));
                if (!n) break;
            }
            return t ? a.length : a ? re.error(e) : p(e, s).slice(0);
        }, d = re.compile = function(e, t) {
            var n, m, v, y, b, r, i = [], o = [], a = k[e + " "];
            if (!a) {
                for (t || (t = g(e)), n = t.length; n--; ) (a = be(t[n]))[T] ? i.push(a) : o.push(a);
                (a = k(e, (m = o, y = 0 < (v = i).length, b = 0 < m.length, r = function(e, t, n, r, i) {
                    var o, a, s, l = 0, u = "0", c = e && [], d = [], f = w, p = e || b && x.find.TAG("*", i), h = A += null == f ? 1 : Math.random() || .1, g = p.length;
                    for (i && (w = t === C || t || i); u !== g && null != (o = p[u]); u++) {
                        if (b && o) {
                            for (a = 0, t || o.ownerDocument === C || (S(o), n = !E); s = m[a++]; ) if (s(o, t || C, n)) {
                                r.push(o);
                                break;
                            }
                            i && (A = h);
                        }
                        y && ((o = !s && o) && l--, e && c.push(o));
                    }
                    if (l += u, y && u !== l) {
                        for (a = 0; s = v[a++]; ) s(c, d, t, n);
                        if (e) {
                            if (0 < l) for (;u--; ) c[u] || d[u] || (d[u] = N.call(r));
                            d = ve(d);
                        }
                        j.apply(r, d), i && !e && 0 < d.length && 1 < l + v.length && re.uniqueSort(r);
                    }
                    return i && (A = h, w = f), c;
                }, y ? oe(r) : r))).selector = e;
            }
            return a;
        }, m = re.select = function(e, t, n, r) {
            var i, o, a, s, l, u = "function" == typeof e && e, c = !r && g(e = u.selector || e);
            if (n = n || [], 1 === c.length) {
                if (2 < (o = c[0] = c[0].slice(0)).length && "ID" === (a = o[0]).type && h.getById && 9 === t.nodeType && E && x.relative[o[1].type]) {
                    if (!(t = (x.find.ID(a.matches[0].replace(ee, te), t) || [])[0])) return n;
                    u && (t = t.parentNode), e = e.slice(o.shift().value.length);
                }
                for (i = X.needsContext.test(e) ? 0 : o.length; i-- && (a = o[i], !x.relative[s = a.type]); ) if ((l = x.find[s]) && (r = l(a.matches[0].replace(ee, te), Z.test(o[0].type) && fe(t.parentNode) || t))) {
                    if (o.splice(i, 1), !(e = r.length && he(o))) return j.apply(n, r), n;
                    break;
                }
            }
            return (u || d(e, c))(r, t, !E, n, !t || Z.test(e) && fe(t.parentNode) || t), n;
        }, h.sortStable = T.split("").sort(M).join("") === T, h.detectDuplicates = !!u, 
        S(), h.sortDetached = ae(function(e) {
            return 1 & e.compareDocumentPosition(C.createElement("div"));
        }), ae(function(e) {
            return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href");
        }) || se("type|href|height|width", function(e, t, n) {
            return n ? void 0 : e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2);
        }), h.attributes && ae(function(e) {
            return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value");
        }) || se("value", function(e, t, n) {
            return n || "input" !== e.nodeName.toLowerCase() ? void 0 : e.defaultValue;
        }), ae(function(e) {
            return null == e.getAttribute("disabled");
        }) || se(L, function(e, t, n) {
            var r;
            return n ? void 0 : !0 === e[t] ? t.toLowerCase() : (r = e.getAttributeNode(t)) && r.specified ? r.value : null;
        }), re;
    }(C);
    T.find = p, T.expr = p.selectors, T.expr[":"] = T.expr.pseudos, T.uniqueSort = T.unique = p.uniqueSort, 
    T.text = p.getText, T.isXMLDoc = p.isXML, T.contains = p.contains;
    var v = function(e, t, n) {
        for (var r = [], i = void 0 !== n; (e = e[t]) && 9 !== e.nodeType; ) if (1 === e.nodeType) {
            if (i && T(e).is(n)) break;
            r.push(e);
        }
        return r;
    }, y = function(e, t) {
        for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
        return n;
    }, b = T.expr.match.needsContext, x = /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/, w = /^.[^:#\[\.,]*$/;
    function S(e, n, r) {
        if (T.isFunction(n)) return T.grep(e, function(e, t) {
            return !!n.call(e, t, e) !== r;
        });
        if (n.nodeType) return T.grep(e, function(e) {
            return e === n !== r;
        });
        if ("string" == typeof n) {
            if (w.test(n)) return T.filter(n, e, r);
            n = T.filter(n, e);
        }
        return T.grep(e, function(e) {
            return -1 < i.call(n, e) !== r;
        });
    }
    T.filter = function(e, t, n) {
        var r = t[0];
        return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === r.nodeType ? T.find.matchesSelector(r, e) ? [ r ] : [] : T.find.matches(e, T.grep(t, function(e) {
            return 1 === e.nodeType;
        }));
    }, T.fn.extend({
        find: function(e) {
            var t, n = this.length, r = [], i = this;
            if ("string" != typeof e) return this.pushStack(T(e).filter(function() {
                for (t = 0; t < n; t++) if (T.contains(i[t], this)) return !0;
            }));
            for (t = 0; t < n; t++) T.find(e, i[t], r);
            return (r = this.pushStack(1 < n ? T.unique(r) : r)).selector = this.selector ? this.selector + " " + e : e, 
            r;
        },
        filter: function(e) {
            return this.pushStack(S(this, e || [], !1));
        },
        not: function(e) {
            return this.pushStack(S(this, e || [], !0));
        },
        is: function(e) {
            return !!S(this, "string" == typeof e && b.test(e) ? T(e) : e || [], !1).length;
        }
    });
    var A, k = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/;
    (T.fn.init = function(e, t, n) {
        var r, i;
        if (!e) return this;
        if (n = n || A, "string" == typeof e) {
            if (!(r = "<" === e[0] && ">" === e[e.length - 1] && 3 <= e.length ? [ null, e, null ] : k.exec(e)) || !r[1] && t) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
            if (r[1]) {
                if (t = t instanceof T ? t[0] : t, T.merge(this, T.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t : E, !0)), 
                x.test(r[1]) && T.isPlainObject(t)) for (r in t) T.isFunction(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
                return this;
            }
            return (i = E.getElementById(r[2])) && i.parentNode && (this.length = 1, this[0] = i), 
            this.context = E, this.selector = e, this;
        }
        return e.nodeType ? (this.context = this[0] = e, this.length = 1, this) : T.isFunction(e) ? void 0 !== n.ready ? n.ready(e) : e(T) : (void 0 !== e.selector && (this.selector = e.selector, 
        this.context = e.context), T.makeArray(e, this));
    }).prototype = T.fn, A = T(E);
    var M = /^(?:parents|prev(?:Until|All))/, F = {
        children: !0,
        contents: !0,
        next: !0,
        prev: !0
    };
    function N(e, t) {
        for (;(e = e[t]) && 1 !== e.nodeType; ) ;
        return e;
    }
    T.fn.extend({
        has: function(e) {
            var t = T(e, this), n = t.length;
            return this.filter(function() {
                for (var e = 0; e < n; e++) if (T.contains(this, t[e])) return !0;
            });
        },
        closest: function(e, t) {
            for (var n, r = 0, i = this.length, o = [], a = b.test(e) || "string" != typeof e ? T(e, t || this.context) : 0; r < i; r++) for (n = this[r]; n && n !== t; n = n.parentNode) if (n.nodeType < 11 && (a ? -1 < a.index(n) : 1 === n.nodeType && T.find.matchesSelector(n, e))) {
                o.push(n);
                break;
            }
            return this.pushStack(1 < o.length ? T.uniqueSort(o) : o);
        },
        index: function(e) {
            return e ? "string" == typeof e ? i.call(T(e), this[0]) : i.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
        },
        add: function(e, t) {
            return this.pushStack(T.uniqueSort(T.merge(this.get(), T(e, t))));
        },
        addBack: function(e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e));
        }
    }), T.each({
        parent: function(e) {
            var t = e.parentNode;
            return t && 11 !== t.nodeType ? t : null;
        },
        parents: function(e) {
            return v(e, "parentNode");
        },
        parentsUntil: function(e, t, n) {
            return v(e, "parentNode", n);
        },
        next: function(e) {
            return N(e, "nextSibling");
        },
        prev: function(e) {
            return N(e, "previousSibling");
        },
        nextAll: function(e) {
            return v(e, "nextSibling");
        },
        prevAll: function(e) {
            return v(e, "previousSibling");
        },
        nextUntil: function(e, t, n) {
            return v(e, "nextSibling", n);
        },
        prevUntil: function(e, t, n) {
            return v(e, "previousSibling", n);
        },
        siblings: function(e) {
            return y((e.parentNode || {}).firstChild, e);
        },
        children: function(e) {
            return y(e.firstChild);
        },
        contents: function(e) {
            return e.contentDocument || T.merge([], e.childNodes);
        }
    }, function(r, i) {
        T.fn[r] = function(e, t) {
            var n = T.map(this, i, e);
            return "Until" !== r.slice(-5) && (t = e), t && "string" == typeof t && (n = T.filter(t, n)), 
            1 < this.length && (F[r] || T.uniqueSort(n), M.test(r) && n.reverse()), this.pushStack(n);
        };
    });
    var O, j = /\S+/g;
    function P() {
        E.removeEventListener("DOMContentLoaded", P), C.removeEventListener("load", P), 
        T.ready();
    }
    T.Callbacks = function(r) {
        var e, n;
        r = "string" == typeof r ? (e = r, n = {}, T.each(e.match(j) || [], function(e, t) {
            n[t] = !0;
        }), n) : T.extend({}, r);
        var i, t, o, a, s = [], l = [], u = -1, c = function() {
            for (a = r.once, o = i = !0; l.length; u = -1) for (t = l.shift(); ++u < s.length; ) !1 === s[u].apply(t[0], t[1]) && r.stopOnFalse && (u = s.length, 
            t = !1);
            r.memory || (t = !1), i = !1, a && (s = t ? [] : "");
        }, d = {
            add: function() {
                return s && (t && !i && (u = s.length - 1, l.push(t)), function n(e) {
                    T.each(e, function(e, t) {
                        T.isFunction(t) ? r.unique && d.has(t) || s.push(t) : t && t.length && "string" !== T.type(t) && n(t);
                    });
                }(arguments), t && !i && c()), this;
            },
            remove: function() {
                return T.each(arguments, function(e, t) {
                    for (var n; -1 < (n = T.inArray(t, s, n)); ) s.splice(n, 1), n <= u && u--;
                }), this;
            },
            has: function(e) {
                return e ? -1 < T.inArray(e, s) : 0 < s.length;
            },
            empty: function() {
                return s && (s = []), this;
            },
            disable: function() {
                return a = l = [], s = t = "", this;
            },
            disabled: function() {
                return !s;
            },
            lock: function() {
                return a = l = [], t || (s = t = ""), this;
            },
            locked: function() {
                return !!a;
            },
            fireWith: function(e, t) {
                return a || (t = [ e, (t = t || []).slice ? t.slice() : t ], l.push(t), i || c()), 
                this;
            },
            fire: function() {
                return d.fireWith(this, arguments), this;
            },
            fired: function() {
                return !!o;
            }
        };
        return d;
    }, T.extend({
        Deferred: function(e) {
            var o = [ [ "resolve", "done", T.Callbacks("once memory"), "resolved" ], [ "reject", "fail", T.Callbacks("once memory"), "rejected" ], [ "notify", "progress", T.Callbacks("memory") ] ], i = "pending", a = {
                state: function() {
                    return i;
                },
                always: function() {
                    return s.done(arguments).fail(arguments), this;
                },
                then: function() {
                    var i = arguments;
                    return T.Deferred(function(r) {
                        T.each(o, function(e, t) {
                            var n = T.isFunction(i[e]) && i[e];
                            s[t[1]](function() {
                                var e = n && n.apply(this, arguments);
                                e && T.isFunction(e.promise) ? e.promise().progress(r.notify).done(r.resolve).fail(r.reject) : r[t[0] + "With"](this === a ? r.promise() : this, n ? [ e ] : arguments);
                            });
                        }), i = null;
                    }).promise();
                },
                promise: function(e) {
                    return null != e ? T.extend(e, a) : a;
                }
            }, s = {};
            return a.pipe = a.then, T.each(o, function(e, t) {
                var n = t[2], r = t[3];
                a[t[1]] = n.add, r && n.add(function() {
                    i = r;
                }, o[1 ^ e][2].disable, o[2][2].lock), s[t[0]] = function() {
                    return s[t[0] + "With"](this === s ? a : this, arguments), this;
                }, s[t[0] + "With"] = n.fireWith;
            }), a.promise(s), e && e.call(s, s), s;
        },
        when: function(e) {
            var i, t, n, r = 0, o = c.call(arguments), a = o.length, s = 1 !== a || e && T.isFunction(e.promise) ? a : 0, l = 1 === s ? e : T.Deferred(), u = function(t, n, r) {
                return function(e) {
                    n[t] = this, r[t] = 1 < arguments.length ? c.call(arguments) : e, r === i ? l.notifyWith(n, r) : --s || l.resolveWith(n, r);
                };
            };
            if (1 < a) for (i = new Array(a), t = new Array(a), n = new Array(a); r < a; r++) o[r] && T.isFunction(o[r].promise) ? o[r].promise().progress(u(r, t, i)).done(u(r, n, o)).fail(l.reject) : --s;
            return s || l.resolveWith(n, o), l.promise();
        }
    }), T.fn.ready = function(e) {
        return T.ready.promise().done(e), this;
    }, T.extend({
        isReady: !1,
        readyWait: 1,
        holdReady: function(e) {
            e ? T.readyWait++ : T.ready(!0);
        },
        ready: function(e) {
            (!0 === e ? --T.readyWait : T.isReady) || ((T.isReady = !0) !== e && 0 < --T.readyWait || (O.resolveWith(E, [ T ]), 
            T.fn.triggerHandler && (T(E).triggerHandler("ready"), T(E).off("ready"))));
        }
    }), T.ready.promise = function(e) {
        return O || (O = T.Deferred(), "complete" === E.readyState || "loading" !== E.readyState && !E.documentElement.doScroll ? C.setTimeout(T.ready) : (E.addEventListener("DOMContentLoaded", P), 
        C.addEventListener("load", P))), O.promise(e);
    }, T.ready.promise();
    var D = function(e, t, n, r, i, o, a) {
        var s = 0, l = e.length, u = null == n;
        if ("object" === T.type(n)) for (s in i = !0, n) D(e, t, s, n[s], !0, o, a); else if (void 0 !== r && (i = !0, 
        T.isFunction(r) || (a = !0), u && (a ? (t.call(e, r), t = null) : (u = t, t = function(e, t, n) {
            return u.call(T(e), n);
        })), t)) for (;s < l; s++) t(e[s], n, a ? r : r.call(e[s], s, t(e[s], n)));
        return i ? e : u ? t.call(e) : l ? t(e[0], n) : o;
    }, L = function(e) {
        return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType;
    };
    function q() {
        this.expando = T.expando + q.uid++;
    }
    q.uid = 1, q.prototype = {
        register: function(e, t) {
            var n = t || {};
            return e.nodeType ? e[this.expando] = n : Object.defineProperty(e, this.expando, {
                value: n,
                writable: !0,
                configurable: !0
            }), e[this.expando];
        },
        cache: function(e) {
            if (!L(e)) return {};
            var t = e[this.expando];
            return t || (t = {}, L(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
                value: t,
                configurable: !0
            }))), t;
        },
        set: function(e, t, n) {
            var r, i = this.cache(e);
            if ("string" == typeof t) i[t] = n; else for (r in t) i[r] = t[r];
            return i;
        },
        get: function(e, t) {
            return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][t];
        },
        access: function(e, t, n) {
            var r;
            return void 0 === t || t && "string" == typeof t && void 0 === n ? void 0 !== (r = this.get(e, t)) ? r : this.get(e, T.camelCase(t)) : (this.set(e, t, n), 
            void 0 !== n ? n : t);
        },
        remove: function(e, t) {
            var n, r, i, o = e[this.expando];
            if (void 0 !== o) {
                if (void 0 === t) this.register(e); else {
                    T.isArray(t) ? r = t.concat(t.map(T.camelCase)) : (i = T.camelCase(t), t in o ? r = [ t, i ] : r = (r = i) in o ? [ r ] : r.match(j) || []), 
                    n = r.length;
                    for (;n--; ) delete o[r[n]];
                }
                (void 0 === t || T.isEmptyObject(o)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando]);
            }
        },
        hasData: function(e) {
            var t = e[this.expando];
            return void 0 !== t && !T.isEmptyObject(t);
        }
    };
    var H = new q(), U = new q(), I = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/, $ = /[A-Z]/g;
    function R(e, t, n) {
        var r;
        if (void 0 === n && 1 === e.nodeType) if (r = "data-" + t.replace($, "-$&").toLowerCase(), 
        "string" == typeof (n = e.getAttribute(r))) {
            try {
                n = "true" === n || "false" !== n && ("null" === n ? null : +n + "" === n ? +n : I.test(n) ? T.parseJSON(n) : n);
            } catch (e) {}
            U.set(e, t, n);
        } else n = void 0;
        return n;
    }
    T.extend({
        hasData: function(e) {
            return U.hasData(e) || H.hasData(e);
        },
        data: function(e, t, n) {
            return U.access(e, t, n);
        },
        removeData: function(e, t) {
            U.remove(e, t);
        },
        _data: function(e, t, n) {
            return H.access(e, t, n);
        },
        _removeData: function(e, t) {
            H.remove(e, t);
        }
    }), T.fn.extend({
        data: function(r, e) {
            var t, n, i, o = this[0], a = o && o.attributes;
            if (void 0 === r) {
                if (this.length && (i = U.get(o), 1 === o.nodeType && !H.get(o, "hasDataAttrs"))) {
                    for (t = a.length; t--; ) a[t] && (0 === (n = a[t].name).indexOf("data-") && (n = T.camelCase(n.slice(5)), 
                    R(o, n, i[n])));
                    H.set(o, "hasDataAttrs", !0);
                }
                return i;
            }
            return "object" == typeof r ? this.each(function() {
                U.set(this, r);
            }) : D(this, function(t) {
                var e, n;
                if (o && void 0 === t) {
                    if (void 0 !== (e = U.get(o, r) || U.get(o, r.replace($, "-$&").toLowerCase()))) return e;
                    if (n = T.camelCase(r), void 0 !== (e = U.get(o, n))) return e;
                    if (void 0 !== (e = R(o, n, void 0))) return e;
                } else n = T.camelCase(r), this.each(function() {
                    var e = U.get(this, n);
                    U.set(this, n, t), -1 < r.indexOf("-") && void 0 !== e && U.set(this, r, t);
                });
            }, null, e, 1 < arguments.length, null, !0);
        },
        removeData: function(e) {
            return this.each(function() {
                U.remove(this, e);
            });
        }
    }), T.extend({
        queue: function(e, t, n) {
            var r;
            return e ? (t = (t || "fx") + "queue", r = H.get(e, t), n && (!r || T.isArray(n) ? r = H.access(e, t, T.makeArray(n)) : r.push(n)), 
            r || []) : void 0;
        },
        dequeue: function(e, t) {
            t = t || "fx";
            var n = T.queue(e, t), r = n.length, i = n.shift(), o = T._queueHooks(e, t);
            "inprogress" === i && (i = n.shift(), r--), i && ("fx" === t && n.unshift("inprogress"), 
            delete o.stop, i.call(e, function() {
                T.dequeue(e, t);
            }, o)), !r && o && o.empty.fire();
        },
        _queueHooks: function(e, t) {
            var n = t + "queueHooks";
            return H.get(e, n) || H.access(e, n, {
                empty: T.Callbacks("once memory").add(function() {
                    H.remove(e, [ t + "queue", n ]);
                })
            });
        }
    }), T.fn.extend({
        queue: function(t, n) {
            var e = 2;
            return "string" != typeof t && (n = t, t = "fx", e--), arguments.length < e ? T.queue(this[0], t) : void 0 === n ? this : this.each(function() {
                var e = T.queue(this, t, n);
                T._queueHooks(this, t), "fx" === t && "inprogress" !== e[0] && T.dequeue(this, t);
            });
        },
        dequeue: function(e) {
            return this.each(function() {
                T.dequeue(this, e);
            });
        },
        clearQueue: function(e) {
            return this.queue(e || "fx", []);
        },
        promise: function(e, t) {
            var n, r = 1, i = T.Deferred(), o = this, a = this.length, s = function() {
                --r || i.resolveWith(o, [ o ]);
            };
            for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; a--; ) (n = H.get(o[a], e + "queueHooks")) && n.empty && (r++, 
            n.empty.add(s));
            return s(), i.promise(t);
        }
    });
    var V = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source, W = new RegExp("^(?:([+-])=|)(" + V + ")([a-z%]*)$", "i"), z = [ "Top", "Right", "Bottom", "Left" ], _ = function(e, t) {
        return e = t || e, "none" === T.css(e, "display") || !T.contains(e.ownerDocument, e);
    };
    function B(e, t, n, r) {
        var i, o = 1, a = 20, s = r ? function() {
            return r.cur();
        } : function() {
            return T.css(e, t, "");
        }, l = s(), u = n && n[3] || (T.cssNumber[t] ? "" : "px"), c = (T.cssNumber[t] || "px" !== u && +l) && W.exec(T.css(e, t));
        if (c && c[3] !== u) for (u = u || c[3], n = n || [], c = +l || 1; c /= o = o || ".5", 
        T.style(e, t, c + u), o !== (o = s() / l) && 1 !== o && --a; ) ;
        return n && (c = +c || +l || 0, i = n[1] ? c + (n[1] + 1) * n[2] : +n[2], r && (r.unit = u, 
        r.start = c, r.end = i)), i;
    }
    var X = /^(?:checkbox|radio)$/i, Y = /<([\w:-]+)/, G = /^$|\/(?:java|ecma)script/i, K = {
        option: [ 1, "<select multiple='multiple'>", "</select>" ],
        thead: [ 1, "<table>", "</table>" ],
        col: [ 2, "<table><colgroup>", "</colgroup></table>" ],
        tr: [ 2, "<table><tbody>", "</tbody></table>" ],
        td: [ 3, "<table><tbody><tr>", "</tr></tbody></table>" ],
        _default: [ 0, "", "" ]
    };
    function Q(e, t) {
        var n = void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t || "*") : void 0 !== e.querySelectorAll ? e.querySelectorAll(t || "*") : [];
        return void 0 === t || t && T.nodeName(e, t) ? T.merge([ e ], n) : n;
    }
    function Z(e, t) {
        for (var n = 0, r = e.length; n < r; n++) H.set(e[n], "globalEval", !t || H.get(t[n], "globalEval"));
    }
    K.optgroup = K.option, K.tbody = K.tfoot = K.colgroup = K.caption = K.thead, K.th = K.td;
    var J, ee, te = /<|&#?\w+;/;
    function ne(e, t, n, r, i) {
        for (var o, a, s, l, u, c, d = t.createDocumentFragment(), f = [], p = 0, h = e.length; p < h; p++) if ((o = e[p]) || 0 === o) if ("object" === T.type(o)) T.merge(f, o.nodeType ? [ o ] : o); else if (te.test(o)) {
            for (a = a || d.appendChild(t.createElement("div")), s = (Y.exec(o) || [ "", "" ])[1].toLowerCase(), 
            l = K[s] || K._default, a.innerHTML = l[1] + T.htmlPrefilter(o) + l[2], c = l[0]; c--; ) a = a.lastChild;
            T.merge(f, a.childNodes), (a = d.firstChild).textContent = "";
        } else f.push(t.createTextNode(o));
        for (d.textContent = "", p = 0; o = f[p++]; ) if (r && -1 < T.inArray(o, r)) i && i.push(o); else if (u = T.contains(o.ownerDocument, o), 
        a = Q(d.appendChild(o), "script"), u && Z(a), n) for (c = 0; o = a[c++]; ) G.test(o.type || "") && n.push(o);
        return d;
    }
    J = E.createDocumentFragment().appendChild(E.createElement("div")), (ee = E.createElement("input")).setAttribute("type", "radio"), 
    ee.setAttribute("checked", "checked"), ee.setAttribute("name", "t"), J.appendChild(ee), 
    m.checkClone = J.cloneNode(!0).cloneNode(!0).lastChild.checked, J.innerHTML = "<textarea>x</textarea>", 
    m.noCloneChecked = !!J.cloneNode(!0).lastChild.defaultValue;
    var re = /^key/, ie = /^(?:mouse|pointer|contextmenu|drag|drop)|click/, oe = /^([^.]*)(?:\.(.+)|)/;
    function ae() {
        return !0;
    }
    function se() {
        return !1;
    }
    function le() {
        try {
            return E.activeElement;
        } catch (e) {}
    }
    function ue(e, t, n, r, i, o) {
        var a, s;
        if ("object" == typeof t) {
            for (s in "string" != typeof n && (r = r || n, n = void 0), t) ue(e, s, n, r, t[s], o);
            return e;
        }
        if (null == r && null == i ? (i = n, r = n = void 0) : null == i && ("string" == typeof n ? (i = r, 
        r = void 0) : (i = r, r = n, n = void 0)), !1 === i) i = se; else if (!i) return e;
        return 1 === o && (a = i, (i = function(e) {
            return T().off(e), a.apply(this, arguments);
        }).guid = a.guid || (a.guid = T.guid++)), e.each(function() {
            T.event.add(this, t, i, r, n);
        });
    }
    T.event = {
        global: {},
        add: function(t, e, n, r, i) {
            var o, a, s, l, u, c, d, f, p, h, g, m = H.get(t);
            if (m) for (n.handler && (n = (o = n).handler, i = o.selector), n.guid || (n.guid = T.guid++), 
            (l = m.events) || (l = m.events = {}), (a = m.handle) || (a = m.handle = function(e) {
                return void 0 !== T && T.event.triggered !== e.type ? T.event.dispatch.apply(t, arguments) : void 0;
            }), u = (e = (e || "").match(j) || [ "" ]).length; u--; ) p = g = (s = oe.exec(e[u]) || [])[1], 
            h = (s[2] || "").split(".").sort(), p && (d = T.event.special[p] || {}, p = (i ? d.delegateType : d.bindType) || p, 
            d = T.event.special[p] || {}, c = T.extend({
                type: p,
                origType: g,
                data: r,
                handler: n,
                guid: n.guid,
                selector: i,
                needsContext: i && T.expr.match.needsContext.test(i),
                namespace: h.join(".")
            }, o), (f = l[p]) || ((f = l[p] = []).delegateCount = 0, d.setup && !1 !== d.setup.call(t, r, h, a) || t.addEventListener && t.addEventListener(p, a)), 
            d.add && (d.add.call(t, c), c.handler.guid || (c.handler.guid = n.guid)), i ? f.splice(f.delegateCount++, 0, c) : f.push(c), 
            T.event.global[p] = !0);
        },
        remove: function(e, t, n, r, i) {
            var o, a, s, l, u, c, d, f, p, h, g, m = H.hasData(e) && H.get(e);
            if (m && (l = m.events)) {
                for (u = (t = (t || "").match(j) || [ "" ]).length; u--; ) if (p = g = (s = oe.exec(t[u]) || [])[1], 
                h = (s[2] || "").split(".").sort(), p) {
                    for (d = T.event.special[p] || {}, f = l[p = (r ? d.delegateType : d.bindType) || p] || [], 
                    s = s[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), a = o = f.length; o--; ) c = f[o], 
                    !i && g !== c.origType || n && n.guid !== c.guid || s && !s.test(c.namespace) || r && r !== c.selector && ("**" !== r || !c.selector) || (f.splice(o, 1), 
                    c.selector && f.delegateCount--, d.remove && d.remove.call(e, c));
                    a && !f.length && (d.teardown && !1 !== d.teardown.call(e, h, m.handle) || T.removeEvent(e, p, m.handle), 
                    delete l[p]);
                } else for (p in l) T.event.remove(e, p + t[u], n, r, !0);
                T.isEmptyObject(l) && H.remove(e, "handle events");
            }
        },
        dispatch: function(e) {
            e = T.event.fix(e);
            var t, n, r, i, o, a = [], s = c.call(arguments), l = (H.get(this, "events") || {})[e.type] || [], u = T.event.special[e.type] || {};
            if ((s[0] = e).delegateTarget = this, !u.preDispatch || !1 !== u.preDispatch.call(this, e)) {
                for (a = T.event.handlers.call(this, e, l), t = 0; (i = a[t++]) && !e.isPropagationStopped(); ) for (e.currentTarget = i.elem, 
                n = 0; (o = i.handlers[n++]) && !e.isImmediatePropagationStopped(); ) e.rnamespace && !e.rnamespace.test(o.namespace) || (e.handleObj = o, 
                e.data = o.data, void 0 !== (r = ((T.event.special[o.origType] || {}).handle || o.handler).apply(i.elem, s)) && !1 === (e.result = r) && (e.preventDefault(), 
                e.stopPropagation()));
                return u.postDispatch && u.postDispatch.call(this, e), e.result;
            }
        },
        handlers: function(e, t) {
            var n, r, i, o, a = [], s = t.delegateCount, l = e.target;
            if (s && l.nodeType && ("click" !== e.type || isNaN(e.button) || e.button < 1)) for (;l !== this; l = l.parentNode || this) if (1 === l.nodeType && (!0 !== l.disabled || "click" !== e.type)) {
                for (r = [], n = 0; n < s; n++) void 0 === r[i = (o = t[n]).selector + " "] && (r[i] = o.needsContext ? -1 < T(i, this).index(l) : T.find(i, this, null, [ l ]).length), 
                r[i] && r.push(o);
                r.length && a.push({
                    elem: l,
                    handlers: r
                });
            }
            return s < t.length && a.push({
                elem: this,
                handlers: t.slice(s)
            }), a;
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function(e, t) {
                return null == e.which && (e.which = null != t.charCode ? t.charCode : t.keyCode), 
                e;
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function(e, t) {
                var n, r, i, o = t.button;
                return null == e.pageX && null != t.clientX && (r = (n = e.target.ownerDocument || E).documentElement, 
                i = n.body, e.pageX = t.clientX + (r && r.scrollLeft || i && i.scrollLeft || 0) - (r && r.clientLeft || i && i.clientLeft || 0), 
                e.pageY = t.clientY + (r && r.scrollTop || i && i.scrollTop || 0) - (r && r.clientTop || i && i.clientTop || 0)), 
                e.which || void 0 === o || (e.which = 1 & o ? 1 : 2 & o ? 3 : 4 & o ? 2 : 0), e;
            }
        },
        fix: function(e) {
            if (e[T.expando]) return e;
            var t, n, r, i = e.type, o = e, a = this.fixHooks[i];
            for (a || (this.fixHooks[i] = a = ie.test(i) ? this.mouseHooks : re.test(i) ? this.keyHooks : {}), 
            r = a.props ? this.props.concat(a.props) : this.props, e = new T.Event(o), t = r.length; t--; ) e[n = r[t]] = o[n];
            return e.target || (e.target = E), 3 === e.target.nodeType && (e.target = e.target.parentNode), 
            a.filter ? a.filter(e, o) : e;
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function() {
                    return this !== le() && this.focus ? (this.focus(), !1) : void 0;
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    return this === le() && this.blur ? (this.blur(), !1) : void 0;
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function() {
                    return "checkbox" === this.type && this.click && T.nodeName(this, "input") ? (this.click(), 
                    !1) : void 0;
                },
                _default: function(e) {
                    return T.nodeName(e.target, "a");
                }
            },
            beforeunload: {
                postDispatch: function(e) {
                    void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result);
                }
            }
        }
    }, T.removeEvent = function(e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n);
    }, T.Event = function(e, t) {
        return this instanceof T.Event ? (e && e.type ? (this.originalEvent = e, this.type = e.type, 
        this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? ae : se) : this.type = e, 
        t && T.extend(this, t), this.timeStamp = e && e.timeStamp || T.now(), void (this[T.expando] = !0)) : new T.Event(e, t);
    }, T.Event.prototype = {
        constructor: T.Event,
        isDefaultPrevented: se,
        isPropagationStopped: se,
        isImmediatePropagationStopped: se,
        isSimulated: !1,
        preventDefault: function() {
            var e = this.originalEvent;
            this.isDefaultPrevented = ae, e && !this.isSimulated && e.preventDefault();
        },
        stopPropagation: function() {
            var e = this.originalEvent;
            this.isPropagationStopped = ae, e && !this.isSimulated && e.stopPropagation();
        },
        stopImmediatePropagation: function() {
            var e = this.originalEvent;
            this.isImmediatePropagationStopped = ae, e && !this.isSimulated && e.stopImmediatePropagation(), 
            this.stopPropagation();
        }
    }, T.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function(e, i) {
        T.event.special[e] = {
            delegateType: i,
            bindType: i,
            handle: function(e) {
                var t, n = e.relatedTarget, r = e.handleObj;
                return n && (n === this || T.contains(this, n)) || (e.type = r.origType, t = r.handler.apply(this, arguments), 
                e.type = i), t;
            }
        };
    }), T.fn.extend({
        on: function(e, t, n, r) {
            return ue(this, e, t, n, r);
        },
        one: function(e, t, n, r) {
            return ue(this, e, t, n, r, 1);
        },
        off: function(e, t, n) {
            var r, i;
            if (e && e.preventDefault && e.handleObj) return r = e.handleObj, T(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler), 
            this;
            if ("object" == typeof e) {
                for (i in e) this.off(i, t, e[i]);
                return this;
            }
            return !1 !== t && "function" != typeof t || (n = t, t = void 0), !1 === n && (n = se), 
            this.each(function() {
                T.event.remove(this, e, n, t);
            });
        }
    });
    var ce = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi, de = /<script|<style|<link/i, fe = /checked\s*(?:[^=]|=\s*.checked.)/i, pe = /^true\/(.*)/, he = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
    function ge(e, t) {
        return T.nodeName(e, "table") && T.nodeName(11 !== t.nodeType ? t : t.firstChild, "tr") ? e.getElementsByTagName("tbody")[0] || e.appendChild(e.ownerDocument.createElement("tbody")) : e;
    }
    function me(e) {
        return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e;
    }
    function ve(e) {
        var t = pe.exec(e.type);
        return t ? e.type = t[1] : e.removeAttribute("type"), e;
    }
    function ye(e, t) {
        var n, r, i, o, a, s, l, u;
        if (1 === t.nodeType) {
            if (H.hasData(e) && (o = H.access(e), a = H.set(t, o), u = o.events)) for (i in delete a.handle, 
            a.events = {}, u) for (n = 0, r = u[i].length; n < r; n++) T.event.add(t, i, u[i][n]);
            U.hasData(e) && (s = U.access(e), l = T.extend({}, s), U.set(t, l));
        }
    }
    function be(n, r, i, o) {
        r = g.apply([], r);
        var e, t, a, s, l, u, c = 0, d = n.length, f = d - 1, p = r[0], h = T.isFunction(p);
        if (h || 1 < d && "string" == typeof p && !m.checkClone && fe.test(p)) return n.each(function(e) {
            var t = n.eq(e);
            h && (r[0] = p.call(this, e, t.html())), be(t, r, i, o);
        });
        if (d && (t = (e = ne(r, n[0].ownerDocument, !1, n, o)).firstChild, 1 === e.childNodes.length && (e = t), 
        t || o)) {
            for (s = (a = T.map(Q(e, "script"), me)).length; c < d; c++) l = e, c !== f && (l = T.clone(l, !0, !0), 
            s && T.merge(a, Q(l, "script"))), i.call(n[c], l, c);
            if (s) for (u = a[a.length - 1].ownerDocument, T.map(a, ve), c = 0; c < s; c++) l = a[c], 
            G.test(l.type || "") && !H.access(l, "globalEval") && T.contains(u, l) && (l.src ? T._evalUrl && T._evalUrl(l.src) : T.globalEval(l.textContent.replace(he, "")));
        }
        return n;
    }
    function xe(e, t, n) {
        for (var r, i = t ? T.filter(t, e) : e, o = 0; null != (r = i[o]); o++) n || 1 !== r.nodeType || T.cleanData(Q(r)), 
        r.parentNode && (n && T.contains(r.ownerDocument, r) && Z(Q(r, "script")), r.parentNode.removeChild(r));
        return e;
    }
    T.extend({
        htmlPrefilter: function(e) {
            return e.replace(ce, "<$1></$2>");
        },
        clone: function(e, t, n) {
            var r, i, o, a, s, l, u, c = e.cloneNode(!0), d = T.contains(e.ownerDocument, e);
            if (!(m.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || T.isXMLDoc(e))) for (a = Q(c), 
            r = 0, i = (o = Q(e)).length; r < i; r++) s = o[r], l = a[r], void 0, "input" === (u = l.nodeName.toLowerCase()) && X.test(s.type) ? l.checked = s.checked : "input" !== u && "textarea" !== u || (l.defaultValue = s.defaultValue);
            if (t) if (n) for (o = o || Q(e), a = a || Q(c), r = 0, i = o.length; r < i; r++) ye(o[r], a[r]); else ye(e, c);
            return 0 < (a = Q(c, "script")).length && Z(a, !d && Q(e, "script")), c;
        },
        cleanData: function(e) {
            for (var t, n, r, i = T.event.special, o = 0; void 0 !== (n = e[o]); o++) if (L(n)) {
                if (t = n[H.expando]) {
                    if (t.events) for (r in t.events) i[r] ? T.event.remove(n, r) : T.removeEvent(n, r, t.handle);
                    n[H.expando] = void 0;
                }
                n[U.expando] && (n[U.expando] = void 0);
            }
        }
    }), T.fn.extend({
        domManip: be,
        detach: function(e) {
            return xe(this, e, !0);
        },
        remove: function(e) {
            return xe(this, e);
        },
        text: function(e) {
            return D(this, function(e) {
                return void 0 === e ? T.text(this) : this.empty().each(function() {
                    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e);
                });
            }, null, e, arguments.length);
        },
        append: function() {
            return be(this, arguments, function(e) {
                1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || ge(this, e).appendChild(e);
            });
        },
        prepend: function() {
            return be(this, arguments, function(e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = ge(this, e);
                    t.insertBefore(e, t.firstChild);
                }
            });
        },
        before: function() {
            return be(this, arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this);
            });
        },
        after: function() {
            return be(this, arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this.nextSibling);
            });
        },
        empty: function() {
            for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (T.cleanData(Q(e, !1)), 
            e.textContent = "");
            return this;
        },
        clone: function(e, t) {
            return e = null != e && e, t = null == t ? e : t, this.map(function() {
                return T.clone(this, e, t);
            });
        },
        html: function(e) {
            return D(this, function(e) {
                var t = this[0] || {}, n = 0, r = this.length;
                if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
                if ("string" == typeof e && !de.test(e) && !K[(Y.exec(e) || [ "", "" ])[1].toLowerCase()]) {
                    e = T.htmlPrefilter(e);
                    try {
                        for (;n < r; n++) 1 === (t = this[n] || {}).nodeType && (T.cleanData(Q(t, !1)), 
                        t.innerHTML = e);
                        t = 0;
                    } catch (e) {}
                }
                t && this.empty().append(e);
            }, null, e, arguments.length);
        },
        replaceWith: function() {
            var n = [];
            return be(this, arguments, function(e) {
                var t = this.parentNode;
                T.inArray(this, n) < 0 && (T.cleanData(Q(this)), t && t.replaceChild(e, this));
            }, n);
        }
    }), T.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(e, a) {
        T.fn[e] = function(e) {
            for (var t, n = [], r = T(e), i = r.length - 1, o = 0; o <= i; o++) t = o === i ? this : this.clone(!0), 
            T(r[o])[a](t), s.apply(n, t.get());
            return this.pushStack(n);
        };
    });
    var we, Se = {
        HTML: "block",
        BODY: "block"
    };
    function Ce(e, t) {
        var n = T(t.createElement(e)).appendTo(t.body), r = T.css(n[0], "display");
        return n.detach(), r;
    }
    function Ee(e) {
        var t = E, n = Se[e];
        return n || ("none" !== (n = Ce(e, t)) && n || ((t = (we = (we || T("<iframe frameborder='0' width='0' height='0'/>")).appendTo(t.documentElement))[0].contentDocument).write(), 
        t.close(), n = Ce(e, t), we.detach()), Se[e] = n), n;
    }
    var Te = /^margin/, Ae = new RegExp("^(" + V + ")(?!px)[a-z%]+$", "i"), ke = function(e) {
        var t = e.ownerDocument.defaultView;
        return t && t.opener || (t = C), t.getComputedStyle(e);
    }, Me = function(e, t, n, r) {
        var i, o, a = {};
        for (o in t) a[o] = e.style[o], e.style[o] = t[o];
        for (o in i = n.apply(e, r || []), t) e.style[o] = a[o];
        return i;
    }, Fe = E.documentElement;
    function Ne(e, t, n) {
        var r, i, o, a, s = e.style;
        return "" !== (a = (n = n || ke(e)) ? n.getPropertyValue(t) || n[t] : void 0) && void 0 !== a || T.contains(e.ownerDocument, e) || (a = T.style(e, t)), 
        n && !m.pixelMarginRight() && Ae.test(a) && Te.test(t) && (r = s.width, i = s.minWidth, 
        o = s.maxWidth, s.minWidth = s.maxWidth = s.width = a, a = n.width, s.width = r, 
        s.minWidth = i, s.maxWidth = o), void 0 !== a ? a + "" : a;
    }
    function Oe(e, t) {
        return {
            get: function() {
                return e() ? void delete this.get : (this.get = t).apply(this, arguments);
            }
        };
    }
    !function() {
        var t, n, r, i, o = E.createElement("div"), a = E.createElement("div");
        if (a.style) {
            function e() {
                a.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%", 
                a.innerHTML = "", Fe.appendChild(o);
                var e = C.getComputedStyle(a);
                t = "1%" !== e.top, i = "2px" === e.marginLeft, n = "4px" === e.width, a.style.marginRight = "50%", 
                r = "4px" === e.marginRight, Fe.removeChild(o);
            }
            a.style.backgroundClip = "content-box", a.cloneNode(!0).style.backgroundClip = "", 
            m.clearCloneStyle = "content-box" === a.style.backgroundClip, o.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute", 
            o.appendChild(a), T.extend(m, {
                pixelPosition: function() {
                    return e(), t;
                },
                boxSizingReliable: function() {
                    return null == n && e(), n;
                },
                pixelMarginRight: function() {
                    return null == n && e(), r;
                },
                reliableMarginLeft: function() {
                    return null == n && e(), i;
                },
                reliableMarginRight: function() {
                    var e, t = a.appendChild(E.createElement("div"));
                    return t.style.cssText = a.style.cssText = "-webkit-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", 
                    t.style.marginRight = t.style.width = "0", a.style.width = "1px", Fe.appendChild(o), 
                    e = !parseFloat(C.getComputedStyle(t).marginRight), Fe.removeChild(o), a.removeChild(t), 
                    e;
                }
            });
        }
    }();
    var je = /^(none|table(?!-c[ea]).+)/, Pe = {
        position: "absolute",
        visibility: "hidden",
        display: "block"
    }, De = {
        letterSpacing: "0",
        fontWeight: "400"
    }, Le = [ "Webkit", "O", "Moz", "ms" ], qe = E.createElement("div").style;
    function He(e) {
        if (e in qe) return e;
        for (var t = e[0].toUpperCase() + e.slice(1), n = Le.length; n--; ) if ((e = Le[n] + t) in qe) return e;
    }
    function Ue(e, t, n) {
        var r = W.exec(t);
        return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t;
    }
    function Ie(e, t, n, r, i) {
        for (var o = n === (r ? "border" : "content") ? 4 : "width" === t ? 1 : 0, a = 0; o < 4; o += 2) "margin" === n && (a += T.css(e, n + z[o], !0, i)), 
        r ? ("content" === n && (a -= T.css(e, "padding" + z[o], !0, i)), "margin" !== n && (a -= T.css(e, "border" + z[o] + "Width", !0, i))) : (a += T.css(e, "padding" + z[o], !0, i), 
        "padding" !== n && (a += T.css(e, "border" + z[o] + "Width", !0, i)));
        return a;
    }
    function $e(e, t, n) {
        var r = !0, i = "width" === t ? e.offsetWidth : e.offsetHeight, o = ke(e), a = "border-box" === T.css(e, "boxSizing", !1, o);
        if (i <= 0 || null == i) {
            if (((i = Ne(e, t, o)) < 0 || null == i) && (i = e.style[t]), Ae.test(i)) return i;
            r = a && (m.boxSizingReliable() || i === e.style[t]), i = parseFloat(i) || 0;
        }
        return i + Ie(e, t, n || (a ? "border" : "content"), r, o) + "px";
    }
    function Re(e, t) {
        for (var n, r, i, o = [], a = 0, s = e.length; a < s; a++) (r = e[a]).style && (o[a] = H.get(r, "olddisplay"), 
        n = r.style.display, t ? (o[a] || "none" !== n || (r.style.display = ""), "" === r.style.display && _(r) && (o[a] = H.access(r, "olddisplay", Ee(r.nodeName)))) : (i = _(r), 
        "none" === n && i || H.set(r, "olddisplay", i ? n : T.css(r, "display"))));
        for (a = 0; a < s; a++) (r = e[a]).style && (t && "none" !== r.style.display && "" !== r.style.display || (r.style.display = t ? o[a] || "" : "none"));
        return e;
    }
    function Ve(e, t, n, r, i) {
        return new Ve.prototype.init(e, t, n, r, i);
    }
    T.extend({
        cssHooks: {
            opacity: {
                get: function(e, t) {
                    if (t) {
                        var n = Ne(e, "opacity");
                        return "" === n ? "1" : n;
                    }
                }
            }
        },
        cssNumber: {
            animationIterationCount: !0,
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            "float": "cssFloat"
        },
        style: function(e, t, n, r) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var i, o, a, s = T.camelCase(t), l = e.style;
                return t = T.cssProps[s] || (T.cssProps[s] = He(s) || s), a = T.cssHooks[t] || T.cssHooks[s], 
                void 0 === n ? a && "get" in a && void 0 !== (i = a.get(e, !1, r)) ? i : l[t] : ("string" === (o = typeof n) && (i = W.exec(n)) && i[1] && (n = B(e, t, i), 
                o = "number"), void (null != n && n == n && ("number" === o && (n += i && i[3] || (T.cssNumber[s] ? "" : "px")), 
                m.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (l[t] = "inherit"), 
                a && "set" in a && void 0 === (n = a.set(e, n, r)) || (l[t] = n))));
            }
        },
        css: function(e, t, n, r) {
            var i, o, a, s = T.camelCase(t);
            return t = T.cssProps[s] || (T.cssProps[s] = He(s) || s), (a = T.cssHooks[t] || T.cssHooks[s]) && "get" in a && (i = a.get(e, !0, n)), 
            void 0 === i && (i = Ne(e, t, r)), "normal" === i && t in De && (i = De[t]), "" === n || n ? (o = parseFloat(i), 
            !0 === n || isFinite(o) ? o || 0 : i) : i;
        }
    }), T.each([ "height", "width" ], function(e, a) {
        T.cssHooks[a] = {
            get: function(e, t, n) {
                return t ? je.test(T.css(e, "display")) && 0 === e.offsetWidth ? Me(e, Pe, function() {
                    return $e(e, a, n);
                }) : $e(e, a, n) : void 0;
            },
            set: function(e, t, n) {
                var r, i = n && ke(e), o = n && Ie(e, a, n, "border-box" === T.css(e, "boxSizing", !1, i), i);
                return o && (r = W.exec(t)) && "px" !== (r[3] || "px") && (e.style[a] = t, t = T.css(e, a)), 
                Ue(0, t, o);
            }
        };
    }), T.cssHooks.marginLeft = Oe(m.reliableMarginLeft, function(e, t) {
        return t ? (parseFloat(Ne(e, "marginLeft")) || e.getBoundingClientRect().left - Me(e, {
            marginLeft: 0
        }, function() {
            return e.getBoundingClientRect().left;
        })) + "px" : void 0;
    }), T.cssHooks.marginRight = Oe(m.reliableMarginRight, function(e, t) {
        return t ? Me(e, {
            display: "inline-block"
        }, Ne, [ e, "marginRight" ]) : void 0;
    }), T.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(i, o) {
        T.cssHooks[i + o] = {
            expand: function(e) {
                for (var t = 0, n = {}, r = "string" == typeof e ? e.split(" ") : [ e ]; t < 4; t++) n[i + z[t] + o] = r[t] || r[t - 2] || r[0];
                return n;
            }
        }, Te.test(i) || (T.cssHooks[i + o].set = Ue);
    }), T.fn.extend({
        css: function(e, t) {
            return D(this, function(e, t, n) {
                var r, i, o = {}, a = 0;
                if (T.isArray(t)) {
                    for (r = ke(e), i = t.length; a < i; a++) o[t[a]] = T.css(e, t[a], !1, r);
                    return o;
                }
                return void 0 !== n ? T.style(e, t, n) : T.css(e, t);
            }, e, t, 1 < arguments.length);
        },
        show: function() {
            return Re(this, !0);
        },
        hide: function() {
            return Re(this);
        },
        toggle: function(e) {
            return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() {
                _(this) ? T(this).show() : T(this).hide();
            });
        }
    }), ((T.Tween = Ve).prototype = {
        constructor: Ve,
        init: function(e, t, n, r, i, o) {
            this.elem = e, this.prop = n, this.easing = i || T.easing._default, this.options = t, 
            this.start = this.now = this.cur(), this.end = r, this.unit = o || (T.cssNumber[n] ? "" : "px");
        },
        cur: function() {
            var e = Ve.propHooks[this.prop];
            return e && e.get ? e.get(this) : Ve.propHooks._default.get(this);
        },
        run: function(e) {
            var t, n = Ve.propHooks[this.prop];
            return this.options.duration ? this.pos = t = T.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, 
            this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), 
            n && n.set ? n.set(this) : Ve.propHooks._default.set(this), this;
        }
    }).init.prototype = Ve.prototype, (Ve.propHooks = {
        _default: {
            get: function(e) {
                var t;
                return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = T.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0;
            },
            set: function(e) {
                T.fx.step[e.prop] ? T.fx.step[e.prop](e) : 1 !== e.elem.nodeType || null == e.elem.style[T.cssProps[e.prop]] && !T.cssHooks[e.prop] ? e.elem[e.prop] = e.now : T.style(e.elem, e.prop, e.now + e.unit);
            }
        }
    }).scrollTop = Ve.propHooks.scrollLeft = {
        set: function(e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now);
        }
    }, T.easing = {
        linear: function(e) {
            return e;
        },
        swing: function(e) {
            return .5 - Math.cos(e * Math.PI) / 2;
        },
        _default: "swing"
    }, T.fx = Ve.prototype.init, T.fx.step = {};
    var We, ze, _e, Be, Xe, Ye = /^(?:toggle|show|hide)$/, Ge = /queueHooks$/;
    function Ke() {
        return C.setTimeout(function() {
            We = void 0;
        }), We = T.now();
    }
    function Qe(e, t) {
        var n, r = 0, i = {
            height: e
        };
        for (t = t ? 1 : 0; r < 4; r += 2 - t) i["margin" + (n = z[r])] = i["padding" + n] = e;
        return t && (i.opacity = i.width = e), i;
    }
    function Ze(e, t, n) {
        for (var r, i = (Je.tweeners[t] || []).concat(Je.tweeners["*"]), o = 0, a = i.length; o < a; o++) if (r = i[o].call(n, t, e)) return r;
    }
    function Je(o, e, t) {
        var n, a, r = 0, i = Je.prefilters.length, s = T.Deferred().always(function() {
            delete l.elem;
        }), l = function() {
            if (a) return !1;
            for (var e = We || Ke(), t = Math.max(0, u.startTime + u.duration - e), n = 1 - (t / u.duration || 0), r = 0, i = u.tweens.length; r < i; r++) u.tweens[r].run(n);
            return s.notifyWith(o, [ u, n, t ]), n < 1 && i ? t : (s.resolveWith(o, [ u ]), 
            !1);
        }, u = s.promise({
            elem: o,
            props: T.extend({}, e),
            opts: T.extend(!0, {
                specialEasing: {},
                easing: T.easing._default
            }, t),
            originalProperties: e,
            originalOptions: t,
            startTime: We || Ke(),
            duration: t.duration,
            tweens: [],
            createTween: function(e, t) {
                var n = T.Tween(o, u.opts, e, t, u.opts.specialEasing[e] || u.opts.easing);
                return u.tweens.push(n), n;
            },
            stop: function(e) {
                var t = 0, n = e ? u.tweens.length : 0;
                if (a) return this;
                for (a = !0; t < n; t++) u.tweens[t].run(1);
                return e ? (s.notifyWith(o, [ u, 1, 0 ]), s.resolveWith(o, [ u, e ])) : s.rejectWith(o, [ u, e ]), 
                this;
            }
        }), c = u.props;
        for ((function(e, t) {
            var n, r, i, o, a;
            for (n in e) if (i = t[r = T.camelCase(n)], o = e[n], T.isArray(o) && (i = o[1], 
            o = e[n] = o[0]), n !== r && (e[r] = o, delete e[n]), (a = T.cssHooks[r]) && "expand" in a) for (n in o = a.expand(o), 
            delete e[r], o) n in e || (e[n] = o[n], t[n] = i); else t[r] = i;
        }(c, u.opts.specialEasing)); r < i; r++) if (n = Je.prefilters[r].call(u, o, c, u.opts)) return T.isFunction(n.stop) && (T._queueHooks(u.elem, u.opts.queue).stop = T.proxy(n.stop, n)), 
        n;
        return T.map(c, Ze, u), T.isFunction(u.opts.start) && u.opts.start.call(o, u), T.fx.timer(T.extend(l, {
            elem: o,
            anim: u,
            queue: u.opts.queue
        })), u.progress(u.opts.progress).done(u.opts.done, u.opts.complete).fail(u.opts.fail).always(u.opts.always);
    }
    T.Animation = T.extend(Je, {
        tweeners: {
            "*": [ function(e, t) {
                var n = this.createTween(e, t);
                return B(n.elem, e, W.exec(t), n), n;
            } ]
        },
        tweener: function(e, t) {
            T.isFunction(e) ? (t = e, e = [ "*" ]) : e = e.match(j);
            for (var n, r = 0, i = e.length; r < i; r++) n = e[r], Je.tweeners[n] = Je.tweeners[n] || [], 
            Je.tweeners[n].unshift(t);
        },
        prefilters: [ function(t, e, n) {
            var r, i, o, a, s, l, u, c = this, d = {}, f = t.style, p = t.nodeType && _(t), h = H.get(t, "fxshow");
            for (r in n.queue || (null == (s = T._queueHooks(t, "fx")).unqueued && (s.unqueued = 0, 
            l = s.empty.fire, s.empty.fire = function() {
                s.unqueued || l();
            }), s.unqueued++, c.always(function() {
                c.always(function() {
                    s.unqueued--, T.queue(t, "fx").length || s.empty.fire();
                });
            })), 1 === t.nodeType && ("height" in e || "width" in e) && (n.overflow = [ f.overflow, f.overflowX, f.overflowY ], 
            "inline" === ("none" === (u = T.css(t, "display")) ? H.get(t, "olddisplay") || Ee(t.nodeName) : u) && "none" === T.css(t, "float") && (f.display = "inline-block")), 
            n.overflow && (f.overflow = "hidden", c.always(function() {
                f.overflow = n.overflow[0], f.overflowX = n.overflow[1], f.overflowY = n.overflow[2];
            })), e) if (i = e[r], Ye.exec(i)) {
                if (delete e[r], o = o || "toggle" === i, i === (p ? "hide" : "show")) {
                    if ("show" !== i || !h || void 0 === h[r]) continue;
                    p = !0;
                }
                d[r] = h && h[r] || T.style(t, r);
            } else u = void 0;
            if (T.isEmptyObject(d)) "inline" === ("none" === u ? Ee(t.nodeName) : u) && (f.display = u); else for (r in h ? "hidden" in h && (p = h.hidden) : h = H.access(t, "fxshow", {}), 
            o && (h.hidden = !p), p ? T(t).show() : c.done(function() {
                T(t).hide();
            }), c.done(function() {
                var e;
                for (e in H.remove(t, "fxshow"), d) T.style(t, e, d[e]);
            }), d) a = Ze(p ? h[r] : 0, r, c), r in h || (h[r] = a.start, p && (a.end = a.start, 
            a.start = "width" === r || "height" === r ? 1 : 0));
        } ],
        prefilter: function(e, t) {
            t ? Je.prefilters.unshift(e) : Je.prefilters.push(e);
        }
    }), T.speed = function(e, t, n) {
        var r = e && "object" == typeof e ? T.extend({}, e) : {
            complete: n || !n && t || T.isFunction(e) && e,
            duration: e,
            easing: n && t || t && !T.isFunction(t) && t
        };
        return r.duration = T.fx.off ? 0 : "number" == typeof r.duration ? r.duration : r.duration in T.fx.speeds ? T.fx.speeds[r.duration] : T.fx.speeds._default, 
        null != r.queue && !0 !== r.queue || (r.queue = "fx"), r.old = r.complete, r.complete = function() {
            T.isFunction(r.old) && r.old.call(this), r.queue && T.dequeue(this, r.queue);
        }, r;
    }, T.fn.extend({
        fadeTo: function(e, t, n, r) {
            return this.filter(_).css("opacity", 0).show().end().animate({
                opacity: t
            }, e, n, r);
        },
        animate: function(t, e, n, r) {
            var i = T.isEmptyObject(t), o = T.speed(e, n, r), a = function() {
                var e = Je(this, T.extend({}, t), o);
                (i || H.get(this, "finish")) && e.stop(!0);
            };
            return a.finish = a, i || !1 === o.queue ? this.each(a) : this.queue(o.queue, a);
        },
        stop: function(i, e, o) {
            var a = function(e) {
                var t = e.stop;
                delete e.stop, t(o);
            };
            return "string" != typeof i && (o = e, e = i, i = void 0), e && !1 !== i && this.queue(i || "fx", []), 
            this.each(function() {
                var e = !0, t = null != i && i + "queueHooks", n = T.timers, r = H.get(this);
                if (t) r[t] && r[t].stop && a(r[t]); else for (t in r) r[t] && r[t].stop && Ge.test(t) && a(r[t]);
                for (t = n.length; t--; ) n[t].elem !== this || null != i && n[t].queue !== i || (n[t].anim.stop(o), 
                e = !1, n.splice(t, 1));
                !e && o || T.dequeue(this, i);
            });
        },
        finish: function(a) {
            return !1 !== a && (a = a || "fx"), this.each(function() {
                var e, t = H.get(this), n = t[a + "queue"], r = t[a + "queueHooks"], i = T.timers, o = n ? n.length : 0;
                for (t.finish = !0, T.queue(this, a, []), r && r.stop && r.stop.call(this, !0), 
                e = i.length; e--; ) i[e].elem === this && i[e].queue === a && (i[e].anim.stop(!0), 
                i.splice(e, 1));
                for (e = 0; e < o; e++) n[e] && n[e].finish && n[e].finish.call(this);
                delete t.finish;
            });
        }
    }), T.each([ "toggle", "show", "hide" ], function(e, r) {
        var i = T.fn[r];
        T.fn[r] = function(e, t, n) {
            return null == e || "boolean" == typeof e ? i.apply(this, arguments) : this.animate(Qe(r, !0), e, t, n);
        };
    }), T.each({
        slideDown: Qe("show"),
        slideUp: Qe("hide"),
        slideToggle: Qe("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function(e, r) {
        T.fn[e] = function(e, t, n) {
            return this.animate(r, e, t, n);
        };
    }), T.timers = [], T.fx.tick = function() {
        var e, t = 0, n = T.timers;
        for (We = T.now(); t < n.length; t++) (e = n[t])() || n[t] !== e || n.splice(t--, 1);
        n.length || T.fx.stop(), We = void 0;
    }, T.fx.timer = function(e) {
        T.timers.push(e), e() ? T.fx.start() : T.timers.pop();
    }, T.fx.interval = 13, T.fx.start = function() {
        ze || (ze = C.setInterval(T.fx.tick, T.fx.interval));
    }, T.fx.stop = function() {
        C.clearInterval(ze), ze = null;
    }, T.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    }, T.fn.delay = function(r, e) {
        return r = T.fx && T.fx.speeds[r] || r, e = e || "fx", this.queue(e, function(e, t) {
            var n = C.setTimeout(e, r);
            t.stop = function() {
                C.clearTimeout(n);
            };
        });
    }, _e = E.createElement("input"), Be = E.createElement("select"), Xe = Be.appendChild(E.createElement("option")), 
    _e.type = "checkbox", m.checkOn = "" !== _e.value, m.optSelected = Xe.selected, 
    Be.disabled = !0, m.optDisabled = !Xe.disabled, (_e = E.createElement("input")).value = "t", 
    _e.type = "radio", m.radioValue = "t" === _e.value;
    var et, tt = T.expr.attrHandle;
    T.fn.extend({
        attr: function(e, t) {
            return D(this, T.attr, e, t, 1 < arguments.length);
        },
        removeAttr: function(e) {
            return this.each(function() {
                T.removeAttr(this, e);
            });
        }
    }), T.extend({
        attr: function(e, t, n) {
            var r, i, o = e.nodeType;
            if (3 !== o && 8 !== o && 2 !== o) return void 0 === e.getAttribute ? T.prop(e, t, n) : (1 === o && T.isXMLDoc(e) || (t = t.toLowerCase(), 
            i = T.attrHooks[t] || (T.expr.match.bool.test(t) ? et : void 0)), void 0 !== n ? null === n ? void T.removeAttr(e, t) : i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : (e.setAttribute(t, n + ""), 
            n) : i && "get" in i && null !== (r = i.get(e, t)) ? r : null == (r = T.find.attr(e, t)) ? void 0 : r);
        },
        attrHooks: {
            type: {
                set: function(e, t) {
                    if (!m.radioValue && "radio" === t && T.nodeName(e, "input")) {
                        var n = e.value;
                        return e.setAttribute("type", t), n && (e.value = n), t;
                    }
                }
            }
        },
        removeAttr: function(e, t) {
            var n, r, i = 0, o = t && t.match(j);
            if (o && 1 === e.nodeType) for (;n = o[i++]; ) r = T.propFix[n] || n, T.expr.match.bool.test(n) && (e[r] = !1), 
            e.removeAttribute(n);
        }
    }), et = {
        set: function(e, t, n) {
            return !1 === t ? T.removeAttr(e, n) : e.setAttribute(n, n), n;
        }
    }, T.each(T.expr.match.bool.source.match(/\w+/g), function(e, t) {
        var o = tt[t] || T.find.attr;
        tt[t] = function(e, t, n) {
            var r, i;
            return n || (i = tt[t], tt[t] = r, r = null != o(e, t, n) ? t.toLowerCase() : null, 
            tt[t] = i), r;
        };
    });
    var nt = /^(?:input|select|textarea|button)$/i, rt = /^(?:a|area)$/i;
    T.fn.extend({
        prop: function(e, t) {
            return D(this, T.prop, e, t, 1 < arguments.length);
        },
        removeProp: function(e) {
            return this.each(function() {
                delete this[T.propFix[e] || e];
            });
        }
    }), T.extend({
        prop: function(e, t, n) {
            var r, i, o = e.nodeType;
            if (3 !== o && 8 !== o && 2 !== o) return 1 === o && T.isXMLDoc(e) || (t = T.propFix[t] || t, 
            i = T.propHooks[t]), void 0 !== n ? i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : e[t] = n : i && "get" in i && null !== (r = i.get(e, t)) ? r : e[t];
        },
        propHooks: {
            tabIndex: {
                get: function(e) {
                    var t = T.find.attr(e, "tabindex");
                    return t ? parseInt(t, 10) : nt.test(e.nodeName) || rt.test(e.nodeName) && e.href ? 0 : -1;
                }
            }
        },
        propFix: {
            "for": "htmlFor",
            "class": "className"
        }
    }), m.optSelected || (T.propHooks.selected = {
        get: function(e) {
            var t = e.parentNode;
            return t && t.parentNode && t.parentNode.selectedIndex, null;
        },
        set: function(e) {
            var t = e.parentNode;
            t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex);
        }
    }), T.each([ "tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable" ], function() {
        T.propFix[this.toLowerCase()] = this;
    });
    var it = /[\t\r\n\f]/g;
    function ot(e) {
        return e.getAttribute && e.getAttribute("class") || "";
    }
    T.fn.extend({
        addClass: function(t) {
            var e, n, r, i, o, a, s, l = 0;
            if (T.isFunction(t)) return this.each(function(e) {
                T(this).addClass(t.call(this, e, ot(this)));
            });
            if ("string" == typeof t && t) for (e = t.match(j) || []; n = this[l++]; ) if (i = ot(n), 
            r = 1 === n.nodeType && (" " + i + " ").replace(it, " ")) {
                for (a = 0; o = e[a++]; ) r.indexOf(" " + o + " ") < 0 && (r += o + " ");
                i !== (s = T.trim(r)) && n.setAttribute("class", s);
            }
            return this;
        },
        removeClass: function(t) {
            var e, n, r, i, o, a, s, l = 0;
            if (T.isFunction(t)) return this.each(function(e) {
                T(this).removeClass(t.call(this, e, ot(this)));
            });
            if (!arguments.length) return this.attr("class", "");
            if ("string" == typeof t && t) for (e = t.match(j) || []; n = this[l++]; ) if (i = ot(n), 
            r = 1 === n.nodeType && (" " + i + " ").replace(it, " ")) {
                for (a = 0; o = e[a++]; ) for (;-1 < r.indexOf(" " + o + " "); ) r = r.replace(" " + o + " ", " ");
                i !== (s = T.trim(r)) && n.setAttribute("class", s);
            }
            return this;
        },
        toggleClass: function(i, t) {
            var o = typeof i;
            return "boolean" == typeof t && "string" === o ? t ? this.addClass(i) : this.removeClass(i) : T.isFunction(i) ? this.each(function(e) {
                T(this).toggleClass(i.call(this, e, ot(this), t), t);
            }) : this.each(function() {
                var e, t, n, r;
                if ("string" === o) for (t = 0, n = T(this), r = i.match(j) || []; e = r[t++]; ) n.hasClass(e) ? n.removeClass(e) : n.addClass(e); else void 0 !== i && "boolean" !== o || ((e = ot(this)) && H.set(this, "__className__", e), 
                this.setAttribute && this.setAttribute("class", e || !1 === i ? "" : H.get(this, "__className__") || ""));
            });
        },
        hasClass: function(e) {
            var t, n, r = 0;
            for (t = " " + e + " "; n = this[r++]; ) if (1 === n.nodeType && -1 < (" " + ot(n) + " ").replace(it, " ").indexOf(t)) return !0;
            return !1;
        }
    });
    var at = /\r/g, st = /[\x20\t\r\n\f]+/g;
    T.fn.extend({
        val: function(n) {
            var r, e, i, t = this[0];
            return arguments.length ? (i = T.isFunction(n), this.each(function(e) {
                var t;
                1 === this.nodeType && (null == (t = i ? n.call(this, e, T(this).val()) : n) ? t = "" : "number" == typeof t ? t += "" : T.isArray(t) && (t = T.map(t, function(e) {
                    return null == e ? "" : e + "";
                })), (r = T.valHooks[this.type] || T.valHooks[this.nodeName.toLowerCase()]) && "set" in r && void 0 !== r.set(this, t, "value") || (this.value = t));
            })) : t ? (r = T.valHooks[t.type] || T.valHooks[t.nodeName.toLowerCase()]) && "get" in r && void 0 !== (e = r.get(t, "value")) ? e : "string" == typeof (e = t.value) ? e.replace(at, "") : null == e ? "" : e : void 0;
        }
    }), T.extend({
        valHooks: {
            option: {
                get: function(e) {
                    var t = T.find.attr(e, "value");
                    return null != t ? t : T.trim(T.text(e)).replace(st, " ");
                }
            },
            select: {
                get: function(e) {
                    for (var t, n, r = e.options, i = e.selectedIndex, o = "select-one" === e.type || i < 0, a = o ? null : [], s = o ? i + 1 : r.length, l = i < 0 ? s : o ? i : 0; l < s; l++) if (((n = r[l]).selected || l === i) && (m.optDisabled ? !n.disabled : null === n.getAttribute("disabled")) && (!n.parentNode.disabled || !T.nodeName(n.parentNode, "optgroup"))) {
                        if (t = T(n).val(), o) return t;
                        a.push(t);
                    }
                    return a;
                },
                set: function(e, t) {
                    for (var n, r, i = e.options, o = T.makeArray(t), a = i.length; a--; ) ((r = i[a]).selected = -1 < T.inArray(T.valHooks.option.get(r), o)) && (n = !0);
                    return n || (e.selectedIndex = -1), o;
                }
            }
        }
    }), T.each([ "radio", "checkbox" ], function() {
        T.valHooks[this] = {
            set: function(e, t) {
                return T.isArray(t) ? e.checked = -1 < T.inArray(T(e).val(), t) : void 0;
            }
        }, m.checkOn || (T.valHooks[this].get = function(e) {
            return null === e.getAttribute("value") ? "on" : e.value;
        });
    });
    var lt = /^(?:focusinfocus|focusoutblur)$/;
    T.extend(T.event, {
        trigger: function(e, t, n, r) {
            var i, o, a, s, l, u, c, d = [ n || E ], f = h.call(e, "type") ? e.type : e, p = h.call(e, "namespace") ? e.namespace.split(".") : [];
            if (o = a = n = n || E, 3 !== n.nodeType && 8 !== n.nodeType && !lt.test(f + T.event.triggered) && (-1 < f.indexOf(".") && (f = (p = f.split(".")).shift(), 
            p.sort()), l = f.indexOf(":") < 0 && "on" + f, (e = e[T.expando] ? e : new T.Event(f, "object" == typeof e && e)).isTrigger = r ? 2 : 3, 
            e.namespace = p.join("."), e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, 
            e.result = void 0, e.target || (e.target = n), t = null == t ? [ e ] : T.makeArray(t, [ e ]), 
            c = T.event.special[f] || {}, r || !c.trigger || !1 !== c.trigger.apply(n, t))) {
                if (!r && !c.noBubble && !T.isWindow(n)) {
                    for (s = c.delegateType || f, lt.test(s + f) || (o = o.parentNode); o; o = o.parentNode) d.push(o), 
                    a = o;
                    a === (n.ownerDocument || E) && d.push(a.defaultView || a.parentWindow || C);
                }
                for (i = 0; (o = d[i++]) && !e.isPropagationStopped(); ) e.type = 1 < i ? s : c.bindType || f, 
                (u = (H.get(o, "events") || {})[e.type] && H.get(o, "handle")) && u.apply(o, t), 
                (u = l && o[l]) && u.apply && L(o) && (e.result = u.apply(o, t), !1 === e.result && e.preventDefault());
                return e.type = f, r || e.isDefaultPrevented() || c._default && !1 !== c._default.apply(d.pop(), t) || !L(n) || l && T.isFunction(n[f]) && !T.isWindow(n) && ((a = n[l]) && (n[l] = null), 
                n[T.event.triggered = f](), T.event.triggered = void 0, a && (n[l] = a)), e.result;
            }
        },
        simulate: function(e, t, n) {
            var r = T.extend(new T.Event(), n, {
                type: e,
                isSimulated: !0
            });
            T.event.trigger(r, null, t);
        }
    }), T.fn.extend({
        trigger: function(e, t) {
            return this.each(function() {
                T.event.trigger(e, t, this);
            });
        },
        triggerHandler: function(e, t) {
            var n = this[0];
            return n ? T.event.trigger(e, t, n, !0) : void 0;
        }
    }), T.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(e, n) {
        T.fn[n] = function(e, t) {
            return 0 < arguments.length ? this.on(n, null, e, t) : this.trigger(n);
        };
    }), T.fn.extend({
        hover: function(e, t) {
            return this.mouseenter(e).mouseleave(t || e);
        }
    }), m.focusin = "onfocusin" in C, m.focusin || T.each({
        focus: "focusin",
        blur: "focusout"
    }, function(n, r) {
        var i = function(e) {
            T.event.simulate(r, e.target, T.event.fix(e));
        };
        T.event.special[r] = {
            setup: function() {
                var e = this.ownerDocument || this, t = H.access(e, r);
                t || e.addEventListener(n, i, !0), H.access(e, r, (t || 0) + 1);
            },
            teardown: function() {
                var e = this.ownerDocument || this, t = H.access(e, r) - 1;
                t ? H.access(e, r, t) : (e.removeEventListener(n, i, !0), H.remove(e, r));
            }
        };
    });
    var ut = C.location, ct = T.now(), dt = /\?/;
    T.parseJSON = function(e) {
        return JSON.parse(e + "");
    }, T.parseXML = function(e) {
        var t;
        if (!e || "string" != typeof e) return null;
        try {
            t = new C.DOMParser().parseFromString(e, "text/xml");
        } catch (e) {
            t = void 0;
        }
        return t && !t.getElementsByTagName("parsererror").length || T.error("Invalid XML: " + e), 
        t;
    };
    var ft = /#.*$/, pt = /([?&])_=[^&]*/, ht = /^(.*?):[ \t]*([^\r\n]*)$/gm, gt = /^(?:GET|HEAD)$/, mt = /^\/\//, vt = {}, yt = {}, bt = "*/".concat("*"), xt = E.createElement("a");
    function wt(o) {
        return function(e, t) {
            "string" != typeof e && (t = e, e = "*");
            var n, r = 0, i = e.toLowerCase().match(j) || [];
            if (T.isFunction(t)) for (;n = i[r++]; ) "+" === n[0] ? (n = n.slice(1) || "*", 
            (o[n] = o[n] || []).unshift(t)) : (o[n] = o[n] || []).push(t);
        };
    }
    function St(t, i, o, a) {
        var s = {}, l = t === yt;
        function u(e) {
            var r;
            return s[e] = !0, T.each(t[e] || [], function(e, t) {
                var n = t(i, o, a);
                return "string" != typeof n || l || s[n] ? l ? !(r = n) : void 0 : (i.dataTypes.unshift(n), 
                u(n), !1);
            }), r;
        }
        return u(i.dataTypes[0]) || !s["*"] && u("*");
    }
    function Ct(e, t) {
        var n, r, i = T.ajaxSettings.flatOptions || {};
        for (n in t) void 0 !== t[n] && ((i[n] ? e : r || (r = {}))[n] = t[n]);
        return r && T.extend(!0, e, r), e;
    }
    xt.href = ut.href, T.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: ut.href,
            type: "GET",
            isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(ut.protocol),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": bt,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /\bxml\b/,
                html: /\bhtml/,
                json: /\bjson\b/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": T.parseJSON,
                "text xml": T.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(e, t) {
            return t ? Ct(Ct(e, T.ajaxSettings), t) : Ct(T.ajaxSettings, e);
        },
        ajaxPrefilter: wt(vt),
        ajaxTransport: wt(yt),
        ajax: function(e, t) {
            "object" == typeof e && (t = e, e = void 0), t = t || {};
            var c, d, f, n, p, r, h, i, g = T.ajaxSetup({}, t), m = g.context || g, v = g.context && (m.nodeType || m.jquery) ? T(m) : T.event, y = T.Deferred(), b = T.Callbacks("once memory"), x = g.statusCode || {}, o = {}, a = {}, w = 0, s = "canceled", S = {
                readyState: 0,
                getResponseHeader: function(e) {
                    var t;
                    if (2 === w) {
                        if (!n) for (n = {}; t = ht.exec(f); ) n[t[1].toLowerCase()] = t[2];
                        t = n[e.toLowerCase()];
                    }
                    return null == t ? null : t;
                },
                getAllResponseHeaders: function() {
                    return 2 === w ? f : null;
                },
                setRequestHeader: function(e, t) {
                    var n = e.toLowerCase();
                    return w || (e = a[n] = a[n] || e, o[e] = t), this;
                },
                overrideMimeType: function(e) {
                    return w || (g.mimeType = e), this;
                },
                statusCode: function(e) {
                    var t;
                    if (e) if (w < 2) for (t in e) x[t] = [ x[t], e[t] ]; else S.always(e[S.status]);
                    return this;
                },
                abort: function(e) {
                    var t = e || s;
                    return c && c.abort(t), l(0, t), this;
                }
            };
            if (y.promise(S).complete = b.add, S.success = S.done, S.error = S.fail, g.url = ((e || g.url || ut.href) + "").replace(ft, "").replace(mt, ut.protocol + "//"), 
            g.type = t.method || t.type || g.method || g.type, g.dataTypes = T.trim(g.dataType || "*").toLowerCase().match(j) || [ "" ], 
            null == g.crossDomain) {
                r = E.createElement("a");
                try {
                    r.href = g.url, r.href = r.href, g.crossDomain = xt.protocol + "//" + xt.host != r.protocol + "//" + r.host;
                } catch (e) {
                    g.crossDomain = !0;
                }
            }
            if (g.data && g.processData && "string" != typeof g.data && (g.data = T.param(g.data, g.traditional)), 
            St(vt, g, t, S), 2 === w) return S;
            for (i in (h = T.event && g.global) && 0 == T.active++ && T.event.trigger("ajaxStart"), 
            g.type = g.type.toUpperCase(), g.hasContent = !gt.test(g.type), d = g.url, g.hasContent || (g.data && (d = g.url += (dt.test(d) ? "&" : "?") + g.data, 
            delete g.data), !1 === g.cache && (g.url = pt.test(d) ? d.replace(pt, "$1_=" + ct++) : d + (dt.test(d) ? "&" : "?") + "_=" + ct++)), 
            g.ifModified && (T.lastModified[d] && S.setRequestHeader("If-Modified-Since", T.lastModified[d]), 
            T.etag[d] && S.setRequestHeader("If-None-Match", T.etag[d])), (g.data && g.hasContent && !1 !== g.contentType || t.contentType) && S.setRequestHeader("Content-Type", g.contentType), 
            S.setRequestHeader("Accept", g.dataTypes[0] && g.accepts[g.dataTypes[0]] ? g.accepts[g.dataTypes[0]] + ("*" !== g.dataTypes[0] ? ", " + bt + "; q=0.01" : "") : g.accepts["*"]), 
            g.headers) S.setRequestHeader(i, g.headers[i]);
            if (g.beforeSend && (!1 === g.beforeSend.call(m, S, g) || 2 === w)) return S.abort();
            for (i in s = "abort", {
                success: 1,
                error: 1,
                complete: 1
            }) S[i](g[i]);
            if (c = St(yt, g, t, S)) {
                if (S.readyState = 1, h && v.trigger("ajaxSend", [ S, g ]), 2 === w) return S;
                g.async && 0 < g.timeout && (p = C.setTimeout(function() {
                    S.abort("timeout");
                }, g.timeout));
                try {
                    w = 1, c.send(o, l);
                } catch (e) {
                    if (!(w < 2)) throw e;
                    l(-1, e);
                }
            } else l(-1, "No Transport");
            function l(e, t, n, r) {
                var i, o, a, s, l, u = t;
                2 !== w && (w = 2, p && C.clearTimeout(p), c = void 0, f = r || "", S.readyState = 0 < e ? 4 : 0, 
                i = 200 <= e && e < 300 || 304 === e, n && (s = function(e, t, n) {
                    for (var r, i, o, a, s = e.contents, l = e.dataTypes; "*" === l[0]; ) l.shift(), 
                    void 0 === r && (r = e.mimeType || t.getResponseHeader("Content-Type"));
                    if (r) for (i in s) if (s[i] && s[i].test(r)) {
                        l.unshift(i);
                        break;
                    }
                    if (l[0] in n) o = l[0]; else {
                        for (i in n) {
                            if (!l[0] || e.converters[i + " " + l[0]]) {
                                o = i;
                                break;
                            }
                            a || (a = i);
                        }
                        o = o || a;
                    }
                    return o ? (o !== l[0] && l.unshift(o), n[o]) : void 0;
                }(g, S, n)), s = function(e, t, n, r) {
                    var i, o, a, s, l, u = {}, c = e.dataTypes.slice();
                    if (c[1]) for (a in e.converters) u[a.toLowerCase()] = e.converters[a];
                    for (o = c.shift(); o; ) if (e.responseFields[o] && (n[e.responseFields[o]] = t), 
                    !l && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), l = o, o = c.shift()) if ("*" === o) o = l; else if ("*" !== l && l !== o) {
                        if (!(a = u[l + " " + o] || u["* " + o])) for (i in u) if ((s = i.split(" "))[1] === o && (a = u[l + " " + s[0]] || u["* " + s[0]])) {
                            !0 === a ? a = u[i] : !0 !== u[i] && (o = s[0], c.unshift(s[1]));
                            break;
                        }
                        if (!0 !== a) if (a && e.throws) t = a(t); else try {
                            t = a(t);
                        } catch (e) {
                            return {
                                state: "parsererror",
                                error: a ? e : "No conversion from " + l + " to " + o
                            };
                        }
                    }
                    return {
                        state: "success",
                        data: t
                    };
                }(g, s, S, i), i ? (g.ifModified && ((l = S.getResponseHeader("Last-Modified")) && (T.lastModified[d] = l), 
                (l = S.getResponseHeader("etag")) && (T.etag[d] = l)), 204 === e || "HEAD" === g.type ? u = "nocontent" : 304 === e ? u = "notmodified" : (u = s.state, 
                o = s.data, i = !(a = s.error))) : (a = u, !e && u || (u = "error", e < 0 && (e = 0))), 
                S.status = e, S.statusText = (t || u) + "", i ? y.resolveWith(m, [ o, u, S ]) : y.rejectWith(m, [ S, u, a ]), 
                S.statusCode(x), x = void 0, h && v.trigger(i ? "ajaxSuccess" : "ajaxError", [ S, g, i ? o : a ]), 
                b.fireWith(m, [ S, u ]), h && (v.trigger("ajaxComplete", [ S, g ]), --T.active || T.event.trigger("ajaxStop")));
            }
            return S;
        },
        getJSON: function(e, t, n) {
            return T.get(e, t, n, "json");
        },
        getScript: function(e, t) {
            return T.get(e, void 0, t, "script");
        }
    }), T.each([ "get", "post" ], function(e, i) {
        T[i] = function(e, t, n, r) {
            return T.isFunction(t) && (r = r || n, n = t, t = void 0), T.ajax(T.extend({
                url: e,
                type: i,
                dataType: r,
                data: t,
                success: n
            }, T.isPlainObject(e) && e));
        };
    }), T._evalUrl = function(e) {
        return T.ajax({
            url: e,
            type: "GET",
            dataType: "script",
            async: !1,
            global: !1,
            "throws": !0
        });
    }, T.fn.extend({
        wrapAll: function(t) {
            var e;
            return T.isFunction(t) ? this.each(function(e) {
                T(this).wrapAll(t.call(this, e));
            }) : (this[0] && (e = T(t, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && e.insertBefore(this[0]), 
            e.map(function() {
                for (var e = this; e.firstElementChild; ) e = e.firstElementChild;
                return e;
            }).append(this)), this);
        },
        wrapInner: function(n) {
            return T.isFunction(n) ? this.each(function(e) {
                T(this).wrapInner(n.call(this, e));
            }) : this.each(function() {
                var e = T(this), t = e.contents();
                t.length ? t.wrapAll(n) : e.append(n);
            });
        },
        wrap: function(t) {
            var n = T.isFunction(t);
            return this.each(function(e) {
                T(this).wrapAll(n ? t.call(this, e) : t);
            });
        },
        unwrap: function() {
            return this.parent().each(function() {
                T.nodeName(this, "body") || T(this).replaceWith(this.childNodes);
            }).end();
        }
    }), T.expr.filters.hidden = function(e) {
        return !T.expr.filters.visible(e);
    }, T.expr.filters.visible = function(e) {
        return 0 < e.offsetWidth || 0 < e.offsetHeight || 0 < e.getClientRects().length;
    };
    var Et = /%20/g, Tt = /\[\]$/, At = /\r?\n/g, kt = /^(?:submit|button|image|reset|file)$/i, Mt = /^(?:input|select|textarea|keygen)/i;
    function Ft(n, e, r, i) {
        var t;
        if (T.isArray(e)) T.each(e, function(e, t) {
            r || Tt.test(n) ? i(n, t) : Ft(n + "[" + ("object" == typeof t && null != t ? e : "") + "]", t, r, i);
        }); else if (r || "object" !== T.type(e)) i(n, e); else for (t in e) Ft(n + "[" + t + "]", e[t], r, i);
    }
    T.param = function(e, t) {
        var n, r = [], i = function(e, t) {
            t = T.isFunction(t) ? t() : null == t ? "" : t, r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t);
        };
        if (void 0 === t && (t = T.ajaxSettings && T.ajaxSettings.traditional), T.isArray(e) || e.jquery && !T.isPlainObject(e)) T.each(e, function() {
            i(this.name, this.value);
        }); else for (n in e) Ft(n, e[n], t, i);
        return r.join("&").replace(Et, "+");
    }, T.fn.extend({
        serialize: function() {
            return T.param(this.serializeArray());
        },
        serializeArray: function() {
            return this.map(function() {
                var e = T.prop(this, "elements");
                return e ? T.makeArray(e) : this;
            }).filter(function() {
                var e = this.type;
                return this.name && !T(this).is(":disabled") && Mt.test(this.nodeName) && !kt.test(e) && (this.checked || !X.test(e));
            }).map(function(e, t) {
                var n = T(this).val();
                return null == n ? null : T.isArray(n) ? T.map(n, function(e) {
                    return {
                        name: t.name,
                        value: e.replace(At, "\r\n")
                    };
                }) : {
                    name: t.name,
                    value: n.replace(At, "\r\n")
                };
            }).get();
        }
    }), T.ajaxSettings.xhr = function() {
        try {
            return new C.XMLHttpRequest();
        } catch (e) {}
    };
    var Nt = {
        0: 200,
        1223: 204
    }, Ot = T.ajaxSettings.xhr();
    m.cors = !!Ot && "withCredentials" in Ot, m.ajax = Ot = !!Ot, T.ajaxTransport(function(i) {
        var o, a;
        return m.cors || Ot && !i.crossDomain ? {
            send: function(e, t) {
                var n, r = i.xhr();
                if (r.open(i.type, i.url, i.async, i.username, i.password), i.xhrFields) for (n in i.xhrFields) r[n] = i.xhrFields[n];
                for (n in i.mimeType && r.overrideMimeType && r.overrideMimeType(i.mimeType), i.crossDomain || e["X-Requested-With"] || (e["X-Requested-With"] = "XMLHttpRequest"), 
                e) r.setRequestHeader(n, e[n]);
                o = function(e) {
                    return function() {
                        o && (o = a = r.onload = r.onerror = r.onabort = r.onreadystatechange = null, "abort" === e ? r.abort() : "error" === e ? "number" != typeof r.status ? t(0, "error") : t(r.status, r.statusText) : t(Nt[r.status] || r.status, r.statusText, "text" !== (r.responseType || "text") || "string" != typeof r.responseText ? {
                            binary: r.response
                        } : {
                            text: r.responseText
                        }, r.getAllResponseHeaders()));
                    };
                }, r.onload = o(), a = r.onerror = o("error"), void 0 !== r.onabort ? r.onabort = a : r.onreadystatechange = function() {
                    4 === r.readyState && C.setTimeout(function() {
                        o && a();
                    });
                }, o = o("abort");
                try {
                    r.send(i.hasContent && i.data || null);
                } catch (e) {
                    if (o) throw e;
                }
            },
            abort: function() {
                o && o();
            }
        } : void 0;
    }), T.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript, application/json"
        },
        contents: {
            script: /\b(?:java|ecma)script\b/
        },
        converters: {
            "text script": function(e) {
                return T.globalEval(e), e;
            }
        }
    }), T.ajaxPrefilter("script", function(e) {
        void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET");
    }), T.ajaxTransport("script", function(n) {
        var r, i;
        if (n.crossDomain) return {
            send: function(e, t) {
                r = T("<script>").prop({
                    charset: n.scriptCharset,
                    src: n.url
                }).on("load error", i = function(e) {
                    r.remove(), i = null, e && t("error" === e.type ? 404 : 200, e.type);
                }), E.head.appendChild(r[0]);
            },
            abort: function() {
                i && i();
            }
        };
    });
    var jt = [], Pt = /(=)\?(?=&|$)|\?\?/;
    T.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var e = jt.pop() || T.expando + "_" + ct++;
            return this[e] = !0, e;
        }
    }), T.ajaxPrefilter("json jsonp", function(e, t, n) {
        var r, i, o, a = !1 !== e.jsonp && (Pt.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && Pt.test(e.data) && "data");
        return a || "jsonp" === e.dataTypes[0] ? (r = e.jsonpCallback = T.isFunction(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, 
        a ? e[a] = e[a].replace(Pt, "$1" + r) : !1 !== e.jsonp && (e.url += (dt.test(e.url) ? "&" : "?") + e.jsonp + "=" + r), 
        e.converters["script json"] = function() {
            return o || T.error(r + " was not called"), o[0];
        }, e.dataTypes[0] = "json", i = C[r], C[r] = function() {
            o = arguments;
        }, n.always(function() {
            void 0 === i ? T(C).removeProp(r) : C[r] = i, e[r] && (e.jsonpCallback = t.jsonpCallback, 
            jt.push(r)), o && T.isFunction(i) && i(o[0]), o = i = void 0;
        }), "script") : void 0;
    }), T.parseHTML = function(e, t, n) {
        if (!e || "string" != typeof e) return null;
        "boolean" == typeof t && (n = t, t = !1), t = t || E;
        var r = x.exec(e), i = !n && [];
        return r ? [ t.createElement(r[1]) ] : (r = ne([ e ], t, i), i && i.length && T(i).remove(), 
        T.merge([], r.childNodes));
    };
    var Dt = T.fn.load;
    function Lt(e) {
        return T.isWindow(e) ? e : 9 === e.nodeType && e.defaultView;
    }
    T.fn.load = function(e, t, n) {
        if ("string" != typeof e && Dt) return Dt.apply(this, arguments);
        var r, i, o, a = this, s = e.indexOf(" ");
        return -1 < s && (r = T.trim(e.slice(s)), e = e.slice(0, s)), T.isFunction(t) ? (n = t, 
        t = void 0) : t && "object" == typeof t && (i = "POST"), 0 < a.length && T.ajax({
            url: e,
            type: i || "GET",
            dataType: "html",
            data: t
        }).done(function(e) {
            o = arguments, a.html(r ? T("<div>").append(T.parseHTML(e)).find(r) : e);
        }).always(n && function(e, t) {
            a.each(function() {
                n.apply(this, o || [ e.responseText, t, e ]);
            });
        }), this;
    }, T.each([ "ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend" ], function(e, t) {
        T.fn[t] = function(e) {
            return this.on(t, e);
        };
    }), T.expr.filters.animated = function(t) {
        return T.grep(T.timers, function(e) {
            return t === e.elem;
        }).length;
    }, T.offset = {
        setOffset: function(e, t, n) {
            var r, i, o, a, s, l, u = T.css(e, "position"), c = T(e), d = {};
            "static" === u && (e.style.position = "relative"), s = c.offset(), o = T.css(e, "top"), 
            l = T.css(e, "left"), ("absolute" === u || "fixed" === u) && -1 < (o + l).indexOf("auto") ? (a = (r = c.position()).top, 
            i = r.left) : (a = parseFloat(o) || 0, i = parseFloat(l) || 0), T.isFunction(t) && (t = t.call(e, n, T.extend({}, s))), 
            null != t.top && (d.top = t.top - s.top + a), null != t.left && (d.left = t.left - s.left + i), 
            "using" in t ? t.using.call(e, d) : c.css(d);
        }
    }, T.fn.extend({
        offset: function(t) {
            if (arguments.length) return void 0 === t ? this : this.each(function(e) {
                T.offset.setOffset(this, t, e);
            });
            var e, n, r = this[0], i = {
                top: 0,
                left: 0
            }, o = r && r.ownerDocument;
            return o ? (e = o.documentElement, T.contains(e, r) ? (i = r.getBoundingClientRect(), 
            n = Lt(o), {
                top: i.top + n.pageYOffset - e.clientTop,
                left: i.left + n.pageXOffset - e.clientLeft
            }) : i) : void 0;
        },
        position: function() {
            if (this[0]) {
                var e, t, n = this[0], r = {
                    top: 0,
                    left: 0
                };
                return "fixed" === T.css(n, "position") ? t = n.getBoundingClientRect() : (e = this.offsetParent(), 
                t = this.offset(), T.nodeName(e[0], "html") || (r = e.offset()), r.top += T.css(e[0], "borderTopWidth", !0), 
                r.left += T.css(e[0], "borderLeftWidth", !0)), {
                    top: t.top - r.top - T.css(n, "marginTop", !0),
                    left: t.left - r.left - T.css(n, "marginLeft", !0)
                };
            }
        },
        offsetParent: function() {
            return this.map(function() {
                for (var e = this.offsetParent; e && "static" === T.css(e, "position"); ) e = e.offsetParent;
                return e || Fe;
            });
        }
    }), T.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(t, i) {
        var o = "pageYOffset" === i;
        T.fn[t] = function(e) {
            return D(this, function(e, t, n) {
                var r = Lt(e);
                return void 0 === n ? r ? r[i] : e[t] : void (r ? r.scrollTo(o ? r.pageXOffset : n, o ? n : r.pageYOffset) : e[t] = n);
            }, t, e, arguments.length);
        };
    }), T.each([ "top", "left" ], function(e, n) {
        T.cssHooks[n] = Oe(m.pixelPosition, function(e, t) {
            return t ? (t = Ne(e, n), Ae.test(t) ? T(e).position()[n] + "px" : t) : void 0;
        });
    }), T.each({
        Height: "height",
        Width: "width"
    }, function(o, a) {
        T.each({
            padding: "inner" + o,
            content: a,
            "": "outer" + o
        }, function(r, e) {
            T.fn[e] = function(e, t) {
                var n = arguments.length && (r || "boolean" != typeof e), i = r || (!0 === e || !0 === t ? "margin" : "border");
                return D(this, function(e, t, n) {
                    var r;
                    return T.isWindow(e) ? e.document.documentElement["client" + o] : 9 === e.nodeType ? (r = e.documentElement, 
                    Math.max(e.body["scroll" + o], r["scroll" + o], e.body["offset" + o], r["offset" + o], r["client" + o])) : void 0 === n ? T.css(e, t, i) : T.style(e, t, n, i);
                }, a, n ? e : void 0, n, null);
            };
        });
    }), T.fn.extend({
        bind: function(e, t, n) {
            return this.on(e, null, t, n);
        },
        unbind: function(e, t) {
            return this.off(e, null, t);
        },
        delegate: function(e, t, n, r) {
            return this.on(t, e, n, r);
        },
        undelegate: function(e, t, n) {
            return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n);
        },
        size: function() {
            return this.length;
        }
    }), T.fn.andSelf = T.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function() {
        return T;
    });
    var qt = C.jQuery, Ht = C.$;
    return T.noConflict = function(e) {
        return C.$ === T && (C.$ = Ht), e && C.jQuery === T && (C.jQuery = qt), T;
    }, e || (C.jQuery = C.$ = T), T;
}), function(e) {
    "use strict";
    "object" == typeof module && "object" == typeof module.exports ? e(require("jquery"), window, document) : e(jQuery, window, document);
}(function(w, S, C, E) {
    "use strict";
    if (!S.history.pushState) return w.fn.smoothState = function() {
        return this;
    }, void (w.fn.smoothState.options = {});
    if (!w.fn.smoothState) {
        var T = w("html, body"), A = S.console, k = {
            isExternal: function(e) {
                var t = e.match(/^([^:\/?#]+:)?(?:\/\/([^\/?#]*))?([^?#]+)?(\?[^#]*)?(#.*)?/);
                return "string" == typeof t[1] && 0 < t[1].length && t[1].toLowerCase() !== S.location.protocol || "string" == typeof t[2] && 0 < t[2].length && t[2].replace(new RegExp(":(" + {
                    "http:": 80,
                    "https:": 443
                }[S.location.protocol] + ")?$"), "") !== S.location.host;
            },
            stripHash: function(e) {
                return e.replace(/#.*/, "");
            },
            isHash: function(e, t) {
                t = t || S.location.href;
                var n = -1 < e.indexOf("#"), r = k.stripHash(e) === k.stripHash(t);
                return n && r;
            },
            translate: function(e) {
                var t = {
                    dataType: "html",
                    type: "GET"
                };
                return "string" == typeof e ? w.extend({}, t, {
                    url: e
                }) : w.extend({}, t, e);
            },
            shouldLoadAnchor: function(e, t, n) {
                var r = e.prop("href");
                return !(k.isExternal(r) || k.isHash(r) || e.is(t) || e.prop("target") || typeof n !== E && "" !== n && -1 === e.prop("href").search(n));
            },
            clearIfOverCapacity: function(e, t) {
                return Object.keys || (Object.keys = function(e) {
                    var t, n = [];
                    for (t in e) Object.prototype.hasOwnProperty.call(e, t) && n.push(t);
                    return n;
                }), Object.keys(e).length > t && (e = {}), e;
            },
            storePageIn: function(e, t, n, r, i, o) {
                var a = w("<html></html>").append(w(n));
                return void 0 === i && (i = {}), void 0 === o && (o = t), e[t] = {
                    status: "loaded",
                    title: a.find("title").first().text(),
                    html: a.find("#" + r),
                    doc: n,
                    state: i,
                    destUrl: o
                }, e;
            },
            triggerAllAnimationEndEvent: function(t, e) {
                e = " " + e || "";
                var n = 0;
                t.on("animationstart webkitAnimationStart oanimationstart MSAnimationStart", function(e) {
                    w(e.delegateTarget).is(t) && (e.stopPropagation(), n++);
                }), t.on("animationend webkitAnimationEnd oanimationend MSAnimationEnd", function(e) {
                    w(e.delegateTarget).is(t) && (e.stopPropagation(), 0 == --n && t.trigger("allanimationend"));
                }), t.on("allanimationend" + e, function() {
                    n = 0, k.redraw(t);
                });
            },
            redraw: function(e) {
                e.height();
            }
        }, n = function(e, s) {
            var t, l = w(e), u = l.prop("id"), r = null, i = !1, c = {}, d = {}, n = S.location.href, f = function(e) {
                (e = e || !1) && c.hasOwnProperty(e) ? delete c[e] : c = {}, l.data("smoothState").cache = c;
            }, p = function(e, t) {
                t = t || w.noop;
                var i = k.translate(e);
                if (!(c = k.clearIfOverCapacity(c, s.cacheLength)).hasOwnProperty(i.url) || void 0 !== i.data) {
                    c[i.url] = {
                        status: "fetching"
                    };
                    var n = w.ajax(i);
                    n.done(function(e) {
                        k.storePageIn(c, i.url, e, u), l.data("smoothState").cache = c;
                    }), n.fail(function() {
                        c[i.url].status = "error";
                    }), s.locationHeader && n.always(function(e, t, n) {
                        var r = (e.statusCode ? e : n).getResponseHeader(s.locationHeader);
                        r && (c[i.url].destUrl = r);
                    }), t && n.always(t);
                }
            }, h = function(e) {
                var t = "#" + u, n = c[e] ? w(c[e].html.html()) : null;
                n.length ? (C.title = c[e].title, l.data("smoothState").href = e, s.loadingClass && T.removeClass(s.loadingClass), 
                s.onReady.render(l, n), l.one("ss.onReadyEnd", function() {
                    i = !1, s.onAfter(l, n), s.scroll && function() {
                        if (r) {
                            var e = w(r, l);
                            if (e.length) {
                                var t = e.offset().top;
                                T.scrollTop(t);
                            }
                            r = null;
                        }
                    }(), x(l);
                }), S.setTimeout(function() {
                    l.trigger("ss.onReadyEnd");
                }, s.onReady.duration)) : !n && s.debug && A ? A.warn("No element with an id of " + t + " in response from " + e + " in " + c) : S.location = e;
                },
                o = function (e, n, r) {
                // var i = k.translate(e);
                // void 0 === n && (n = !0), void 0 === r && (r = !0);
                // var o = !1, a = !1, t = {
                //     loaded: function() {
                //         var e = o ? "ss.onProgressEnd" : "ss.onStartEnd";
                //         if (a && o ? a && h(i.url) : l.one(e, function() {
                //             h(i.url), r || f(i.url);
                //         }), n) {
                //             var t = c[i.url].destUrl;
                //             d = s.alterChangeState({
                //                 id: u
                //             }, c[i.url].title, t), c[i.url].state = d, S.history.pushState(d, c[i.url].title, t);
                //         }
                //         a && !r && f(i.url);
                //     },
                //     fetching: function() {
                //         o || (o = !0, l.one("ss.onStartEnd", function() {
                //             s.loadingClass && T.addClass(s.loadingClass), s.onProgress.render(l), S.setTimeout(function() {
                //                 l.trigger("ss.onProgressEnd"), a = !0;
                //             }, s.onProgress.duration);
                //         })), S.setTimeout(function() {
                //             c.hasOwnProperty(i.url) && t[c[i.url].status]();
                //         }, 10);
                //     },
                //     error: function() {
                //         s.debug && A ? A.log("There was an error loading: " + i.url) : S.location = i.url;
                //     }
                // };
                // c.hasOwnProperty(i.url) || p(i), s.onStart.render(l), S.setTimeout(function() {
                //     s.scroll && T.scrollTop(0), l.trigger("ss.onStartEnd");
                // }, s.onStart.duration), t[c[i.url].status]();
            }, a = function(e) {
                var t, n = w(e.currentTarget);
                k.shouldLoadAnchor(n, s.blacklist, s.hrefRegex) && !i && (e.stopPropagation(), t = k.translate(n.prop("href")), 
                t = s.alterRequest(t), p(t));
            }, g = function(e) {
                var t = w(e.currentTarget);
                if (!e.metaKey && !e.ctrlKey && k.shouldLoadAnchor(t, s.blacklist, s.hrefRegex) && (e.stopPropagation(), 
                e.preventDefault(), !y())) {
                    b();
                    var n = k.translate(t.prop("href"));
                    i = !0, r = t.prop("hash"), n = s.alterRequest(n), s.onBefore(t, l), o(n);
                }
            }, m = function(e) {
                var t = w(e.currentTarget);
                if (!t.is(s.blacklist) && (e.preventDefault(), e.stopPropagation(), !y())) {
                    b();
                    var n = {
                        url: t.prop("action"),
                        data: t.serialize(),
                        type: t.prop("method")
                    };
                    i = !0, "get" === (n = s.alterRequest(n)).type.toLowerCase() && (n.url = n.url + "?" + n.data), 
                    s.onBefore(t, l), o(n, E, s.allowFormCaching);
                }
            }, v = 0, y = function() {
                var e = null === s.repeatDelay, t = parseInt(Date.now()) > v;
                return !(e || t);
            }, b = function() {
                v = parseInt(Date.now()) + parseInt(s.repeatDelay);
            }, x = function(e) {
                s.anchors && s.prefetch && e.find(s.anchors).not(s.prefetchBlacklist).on(s.prefetchOn, null, a);
            };
            return s = w.extend({}, w.fn.smoothState.options, s), null === S.history.state ? (d = s.alterChangeState({
                id: u
            }, C.title, n), S.history.replaceState(d, C.title, n)) : d = {}, k.storePageIn(c, n, C.documentElement.outerHTML, u, d), 
            k.triggerAllAnimationEndEvent(l, "ss.onStartEnd ss.onProgressEnd ss.onEndEnd"), 
            t = l, s.anchors && (t.on("click", s.anchors, g), x(t)), s.forms && t.on("submit", s.forms, m), 
            {
                href: n,
                cache: c,
                clear: f,
                load: o,
                fetch: p,
                restartCSSAnimations: function() {
                    var e = l.prop("class");
                    l.removeClass(e), k.redraw(l), l.addClass(e);
                }
            };
        };
        S.onpopstate = function(e) {
            if (null !== e.state) {
                var t = S.location.href, n = w("#" + e.state.id).data("smoothState"), r = n.href !== t && !k.isHash(t, n.href), i = e.state !== n.cache[n.href].state;
                (r || i) && (i && n.clear(n.href), n.load(t, !1));
            }
        }, w.smoothStateUtility = k, w.fn.smoothState = function(t) {
            return this.each(function() {
                var e = this.tagName.toLowerCase();
                this.id && "body" !== e && "html" !== e && !w.data(this, "smoothState") ? w.data(this, "smoothState", new n(this, t)) : !this.id && A ? A.warn("Every smoothState container needs an id but the following one does not have one:", this) : "body" !== e && "html" !== e || !A || A.warn("The smoothstate container cannot be the " + this.tagName + " tag");
            });
        }, w.fn.smoothState.options = {
            debug: !1,
            anchors: "a",
            hrefRegex: "",
            forms: "form",
            allowFormCaching: !1,
            repeatDelay: 500,
            blacklist: ".no-smoothState",
            prefetch: !1,
            prefetchOn: "mouseover touchstart",
            prefetchBlacklist: ".no-prefetch",
            locationHeader: "X-SmoothState-Location",
            cacheLength: 0,
            loadingClass: "is-loading",
            scroll: !0,
            alterRequest: function(e) {
                return e;
            },
            alterChangeState: function(e, t, n) {
                return e;
            },
            onBefore: function(e, t) {},
            onStart: {
                duration: 0,
                render: function(e) {}
            },
            onProgress: {
                duration: 0,
                render: function(e) {}
            },
            onReady: {
                duration: 0,
                render: function(e, t) {
                    e.html(t);
                }
            },
            onAfter: function(e, t) {}
        };
    }
}), window.Modernizr = function(e, t, o) {
    function n(e) {
        f.cssText = e;
    }
    function a(e, t) {
        return typeof e === t;
    }
    function s(e, t) {
        for (var n in e) {
            var r = e[n];
            if (!~("" + r).indexOf("-") && f[r] !== o) return "pfx" != t || r;
        }
        return !1;
    }
    function r(e, t, n) {
        var r = e.charAt(0).toUpperCase() + e.slice(1), i = (e + " " + h.join(r + " ") + r).split(" ");
        return a(t, "string") || a(t, "undefined") ? s(i, t) : function(e, t, n) {
            for (var r in e) {
                var i = t[e[r]];
                if (i !== o) return !1 === n ? e[r] : a(i, "function") ? i.bind(n || t) : i;
            }
            return !1;
        }(i = (e + " " + g.join(r + " ") + r).split(" "), t, n);
    }
    var i, l, u = {}, c = t.documentElement, d = t.createElement("modernizr"), f = d.style, p = "Webkit Moz O ms", h = p.split(" "), g = p.toLowerCase().split(" "), m = {}, v = [], y = v.slice, b = {}.hasOwnProperty;
    for (var x in l = a(b, "undefined") || a(b.call, "undefined") ? function(e, t) {
        return t in e && a(e.constructor.prototype[t], "undefined");
    } : function(e, t) {
        return b.call(e, t);
    }, Function.prototype.bind || (Function.prototype.bind = function(r) {
        var i = this;
        if ("function" != typeof i) throw new TypeError();
        var o = y.call(arguments, 1), a = function() {
            if (this instanceof a) {
                var e = function() {};
                e.prototype = i.prototype;
                var t = new e(), n = i.apply(t, o.concat(y.call(arguments)));
                return Object(n) === n ? n : t;
            }
            return i.apply(r, o.concat(y.call(arguments)));
        };
        return a;
    }), m.flexbox = function() {
        return r("flexWrap");
    }, m.flexboxlegacy = function() {
        return r("boxDirection");
    }, m) l(m, x) && (i = x.toLowerCase(), u[i] = m[x](), v.push((u[i] ? "" : "no-") + i));
    return u.addTest = function(e, t) {
        if ("object" == typeof e) for (var n in e) l(e, n) && u.addTest(n, e[n]); else {
            if (e = e.toLowerCase(), u[e] !== o) return u;
            t = "function" == typeof t ? t() : t, c.className += " " + (t ? "" : "no-") + e, 
            u[e] = t;
        }
        return u;
    }, n(""), d = null, function(e, l) {
        function u() {
            var e = h.elements;
            return "string" == typeof e ? e.split(" ") : e;
        }
        function c(e) {
            var t = s[e[r]];
            return t || (t = {}, a++, e[r] = a, s[a] = t), t;
        }
        function d(e, t, n) {
            return t || (t = l), p ? t.createElement(e) : (n || (n = c(t)), !(r = n.cache[e] ? n.cache[e].cloneNode() : o.test(e) ? (n.cache[e] = n.createElem(e)).cloneNode() : n.createElem(e)).canHaveChildren || i.test(e) || r.tagUrn ? r : n.frag.appendChild(r));
            var r;
        }
        function t(e) {
            e || (e = l);
            var t, n, r, i, o, a, s = c(e);
            return h.shivCSS && !f && !s.hasCSS && (s.hasCSS = (i = "article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}", 
            o = (r = e).createElement("p"), a = r.getElementsByTagName("head")[0] || r.documentElement, 
            o.innerHTML = "x<style>" + i + "</style>", !!a.insertBefore(o.lastChild, a.firstChild))), 
            p || (t = e, (n = s).cache || (n.cache = {}, n.createElem = t.createElement, n.createFrag = t.createDocumentFragment, 
            n.frag = n.createFrag()), t.createElement = function(e) {
                return h.shivMethods ? d(e, t, n) : n.createElem(e);
            }, t.createDocumentFragment = Function("h,f", "return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&(" + u().join().replace(/[\w\-]+/g, function(e) {
                return n.createElem(e), n.frag.createElement(e), 'c("' + e + '")';
            }) + ");return n}")(h, n.frag)), e;
        }
        var f, p, n = e.html5 || {}, i = /^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i, o = /^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i, r = "_html5shiv", a = 0, s = {};
        !function() {
            try {
                var e = l.createElement("a");
                e.innerHTML = "<xyz></xyz>", f = "hidden" in e, p = 1 == e.childNodes.length || function() {
                    l.createElement("a");
                    var e = l.createDocumentFragment();
                    return void 0 === e.cloneNode || void 0 === e.createDocumentFragment || void 0 === e.createElement;
                }();
            } catch (e) {
                p = f = !0;
            }
        }();
        var h = {
            elements: n.elements || "abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output progress section summary template time video",
            version: "3.7.0",
            shivCSS: !1 !== n.shivCSS,
            supportsUnknownElements: p,
            shivMethods: !1 !== n.shivMethods,
            type: "default",
            shivDocument: t,
            createElement: d,
            createDocumentFragment: function(e, t) {
                if (e || (e = l), p) return e.createDocumentFragment();
                for (var n = (t = t || c(e)).frag.cloneNode(), r = 0, i = u(), o = i.length; r < o; r++) n.createElement(i[r]);
                return n;
            }
        };
        e.html5 = h, t(l);
    }(this, t), u._version = "2.7.1", u._domPrefixes = g, u._cssomPrefixes = h, u.testProp = function(e) {
        return s([ e ]);
    }, u.testAllProps = r, c.className = c.className.replace(/(^|\s)no-js(\s|$)/, "$1$2") + " js " + v.join(" "), 
    u;
}(0, this.document), function(e, f, t) {
    function d(e) {
        return "[object Function]" == o.call(e);
    }
    function p(e) {
        return "string" == typeof e;
    }
    function h() {}
    function g(e) {
        return !e || "loaded" == e || "complete" == e || "uninitialized" == e;
    }
    function m() {
        var e = x.shift();
        w = 1, e ? e.t ? y(function() {
            ("c" == e.t ? v.injectCss : v.injectJs)(e.s, 0, e.a, e.x, e.e, 1);
        }, 0) : (e(), m()) : w = 0;
    }
    function n(e, t, n, r, i) {
        return w = 0, t = t || "j", p(e) ? function(n, r, e, t, i, o, a) {
            function s(e) {
                if (!u && g(l.readyState) && (d.r = u = 1, !w && m(), l.onload = l.onreadystatechange = null, 
                e)) for (var t in "img" != n && y(function() {
                    C.removeChild(l);
                }, 50), A[r]) A[r].hasOwnProperty(t) && A[r][t].onload();
            }
            a = a || v.errorTimeout;
            var l = f.createElement(n), u = 0, c = 0, d = {
                t: e,
                s: r,
                e: i,
                a: o,
                x: a
            };
            1 === A[r] && (c = 1, A[r] = []), "object" == n ? l.data = r : (l.src = r, l.type = n), 
            l.width = l.height = "0", l.onerror = l.onload = l.onreadystatechange = function() {
                s.call(this, c);
            }, x.splice(t, 0, d), "img" != n && (c || 2 === A[r] ? (C.insertBefore(l, S ? null : b), 
            y(s, a)) : A[r].push(l));
        }("c" == t ? u : l, e, t, this.i++, n, r, i) : (x.splice(this.i++, 0, e), 1 == x.length && m()), 
        this;
    }
    function s() {
        var e = v;
        return e.loader = {
            load: n,
            i: 0
        }, e;
    }
    var r, v, i = f.documentElement, y = e.setTimeout, b = f.getElementsByTagName("script")[0], o = {}.toString, x = [], w = 0, a = "MozAppearance" in i.style, S = a && !!f.createRange().compareNode, C = S ? i : b.parentNode, l = (i = e.opera && "[object Opera]" == o.call(e.opera), 
    i = !!f.attachEvent && !i, a ? "object" : i ? "script" : "img"), u = i ? "script" : l, E = Array.isArray || function(e) {
        return "[object Array]" == o.call(e);
    }, T = [], A = {}, k = {
        timeout: function(e, t) {
            return t.length && (e.timeout = t[0]), e;
        }
    };
    (v = function(e) {
        function c(e, t, n, r, i) {
            var o = function(e) {
                e = e.split("!");
                var t, n, r, i = T.length, o = e.pop(), a = e.length;
                for (o = {
                    url: o,
                    origUrl: o,
                    prefixes: e
                }, n = 0; n < a; n++) r = e[n].split("="), (t = k[r.shift()]) && (o = t(o, r));
                for (n = 0; n < i; n++) o = T[n](o);
                return o;
            }(e), a = o.autoCallback;
            o.url.split(".").pop().split("?").shift(), o.bypass || (t && (t = d(t) ? t : t[e] || t[r] || t[e.split("/").pop().split("?")[0]]), 
            o.instead ? o.instead(e, t, n, r, i) : (A[o.url] ? o.noexec = !0 : A[o.url] = 1, 
            n.load(o.url, o.forceCSS || !o.forceJS && "css" == o.url.split(".").pop().split("?").shift() ? "c" : void 0, o.noexec, o.attrs, o.timeout), 
            (d(t) || d(a)) && n.load(function() {
                s(), t && t(o.origUrl, i, r), a && a(o.origUrl, i, r), A[o.url] = 2;
            })));
        }
        function t(e, t) {
            function n(n, e) {
                if (n) {
                    if (p(n)) e || (s = function() {
                        var e = [].slice.call(arguments);
                        l.apply(this, e), u();
                    }), c(n, s, t, 0, o); else if (Object(n) === n) for (i in r = function() {
                        var e, t = 0;
                        for (e in n) n.hasOwnProperty(e) && t++;
                        return t;
                    }(), n) n.hasOwnProperty(i) && (!e && !--r && (d(s) ? s = function() {
                        var e = [].slice.call(arguments);
                        l.apply(this, e), u();
                    } : s[i] = function(t) {
                        return function() {
                            var e = [].slice.call(arguments);
                            t && t.apply(this, e), u();
                        };
                    }(l[i])), c(n[i], s, t, i, o));
                } else !e && u();
            }
            var r, i, o = !!e.test, a = e.load || e.both, s = e.callback || h, l = s, u = e.complete || h;
            n(o ? e.yep : e.nope, !!a), a && n(a);
        }
        var n, r, i = this.yepnope.loader;
        if (p(e)) c(e, 0, i, 0); else if (E(e)) for (n = 0; n < e.length; n++) p(r = e[n]) ? c(r, 0, i, 0) : E(r) ? v(r) : Object(r) === r && t(r, i); else Object(e) === e && t(e, i);
    }).addPrefix = function(e, t) {
        k[e] = t;
    }, v.addFilter = function(e) {
        T.push(e);
    }, v.errorTimeout = 1e4, null == f.readyState && f.addEventListener && (f.readyState = "loading", 
    f.addEventListener("DOMContentLoaded", r = function() {
        f.removeEventListener("DOMContentLoaded", r, 0), f.readyState = "complete";
    }, 0)), e.yepnope = s(), e.yepnope.executeStack = m, e.yepnope.injectJs = function(e, t, n, r, i, o) {
        var a, s, l = f.createElement("script");
        r = r || v.errorTimeout;
        for (s in l.src = e, n) l.setAttribute(s, n[s]);
        t = o ? m : t || h, l.onreadystatechange = l.onload = function() {
            !a && g(l.readyState) && (a = 1, t(), l.onload = l.onreadystatechange = null);
        }, y(function() {
            a || t(a = 1);
        }, r), i ? l.onload() : b.parentNode.insertBefore(l, b);
    }, e.yepnope.injectCss = function(e, t, n, r, i, o) {
        var a;
        r = f.createElement("link"), t = o ? m : t || h;
        for (a in r.href = e, r.rel = "stylesheet", r.type = "text/css", n) r.setAttribute(a, n[a]);
        i || (b.parentNode.insertBefore(r, b), y(t, 0));
    };
}(this, document), Modernizr.load = function() {
    yepnope.apply(window, [].slice.call(arguments, 0));
}, function() {
    "use strict";
    function t(e) {
        if (!e) throw new Error("No options passed to Waypoint constructor");
        if (!e.element) throw new Error("No element option passed to Waypoint constructor");
        if (!e.handler) throw new Error("No handler option passed to Waypoint constructor");
        this.key = "waypoint-" + n, this.options = t.Adapter.extend({}, t.defaults, e), 
        this.element = this.options.element, this.adapter = new t.Adapter(this.element), 
        this.callback = e.handler, this.axis = this.options.horizontal ? "horizontal" : "vertical", 
        this.enabled = this.options.enabled, this.triggerPoint = null, this.group = t.Group.findOrCreate({
            name: this.options.group,
            axis: this.axis
        }), this.context = t.Context.findOrCreateByElement(this.options.context), t.offsetAliases[this.options.offset] && (this.options.offset = t.offsetAliases[this.options.offset]), 
        this.group.add(this), this.context.add(this), o[this.key] = this, n += 1;
    }
    var n = 0, o = {};
    t.prototype.queueTrigger = function(e) {
        this.group.queueTrigger(this, e);
    }, t.prototype.trigger = function(e) {
        this.enabled && this.callback && this.callback.apply(this, e);
    }, t.prototype.destroy = function() {
        this.context.remove(this), this.group.remove(this), delete o[this.key];
    }, t.prototype.disable = function() {
        return this.enabled = !1, this;
    }, t.prototype.enable = function() {
        return this.context.refresh(), this.enabled = !0, this;
    }, t.prototype.next = function() {
        return this.group.next(this);
    }, t.prototype.previous = function() {
        return this.group.previous(this);
    }, t.invokeAll = function(e) {
        var t = [];
        for (var n in o) t.push(o[n]);
        for (var r = 0, i = t.length; r < i; r++) t[r][e]();
    }, t.destroyAll = function() {
        t.invokeAll("destroy");
    }, t.disableAll = function() {
        t.invokeAll("disable");
    }, t.enableAll = function() {
        for (var e in t.Context.refreshAll(), o) o[e].enabled = !0;
        return this;
    }, t.refreshAll = function() {
        t.Context.refreshAll();
    }, t.viewportHeight = function() {
        return window.innerHeight || document.documentElement.clientHeight;
    }, t.viewportWidth = function() {
        return document.documentElement.clientWidth;
    }, t.adapters = [], t.defaults = {
        context: window,
        continuous: !0,
        enabled: !0,
        group: "default",
        horizontal: !1,
        offset: 0
    }, t.offsetAliases = {
        "bottom-in-view": function() {
            return this.context.innerHeight() - this.adapter.outerHeight();
        },
        "right-in-view": function() {
            return this.context.innerWidth() - this.adapter.outerWidth();
        }
    }, window.Waypoint = t;
}(), function() {
    "use strict";
    function t(e) {
        window.setTimeout(e, 1e3 / 60);
    }
    function n(e) {
        this.element = e, this.Adapter = m.Adapter, this.adapter = new this.Adapter(e), 
        this.key = "waypoint-context-" + r, this.didScroll = !1, this.didResize = !1, this.oldScroll = {
            x: this.adapter.scrollLeft(),
            y: this.adapter.scrollTop()
        }, this.waypoints = {
            vertical: {},
            horizontal: {}
        }, e.waypointContextKey = this.key, i[e.waypointContextKey] = this, r += 1, m.windowContext || (m.windowContext = !0, 
        m.windowContext = new n(window)), this.createThrottledScrollHandler(), this.createThrottledResizeHandler();
    }
    var r = 0, i = {}, m = window.Waypoint, e = window.onload;
    n.prototype.add = function(e) {
        var t = e.options.horizontal ? "horizontal" : "vertical";
        this.waypoints[t][e.key] = e, this.refresh();
    }, n.prototype.checkEmpty = function() {
        var e = this.Adapter.isEmptyObject(this.waypoints.horizontal), t = this.Adapter.isEmptyObject(this.waypoints.vertical), n = this.element == this.element.window;
        e && t && !n && (this.adapter.off(".waypoints"), delete i[this.key]);
    }, n.prototype.createThrottledResizeHandler = function() {
        function e() {
            t.handleResize(), t.didResize = !1;
        }
        var t = this;
        this.adapter.on("resize.waypoints", function() {
            t.didResize || (t.didResize = !0, m.requestAnimationFrame(e));
        });
    }, n.prototype.createThrottledScrollHandler = function() {
        function e() {
            t.handleScroll(), t.didScroll = !1;
        }
        var t = this;
        this.adapter.on("scroll.waypoints", function() {
            (!t.didScroll || m.isTouch) && (t.didScroll = !0, m.requestAnimationFrame(e));
        });
    }, n.prototype.handleResize = function() {
        m.Context.refreshAll();
    }, n.prototype.handleScroll = function() {
        var e = {}, t = {
            horizontal: {
                newScroll: this.adapter.scrollLeft(),
                oldScroll: this.oldScroll.x,
                forward: "right",
                backward: "left"
            },
            vertical: {
                newScroll: this.adapter.scrollTop(),
                oldScroll: this.oldScroll.y,
                forward: "down",
                backward: "up"
            }
        };
        for (var n in t) {
            var r = t[n], i = r.newScroll > r.oldScroll ? r.forward : r.backward;
            for (var o in this.waypoints[n]) {
                var a = this.waypoints[n][o];
                if (null !== a.triggerPoint) {
                    var s = r.oldScroll < a.triggerPoint, l = r.newScroll >= a.triggerPoint;
                    (s && l || !s && !l) && (a.queueTrigger(i), e[a.group.id] = a.group);
                }
            }
        }
        for (var u in e) e[u].flushTriggers();
        this.oldScroll = {
            x: t.horizontal.newScroll,
            y: t.vertical.newScroll
        };
    }, n.prototype.innerHeight = function() {
        return this.element == this.element.window ? m.viewportHeight() : this.adapter.innerHeight();
    }, n.prototype.remove = function(e) {
        delete this.waypoints[e.axis][e.key], this.checkEmpty();
    }, n.prototype.innerWidth = function() {
        return this.element == this.element.window ? m.viewportWidth() : this.adapter.innerWidth();
    }, n.prototype.destroy = function() {
        var e = [];
        for (var t in this.waypoints) for (var n in this.waypoints[t]) e.push(this.waypoints[t][n]);
        for (var r = 0, i = e.length; r < i; r++) e[r].destroy();
    }, n.prototype.refresh = function() {
        var e, t = this.element == this.element.window, n = t ? void 0 : this.adapter.offset(), r = {};
        for (var i in this.handleScroll(), e = {
            horizontal: {
                contextOffset: t ? 0 : n.left,
                contextScroll: t ? 0 : this.oldScroll.x,
                contextDimension: this.innerWidth(),
                oldScroll: this.oldScroll.x,
                forward: "right",
                backward: "left",
                offsetProp: "left"
            },
            vertical: {
                contextOffset: t ? 0 : n.top,
                contextScroll: t ? 0 : this.oldScroll.y,
                contextDimension: this.innerHeight(),
                oldScroll: this.oldScroll.y,
                forward: "down",
                backward: "up",
                offsetProp: "top"
            }
        }) {
            var o = e[i];
            for (var a in this.waypoints[i]) {
                var s, l, u, c, d = this.waypoints[i][a], f = d.options.offset, p = d.triggerPoint, h = 0, g = null == p;
                d.element !== d.element.window && (h = d.adapter.offset()[o.offsetProp]), "function" == typeof f ? f = f.apply(d) : "string" == typeof f && (f = parseFloat(f), 
                -1 < d.options.offset.indexOf("%") && (f = Math.ceil(o.contextDimension * f / 100))), 
                s = o.contextScroll - o.contextOffset, d.triggerPoint = Math.floor(h + s - f), l = p < o.oldScroll, 
                u = d.triggerPoint >= o.oldScroll, c = !l && !u, !g && (l && u) ? (d.queueTrigger(o.backward), 
                r[d.group.id] = d.group) : !g && c ? (d.queueTrigger(o.forward), r[d.group.id] = d.group) : g && o.oldScroll >= d.triggerPoint && (d.queueTrigger(o.forward), 
                r[d.group.id] = d.group);
            }
        }
        return m.requestAnimationFrame(function() {
            for (var e in r) r[e].flushTriggers();
        }), this;
    }, n.findOrCreateByElement = function(e) {
        return n.findByElement(e) || new n(e);
    }, n.refreshAll = function() {
        for (var e in i) i[e].refresh();
    }, n.findByElement = function(e) {
        return i[e.waypointContextKey];
    }, window.onload = function() {
        e && e(), n.refreshAll();
    }, m.requestAnimationFrame = function(e) {
        (window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || t).call(window, e);
    }, m.Context = n;
}(), function() {
    "use strict";
    function a(e, t) {
        return e.triggerPoint - t.triggerPoint;
    }
    function s(e, t) {
        return t.triggerPoint - e.triggerPoint;
    }
    function t(e) {
        this.name = e.name, this.axis = e.axis, this.id = this.name + "-" + this.axis, this.waypoints = [], 
        this.clearTriggerQueues(), n[this.axis][this.name] = this;
    }
    var n = {
        vertical: {},
        horizontal: {}
    }, r = window.Waypoint;
    t.prototype.add = function(e) {
        this.waypoints.push(e);
    }, t.prototype.clearTriggerQueues = function() {
        this.triggerQueues = {
            up: [],
            down: [],
            left: [],
            right: []
        };
    }, t.prototype.flushTriggers = function() {
        for (var e in this.triggerQueues) {
            var t = this.triggerQueues[e], n = "up" === e || "left" === e;
            t.sort(n ? s : a);
            for (var r = 0, i = t.length; r < i; r += 1) {
                var o = t[r];
                (o.options.continuous || r === t.length - 1) && o.trigger([ e ]);
            }
        }
        this.clearTriggerQueues();
    }, t.prototype.next = function(e) {
        this.waypoints.sort(a);
        var t = r.Adapter.inArray(e, this.waypoints);
        return t === this.waypoints.length - 1 ? null : this.waypoints[t + 1];
    }, t.prototype.previous = function(e) {
        this.waypoints.sort(a);
        var t = r.Adapter.inArray(e, this.waypoints);
        return t ? this.waypoints[t - 1] : null;
    }, t.prototype.queueTrigger = function(e, t) {
        this.triggerQueues[t].push(e);
    }, t.prototype.remove = function(e) {
        var t = r.Adapter.inArray(e, this.waypoints);
        -1 < t && this.waypoints.splice(t, 1);
    }, t.prototype.first = function() {
        return this.waypoints[0];
    }, t.prototype.last = function() {
        return this.waypoints[this.waypoints.length - 1];
    }, t.findOrCreate = function(e) {
        return n[e.axis][e.name] || new t(e);
    }, r.Group = t;
}(), function() {
    "use strict";
    function n(e) {
        this.$element = r(e);
    }
    var r = window.jQuery, e = window.Waypoint;
    r.each([ "innerHeight", "innerWidth", "off", "offset", "on", "outerHeight", "outerWidth", "scrollLeft", "scrollTop" ], function(e, t) {
        n.prototype[t] = function() {
            var e = Array.prototype.slice.call(arguments);
            return this.$element[t].apply(this.$element, e);
        };
    }), r.each([ "extend", "inArray", "isEmptyObject" ], function(e, t) {
        n[t] = r[t];
    }), e.adapters.push({
        name: "jquery",
        Adapter: n
    }), e.Adapter = n;
}(), function() {
    "use strict";
    function e(r) {
        return function() {
            var t = [], n = arguments[0];
            return r.isFunction(arguments[0]) && ((n = r.extend({}, arguments[1])).handler = arguments[0]), 
            this.each(function() {
                var e = r.extend({}, n, {
                    element: this
                });
                "string" == typeof e.context && (e.context = r(this).closest(e.context)[0]), t.push(new i(e));
            }), t;
        };
    }
    var i = window.Waypoint;
    window.jQuery && (window.jQuery.fn.waypoint = e(window.jQuery)), window.Zepto && (window.Zepto.fn.waypoint = e(window.Zepto));
}(), function() {
    "use strict";
    function e() {}
    function t(e) {
        this.options = r.Adapter.extend({}, t.defaults, e), this.axis = this.options.horizontal ? "horizontal" : "vertical", 
        this.waypoints = [], this.element = this.options.element, this.createWaypoints();
    }
    var r = window.Waypoint;
    t.prototype.createWaypoints = function() {
        for (var e = {
            vertical: [ {
                down: "enter",
                up: "exited",
                offset: "100%"
            }, {
                down: "entered",
                up: "exit",
                offset: "bottom-in-view"
            }, {
                down: "exit",
                up: "entered",
                offset: 0
            }, {
                down: "exited",
                up: "enter",
                offset: function() {
                    return -this.adapter.outerHeight();
                }
            } ],
            horizontal: [ {
                right: "enter",
                left: "exited",
                offset: "100%"
            }, {
                right: "entered",
                left: "exit",
                offset: "right-in-view"
            }, {
                right: "exit",
                left: "entered",
                offset: 0
            }, {
                right: "exited",
                left: "enter",
                offset: function() {
                    return -this.adapter.outerWidth();
                }
            } ]
        }, t = 0, n = e[this.axis].length; t < n; t++) {
            var r = e[this.axis][t];
            this.createWaypoint(r);
        }
    }, t.prototype.createWaypoint = function(e) {
        var t, n = this;
        this.waypoints.push(new r({
            context: this.options.context,
            element: this.options.element,
            enabled: this.options.enabled,
            handler: (t = e, function(e) {
                n.options[t[e]].call(n, e);
            }),
            offset: e.offset,
            horizontal: this.options.horizontal
        }));
    }, t.prototype.destroy = function() {
        for (var e = 0, t = this.waypoints.length; e < t; e++) this.waypoints[e].destroy();
        this.waypoints = [];
    }, t.prototype.disable = function() {
        for (var e = 0, t = this.waypoints.length; e < t; e++) this.waypoints[e].disable();
    }, t.prototype.enable = function() {
        for (var e = 0, t = this.waypoints.length; e < t; e++) this.waypoints[e].enable();
    }, t.defaults = {
        context: window,
        enabled: !0,
        enter: e,
        entered: e,
        exit: e,
        exited: e
    }, r.Inview = t;
}(), 1023 < $(window).width()) {
    $(function() {
        ParallaxScroll.init();
    });
    var ParallaxScroll = {
        showLogs: !1,
        round: 1e3,
        init: function() {
            if (this._log("init"), this._inited) return this._log("Already Inited"), void (this._inited = !0);
            this._requestAnimationFrame = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function(e, t) {
                window.setTimeout(e, 1e3 / 60);
            }, this._onScroll(!0);
        },
        _inited: !1,
        _properties: [ "x", "y", "z", "rotateX", "rotateY", "rotateZ", "scaleX", "scaleY", "scaleZ", "scale" ],
        _requestAnimationFrame: null,
        _log: function(e) {
            this.showLogs && console.log("Parallax Scroll / " + e);
        },
        _onScroll: function(C) {
            var E = $(document).scrollTop(), T = $(window).height();
            this._log("onScroll " + E), $("[data-parallax]").each($.proxy(function(e, t) {
                var s = $(t), l = [], u = !1, n = s.data("style");
                null == n && (n = s.attr("style") || "", s.data("style", n));
                var r, i = [ s.data("parallax") ];
                for (r = 2; s.data("parallax" + r); r++) i.push(s.data("parallax-" + r));
                var o = i.length;
                for (r = 0; r < o; r++) {
                    var c = i[r], d = c["from-scroll"];
                    null == d && (d = Math.max(0, $(t).offset().top - T)), d |= 0;
                    var a = c.distance, f = c["to-scroll"];
                    null == a && null == f && (a = T), a = Math.max(0 | a, 1);
                    var p = c.easing, h = c["easing-return"];
                    if (null != p && $.easing && $.easing[p] || (p = null), null != h && $.easing && $.easing[h] || (h = p), 
                    p) {
                        var g = c.duration;
                        null == g && (g = a), g = Math.max(0 | g, 1);
                        var m = c["duration-return"];
                        null == m && (m = g), a = 1;
                        var v = s.data("current-time");
                        null == v && (v = 0);
                    }
                    null == f && (f = d + a), f |= 0;
                    var y = c.smoothness;
                    null == y && (y = 30), y |= 0, (C || 0 == y) && (y = 1), y |= 0;
                    var b = E;
                    b = Math.max(b, d), b = Math.min(b, f), p && (null == s.data("sens") && s.data("sens", "back"), 
                    d < b && ("back" == s.data("sens") ? (v = 1, s.data("sens", "go")) : v++), b < f && ("go" == s.data("sens") ? (v = 1, 
                    s.data("sens", "back")) : v++), C && (v = g), s.data("current-time", v)), this._properties.map($.proxy(function(e) {
                        var t = 0, n = c[e];
                        if (null != n) {
                            "scale" == e || "scaleX" == e || "scaleY" == e || "scaleZ" == e ? t = 1 : n |= 0;
                            var r = s.data("_" + e);
                            null == r && (r = t);
                            var i = (b - d) / (f - d) * (n - t) + t, o = r + (i - r) / y;
                            if (p && 0 < v && v <= g) {
                                var a = t;
                                "back" == s.data("sens") && (n = -(a = n), p = h, g = m), o = $.easing[p](null, v, a, n, g);
                            }
                            (o = Math.ceil(o * this.round) / this.round) == r && i == n && (o = n), l[e] || (l[e] = 0), 
                            l[e] += o, r != l[e] && (s.data("_" + e, l[e]), u = !0);
                        }
                    }, this));
                }
                if (u) {
                    if (null != l.z) {
                        var x = c.perspective;
                        null == x && (x = 800);
                        var w = s.parent();
                        w.data("style") || w.data("style", w.attr("style") || ""), w.attr("style", "perspective:" + x + "px; -webkit-perspective:" + x + "px; " + w.data("style"));
                    }
                    null == l.scaleX && (l.scaleX = 1), null == l.scaleY && (l.scaleY = 1), null == l.scaleZ && (l.scaleZ = 1), 
                    null != l.scale && (l.scaleX *= l.scale, l.scaleY *= l.scale, l.scaleZ *= l.scale);
                    var S = "translate3d(" + (l.x ? l.x : 0) + "px, " + (l.y ? l.y : 0) + "px, " + (l.z ? l.z : 0) + "px)" + " " + ("rotateX(" + (l.rotateX ? l.rotateX : 0) + "deg) rotateY(" + (l.rotateY ? l.rotateY : 0) + "deg) rotateZ(" + (l.rotateZ ? l.rotateZ : 0) + "deg)") + " " + ("scaleX(" + l.scaleX + ") scaleY(" + l.scaleY + ") scaleZ(" + l.scaleZ + ")") + ";";
                    this._log(S), s.attr("style", "transform:" + S + " -webkit-transform:" + S + " " + n);
                }
            }, this)), window.requestAnimationFrame ? window.requestAnimationFrame($.proxy(this._onScroll, this, !1)) : this._requestAnimationFrame($.proxy(this._onScroll, this, !1));
        }
    };
}

!function(E, e) {
    "use strict";
    var r = {
        item: 3,
        autoWidth: !1,
        slideMove: 1,
        slideMargin: 10,
        addClass: "",
        mode: "slide",
        useCSS: !0,
        cssEasing: "ease",
        easing: "linear",
        speed: 400,
        auto: !1,
        pauseOnHover: !1,
        loop: !1,
        slideEndAnimation: !0,
        pause: 2e3,
        keyPress: !1,
        controls: !0,
        prevHtml: "",
        nextHtml: "",
        rtl: !1,
        adaptiveHeight: !1,
        vertical: !1,
        verticalHeight: 500,
        vThumbWidth: 100,
        thumbItem: 10,
        pager: !0,
        gallery: !1,
        galleryMargin: 5,
        thumbMargin: 5,
        currentPagerPosition: "middle",
        enableTouch: !0,
        enableDrag: !0,
        freeMove: !0,
        swipeThreshold: 40,
        responsive: [],
        onBeforeStart: function(e) {},
        onSliderLoad: function(e) {},
        onBeforeSlide: function(e, t) {},
        onAfterSlide: function(e, t) {},
        onBeforeNextSlide: function(e, t) {},
        onBeforePrevSlide: function(e, t) {}
    };
    E.fn.lightSlider = function(e) {
        if (0 === this.length) return this;
        if (1 < this.length) return this.each(function() {
            E(this).lightSlider(e);
        }), this;
        var n = {}, c = E.extend(!0, {}, r, e), i = {}, d = this;
        n.$el = this, "fade" === c.mode && (c.vertical = !1);
        var u = d.children(), o = E(window).width(), a = null, s = 0, f = 0, t = !1, p = 0, h = "", g = 0, m = !0 === c.vertical ? "height" : "width", v = !0 === c.vertical ? "margin-bottom" : "margin-right", y = 0, b = 0, x = 0, w = 0, l = null, S = "ontouchstart" in document.documentElement, C = {
            chbreakpoint: function() {
                if (o = E(window).width(), c.responsive.length) {
                    var e;
                    if (!1 === c.autoWidth && (e = c.item), o < c.responsive[0].breakpoint) for (var t = 0; t < c.responsive.length; t++) o < c.responsive[t].breakpoint && (c.responsive[t].breakpoint, 
                    a = c.responsive[t]);
                    if (null != a) for (var n in a.settings) a.settings.hasOwnProperty(n) && ((void 0 === i[n] || null === i[n]) && (i[n] = c[n]), 
                    c[n] = a.settings[n]);
                    if (!E.isEmptyObject(i) && o > c.responsive[0].breakpoint) for (var r in i) i.hasOwnProperty(r) && (c[r] = i[r]);
                    !1 === c.autoWidth && 0 < y && 0 < x && e !== c.item && (g = Math.round(y / ((x + c.slideMargin) * c.slideMove)));
                }
            },
            calSW: function() {
                !1 === c.autoWidth && (x = (p - (c.item * c.slideMargin - c.slideMargin)) / c.item);
            },
            calWidth: function(e) {
                var t = !0 === e ? h.find(".lslide").length : u.length;
                if (!1 === c.autoWidth) f = t * (x + c.slideMargin); else for (var n = f = 0; n < t; n++) f += parseInt(u.eq(n).width()) + c.slideMargin;
                return f;
            }
        };
        return (n = {
            doCss: function() {
                return !(!c.useCSS || !function() {
                    for (var e = [ "transition", "MozTransition", "WebkitTransition", "OTransition", "msTransition", "KhtmlTransition" ], t = document.documentElement, n = 0; n < e.length; n++) if (e[n] in t.style) return !0;
                }());
            },
            keyPress: function() {
                c.keyPress && E(document).on("keyup.lightslider", function(e) {
                    E(":focus").is("input, textarea") || (e.preventDefault ? e.preventDefault() : e.returnValue = !1, 
                    37 === e.keyCode ? d.goToPrevSlide() : 39 === e.keyCode && d.goToNextSlide());
                });
            },
            controls: function() {
                c.controls && (d.after('<div class="lSAction"><a class="lSPrev">' + c.prevHtml + '</a><a class="lSNext">' + c.nextHtml + "</a></div>"), 
                c.autoWidth ? C.calWidth(!1) < p && h.find(".lSAction").hide() : s <= c.item && h.find(".lSAction").hide(), 
                h.find(".lSAction a").on("click", function(e) {
                    return e.preventDefault ? e.preventDefault() : e.returnValue = !1, "lSPrev" === E(this).attr("class") ? d.goToPrevSlide() : d.goToNextSlide(), 
                    !1;
                }));
            },
            initialStyle: function() {
                var l = this;
                "fade" === c.mode && (c.autoWidth = !1, c.slideEndAnimation = !1), c.auto && (c.slideEndAnimation = !1), 
                c.autoWidth && (c.slideMove = 1, c.item = 1), c.loop && (c.slideMove = 1, c.freeMove = !1), 
                c.onBeforeStart.call(this, d), C.chbreakpoint(), d.addClass("lightSlider").wrap('<div class="lSSlideOuter ' + c.addClass + '"><div class="lSSlideWrapper"></div></div>'), 
                h = d.parent(".lSSlideWrapper"), !0 === c.rtl && h.parent().addClass("lSrtl"), c.vertical ? (h.parent().addClass("vertical"), 
                p = c.verticalHeight, h.css("height", p + "px")) : p = d.outerWidth(), u.addClass("lslide"), 
                !0 === c.loop && "slide" === c.mode && (C.calSW(), C.clone = function() {
                    if (C.calWidth(!0) > p) {
                        for (var e = 0, t = 0, n = 0; n < u.length && (t++, !((e += parseInt(d.find(".lslide").eq(n).width()) + c.slideMargin) >= p + c.slideMargin)); n++) ;
                        var r = !0 === c.autoWidth ? t : c.item;
                        if (r < d.find(".clone.left").length) for (var i = 0; i < d.find(".clone.left").length - r; i++) u.eq(i).remove();
                        if (r < d.find(".clone.right").length) for (var o = u.length - 1; o > u.length - 1 - d.find(".clone.right").length; o--) g--, 
                        u.eq(o).remove();
                        for (var a = d.find(".clone.right").length; a < r; a++) d.find(".lslide").eq(a).clone().removeClass("lslide").addClass("clone right").appendTo(d), 
                        g++;
                        for (var s = d.find(".lslide").length - d.find(".clone.left").length; s > d.find(".lslide").length - r; s--) d.find(".lslide").eq(s - 1).clone().removeClass("lslide").addClass("clone left").prependTo(d);
                        u = d.children();
                    } else u.hasClass("clone") && (d.find(".clone").remove(), l.move(d, 0));
                }, C.clone()), C.sSW = function() {
                    s = u.length, !0 === c.rtl && !1 === c.vertical && (v = "margin-left"), !1 === c.autoWidth && u.css(m, x + "px"), 
                    u.css(v, c.slideMargin + "px"), f = C.calWidth(!1), d.css(m, f + "px"), !0 === c.loop && "slide" === c.mode && !1 === t && (g = d.find(".clone.left").length);
                }, C.calL = function() {
                    u = d.children(), s = u.length;
                }, this.doCss() && h.addClass("usingCss"), C.calL(), "slide" === c.mode ? (C.calSW(), 
                C.sSW(), !0 === c.loop && (y = l.slideValue(), this.move(d, y)), !1 === c.vertical && this.setHeight(d, !1)) : (this.setHeight(d, !0), 
                d.addClass("lSFade"), this.doCss() || (u.fadeOut(0), u.eq(g).fadeIn(0))), !0 === c.loop && "slide" === c.mode ? u.eq(g).addClass("active") : u.first().addClass("active");
            },
            pager: function() {
                var u = this;
                if (C.createPager = function() {
                    w = (p - (c.thumbItem * c.thumbMargin - c.thumbMargin)) / c.thumbItem;
                    var e = h.find(".lslide"), t = h.find(".lslide").length, n = 0, r = "", i = 0;
                    for (n = 0; n < t; n++) {
                        "slide" === c.mode && (c.autoWidth ? i += (parseInt(e.eq(n).width()) + c.slideMargin) * c.slideMove : i = n * (x + c.slideMargin) * c.slideMove);
                        var o = e.eq(n * c.slideMove).attr("data-thumb");
                        if (r += !0 === c.gallery ? '<li style="width:100%;' + m + ":" + w + "px;" + v + ":" + c.thumbMargin + 'px"><a href="#"><img src="' + o + '" /></a></li>' : '<li><a href="#">' + (n + 1) + "</a></li>", 
                        "slide" === c.mode && i >= f - p - c.slideMargin) {
                            n += 1;
                            var a = 2;
                            c.autoWidth && (r += '<li><a href="#">' + (n + 1) + "</a></li>", a = 1), n < a ? (r = null, 
                            h.parent().addClass("noPager")) : h.parent().removeClass("noPager");
                            break;
                        }
                    }
                    var s = h.parent();
                    s.find(".lSPager").html(r), !0 === c.gallery && (!0 === c.vertical && s.find(".lSPager").css("width", c.vThumbWidth + "px"), 
                    b = n * (c.thumbMargin + w) + .5, s.find(".lSPager").css({
                        property: b + "px",
                        "transition-duration": c.speed + "ms"
                    }), !0 === c.vertical && h.parent().css("padding-right", c.vThumbWidth + c.galleryMargin + "px"), 
                    s.find(".lSPager").css(m, b + "px"));
                    var l = s.find(".lSPager").find("li");
                    l.first().addClass("active"), l.on("click", function() {
                        return !0 === c.loop && "slide" === c.mode ? g += l.index(this) - s.find(".lSPager").find("li.active").index() : g = l.index(this), 
                        d.mode(!1), !0 === c.gallery && u.slideThumb(), !1;
                    });
                }, c.pager) {
                    var e = "lSpg";
                    c.gallery && (e = "lSGallery"), h.after('<ul class="lSPager ' + e + '"></ul>');
                    var t = c.vertical ? "margin-left" : "margin-top";
                    h.parent().find(".lSPager").css(t, c.galleryMargin + "px"), C.createPager();
                }
                setTimeout(function() {
                    C.init();
                }, 0);
            },
            setHeight: function(r, i) {
                var o = null, e = this;
                o = c.loop ? r.children(".lslide ").first() : r.children().first();
                var t = function() {
                    var e = o.outerHeight(), t = 0, n = e;
                    i && (e = 0, t = 100 * n / p), r.css({
                        height: e + "px",
                        "padding-bottom": t + "%"
                    });
                };
                t(), o.find("img").length ? o.find("img")[0].complete ? (t(), l || e.auto()) : o.find("img").on("load", function() {
                    setTimeout(function() {
                        t(), l || e.auto();
                    }, 100);
                }) : l || e.auto();
            },
            active: function(e, t) {
                this.doCss() && "fade" === c.mode && h.addClass("on");
                var n, r, i = 0;
                g * c.slideMove < s ? (e.removeClass("active"), this.doCss() || "fade" !== c.mode || !1 !== t || e.fadeOut(c.speed), 
                i = !0 === t ? g : g * c.slideMove, !0 === t && (r = (n = e.length) - 1, n <= i + 1 && (i = r)), 
                !0 === c.loop && "slide" === c.mode && (i = !0 === t ? g - d.find(".clone.left").length : g * c.slideMove, 
                !0 === t && (r = (n = e.length) - 1, i + 1 === n ? i = r : n < i + 1 && (i = 0))), 
                this.doCss() || "fade" !== c.mode || !1 !== t || e.eq(i).fadeIn(c.speed), e.eq(i).addClass("active")) : (e.removeClass("active"), 
                e.eq(e.length - 1).addClass("active"), this.doCss() || "fade" !== c.mode || !1 !== t || (e.fadeOut(c.speed), 
                e.eq(i).fadeIn(c.speed)));
            },
            move: function(e, t) {
                !0 === c.rtl && (t = -t), this.doCss() ? e.css(!0 === c.vertical ? {
                    transform: "translate3d(0px, " + -t + "px, 0px)",
                    "-webkit-transform": "translate3d(0px, " + -t + "px, 0px)"
                } : {
                    transform: "translate3d(" + -t + "px, 0px, 0px)",
                    "-webkit-transform": "translate3d(" + -t + "px, 0px, 0px)"
                }) : !0 === c.vertical ? e.css("position", "relative").animate({
                    top: -t + "px"
                }, c.speed, c.easing) : e.css("position", "relative").animate({
                    left: -t + "px"
                }, c.speed, c.easing);
                var n = h.parent().find(".lSPager").find("li");
                this.active(n, !0);
            },
            fade: function() {
                this.active(u, !1);
                var e = h.parent().find(".lSPager").find("li");
                this.active(e, !0);
            },
            slide: function() {
                var e = this;
                C.calSlide = function() {
                    p < f && (y = e.slideValue(), e.active(u, !1), y > f - p - c.slideMargin ? y = f - p - c.slideMargin : y < 0 && (y = 0), 
                    e.move(d, y), !0 === c.loop && "slide" === c.mode && (g >= s - d.find(".clone.left").length / c.slideMove && e.resetSlide(d.find(".clone.left").length), 
                    0 === g && e.resetSlide(h.find(".lslide").length)));
                }, C.calSlide();
            },
            resetSlide: function(e) {
                var t = this;
                h.find(".lSAction a").addClass("disabled"), setTimeout(function() {
                    g = e, h.css("transition-duration", "0ms"), y = t.slideValue(), t.active(u, !1), 
                    n.move(d, y), setTimeout(function() {
                        h.css("transition-duration", c.speed + "ms"), h.find(".lSAction a").removeClass("disabled");
                    }, 50);
                }, c.speed + 100);
            },
            slideValue: function() {
                var e = 0;
                if (!1 === c.autoWidth) e = g * (x + c.slideMargin) * c.slideMove; else for (var t = e = 0; t < g; t++) e += parseInt(u.eq(t).width()) + c.slideMargin;
                return e;
            },
            slideThumb: function() {
                var e;
                switch (c.currentPagerPosition) {
                  case "left":
                    e = 0;
                    break;

                  case "middle":
                    e = p / 2 - w / 2;
                    break;

                  case "right":
                    e = p - w;
                }
                var t = g - d.find(".clone.left").length, n = h.parent().find(".lSPager");
                "slide" === c.mode && !0 === c.loop && (t >= n.children().length ? t = 0 : t < 0 && (t = n.children().length));
                var r = t * (w + c.thumbMargin) - e;
                b < r + p && (r = b - p - c.thumbMargin), r < 0 && (r = 0), this.move(n, r);
            },
            auto: function() {
                c.auto && (clearInterval(l), l = setInterval(function() {
                    d.goToNextSlide();
                }, c.pause));
            },
            pauseOnHover: function() {
                var e = this;
                c.auto && c.pauseOnHover && (h.on("mouseenter", function() {
                    E(this).addClass("ls-hover"), d.pause(), c.auto = !0;
                }), h.on("mouseleave", function() {
                    E(this).removeClass("ls-hover"), h.find(".lightSlider").hasClass("lsGrabbing") || e.auto();
                }));
            },
            touchMove: function(e, t) {
                if (h.css("transition-duration", "0ms"), "slide" === c.mode) {
                    var n = y - (e - t);
                    if (n >= f - p - c.slideMargin) if (!1 === c.freeMove) n = f - p - c.slideMargin; else {
                        var r = f - p - c.slideMargin;
                        n = r + (n - r) / 5;
                    } else n < 0 && (!1 === c.freeMove ? n = 0 : n /= 5);
                    this.move(d, n);
                }
            },
            touchEnd: function(e) {
                if (h.css("transition-duration", c.speed + "ms"), "slide" === c.mode) {
                    var o = !1, t = !0;
                    (y -= e) > f - p - c.slideMargin ? (y = f - p - c.slideMargin, !1 === c.autoWidth && (o = !0)) : y < 0 && (y = 0);
                    var n = function(e) {
                        var t = 0;
                        if (o || e && (t = 1), c.autoWidth) for (var n = 0, r = 0; r < u.length && (n += parseInt(u.eq(r).width()) + c.slideMargin, 
                        g = r + t, !(y <= n)); r++) ; else {
                            var i = y / ((x + c.slideMargin) * c.slideMove);
                            g = parseInt(i) + t, y >= f - p - c.slideMargin && i % 1 != 0 && g++;
                        }
                    };
                    e >= c.swipeThreshold ? (n(!1), t = !1) : e <= -c.swipeThreshold && (n(!0), t = !1), 
                    d.mode(t), this.slideThumb();
                } else e >= c.swipeThreshold ? d.goToPrevSlide() : e <= -c.swipeThreshold && d.goToNextSlide();
            },
            enableDrag: function() {
                var n = this;
                if (!S) {
                    var r = 0, i = 0, o = !1;
                    h.find(".lightSlider").addClass("lsGrab"), h.on("mousedown", function(e) {
                        return !(f < p && 0 !== f) && void ("lSPrev" !== E(e.target).attr("class") && "lSNext" !== E(e.target).attr("class") && (r = !0 === c.vertical ? e.pageY : e.pageX, 
                        o = !0, e.preventDefault ? e.preventDefault() : e.returnValue = !1, h.scrollLeft += 1, 
                        h.scrollLeft -= 1, h.find(".lightSlider").removeClass("lsGrab").addClass("lsGrabbing"), 
                        clearInterval(l)));
                    }), E(window).on("mousemove", function(e) {
                        o && (i = !0 === c.vertical ? e.pageY : e.pageX, n.touchMove(i, r));
                    }), E(window).on("mouseup", function(e) {
                        if (o) {
                            h.find(".lightSlider").removeClass("lsGrabbing").addClass("lsGrab");
                            var t = (i = !(o = !1) === c.vertical ? e.pageY : e.pageX) - r;
                            Math.abs(t) >= c.swipeThreshold && E(window).on("click.ls", function(e) {
                                e.preventDefault ? e.preventDefault() : e.returnValue = !1, e.stopImmediatePropagation(), 
                                e.stopPropagation(), E(window).off("click.ls");
                            }), n.touchEnd(t);
                        }
                    });
                }
            },
            enableTouch: function() {
                var i = this;
                if (S) {
                    var o = {}, a = {};
                    h.on("touchstart", function(e) {
                        a = e.originalEvent.targetTouches[0], o.pageX = e.originalEvent.targetTouches[0].pageX, 
                        o.pageY = e.originalEvent.targetTouches[0].pageY, clearInterval(l);
                    }), h.on("touchmove", function(e) {
                        if (f < p && 0 !== f) return !1;
                        var t = e.originalEvent;
                        a = t.targetTouches[0];
                        var n = Math.abs(a.pageX - o.pageX), r = Math.abs(a.pageY - o.pageY);
                        !0 === c.vertical ? (n < 3 * r && e.preventDefault(), i.touchMove(a.pageY, o.pageY)) : (r < 3 * n && e.preventDefault(), 
                        i.touchMove(a.pageX, o.pageX));
                    }), h.on("touchend", function() {
                        if (f < p && 0 !== f) return !1;
                        var e;
                        e = !0 === c.vertical ? a.pageY - o.pageY : a.pageX - o.pageX, i.touchEnd(e);
                    });
                }
            },
            build: function() {
                var e = this;
                e.initialStyle(), this.doCss() && (!0 === c.enableTouch && e.enableTouch(), !0 === c.enableDrag && e.enableDrag()), 
                E(window).on("focus", function() {
                    e.auto();
                }), E(window).on("blur", function() {
                    clearInterval(l);
                }), e.pager(), e.pauseOnHover(), e.controls(), e.keyPress();
            }
        }).build(), C.init = function() {
            C.chbreakpoint(), !0 === c.vertical ? (p = 1 < c.item ? c.verticalHeight : u.outerHeight(), 
            h.css("height", p + "px")) : p = h.outerWidth(), !0 === c.loop && "slide" === c.mode && C.clone(), 
            C.calL(), "slide" === c.mode && d.removeClass("lSSlide"), "slide" === c.mode && (C.calSW(), 
            C.sSW()), setTimeout(function() {
                "slide" === c.mode && d.addClass("lSSlide");
            }, 1e3), c.pager && C.createPager(), !0 === c.adaptiveHeight && !1 === c.vertical && d.css("height", u.eq(g).outerHeight(!0)), 
            !1 === c.adaptiveHeight && ("slide" === c.mode ? !1 === c.vertical ? n.setHeight(d, !1) : n.auto() : n.setHeight(d, !0)), 
            !0 === c.gallery && n.slideThumb(), "slide" === c.mode && n.slide(), !1 === c.autoWidth ? u.length <= c.item ? h.find(".lSAction").hide() : h.find(".lSAction").show() : C.calWidth(!1) < p && 0 !== f ? h.find(".lSAction").hide() : h.find(".lSAction").show();
        }, d.goToPrevSlide = function() {
            if (0 < g) c.onBeforePrevSlide.call(this, d, g), g--, d.mode(!1), !0 === c.gallery && n.slideThumb(); else if (!0 === c.loop) {
                if (c.onBeforePrevSlide.call(this, d, g), "fade" === c.mode) g = parseInt((s - 1) / c.slideMove);
                d.mode(!1), !0 === c.gallery && n.slideThumb();
            } else !0 === c.slideEndAnimation && (d.addClass("leftEnd"), setTimeout(function() {
                d.removeClass("leftEnd");
            }, 400));
        }, d.goToNextSlide = function() {
            var e = !0;
            "slide" === c.mode && (e = n.slideValue() < f - p - c.slideMargin);
            g * c.slideMove < s - c.slideMove && e ? (c.onBeforeNextSlide.call(this, d, g), 
            g++, d.mode(!1), !0 === c.gallery && n.slideThumb()) : !0 === c.loop ? (c.onBeforeNextSlide.call(this, d, g), 
            g = 0, d.mode(!1), !0 === c.gallery && n.slideThumb()) : !0 === c.slideEndAnimation && (d.addClass("rightEnd"), 
            setTimeout(function() {
                d.removeClass("rightEnd");
            }, 400));
        }, d.mode = function(e) {
            !0 === c.adaptiveHeight && !1 === c.vertical && d.css("height", u.eq(g).outerHeight(!0)), 
            !1 === t && ("slide" === c.mode ? n.doCss() && (d.addClass("lSSlide"), "" !== c.speed && h.css("transition-duration", c.speed + "ms"), 
            "" !== c.cssEasing && h.css("transition-timing-function", c.cssEasing)) : n.doCss() && ("" !== c.speed && d.css("transition-duration", c.speed + "ms"), 
            "" !== c.cssEasing && d.css("transition-timing-function", c.cssEasing))), e || c.onBeforeSlide.call(this, d, g), 
            "slide" === c.mode ? n.slide() : n.fade(), h.hasClass("ls-hover") || n.auto(), setTimeout(function() {
                e || c.onAfterSlide.call(this, d, g);
            }, c.speed), t = !0;
        }, d.play = function() {
            d.goToNextSlide(), c.auto = !0, n.auto();
        }, d.pause = function() {
            c.auto = !1, clearInterval(l);
        }, d.refresh = function() {
            C.init();
        }, d.getCurrentSlideCount = function() {
            var e = g;
            if (c.loop) {
                var t = h.find(".lslide").length, n = d.find(".clone.left").length;
                e = g <= n - 1 ? t + (g - n) : t + n <= g ? g - t - n : g - n;
            }
            return e + 1;
        }, d.getTotalSlideCount = function() {
            return h.find(".lslide").length;
        }, d.goToSlide = function(e) {
            g = c.loop ? e + d.find(".clone.left").length - 1 : e, d.mode(!1), !0 === c.gallery && n.slideThumb();
        }, d.destroy = function() {
            d.lightSlider && (d.goToPrevSlide = function() {}, d.goToNextSlide = function() {}, 
            d.mode = function() {}, d.play = function() {}, d.pause = function() {}, d.refresh = function() {}, 
            d.getCurrentSlideCount = function() {}, d.getTotalSlideCount = function() {}, d.goToSlide = function() {}, 
            d.lightSlider = null, C = {
                init: function() {}
            }, d.parent().parent().find(".lSAction, .lSPager").remove(), d.removeClass("lightSlider lSFade lSSlide lsGrab lsGrabbing leftEnd right").removeAttr("style").unwrap().unwrap(), 
            d.children().removeAttr("style"), u.removeClass("lslide active"), d.find(".clone").remove(), 
            l = u = null, t = !1, g = 0);
        }, setTimeout(function() {
            c.onSliderLoad.call(this, d);
        }, 10), E(window).on("resize orientationchange", function(e) {
            setTimeout(function() {
                e.preventDefault ? e.preventDefault() : e.returnValue = !1, C.init();
            }, 200);
        }), this;
    };
}(jQuery);

var $jscomp = {
    scope: {}
};

$jscomp.defineProperty = "function" == typeof Object.defineProperties ? Object.defineProperty : function(e, t, n) {
    if (n.get || n.set) throw new TypeError("ES3 does not support getters and setters.");
    e != Array.prototype && e != Object.prototype && (e[t] = n.value);
}, $jscomp.getGlobal = function(e) {
    return "undefined" != typeof window && window === e ? e : "undefined" != typeof global && null != global ? global : e;
}, $jscomp.global = $jscomp.getGlobal(this), $jscomp.SYMBOL_PREFIX = "jscomp_symbol_", 
$jscomp.initSymbol = function() {
    $jscomp.initSymbol = function() {}, $jscomp.global.Symbol || ($jscomp.global.Symbol = $jscomp.Symbol);
}, $jscomp.symbolCounter_ = 0, $jscomp.Symbol = function(e) {
    return $jscomp.SYMBOL_PREFIX + (e || "") + $jscomp.symbolCounter_++;
}, $jscomp.initSymbolIterator = function() {
    $jscomp.initSymbol();
    var e = $jscomp.global.Symbol.iterator;
    e || (e = $jscomp.global.Symbol.iterator = $jscomp.global.Symbol("iterator")), "function" != typeof Array.prototype[e] && $jscomp.defineProperty(Array.prototype, e, {
        configurable: !0,
        writable: !0,
        value: function() {
            return $jscomp.arrayIterator(this);
        }
    }), $jscomp.initSymbolIterator = function() {};
}, $jscomp.arrayIterator = function(e) {
    var t = 0;
    return $jscomp.iteratorPrototype(function() {
        return t < e.length ? {
            done: !1,
            value: e[t++]
        } : {
            done: !0
        };
    });
}, $jscomp.iteratorPrototype = function(e) {
    return $jscomp.initSymbolIterator(), (e = {
        next: e
    })[$jscomp.global.Symbol.iterator] = function() {
        return this;
    }, e;
}, $jscomp.array = $jscomp.array || {}, $jscomp.iteratorFromArray = function(t, n) {
    $jscomp.initSymbolIterator(), t instanceof String && (t += "");
    var r = 0, i = {
        next: function() {
            if (r < t.length) {
                var e = r++;
                return {
                    value: n(e, t[e]),
                    done: !1
                };
            }
            return i.next = function() {
                return {
                    done: !0,
                    value: void 0
                };
            }, i.next();
        }
    };
    return i[Symbol.iterator] = function() {
        return i;
    }, i;
}, $jscomp.polyfill = function(e, t, n, r) {
    if (t) {
        for (n = $jscomp.global, e = e.split("."), r = 0; r < e.length - 1; r++) {
            var i = e[r];
            i in n || (n[i] = {}), n = n[i];
        }
        (t = t(r = n[e = e[e.length - 1]])) != r && null != t && $jscomp.defineProperty(n, e, {
            configurable: !0,
            writable: !0,
            value: t
        });
    }
}, $jscomp.polyfill("Array.prototype.keys", function(e) {
    return e || function() {
        return $jscomp.iteratorFromArray(this, function(e) {
            return e;
        });
    };
}, "es6-impl", "es3");

var $jscomp$this = this;

!function(e, t) {
    "function" == typeof define && define.amd ? define([], t) : "object" == typeof module && module.exports ? module.exports = t() : e.anime = t();
}(this, function() {
    function i(e) {
        if (!O.col(e)) try {
            return document.querySelectorAll(e);
        } catch (e) {}
    }
    function w(e, t) {
        for (var n = e.length, r = 2 <= arguments.length ? t : void 0, i = [], o = 0; o < n; o++) if (o in e) {
            var a = e[o];
            t.call(r, a, o, e) && i.push(a);
        }
        return i;
    }
    function d(e) {
        return e.reduce(function(e, t) {
            return e.concat(O.arr(t) ? d(t) : t);
        }, []);
    }
    function o(e) {
        return O.arr(e) ? e : (O.str(e) && (e = i(e) || e), e instanceof NodeList || e instanceof HTMLCollection ? [].slice.call(e) : [ e ]);
    }
    function a(e, t) {
        return e.some(function(e) {
            return e === t;
        });
    }
    function s(e) {
        var t, n = {};
        for (t in e) n[t] = e[t];
        return n;
    }
    function f(e, t) {
        var n, r = s(e);
        for (n in e) r[n] = t.hasOwnProperty(n) ? t[n] : e[n];
        return r;
    }
    function p(e, t) {
        var n, r = s(e);
        for (n in t) r[n] = O.und(e[n]) ? t[n] : e[n];
        return r;
    }
    function l(e) {
        if (e = /([\+\-]?[0-9#\.]+)(%|px|pt|em|rem|in|cm|mm|ex|ch|pc|vw|vh|vmin|vmax|deg|rad|turn)?$/.exec(e)) return e[2];
    }
    function u(e, t) {
        return O.fnc(e) ? e(t.target, t.id, t.total) : e;
    }
    function S(e, t) {
        if (t in e.style) return getComputedStyle(e).getPropertyValue(t.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase()) || "0";
    }
    function h(e, t) {
        return O.dom(e) && a(N, t) ? "transform" : O.dom(e) && (e.getAttribute(t) || O.svg(e) && e[t]) ? "attribute" : O.dom(e) && "transform" !== t && S(e, t) ? "css" : null != e[t] ? "object" : void 0;
    }
    function c(e, t) {
        switch (h(e, t)) {
          case "transform":
            return function(e, n) {
                var t, r = -1 < (t = n).indexOf("translate") || "perspective" === t ? "px" : -1 < t.indexOf("rotate") || -1 < t.indexOf("skew") ? "deg" : void 0;
                if (r = -1 < n.indexOf("scale") ? 1 : 0 + r, !(e = e.style.transform)) return r;
                for (var i = [], o = [], a = [], s = /(\w+)\((.+?)\)/g; i = s.exec(e); ) o.push(i[1]), 
                a.push(i[2]);
                return (e = w(a, function(e, t) {
                    return o[t] === n;
                })).length ? e[0] : r;
            }(e, t);

          case "css":
            return S(e, t);

          case "attribute":
            return e.getAttribute(t);
        }
        return e[t] || 0;
    }
    function g(e, t) {
        var n = /^(\*=|\+=|-=)/.exec(e);
        if (!n) return e;
        var r = l(e) || 0;
        switch (t = parseFloat(t), e = parseFloat(e.replace(n[0], "")), n[0][0]) {
          case "+":
            return t + e + r;

          case "-":
            return t - e + r;

          case "*":
            return t * e + r;
        }
    }
    function m(e, t) {
        return Math.sqrt(Math.pow(t.x - e.x, 2) + Math.pow(t.y - e.y, 2));
    }
    function n(e) {
        e = e.points;
        for (var t, n = 0, r = 0; r < e.numberOfItems; r++) {
            var i = e.getItem(r);
            0 < r && (n += m(t, i)), t = i;
        }
        return n;
    }
    function v(e) {
        if (e.getTotalLength) return e.getTotalLength();
        switch (e.tagName.toLowerCase()) {
          case "circle":
            return 2 * Math.PI * e.getAttribute("r");

          case "rect":
            return 2 * e.getAttribute("width") + 2 * e.getAttribute("height");

          case "line":
            return m({
                x: e.getAttribute("x1"),
                y: e.getAttribute("y1")
            }, {
                x: e.getAttribute("x2"),
                y: e.getAttribute("y2")
            });

          case "polyline":
            return n(e);

          case "polygon":
            var t = e.points;
            return n(e) + m(t.getItem(t.numberOfItems - 1), t.getItem(0));
        }
    }
    function C(t, n) {
        function e(e) {
            return e = void 0 === e ? 0 : e, t.el.getPointAtLength(1 <= n + e ? n + e : 0);
        }
        var r = e(), i = e(-1), o = e(1);
        switch (t.property) {
          case "x":
            return r.x;

          case "y":
            return r.y;

          case "angle":
            return 180 * Math.atan2(o.y - i.y, o.x - i.x) / Math.PI;
        }
    }
    function y(e, t) {
        var n, r = /-?\d*\.?\d+/g;
        if (n = O.pth(e) ? e.totalLength : e, O.col(n)) if (O.rgb(n)) {
            var i = /rgb\((\d+,\s*[\d]+,\s*[\d]+)\)/g.exec(n);
            n = i ? "rgba(" + i[1] + ",1)" : n;
        } else n = O.hex(n) ? function(e) {
            e = e.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i, function(e, t, n, r) {
                return t + t + n + n + r + r;
            });
            var t = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);
            return "rgba(" + (e = parseInt(t[1], 16)) + "," + parseInt(t[2], 16) + "," + (t = parseInt(t[3], 16)) + ",1)";
        }(n) : O.hsl(n) ? function(e) {
            function t(e, t, n) {
                return n < 0 && (n += 1), 1 < n && --n, n < 1 / 6 ? e + 6 * (t - e) * n : n < .5 ? t : n < 2 / 3 ? e + (t - e) * (2 / 3 - n) * 6 : e;
            }
            var n = /hsl\((\d+),\s*([\d.]+)%,\s*([\d.]+)%\)/g.exec(e) || /hsla\((\d+),\s*([\d.]+)%,\s*([\d.]+)%,\s*([\d.]+)\)/g.exec(e);
            e = parseInt(n[1]) / 360;
            var r = parseInt(n[2]) / 100, i = parseInt(n[3]) / 100;
            if (n = n[4] || 1, 0 == r) i = r = e = i; else {
                var o = i < .5 ? i * (1 + r) : i + r - i * r, a = 2 * i - o;
                i = t(a, o, e + 1 / 3), r = t(a, o, e), e = t(a, o, e - 1 / 3);
            }
            return "rgba(" + 255 * i + "," + 255 * r + "," + 255 * e + "," + n + ")";
        }(n) : void 0; else i = (i = l(n)) ? n.substr(0, n.length - i.length) : n, n = t && !/\s/g.test(n) ? i + t : i;
        return {
            original: n += "",
            numbers: n.match(r) ? n.match(r).map(Number) : [ 0 ],
            strings: O.str(e) || t ? n.split(r) : []
        };
    }
    function b(e) {
        return w(e = e ? d(O.arr(e) ? e.map(o) : o(e)) : [], function(e, t, n) {
            return n.indexOf(e) === t;
        });
    }
    function x(e, n) {
        var t = s(n);
        if (O.arr(e)) {
            var r = e.length;
            2 !== r || O.obj(e[0]) ? O.fnc(n.duration) || (t.duration = n.duration / r) : e = {
                value: e
            };
        }
        return o(e).map(function(e, t) {
            return t = t ? 0 : n.delay, e = O.obj(e) && !O.pth(e) ? e : {
                value: e
            }, O.und(e.delay) && (e.delay = t), e;
        }).map(function(e) {
            return p(e, t);
        });
    }
    function E(o, a) {
        var s;
        return o.tweens.map(function(e) {
            var t = (e = function(e, t) {
                var n, r = {};
                for (n in e) {
                    var i = u(e[n], t);
                    O.arr(i) && 1 === (i = i.map(function(e) {
                        return u(e, t);
                    })).length && (i = i[0]), r[n] = i;
                }
                return r.duration = parseFloat(r.duration), r.delay = parseFloat(r.delay), r;
            }(e, a)).value, n = c(a.target, o.name), r = s ? s.to.original : n, i = (r = O.arr(t) ? t[0] : r, 
            g(O.arr(t) ? t[1] : t, r));
            n = l(i) || l(r) || l(n);
            return e.from = y(r, n), e.to = y(i, n), e.start = s ? s.end : o.offset, e.end = e.start + e.delay + e.duration, 
            e.easing = function(e) {
                return O.arr(e) ? j.apply(this, e) : P[e];
            }(e.easing), e.elasticity = (1e3 - Math.min(Math.max(e.elasticity, 1), 999)) / 1e3, 
            e.isPath = O.pth(t), e.isColor = O.col(e.from.original), e.isColor && (e.round = 1), 
            s = e;
        });
    }
    function T(t, e, n, r) {
        var i = "delay" === t;
        return e.length ? (i ? Math.min : Math.max).apply(Math, e.map(function(e) {
            return e[t];
        })) : i ? r.delay : n.offset + r.delay + r.duration;
    }
    function r(e) {
        var t, n, r, i, o, a = f(M, e), s = f(F, e), l = (n = e.targets, (r = b(n)).map(function(e, t) {
            return {
                target: e,
                id: t,
                total: r.length
            };
        })), u = [], c = p(a, s);
        for (t in e) c.hasOwnProperty(t) || "targets" === t || u.push({
            name: t,
            offset: c.offset,
            tweens: x(e[t], s)
        });
        return o = u, p(a, {
            children: [],
            animatables: i = l,
            animations: e = w(d(i.map(function(r) {
                return o.map(function(e) {
                    var t = h(r.target, e.name);
                    if (t) {
                        var n = E(e, r);
                        e = {
                            type: t,
                            property: e.name,
                            animatable: r,
                            tweens: n,
                            duration: n[n.length - 1].end,
                            delay: n[0].delay
                        };
                    } else e = void 0;
                    return e;
                });
            })), function(e) {
                return !O.und(e);
            }),
            duration: T("duration", e, a, s),
            delay: T("delay", e, a, s)
        });
    }
    function A(e) {
        function c() {
            return window.Promise && new Promise(function(e) {
                return y = e;
            });
        }
        function d(e) {
            return x.reversed ? x.duration - e : e;
        }
        function f(t) {
            for (var e = 0, n = {}, r = x.animations, i = r.length; e < i; ) {
                var o = r[e], a = o.animatable, s = (l = o.tweens)[d = l.length - 1];
                d && (s = w(l, function(e) {
                    return t < e.end;
                })[0] || s);
                for (var l = Math.min(Math.max(t - s.start - s.delay, 0), s.duration) / s.duration, u = isNaN(l) ? 1 : s.easing(l, s.elasticity), c = (l = s.to.strings, 
                s.round), d = [], f = void 0, p = (f = s.to.numbers.length, 0); p < f; p++) {
                    var h = void 0, g = (h = s.to.numbers[p], s.from.numbers[p]);
                    h = s.isPath ? C(s.value, u * h) : g + u * (h - g);
                    c && (s.isColor && 2 < p || (h = Math.round(h * c) / c)), d.push(h);
                }
                if (s = l.length) for (f = l[0], u = 0; u < s; u++) c = l[u + 1], p = d[u], isNaN(p) || (f = c ? f + (p + c) : f + (p + " ")); else f = d[0];
                D[o.type](a.target, o.property, f, n, a.id), o.currentValue = f, e++;
            }
            if (e = Object.keys(n).length) for (r = 0; r < e; r++) k || (k = S(document.body, "transform") ? "transform" : "-webkit-transform"), 
            x.animatables[r].target.style[k] = n[r].join(" ");
            x.currentTime = t, x.progress = t / x.duration * 100;
        }
        function p(e) {
            x[e] && x[e](x);
        }
        function h() {
            x.remaining && !0 !== x.remaining && x.remaining--;
        }
        function t(e) {
            var t = x.duration, n = x.offset, r = n + x.delay, i = x.currentTime, o = x.reversed, a = d(e);
            if (x.children.length) {
                var s = x.children, l = s.length;
                if (a >= x.currentTime) for (var u = 0; u < l; u++) s[u].seek(a); else for (;l--; ) s[l].seek(a);
            }
            (r <= a || !t) && (x.began || (x.began = !0, p("begin")), p("run")), n < a && a < t ? f(a) : (a <= n && 0 !== i && (f(0), 
            o && h()), (t <= a && i !== t || !t) && (f(t), o || h())), p("update"), t <= e && (x.remaining ? (m = g, 
            "alternate" === x.direction && (x.reversed = !x.reversed)) : (x.pause(), x.completed || (x.completed = !0, 
            p("complete"), "Promise" in window && (y(), b = c()))), v = 0);
        }
        e = void 0 === e ? {} : e;
        var g, m, v = 0, y = null, b = c(), x = r(e);
        return x.reset = function() {
            var e = x.direction, t = x.loop;
            for (x.currentTime = 0, x.progress = 0, x.paused = !0, x.began = !1, x.completed = !1, 
            x.reversed = "reverse" === e, x.remaining = "alternate" === e && 1 === t ? 2 : t, 
            f(0), e = x.children.length; e--; ) x.children[e].reset();
        }, x.tick = function(e) {
            g = e, m || (m = g), t((v + g - m) * A.speed);
        }, x.seek = function(e) {
            t(d(e));
        }, x.pause = function() {
            var e = L.indexOf(x);
            -1 < e && L.splice(e, 1), x.paused = !0;
        }, x.play = function() {
            x.paused && (x.paused = !1, m = 0, v = d(x.currentTime), L.push(x), q || H());
        }, x.reverse = function() {
            x.reversed = !x.reversed, m = 0, v = d(x.currentTime);
        }, x.restart = function() {
            x.pause(), x.reset(), x.play();
        }, x.finished = b, x.reset(), x.autoplay && x.play(), x;
    }
    var k, M = {
        update: void 0,
        begin: void 0,
        run: void 0,
        complete: void 0,
        loop: 1,
        direction: "normal",
        autoplay: !0,
        offset: 0
    }, F = {
        duration: 1e3,
        delay: 0,
        easing: "easeOutElastic",
        elasticity: 500,
        round: 0
    }, N = "translateX translateY translateZ rotate rotateX rotateY rotateZ scale scaleX scaleY scaleZ skewX skewY perspective".split(" "), O = {
        arr: function(e) {
            return Array.isArray(e);
        },
        obj: function(e) {
            return -1 < Object.prototype.toString.call(e).indexOf("Object");
        },
        pth: function(e) {
            return O.obj(e) && e.hasOwnProperty("totalLength");
        },
        svg: function(e) {
            return e instanceof SVGElement;
        },
        dom: function(e) {
            return e.nodeType || O.svg(e);
        },
        str: function(e) {
            return "string" == typeof e;
        },
        fnc: function(e) {
            return "function" == typeof e;
        },
        und: function(e) {
            return void 0 === e;
        },
        hex: function(e) {
            return /(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(e);
        },
        rgb: function(e) {
            return /^rgb/.test(e);
        },
        hsl: function(e) {
            return /^hsl/.test(e);
        },
        col: function(e) {
            return O.hex(e) || O.rgb(e) || O.hsl(e);
        }
    }, j = function() {
        function d(e, t, n) {
            return (((1 - 3 * n + 3 * t) * e + (3 * n - 6 * t)) * e + 3 * t) * e;
        }
        return function(a, s, l, u) {
            if (0 <= a && a <= 1 && 0 <= l && l <= 1) {
                var c = new Float32Array(11);
                if (a !== s || l !== u) for (var e = 0; e < 11; ++e) c[e] = d(.1 * e, a, l);
                return function(e) {
                    if (a === s && l === u) return e;
                    if (0 === e) return 0;
                    if (1 === e) return 1;
                    for (var t = 0, n = 1; 10 !== n && c[n] <= e; ++n) t += .1;
                    n = t + (e - c[--n]) / (c[n + 1] - c[n]) * .1;
                    var r = 3 * (1 - 3 * l + 3 * a) * n * n + 2 * (3 * l - 6 * a) * n + 3 * a;
                    if (.001 <= r) {
                        for (t = 0; t < 4 && 0 !== (r = 3 * (1 - 3 * l + 3 * a) * n * n + 2 * (3 * l - 6 * a) * n + 3 * a); ++t) {
                            var i = d(n, a, l) - e;
                            n = n - i / r;
                        }
                        e = n;
                    } else if (0 === r) e = n; else {
                        n = t, t = t + .1;
                        for (var o = 0; 0 < (r = d(i = n + (t - n) / 2, a, l) - e) ? t = i : n = i, 1e-7 < Math.abs(r) && ++o < 10; ) ;
                        e = i;
                    }
                    return d(e, s, u);
                };
            }
        };
    }(), P = function() {
        function n(e, t) {
            return 0 === e || 1 === e ? e : -Math.pow(2, 10 * (e - 1)) * Math.sin(2 * (e - 1 - t / (2 * Math.PI) * Math.asin(1)) * Math.PI / t);
        }
        var e, r = "Quad Cubic Quart Quint Sine Expo Circ Back Elastic".split(" "), t = {
            In: [ [ .55, .085, .68, .53 ], [ .55, .055, .675, .19 ], [ .895, .03, .685, .22 ], [ .755, .05, .855, .06 ], [ .47, 0, .745, .715 ], [ .95, .05, .795, .035 ], [ .6, .04, .98, .335 ], [ .6, -.28, .735, .045 ], n ],
            Out: [ [ .25, .46, .45, .94 ], [ .215, .61, .355, 1 ], [ .165, .84, .44, 1 ], [ .23, 1, .32, 1 ], [ .39, .575, .565, 1 ], [ .19, 1, .22, 1 ], [ .075, .82, .165, 1 ], [ .175, .885, .32, 1.275 ], function(e, t) {
                return 1 - n(1 - e, t);
            } ],
            InOut: [ [ .455, .03, .515, .955 ], [ .645, .045, .355, 1 ], [ .77, 0, .175, 1 ], [ .86, 0, .07, 1 ], [ .445, .05, .55, .95 ], [ 1, 0, 0, 1 ], [ .785, .135, .15, .86 ], [ .68, -.55, .265, 1.55 ], function(e, t) {
                return e < .5 ? n(2 * e, t) / 2 : 1 - n(-2 * e + 2, t) / 2;
            } ]
        }, i = {
            linear: j(.25, .25, .75, .75)
        }, o = {};
        for (e in t) o.type = e, t[o.type].forEach(function(n) {
            return function(e, t) {
                i["ease" + n.type + r[t]] = O.fnc(e) ? e : j.apply($jscomp$this, e);
            };
        }(o)), o = {
            type: o.type
        };
        return i;
    }(), D = {
        css: function(e, t, n) {
            return e.style[t] = n;
        },
        attribute: function(e, t, n) {
            return e.setAttribute(t, n);
        },
        object: function(e, t, n) {
            return e[t] = n;
        },
        transform: function(e, t, n, r, i) {
            r[i] || (r[i] = []), r[i].push(t + "(" + n + ")");
        }
    }, L = [], q = 0, H = function() {
        function r() {
            q = requestAnimationFrame(e);
        }
        function e(e) {
            var t = L.length;
            if (t) {
                for (var n = 0; n < t; ) L[n] && L[n].tick(e), n++;
                r();
            } else cancelAnimationFrame(q), q = 0;
        }
        return r;
    }();
    return A.version = "2.2.0", A.speed = 1, A.running = L, A.remove = function(e) {
        e = b(e);
        for (var t = L.length; t--; ) for (var n = L[t], r = n.animations, i = r.length; i--; ) a(e, r[i].animatable.target) && (r.splice(i, 1), 
        r.length || n.pause());
    }, A.getValue = c, A.path = function(e, t) {
        var n = O.str(e) ? i(e)[0] : e, r = t || 100;
        return function(e) {
            return {
                el: n,
                property: e,
                totalLength: v(n) * (r / 100)
            };
        };
    }, A.setDashoffset = function(e) {
        var t = v(e);
        return e.setAttribute("stroke-dasharray", t), t;
    }, A.bezier = j, A.easings = P, A.timeline = function(r) {
        var i = A(r);
        return i.pause(), i.duration = 0, i.add = function(e) {
            return i.children.forEach(function(e) {
                e.began = !0, e.completed = !0;
            }), o(e).forEach(function(e) {
                var t = p(e, f(F, r || {}));
                t.targets = t.targets || r.targets, e = i.duration;
                var n = t.offset;
                t.autoplay = !1, t.direction = i.direction, t.offset = O.und(n) ? e : g(n, e), i.began = !0, 
                i.completed = !0, i.seek(t.offset), (t = A(t)).began = !0, t.completed = !0, t.duration > e && (i.duration = t.duration), 
                i.children.push(t);
            }), i.seek(0), i.reset(), i.autoplay && i.restart(), i;
        }, i;
    }, A.random = function(e, t) {
        return Math.floor(Math.random() * (t - e + 1)) + e;
    }, A;
}), function(e) {
    "undefined" == typeof module ? this.charming = e : module.exports = e;
}(function(e, t) {
    "use strict";
    var a = (t = t || {}).tagName || "span", s = null != t.classPrefix ? t.classPrefix : "char", l = 1;
    return function e(t) {
        for (var n = [].slice.call(t.childNodes), r = n.length, i = -1; ++i < r; ) e(n[i]);
        t.nodeType === Node.TEXT_NODE && function(e) {
            for (var t = e.parentNode, n = e.nodeValue, r = n.length, i = -1; ++i < r; ) {
                var o = document.createElement(a);
                s && (o.className = s + l, l++), o.appendChild(document.createTextNode(n[i])), t.insertBefore(o, e);
            }
            t.removeChild(e);
        }(t);
    }(e), e;
}), function() {
    var r, t, n, l, i, o = function(e, t) {
        return function() {
            return e.apply(t, arguments);
        };
    }, a = [].indexOf || function(e) {
        for (var t = 0, n = this.length; t < n; t++) if (t in this && this[t] === e) return t;
        return -1;
    };
    t = function() {
        function e() {}
        return e.prototype.extend = function(e, t) {
            var n, r;
            for (n in t) r = t[n], null == e[n] && (e[n] = r);
            return e;
        }, e.prototype.isMobile = function(e) {
            return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(e);
        }, e.prototype.createEvent = function(e, t, n, r) {
            var i;
            return null == t && (t = !1), null == n && (n = !1), null == r && (r = null), null != document.createEvent ? (i = document.createEvent("CustomEvent")).initCustomEvent(e, t, n, r) : null != document.createEventObject ? (i = document.createEventObject()).eventType = e : i.eventName = e, 
            i;
        }, e.prototype.emitEvent = function(e, t) {
            return null != e.dispatchEvent ? e.dispatchEvent(t) : t in (null != e) ? e[t]() : "on" + t in (null != e) ? e["on" + t]() : void 0;
        }, e.prototype.addEvent = function(e, t, n) {
            return null != e.addEventListener ? e.addEventListener(t, n, !1) : null != e.attachEvent ? e.attachEvent("on" + t, n) : e[t] = n;
        }, e.prototype.removeEvent = function(e, t, n) {
            return null != e.removeEventListener ? e.removeEventListener(t, n, !1) : null != e.detachEvent ? e.detachEvent("on" + t, n) : delete e[t];
        }, e.prototype.innerHeight = function() {
            return "innerHeight" in window ? window.innerHeight : document.documentElement.clientHeight;
        }, e;
    }(), n = this.WeakMap || this.MozWeakMap || (n = function() {
        function e() {
            this.keys = [], this.values = [];
        }
        return e.prototype.get = function(e) {
            var t, n, r, i;
            for (t = n = 0, r = (i = this.keys).length; n < r; t = ++n) if (i[t] === e) return this.values[t];
        }, e.prototype.set = function(e, t) {
            var n, r, i, o;
            for (n = r = 0, i = (o = this.keys).length; r < i; n = ++r) if (o[n] === e) return void (this.values[n] = t);
            return this.keys.push(e), this.values.push(t);
        }, e;
    }()), r = this.MutationObserver || this.WebkitMutationObserver || this.MozMutationObserver || (r = function() {
        function e() {
            "undefined" != typeof console && null !== console && console.warn("MutationObserver is not supported by your browser."), 
            "undefined" != typeof console && null !== console && console.warn("WOW.js cannot detect dom mutations, please call .sync() after loading new content.");
        }
        return e.notSupported = !0, e.prototype.observe = function() {}, e;
    }()), l = this.getComputedStyle || function(n) {
        return this.getPropertyValue = function(e) {
            var t;
            return "float" === e && (e = "styleFloat"), i.test(e) && e.replace(i, function(e, t) {
                return t.toUpperCase();
            }), (null != (t = n.currentStyle) ? t[e] : void 0) || null;
        }, this;
    }, i = /(\-([a-z]){1})/g, this.WOW = function() {
        function e(e) {
            null == e && (e = {}), this.scrollCallback = o(this.scrollCallback, this), this.scrollHandler = o(this.scrollHandler, this), 
            this.resetAnimation = o(this.resetAnimation, this), this.start = o(this.start, this), 
            this.scrolled = !0, this.config = this.util().extend(e, this.defaults), null != e.scrollContainer && (this.config.scrollContainer = document.querySelector(e.scrollContainer)), 
            this.animationNameCache = new n(), this.wowEvent = this.util().createEvent(this.config.boxClass);
        }
        return e.prototype.defaults = {
            boxClass: "wow",
            animateClass: "animated",
            offset: 0,
            mobile: !0,
            live: !0,
            callback: null,
            scrollContainer: null
        }, e.prototype.init = function() {
            var e;
            return this.element = window.document.documentElement, "interactive" === (e = document.readyState) || "complete" === e ? this.start() : this.util().addEvent(document, "DOMContentLoaded", this.start), 
            this.finished = [];
        }, e.prototype.start = function() {
            var i, e, t, n, a;
            if (this.stopped = !1, this.boxes = function() {
                var e, t, n, r;
                for (r = [], e = 0, t = (n = this.element.querySelectorAll("." + this.config.boxClass)).length; e < t; e++) i = n[e], 
                r.push(i);
                return r;
            }.call(this), this.all = function() {
                var e, t, n, r;
                for (r = [], e = 0, t = (n = this.boxes).length; e < t; e++) i = n[e], r.push(i);
                return r;
            }.call(this), this.boxes.length) if (this.disabled()) this.resetStyle(); else for (e = 0, 
            t = (n = this.boxes).length; e < t; e++) i = n[e], this.applyStyle(i, !0);
            return this.disabled() || (this.util().addEvent(this.config.scrollContainer || window, "scroll", this.scrollHandler), 
            this.util().addEvent(window, "resize", this.scrollHandler), this.interval = setInterval(this.scrollCallback, 50)), 
            this.config.live ? new r((a = this, function(e) {
                var t, n, i, o, r;
                for (r = [], t = 0, n = e.length; t < n; t++) o = e[t], r.push(function() {
                    var e, t, n, r;
                    for (r = [], e = 0, t = (n = o.addedNodes || []).length; e < t; e++) i = n[e], r.push(this.doSync(i));
                    return r;
                }.call(a));
                return r;
            })).observe(document.body, {
                childList: !0,
                subtree: !0
            }) : void 0;
        }, e.prototype.stop = function() {
            return this.stopped = !0, this.util().removeEvent(this.config.scrollContainer || window, "scroll", this.scrollHandler), 
            this.util().removeEvent(window, "resize", this.scrollHandler), null != this.interval ? clearInterval(this.interval) : void 0;
        }, e.prototype.sync = function() {
            return r.notSupported ? this.doSync(this.element) : void 0;
        }, e.prototype.doSync = function(e) {
            var t, n, r, i, o;
            if (null == e && (e = this.element), 1 === e.nodeType) {
                for (o = [], n = 0, r = (i = (e = e.parentNode || e).querySelectorAll("." + this.config.boxClass)).length; n < r; n++) t = i[n], 
                a.call(this.all, t) < 0 ? (this.boxes.push(t), this.all.push(t), this.stopped || this.disabled() ? this.resetStyle() : this.applyStyle(t, !0), 
                o.push(this.scrolled = !0)) : o.push(void 0);
                return o;
            }
        }, e.prototype.show = function(e) {
            return this.applyStyle(e), e.className = e.className + " " + this.config.animateClass, 
            null != this.config.callback && this.config.callback(e), this.util().emitEvent(e, this.wowEvent), 
            this.util().addEvent(e, "animationend", this.resetAnimation), this.util().addEvent(e, "oanimationend", this.resetAnimation), 
            this.util().addEvent(e, "webkitAnimationEnd", this.resetAnimation), this.util().addEvent(e, "MSAnimationEnd", this.resetAnimation), 
            e;
        }, e.prototype.applyStyle = function(e, t) {
            var n, r, i, o;
            return r = e.getAttribute("data-wow-duration"), n = e.getAttribute("data-wow-delay"), 
            i = e.getAttribute("data-wow-iteration"), this.animate((o = this, function() {
                return o.customStyle(e, t, r, n, i);
            }));
        }, e.prototype.animate = "requestAnimationFrame" in window ? function(e) {
            return window.requestAnimationFrame(e);
        } : function(e) {
            return e();
        }, e.prototype.resetStyle = function() {
            var e, t, n, r, i;
            for (i = [], t = 0, n = (r = this.boxes).length; t < n; t++) e = r[t], i.push(e.style.visibility = "visible");
            return i;
        }, e.prototype.resetAnimation = function(e) {
            var t;
            return 0 <= e.type.toLowerCase().indexOf("animationend") ? (t = e.target || e.srcElement).className = t.className.replace(this.config.animateClass, "").trim() : void 0;
        }, e.prototype.customStyle = function(e, t, n, r, i) {
            return t && this.cacheAnimationName(e), e.style.visibility = t ? "hidden" : "visible", 
            n && this.vendorSet(e.style, {
                animationDuration: n
            }), r && this.vendorSet(e.style, {
                animationDelay: r
            }), i && this.vendorSet(e.style, {
                animationIterationCount: i
            }), this.vendorSet(e.style, {
                animationName: t ? "none" : this.cachedAnimationName(e)
            }), e;
        }, e.prototype.vendors = [ "moz", "webkit" ], e.prototype.vendorSet = function(i, e) {
            var o, t, a, s;
            for (o in t = [], e) a = e[o], i["" + o] = a, t.push(function() {
                var e, t, n, r;
                for (r = [], e = 0, t = (n = this.vendors).length; e < t; e++) s = n[e], r.push(i["" + s + o.charAt(0).toUpperCase() + o.substr(1)] = a);
                return r;
            }.call(this));
            return t;
        }, e.prototype.vendorCSS = function(e, t) {
            var n, r, i, o, a, s;
            for (o = (a = l(e)).getPropertyCSSValue(t), n = 0, r = (i = this.vendors).length; n < r; n++) s = i[n], 
            o = o || a.getPropertyCSSValue("-" + s + "-" + t);
            return o;
        }, e.prototype.animationName = function(t) {
            var n;
            try {
                n = this.vendorCSS(t, "animation-name").cssText;
            } catch (e) {
                n = l(t).getPropertyValue("animation-name");
            }
            return "none" === n ? "" : n;
        }, e.prototype.cacheAnimationName = function(e) {
            return this.animationNameCache.set(e, this.animationName(e));
        }, e.prototype.cachedAnimationName = function(e) {
            return this.animationNameCache.get(e);
        }, e.prototype.scrollHandler = function() {
            return this.scrolled = !0;
        }, e.prototype.scrollCallback = function() {
            var i;
            return !this.scrolled || (this.scrolled = !1, this.boxes = function() {
                var e, t, n, r;
                for (r = [], e = 0, t = (n = this.boxes).length; e < t; e++) (i = n[e]) && (this.isVisible(i) ? this.show(i) : r.push(i));
                return r;
            }.call(this), this.boxes.length || this.config.live) ? void 0 : this.stop();
        }, e.prototype.offsetTop = function(e) {
            for (var t; void 0 === e.offsetTop; ) e = e.parentNode;
            for (t = e.offsetTop; e = e.offsetParent; ) t += e.offsetTop;
            return t;
        }, e.prototype.isVisible = function(e) {
            var t, n, r, i, o;
            return n = e.getAttribute("data-wow-offset") || this.config.offset, i = (o = this.config.scrollContainer && this.config.scrollContainer.scrollTop || window.pageYOffset) + Math.min(this.element.clientHeight, this.util().innerHeight()) - n, 
            t = (r = this.offsetTop(e)) + e.clientHeight, r <= i && o <= t;
        }, e.prototype.util = function() {
            return null != this._util ? this._util : this._util = new t();
        }, e.prototype.disabled = function() {
            return !this.config.mobile && this.util().isMobile(navigator.userAgent);
        }, e;
    }();
}.call(this), function(e, t) {
    "function" == typeof define && define.amd ? define([ "jquery" ], function(e) {
        return t(e);
    }) : "object" == typeof exports ? module.exports = t(require("jquery")) : t(jQuery);
}(0, function(e) {
    var p;
    !function(s, e) {
        "use strict";
        s.fn.validateForm = function(e, t) {
            return s.formUtils.warn("Use of deprecated function $.validateForm, use $.isValid instead"), 
            this.isValid(e, t, !0);
        }, s(window).on("validatorsLoaded formValidationSetup", function(e, t, n) {
            var a, r, i;
            t || (t = s("form")), (i = n) && "custom" === i.errorMessagePosition && "function" == typeof i.errorMessageCustom && (s.formUtils.warn("Use of deprecated function errorMessageCustom, use config.submitErrorMessageCallback instead"), 
            i.submitErrorMessageCallback = function(e, t) {
                i.errorMessageCustom(e, i.language.errorTitle, t, i);
            }), function(e) {
                if (e.errorMessagePosition && "object" == typeof e.errorMessagePosition) {
                    s.formUtils.warn("Deprecated use of config parameter errorMessagePosition, use config.submitErrorMessageCallback instead");
                    var t = e.errorMessagePosition;
                    e.errorMessagePosition = "top", e.submitErrorMessageCallback = function() {
                        return t;
                    };
                }
            }(n), (r = (a = t).find("[data-validation-if-checked]")).length && s.formUtils.warn('Detected use of attribute "data-validation-if-checked" which is deprecated. Use "data-validation-depends-on" provided by module "logic"'), 
            r.on("beforeValidation", function() {
                var e = s(this), t = e.valAttr("if-checked"), n = s('input[name="' + t + '"]', a), r = n.is(":checked"), i = (s.formUtils.getValue(n) || "").toString(), o = e.valAttr("if-checked-value");
                (!r || o && o !== i) && e.valAttr("skipped", !0);
            });
        });
    }(e), function(u) {
        "use strict";
        var i = {
            resolveErrorMessage: function(e, t, n, r, i) {
                var o = r.validationErrorMsgAttribute + "-" + n.replace("validate_", ""), a = e.attr(o);
                return a || ((a = e.attr(r.validationErrorMsgAttribute)) || ((a = "function" != typeof t.errorMessageKey ? i[t.errorMessageKey] : i[t.errorMessageKey(r)]) || (a = t.errorMessage))), 
                a;
            },
            getParentContainer: function(e) {
                if (e.valAttr("error-msg-container")) return u(e.valAttr("error-msg-container"));
                var t = e.parent();
                if (!t.hasClass("form-group") && !t.closest("form").hasClass("form-horizontal")) {
                    var n = t.closest(".form-group");
                    if (n.length) return n.eq(0);
                }
                return t;
            },
            applyInputErrorStyling: function(e, t) {
                e.addClass(t.errorElementClass).removeClass("valid"), this.getParentContainer(e).addClass(t.inputParentClassOnError).removeClass(t.inputParentClassOnSuccess), 
                "" !== t.borderColorOnError && e.css("border-color", t.borderColorOnError);
            },
            applyInputSuccessStyling: function(e, t) {
                e.addClass("valid"), this.getParentContainer(e).addClass(t.inputParentClassOnSuccess);
            },
            removeInputStylingAndMessage: function(e, t) {
                e.removeClass("valid").removeClass(t.errorElementClass).css("border-color", "");
                var n = i.getParentContainer(e);
                if (n.removeClass(t.inputParentClassOnError).removeClass(t.inputParentClassOnSuccess), 
                "function" == typeof t.inlineErrorMessageCallback) {
                    var r = t.inlineErrorMessageCallback(e, !1, t);
                    r && r.html("");
                } else n.find("." + t.errorMessageClass).remove();
            },
            removeAllMessagesAndStyling: function(e, t) {
                if ("function" == typeof t.submitErrorMessageCallback) {
                    var n = t.submitErrorMessageCallback(e, t);
                    n && n.html("");
                } else e.find("." + t.errorMessageClass + ".alert").remove();
                e.find("." + t.errorElementClass + ",.valid").each(function() {
                    i.removeInputStylingAndMessage(u(this), t);
                });
            },
            setInlineMessage: function(t, n, r) {
                this.applyInputErrorStyling(t, r);
                var i, e = document.getElementById(t.attr("name") + "_err_msg"), o = !1, a = function(e) {
                    u.formUtils.$win.trigger("validationErrorDisplay", [ t, e ]), e.html(n);
                }, s = function() {
                    var e = !1;
                    o.find("." + r.errorMessageClass).each(function() {
                        return this.inputReferer === t[0] ? (e = u(this), !1) : void 0;
                    }), e ? n ? a(e) : e.remove() : "" !== n && (i = u('<div class="' + r.errorMessageClass + ' alert"></div>'), 
                    a(i), i[0].inputReferer = t[0], o.prepend(i));
                };
                if (e) u.formUtils.warn("Using deprecated element reference " + e.id), o = u(e), 
                s(); else if ("function" == typeof r.inlineErrorMessageCallback) {
                    if (!(o = r.inlineErrorMessageCallback(t, n, r))) return;
                    s();
                } else {
                    var l = this.getParentContainer(t);
                    0 === (i = l.find("." + r.errorMessageClass + ".help-block")).length && (i = u("<span></span>").addClass("help-block").addClass(r.errorMessageClass)).appendTo(l), 
                    a(i);
                }
            },
            setMessageInTopOfForm: function(e, t, n, r) {
                var i = '<div class="{errorMessageClass} alert alert-danger"><strong>{errorTitle}</strong><ul>{fields}</ul></div>', o = !1;
                if ("function" != typeof n.submitErrorMessageCallback || (o = n.submitErrorMessageCallback(e, t, n))) {
                    var a = {
                        errorTitle: r.errorTitle,
                        fields: "",
                        errorMessageClass: n.errorMessageClass
                    };
                    u.each(t, function(e, t) {
                        a.fields += "<li>" + t + "</li>";
                    }), u.each(a, function(e, t) {
                        i = i.replace("{" + e + "}", t);
                    }), o ? o.html(i) : e.children().eq(0).before(u(i));
                }
            }
        };
        u.formUtils = u.extend(u.formUtils || {}, {
            dialogs: i
        });
    }(e), function(f, u, e) {
        "use strict";
        var i = 0;
        f.fn.validateOnBlur = function(n, r) {
            var i = this, e = this.find("*[data-validation]");
            return e.each(function() {
                var e = f(this);
                if (e.is("[type=radio]")) {
                    var t = i.find('[type=radio][name="' + e.attr("name") + '"]');
                    t.bind("blur.validation", function() {
                        e.validateInputOnBlur(n, r, !0, "blur");
                    }), r.validateCheckboxRadioOnClick && t.bind("click.validation", function() {
                        e.validateInputOnBlur(n, r, !0, "click");
                    });
                }
            }), e.bind("blur.validation", function() {
                f(this).validateInputOnBlur(n, r, !0, "blur");
            }), r.validateCheckboxRadioOnClick && this.find("input[type=checkbox][data-validation],input[type=radio][data-validation]").bind("click.validation", function() {
                f(this).validateInputOnBlur(n, r, !0, "click");
            }), this;
        }, f.fn.validateOnEvent = function(n, r) {
            return ("FORM" === this[0].nodeName ? this.find("*[data-validation-event]") : this).each(function() {
                var e = f(this), t = e.valAttr("event");
                t && e.unbind(t + ".validation").bind(t + ".validation", function(e) {
                    9 !== (e || {}).keyCode && f(this).validateInputOnBlur(n, r, !0, t);
                });
            }), this;
        }, f.fn.showHelpOnFocus = function(e) {
            return e || (e = "data-validation-help"), this.find(".has-help-txt").valAttr("has-keyup-event", !1).removeClass("has-help-txt"), 
            this.find("textarea,input").each(function() {
                var t = f(this), n = "jquery_form_help_" + ++i, r = t.attr(e);
                r && t.addClass("has-help-txt").unbind("focus.help").bind("focus.help", function() {
                    var e = t.parent().find("." + n);
                    0 === e.length && (e = f("<span />").addClass(n).addClass("help").addClass("help-block").text(r).hide(), 
                    t.after(e)), e.fadeIn();
                }).unbind("blur.help").bind("blur.help", function() {
                    f(this).parent().find("." + n).fadeOut("slow");
                });
            }), this;
        }, f.fn.validate = function(n, r, e) {
            var i = f.extend({}, f.formUtils.LANG, e || {});
            this.each(function() {
                var e = f(this), t = e.closest("form").get(0).validationConfig || {};
                e.one("validation", function(e, t) {
                    "function" == typeof n && n(t, this, e);
                }), e.validateInputOnBlur(i, f.extend({}, t, r || {}), !0);
            });
        }, f.fn.willPostponeValidation = function() {
            return (this.valAttr("suggestion-nr") || this.valAttr("postpone") || this.hasClass("hasDatepicker")) && !u.postponedValidation;
        }, f.fn.validateInputOnBlur = function(t, n, e, r) {
            if (f.formUtils.eventType = r, this.willPostponeValidation()) {
                var i = this, o = this.valAttr("postpone") || 200;
                return u.postponedValidation = function() {
                    i.validateInputOnBlur(t, n, e, r), u.postponedValidation = !1;
                }, setTimeout(function() {
                    u.postponedValidation && u.postponedValidation();
                }, o), this;
            }
            t = f.extend({}, f.formUtils.LANG, t || {}), f.formUtils.dialogs.removeInputStylingAndMessage(this, n);
            var a = this, s = a.closest("form"), l = f.formUtils.validateInput(a, t, n, s, r);
            return e && a.unbind("keyup.validation"), l.shouldChangeDisplay && (l.isValid ? f.formUtils.dialogs.applyInputSuccessStyling(a, n) : f.formUtils.dialogs.setInlineMessage(a, l.errorMsg, n)), 
            !l.isValid && e && a.bind("keyup.validation", function(e) {
                9 !== e.keyCode && f(this).validateInputOnBlur(t, n, !1, "keyup");
            }), this;
        }, f.fn.valAttr = function(e, t) {
            return void 0 === t ? this.attr("data-validation-" + e) : !1 === t || null === t ? this.removeAttr("data-validation-" + e) : (e = 0 < e.length ? "-" + e : "", 
            this.attr("data-validation" + e, t));
        }, f.fn.isValid = function(s, l, n) {
            if (f.formUtils.isLoadingModules) {
                var e = this;
                return setTimeout(function() {
                    e.isValid(s, l, n);
                }, 200), null;
            }
            l = f.extend({}, f.formUtils.defaultConfig(), l || {}), s = f.extend({}, f.formUtils.LANG, s || {}), 
            n = !1 !== n, f.formUtils.errorDisplayPreventedWhenHalted && (delete f.formUtils.errorDisplayPreventedWhenHalted, 
            n = !1), f.formUtils.isValidatingEntireForm = !0, f.formUtils.haltValidation = !1;
            var u = function(e, t) {
                f.inArray(e, r) < 0 && r.push(e), i.push(t), t.attr("current-error", e), n && f.formUtils.dialogs.applyInputErrorStyling(t, l);
            }, c = [], r = [], i = [], d = this;
            if (n && f.formUtils.dialogs.removeAllMessagesAndStyling(d, l), d.find("input,textarea,select").filter(':not([type="submit"],[type="button"])').each(function() {
                var e, t, n = f(this), r = n.attr("type"), i = "radio" === r || "checkbox" === r, o = n.attr("name");
                if (e = o, !("submit" === (t = r) || "button" === t || "reset" === t || -1 < f.inArray(e, l.ignore || [])) && (!i || f.inArray(o, c) < 0)) {
                    i && c.push(o);
                    var a = f.formUtils.validateInput(n, s, l, d, "submit");
                    a.isValid ? a.isValid && a.shouldChangeDisplay && (n.valAttr("current-error", !1), 
                    f.formUtils.dialogs.applyInputSuccessStyling(n, l)) : u(a.errorMsg, n);
                }
            }), "function" == typeof l.onValidate) {
                var t = l.onValidate(d);
                f.isArray(t) ? f.each(t, function(e, t) {
                    u(t.message, t.element);
                }) : t && t.element && t.message && u(t.message, t.element);
            }
            return f.formUtils.isValidatingEntireForm = !1, !f.formUtils.haltValidation && 0 < i.length ? (n && ("top" === l.errorMessagePosition ? f.formUtils.dialogs.setMessageInTopOfForm(d, r, l, s) : f.each(i, function(e, t) {
                f.formUtils.dialogs.setInlineMessage(t, t.attr("current-error"), l);
            }), l.scrollToTopOnError && f.formUtils.$win.scrollTop(d.offset().top - 20)), !1) : (!n && f.formUtils.haltValidation && (f.formUtils.errorDisplayPreventedWhenHalted = !0), 
            !f.formUtils.haltValidation);
        }, f.fn.restrictLength = function(e) {
            return new f.formUtils.lengthRestriction(this, e), this;
        }, f.fn.addSuggestions = function(t) {
            var n = !1;
            return this.find("input").each(function() {
                var e = f(this);
                0 < (n = f.split(e.attr("data-suggestions"))).length && !e.hasClass("has-suggestions") && (f.formUtils.suggest(e, n, t), 
                e.addClass("has-suggestions"));
            }), this;
        };
    }(e, window), function(u) {
        "use strict";
        u.formUtils = u.extend(u.formUtils || {}, {
            isLoadingModules: !1,
            loadedModules: {},
            loadModules: function(t, e, r) {
                if (u.formUtils.isLoadingModules) setTimeout(function() {
                    u.formUtils.loadModules(t, e, r);
                }, 10); else {
                    var l = !1, n = function(e, i) {
                        var t = u.split(e), n = t.length, o = function() {
                            0 === --n && (u.formUtils.isLoadingModules = !1, r && l && "function" == typeof r && r());
                        };
                        0 < n && (u.formUtils.isLoadingModules = !0);
                        var a = "?_=" + new Date().getTime(), s = document.getElementsByTagName("head")[0] || document.getElementsByTagName("body")[0];
                        u.each(t, function(e, t) {
                            if (0 === (t = u.trim(t)).length) o(); else {
                                var n = i + t + (".js" === t.slice(-3) ? "" : ".js"), r = document.createElement("SCRIPT");
                                n in u.formUtils.loadedModules ? o() : (u.formUtils.loadedModules[n] = 1, l = !0, 
                                r.type = "text/javascript", r.onload = o, r.src = n + (".dev.js" === n.slice(-7) ? a : ""), 
                                r.onerror = function() {
                                    u.formUtils.warn("Unable to load form validation module " + n);
                                }, r.onreadystatechange = function() {
                                    "complete" !== this.readyState && "loaded" !== this.readyState || (o(), this.onload = null, 
                                    this.onreadystatechange = null);
                                }, s.appendChild(r));
                            }
                        });
                    };
                    if (e) n(t, e); else {
                        var i = function() {
                            var e = !1;
                            return u('script[src*="form-validator"]').each(function() {
                                return "/" === (e = this.src.substr(0, this.src.lastIndexOf("/")) + "/") && (e = ""), 
                                !1;
                            }), !1 !== e && (n(t, e), !0);
                        };
                        i() || u(i);
                    }
                }
            }
        });
    }(e), function(o) {
        "use strict";
        o.split = function(e, n) {
            if ("function" != typeof n) {
                if (!e) return [];
                var r = [];
                return o.each(e.split(n || /[,|\-\s]\s*/g), function(e, t) {
                    (t = o.trim(t)).length && r.push(t);
                }), r;
            }
            e && o.each(e.split(/[,|\-\s]\s*/g), function(e, t) {
                return (t = o.trim(t)).length ? n(t, e) : void 0;
            });
        }, o.validate = function(i) {
            var e = o.extend(o.formUtils.defaultConfig(), {
                form: "form",
                validateOnEvent: !1,
                validateOnBlur: !0,
                validateCheckboxRadioOnClick: !0,
                showHelpOnFocus: !0,
                addSuggestions: !0,
                modules: "",
                onModulesLoaded: null,
                language: !1,
                onSuccess: !1,
                onError: !1,
                onElementValidate: !1
            });
            if ((i = o.extend(e, i || {})).lang && "en" !== i.lang) {
                var t = "lang/" + i.lang + ".js";
                i.modules += i.modules.length ? "," + t : t;
            }
            o(i.form).each(function(e, t) {
                t.validationConfig = i;
                var n = o(t);
                n.trigger("formValidationSetup", [ n, i ]), n.find(".has-help-txt").unbind("focus.validation").unbind("blur.validation"), 
                n.removeClass("has-validation-callback").unbind("submit.validation").unbind("reset.validation").find("input[data-validation],textarea[data-validation]").unbind("blur.validation"), 
                n.bind("submit.validation", function(e) {
                    var t = o(this), n = function() {
                        return e.stopImmediatePropagation(), !1;
                    };
                    if (o.formUtils.haltValidation) return n();
                    if (o.formUtils.isLoadingModules) return setTimeout(function() {
                        t.trigger("submit.validation");
                    }, 200), n();
                    var r = t.isValid(i.language, i);
                    return o.formUtils.haltValidation ? n() : r && "function" == typeof i.onSuccess ? !1 === i.onSuccess(t) ? n() : void 0 : r || "function" != typeof i.onError ? !!r || n() : (i.onError(t), 
                    n());
                }).bind("reset.validation", function() {
                    o.formUtils.dialogs.removeAllMessagesAndStyling(n, i);
                }).addClass("has-validation-callback"), i.showHelpOnFocus && n.showHelpOnFocus(), 
                i.addSuggestions && n.addSuggestions(), i.validateOnBlur && (n.validateOnBlur(i.language, i), 
                n.bind("html5ValidationAttrsFound", function() {
                    n.validateOnBlur(i.language, i);
                })), i.validateOnEvent && n.validateOnEvent(i.language, i);
            }), "" !== i.modules && o.formUtils.loadModules(i.modules, !1, function() {
                "function" == typeof i.onModulesLoaded && i.onModulesLoaded();
                var e = "string" == typeof i.form ? o(i.form) : i.form;
                o.formUtils.$win.trigger("validatorsLoaded", [ e, i ]);
            });
        };
    }(e), function(p, t) {
        "use strict";
        var r = p(t);
        p.formUtils = p.extend(p.formUtils || {}, {
            $win: r,
            defaultConfig: function() {
                return {
                    ignore: [],
                    errorElementClass: "error",
                    borderColorOnError: "#b94a48",
                    errorMessageClass: "form-error",
                    validationRuleAttribute: "data-validation",
                    validationErrorMsgAttribute: "data-validation-error-msg",
                    errorMessagePosition: "inline",
                    errorMessageTemplate: {
                        container: '<div class="{errorMessageClass} alert alert-danger">{messages}</div>',
                        messages: "<strong>{errorTitle}</strong><ul>{fields}</ul>",
                        field: "<li>{msg}</li>"
                    },
                    scrollToTopOnError: !0,
                    dateFormat: "yyyy-mm-dd",
                    addValidClassOnAll: !1,
                    decimalSeparator: ".",
                    inputParentClassOnError: "has-error",
                    inputParentClassOnSuccess: "has-success",
                    validateHiddenInputs: !1,
                    inlineErrorMessageCallback: !1,
                    submitErrorMessageCallback: !1
                };
            },
            validators: {},
            _events: {
                load: [],
                valid: [],
                invalid: []
            },
            haltValidation: !1,
            isValidatingEntireForm: !1,
            addValidator: function(e) {
                var t = 0 === e.name.indexOf("validate_") ? e.name : "validate_" + e.name;
                void 0 === e.validateOnKeyUp && (e.validateOnKeyUp = !0), this.validators[t] = e;
            },
            warn: function(e) {
                "console" in t ? "function" == typeof t.console.warn ? t.console.warn(e) : "function" == typeof t.console.log && t.console.log(e) : alert(e);
            },
            getValue: function(e, t) {
                var n = t ? t.find(e) : e;
                if (0 < n.length) {
                    var r = n.eq(0).attr("type");
                    return "radio" === r || "checkbox" === r ? n.filter(":checked").val() : n.val();
                }
                return !1;
            },
            validateInput: function(n, r, i, o, a) {
                i = i || p.formUtils.defaultConfig(), r = r || p.formUtils.LANG;
                var s = this.getValue(n);
                n.valAttr("skipped", !1).one("beforeValidation", function() {
                    (n.attr("disabled") || !n.is(":visible") && !i.validateHiddenInputs) && n.valAttr("skipped", 1);
                }).trigger("beforeValidation", [ s, i, r ]);
                var e = "true" === n.valAttr("optional"), t = !s && e, l = n.attr(i.validationRuleAttribute), u = !0, c = "", d = {
                    isValid: !0,
                    shouldChangeDisplay: !0,
                    errorMsg: ""
                };
                if (!l || t || n.valAttr("skipped")) return d.shouldChangeDisplay = i.addValidClassOnAll, 
                d;
                var f = n.valAttr("ignore");
                return f && p.each(f.split(""), function(e, t) {
                    s = s.replace(new RegExp("\\" + t), "");
                }), p.split(l, function(e) {
                    0 !== e.indexOf("validate_") && (e = "validate_" + e);
                    var t = p.formUtils.validators[e];
                    if (!t) throw new Error('Using undefined validator "' + e + '". Maybe you have forgotten to load the module that "' + e + '" belongs to?');
                    return "validate_checkbox_group" === e && (n = o.find('[name="' + n.attr("name") + '"]:eq(0)')), 
                    ("keyup" !== a || t.validateOnKeyUp) && (u = t.validatorFunction(s, n, i, r, o)), 
                    u ? void 0 : (c = p.formUtils.dialogs.resolveErrorMessage(n, t, e, i, r), !1);
                }, " "), !1 === u ? (n.trigger("validation", !1), d.errorMsg = c, d.isValid = !1, 
                d.shouldChangeDisplay = !0) : null === u ? d.shouldChangeDisplay = !1 : (n.trigger("validation", !0), 
                d.shouldChangeDisplay = !0), "function" == typeof i.onElementValidate && null !== c && i.onElementValidate(d.isValid, n, o, c), 
                n.trigger("afterValidation", [ d, a ]), d;
            },
            parseDate: function(e, t, n) {
                var r, i, o, a, s = t.replace(/[a-zA-Z]/gi, "").substring(0, 1), l = "^", u = t.split(s || null);
                if (p.each(u, function(e, t) {
                    l += (0 < e ? "\\" + s : "") + "(\\d{" + t.length + "})";
                }), l += "$", n) {
                    var c = [];
                    p.each(e.split(s), function(e, t) {
                        1 === t.length && (t = "0" + t), c.push(t);
                    }), e = c.join(s);
                }
                if (null === (r = e.match(new RegExp(l)))) return !1;
                var d = function(e, t, n) {
                    for (var r = 0; r < t.length; r++) if (t[r].substring(0, 1) === e) return p.formUtils.parseDateInt(n[r + 1]);
                    return -1;
                };
                return o = d("m", u, r), i = d("d", u, r), a = d("y", u, r), !(2 === o && 28 < i && (a % 4 != 0 || a % 100 == 0 && a % 400 != 0) || 2 === o && 29 < i && (a % 4 == 0 || a % 100 != 0 && a % 400 == 0) || 12 < o || 0 === o) && (!(this.isShortMonth(o) && 30 < i || !this.isShortMonth(o) && 31 < i || 0 === i) && [ a, o, i ]);
            },
            parseDateInt: function(e) {
                return 0 === e.indexOf("0") && (e = e.replace("0", "")), parseInt(e, 10);
            },
            isShortMonth: function(e) {
                return e % 2 == 0 && e < 7 || e % 2 != 0 && 7 < e;
            },
            lengthRestriction: function(n, r) {
                var i = parseInt(r.text(), 10), o = 0, e = function() {
                    var e = n.val().length;
                    if (i < e) {
                        var t = n.scrollTop();
                        n.val(n.val().substring(0, i)), n.scrollTop(t);
                    }
                    (o = i - e) < 0 && (o = 0), r.text(o);
                };
                p(n).bind("keydown keyup keypress focus blur", e).bind("cut paste", function() {
                    setTimeout(e, 100);
                }), p(document).bind("ready", e);
            },
            numericRangeCheck: function(e, t) {
                var n = p.split(t), r = parseInt(t.substr(3), 10);
                return 1 === n.length && -1 === t.indexOf("min") && -1 === t.indexOf("max") && (n = [ t, t ]), 
                2 === n.length && (e < parseInt(n[0], 10) || e > parseInt(n[1], 10)) ? [ "out", n[0], n[1] ] : 0 === t.indexOf("min") && e < r ? [ "min", r ] : 0 === t.indexOf("max") && r < e ? [ "max", r ] : [ "ok" ];
            },
            _numSuggestionElements: 0,
            _selectedSuggestion: null,
            _previousTypedVal: null,
            suggest: function(t, e, n) {
                var c = {
                    css: {
                        maxHeight: "150px",
                        background: "#FFF",
                        lineHeight: "150%",
                        textDecoration: "underline",
                        overflowX: "hidden",
                        overflowY: "auto",
                        border: "#CCC solid 1px",
                        borderTop: "none",
                        cursor: "pointer"
                    },
                    activeSuggestionCSS: {
                        background: "#E9E9E9"
                    }
                }, l = function(e, t) {
                    var n = t.offset();
                    e.css({
                        width: t.outerWidth(),
                        left: n.left + "px",
                        top: n.top + t.outerHeight() + "px"
                    });
                };
                n && p.extend(c, n), c.css.position = "absolute", c.css["z-index"] = 9999, t.attr("autocomplete", "off"), 
                0 === this._numSuggestionElements && r.bind("resize", function() {
                    p(".jquery-form-suggestions").each(function() {
                        var e = p(this), t = e.attr("data-suggest-container");
                        l(e, p(".suggestions-" + t).eq(0));
                    });
                }), this._numSuggestionElements++;
                var d = function(e) {
                    var t = e.valAttr("suggestion-nr");
                    p.formUtils._selectedSuggestion = null, p.formUtils._previousTypedVal = null, p(".jquery-form-suggestion-" + t).fadeOut("fast");
                };
                return t.data("suggestions", e).valAttr("suggestion-nr", this._numSuggestionElements).unbind("focus.suggest").bind("focus.suggest", function() {
                    p(this).trigger("keyup"), p.formUtils._selectedSuggestion = null;
                }).unbind("keyup.suggest").bind("keyup.suggest", function() {
                    var n = p(this), r = [], i = p.trim(n.val()).toLocaleLowerCase();
                    if (i !== p.formUtils._previousTypedVal) {
                        p.formUtils._previousTypedVal = i;
                        var o = !1, e = n.valAttr("suggestion-nr"), a = p(".jquery-form-suggestion-" + e);
                        if (a.scrollTop(0), "" !== i) {
                            var s = 2 < i.length;
                            p.each(n.data("suggestions"), function(e, t) {
                                var n = t.toLocaleLowerCase();
                                return n === i ? (r.push("<strong>" + t + "</strong>"), !(o = !0)) : void ((0 === n.indexOf(i) || s && -1 < n.indexOf(i)) && r.push(t.replace(new RegExp(i, "gi"), "<strong>$&</strong>")));
                            });
                        }
                        o || 0 === r.length && 0 < a.length ? a.hide() : 0 < r.length && 0 === a.length ? (a = p("<div></div>").css(c.css).appendTo("body"), 
                        t.addClass("suggestions-" + e), a.attr("data-suggest-container", e).addClass("jquery-form-suggestions").addClass("jquery-form-suggestion-" + e)) : 0 < r.length && !a.is(":visible") && a.show(), 
                        0 < r.length && i.length !== r[0].length && (l(a, n), a.html(""), p.each(r, function(e, t) {
                            p("<div></div>").append(t).css({
                                overflow: "hidden",
                                textOverflow: "ellipsis",
                                whiteSpace: "nowrap",
                                padding: "5px"
                            }).addClass("form-suggest-element").appendTo(a).click(function() {
                                n.focus(), n.val(p(this).text()), n.trigger("change"), d(n);
                            });
                        }));
                    }
                }).unbind("keydown.validation").bind("keydown.validation", function(e) {
                    var t, n, r = e.keyCode ? e.keyCode : e.which, i = p(this);
                    if (13 === r && null !== p.formUtils._selectedSuggestion) {
                        if (t = i.valAttr("suggestion-nr"), 0 < (n = p(".jquery-form-suggestion-" + t)).length) {
                            var o = n.find("div").eq(p.formUtils._selectedSuggestion).text();
                            i.val(o), i.trigger("change"), d(i), e.preventDefault();
                        }
                    } else {
                        t = i.valAttr("suggestion-nr");
                        var a = (n = p(".jquery-form-suggestion-" + t)).children();
                        if (0 < a.length && -1 < p.inArray(r, [ 38, 40 ])) {
                            38 === r ? (null === p.formUtils._selectedSuggestion ? p.formUtils._selectedSuggestion = a.length - 1 : p.formUtils._selectedSuggestion--, 
                            p.formUtils._selectedSuggestion < 0 && (p.formUtils._selectedSuggestion = a.length - 1)) : 40 === r && (null === p.formUtils._selectedSuggestion ? p.formUtils._selectedSuggestion = 0 : p.formUtils._selectedSuggestion++, 
                            p.formUtils._selectedSuggestion > a.length - 1 && (p.formUtils._selectedSuggestion = 0));
                            var s = n.innerHeight(), l = n.scrollTop(), u = n.children().eq(0).outerHeight() * p.formUtils._selectedSuggestion;
                            return (u < l || l + s < u) && n.scrollTop(u), a.removeClass("active-suggestion").css("background", "none").eq(p.formUtils._selectedSuggestion).addClass("active-suggestion").css(c.activeSuggestionCSS), 
                            e.preventDefault(), !1;
                        }
                    }
                }).unbind("blur.suggest").bind("blur.suggest", function() {
                    d(p(this));
                }), t;
            },
            LANG: {
                errorTitle: "Form submission failed!",
                requiredField: "This is a required field",
                requiredFields: "You have not answered all required fields",
                badTime: "You have not given a correct time",
                badEmail: "You have not given a correct e-mail address",
                badTelephone: "You have not given a correct phone number",
                badSecurityAnswer: "You have not given a correct answer to the security question",
                badDate: "You have not given a correct date",
                lengthBadStart: "The input value must be between ",
                lengthBadEnd: " characters",
                lengthTooLongStart: "The input value is longer than ",
                lengthTooShortStart: "The input value is shorter than ",
                notConfirmed: "Input values could not be confirmed",
                badDomain: "Incorrect domain value",
                badUrl: "The input value is not a correct URL",
                badCustomVal: "The input value is incorrect",
                andSpaces: " and spaces ",
                badInt: "The input value was not a correct number",
                badSecurityNumber: "Your social security number was incorrect",
                badUKVatAnswer: "Incorrect UK VAT Number",
                badUKNin: "Incorrect UK NIN",
                badUKUtr: "Incorrect UK UTR Number",
                badStrength: "The password isn't strong enough",
                badNumberOfSelectedOptionsStart: "You have to choose at least ",
                badNumberOfSelectedOptionsEnd: " answers",
                badAlphaNumeric: "The input value can only contain alphanumeric characters ",
                badAlphaNumericExtra: " and ",
                wrongFileSize: "The file you are trying to upload is too large (max %s)",
                wrongFileType: "Only files of type %s is allowed",
                groupCheckedRangeStart: "Please choose between ",
                groupCheckedTooFewStart: "Please choose at least ",
                groupCheckedTooManyStart: "Please choose a maximum of ",
                groupCheckedEnd: " item(s)",
                badCreditCard: "The credit card number is not correct",
                badCVV: "The CVV number was not correct",
                wrongFileDim: "Incorrect image dimensions,",
                imageTooTall: "the image can not be taller than",
                imageTooWide: "the image can not be wider than",
                imageTooSmall: "the image was too small",
                min: "min",
                max: "max",
                imageRatioNotAccepted: "Image ratio is not be accepted",
                badBrazilTelephoneAnswer: "The phone number entered is invalid",
                badBrazilCEPAnswer: "The CEP entered is invalid",
                badBrazilCPFAnswer: "The CPF entered is invalid",
                badPlPesel: "The PESEL entered is invalid",
                badPlNip: "The NIP entered is invalid",
                badPlRegon: "The REGON entered is invalid",
                badreCaptcha: "Please confirm that you are not a bot"
            }
        });
    }(e, window), (p = e).formUtils.addValidator({
        name: "email",
        validatorFunction: function(e) {
            var t = e.toLowerCase().split("@"), n = t[0], r = t[1];
            if (n && r) {
                if (0 === n.indexOf('"')) {
                    var i = n.length;
                    if ((n = n.replace(/\"/g, "")).length !== i - 2) return !1;
                }
                return p.formUtils.validators.validate_domain.validatorFunction(t[1]) && 0 !== n.indexOf(".") && "." !== n.substring(n.length - 1, n.length) && -1 === n.indexOf("..") && !/[^\w\+\.\-\#\-\_\~\!\$\&\'\(\)\*\+\,\;\=\:]/.test(n);
            }
            return !1;
        },
        errorMessage: "",
        errorMessageKey: "badEmail"
    }), p.formUtils.addValidator({
        name: "domain",
        validatorFunction: function(e) {
            return 0 < e.length && e.length <= 253 && !/[^a-zA-Z0-9]/.test(e.slice(-2)) && !/[^a-zA-Z0-9]/.test(e.substr(0, 1)) && !/[^a-zA-Z0-9\.\-]/.test(e) && 1 === e.split("..").length && 1 < e.split(".").length;
        },
        errorMessage: "",
        errorMessageKey: "badDomain"
    }), p.formUtils.addValidator({
        name: "required",
        validatorFunction: function(e, t, n, r, i) {
            switch (t.attr("type")) {
              case "checkbox":
                return t.is(":checked");

              case "radio":
                return 0 < i.find('input[name="' + t.attr("name") + '"]').filter(":checked").length;

              default:
                return "" !== p.trim(e);
            }
        },
        errorMessage: "",
        errorMessageKey: function(e) {
            return "top" === e.errorMessagePosition || "function" == typeof e.errorMessagePosition ? "requiredFields" : "requiredField";
        }
    }), p.formUtils.addValidator({
        name: "length",
        validatorFunction: function(e, t, n, r) {
            var i = t.valAttr("length"), o = t.attr("type");
            if (void 0 === i) return alert('Please add attribute "data-validation-length" to ' + t[0].nodeName + " named " + t.attr("name")), 
            !0;
            var a, s = "file" === o && void 0 !== t.get(0).files ? t.get(0).files.length : e.length, l = p.formUtils.numericRangeCheck(s, i);
            switch (l[0]) {
              case "out":
                this.errorMessage = r.lengthBadStart + i + r.lengthBadEnd, a = !1;
                break;

              case "min":
                this.errorMessage = r.lengthTooShortStart + l[1] + r.lengthBadEnd, a = !1;
                break;

              case "max":
                this.errorMessage = r.lengthTooLongStart + l[1] + r.lengthBadEnd, a = !1;
                break;

              default:
                a = !0;
            }
            return a;
        },
        errorMessage: "",
        errorMessageKey: ""
    }), p.formUtils.addValidator({
        name: "url",
        validatorFunction: function(e) {
            if (/^(https?|ftp):\/\/((((\w|-|\.|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])(\w|-|\.|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])(\w|-|\.|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/(((\w|-|\.|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/((\w|-|\.|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|\[|\]|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#(((\w|-|\.|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i.test(e)) {
                var t = e.split("://")[1], n = t.indexOf("/");
                return -1 < n && (t = t.substr(0, n)), p.formUtils.validators.validate_domain.validatorFunction(t);
            }
            return !1;
        },
        errorMessage: "",
        errorMessageKey: "badUrl"
    }), p.formUtils.addValidator({
        name: "number",
        validatorFunction: function(e, t, n) {
            if ("" !== e) {
                var r, i, o = t.valAttr("allowing") || "", a = t.valAttr("decimal-separator") || n.decimalSeparator, s = !1, l = t.valAttr("step") || "", u = !1;
                if ((t.attr("data-sanitize") || "").match(/(^|[\s])numberFormat([\s]|$)/i)) {
                    if (!window.numeral) throw new ReferenceError("The data-sanitize value numberFormat cannot be used without the numeral library. Please see Data Validation in http://www.formvalidator.net for more information.");
                    e.length && (e = String(numeral().unformat(e)));
                }
                if (-1 === o.indexOf("number") && (o += ",number"), -1 === o.indexOf("negative") && 0 === e.indexOf("-")) return !1;
                if (-1 < o.indexOf("range") && (r = parseFloat(o.substring(o.indexOf("[") + 1, o.indexOf(";"))), 
                i = parseFloat(o.substring(o.indexOf(";") + 1, o.indexOf("]"))), s = !0), "" !== l && (u = !0), 
                "," === a) {
                    if (-1 < e.indexOf(".")) return !1;
                    e = e.replace(",", ".");
                }
                if ("" === e.replace(/[0-9-]/g, "") && (!s || r <= e && e <= i) && (!u || e % l == 0)) return !0;
                if (-1 < o.indexOf("float") && null !== e.match(new RegExp("^([0-9-]+)\\.([0-9]+)$")) && (!s || r <= e && e <= i) && (!u || e % l == 0)) return !0;
            }
            return !1;
        },
        errorMessage: "",
        errorMessageKey: "badInt"
    }), p.formUtils.addValidator({
        name: "alphanumeric",
        validatorFunction: function(e, t, n, r) {
            var i = "^([a-zA-Z0-9", o = t.valAttr("allowing"), a = "";
            if (o) {
                a = i + o + "]+)$";
                var s = o.replace(/\\/g, "");
                -1 < s.indexOf(" ") && (s = s.replace(" ", ""), s += r.andSpaces || p.formUtils.LANG.andSpaces), 
                this.errorMessage = r.badAlphaNumeric + r.badAlphaNumericExtra + s;
            } else a = i + "]+)$", this.errorMessage = r.badAlphaNumeric;
            return new RegExp(a).test(e);
        },
        errorMessage: "",
        errorMessageKey: ""
    }), p.formUtils.addValidator({
        name: "custom",
        validatorFunction: function(e, t) {
            return new RegExp(t.valAttr("regexp")).test(e);
        },
        errorMessage: "",
        errorMessageKey: "badCustomVal"
    }), p.formUtils.addValidator({
        name: "date",
        validatorFunction: function(e, t, n) {
            var r = t.valAttr("format") || n.dateFormat || "yyyy-mm-dd", i = "false" === t.valAttr("require-leading-zero");
            return !1 !== p.formUtils.parseDate(e, r, i);
        },
        errorMessage: "",
        errorMessageKey: "badDate"
    }), p.formUtils.addValidator({
        name: "checkbox_group",
        validatorFunction: function(e, t, n, r, i) {
            var o = !0, a = t.attr("name"), s = p('input[type=checkbox][name^="' + a + '"]', i), l = s.filter(":checked").length, u = t.valAttr("qty");
            if (void 0 === u) {
                var c = t.get(0).nodeName;
                alert('Attribute "data-validation-qty" is missing from ' + c + " named " + t.attr("name"));
            }
            var d = p.formUtils.numericRangeCheck(l, u);
            switch (d[0]) {
              case "out":
                this.errorMessage = r.groupCheckedRangeStart + u + r.groupCheckedEnd, o = !1;
                break;

              case "min":
                this.errorMessage = r.groupCheckedTooFewStart + d[1] + r.groupCheckedEnd, o = !1;
                break;

              case "max":
                this.errorMessage = r.groupCheckedTooManyStart + d[1] + r.groupCheckedEnd, o = !1;
                break;

              default:
                o = !0;
            }
            if (!o) {
                var f = function() {
                    s.unbind("click", f), s.filter("*[data-validation]").validateInputOnBlur(r, n, !1, "blur");
                };
                s.bind("click", f);
            }
            return o;
        }
    });
}), function(e) {
    "function" == typeof define && define.amd ? define([], e) : "object" == typeof exports ? module.exports = e() : window.wNumb = e();
}(function() {
    "use strict";
    var o = [ "decimals", "thousand", "mark", "prefix", "suffix", "encoder", "decoder", "negativeBefore", "negative", "edit", "undo" ];
    function x(e) {
        return e.split("").reverse().join("");
    }
    function g(e, t) {
        return e.substring(0, t.length) === t;
    }
    function a(e, t, n) {
        if ((e[t] || e[n]) && e[t] === e[n]) throw new Error(t);
    }
    function w(e) {
        return "number" == typeof e && isFinite(e);
    }
    function n(e, t, n, r, i, o, a, s, l, u, c, d) {
        var f, p, h, g, m, v = d, y = "", b = "";
        return o && (d = o(d)), !!w(d) && (!1 !== e && 0 === parseFloat(d.toFixed(e)) && (d = 0), 
        d < 0 && (f = !0, d = Math.abs(d)), !1 !== e && (m = e, g = (g = d).toString().split("e"), 
        d = (+((g = (g = Math.round(+(g[0] + "e" + (g[1] ? +g[1] + m : m)))).toString().split("e"))[0] + "e" + (g[1] ? +g[1] - m : -m))).toFixed(m)), 
        -1 !== (d = d.toString()).indexOf(".") ? (h = (p = d.split("."))[0], n && (y = n + p[1])) : h = d, 
        t && (h = x((h = x(h).match(/.{1,3}/g)).join(x(t)))), f && s && (b += s), r && (b += r), 
        f && l && (b += l), b += h, b += y, i && (b += i), u && (b = u(b, v)), b);
    }
    function r(e, t, n, r, i, o, a, s, l, u, c, d) {
        var f, p, h = "";
        return c && (d = c(d)), !(!d || "string" != typeof d) && (s && g(d, s) && (d = d.replace(s, ""), 
        f = !0), r && g(d, r) && (d = d.replace(r, "")), l && g(d, l) && (d = d.replace(l, ""), 
        f = !0), i && (p = i, d.slice(-1 * p.length) === p) && (d = d.slice(0, -1 * i.length)), 
        t && (d = d.split(t).join("")), n && (d = d.replace(n, ".")), f && (h += "-"), "" !== (h = (h += d).replace(/[^0-9\.\-.]/g, "")) && (h = Number(h), 
        a && (h = a(h)), !!w(h) && h));
    }
    function i(e, t, n) {
        var r, i = [];
        for (r = 0; r < o.length; r += 1) i.push(e[o[r]]);
        return i.push(n), t.apply("", i);
    }
    return function e(t) {
        if (!(this instanceof e)) return new e(t);
        "object" == typeof t && (t = function(e) {
            var t, n, r, i = {};
            for (void 0 === e.suffix && (e.suffix = e.postfix), t = 0; t < o.length; t += 1) if (void 0 === (r = e[n = o[t]])) "negative" !== n || i.negativeBefore ? "mark" === n && "." !== i.thousand ? i[n] = "." : i[n] = !1 : i[n] = "-"; else if ("decimals" === n) {
                if (!(0 <= r && r < 8)) throw new Error(n);
                i[n] = r;
            } else if ("encoder" === n || "decoder" === n || "edit" === n || "undo" === n) {
                if ("function" != typeof r) throw new Error(n);
                i[n] = r;
            } else {
                if ("string" != typeof r) throw new Error(n);
                i[n] = r;
            }
            return a(i, "mark", "thousand"), a(i, "prefix", "negative"), a(i, "prefix", "negativeBefore"), 
            i;
        }(t), this.to = function(e) {
            return i(t, n, e);
        }, this.from = function(e) {
            return i(t, r, e);
        });
    };
}), function(e) {
    "function" == typeof define && define.amd ? define([], e) : "object" == typeof exports ? module.exports = e() : window.noUiSlider = e();
}(function() {
    "use strict";
    var Q = "11.1.0";
    function s(e) {
        return null != e;
    }
    function Z(e) {
        e.preventDefault();
    }
    function i(e) {
        return "number" == typeof e && !isNaN(e) && isFinite(e);
    }
    function J(e, t, n) {
        0 < n && (ne(e, t), setTimeout(function() {
            re(e, t);
        }, n));
    }
    function ee(e) {
        return Math.max(Math.min(e, 100), 0);
    }
    function te(e) {
        return Array.isArray(e) ? e : [ e ];
    }
    function t(e) {
        var t = (e = String(e)).split(".");
        return 1 < t.length ? t[1].length : 0;
    }
    function ne(e, t) {
        e.classList ? e.classList.add(t) : e.className += " " + t;
    }
    function re(e, t) {
        e.classList ? e.classList.remove(t) : e.className = e.className.replace(new RegExp("(^|\\b)" + t.split(" ").join("|") + "(\\b|$)", "gi"), " ");
    }
    function ie(e) {
        var t = void 0 !== window.pageXOffset, n = "CSS1Compat" === (e.compatMode || "");
        return {
            x: t ? window.pageXOffset : n ? e.documentElement.scrollLeft : e.body.scrollLeft,
            y: t ? window.pageYOffset : n ? e.documentElement.scrollTop : e.body.scrollTop
        };
    }
    function c(e, t) {
        return 100 / (t - e);
    }
    function d(e, t) {
        return 100 * t / (e[1] - e[0]);
    }
    function f(e, t) {
        for (var n = 1; e >= t[n]; ) n += 1;
        return n;
    }
    function n(e, t, n) {
        if (n >= e.slice(-1)[0]) return 100;
        var r, i, o = f(n, e), a = e[o - 1], s = e[o], l = t[o - 1], u = t[o];
        return l + (i = n, d(r = [ a, s ], r[0] < 0 ? i + Math.abs(r[0]) : i - r[0]) / c(l, u));
    }
    function r(e, t, n, r) {
        if (100 === r) return r;
        var i, o, a = f(r, e), s = e[a - 1], l = e[a];
        return n ? (l - s) / 2 < r - s ? l : s : t[a - 1] ? e[a - 1] + (i = r - e[a - 1], 
        o = t[a - 1], Math.round(i / o) * o) : r;
    }
    function o(e, t, n) {
        var r;
        if ("number" == typeof t && (t = [ t ]), !Array.isArray(t)) throw new Error("noUiSlider (" + Q + "): 'range' contains invalid value.");
        if (!i(r = "min" === e ? 0 : "max" === e ? 100 : parseFloat(e)) || !i(t[0])) throw new Error("noUiSlider (" + Q + "): 'range' value isn't numeric.");
        n.xPct.push(r), n.xVal.push(t[0]), r ? n.xSteps.push(!isNaN(t[1]) && t[1]) : isNaN(t[1]) || (n.xSteps[0] = t[1]), 
        n.xHighestCompleteStep.push(0);
    }
    function a(e, t, n) {
        if (!t) return !0;
        n.xSteps[e] = d([ n.xVal[e], n.xVal[e + 1] ], t) / c(n.xPct[e], n.xPct[e + 1]);
        var r = (n.xVal[e + 1] - n.xVal[e]) / n.xNumSteps[e], i = Math.ceil(Number(r.toFixed(3)) - 1), o = n.xVal[e] + n.xNumSteps[e] * i;
        n.xHighestCompleteStep[e] = o;
    }
    function l(e, t, n) {
        var r;
        this.xPct = [], this.xVal = [], this.xSteps = [ n || !1 ], this.xNumSteps = [ !1 ], 
        this.xHighestCompleteStep = [], this.snap = t;
        var i = [];
        for (r in e) e.hasOwnProperty(r) && i.push([ e[r], r ]);
        for (i.length && "object" == typeof i[0][0] ? i.sort(function(e, t) {
            return e[0][0] - t[0][0];
        }) : i.sort(function(e, t) {
            return e[0] - t[0];
        }), r = 0; r < i.length; r++) o(i[r][1], i[r][0], this);
        for (this.xNumSteps = this.xSteps.slice(0), r = 0; r < this.xNumSteps.length; r++) a(r, this.xNumSteps[r], this);
    }
    l.prototype.getMargin = function(e) {
        var t = this.xNumSteps[0];
        if (t && e / t % 1 != 0) throw new Error("noUiSlider (" + Q + "): 'limit', 'margin' and 'padding' must be divisible by step.");
        return 2 === this.xPct.length && d(this.xVal, e);
    }, l.prototype.toStepping = function(e) {
        return e = n(this.xVal, this.xPct, e);
    }, l.prototype.fromStepping = function(e) {
        return function(e, t, n) {
            if (100 <= n) return e.slice(-1)[0];
            var r, i = f(n, t), o = e[i - 1], a = e[i], s = t[i - 1], l = t[i];
            return r = [ o, a ], (n - s) * c(s, l) * (r[1] - r[0]) / 100 + r[0];
        }(this.xVal, this.xPct, e);
    }, l.prototype.getStep = function(e) {
        return e = r(this.xPct, this.xSteps, this.snap, e);
    }, l.prototype.getNearbySteps = function(e) {
        var t = f(e, this.xPct);
        return {
            stepBefore: {
                startValue: this.xVal[t - 2],
                step: this.xNumSteps[t - 2],
                highestStep: this.xHighestCompleteStep[t - 2]
            },
            thisStep: {
                startValue: this.xVal[t - 1],
                step: this.xNumSteps[t - 1],
                highestStep: this.xHighestCompleteStep[t - 1]
            },
            stepAfter: {
                startValue: this.xVal[t - 0],
                step: this.xNumSteps[t - 0],
                highestStep: this.xHighestCompleteStep[t - 0]
            }
        };
    }, l.prototype.countStepDecimals = function() {
        var e = this.xNumSteps.map(t);
        return Math.max.apply(null, e);
    }, l.prototype.convert = function(e) {
        return this.getStep(this.toStepping(e));
    };
    var u = {
        to: function(e) {
            return void 0 !== e && e.toFixed(2);
        },
        from: Number
    };
    function p(e) {
        if ("object" == typeof (t = e) && "function" == typeof t.to && "function" == typeof t.from) return !0;
        var t;
        throw new Error("noUiSlider (" + Q + "): 'format' requires 'to' and 'from' methods.");
    }
    function h(e, t) {
        if (!i(t)) throw new Error("noUiSlider (" + Q + "): 'step' is not numeric.");
        e.singleStep = t;
    }
    function g(e, t) {
        if ("object" != typeof t || Array.isArray(t)) throw new Error("noUiSlider (" + Q + "): 'range' is not an object.");
        if (void 0 === t.min || void 0 === t.max) throw new Error("noUiSlider (" + Q + "): Missing 'min' or 'max' in 'range'.");
        if (t.min === t.max) throw new Error("noUiSlider (" + Q + "): 'range' 'min' and 'max' cannot be equal.");
        e.spectrum = new l(t, e.snap, e.singleStep);
    }
    function m(e, t) {
        if (t = te(t), !Array.isArray(t) || !t.length) throw new Error("noUiSlider (" + Q + "): 'start' option is incorrect.");
        e.handles = t.length, e.start = t;
    }
    function v(e, t) {
        if ("boolean" != typeof (e.snap = t)) throw new Error("noUiSlider (" + Q + "): 'snap' option must be a boolean.");
    }
    function y(e, t) {
        if ("boolean" != typeof (e.animate = t)) throw new Error("noUiSlider (" + Q + "): 'animate' option must be a boolean.");
    }
    function b(e, t) {
        if ("number" != typeof (e.animationDuration = t)) throw new Error("noUiSlider (" + Q + "): 'animationDuration' option must be a number.");
    }
    function x(e, t) {
        var n, r = [ !1 ];
        if ("lower" === t ? t = [ !0, !1 ] : "upper" === t && (t = [ !1, !0 ]), !0 === t || !1 === t) {
            for (n = 1; n < e.handles; n++) r.push(t);
            r.push(!1);
        } else {
            if (!Array.isArray(t) || !t.length || t.length !== e.handles + 1) throw new Error("noUiSlider (" + Q + "): 'connect' option doesn't match handle count.");
            r = t;
        }
        e.connect = r;
    }
    function w(e, t) {
        switch (t) {
          case "horizontal":
            e.ort = 0;
            break;

          case "vertical":
            e.ort = 1;
            break;

          default:
            throw new Error("noUiSlider (" + Q + "): 'orientation' option is invalid.");
        }
    }
    function S(e, t) {
        if (!i(t)) throw new Error("noUiSlider (" + Q + "): 'margin' option must be numeric.");
        if (0 !== t && (e.margin = e.spectrum.getMargin(t), !e.margin)) throw new Error("noUiSlider (" + Q + "): 'margin' option is only supported on linear sliders.");
    }
    function C(e, t) {
        if (!i(t)) throw new Error("noUiSlider (" + Q + "): 'limit' option must be numeric.");
        if (e.limit = e.spectrum.getMargin(t), !e.limit || e.handles < 2) throw new Error("noUiSlider (" + Q + "): 'limit' option is only supported on linear sliders with 2 or more handles.");
    }
    function E(e, t) {
        if (!i(t) && !Array.isArray(t)) throw new Error("noUiSlider (" + Q + "): 'padding' option must be numeric or array of exactly 2 numbers.");
        if (Array.isArray(t) && 2 !== t.length && !i(t[0]) && !i(t[1])) throw new Error("noUiSlider (" + Q + "): 'padding' option must be numeric or array of exactly 2 numbers.");
        if (0 !== t) {
            if (Array.isArray(t) || (t = [ t, t ]), !(e.padding = [ e.spectrum.getMargin(t[0]), e.spectrum.getMargin(t[1]) ]) === e.padding[0] || !1 === e.padding[1]) throw new Error("noUiSlider (" + Q + "): 'padding' option is only supported on linear sliders.");
            if (e.padding[0] < 0 || e.padding[1] < 0) throw new Error("noUiSlider (" + Q + "): 'padding' option must be a positive number(s).");
            if (100 <= e.padding[0] + e.padding[1]) throw new Error("noUiSlider (" + Q + "): 'padding' option must not exceed 100% of the range.");
        }
    }
    function T(e, t) {
        switch (t) {
          case "ltr":
            e.dir = 0;
            break;

          case "rtl":
            e.dir = 1;
            break;

          default:
            throw new Error("noUiSlider (" + Q + "): 'direction' option was not recognized.");
        }
    }
    function A(e, t) {
        if ("string" != typeof t) throw new Error("noUiSlider (" + Q + "): 'behaviour' must be a string containing options.");
        var n = 0 <= t.indexOf("tap"), r = 0 <= t.indexOf("drag"), i = 0 <= t.indexOf("fixed"), o = 0 <= t.indexOf("snap"), a = 0 <= t.indexOf("hover");
        if (i) {
            if (2 !== e.handles) throw new Error("noUiSlider (" + Q + "): 'fixed' behaviour must be used with 2 handles");
            S(e, e.start[1] - e.start[0]);
        }
        e.events = {
            tap: n || o,
            drag: r,
            fixed: i,
            snap: o,
            hover: a
        };
    }
    function k(e, t) {
        if (!1 !== t) if (!0 === t) {
            e.tooltips = [];
            for (var n = 0; n < e.handles; n++) e.tooltips.push(!0);
        } else {
            if (e.tooltips = te(t), e.tooltips.length !== e.handles) throw new Error("noUiSlider (" + Q + "): must pass a formatter for all handles.");
            e.tooltips.forEach(function(e) {
                if ("boolean" != typeof e && ("object" != typeof e || "function" != typeof e.to)) throw new Error("noUiSlider (" + Q + "): 'tooltips' must be passed a formatter or 'false'.");
            });
        }
    }
    function M(e, t) {
        p(e.ariaFormat = t);
    }
    function F(e, t) {
        p(e.format = t);
    }
    function N(e, t) {
        if ("string" != typeof t && !1 !== t) throw new Error("noUiSlider (" + Q + "): 'cssPrefix' must be a string or `false`.");
        e.cssPrefix = t;
    }
    function O(e, t) {
        if ("object" != typeof t) throw new Error("noUiSlider (" + Q + "): 'cssClasses' must be an object.");
        if ("string" == typeof e.cssPrefix) for (var n in e.cssClasses = {}, t) t.hasOwnProperty(n) && (e.cssClasses[n] = e.cssPrefix + t[n]); else e.cssClasses = t;
    }
    function oe(t) {
        var n = {
            margin: 0,
            limit: 0,
            padding: 0,
            animate: !0,
            animationDuration: 300,
            ariaFormat: u,
            format: u
        }, r = {
            step: {
                r: !1,
                t: h
            },
            start: {
                r: !0,
                t: m
            },
            connect: {
                r: !0,
                t: x
            },
            direction: {
                r: !0,
                t: T
            },
            snap: {
                r: !1,
                t: v
            },
            animate: {
                r: !1,
                t: y
            },
            animationDuration: {
                r: !1,
                t: b
            },
            range: {
                r: !0,
                t: g
            },
            orientation: {
                r: !1,
                t: w
            },
            margin: {
                r: !1,
                t: S
            },
            limit: {
                r: !1,
                t: C
            },
            padding: {
                r: !1,
                t: E
            },
            behaviour: {
                r: !0,
                t: A
            },
            ariaFormat: {
                r: !1,
                t: M
            },
            format: {
                r: !1,
                t: F
            },
            tooltips: {
                r: !1,
                t: k
            },
            cssPrefix: {
                r: !0,
                t: N
            },
            cssClasses: {
                r: !0,
                t: O
            }
        }, i = {
            connect: !1,
            direction: "ltr",
            behaviour: "tap",
            orientation: "horizontal",
            cssPrefix: "noUi-",
            cssClasses: {
                target: "target",
                base: "base",
                origin: "origin",
                handle: "handle",
                handleLower: "handle-lower",
                handleUpper: "handle-upper",
                horizontal: "horizontal",
                vertical: "vertical",
                background: "background",
                connect: "connect",
                connects: "connects",
                ltr: "ltr",
                rtl: "rtl",
                draggable: "draggable",
                drag: "state-drag",
                tap: "state-tap",
                active: "active",
                tooltip: "tooltip",
                pips: "pips",
                pipsHorizontal: "pips-horizontal",
                pipsVertical: "pips-vertical",
                marker: "marker",
                markerHorizontal: "marker-horizontal",
                markerVertical: "marker-vertical",
                markerNormal: "marker-normal",
                markerLarge: "marker-large",
                markerSub: "marker-sub",
                value: "value",
                valueHorizontal: "value-horizontal",
                valueVertical: "value-vertical",
                valueNormal: "value-normal",
                valueLarge: "value-large",
                valueSub: "value-sub"
            }
        };
        t.format && !t.ariaFormat && (t.ariaFormat = t.format), Object.keys(r).forEach(function(e) {
            if (!s(t[e]) && void 0 === i[e]) {
                if (r[e].r) throw new Error("noUiSlider (" + Q + "): '" + e + "' is required.");
                return !0;
            }
            r[e].t(n, s(t[e]) ? t[e] : i[e]);
        }), n.pips = t.pips;
        var e = document.createElement("div"), o = void 0 !== e.style.msTransform, a = void 0 !== e.style.transform;
        n.transformRule = a ? "transform" : o ? "msTransform" : "webkitTransform";
        return n.style = [ [ "left", "top" ], [ "right", "bottom" ] ][n.dir][n.ort], n;
    }
    function j(e, d, o) {
        var l, u, s, a, c, t, f, i, p = window.navigator.pointerEnabled ? {
            start: "pointerdown",
            move: "pointermove",
            end: "pointerup"
        } : window.navigator.msPointerEnabled ? {
            start: "MSPointerDown",
            move: "MSPointerMove",
            end: "MSPointerUp"
        } : {
            start: "mousedown touchstart",
            move: "mousemove touchmove",
            end: "mouseup touchend"
        }, h = window.CSS && CSS.supports && CSS.supports("touch-action", "none") && function() {
            var e = !1;
            try {
                var t = Object.defineProperty({}, "passive", {
                    get: function() {
                        e = !0;
                    }
                });
                window.addEventListener("test", null, t);
            } catch (e) {}
            return e;
        }(), x = e, g = [], m = [], v = 0, w = d.spectrum, y = [], b = {}, S = e.ownerDocument, C = S.documentElement, E = S.body, T = "rtl" === S.dir || 1 === d.ort ? 0 : 100;
        function A(e, t) {
            var n = S.createElement("div");
            return t && ne(n, t), e.appendChild(n), n;
        }
        function k(e, t) {
            return !!t && A(e, d.cssClasses.connect);
        }
        function n(e, t) {
            return !!d.tooltips[t] && A(e.firstChild, d.cssClasses.tooltip);
        }
        function M(t, r, i) {
            var o = S.createElement("div"), a = [ d.cssClasses.valueNormal, d.cssClasses.valueLarge, d.cssClasses.valueSub ], s = [ d.cssClasses.markerNormal, d.cssClasses.markerLarge, d.cssClasses.markerSub ], l = [ d.cssClasses.valueHorizontal, d.cssClasses.valueVertical ], u = [ d.cssClasses.markerHorizontal, d.cssClasses.markerVertical ];
            function c(e, t) {
                var n = t === d.cssClasses.value, r = n ? a : s;
                return t + " " + (n ? l : u)[d.ort] + " " + r[e];
            }
            return ne(o, d.cssClasses.pips), ne(o, 0 === d.ort ? d.cssClasses.pipsHorizontal : d.cssClasses.pipsVertical), 
            Object.keys(t).forEach(function(e) {
                !function(e, t) {
                    t[1] = t[1] && r ? r(t[0], t[1]) : t[1];
                    var n = A(o, !1);
                    n.className = c(t[1], d.cssClasses.marker), n.style[d.style] = e + "%", t[1] && ((n = A(o, !1)).className = c(t[1], d.cssClasses.value), 
                    n.setAttribute("data-value", t[0]), n.style[d.style] = e + "%", n.innerText = i.to(t[0]));
                }(e, t[e]);
            }), o;
        }
        function F() {
            var e;
            c && ((e = c).parentElement.removeChild(e), c = null);
        }
        function N(e) {
            F();
            var p, h, g, m, t, n, v, y, b, r = e.mode, i = e.density || 1, o = e.filter || !1, a = function(e, t, n) {
                if ("range" === e || "steps" === e) return w.xVal;
                if ("count" === e) {
                    if (t < 2) throw new Error("noUiSlider (" + Q + "): 'values' (>= 2) required for mode 'count'.");
                    var r = t - 1, i = 100 / r;
                    for (t = []; r--; ) t[r] = r * i;
                    t.push(100), e = "positions";
                }
                return "positions" === e ? t.map(function(e) {
                    return w.fromStepping(n ? w.getStep(e) : e);
                }) : "values" === e ? n ? t.map(function(e) {
                    return w.fromStepping(w.getStep(w.toStepping(e)));
                }) : t : void 0;
            }(r, e.values || !1, e.stepped || !1), s = (p = i, h = r, g = a, m = {}, t = w.xVal[0], 
            n = w.xVal[w.xVal.length - 1], y = v = !1, b = 0, (g = g.slice().sort(function(e, t) {
                return e - t;
            }).filter(function(e) {
                return !this[e] && (this[e] = !0);
            }, {}))[0] !== t && (g.unshift(t), v = !0), g[g.length - 1] !== n && (g.push(n), 
            y = !0), g.forEach(function(e, t) {
                var n, r, i, o, a, s, l, u, c, d = e, f = g[t + 1];
                if ("steps" === h && (n = w.xNumSteps[t]), n || (n = f - d), !1 !== d && void 0 !== f) for (n = Math.max(n, 1e-7), 
                r = d; r <= f; r = (r + n).toFixed(7) / 1) {
                    for (l = (a = (o = w.toStepping(r)) - b) / p, c = a / (u = Math.round(l)), i = 1; i <= u; i += 1) m[(b + i * c).toFixed(5)] = [ "x", 0 ];
                    s = -1 < g.indexOf(r) ? 1 : "steps" === h ? 2 : 0, !t && v && (s = 0), r === f && y || (m[o.toFixed(5)] = [ r, s ]), 
                    b = o;
                }
            }), m), l = e.format || {
                to: Math.round
            };
            return c = x.appendChild(M(s, o, l));
        }
        function O() {
            var e = l.getBoundingClientRect(), t = "offset" + [ "Width", "Height" ][d.ort];
            return 0 === d.ort ? e.width || l[t] : e.height || l[t];
        }
        function j(r, i, o, a) {
            var t = function(e) {
                return !!(e = function(e, t, n) {
                    var r, i, o = 0 === e.type.indexOf("touch"), a = 0 === e.type.indexOf("mouse"), s = 0 === e.type.indexOf("pointer");
                    0 === e.type.indexOf("MSPointer") && (s = !0);
                    if (o) {
                        var l = function(e) {
                            return e.target === n || n.contains(e.target);
                        };
                        if ("touchstart" === e.type) {
                            var u = Array.prototype.filter.call(e.touches, l);
                            if (1 < u.length) return !1;
                            r = u[0].pageX, i = u[0].pageY;
                        } else {
                            var c = Array.prototype.find.call(e.changedTouches, l);
                            if (!c) return !1;
                            r = c.pageX, i = c.pageY;
                        }
                    }
                    t = t || ie(S), (a || s) && (r = e.clientX + t.x, i = e.clientY + t.y);
                    return e.pageOffset = t, e.points = [ r, i ], e.cursor = a || s, e;
                }(e, a.pageOffset, a.target || i)) && (!(x.hasAttribute("disabled") && !a.doNotReject) && (t = x, 
                n = d.cssClasses.tap, !((t.classList ? t.classList.contains(n) : new RegExp("\\b" + n + "\\b").test(t.className)) && !a.doNotReject) && (!(r === p.start && void 0 !== e.buttons && 1 < e.buttons) && ((!a.hover || !e.buttons) && (h || e.preventDefault(), 
                e.calcPoint = e.points[d.ort], void o(e, a))))));
                var t, n;
            }, n = [];
            return r.split(" ").forEach(function(e) {
                i.addEventListener(e, t, !!h && {
                    passive: !0
                }), n.push([ e, t ]);
            }), n;
        }
        function P(e) {
            var t, n, r, i, o, a, s = 100 * (e - (t = l, n = d.ort, r = t.getBoundingClientRect(), 
            i = t.ownerDocument, o = i.documentElement, a = ie(i), /webkit.*Chrome.*Mobile/i.test(navigator.userAgent) && (a.x = 0), 
            n ? r.top + a.y - o.clientTop : r.left + a.x - o.clientLeft)) / O();
            return s = ee(s), d.dir ? 100 - s : s;
        }
        function D(e, t) {
            "mouseout" === e.type && "HTML" === e.target.nodeName && null === e.relatedTarget && q(e, t);
        }
        function L(e, t) {
            if (-1 === navigator.appVersion.indexOf("MSIE 9") && 0 === e.buttons && 0 !== t.buttonsProperty) return q(e, t);
            var n = (d.dir ? -1 : 1) * (e.calcPoint - t.startCalcPoint);
            z(0 < n, 100 * n / t.baseSize, t.locations, t.handleNumbers);
        }
        function q(e, t) {
            t.handle && (re(t.handle, d.cssClasses.active), v -= 1), t.listeners.forEach(function(e) {
                C.removeEventListener(e[0], e[1]);
            }), 0 === v && (re(x, d.cssClasses.drag), B(), e.cursor && (E.style.cursor = "", 
            E.removeEventListener("selectstart", Z))), t.handleNumbers.forEach(function(e) {
                $("change", e), $("set", e), $("end", e);
            });
        }
        function H(e, t) {
            var n;
            if (1 === t.handleNumbers.length) {
                var r = u[t.handleNumbers[0]];
                if (r.hasAttribute("disabled")) return !1;
                n = r.children[0], v += 1, ne(n, d.cssClasses.active);
            }
            e.stopPropagation();
            var i = [], o = j(p.move, C, L, {
                target: e.target,
                handle: n,
                listeners: i,
                startCalcPoint: e.calcPoint,
                baseSize: O(),
                pageOffset: e.pageOffset,
                handleNumbers: t.handleNumbers,
                buttonsProperty: e.buttons,
                locations: g.slice()
            }), a = j(p.end, C, q, {
                target: e.target,
                handle: n,
                listeners: i,
                doNotReject: !0,
                handleNumbers: t.handleNumbers
            }), s = j("mouseout", C, D, {
                target: e.target,
                handle: n,
                listeners: i,
                doNotReject: !0,
                handleNumbers: t.handleNumbers
            });
            i.push.apply(i, o.concat(a, s)), e.cursor && (E.style.cursor = getComputedStyle(e.target).cursor, 
            1 < u.length && ne(x, d.cssClasses.drag), E.addEventListener("selectstart", Z, !1)), 
            t.handleNumbers.forEach(function(e) {
                $("start", e);
            });
        }
        function r(e) {
            e.stopPropagation();
            var r, i, o, t = P(e.calcPoint), n = (r = t, o = !(i = 100), u.forEach(function(e, t) {
                if (!e.hasAttribute("disabled")) {
                    var n = Math.abs(g[t] - r);
                    (n < i || 100 === n && 100 === i) && (o = t, i = n);
                }
            }), o);
            if (!1 === n) return !1;
            d.events.snap || J(x, d.cssClasses.tap, d.animationDuration), X(n, t, !0, !0), B(), 
            $("slide", n, !0), $("update", n, !0), $("change", n, !0), $("set", n, !0), d.events.snap && H(e, {
                handleNumbers: [ n ]
            });
        }
        function U(e) {
            var t = P(e.calcPoint), n = w.getStep(t), r = w.fromStepping(n);
            Object.keys(b).forEach(function(e) {
                "hover" === e.split(".")[0] && b[e].forEach(function(e) {
                    e.call(a, r);
                });
            });
        }
        function I(e, t) {
            b[e] = b[e] || [], b[e].push(t), "update" === e.split(".")[0] && u.forEach(function(e, t) {
                $("update", t);
            });
        }
        function $(n, r, i) {
            Object.keys(b).forEach(function(e) {
                var t = e.split(".")[0];
                n === t && b[e].forEach(function(e) {
                    e.call(a, y.map(d.format.to), r, y.slice(), i || !1, g.slice());
                });
            });
        }
        function R(e) {
            return e + "%";
        }
        function V(e, t, n, r, i, o) {
            return 1 < u.length && (r && 0 < t && (n = Math.max(n, e[t - 1] + d.margin)), i && t < u.length - 1 && (n = Math.min(n, e[t + 1] - d.margin))), 
            1 < u.length && d.limit && (r && 0 < t && (n = Math.min(n, e[t - 1] + d.limit)), 
            i && t < u.length - 1 && (n = Math.max(n, e[t + 1] - d.limit))), d.padding && (0 === t && (n = Math.max(n, d.padding[0])), 
            t === u.length - 1 && (n = Math.min(n, 100 - d.padding[1]))), !((n = ee(n = w.getStep(n))) === e[t] && !o) && n;
        }
        function W(e, t) {
            var n = d.ort;
            return (n ? t : e) + ", " + (n ? e : t);
        }
        function z(e, r, n, t) {
            var i = n.slice(), o = [ !e, e ], a = [ e, !e ];
            t = t.slice(), e && t.reverse(), 1 < t.length ? t.forEach(function(e, t) {
                var n = V(i, e, i[e] + r, o[t], a[t], !1);
                !1 === n ? r = 0 : (r = n - i[e], i[e] = n);
            }) : o = a = [ !0 ];
            var s = !1;
            t.forEach(function(e, t) {
                s = X(e, n[e] + r, o[t], a[t]) || s;
            }), s && t.forEach(function(e) {
                $("update", e), $("slide", e);
            });
        }
        function _(e, t) {
            return d.dir ? 100 - e - t : e;
        }
        function B() {
            m.forEach(function(e) {
                var t = 50 < g[e] ? -1 : 1, n = 3 + (u.length + t * e);
                u[e].style.zIndex = n;
            });
        }
        function X(e, t, n, r) {
            return !1 !== (t = V(g, e, t, n, r, !1)) && (function(e, t) {
                g[e] = t, y[e] = w.fromStepping(t);
                var n = "translate(" + W(R(_(t, 0) - T), "0") + ")";
                u[e].style[d.transformRule] = n, Y(e), Y(e + 1);
            }(e, t), !0);
        }
        function Y(e) {
            if (s[e]) {
                var t = 0, n = 100;
                0 !== e && (t = g[e - 1]), e !== s.length - 1 && (n = g[e]);
                var r = n - t, i = "translate(" + W(R(_(t, r)), "0") + ")", o = "scale(" + W(r / 100, "1") + ")";
                s[e].style[d.transformRule] = i + " " + o;
            }
        }
        function G(e, t) {
            var r = te(e), n = void 0 === g[0];
            t = void 0 === t || !!t, d.animate && !n && J(x, d.cssClasses.tap, d.animationDuration), 
            m.forEach(function(e) {
                var t, n;
                X(e, (t = r[e], n = e, null === t || !1 === t || void 0 === t ? g[n] : ("number" == typeof t && (t = String(t)), 
                t = d.format.from(t), !1 === (t = w.toStepping(t)) || isNaN(t) ? g[n] : t)), !0, !1);
            }), m.forEach(function(e) {
                X(e, g[e], !0, !0);
            }), B(), m.forEach(function(e) {
                $("update", e), null !== r[e] && t && $("set", e);
            });
        }
        function K() {
            var e = y.map(d.format.to);
            return 1 === e.length ? e[0] : e;
        }
        return ne(t = x, d.cssClasses.target), 0 === d.dir ? ne(t, d.cssClasses.ltr) : ne(t, d.cssClasses.rtl), 
        0 === d.ort ? ne(t, d.cssClasses.horizontal) : ne(t, d.cssClasses.vertical), l = A(t, d.cssClasses.base), 
        function(e, t) {
            var n, r, i, o = A(t, d.cssClasses.connects);
            u = [], (s = []).push(k(o, e[0]));
            for (var a = 0; a < d.handles; a++) u.push((n = a, i = void 0, r = A(t, d.cssClasses.origin), 
            (i = A(r, d.cssClasses.handle)).setAttribute("data-handle", n), i.setAttribute("tabindex", "0"), 
            i.setAttribute("role", "slider"), i.setAttribute("aria-orientation", d.ort ? "vertical" : "horizontal"), 
            0 === n ? ne(i, d.cssClasses.handleLower) : n === d.handles - 1 && ne(i, d.cssClasses.handleUpper), 
            r)), m[a] = a, s.push(k(o, e[a + 1]));
        }(d.connect, l), (f = d.events).fixed || u.forEach(function(e, t) {
            j(p.start, e.children[0], H, {
                handleNumbers: [ t ]
            });
        }), f.tap && j(p.start, l, r, {}), f.hover && j(p.move, l, U, {
            hover: !0
        }), f.drag && s.forEach(function(e, t) {
            if (!1 !== e && 0 !== t && t !== s.length - 1) {
                var n = u[t - 1], r = u[t], i = [ e ];
                ne(e, d.cssClasses.draggable), f.fixed && (i.push(n.children[0]), i.push(r.children[0])), 
                i.forEach(function(e) {
                    j(p.start, e, H, {
                        handles: [ n, r ],
                        handleNumbers: [ t - 1, t ]
                    });
                });
            }
        }), G(d.start), a = {
            destroy: function() {
                for (var e in d.cssClasses) d.cssClasses.hasOwnProperty(e) && re(x, d.cssClasses[e]);
                for (;x.firstChild; ) x.removeChild(x.firstChild);
                delete x.noUiSlider;
            },
            steps: function() {
                return g.map(function(e, t) {
                    var n = w.getNearbySteps(e), r = y[t], i = n.thisStep.step, o = null;
                    !1 !== i && r + i > n.stepAfter.startValue && (i = n.stepAfter.startValue - r), 
                    o = r > n.thisStep.startValue ? n.thisStep.step : !1 !== n.stepBefore.step && r - n.stepBefore.highestStep, 
                    100 === e ? i = null : 0 === e && (o = null);
                    var a = w.countStepDecimals();
                    return null !== i && !1 !== i && (i = Number(i.toFixed(a))), null !== o && !1 !== o && (o = Number(o.toFixed(a))), 
                    [ o, i ];
                });
            },
            on: I,
            off: function(e) {
                var r = e && e.split(".")[0], i = r && e.substring(r.length);
                Object.keys(b).forEach(function(e) {
                    var t = e.split(".")[0], n = e.substring(t.length);
                    r && r !== t || i && i !== n || delete b[e];
                });
            },
            get: K,
            set: G,
            reset: function(e) {
                G(d.start, e);
            },
            __moveHandles: function(e, t, n) {
                z(e, t, g, n);
            },
            options: o,
            updateOptions: function(t, e) {
                var n = K(), r = [ "margin", "limit", "padding", "range", "animate", "snap", "step", "format" ];
                r.forEach(function(e) {
                    void 0 !== t[e] && (o[e] = t[e]);
                });
                var i = oe(o);
                r.forEach(function(e) {
                    void 0 !== t[e] && (d[e] = i[e]);
                }), w = i.spectrum, d.margin = i.margin, d.limit = i.limit, d.padding = i.padding, 
                d.pips && N(d.pips), g = [], G(t.start || n, e);
            },
            target: x,
            removePips: F,
            pips: N
        }, d.pips && N(d.pips), d.tooltips && (i = u.map(n), I("update", function(e, t, n) {
            if (i[t]) {
                var r = e[t];
                !0 !== d.tooltips[t] && (r = d.tooltips[t].to(n[t])), i[t].innerHTML = r;
            }
        })), I("update", function(e, t, a, n, s) {
            m.forEach(function(e) {
                var t = u[e], n = V(g, e, 0, !0, !0, !0), r = V(g, e, 100, !0, !0, !0), i = s[e], o = d.ariaFormat.to(a[e]);
                t.children[0].setAttribute("aria-valuemin", n.toFixed(1)), t.children[0].setAttribute("aria-valuemax", r.toFixed(1)), 
                t.children[0].setAttribute("aria-valuenow", i.toFixed(1)), t.children[0].setAttribute("aria-valuetext", o);
            });
        }), a;
    }
    return {
        version: Q,
        create: function(e, t) {
            if (!e || !e.nodeName) throw new Error("noUiSlider (" + Q + "): create requires a single element, got: " + e);
            if (e.noUiSlider) throw new Error("noUiSlider (" + Q + "): Slider was already initialized.");
            var n = j(e, oe(t), t);
            return e.noUiSlider = n;
        }
    };
});