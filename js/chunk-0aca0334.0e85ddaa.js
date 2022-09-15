(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["chunk-0aca0334"], {
    2332 : function(t, e, n) {
        "use strict";
        n("5fcd")
    },
    "482e": function(t, e, n) {},
    5362 : function(t, e, n) {
        "use strict";
        var r = function() {
            var t = this,
            e = t.$createElement,
            n = t._self._c || e;
            return n("div", {
                staticClass: "musicList"
            },
            [t.list.length > 0 ? [n("div", {
                staticClass: "list-item list-header"
            },
            [n("span", {
                staticClass: "list-name"
            },
            [t._v("歌曲")]), n("span", {
                staticClass: "list-artist"
            },
            [t._v("歌手")]), 1 === t.listType ? n("span", {
                staticClass: "list-time"
            },
            [t._v("时长")]) : n("span", {
                staticClass: "list-album"
            },
            [t._v("专辑")])]), n("div", {
                ref: "listContent",
                staticClass: "list-content",
                on: {
                    scroll: function(e) {
                        return t.listScroll(e)
                    }
                }
            },
            [t._l(t.list, (function(e, r) {
                return n("div", {
                    key: e.id,
                    staticClass: "list-item",
                    class: {
                        on: t.playing && t.currentMusic.id === e.id
                    },
                    on: {
                        dblclick: function(n) {
                            return t.selectItem(e, r, n)
                        }
                    }
                },
                [n("span", {
                    staticClass: "list-num",
                    domProps: {
                        textContent: t._s(r + 1)
                    }
                }), n("div", {
                    staticClass: "list-name"
                },
                [n("span", [t._v(t._s(e.name))]), n("div", {
                    staticClass: "list-menu"
                },
                [n("mm-icon", {
                    staticClass: "hover",
                    attrs: {
                        type: t.getPlayIconType(e),
                        size: 40
                    },
                    on: {
                        click: function(n) {
                            return n.stopPropagation(),
                            t.selectItem(e, r)
                        }
                    }
                })], 1)]), n("span", {
                    staticClass: "list-artist"
                },
                [t._v(t._s(e.singer))]), 1 === t.listType ? n("span", {
                    staticClass: "list-time"
                },
                [t._v(" " + t._s(t._f("format")(e.duration % 3600)) + " "), n("mm-icon", {
                    staticClass: "hover list-menu-icon-del",
                    attrs: {
                        type: "delete-mini",
                        size: 40
                    },
                    on: {
                        click: function(e) {
                            return e.stopPropagation(),
                            t.deleteItem(r)
                        }
                    }
                })], 1) : n("span", {
                    staticClass: "list-album"
                },
                [t._v(t._s(e.album))])])
            })), t._t("listBtn")], 2)] : n("mm-no-result", {
                attrs: {
                    title: "哎呀，什么也没有"
                }
            })], 2)
        },
        i = [],
        a = n("4d63"),
        o = (n("ee4c"), n("7736")),
        s = n("ca00"),
        c = n("5af1"),
        l = {
            name: "MusicList",
            components: {
                MmNoResult: c["a"]
            },
            filters: {
                format: s["b"]
            },
            props: {
                list: {
                    type: Array,
                default:
                    function() {
                        return []
                    }
                },
                listType: {
                    type: Number,
                default:
                    0
                }
            },
            data: function() {
                return {
                    lockUp: !0
                }
            },
            computed: Object(a["a"])({},
            Object(o["c"])(["playing", "currentMusic"])),
            watch: {
                list: function(t, e) {
                    2 === this.listType && (t.length !== e.length || t[t.length - 1].id !== e[e.length - 1].id) && (this.lockUp = !1)
                }
            },
            activated: function() {
                this.scrollTop && this.$refs.listContent && (this.$refs.listContent.scrollTop = this.scrollTop)
            },
            methods: Object(a["a"])({
                listScroll: function(t) {
                    var e = t.target.scrollTop;
                    if (this.scrollTop = e, 2 === this.listType && !this.lockUp) {
                        var n = t.target,
                        r = n.scrollHeight,
                        i = n.offsetHeight;
                        e + i >= r - 50 && (this.lockUp = !0, this.$emit("pullUp"))
                    }
                },
                scrollTo: function() {
                    this.$refs.listContent.scrollTop = 0
                },
                selectItem: function(t, e, n) {
                    n && /list-menu-icon-del/.test(n.target.className) || (this.currentMusic.id && t.id === this.currentMusic.id ? this.setPlaying(!this.playing) : this.$emit("select", t, e))
                },
                getPlayIconType: function(t) {
                    var e = t.id,
                    n = this.playing,
                    r = this.currentMusic.id;
                    return n && r === e ? "pause-mini": "play-mini"
                },
                deleteItem: function(t) {
                    this.$emit("del", t)
                }
            },
            Object(o["d"])({
                setPlaying: "SET_PLAYING"
            }))
        },
        u = l,
        h = (n("af7e"), n("cba8")),
        f = Object(h["a"])(u, r, i, !1, null, "6228edae", null);
        e["a"] = f.exports
    },
    "562f": function(t, e, n) {
        "use strict";
        n("482e")
    },
    "5af1": function(t, e, n) {
        "use strict";
        var r = function() {
            var t = this,
            e = t.$createElement,
            n = t._self._c || e;
            return n("div", {
                staticClass: "mm-no-result"
            },
            [n("p", {
                staticClass: "mm-no-result-text"
            },
            [t._v(t._s(t.title))])])
        },
        i = [],
        a = {
            name: "MmNoResult",
            props: {
                title: {
                    type: String,
                default:
                    ""
                }
            }
        },
        o = a,
        s = (n("9673"), n("cba8")),
        c = Object(s["a"])(o, r, i, !1, null, null, null);
        e["a"] = c.exports
    },
    "5fcd": function(t, e, n) {},
    "650b": function(t, e, n) {
        "use strict";
        n.r(e);
        var r = function() {
            var t = this,
            e = t.$createElement,
            n = t._self._c || e;
            return n("div", {
                staticClass: "search"
            },
            [n("mm-loading", {
                model: {
                    value: t.mmLoadShow,
                    callback: function(e) {
                        t.mmLoadShow = e
                    },
                    expression: "mmLoadShow"
                }
            }), n("div", {
                staticClass: "search-head"
            },
            [n("input", {
                directives: [{
                    name: "model",
                    rawName: "v-model.trim",
                    value: t.searchValue,
                    expression: "searchValue",
                    modifiers: {
                        trim: !0
                    }
                }],
                staticClass: "search-input",
                attrs: {
                    type: "text",
                    placeholder: "音乐 / 歌手"
                },
                domProps: {
                    value: t.searchValue
                },
                on: {
                    keyup: function(e) {
                        return ! e.type.indexOf("key") && t._k(e.keyCode, "enter", 13, e.key, "Enter") ? null: t.onEnter.apply(null, arguments)
                    },
                    input: function(e) {
                        e.target.composing || (t.searchValue = e.target.value.trim())
                    },
                    blur: function(e) {
                        return t.$forceUpdate()
                    }
                }
            })]), n("div", {
                staticClass: "search-head hot"
            },
            [n("i", {
                staticClass: "fad fa-fire"
            }), t._l(t.Artists, (function(e, r) {
                return n("span", {
                    key: r,
                    on: {
                        click: function(n) {
                            return t.clickHot(e.first)
                        }
                    }
                },
                [t._v(" " + t._s(e.first) + " ")])
            }))], 2), n("music-list", {
                ref: "musicList",
                attrs: {
                    list: t.list,
                    "list-type": 2
                },
                on: {
                    select: t.selectItem,
                    pullUp: t.pullUpLoad
                }
            })], 1)
        },
        i = [];
        n("2d33");
        function a(t, e, n, r, i, a, o) {
            try {
                var s = t[a](o),
                c = s.value
            } catch(l) {
                return void n(l)
            }
            s.done ? e(c) : Promise.resolve(c).then(r, i)
        }
        function o(t) {
            return function() {
                var e = this,
                n = arguments;
                return new Promise((function(r, i) {
                    var o = t.apply(e, n);
                    function s(t) {
                        a(o, r, i, s, c, "next", t)
                    }
                    function c(t) {
                        a(o, r, i, s, c, "throw", t)
                    }
                    s(void 0)
                }))
            }
        }
        var s = n("f2b6"),
        c = n("4d63"),
        l = (n("e186"), n("2522"), n("df1a"), n("d7b0"), n("278f"), n("7736")),
        u = n("365c"),
        h = n("eb4d"),
        f = n("f904"),
        p = n("5362"),
        d = n("ac0d"),
        m = n("ca00"),
        v = {
            name: "Search",
            components: {
                MmLoading: f["a"],
                MusicList: p["a"]
            },
            mixins: [d["a"]],
            data: function() {
                return {
                    searchValue: "",
                    Artists: [],
                    list: [],
                    page: 0,
                    lockUp: !0
                }
            },
            computed: Object(c["a"])({},
            Object(l["c"])(["playing", "currentMusic"])),
            watch: {
                list: function(t, e) { (t.length !== e.length || t[t.length - 1].id !== e[e.length - 1].id) && (this.lockUp = !1)
                }
            },
            created: function() {
                var t = this;
                Object(u["i"])().then((function(e) {
                    var n = e.result;
                    t.Artists = n.hots.slice(0, 10),
                    t.mmLoadShow = !1
                }))
            },
            methods: Object(c["a"])(Object(c["a"])({
                clickHot: function(t) {
                    this.searchValue = t,
                    this.onEnter()
                },
                onEnter: function() {
                    var t = this;
                    "" !== this.searchValue.replace(/(^\s+)|(\s+$)/g, "") ? (this.mmLoadShow = !0, this.page = 0, this.list.length > 0 && this.$refs.musicList.scrollTo(), Object(u["h"])(this.searchValue).then((function(e) {
                        var n = e.result;
                        t.list = Object(h["b"])(n.songs),
                        t._hideLoad()
                    }))) : this.$mmToast("怎么什么都不写呀")
                },
                pullUpLoad: function() {
                    var t = this;
                    this.page += 1,
                    Object(u["h"])(this.searchValue, this.page).then((function(e) {
                        var n = e.result;
                        n.songs ? t.list = [].concat(Object(s["a"])(t.list), Object(s["a"])(Object(h["b"])(n.songs))) : t.$mmToast("没有更多歌曲啦")
                    }))
                },
                selectItem: function(t) {
                    var e = this;
                    return o(regeneratorRuntime.mark((function n() {
                        var r;
                        return regeneratorRuntime.wrap((function(n) {
                            while (1) switch (n.prev = n.next) {
                            case 0:
                                return n.prev = 0,
                                n.next = 3,
                                e._getMusicDetail(t.id);
                            case 3:
                                r = n.sent,
                                t.image = Object(m["f"])(r),
                                e.selectAddPlay(t),
                                n.next = 11;
                                break;
                            case 8:
                                n.prev = 8,
                                n.t0 = n["catch"](0),
                                e.$mmToast("哎呀，出错啦");
                            case 11:
                            case "end":
                                return n.stop()
                            }
                        }), n, null, [[0, 8]])
                    })))()
                },
                _getMusicDetail: function(t) {
                    return Object(u["c"])(t).then((function(t) {
                        return t.songs[0].al.picUrl
                    }))
                }
            },
            Object(l["d"])({
                setPlaying: "SET_PLAYING"
            })), Object(l["b"])(["selectAddPlay"]))
        },
        y = v,
        g = (n("562f"), n("cba8")),
        b = Object(g["a"])(y, r, i, !1, null, "44e23011", null);
        e["default"] = b.exports
    },
    9673 : function(t, e, n) {
        "use strict";
        n("bf8f")
    },
    ac0d: function(t, e, n) {
        "use strict";
        n.d(e, "a", (function() {
            return a
        }));
        var r = n("4d63"),
        i = n("7736"),
        a = (Object(r["a"])({},
        Object(i["c"])(["playing", "currentMusic"])), Object(r["a"])(Object(r["a"])({
            selectItem: function(t, e) {
                t.id === this.currentMusic.id && this.playing ? this.setPlaying(!1) : this.selectPlay({
                    list: this.list,
                    index: e
                })
            }
        },
        Object(i["d"])({
            setPlaying: "SET_PLAYING"
        })), Object(i["b"])(["selectPlay"])), {
            data: function() {
                return {
                    mmLoadShow: !0
                }
            },
            methods: {
                _hideLoad: function() {
                    var t, e = this;
                    clearTimeout(t),
                    t = setTimeout((function() {
                        e.mmLoadShow = !1
                    }), 200)
                }
            }
        })
    },
    af7e: function(t, e, n) {
        "use strict";
        n("e92b")
    },
    bf8f: function(t, e, n) {},
    e186: function(t, e, n) {
        var r = function(t) {
            "use strict";
            var e, n = Object.prototype,
            r = n.hasOwnProperty,
            i = "function" === typeof Symbol ? Symbol: {},
            a = i.iterator || "@@iterator",
            o = i.asyncIterator || "@@asyncIterator",
            s = i.toStringTag || "@@toStringTag";
            function c(t, e, n) {
                return Object.defineProperty(t, e, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }),
                t[e]
            }
            try {
                c({},
                "")
            } catch($) {
                c = function(t, e, n) {
                    return t[e] = n
                }
            }
            function l(t, e, n, r) {
                var i = e && e.prototype instanceof v ? e: v,
                a = Object.create(i.prototype),
                o = new T(r || []);
                return a._invoke = j(t, n, o),
                a
            }
            function u(t, e, n) {
                try {
                    return {
                        type: "normal",
                        arg: t.call(e, n)
                    }
                } catch($) {
                    return {
                        type: "throw",
                        arg: $
                    }
                }
            }
            t.wrap = l;
            var h = "suspendedStart",
            f = "suspendedYield",
            p = "executing",
            d = "completed",
            m = {};
            function v() {}
            function y() {}
            function g() {}
            var b = {};
            c(b, a, (function() {
                return this
            }));
            var w = Object.getPrototypeOf,
            _ = w && w(w(P([])));
            _ && _ !== n && r.call(_, a) && (b = _);
            var L = g.prototype = v.prototype = Object.create(b);
            function x(t) { ["next", "throw", "return"].forEach((function(e) {
                    c(t, e, (function(t) {
                        return this._invoke(e, t)
                    }))
                }))
            }
            function O(t, e) {
                function n(i, a, o, s) {
                    var c = u(t[i], t, a);
                    if ("throw" !== c.type) {
                        var l = c.arg,
                        h = l.value;
                        return h && "object" === typeof h && r.call(h, "__await") ? e.resolve(h.__await).then((function(t) {
                            n("next", t, o, s)
                        }), (function(t) {
                            n("throw", t, o, s)
                        })) : e.resolve(h).then((function(t) {
                            l.value = t,
                            o(l)
                        }), (function(t) {
                            return n("throw", t, o, s)
                        }))
                    }
                    s(c.arg)
                }
                var i;
                function a(t, r) {
                    function a() {
                        return new e((function(e, i) {
                            n(t, r, e, i)
                        }))
                    }
                    return i = i ? i.then(a, a) : a()
                }
                this._invoke = a
            }
            function j(t, e, n) {
                var r = h;
                return function(i, a) {
                    if (r === p) throw new Error("Generator is already running");
                    if (r === d) {
                        if ("throw" === i) throw a;
                        return S()
                    }
                    n.method = i,
                    n.arg = a;
                    while (1) {
                        var o = n.delegate;
                        if (o) {
                            var s = C(o, n);
                            if (s) {
                                if (s === m) continue;
                                return s
                            }
                        }
                        if ("next" === n.method) n.sent = n._sent = n.arg;
                        else if ("throw" === n.method) {
                            if (r === h) throw r = d,
                            n.arg;
                            n.dispatchException(n.arg)
                        } else "return" === n.method && n.abrupt("return", n.arg);
                        r = p;
                        var c = u(t, e, n);
                        if ("normal" === c.type) {
                            if (r = n.done ? d: f, c.arg === m) continue;
                            return {
                                value: c.arg,
                                done: n.done
                            }
                        }
                        "throw" === c.type && (r = d, n.method = "throw", n.arg = c.arg)
                    }
                }
            }
            function C(t, n) {
                var r = t.iterator[n.method];
                if (r === e) {
                    if (n.delegate = null, "throw" === n.method) {
                        if (t.iterator["return"] && (n.method = "return", n.arg = e, C(t, n), "throw" === n.method)) return m;
                        n.method = "throw",
                        n.arg = new TypeError("The iterator does not provide a 'throw' method")
                    }
                    return m
                }
                var i = u(r, t.iterator, n.arg);
                if ("throw" === i.type) return n.method = "throw",
                n.arg = i.arg,
                n.delegate = null,
                m;
                var a = i.arg;
                return a ? a.done ? (n[t.resultName] = a.value, n.next = t.nextLoc, "return" !== n.method && (n.method = "next", n.arg = e), n.delegate = null, m) : a: (n.method = "throw", n.arg = new TypeError("iterator result is not an object"), n.delegate = null, m)
            }
            function E(t) {
                var e = {
                    tryLoc: t[0]
                };
                1 in t && (e.catchLoc = t[1]),
                2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]),
                this.tryEntries.push(e)
            }
            function k(t) {
                var e = t.completion || {};
                e.type = "normal",
                delete e.arg,
                t.completion = e
            }
            function T(t) {
                this.tryEntries = [{
                    tryLoc: "root"
                }],
                t.forEach(E, this),
                this.reset(!0)
            }
            function P(t) {
                if (t) {
                    var n = t[a];
                    if (n) return n.call(t);
                    if ("function" === typeof t.next) return t;
                    if (!isNaN(t.length)) {
                        var i = -1,
                        o = function n() {
                            while (++i < t.length) if (r.call(t, i)) return n.value = t[i],
                            n.done = !1,
                            n;
                            return n.value = e,
                            n.done = !0,
                            n
                        };
                        return o.next = o
                    }
                }
                return {
                    next: S
                }
            }
            function S() {
                return {
                    value: e,
                    done: !0
                }
            }
            return y.prototype = g,
            c(L, "constructor", g),
            c(g, "constructor", y),
            y.displayName = c(g, s, "GeneratorFunction"),
            t.isGeneratorFunction = function(t) {
                var e = "function" === typeof t && t.constructor;
                return !! e && (e === y || "GeneratorFunction" === (e.displayName || e.name))
            },
            t.mark = function(t) {
                return Object.setPrototypeOf ? Object.setPrototypeOf(t, g) : (t.__proto__ = g, c(t, s, "GeneratorFunction")),
                t.prototype = Object.create(L),
                t
            },
            t.awrap = function(t) {
                return {
                    __await: t
                }
            },
            x(O.prototype),
            c(O.prototype, o, (function() {
                return this
            })),
            t.AsyncIterator = O,
            t.async = function(e, n, r, i, a) {
                void 0 === a && (a = Promise);
                var o = new O(l(e, n, r, i), a);
                return t.isGeneratorFunction(n) ? o: o.next().then((function(t) {
                    return t.done ? t.value: o.next()
                }))
            },
            x(L),
            c(L, s, "Generator"),
            c(L, a, (function() {
                return this
            })),
            c(L, "toString", (function() {
                return "[object Generator]"
            })),
            t.keys = function(t) {
                var e = [];
                for (var n in t) e.push(n);
                return e.reverse(),
                function n() {
                    while (e.length) {
                        var r = e.pop();
                        if (r in t) return n.value = r,
                        n.done = !1,
                        n
                    }
                    return n.done = !0,
                    n
                }
            },
            t.values = P,
            T.prototype = {
                constructor: T,
                reset: function(t) {
                    if (this.prev = 0, this.next = 0, this.sent = this._sent = e, this.done = !1, this.delegate = null, this.method = "next", this.arg = e, this.tryEntries.forEach(k), !t) for (var n in this)"t" === n.charAt(0) && r.call(this, n) && !isNaN( + n.slice(1)) && (this[n] = e)
                },
                stop: function() {
                    this.done = !0;
                    var t = this.tryEntries[0],
                    e = t.completion;
                    if ("throw" === e.type) throw e.arg;
                    return this.rval
                },
                dispatchException: function(t) {
                    if (this.done) throw t;
                    var n = this;
                    function i(r, i) {
                        return s.type = "throw",
                        s.arg = t,
                        n.next = r,
                        i && (n.method = "next", n.arg = e),
                        !!i
                    }
                    for (var a = this.tryEntries.length - 1; a >= 0; --a) {
                        var o = this.tryEntries[a],
                        s = o.completion;
                        if ("root" === o.tryLoc) return i("end");
                        if (o.tryLoc <= this.prev) {
                            var c = r.call(o, "catchLoc"),
                            l = r.call(o, "finallyLoc");
                            if (c && l) {
                                if (this.prev < o.catchLoc) return i(o.catchLoc, !0);
                                if (this.prev < o.finallyLoc) return i(o.finallyLoc)
                            } else if (c) {
                                if (this.prev < o.catchLoc) return i(o.catchLoc, !0)
                            } else {
                                if (!l) throw new Error("try statement without catch or finally");
                                if (this.prev < o.finallyLoc) return i(o.finallyLoc)
                            }
                        }
                    }
                },
                abrupt: function(t, e) {
                    for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                        var i = this.tryEntries[n];
                        if (i.tryLoc <= this.prev && r.call(i, "finallyLoc") && this.prev < i.finallyLoc) {
                            var a = i;
                            break
                        }
                    }
                    a && ("break" === t || "continue" === t) && a.tryLoc <= e && e <= a.finallyLoc && (a = null);
                    var o = a ? a.completion: {};
                    return o.type = t,
                    o.arg = e,
                    a ? (this.method = "next", this.next = a.finallyLoc, m) : this.complete(o)
                },
                complete: function(t, e) {
                    if ("throw" === t.type) throw t.arg;
                    return "break" === t.type || "continue" === t.type ? this.next = t.arg: "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e),
                    m
                },
                finish: function(t) {
                    for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                        var n = this.tryEntries[e];
                        if (n.finallyLoc === t) return this.complete(n.completion, n.afterLoc),
                        k(n),
                        m
                    }
                },
                catch: function(t) {
                    for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                        var n = this.tryEntries[e];
                        if (n.tryLoc === t) {
                            var r = n.completion;
                            if ("throw" === r.type) {
                                var i = r.arg;
                                k(n)
                            }
                            return i
                        }
                    }
                    throw new Error("illegal catch attempt")
                },
                delegateYield: function(t, n, r) {
                    return this.delegate = {
                        iterator: P(t),
                        resultName: n,
                        nextLoc: r
                    },
                    "next" === this.method && (this.arg = e),
                    m
                }
            },
            t
        } (t.exports);
        try {
            regeneratorRuntime = r
        } catch(i) {
            "object" === typeof globalThis ? globalThis.regeneratorRuntime = r: Function("r", "regeneratorRuntime = r")(r)
        }
    },
    e92b: function(t, e, n) {},
    f904: function(t, e, n) {
        "use strict";
        var r = function() {
            var t = this,
            e = t.$createElement,
            n = t._self._c || e;
            return n("div", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: t.value,
                    expression: "value"
                }],
                staticClass: "mm-loading",
                style: {
                    backgroundColor: t.loadingBgColor
                }
            },
            [t._m(0), t._m(1)])
        },
        i = [function() {
            var t = this,
            e = t.$createElement,
            n = t._self._c || e;
            return n("div", {
                staticClass: "mm-loading-content"
            },
            [n("span", {
                staticClass: "loader"
            })])
        },
        function() {
            var t = this,
            e = t.$createElement,
            n = t._self._c || e;
            return n("div", {
                staticClass: "mm-loading-text"
            },
            [n("span", {
                staticClass: "loading-text"
            },
            [t._v("加载中")])])
        }],
        a = {
            name: "MmLoading",
            props: {
                value: {
                    type: Boolean,
                default:
                    !0
                },
                loadingBgColor: {
                    type: String,
                default:
                    ""
                }
            }
        },
        o = a,
        s = (n("2332"), n("cba8")),
        c = Object(s["a"])(o, r, i, !1, null, null, null);
        e["a"] = c.exports
    }
}]);
//# sourceMappingURL=chunk-0aca0334.0e85ddaa.js.map
