﻿(function () {
    try {
        (function () {
            function Se(a, c, b, d) {
                var e = this; return C(window, "c.i", function () {
                    function f(x) { (x = Te(k, l, "", x)(k, l)) && (S(x.then) ? x.then(g) : g(x)); return x } function g(x) { x && (S(x) ? m.push(x) : Ma(x) && z(function (I) { var Q = I[0]; I = I[1]; S(I) && ("u" === Q ? m.push(I) : h(I, Q)) }, xa(x))) } function h(x, I, Q) { e[I] = rl(k, l, Q || p, I, x) } var k = window; (!k || isNaN(a) && !a) && Ue(); var l = sl(a, Ve, c, b, d), m = [], p = [eh, Te, fh]; p.unshift(tl); var q = A(O, zb), r = N(l); l.id || Wa(gc("Invalid Metrika id: " + l.id, !0)); var t = Wc.o("counters", {}); if (t[r]) return Ab(k,
                        r, "Duplicate counter " + r + " initialization"), t[r]; t[r] = e; Wc.C("counters", t); Wc.Ra("counter", e); z(function (x) { x(k, l) }, Td); z(f, zc); f(ul); h(vl(k, l, m), "destruct", [eh, fh]); Gb(k, F([k, q, f, 1, "a.i"], gh)); z(f, X)
                })()
            } function wl(a, c) { var b = xl(a), d = [yl(a) || zl(a)]; hh(a) && d.push(b); var e = ha(a); b = Qa(a); var f = b.o("synced", {}); d = Y(function (g) { if (c[g]) { var h = (f[g] || 1) + 1440 < e(ib); h && delete f[g]; return h } }, d); b.C("synced", f); return A(function (g) { return { Cj: c[g], Oi: g } }, d) } function zl(a) { a = Al(a); return Bl[a] || a } function xl(a) {
                a =
                ih(a); return Cl[a] || "ru"
            } function Dl(a, c) { var b = "" + c, d = { id: 1, ca: "0" }, e = El(b); e ? d.id = e : -1 === b.indexOf(":") ? (b = Ga(b), d.id = b) : (b = b.split(":"), e = b[1], d.id = Ga(b[0]), d.ca = We(e) ? "1" : "0"); return [Ha(a, d), d] } function Fl(a, c) { Xc[a] || (Xc[a] = []); Xc[a].push(c) } function Gl(a, c, b, d) {
                var e = b.H; if (c.Yj || !e) d(); else {
                    var f = Ud(a), g = Ac(a, ""); e = function () { var t = jh(f); t = "" + t + Hl(t, g); Vd(b, "gdpr", t); d() }; if (3 === c.id) e(); else {
                        var h = H(a), k = h.o("f1"); if (k) k(e); else if (k = (k = jh(f)) ? A(v(Wd, n), k.split(",")) : [], kh(k)) e(); else {
                            var l =
                                Xd(a), m = T(a); var p = /(^|\w+\.)yango(\.yandex)?\.com$/.test(m.hostname) ? { url: "https://yastatic.net/s3/taxi-front/yango-gdpr-popup/", Of: "ar az be en es et fi fr he hy ka kk ky lt lv no pt ro ru sl sr tg tr uk uz zh".split(" "), Xf: "_inversed_buttons" } : void 0; var q = (l = l || !!p) && (-1 !== m.href.indexOf("yagdprcheck=1") || g.o("yaGdprCheck")); m = g.o("gdpr"); g.o("yandex_login") ? (k.push("13"), g.C("gdpr", Bc, 525600)) : l ? G(m, Ub) ? m === Xe ? k.push("12") : k.push("3") : Ye(a) || Il(a) ? k.push("17") : Jl(a) && k.push("28") : k.push("14");
                            var r = v(f, Kl); kh(k) ? (z(r, k), e()) : (Yd.push(e), h.C("f1", function (t, x) { var I = 0; if (x) { var Q = jb(a, x) || ""; I += Q.length } Yd.push(t); 1E6 >= I && Yd.push(t) }), (0, Ze[0])(a).then(U("params.eu")).then(function (t) { if (t || q) { g.C("gdpr_popup", Xe); Ll(a, c); if (db(a)) return Ml(a, r, c); var x = lh(a, f); if (x) return t = Nl(a, r, x, c, p), t.then(F([a, c], Ol)), t } t || r("8"); return K.resolve({ value: Bc, Wd: !0 }) }).then(function (t) {
                                g.uc("gdpr_popup"); if (t) { var x = t.value; t = t.Wd; G(x, Ub) && g.C("gdpr", x, t ? void 0 : 525600) } x = hc(Yd, ia); ic(a, x, 20)(Ra(C(a,
                                    "gdr"), B)); h.C("f1", ia)
                            })["catch"](C(a, "gdp.a")))
                        }
                    }
                }
            } function Ol(a, c) { if (Xd(a)) { var b = Ud(a), d = Ha(a, c); d = d && d.params; b = A(v(Pl, n), $e(b)); d && b.length && d("gdpr", Y(Boolean, b)) } } function Ml(a, c, b) {
                var d = Zd(a, b); return new K(function (e) {
                    var f; if (d) {
                        var g = d.ba, h = u(v("4", c), v(null, e)), k = W(a, h, 2E3, "gdp.f.t"); d.og((f = {}, f.type = "isYandex", f)).then(function (l) { l.isYandex ? (c("5"), g.D(va(["GDPR-ok-view-default", "GDPR-ok-view-detailed"], af), function (m) { e({ value: mh(m[1].type) }) })) : (c("6"), e(null)) })["catch"](h).then(F([a,
                            k], la))
                    } else e({ value: Xe, Wd: !0 })
                })
            } function Ll(a, c) { var b = Zd(a, c); b && b.ba.D(["isYandex"], function () { var d; return d = { type: "isYandex" }, d.isYandex = Xd(a), d }); return b } function Nl(a, c, b, d, e) {
                var f = void 0 === e ? Ql : e; e = f.url; var g = f.Xf; f = Rl(a, f.Of, d.Zj); var h = Zd(a, d); if (!h) return K.resolve({ value: Bc, Wd: !0 }); var k = jc(a, { src: "" + e + f + g + ".js" }); return new K(function (l, m) {
                    k ? (c("7"), k.onerror = function () { var p; c("9"); h.ng((p = {}, p.type = "GDPR-ok-view-default", p)); l(null) }, k.onload = function () {
                        c("10"); b.D(va(["GDPR-ok-view-default",
                            "GDPR-ok-view-detailed"], af), function (p) { var q; p = p.type; h.ng((q = {}, q.type = p, q)); l({ value: mh(p) }) })
                    }) : (c("9"), m(Sa("gdp.e")))
                })
            } function Rl(a, c, b) { a = b || ih(a); return G(a, c) ? a : "en" } function mh(a) { if (G(a, ["GDPR-ok-view-default", "GDPR-ok-view-detailed"])) return Bc; a = a.replace("GDPR-ok-view-detailed-", ""); return G(a, Ub) ? a : Bc } function nh(a, c, b) { var d = n(a, "AppMetricaInitializer"), e = n(d, "init"); if (e) try { D(e, d)(jb(a, c)) } catch (f) { } else oh = W(a, F([a, c, 2 * b], nh), b, "ai.d"); return function () { return la(a, oh) } } function Sl(a) {
                var c =
                    n(a, "speechSynthesis.getVoices"); if (!c) return ""; a = D(c, a.speechSynthesis); return kc(function (b) { return A(v(b, n), Tl) }, a())
            } function Ul(a, c, b) { return L("x", A(u(O, oa("concat", "" + a), v(b, n)), c)) } function Vl(a, c) {
                var b = c.mh; if (!Wl(a, b)) return ""; var d = []; a: { var e = Xl(a, b); try { var f = F(e, u)()(); break a } catch (I) { if ("ccf" === I.message) { f = null; break a } Wa(I) } f = void 0 } if (Ta(f)) var g = ""; else try { g = f.toDataURL() } catch (I) { g = "" } (f = g) && d.push(f); var h = b.getContextAttributes(); try {
                    var k = Ka(b.getSupportedExtensions, "getSupportedExtensions") ?
                        b.getSupportedExtensions() || [] : []
                } catch (I) { k = [] } k = L(";", k); f = bf(b.getParameter(b.ALIASED_LINE_WIDTH_RANGE), b); e = bf(b.getParameter(b.ALIASED_POINT_SIZE_RANGE), b); g = b.getParameter(b.ALPHA_BITS); h = h && h.antialias ? "yes" : "no"; var l = b.getParameter(b.BLUE_BITS), m = b.getParameter(b.DEPTH_BITS), p = b.getParameter(b.GREEN_BITS), q = b.getExtension("EXT_texture_filter_anisotropic") || b.getExtension("WEBKIT_EXT_texture_filter_anisotropic") || b.getExtension("MOZ_EXT_texture_filter_anisotropic"); if (q) {
                    var r = b.getParameter(q.MAX_TEXTURE_MAX_ANISOTROPY_EXT);
                    0 === r && (r = 2)
                } r = {
                    pk: k, "webgl aliased line width range": f, "webgl aliased point size range": e, "webgl alpha bits": g, "webgl antialiasing": h, "webgl blue bits": l, "webgl depth bits": m, "webgl green bits": p, "webgl max anisotropy": q ? r : null, "webgl max combined texture image units": b.getParameter(b.MAX_COMBINED_TEXTURE_IMAGE_UNITS), "webgl max cube map texture size": b.getParameter(b.MAX_CUBE_MAP_TEXTURE_SIZE), "webgl max fragment uniform vectors": b.getParameter(b.MAX_FRAGMENT_UNIFORM_VECTORS), "webgl max render buffer size": b.getParameter(b.MAX_RENDERBUFFER_SIZE),
                    "webgl max texture image units": b.getParameter(b.MAX_TEXTURE_IMAGE_UNITS), "webgl max texture size": b.getParameter(b.MAX_TEXTURE_SIZE), "webgl max varying vectors": b.getParameter(b.MAX_VARYING_VECTORS), "webgl max vertex attribs": b.getParameter(b.MAX_VERTEX_ATTRIBS), "webgl max vertex texture image units": b.getParameter(b.MAX_VERTEX_TEXTURE_IMAGE_UNITS), "webgl max vertex uniform vectors": b.getParameter(b.MAX_VERTEX_UNIFORM_VECTORS), "webgl max viewport dims": bf(b.getParameter(b.MAX_VIEWPORT_DIMS), b), "webgl red bits": b.getParameter(b.RED_BITS),
                    "webgl renderer": b.getParameter(b.RENDERER), "webgl shading language version": b.getParameter(b.SHADING_LANGUAGE_VERSION), "webgl stencil bits": b.getParameter(b.STENCIL_BITS), "webgl vendor": b.getParameter(b.VENDOR), "webgl version": b.getParameter(b.VERSION)
                }; cf(d, r, ": "); a: { try { var t = b.getExtension("WEBGL_debug_renderer_info"); if (t) { var x = { "webgl unmasked vendor": b.getParameter(t.UNMASKED_VENDOR_WEBGL), "webgl unmasked renderer": b.getParameter(t.UNMASKED_RENDERER_WEBGL) }; break a } } catch (I) { } x = {} } cf(d, x);
                if (!b.getShaderPrecisionFormat) return L("~", d); cf(d, Yl(b)); return L("~", d)
            } function cf(a, c, b) { void 0 === b && (b = ":"); z(function (d) { return a.push("" + d[0] + b + d[1]) }, xa(c)) } function Zl(a, c, b, d) { c = d.o("cc"); d = F(["cc", ""], d.C); if (c) { var e = c.split("&"); c = e[0]; if ((e = (e = e[1]) && Ga(e)) && 1440 < ha(a)(ib) - e) return d(); b.C("cc", c) } else ma(0)(c) || d() } function $l(a, c, b, d) {
                return pa(c, function (e) {
                    if ("0" === n(e, "settings.pcs") && !Yc(a)) if (e = d.o("zzlc"), V(e) || Ta(e) || "na" === e) {
                        e = "ru"; var f = df(a, 68), g = ef(a, 79); if (f || g) e = "md";
                        if (f = $a(a)) { var h = f("iframe"); y(h.style, { display: "none", width: "1px", height: "1px", visibility: "hidden" }); h.src = "https://mc.yandex." + e + ph("L21ldHJpa2EvenpsYy5odG1s"); if (e = Vb(a)) { e.appendChild(h); var k = 0, l = ja(a).D(a, ["message"], C(a, "zz.m", function (m) { (m = n(m, "data")) && m.substr && "__ym__zz" === m.substr(0, 8) && (lc(h), m = m.substr(8), d.C("zzlc", m), b.C("zzlc", m), l(), la(a, k)) })); k = W(a, u(l, v(h, lc)), 3E3) } }
                    } else b.C("zzlc", e)
                })
            } function am(a, c, b) {
                var d, e; c = eb(v(a, n), bm); c = V(c) ? null : n(a, c); if (n(a, "navigator.onLine") &&
                    c && c && n(c, "prototype.constructor.name")) {
                        var f = new c((d = {}, d.iceServers = [], d)); a = n(f, "createDataChannel"); S(a) && (D(a, f, "y.metrika")(), a = n(f, "createOffer"), S(a) && !a.length && (a = D(a, f)(), d = n(a, "then"), S(d) && D(d, a, function (g) { var h = n(f, "setLocalDescription"); S(h) && D(h, f, g, B, B)() })(), y(f, (e = {}, e.onicecandidate = function () {
                            var g, h = n(f, "close"); if (S(h)) {
                                h = D(h, f); try { var k = (g = n(f, "localDescription.sdp")) && g.match(/c=IN\s[\w\d]+\s([\w\d:.]+)/) } catch (l) {
                                    f.onicecandidate = B; "closed" !== f.iceConnectionState && h();
                                    return
                                } k && 0 < k.length && (g = mc(k[1]), b.C("pp", g)); f.onicecandidate = B; h()
                            }
                        }, e))))
                }
            } function cm(a, c, b) { var d, e = Zc(a, c); if (e) { e.ba.D(["gpu-get"], function () { var h; return h = {}, h.type = "gpu-get", h.pu = b.o("pu"), h }); var f = n(a, "opener"); if (f) { var g = W(a, F([a, c, b], qh), 200, "pu.m"); e.De(f, (d = {}, d.type = "gpu-get", d), function (h, k) { var l = n(k, "pu"); l && (la(a, g), b.C("pu", l)) }) } else qh(a, c, b) } } function qh(a, c, b) { var d = n(a, "location.host"); a = $d(a, c); b.C("pu", "" + mc(d) + a) } function rh(a, c, b) {
                c = Ac(a, void 0, c); c = sh(a, c.o("phc_settings") ||
                    ""); var d = n(c, "clientId"), e = n(c, "orderId"), f = n(c, "service_id"), g = n(c, "phones") || []; return d && e && g ? dm(a, b.pc, { Cg: em }).bg(g).then(function (h) { return fm(b, { Jb: d, Tb: e, rg: f }, h.oa, g, h.za) })["catch"](function () { }) : K.resolve()
            } function em(a, c, b) { a = gm(b.Yc); if ("href" === b.Ae) { var d = b.xb; c = d.href; b = c.replace(a, b.eb); if (c !== b) return d.href = b, !0 } else if ((a = null === (d = b.xb.textContent) || void 0 === d ? void 0 : d.replace(a, b.eb)) && a !== b.xb.textContent) return b.xb.textContent = a, !0; return !1 } function fm(a, c, b, d, e) {
                var f;
                c.Jb && c.Tb && (c.Jb === a.Jb && c.Tb === a.Tb || y(a, c, { oa: {}, jb: !0 }), 0 < e && La(a.za, [e]), z(function (g) { var h, k, l = g[0]; g = g[1]; var m = +(a.oa[l] && a.oa[l][g] ? a.oa[l][g] : 0); y(a.oa, (h = {}, h[l] = (k = {}, k[g] = m, k), h)) }, d), z(function (g) { var h, k, l = g[0]; g = g[1]; var m = 1 + (a.oa[l] ? a.oa[l][g] : 0); y(a.oa, (h = {}, h[l] = (k = {}, k[g] = m, k), h)) }, b), a.Lf && (a.jb || b.length) && ((c = Ha(a.l, a.pc)) && c.params("__ym", "phc", (f = {}, f.clientId = a.Jb, f.orderId = a.Tb, f.service_id = a.rg, f.phones = a.oa, f.performance = a.za, f)), a.jb = !1))
            } function hm(a) {
                a = $a(a); if (!a) return "";
                a = a("video"); try { var c = oa("canPlayType", a), b = kc(function (d) { return A(u(O, oa("concat", d + "; codecs=")), im) }, th); return A(c, [].concat(th, b)) } catch (d) { return "canPlayType" }
            } function jm(a) { var c = n(a, "matchMedia"); if (c && Da("matchMedia", c)) { var b = oa("matchMedia", a); return M(function (d, e) { d[e] = b("(" + e + ")"); return d }, {}, km) } } function Yl(a) {
                return M(function (c, b) {
                    var d = b[0], e = b[1]; c[d + " precision"] = n(e, "precision") || "n"; c[d + " precision rangeMin"] = n(e, "rangeMin") || "n"; c[d + " precision rangeMax"] = n(e, "rangeMax") ||
                        "n"; return c
                }, {}, [["webgl vertex shader high float", a.getShaderPrecisionFormat(a.VERTEX_SHADER, a.HIGH_FLOAT)], ["webgl vertex shader medium", a.getShaderPrecisionFormat(a.VERTEX_SHADER, a.MEDIUM_FLOAT)], ["webgl vertex shader low float", a.getShaderPrecisionFormat(a.VERTEX_SHADER, a.LOW_FLOAT)], ["webgl fragment shader high float", a.getShaderPrecisionFormat(a.FRAGMENT_SHADER, a.HIGH_FLOAT)], ["webgl fragment shader medium float", a.getShaderPrecisionFormat(a.FRAGMENT_SHADER, a.MEDIUM_FLOAT)], ["webgl fragment shader low float",
                    a.getShaderPrecisionFormat(a.FRAGMENT_SHADER, a.LOW_FLOAT)], ["webgl vertex shader high int", a.getShaderPrecisionFormat(a.VERTEX_SHADER, a.HIGH_INT)], ["webgl vertex shader medium int", a.getShaderPrecisionFormat(a.VERTEX_SHADER, a.MEDIUM_INT)], ["webgl vertex shader low int", a.getShaderPrecisionFormat(a.VERTEX_SHADER, a.LOW_INT)], ["webgl fragment shader high int", a.getShaderPrecisionFormat(a.FRAGMENT_SHADER, a.HIGH_INT)], ["webgl fragment shader medium int", a.getShaderPrecisionFormat(a.FRAGMENT_SHADER, a.MEDIUM_INT)],
                ["webgl fragment shader low int precision", a.getShaderPrecisionFormat(a.FRAGMENT_SHADER, a.LOW_INT)]])
            } function Xl(a, c) {
                return [function () { var b = c.createBuffer(); b && c.getParameter && Da("getParameter", c.getParameter) || ff(); c.bindBuffer(c.ARRAY_BUFFER, b); var d = new a.Float32Array(lm); c.bufferData(c.ARRAY_BUFFER, d, c.STATIC_DRAW); b.Ki = 3; b.Wi = 3; d = c.createProgram(); var e = c.createShader(c.VERTEX_SHADER); d && e || ff(); return { ye: d, Wj: e, Vj: b } }, function (b) {
                    var d = b.ye, e = b.Wj; c.shaderSource(e, "attribute vec2 attrVertex;varying vec2 varyinTexCoordinate;uniform vec2 uniformOffset;void main(){varyinTexCoordinate=attrVertex+uniformOffset;gl_Position=vec4(attrVertex,0,1);}");
                    c.compileShader(e); c.attachShader(d, e); (d = c.createShader(c.FRAGMENT_SHADER)) || ff(); return y(b, { Uh: d })
                }, function (b) { var d = b.ye, e = b.Uh; c.shaderSource(e, "precision mediump float;varying vec2 varyinTexCoordinate;void main() {gl_FragColor=vec4(varyinTexCoordinate,0,1);}"); c.compileShader(e); c.attachShader(d, e); c.linkProgram(d); c.useProgram(d); return b }, function (b) {
                    var d = b.ye; b = b.Vj; d.Uj = c.getAttribLocation(d, "attrVertex"); d.Yi = c.getUniformLocation(d, "uniformOffset"); c.enableVertexAttribArray(d.Rk); c.vertexAttribPointer(d.Uj,
                        b.Ki, c.FLOAT, !1, 0, 0); c.uniform2f(d.Yi, 1, 1); c.drawArrays(c.TRIANGLE_STRIP, 0, b.Wi); return c.canvas
                }]
            } function Wl(a, c) { if (!S(a.Float32Array)) return !1; var b = n(c, "canvas"); if (!b || !Da("toDataUrl", b.toDataURL)) return !1; try { c.createBuffer() } catch (d) { return !1 } return !0 } function bf(a, c) { c.clearColor(0, 0, 0, 1); c.enable(c.DEPTH_TEST); c.depthFunc(c.LEQUAL); c.clear(c.COLOR_BUFFER_BIT | c.DEPTH_BUFFER_BIT); return "[" + n(a, "0") + ", " + n(a, "1") + "]" } function mm(a, c, b) {
                function d(q) {
                    return function () {
                        var r = b.o("scip", "") + q;
                        b.C("scip", r)
                    }
                } var e, f = $c(a, "ci"); f = Bb(a, f); var g = gf(a), h = ha(a)(ib), k = ["sync.cook.int"], l = uh(g.o("sci")); if (!l || 1440 < h - l) {
                    b.C("scip", "0"); var m = d("a"), p = Cc(a, c); return f({ Y: { Da: k, Cb: 1500, jd: !0 }, G: (e = {}, e.duid = p, e.hid = "" + Hb(a), e) }, ["https://an.yandex.ru/sync_cookie"]).then(function (q) {
                        q = n(q.$c, "CookieMatchUrls"); ea(q) || (q = []); Na(q) ? d("1")() : m(); var r = $c(a, "c"), t = Bb(a, r); q = A(function (x, I) { var Q = "" + x + (nc(x, "?") ? "&" : "?") + "duid=" + p; return t({ Y: { Da: k, Cb: 1500 } }, ["https://" + Q]).then(B, u(d("b"), d("" + I))) },
                            Y(Ea, q)); return K.all(q)
                    }, m).then(function () { var q = b.o("scip"); !q || nc(q, "a") || nc(q, "b") || (g.C("sci", h), d("2")()) }, B)
                } return K.resolve()
            } function vh(a) { return { aa: function (c, b) { if (!c.H) return b(); var d = H(a).o("fid"); !wh && d && (Vd(c, "fid", d), wh = !0); return b() } } } function nm(a, c) { var b = a.document; if (G(b.readyState, ["interactive", "complete"])) Gb(a, c); else { var d = ja(a), e = d.D, f = d.cc, g = function () { f(b, ["DOMContentLoaded"], g); f(a, ["load"], g); c() }; e(b, ["DOMContentLoaded"], g); e(a, ["load"], g) } } function hf(a) {
                return {
                    aa: function (c,
                        b) { var d = c.H; if (d) { var e = H(a).o("adBlockEnabled"); e && d.C("adb", e) } b() }
                }
            } function om(a) { var c = C(a, "i.clch", pm); ja(a).D(a.document, ["click"], D(c, null, a), { passive: !1 }); return function (b) { var d = qa.Ua, e = a.Ya[qa.lc], f = !!e._informer; e._informer = y({ domain: "informer.yandex.ru" }, b); f || jc(a, { src: d + "//informer.yandex.ru/metrika/informer.js" }) } } function Dc(a, c) { return { aa: function (b, d) { jf(b) ? d() : pa(c, function (e) { var f; if (e = n(e, "settings.hittoken")) e = (f = {}, f.hittoken = e, f), b.G = y(b.G || {}, e); d() }) } } } function qm(a,
                c) { var b = Qa(a); if ("" === b.o("cc")) { var d = v("cc", b.C); d(0); var e = ha(a), f = H(a); f = u(U(ad({ $c: 1 }) + ".c"), bd(function (g) { d(g + "&" + e(ib)) }), v("cc", f.C)); ya(a, "6", c)({ Y: { jd: !0, Lg: !1 } }, ["https://mc.yandex.md/cc"]).then(f)["catch"](u(bd(function () { var g = e(ib); b.C("cc", "&" + g) }), C(a, "cc"))) } } function ae(a, c) { if (!c) return !1; var b = T(a); return (new RegExp(c)).test("" + b.pathname + b.hash + b.search) } function rm(a, c) { return pa(c, function (b) { var d = n(b, "settings.dr"); return { Ch: sm(a, d), isEnabled: n(b, "settings.auto_goals") } }) }
            function tm(a, c, b, d, e) { b = kf(a.document.body, b); d = kf(a.document.body, d); G(e.target, [b, d]) && lf(a, c) } function xh(a, c, b, d) { (b = um(a, d, b)) && lf(a, c, b) } function yh(a, c) { var b = zh(a, c); return vm(a, b) } function zh(a, c) { var b = kf(a.document.body, c); return b ? wm(a, b) : "" } function lf(a, c, b) { if (c = Ha(a, c)) a = Ec(["dr", b || "" + Ua(a, 10, 99)]), c.params(Ec(["__ym", a])) } function kf(a, c) { var b = null; try { b = c ? Fc(c, a) : b } catch (d) { } return b } function Ah(a) {
                a = ra(ph(a)); return A(function (c) {
                    c = c.charCodeAt(0).toString(2); return Bh("0", 8,
                        c)
                }, a)
            } function wm(a, c) { if (!c) return ""; var b = [], d = n(a, "document"); mf(a, c, function (e) { if (e.nodeType === d.TEXT_NODE) var f = e.textContent; else e instanceof a.HTMLImageElement ? f = e.alt : e instanceof a.HTMLInputElement && (f = e.value); (f = f && f.trim()) && b.push(f) }); return 0 === b.length ? "" : b.join(" ") } function xm(a, c, b) { a = za(b); b = a[1]; "track" === a[0] && c({ version: "0", wc: b }) } function zm(a, c, b) { if (b) { var d = b.version; (b = n(Am, d + "." + b.wc)) && (c && G(b, Bm) || a("ym-" + b + "-" + d)) } } function Cm(a, c, b) {
                var d, e = Ch(a, c), f = T(a); f = be(f.protocol +
                    "//" + f.hostname + f.pathname); c = $d(a, c); var g = ""; do g += Ua(a); while (g.length < c.length); g = g.slice(0, c.length); a = ""; for (var h = 0; h < c.length; h += 1)a += (c.charCodeAt(h) + g.charCodeAt(h) - 96) % 10; c = [g, a]; a = c[0]; c = c[1]; return (d = {}, d.mf = "https://adstat.yandex.ru/track?service=metrika&id=" + c + "&mask=" + a + "&ref=" + f, d.rt = "https://" + e + ".mc.yandex.ru/watch/3/1?browser-info=rt:1", d)[b]
            } function Dm(a, c, b, d) {
                a = n(d, "data"); if (Ea(a)) {
                    var e = a.split("*"); a = e[0]; var f = e[1]; e = e[2]; "sc.frame" === a ? d.source.postMessage("sc.images*" +
                        c, "*") : "sc.image" === a && f === c && b(e)
                }
            } function Em(a, c) { var b = Qa(a), d = "wv2rf:" + N(c), e = c.jc, f = nf(a), g = b.o(d), h = c.Nj; return V(f) || Ta(g) ? Aa(function (k, l) { pa(c, function (m) { var p = n(m, "settings.webvisor.forms"); p = !n(m, "settings.x3") && p; f = nf(a) || n(m, "settings.eu"); b.C(d, cd(p)); l({ jc: e, Jf: !!f, $f: p, Eg: h }) }) }) : of({ jc: e, Jf: f, $f: !!Ga(g), Eg: h }) } function Fm() {
                var a = M(function (c, b) { c[b[0]] = { pd: 0, jh: 1 / b[1] }; return c }, {}, [["blur", .0034], ["change", .0155], ["click", .01095], ["deviceRotation", 2E-4], ["focus", .0061], ["mousemove",
                    .5132], ["scroll", .4795], ["selection", .0109], ["touchcancel", 2E-4], ["touchend", .0265], ["touchforcechange", .0233], ["touchmove", .1442], ["touchstart", .027], ["zoom", .0014]]); return { bh: function (c) { if (c.length) return { type: "activity", data: M(function (b, d) { var e = a[d]; return Math.round(b + e.pd * e.jh) }, 0, ca(a)) } }, Zi: function (c) { c && (c = a[c.data.type]) && (c.pd += 1) } }
            } function Gm(a) {
                if (a.type && a.event) switch (a.type) {
                    case "page": var c = a.data, b = c.Ia, d = c.ed, e = c.content; delete c.Ia; delete c.ed; delete c.content; c = {
                        type: "page",
                        data: { M: a.M || 0, content: e, Ia: b, ed: d, $: c }
                    }; a.L && (c.L = a.L); return c; case "event": a: {
                        c = { type: "event", L: a.L, data: { M: a.M, type: a.event, $: {} } }; b = y({}, a.data); switch (a.event) {
                            case "zoom": c.data.$ = { Mg: { x: 0, y: 0, level: 0 }, Og: b, duration: 1 }; break; case "keystroke": c.data.$ = b.Mc; break; case "deviceRotation": case "resize": c.data.$ = b; break; case "windowfocus": case "windowblur": case "focus": c.data.target = b.target; c.data.$ = null; break; case "touchmove": case "touchstart": case "touchend": case "touchcancel": case "touchforcechange": case "scroll": case "change": case "click": case "mousemove": case "mousedown": case "mouseup": case "selection": case "stylechange": c.data.target =
                                b.target; delete b.target; c.data.$ = b; break; case "srcset": a = { type: "mutation", L: a.L, data: { M: a.M, $: { Ka: [{ od: [{ id: b.target, Ib: { src: { Qc: "", n: b.value, r: !1 } }, Fa: 0 }] }], index: 0 } } }; break a
                        }a = c
                    } break; case "mutation": return Hm(a)
                }return a
            } function Hm(a) {
                var c = y({}, a.data), b = []; switch (a.event) {
                    case "tc": b = [{ d: [{ id: c.target, sc: { Qc: "", n: c.value }, Fa: c.index }] }]; break; case "ac": b = [{ od: [{ id: c.target, Ib: M(function (d, e) { var f = e[1]; d[e[0]] = { Qc: "", n: f, r: na(f) }; return d }, {}, xa(c.attributes)), Fa: c.index }] }]; break; case "re": b =
                        [{ Ye: A(function (d) { return { id: d, Fa: c.index } }, c.ma) }]; break; case "ad": b = [{ bf: A(function (d) { return { id: d.id, Sf: d.name, Tf: d.Rf, ne: d.parent, qe: d.te, fe: d.next, Ib: d.attributes, Fa: c.index, sc: d.content, Wa: d.hidden } }, c.ma) }]
                }return { type: "mutation", L: a.L, data: { M: a.M, $: { Ka: b, index: c.index } } }
            } function Im(a) {
                return {
                    Wh: function () { var c = a.document.querySelector("base[href]"); return c ? c.getAttribute("href") : null }, Yh: function () {
                        if (a.document.doctype) {
                            var c = y({ name: "html", publicId: "", systemId: "" }, a.document.doctype),
                            b = c.publicId, d = c.systemId; return "<!DOCTYPE " + L("", [c.name, b ? ' PUBLIC "' + b + '"' : "", !b && d ? " SYSTEM" : "", d ? ' "' + d + '"' : ""]) + ">"
                        } return null
                    }, ki: function () { try { if (!a.sessionStorage) return null; var c = a.sessionStorage.getItem("__vw_tab_guid"), b = !1; try { var d = a.opener ? a.opener.sessionStorage : null; b = !!d && c === d.getItem("__vw_tab_guid") } catch (e) { b = !0 } if (!c || b) c = Dh(), a.sessionStorage.setItem("__vw_tab_guid", c); return c } catch (e) { return null } }
                }
            } function Jm(a, c, b) {
                var d = dd(a), e = ja(a), f = db(a), g = c.Id(), h = !n(a, "postMessage") ||
                    f && !n(a, "parent.postMessage"), k = v(d, O); if (h) { if (!g) return W(a, D(d.O, d, "i", { wa: !1 }), 10), { Hd: k, lg: B, stop: B }; Wa(Sa()) } d.D(["sr"], function (r) { var t, x = Eh(a, r.source); x && pf(a, r.source, (t = {}, t.type = "\u043d", t.frameId = c.ua().Z(x), t)) }); d.D(["sd"], function (r) { var t = r.data; r = r.source; (a === r || Eh(a, r)) && d.O("sdr", { data: t.data, M: t.frameId }) }); if (f && !g) {
                        var l = !1, m = 0, p = function () { var r; pf(a, a.parent, (r = {}, r.type = "sr", r)); m = W(a, p, 100, "if.i") }; p(); var q = function (r) {
                            d.na(["\u043d"], q); la(a, m); var t = Gc(a, r.origin).host;
                            l || r.source !== a.parent || !r.data.frameId || "about:blank" !== T(a).host && !G(t, b) || (l = !0, d.O("i", { M: r.data.frameId, wa: !0 }))
                        }; d.D(["\u043d"], q); W(a, function () { d.na(["\u043d"], q); la(a, m); l || (l = !0, d.O("i", { wa: !1 })) }, 2E3, "if.r")
                    } e = e.D(a, ["message"], function (r) { var t = rb(a, r.data); t && t.type && G(t.type, Km) && d.O(t.type, { data: t, source: r.source, origin: r.origin }) }); return { Hd: k, lg: function (r) { var t; return pf(a, a.parent, (t = {}, t.frameId = c.Id(), t.data = r, t.type = "sd", t)) }, stop: e }
            } function Eh(a, c) {
                try {
                    return eb(u(U("contentWindow"),
                        ma(c)), ra(a.document.querySelectorAll("iframe")))
                } catch (b) { return null }
            } function pf(a, c, b) { a = jb(a, b); c.postMessage(a, "*") } function Dh() { return Wb() + Wb() + "-" + Wb() + "-" + Wb() + "-" + Wb() + "-" + Wb() + Wb() + Wb() } function Wb() { return Math.floor(65536 * (1 + Math.random())).toString(16).substring(1) } function Lm(a, c) { if (Ea(c)) return c; var b = a.textContent; if (Ea(b)) return b; b = a.data; if (Ea(b)) return b; b = a.nodeValue; return Ea(b) ? b : "" } function Mm(a, c, b, d, e) {
                void 0 === d && (d = {}); void 0 === e && (e = Ia(c)); var f = y(M(function (h, k) {
                    h[k.name] =
                    k.value; return h
                }, {}, ra(c.attributes)), d); y(f, Nm(c, e, f)); var g = (d = M(function (h, k) { var l = k[0], m = ce(a, c, l, k[1], b, e), p = m.value; na(p) ? delete f[l] : f[l] = p; return h || m.pb }, !1, xa(f))) && ed(c); g && (f.width = g.width, f.height = g.height); return { pb: d, fh: f }
            } function Nm(a, c, b) { var d = {}; qf(a) ? d.value = a.value || b.value : "IMG" !== c || b.src || (d.src = ""); return d } function ce(a, c, b, d, e, f) {
                void 0 === f && (f = Ia(c)); var g = { pb: !1, value: d }; if (qf(c)) "value" === b ? !na(d) && "" !== d && (b = e.Jf, f = e.$f, e = fd(a, c), f ? (b = gd(a, c, b), a = b.Vd, c = b.Ed, b = b.sb,
                    g.pb = !c && (e || a)) : (g.pb = e, b = !de(c)), b || e) && (g.value = L("", A(v("\u2022", O), ("" + d).split("")))) : "checked" === b && G((c.getAttribute("type") || "").toLowerCase(), Om) ? g.value = c.checked ? "checked" : null : Pm.test(b) && rf(a, c) && (g.value = null); else if ("IMG" === f && "src" === b) (e = fd(a, c)) ? (g.pb = e, g.value = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=") : g.value = (c.getAttribute("srcset") ? c.currentSrc : "") || c.src; else if ("A" === f && "href" === b) g.value = d ? "#" : "";
                    else if (G(b, ["srcset", "integrity", "crossorigin", "password"]) || 2 < b.length && 0 === sf(b, "on") || "IFRAME" === f && "src" === b || "SCRIPT" === f && G(b, ["src", "type"])) g.value = null; return g
            } function tf(a, c, b, d) { void 0 === d && (d = "wv2"); return { J: function (e, f) { return C(a, d + "." + b + "." + f, e, void 0, c) } } } function Qm(a, c, b, d, e) {
                function f() { k && k.stop() } if (!c.Eb) return K.resolve(B); var g = ya(a, "4", c), h = { H: Ba() }; b = new Rm(a, b, function (l, m, p) {
                    var q; if (!g) return K.resolve(); m = "wv-data=" + Fh(l, !0); return g(y({}, h, {
                        Y: { fa: m }, G: (q = {}, q["wv-check"] =
                            "" + Sm(l), q["wv-type"] = "0", q)
                    }), c, p)["catch"](C(a, "m.n.m.s"))
                }); var k = Tm(a, b, d, e); return pa(c, function (l) { l && H(a).C("isEU", n(l, "settings.eu")); H(a).o("oo") || k && Gh(a, l) && k.start(); return f })
            } function Tm(a, c, b, d) {
                var e = a.document, f = [], g = ja(a), h = ":submit" + Math.random(), k = [], l = D(c.flush, c), m = ka(function (r, t) { C(a, "hfv." + r, function () { try { var x = t.type } catch (I) { return } x = G(x, d); c.push(t, { type: r }); x && l() })() }), p = C(a, "sfv", function () {
                    var r = b(a), t = Um(a); z(function (x) { f.push(g.D(x.target, [x.event], m(x.type))) },
                        r); z(function (x) { f.push(g.D(x.target, [x.event], C(a, "hff." + x.type + "." + x.event, function (I) { z(Aa({ l: a, ra: I, flush: l }), x.N) }))) }, t); k = Hh(a, "form", e); e.attachEvent && (r = Hh(a, "form *", e), z(function (x) { f.push(g.D(x, ["submit"], m("form"))) }, k), z(function (x) { uf(x) && f.push(g.D(x, ["change"], m("formInput"))) }, r)); z(function (x) { var I = x.submit; if (S(I) || "object" === typeof I && Vm.test("" + I)) x[h] = I, x.submit = C(a, "fv", function () { var Q = { target: x, type: "submit" }; m("document")(Q); return x[h]() }) }, k)
                }), q = C(a, "ufv", function () {
                    z(ia,
                        f); z(function (r) { r && (r.submit = r[h]) }, k); c.flush()
                }); return { start: p, stop: q }
            } function Wm(a, c) { var b = Y(function (e) { return 0 < e.N.length }, c), d = Ih({ target: a.document, type: "document" }); return A(u(O, d, Xm(a)), b) } function Jh(a, c) { var b = a.l, d = [], e = c.form; if (!c[Va] && e) { var f = e.elements; e = e.length; for (var g = 0; g < e; g += 1) { var h = f[g]; ee(h) && !h[Va] && La(d, oc(b, h)) } } else La(d, oc(b, c)); return d } function vf(a) { if (hd) { hd = !1; var c = sb(a.l), b = []; fb(a.l, b, 15) ? a = [] : (R(b, c), a = b); return a } } function Kh(a) {
                if (!hd) {
                    hd = !0; a = sb(a.l);
                    var c = []; Ib(c, 14); R(c, a); return c
                }
            } function Ym(a, c, b) { var d = c[Va]; if (d) { a: { var e = sb(a), f = c[Va]; if (0 < f) { var g = []; c = wf(a, c); var h = pc[f], k = c[0] + "x" + c[1], l = c[2] + "x" + c[3]; if (k !== h.Wf) { h.Wf = k; if (fb(a, g, 9)) { a = []; break a } R(g, e); R(g, f); R(g, c[0]); R(g, c[1]) } if (l !== h.size) { h.size = l; if (fb(a, g, 10)) { a = []; break a } R(g, e); R(g, f); R(g, c[2]); R(g, c[3]) } if (g.length) { a = g; break a } } a = [] } La(b, a) } return d } function gd(a, c, b) {
                void 0 === b && (b = !1); if ("button" === c.getAttribute("type")) return { sb: !1, Ed: !1, Vd: !1 }; var d = de(c), e = xf(c);
                a = yf(a, c) || b && e; return { sb: !(d || !a), Ed: d, Vd: e }
            } function yf(a, c) { return rf(a, c) || id(a, c) ? !0 : fd(a, c) } function xf(a) { if (!a) return !1; var c = a.placeholder, b = a.type; a = Y(Lh, [a.className, a.id, a.name]); return b && G(b, Zm) || Oa(Xa($m), a) || Lh(c) && an.test(c) } function Lh(a) { return !!(a && 2 < a.length) } function qf(a) { try { var c = Ia(a); if (G(c, zf)) { if ("INPUT" === c) { var b = a.type; return !b || G(b.toLocaleLowerCase(), bn) } return !0 } } catch (d) { } return !1 } function Mh(a, c) { return c && qc("(ym-disable-submit|-metrika-noform)", c) } function de(a) {
                return a &&
                    qc("ym-record-keys", a)
            } function cn(a, c) { return L("", A(function (b) { return a.isNaN(b) ? dn.test(b) ? (b = b.toUpperCase() === b ? en : fn, String.fromCharCode(Ua(a, b[0], b[1]))) : b : "" + Ua(a, 0, 9) }, c.split(""))) } function fd(a, c) { if (na(c)) return !1; if (Af(c)) { var b = c.parentNode; return (na(b) ? 0 : 11 === b.nodeType) ? !1 : fd(a, c.parentNode) } if (gn.test(c.className)) return !0; b = Nh(a); if (!b) return !1; var d = b.call(c, ".ym-hide-content *"); return d && (hn.test(c.className) || b.call(c, ".ym-hide-content .ym-show-content *")) ? !1 : d } function Gh(a,
                c) { var b = Xb(a), d = b.o("visorc"); G(d, ["w", "b"]) || (d = ""); Oh(a) && Ph(a, fe, "visorc") && !jn.test(kb(a) || "") || (d = "b"); var e = n(c, "settings.webvisor.recp"); if (!a.isFinite(e) || 0 > e || 1 < e) d = "w"; d || (d = H(a).o("hitId") % 1E4 / 1E4 < e ? "w" : "b"); b.C("visorc", d, 30); return "w" === d } function Qh(a) { var c = Bf(a).isEnabled, b = !1; try { b = (b = 2 === (new a.Blob(["\u00e4"])).size) && 2 === (new a.Blob([new a.Uint8Array([1, 2])])).size } catch (d) { } return Cf(Boolean, [!c, b, a.Uint8Array, n(a, "Uint8Array.prototype.slice")]) } function Df(a, c) {
                    var b = c[1][3],
                    d = 0, e = new a.Uint8Array(c[0]); return hc([b], function (f, g) { if (!f) return e; f[0](a, f[2], e, d); d += f[1]; g.push(f[3]); return e })
                } function ge(a, c, b) {
                    a = c(b); c = [B, 0, 0]; var d = [0, c, c, void 0]; return hc(a, function (e, f) {
                        var g = e[0], h = e[1], k = e[2]; if (0 === g) return k(d, h), d; if (void 0 === h || null === h) return d; var l = g >> 3; if (g & 1) rc(d, lb(l)), h = k(h), l & 2 && rc(d, lb(h[1])), rc(d, h); else if (g & 4) for (g = h.length - 1; 0 <= g;) { var m = k(h[g]); m.push([0, 0, Ef]); m.push([0, lb(l), rc]); m.unshift([0, 0, Ff]); f.push.apply(f, m); --g } else if (g & 2) {
                            k = e[2];
                            var p = e[3], q = e[4], r = e[5], t = ca(h); for (g = t.length - 1; 0 <= g;)m = t[g], m = [[0, 0, Ff], [q, h[m], r], [k, m, p], [0, 0, Ef], [0, lb(l), rc]], f.push.apply(f, m), --g
                        } else m = k(h), m.push([0, 0, Ef]), m.push([0, lb(l), rc]), m.unshift([0, 0, Ff]), f.push.apply(f, m); return d
                    })
                } function Ff(a) { var c = a[1], b = a[0], d = a[2]; a[3] ? (a[0] = a[3][0], a[1] = a[3][1], a[2] = a[3][2], a[3] = a[3][3]) : (a[0] = 0, a[1] = [B, 0, 0], a[2] = a[1]); rc(a, lb(b)); b && (a[2][3] = c[3], a[2] = d, a[0] += b) } function Ef(a) { a[3] = [a[0], a[1], a[2], a[3]]; a[1] = [B, 0, 0]; a[2] = a[1]; a[0] = 0 } function rc(a, c) {
                    a[0] +=
                    c[1]; a[2][3] = c; a[2] = c
                } function Gf(a) { return [[385, a.ah, lb], [336, a.nj, kn], [272, a.dh, ln], [208, a.event, mn], [144, a.Si, nn], [80, a.page, on]] } function pn(a) { return [[321, a.end, Jb], [273, a.sh, qn], [193, a.page, J], [144, a.data, Gf], [65, a.L, J]] } function Rh(a) { return [[84, a.buffer, pn]] } function rn(a) { return [[129, a.position, J], [81, a.name, P]] } function sn(a) { return [[81, a.name, P]] } function tn(a) { return [[81, a.name, P]] } function ln(a) {
                    return [[593, a.Rj, P], [532, a.sj, rn], [449, a.ef, J], [401, a.mj, P], [340, a.Gj, sn], [276, a.gh, tn], [209,
                        a.ij, P], [145, a.jj, P], [65, a.id, lb]]
                } function un(a) { return [[513, a.ef, J], [489, a.Pi, jd], [385, a.Ma, J], [321, a.height, J], [257, a.width, J], [193, a.y, J], [129, a.x, J], [65, a.id, lb]] } function kn(a) { return [[129, a.Ma, J], [84, a.eh, un]] } function vn(a) { return [[81, a.hash, P]] } function wn(a) { return [[209, a.stack, P], [145, a.Hh, P], [81, a.code, P]] } function xn(a) { return [[193, a.orientation, J], [129, a.height, J], [65, a.width, J]] } function yn(a) { return [[84, a.Mc, zn]] } function zn(a) {
                    return [[273, a.Nc, P], [193, a.Kf, Jb], [145, a.key, P], [65, a.id,
                        J]]
                } function An(a) { return [[145, a.value, P], [81, a.Gk, P]] } function Bn(a) { return [[149, a.Hb, P], [81, a.method, P]] } function Cn(a) { return [[257, a.ub, J], [193, a.vb, J], [129, a.height, J], [65, a.width, J]] } function Dn(a) { return [[144, a.Og, Sh], [80, a.Mg, Sh]] } function Sh(a) { return [[193, a.y, J], [129, a.x, J], [105, a.level, jd]] } function En(a) { return [[84, a.touches, Fn]] } function Fn(a) { return [[297, a.force, jd], [233, a.y, jd], [169, a.x, jd], [81, a.id, P]] } function Gn(a) { return [[193, a.hidden, Jb], [129, a.checked, Jb], [81, a.value, P]] } function Hn(a) {
                    return [[257,
                        a.hf, J], [193, a.ug, J], [129, a.end, J], [65, a.start, J]]
                } function In() { return [] } function Jn(a) { return [[193, a.page, Jb], [129, a.y, J], [65, a.x, J]] } function Kn(a) { return [[129, a.y, J], [65, a.x, J]] } function Ln(a) { return [[84, a.Ka, Mn]] } function Mn(a) { return [[257, a.index, J], [209, a.me, P], [145, a.style, P], [65, a.target, J]] } function mn(a) {
                    return [[1168, a.zj, Ln], [1104, a.xi, vn], [1040, a.Kh, wn], [976, a.Ah, xn], [912, a.Mi, yn], [848, a.pj, Cn], [784, a.$j, Dn], [720, a.Hk, An], [656, a.Dk, Bn], [592, a.Hj, En], [528, a.nh, Gn], [464, a.vj, Hn], [400, a.Xj,
                        In], [336, a.tj, Jn], [272, a.Qi, Kn], [193, a.M, he], [129, a.target, he], [65, a.type, lb]]
                } function nn(a) { return [[257, a.M, he], [208, a.$, Nn], [129, a.L, J], [65, a.target, J]] } function Nn(a) { return [[148, a.Ka, On], [65, a.index, J]] } function On(a) { return [[276, a.d, Pn], [212, a.od, Qn], [148, a.bf, Rn], [84, a.Ye, Sn]] } function Pn(a) { return [[193, a.Fa, J], [144, a.sc, Th], [65, a.id, J]] } function Qn(a) { return [[193, a.Fa, J], [146, a.Ib, 81, P, 144, Th], [65, a.id, J]] } function Th(a) { return [[193, a.r, Jb], [145, a.n, P], [81, a.Qc, P]] } function Rn(a) {
                    return [[641,
                        a.Wa, Jb], [577, a.Fa, J], [513, a.fe, J], [465, a.sc, P], [402, a.Ib, 81, P, 145, P], [321, a.qe, J], [273, a.Tf, P], [193, a.ne, J], [145, a.Sf, P], [65, a.id, J]]
                } function Sn(a) { return [[321, a.Fa, J], [257, a.ne, J], [193, a.fe, J], [129, a.qe, J], [65, a.id, J]] } function on(a) { return [[321, a.Ia, Tn], [273, a.ed, P], [193, a.M, he], [148, a.content, Un], [80, a.$, Vn]] } function Un(a) { return [[513, a.hidden, Jb], [449, a.te, J], [385, a.next, J], [337, a.content, P], [257, a.parent, J], [210, a.attributes, 81, P, 145, P], [145, a.name, P], [65, a.id, J]] } function Vn(a) {
                    return [[724,
                        a.zk, Wn], [656, a.location, Xn], [592, a.viewport, Uh], [528, a.screen, Uh], [449, a.Ef, Jb], [401, a.cf, P], [337, a.referrer, P], [273, a.Fg, P], [209, a.$e, P], [145, a.title, P], [81, a.doctype, P]]
                } function Wn(a) { return [[133, a.scroll, J], [65, a.target, J]] } function Xn(a) { return [[209, a.path, P], [145, a.protocol, P], [81, a.host, P]] } function Uh(a) { return [[129, a.height, J], [65, a.width, J]] } function P(a) { var c = Yn({}, a, [], 0); return c ? [Zn, c, a] : [Vh, 0, 0] } function qn(a) { return [$n, a.length, a] } function Jb(a) { return [Vh, 1, a ? 1 : 0] } function Tn(a) {
                    a =
                    Wh(a); var c = a[0], b = a[1], d = (b >>> 28 | c << 4) >>> 0; c >>>= 24; return [Xh, 0 === c ? 0 === d ? 16384 > b ? 128 > b ? 1 : 2 : 2097152 > b ? 3 : 4 : 16384 > d ? 128 > d ? 5 : 6 : 2097152 > d ? 7 : 8 : 128 > c ? 9 : 10, a]
                } function jd(a) { return [ao, 4, a] } function he(a) { return lb((a << 1 ^ a >> 31) >>> 0) } function J(a) { return 0 > a ? [Xh, 10, Wh(a)] : lb(a) } function lb(a) { return [bo, 128 > a ? 1 : 16384 > a ? 2 : 2097152 > a ? 3 : 268435456 > a ? 4 : 5, a] } function bo(a, c, b, d) { for (a = c; 127 < a;)b[d++] = a & 127 | 128, a >>>= 7; b[d] = a } function Vh(a, c, b, d) { b[d] = c } function $n(a, c, b, d) { for (a = 0; a < c.length; ++a)b[d + a] = c[a] } function Yh(a) {
                    return function (c,
                        b, d, e) { for (var f, g = 0, h = 0; h < b.length; ++h)if (c = b.charCodeAt(h), 128 > c) a ? g += 1 : d[e++] = c; else { if (2048 > c) { if (a) { g += 2; continue } d[e++] = c >> 6 | 192 } else { if (55296 === (c & 64512) && 56320 === ((f = b.charCodeAt(h + 1)) & 64512)) { if (a) { g += 4; continue } c = 65536 + ((c & 1023) << 10) + (f & 1023); ++h; d[e++] = c >> 18 | 240; d[e++] = c >> 12 & 63 | 128 } else { if (a) { g += 3; continue } d[e++] = c >> 12 | 224 } d[e++] = c >> 6 & 63 | 128 } d[e++] = c & 63 | 128 } return a ? g : e }
                } function ao(a, c, b, d) { return co(a)(a, c, b, d) } function eo(a, c, b, d) {
                    var e = 0 > c ? 1 : 0; e && (c = -c); if (0 === c) kd(0 < 1 / c ? 0 : 2147483648,
                        b, d); else if (a.isNaN(c)) kd(2143289344, b, d); else if (3.4028234663852886E38 < c) kd((e << 31 | 2139095040) >>> 0, b, d); else if (1.1754943508222875E-38 > c) kd((e << 31 | a.Math.round(c / 1.401298464324817E-45)) >>> 0, b, d); else { var f = a.Math.floor(a.Math.log(c) / Math.LN2); kd((e << 31 | f + 127 << 23 | Math.round(c * a.Math.pow(2, -f) * 8388608) & 8388607) >>> 0, b, d) }
                } function kd(a, c, b) { c[b] = a & 255; c[b + 1] = a >>> 8 & 255; c[b + 2] = a >>> 16 & 255; c[b + 3] = a >>> 24 } function Xh(a, c, b, d) {
                    a = c[0]; for (c = c[1]; a;)b[d++] = c & 127 | 128, c = (c >>> 7 | a << 25) >>> 0, a >>>= 7; for (; 127 < c;)b[d++] =
                        c & 127 | 128, c >>>= 7; b[d++] = c
                } function Wh(a) { if (!a) return [0, 0]; var c = 0 > a; c && (a = -a); var b = a >>> 0; a = (a - b) / 4294967296 >>> 0; c && (a = ~a >>> 0, b = ~b >>> 0, 4294967295 < ++b && (b = 0, 4294967295 < ++a && (a = 0))); return [a, b] } function ie(a) { return ea(a) ? A(ie, a) : na(a) || "object" !== typeof a ? a : M(function (c, b) { var d = b[0], e = b[1], f = fo[d]; V(f) && (f = d); e = G(f, go) ? e : ie(e); f ? c[f] = e : c[d] = e; return c }, {}, xa(a)) } function Zh(a, c, b) {
                    return function (d, e, f) {
                        var g; d = y({ H: Ba() }, d); d.H.$b("we", Cb(e.Eb)); d.G || (d.G = {}); var h = d.G, k = d.Oa; k = void 0 === k ? {} : k;
                        h.wmode = "0"; h["wv-part"] = "" + f; h["wv-hit"] = h["wv-hit"] || "" + Hb(a); h["page-url"] = h["page-url"] || a.location.href; h.rn = h.rn || "" + Ua(a); h["wv-type"] || (h["wv-type"] = k.Td ? "3" : "2"); f = { sa: { Pa: "webvisor/" + e.id }, Y: y(d.Y, { wb: (g = {}, g["Content-Type"] = "text/plain", g), Te: "POST" }), G: h }; e = La(je(a, "wv", e), b); return ld(a, c, e)(y(d, f))
                    }
                } function ho(a, c) {
                    return pa(c, function (b) {
                        var d = H(a); N(c); if (!d.o("dSync", !1)) return d.C("dSync", !0), $h(a, b, {
                            gb: c, Wc: "s", $d: "ds", Bj: function (e, f, g) {
                                var h = e.$c; e = e.host; if (n(h, "settings")) return Wa(Sa("ds.e"));
                                f = f(Z) - g; g = e[1]; var k, l; h = Ba((k = {}, k.di = h, k.dit = f, k.dip = g, k)); k = (l = {}, l["page-url"] = T(a).href, l); return ya(a, "S", ai)({ H: h, G: k }, ai)["catch"](C(a, "ds.rs"))
                            }
                        })
                    })
                } function $h(a, c, b) { var d = b.gb, e = ha(a), f = io(a, c.userData, d), g = jo(a); return g.length ? ko(a, e, f, c, b).then(function () { return lo(a, g, f, e, b) }, B) : K.resolve() } function jo(a) { var c = md(a); a = u(Hf, sc(["iPhone", "iPad"]))(a); return c ? mo : a ? no : [] } function lo(a, c, b, d, e) {
                    var f = e.Bj, g = void 0 === f ? B : f, h = e.$d, k = d(Z); return oo(a, c, e)(Ra(function (l) {
                        z(function (m) {
                            m &&
                            ke(a, h + ".s", m)
                        }, l); l = d(ib); b.C(h, l)
                    }, function (l) { b.C(h, d(ib)); g(l, d, k) }))
                } function ko(a, c, b, d, e) { var f = e.$d, g = e.gb; return new K(function (h, k) { var l = b.o(f, 0); l = parseInt("" + l, 10); return 60 >= c(ib) - l ? k() : po(a) ? h(void 0) : bi(d) ? k() : h(qo(a, g)) }) } function oo(a, c, b) {
                    var d = b.Wc, e = b.data, f = ya(a, d, b.gb); a = y({}, ci); e && y(a.G, e); return ro(A(function (g) {
                        return so(f(y({ Y: { Lg: !1, rj: !0 } }, ci), A(function (h) {
                            var k = h[1], l = h[2]; h = L("", A(function (m) { return String.fromCharCode(m.charCodeAt(0) + 10) }, h[0].split(""))); return "http" +
                                (l ? "s" : "") + "://" + h + ":" + k + "/" + to[d]
                        }, g)).then(function (h) { return y({}, h, { host: g[h.Hg] }) }))
                    }, c))
                } function io(a, c, b) { var d = c || {}, e = ya(a, "u", b), f = Qa(a); return { o: function (g, h) { return V(d[g]) ? f.o(g, h) : d[g] }, C: function (g, h) { var k, l = "" + h; d[g] = l; f.C(g, l); return e({ G: (k = {}, k.key = g, k.value = l, k) }, [qa.Ua + "//" + Yb + "/user_storage_set"], {})["catch"](C(a, "u.d.s.s")) } } } function uo(a) { return { aa: function (c, b) { H(a).o("oo") || b() } } } function vo(a, c) {
                    try { var b = c[0]; var d = b[1] } catch (e) { return function () { return K.resolve() } } return function (e) {
                        var f,
                        g = (f = {}, f["browser-info"] = wo, f["page-url"] = a.location && "" + a.location.href, f); return d && (e = jb(a, e)) ? d(xo, { Vb: g, Da: [], fa: "site-info=" + be(e) })["catch"](B) : K.resolve()
                    }
                } function yo(a, c) { if (a["disableYaCounter" + c.id]) { var b = N(c); delete H(a).o("counters", {})[b]; Wa(Sa("oo.e")) } } function zo(a) { if (nd(a)) return null; var c = Ao(a), b = c.Zf; V(b) && (c.Zf = null, Bo(a).then(function (d) { c.Zf = d })); return b ? 1 : null } function Co(a, c, b) {
                    c = N(c); a = di(a); b = b.G; if ((void 0 === b ? {} : b).nohit) return null; var d = b = null; n(a, "getEntriesByType") &&
                        (d = n(a.getEntriesByType("navigation"), "0")) && (b = Do); if (!b) { var e = n(a, "timing"); e && (b = Eo, d = e) } if (!b) return null; a = Fo(a, d, b); c = Go(c); return (c = Ho(c, a)) && L(",", c)
                } function Ho(a, c) { var b = a.length ? A(function (d, e) { var f = c[e]; return f === d ? null : f }, a) : c; a.length = 0; z(u(O, oa("push", a)), c); return Y(ma(null), b).length === a.length ? null : b } function Fo(a, c, b) {
                    return A(function (d) {
                        var e = d[0], f = d[1]; if (S(e)) return e(a, c) || null; if (S(f)) return null; var g = !(!c[e] || !c[f]); !g && 2 === d.length && (g = 0 === c[e] && 0 === c[f]) && (g = d[1],
                            g = !(ei[d[0]] || ei[g])); return g ? (d = Math.round(c[e]) - Math.round(c[f]), 0 > d || 36E5 < d ? null : d) : 1 === d.length && c[e] ? Math.round(c[e]) : null
                    }, b)
                } function Fh(a, c) {
                    void 0 === c && (c = !1); for (var b = a.length, d = b - b % 3, e = [], f = 0; f < d; f += 3) {
                        var g = (a[f] << 16) + (a[f + 1] << 8) + a[f + 2]; e.push("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="[g >> 18 & 63], "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="[g >> 12 & 63], "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="[g >> 6 & 63], "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="[g &
                            63])
                    } switch (b - d) { case 1: b = a[d] << 4; e.push("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="[b >> 6 & 63], "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="[b & 63], "=", "="); break; case 2: b = (a[d] << 10) + (a[d + 1] << 2), e.push("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="[b >> 12 & 63], "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="[b >> 6 & 63], "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="[b & 63], "=") }e = e.join(""); return c ?
                        fi(e, !0) : e
                } function ph(a, c) {
                    void 0 === c && (c = !1); var b = a, d = "", e = 0; if (!b) return ""; for (c && (b = fi(b)); b.length % 4;)b += "="; do {
                        var f = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(b.charAt(e++)), g = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(b.charAt(e++)), h = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(b.charAt(e++)), k = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(b.charAt(e++)); if (0 > f ||
                            0 > g || 0 > h || 0 > k) return ""; var l = f << 18 | g << 12 | h << 6 | k; f = l >> 16 & 255; g = l >> 8 & 255; l &= 255; d = 64 === h ? d + String.fromCharCode(f) : 64 === k ? d + String.fromCharCode(f, g) : d + String.fromCharCode(f, g, l)
                    } while (e < b.length); return d
                } function fi(a, c) { void 0 === c && (c = !1); return a ? a.replace(c ? /[+/=]/g : /[-*_]/g, function (b) { return Io[b] || b }) : "" } function Jo(a) { try { var c = Na(a) ? a : []; return L(",", [a.name, a.description, u(ra, Hc(Boolean), gb(Ko), od(","))(c)]) } catch (b) { return "" } } function Ko(a) { return L(",", [a.description, a.suffixes, a.type]) }
            function Lo(a, c) { for (var b = "", d = 0; d < c; d += 1)b += a; return b } function Mo(a, c, b, d, e, f, g, h) { var k = b.o(f); na(k) && (b.C(f, g), e(a, c, b, d), k = b.o(f, g)); V(h) || h.$b(f, "" + k); return k } function No(a, c) { if (pd(a)) { var b = kb(a).match(Oo); if (b && b.length) return b[1] === c } return !1 } function le(a, c, b) { return function (d) { var e, f, g = Ha(c, b); g && Po(a, d, c) && (g = D(g.params, g), (d = If(a, d, "goods")) && g && g((e = {}, e.__ym = (f = {}, f.ecommerce = [d], f), e))) } } function Po(a, c, b) {
                var d = !1, e = ""; if (!Ma(c)) return Ab(b, "", "Ecommerce data should be an object"),
                    d; var f = c.goods; switch (a) { case "detail": case "add": case "remove": ea(f) && f.length ? (d = Cf(function (g) { return Ma(g) && (Ea(g.id) || me(b, g.id) || Ea(g.name)) }, f)) || (e = "All items in 'goods' should be objects and contain 'id' or 'name' field") : e = "Ecommerce data should contain 'goods' non-empty array"; break; case "purchase": me(b, c.id) || Ea(c.id) ? d = !0 : e = "Purchase object should contain string or number 'id' field" }Ab(b, "", e); return d
            } function Qo(a, c) {
                function b() {
                    q.hidden ? y(k.style, qd(["top", "right", "left", "background"],
                        "initial")) : y(k.style, qd(["top", "right", "left"], "0"), { background: "rgba(0, 0, 0, .3)" }); x.parentNode || (r.appendChild(p), r.appendChild(x)); q.hidden = !q.hidden; r.hidden = !r.hidden; t.hidden = !t.hidden
                } function d(aa) { var wa = g(); y(wa.style, tc("2px", "18px"), Ic, { left: "15px", top: "7px", background: "#2f3747", borderRadius: "2px" }); wa.style.transform = "rotate(" + aa + "deg)"; return wa } function e(aa, wa, sa, Zb, rd) { var ne = g(); y(ne.style, tc(wa + "px", sa + "px"), Ic, { left: aa + "px", bottom: 0, background: Zb, borderTopLeftRadius: rd }); return ne }
                var f = $a(a); if (!f) return B; var g = v("div", f), h = v("iframe", f), k = g(); k.classList.add("__ym_wv_ign"); y(k.style, gi, { bottom: "0", width: "100%", maxWidth: "initial", zIndex: "999999999" }); var l = k.attachShadow ? k.attachShadow({ mode: "open" }) : k, m = g(); y(m.style, tc("24px"), Ic, Jf, { top: "12px", right: "10px", background: "#3367dc", overflow: "hidden" }); var p = g(); y(p.style, { border: "2px solid transparent", animation: "__ym_wv_ign-spinner-animation 1s 0.21s infinite linear" }, Jf, Ic, tc("48px"), qd(["top", "left"], "calc(50% - 24px)"),
                    qd(["borderTopColor", "borderLeftColor"], "#fc0")); f = f("style"); f.textContent = "@keyframes __ym_wv_ign-spinner-animation {to {transform: rotate(360deg);}}"; p.appendChild(f); var q = g(); q.id = "__ym_wv_ign__opener"; y(q.style, tc("46px", "48px"), gi, { right: "0", bottom: "60px", cursor: "pointer", background: "#fff", borderRadius: "16px 0 0 16px", boxShadow: "0px 0px 1px rgba(67, 68, 69, 0.3), 0px 1px 2px rgba(67, 68, 69, 0.3)" }); var r = g(); y(r.style, Ic, qd(["top", "right", "bottom"], "0"), { width: "600px", background: "#fff" });
                var t = g(); t.id = "__ym_wv_ign__closer"; y(t.style, tc("32px"), Ic, Jf, { top: "12px", right: "612px", cursor: "pointer", background: "#fff" }); f = h(); f.src = "https://metrika.yandex.ru/widget/iframe-check"; var x = h(); y(x.style, tc("100%"), { border: "none" }); x.src = "https://metrika.yandex.ru/widget/dashboard?id=" + c; r.hidden = !0; t.hidden = !0; t.appendChild(d(45)); t.appendChild(d(-45)); r.appendChild(f); m.appendChild(e(0, 8, 9, "linear-gradient(0deg, #ff324f, #ff324f), linear-gradient(158.67deg, #ff455c 12.6%, #ff1139 96.76%)"));
                m.appendChild(e(8, 9, 16, "#04acff", "3px")); m.appendChild(e(17, 7, 24, "#ffdd13")); q.appendChild(m); l.appendChild(r); l.appendChild(t); var I = ["click", "touchstart"]; h = ja(a); m = a.document.body; l = [h.D(q, I, b), h.D(t, I, b), h.D(f, ["load"], F([ia, [D(r.removeChild, r, f), D(l.appendChild, l, q)]], z)), h.D(x, ["load"], D(r.removeChild, r, p)), D(m.removeChild, m, k)]; var Q = F([ia, l], z); l.push(h.D(a, ["securitypolicyviolation"], function (aa) { (aa = n(aa, "blockedURI")) && 0 <= aa.indexOf("https://metrika.yandex.ru") && Q() })); m.appendChild(k);
                return Q
            } function qd(a, c) { return M(function (b, d) { b[d] = c; return b }, {}, a) } function tc(a, c) { var b; return b = {}, b.width = a, b.height = c || a, b } function Ro(a, c) { try { var b = c.origin } catch (d) { } b && Oa(u(Xa, Aa(b)), [/^http:\/\/([\w\-.]+\.)?webvisor\.com\/?$/, /^https:\/\/([\w\-.]+\.)?metri[kc]a\.yandex\.(ru|ua|by|kz|com|com\.tr)\/?$/]) && (b = rb(a, c.data), "appendremote" === n(b, "action") && So(a, c, b)) } function hi(a, c, b, d) {
                var e, f, g, h; void 0 === b && (b = ""); void 0 === d && (d = ""); var k = H(a), l = {}; l.getCachedTags = Kf; l.form = (e = {}, e.closest =
                    v(a, ii), e.select = To, e.getData = v(a, ji), e); l.button = (f = {}, f.closest = v(a, Lf), f.select = Mf, f.getData = v(a, Nf), f); l.phone = (g = {}, g.hidePhones = F([a, null, [d]], ki), g); l.status = (h = {}, h.checkStatus = F([a, Ga(b)], Uo), h); k.C("_u", l); c && jc(a, { src: c })
            } function li(a) {
                var c = a.lang; c = void 0 === c ? "" : c; var b = a.appVersion; b = void 0 === b ? "" : b; var d = a.fileId; d = void 0 === d ? "" : d; a = a.beta; a = void 0 === a ? !1 : a; b = L(".", u(gb(u(O, Ga)), Hc(Boolean))(b.split("."))); if (!G(d, Vo) || !G(c, ["ru", "en", "tr"])) return ""; c = (a ? "https://s3.mds.yandex.net/internal-metrika-betas" :
                    "https://yastatic.net/s3/metrika") + (b ? "/" + b : "") + "/form-selector/" + (d + "_" + c + ".js"); return mi(c) ? c : ""
            } function Wo(a, c) {
                var b = $a(a); if (b) {
                    var d = b("div"), e = Vb(a); if (e) {
                        d.innerHTML = '<iframe name="RemoteIframe" allowtransparency="true" style="position: absolute; left: -999px; top: -999px; width: 1px; height: 1px;"></iframe>'; var f = d.firstChild; f.onload = function () {
                            var h = b("meta"); h.setAttribute("http-equiv", "Content-Security-Policy"); h.setAttribute("content", "script-src *"); f.contentWindow.document.head.appendChild(h);
                            jc(f.contentWindow, { src: c })
                        }; a._ym__remoteIframeEl = f; e.appendChild(d); d.removeChild(f); var g = null; d.attachShadow ? g = d.attachShadow({ mode: "open" }) : d.createShadowRoot ? g = d.createShadowRoot() : d.webkitCreateShadowRoot && (g = d.webkitCreateShadowRoot()); g ? g.appendChild(f) : (e.appendChild(f), a._ym__remoteIframeContainer = f)
                    }
                }
            } function Uo(a) { var c, b = ni(a); a = H(a).o("getCounters", sd)(); a = A(U("id"), a); return c = { id: b }, c.counterFound = !!b && G(b, a), c } function ki(a, c, b) {
                var d; c = oi(a, c, { Cg: Xo, Ui: (d = {}, d.href = !0, d) }); b = Y(Boolean,
                    A(function (f) { return "*" === f ? f : Kb(f) }, b)); var e = A(u(O, oa("concat", [""]), pi("reverse"), ia), b); b = td(a); d = qi(a, b, 1E3); c = D(c.bg, c, e); d.D(c); Yo(a, b); ri(a, b); c()
            } function Xo(a, c, b) {
                var d = $a(a), e = b.xb, f = b.Yc, g = e.parentNode, h = e.textContent; if ("text" === b.Ae && h && d && g) {
                    b = d("small"); si(b); var k = h.split(""), l = ti(h).length; z(oa("appendChild", b), M(function (m, p) { var q = m.ma, r = m.Kg, t = d("small"); t.innerHTML = p; var x = Zo.test(p); si(t); x && (t.style.opacity = "" + (l - r - 1) / l); q.push(t); return { ma: q, Kg: r + (x ? 1 : 0) } }, { ma: [], Kg: 0 }, k).ma);
                    $o(a, c, b, f); g.insertBefore(b, e); e.textContent = ""; return !0
                } return !1
            } function $o(a, c, b, d) { function e() { z(v(["style", "opacity", ""], Ec), ra(b.childNodes)); if (c) { var k = Ha(a, c); k && k.extLink("tel:" + d, {}) } g(); h() } var f = ja(a), g = B, h = B; g = f.D(b, ["mouseenter"], function (k) { if (k.target === b) { var l = W(a, e, 200, "ph.h.e"); (h || B)(); h = f.D(b, ["mouseleave"], function (m) { m.target === b && la(a, l) }) } }) } function ri(a, c) {
                $b(a)(Ra(B, function () {
                    var b, d = a.document.body, e = (b = {}, b.attributes = !0, b.childList = !0, b.subtree = !0, b); Da("MutationObserver",
                        a.MutationObserver) && (new MutationObserver(c.O)).observe(d, e)
                }))
            } function Yo(a, c) { return ja(a).D(a, ["load"], c.O) } function oi(a, c, b) {
                function d(k) { var l; return f(a, c, k) ? null === (l = h[k.Yc]) || void 0 === l ? void 0 : l.gd : null } var e, f = b.Cg; b = b.Ui; var g = void 0 === b ? (e = {}, e.href = !0, e.text = !0, e) : b, h; return {
                    bg: function (k) {
                        return new K(function (l, m) {
                            k && k.length || m(); h = ui()(k); $b(a)(Ra(v({ oa: [], za: 0 }, l), function () {
                                var p = ha(a), q = p(Z), r = g.href ? ap(a, h) : [], t = g.text ? vi(a, h) : []; l({
                                    oa: Y(ea, Y(Boolean, A(d, r.concat(t)))), za: p(Z) -
                                        q
                                })
                            }))
                        })
                    }
                }
            } function ap(a, c) { var b = a.document.body; if (!b) return []; var d = wi(c); return M(function (e, f) { var g = n(f, "href"); try { var h = decodeURI(g || "") } catch (p) { h = "" } if ("tel:" === h.slice(0, 4)) { var k = (d.exec(h) || [])[0], l = k ? Kb(k) : "", m = c[l]; V(m) || !l && "*" !== m.gd[0] || (e.push({ Ae: "href", xb: f, Yc: l, eb: xi(k, c[l].eb), Dj: g }), g = Kb(h.slice(4)), l = ui()([l ? m.gd : [g, ""]]), e.push.apply(e, vi(a, l, f))) } return e }, [], ra(b.querySelectorAll("a"))) } function vi(a, c, b) {
                void 0 === b && (b = a.document.body); if (!b) return []; var d = [], e = wi(c);
                mf(a, b, function (f) { if (f !== b && "script" !== (n(f, "parentNode.nodeName") || "").toLowerCase()) { var g = Y(Boolean, e.exec(f.textContent || "") || []); z(function (h) { var k = Kb(h); V(c[k]) || d.push({ Ae: "text", xb: f, Yc: k, eb: xi(h, c[k].eb), Dj: f.textContent || "" }) }, g) } }, function (f) { return e.test(f.textContent || "") ? 1 : 0 }, a.NodeFilter.SHOW_TEXT); return d
            } function ui() { return ud(function (a, c) { var b = A(Kb, c), d = b[0]; b = b[1]; a[d] = { eb: b, gd: c }; var e = yi(d); e !== d && (a[e] = { eb: yi(b), gd: c }); return a }, {}) } function xi(a, c) {
                for (var b = [], d = a.split(""),
                    e = c.split(""), f = 0, g = 0; g < a.length && !(f >= e.length); g += 1) { var h = d[g]; "0" <= h && "9" >= h ? (b.push(e[f]), f += 1) : b.push(d[g]) } return L("", b) + c.slice(f + 1)
            } function yi(a) { var c = { 7: "8", 8: "7" }; return 11 === a.length && c[a[0]] ? "" + c[a[0]] + a.slice(1) : a } function wi(a) { return new RegExp("(?:" + L("|", A(zi, ca(a))) + ")") } function Ai(a, c, b, d) { if (c) { var e = []; c && (a.document.documentElement.contains(c) ? mf(a, c, oa("push", e), d) : La(e, Bi(a, c, d))); z(b, e) } } function mf(a, c, b, d, e) {
                function f(g) {
                    return S(d) ? d(g) ? a.NodeFilter.FILTER_ACCEPT :
                        a.NodeFilter.FILTER_REJECT : a.NodeFilter.FILTER_ACCEPT
                } void 0 === e && (e = -1); if (S(b) && f(c) === a.NodeFilter.FILTER_ACCEPT && (b(c), !Af(c))) for (c = a.document.createTreeWalker(c, e, d ? { acceptNode: f } : null, !1); c.nextNode() && !1 !== b(c.currentNode););
            } function Bi(a, c, b) { var d = [], e = u(O, oa("push", d)); S(b) ? (b = b(c), (na(b) || b === a.NodeFilter.FILTER_ACCEPT) && e(c)) : e(c); if (c.childNodes && 0 < c.childNodes.length) { c = c.childNodes; b = 0; for (var f = c.length; b < f; b += 1) { var g = Bi(a, c[b]); z(e, g) } } return d } function Ci(a, c, b) {
                var d; a = [Di(a,
                    c, function (e) { d = e; e.ya.D(b) }), function () { d && d.unsubscribe() }]; return F([Ei, a], z)
            } function bp(a, c, b, d) { var e, f; if (b) { a: { var g = n(d, "ecommerce") || {}; var h = n(d, "event") || ""; if (Ma(g) && Ea(h) && (h = Fi[h])) { g = If(h, g, "items"); break a } g = void 0 } if (!g) a: { var k = d; !ea(d) && me(a, Na(d)) && (k = za(k)); if (ea(k) && (g = k[0], h = k[1], k = k[2], Ea(h) && Ma(k) && (h = Fi[h], "event" === g && h))) { g = If(h, k, "items"); break a } g = void 0 } if (d = g || cp(d)) mb(a, { ea: c, name: "ecommerce", data: d }), b((e = {}, e.__ym = (f = {}, f.ecommerce = [d], f), e)) } } function cp(a) {
                var c =
                    n(a, "ecommerce"); if (Ma(c)) return a = Y(sc(dp), ca(c)), a = M(function (b, d) { b[d] = c[d]; return b }, {}, a), 0 === ca(a).length ? void 0 : a
            } function If(a, c, b) { var d, e, f = c.purchase || c; if (c = f[b]) { var g = (d = {}, d[a] = (e = {}, e.products = A(ep, c), e), d); d = ca(f); 1 < d.length && (g[a].actionField = M(function (h, k) { if (k === b) return h; if ("currency" === k) return g.currencyCode = f.currency, h; h[Of[k] || k] = f[k]; return h }, {}, d)); return g } } function ep(a) {
                var c = {}; z(function (b) {
                    var d = Of[b] || b; -1 !== b.indexOf("item_category") ? (d = Of.item_category, c[d] =
                        c[d] ? c[d] + ("/" + a[b]) : a[b]) : c[d] = a[b]
                }, ca(a)); return c
            } function fp(a, c, b) { if (b && (b = Lf(a, b), b = Nf(a, b))) { b = "?" + vd(b); var d = Db(a, c, "Button goal. Counter " + c.id + ". Button: " + b + "."); oe(a, c, "btn", d).reachGoal(b) } } function gp(a, c, b, d) { d = n(d, "target"); (d = ac("button,input", a, d)) && "submit" === d.type && (d = ii(a, d)) && (b.push(d), W(a, F([!1, a, c, b, d], Gi), 300)) } function Gi(a, c, b, d, e) {
                var f = Lb(c)(e, d), g = -1 !== f; if (a || g) g && d.splice(f, 1), a = ji(c, e), a = "?" + vd(a), d = F([c, b, "Form goal. Counter " + b.id + ". Form: " + a + "."], Hi), oe(c,
                    b, "form", d).reachGoal(a)
            } function Hi(a, c, b) { return hp(a, c).then(function (d) { d && Db(a, c, b)() }) } function ji(a, c, b) { return Ii(a, c, ["i", "n", "p"], void 0, b) } function ip(a, c) { var b; a((b = {}, b.clickmap = V(c) ? !0 : c, b)) } function jp(a, c, b, d, e) { var f; c = { H: Ba(), G: (f = {}, f["page-url"] = c, f["pointer-click"] = b, f) }; d(c, e)["catch"](C(a, "c.s.c")) } function kp(a, c, b, d, e) {
                if (wd(a, "ymDisabledClickmap") || !c || !c.element) return !1; a = Ia(c.element); if (e && !e(c.element, a) || G(c.button, [2, 3]) && "A" !== a || Oa(ma(a), d)) return !1; d = c.element;
                if (c && b) { if (50 > c.time - b.time) return !1; e = Math.abs(b.position.x - c.position.x); a = Math.abs(b.position.y - c.position.y); c = c.time - b.time; if (b.element === d && 2 > e && 2 > a && 1E3 > c) return !1 } for (; d;) { if (lp(d)) return !1; d = d.parentElement } return !0
            } function mp(a, c) { var b = null; try { if (b = c.target || c.srcElement) !b.ownerDocument && b.documentElement ? b = b.documentElement : b.ownerDocument !== a.document && (b = null) } catch (d) { } return b } function np(a) { var c = a.which; a = a.button; return c || void 0 === a ? c : 1 === a || 3 === a ? 1 : 2 === a ? 3 : 4 === a ? 2 : 0 } function Ji(a,
                c) { var b = Vb(a), d = Pf(a); return { x: c.pageX || c.clientX + d.x - (b.clientLeft || 0) || 0, y: c.pageY || c.clientY + d.y - (b.clientTop || 0) || 0 } } function op(a, c) {
                    if (a.Lj()) {
                        var b = Ki(c); if (b && !qc("ym-disable-tracklink", b)) {
                            var d = a.l, e = a.xh, f = a.gb, g = a.sender, h = a.Lh, k = f.Ac, l = b.href; var m = nb(b.innerHTML && b.innerHTML.replace(/<\/?[^>]+>/gi, "")); m || (m = (m = b.querySelector("img")) ? nb(m.getAttribute("title") || m.getAttribute("alt")) : ""); m = l === m ? "" : m; if (qc("ym-external-link", b)) pe(d, f, { url: l, Pb: !0, title: m, sender: g }); else {
                                k = k ? Gc(d,
                                    k).hostname : T(d).hostname; h = RegExp("\\.(" + L("|", A(pp, h)) + ")$", "i"); var p = b.protocol + "//" + b.hostname + b.pathname; h = Li.test(p) || Li.test(l) || h.test(l) || h.test(p); b = b.hostname; qe(k) === qe(b) ? h ? pe(d, f, { url: l, Jc: !0, title: m, sender: g }) : m && e.C("il", nb(m).slice(0, 100)) : l && qp.test(l) || pe(d, f, { url: l, Oc: !0, Pb: !0, Jc: h, title: m, sender: g })
                            }
                        }
                    }
                } function pe(a, c, b) {
                    var d, e = Ba(); b.Jc && e.C("dl", 1); b.Pb && e.C("ln", 1); var f = b.Jg || {}; e = {
                        H: e, V: { title: f.title || b.title, Oc: !!b.Oc, da: f.params }, G: (d = {}, d["page-url"] = b.url, d["page-ref"] =
                            c.Ac || T(a).href, d)
                    }; d = "Link"; b.Jc ? d = b.Pb ? "Ext link - File" : "File" : b.Pb && (d = "Ext link"); c = b.sender(e, c).then(Db(a, c, d + ". Counter " + c.id + ". Url: " + b.url, b.Jg)); return Jc(a, "cl.p.s", c, f.callback || B, f.ctx)
                } function rp(a, c) { var b, d, e = (b = {}, b.string = !0, b.object = !0, b["boolean"] = c, b)[typeof c] || !1; a((d = {}, d.trackLinks = e, d)) } function sp(a, c, b, d) { var e = T(a), f = e.hostname; e = e.href; if (c = xd(c).url) a = Gc(a, c), f = a.hostname, e = a.href; return [d + "://" + f + "/" + b, e || ""] } function Mi(a) {
                    return (a.split(":")[1] || "").replace(/^\/*/,
                        "").replace(/^www\./, "").split("/")[0]
                } function tp(a, c, b, d) { var e; if (a = Ha(a, b)) { var f = d.data; b = "" + b.id; var g = d.sended || []; d.sended || (d.sended = g); G(b, g) || !a.params || d.counter && "" + d.counter !== b || (a.params(f), g.push(b), d.parent && c.og((e = {}, e.type = "params", e.data = f, e))) } } function lh(a, c, b) { void 0 === b && (b = O); var d = dd(a); b(d); var e = v(d, up); re(a, c, function (f) { f.ya.D(e) }); return d } function up(a, c) { var b = n(c, "ymetrikaEvent"); b && a.O(n(b, "type"), b) } function re(a, c, b, d) {
                    void 0 === b && (b = B); void 0 === d && (d = !1); var e =
                        td(a); if (c && S(c.push)) { var f = c.push; c.push = function () { var g = za(arguments), h = g[0]; d && e.O(h); g = f.apply(c, g); d || e.O(h); return g }; a = { ya: e, unsubscribe: function () { c.push = f } }; b(a); z(e.O, c); return a }
                } function Ud(a) { a = H(a); var c = a.o("dataLayer", []); a.C("dataLayer", c); return c } function Kl(a, c) { var b, d; a.push((b = {}, b.ymetrikaEvent = (d = {}, d.type = c, d), b)) } function Ni(a, c) {
                    var b = Zc(a, c), d = [], e = []; if (!b) return null; var f = F([a, b.De], vp), g = v(f, wp); b.ba.D(["initToParent"], function (h) { g(d, b.children[h[1].counterId]) }).D(["parentConnect"],
                        function (h) { g(e, b.Ha[h[1].counterId]) }); return { ba: b.ba, Lk: function (h, k) { return new K(function (l, m) { b.De(h, k, function (p, q) { l([p, q]) }); W(a, v(Sa(), m), 5100, "is.o") }) }, ng: function (h) { var k = { qg: [], Oe: [], data: h }; d.push(k); return f(b.children, k, h) }, og: function (h) { var k = { qg: [], Oe: [], data: h }; e.push(k); return f(b.Ha, k, h) } }
                } function wp(a, c, b) { c = Y(function (d) { return !G(b.info.counterId, d.Oe) }, c); z(function (d) { var e; b.info.counterId && a((e = {}, e[b.info.counterId] = b, e), d, d.data) }, c) } function vp(a, c, b, d, e) {
                    return (new K(function (f,
                        g) { var h = ca(b), k = u(d.resolve ? d.resolve : O, bd(f)), l = u(d.reject ? d.reject : O, bd(g)); d.resolve = k; d.reject = l; z(function (m) { var p; d.Oe.push(+m); var q = b[m], r = W(a, v(Sa(), l), 5100, "is.m"); c(q.window, y(e, (p = {}, p.toCounter = Ga(m), p)), function (t, x) { la(a, r); d.qg.push(m); d.resolve && d.resolve(x) }) }, h) }))["catch"](C(a, "if.b"))
                } function xp(a) {
                    var c = B, b = null, d = a.length; if (0 !== a.length && a[0]) {
                        var e = a.slice(-1)[0]; S(e) && (c = e, d = a.length + -1); var f = a.slice(-2)[0]; S(f) && (c = f, b = e, d = a.length + -2); d = a.slice(0, d); return {
                            yh: b, fc: c,
                            da: 1 === d.length ? a[0] : Ec(d)
                        }
                    }
                } function Jc(a, c, b, d, e) { var f = F([a, d, e], Qf); return b.then(f, function (g) { f(); ke(a, c, g) }) } function Oi(a, c) {
                    return {
                        aa: function (b, d) { var e = (b.V || {}).da, f = b.Y; f = void 0 === f ? {} : f; if (e && (Pi(c, e), !f.fa && b.H && b.G)) { var g = jb(a, e), h = Qi(a), k = b.H.o("pv"); g && !b.G.nohit && (mb(a, { ea: N(c), name: "params", data: { Qk: e } }), k ? encodeURIComponent(g).length > qa.Sg ? h.push([b.H, e]) : b.G["site-info"] = g : (f.fa = g, b.Y = f, b.Oa || (b.Oa = {}), b.Oa.Vi = !0)) } d() }, Ca: function (b, d) {
                            var e = Qi(a), f = Ha(a, c), g = f && f.params; g &&
                                (f = Y(u(Kc, ma(b.H)), e), z(function (h) { g(h[1]); h = se(a)(h, e); e.splice(h, 1) }, f)); d()
                        }
                    }
                } function te(a, c) { return function (b) { Rf(a, c, b) } } function yp(a, c) { Sf(a)(function (b) { delete b[c] }) } function Rf(a, c, b) { Sf(a)(function (d) { d[c] = y(d[c] || {}, b) }) } function Sf(a) { a = H(a); var c = a.o("dsjf") || Aa({}); a.Ra("dsjf", c); return c } function zp(a, c) {
                    return function (b) {
                        var d, e, f = Ha(a, c); f && (Ma(b) ? Na(ca(b)) ? (b = Ri(b)) && Na(b) && f.params((d = {}, d.__ym = (e = {}, e.fpmh = b, e), d)) : Db(a, c, "First party params error. Empty object.")() : Db(a,
                            c, "First party params error. Not an object.")())
                    }
                } function Ri(a) { a = xa(a); return M(function (c, b) { var d = b[0], e = b[1], f = Ma(e); if (!Ea(e) && !f) return c; e = f ? Ri(e) : e; Na(e) && c.push([d, e]); return c }, [], a) } function Si(a, c, b) { void 0 === b && (b = 0); c = xa(c); c = M(function (d, e) { var f = e[0], g = e[1], h = Ma(g); if (!Ea(g) && !h) return d; h ? g = Si(a, g, b + 1) : b || "yandex_cid" !== f ? ("phone_number" === f ? g = Ap(g) : "email" === f && (g = Bp(g)), g = Ti(a, g)) : g = K.resolve(g); d.push(g.then(function (k) { return [f, k] })); return d }, [], c); return K.all(c) } function Bp(a) {
                    var c =
                        nb(a).toLowerCase().split("@"), b = c[0]; c = c[1]; if (!c) return a; c = c.replace("googlemail.com", "gmail.com"); Ui(c) && (c = "yandex.ru"); "yandex.ru" === c ? b = b.replace(Tf, "-") : "gmail.com" === c && (b = b.replace(Tf, "")); a = sf(b, "+"); -1 !== a && (b = b.slice(0, a)); return b + "@" + c
                } function Ap(a) { a = Kb(a); return "8" === a[0] ? "7" + a.slice(1) : a } function Ti(a, c) {
                    return new K(function (b, d) {
                        var e = (new a.TextEncoder).encode(c); a.crypto.subtle.digest("SHA-256", e).then(function (f) {
                            f = new a.Blob([f], { type: "application/octet-binary" }); var g = new a.FileReader;
                            g.onload = function (h) { h = n(h, "target.result"); var k = (h || "").indexOf(","); -1 !== k ? b(h.substring(k + 1)) : d(gc("fpm.i")) }; g.readAsDataURL(f)
                        }, d)
                    })
                } function Ha(a, c) { var b = H(a).o("counters", {}), d = N(c); return b[d] } function Vi(a, c) { H(a).C("dce:" + c, !0); var b = H(a).o("dclq:" + c); b && (z(function (d) { var e = d[0]; d = d[1]; ia.apply(void 0, va([yd(a, c)[e]], d)) }, b), zd(b)) } function Db(a, c, b, d) { return Uf(c) ? B : v(F(va([a, N(c)], d ? [b + ". Params:", d] : [b]), Ab), ia) } function Ab() {
                    var a = za(arguments), c = a.slice(2); yd(a[0], a[1]).log.apply(Ab,
                        c)
                } function Bf(a) { var c = "1" === Xb(a).o("debug"), b = -1 < T(a).href.indexOf("_ym_debug=1"); a = a._ym_debug; return { vi: c, Fi: a || b, isEnabled: Oa(Boolean, [c, a, b]) } } function Cp(a, c) { return { log: Lc(a, "log", c, B), warn: Lc(a, "log", c, B), error: Lc(a, "log", c, B) } } function Lc(a, c, b, d) { return function () { var e = za(arguments); mb(a, { ea: b, name: "log", data: { Hb: e, type: c } }); return d.apply(void 0, e) } } function pa(a, c) { var b = N(a); return Wi()(Dp(b)).then(c) } function Ep(a, c, b) {
                    c = N(c); var d = Vf(a); b = y({ Nh: d(Z) }, b); mb(a, {
                        ea: c, name: "counterSettings",
                        data: { Nk: b }
                    }); return Wi()(Fp(c, b))
                } function Fp(a, c) { return function (b) { var d = b[a]; d ? (d.oj = c, d.eg = !0, d.dg ? d.dg(c) : d.bb = K.resolve(c)) : b[a] = { bb: K.resolve(c), oj: c, eg: !0 } } } function Eb(a) { return A(function (c) { return !c || G(c, a) ? c : 0 }, bc) } function Xi(a) { return !nd(a) && Yi(a) } function Wf(a) { return $a(a) ? v(a, Gp) : !1 } function Yi(a) { var c = n(a, "navigator.sendBeacon"); return c && Da("sendBeacon", c) ? F([a, D(c, n(a, "navigator"))], Hp) : !1 } function Hp(a, c, b, d) {
                    return new K(function (e, f) {
                        var g; if (!n(a, "navigator.onLine")) return f();
                        var h = y(d.Vb, (g = {}, g["force-urlencoded"] = 1, g)); g = b + "?" + vd(h) + (d.fa ? "&" + d.fa : ""); return 2E3 < g.length ? f(Sa("sb.tlq")) : c(g) ? e("") : f()
                    })
                } function Gp(a, c, b) { return new K(function (d, e) { var f, g, h = "_ymjsp" + Ua(a), k = y((f = {}, f.callback = h, f), b.Vb), l = F([a, h], Ip); a[h] = function (p) { try { l(), lc(m), d(p) } catch (q) { e(q) } }; k.wmode = "5"; var m = jc(a, (g = {}, g.src = Zi(c, b, k), g)); if (!m) return l(), e(gc("jp.s")); f = v(m, lc); f = u(f, v(Sa(b.Da), e)); g = ue(a, f, b.Cb || 1E4); g = F([a, g], la); m.onload = g; m.onerror = u(l, g, f) }) } function Ip(a, c) {
                    try { delete a[c] } catch (b) {
                        a[c] =
                        void 0
                    }
                } function Ad(a) { var c = $a(a); return c ? F([a, c], Jp) : !1 } function Jp(a, c, b, d) { return new K(function (e, f) { var g = Vb(a), h = c("img"), k = u(v(h, lc), v(Sa(d.Da), f)), l = ue(a, k, d.Cb || 3E3); h.onerror = k; h.onload = u(v(h, lc), v(null, e), F([a, l], la)); k = y({}, d.Vb); delete k.wmode; h.src = Zi(b, d, k); pd(a) && (y(h.style, { position: "absolute", visibility: "hidden", width: "0px", height: "0px" }), g.appendChild(h)) }) } function Mb(a) {
                    var c; if (c = n(a, "XMLHttpRequest")) if (c = "withCredentials" in new a.XMLHttpRequest) {
                        a: {
                            if (Kp.test(a.location.host) &&
                                a.opera && S(a.opera.version) && (c = a.opera.version(), "string" === typeof c && "12" === c.split(".")[0])) { c = !0; break a } c = !1
                        } c = !c
                    } return c ? v(a, Lp) : !1
                } function Lp(a, c, b) { var d, e = new a.XMLHttpRequest, f = b.fa, g = y(b.jd ? (d = {}, d.wmode = "7", d) : {}, b.Vb); return new K(function (h, k) { e.open(b.Te || "GET", c + "?" + vd(g), !0); e.withCredentials = !1 !== b.Lg; b.Cb && (e.timeout = b.Cb); $i(xa, gb(function (m) { e.setRequestHeader(m[0], m[1]) }))(b.wb); var l = F([a, e, Sa(b.Da), b.jd, b.rj, h, k], Mp); e.onreadystatechange = l; try { e.send(f) } catch (m) { } }) } function Mp(a,
                    c, b, d, e, f, g, h) { if (4 === c.readyState) if (200 === c.status || e || g(b), e) 200 === c.status ? f(c.responseText) : g(gc("http." + c.status + ".st." + c.statusText + ".rt." + ("" + c.responseText).substring(0, 50))); else { e = null; if (d) try { (e = rb(a, c.responseText)) || g(b) } catch (k) { g(b) } f(e) } return h } function Zi(a, c, b) { (b = vd(b)) && (a += "?" + b); c.fa && (a += (b ? "&" : "?") + c.fa); return a } function Np(a, c, b) { var d = A(Kc, Nb[c] || Ob); z(function (e) { return d.unshift(e) }, ve); return A(u(Mc([a, b]), ia), d) } function aj(a, c) {
                        var b = T(a), d = b.href, e = b.host, f = -1;
                        if (!Ea(c) || V(c)) return d; b = c.replace(bj, ""); if (-1 !== b.search(Op)) return b; var g = b.charAt(0); if ("?" === g && (f = d.search(/\?/), -1 === f) || "#" === g && (f = d.search(/#/), -1 === f)) return d + b; if (-1 !== f) return d.substr(0, f) + b; if ("/" === g) { if (f = d.indexOf(e), -1 !== f) return d.substr(0, f + e.length) + b } else return d = d.split("/"), d[d.length - 1] = b, L("/", d); return ""
                    } function Xf(a, c) {
                        return {
                            aa: function (b, d) {
                                var e, f = b.H, g = b.Ab, h = b.G, k = b.Y; k = void 0 === k ? {} : k; if (f && h) {
                                    var l = ha(a); f.$b("rqnl", 1); for (var m = Bd(a), p = 1; m[p];)p += 1; b.V ||
                                        (b.V = {}); b.V.Wb = p; m[p] = (e = {}, e.protocol = qa.Ua, e.host = Yb, e.resource = "watch", e.postParams = k.fa, e.time = l(Z), e.counterType = c.ca, e.params = h, e.browserInfo = f.l(), e.counterId = c.id, e.ghid = Hb(a), e); g && (m[p].telemetry = g.l()); Yf(a)
                                } d()
                            }, Ca: function (b, d) { cj(a, b); d() }
                        }
                    } function cj(a, c) { var b = Bd(a); c.H && !Ta(b) && c.V && (delete b[c.V.Wb], Yf(a)) } function Yf(a) { var c = Bd(a); Qa(a).C("retryReqs", c) } function Cd(a, c) {
                        return {
                            aa: function (b, d) { var e = dj(c); e = F([b, e, d], Pp); Qp(a, c, e) }, Ca: function (b, d) {
                                var e = b.H, f = dj(c); if (e) {
                                    var g =
                                        f.va; f.qf === e && g && (z(ia, g), f.va = null)
                                } d()
                            }
                        }
                    } function Pp(a, c, b) { var d = a.H; d ? jf(a) ? (c.qf = d, b()) : c.va ? c.va.push(b) : b() : b() } function jf(a) { return (a = a.H) && a.o("pv") && !a.o("ar") } function Qp(a, c, b) { if (Zf(a) && db(a)) { var d = Rp(c); if (!d.Hi) { d.Hi = !0; c = Zc(a, c); if (!c) { b(); return } d.va = []; var e = function () { d.va && (z(ia, d.va), d.va = null) }; W(a, e, 3E3); c.ba.D(["initToChild"], e) } d.va ? d.va.push(b) : b() } else b() } function ej(a, c) {
                        return {
                            aa: function (b, d) {
                                var e = b.H; if (e && (!c || c.mg)) {
                                    var f = a.document.title; b.V && b.V.title && (f = b.V.title);
                                    var g = cc("getElementsByTagName", a.document); "string" !== typeof f && g && (f = g("title"), f = (f = n(f, "0.innerHtml")) ? f : ""); f = f.slice(0, qa.Tg); e.C("t", f)
                                } d()
                            }
                        }
                    } function Fb(a) { return function (c, b) { return { aa: function (d, e) { var f = d.H, g = d.G; f && g && z(function (h) { var k = $f[h], l = "bi", m = f; k || (k = ag[h], l = "tel", m = Vd(d)); k && (k = E(l + ":" + h, k, null)(c, b, d), m.$b(h, k)) }, a || Sp()); e() } } } } function Tp(a, c) {
                        var b = Dd(a); c.D(["initToParent"], function (d) { var e = d[0]; d = d[1]; window.window && (b.children[d.counterId] = { info: d, window: e.source }) }).D(["initToChild"],
                            function (d) { var e = d[0]; d = d[1]; e.source === a.parent && c.O("parentConnect", [e, d]) }).D(["parentConnect"], function (d) { var e = d[1]; e.counterId && (b.Ha[e.counterId] = { info: e, window: d[0].source }) })
                    } function Up(a) { if (Da("MutationObserver", a.MutationObserver)) { var c = Dd(a).children, b = new a.MutationObserver(function () { z(function (d) { n(c[d], "window.window") || delete c[d] }, ca(c)) }); $b(a)(Ra(B, function () { b.observe(a.document.body, { subtree: !0, childList: !0 }) })) } } function Vp(a, c) {
                        return function (b, d) {
                            var e, f = {
                                tc: ha(a)(Z),
                                key: a.Math.random(), dir: 0
                            }; b.length && (f.tc = Ga(b[0]), f.key = parseFloat(b[1]), f.dir = Ga(b[2])); y(d, c); var g = (e = { data: d }, e.__yminfo = L(":", ["__yminfo", f.tc, f.key, f.dir]), e); return { $: f, wg: jb(a, g) || "" }
                        }
                    } function $b(a, c) { function b(e) { n(c, d) ? e() : W(a, v(e, b), 100) } void 0 === c && (c = a); var d = (c.nodeType ? "contentWindow." : "") + "document.body"; return Aa(function (e, f) { b(f) }) } function Cc(a, c) {
                        var b = c.ae, d = b || "uid"; b = b ? a.location.hostname : void 0; var e = Xb(a), f = Qa(a), g = ha(a)(bg), h = fj(a, c), k = h[0]; h = h[1]; var l = e.o("d"); gj(a,
                            c); var m = !1; !h && k && (h = k, m = !0); if (!h) h = L("", [g, Ua(a, 1E6, 999999999)]), m = !0; else if (!l || 15768E3 < g - Ga(l)) m = !0; m && !c.qb && (e.C(d, h, 525600, b), e.C("d", "" + g, 525600, b)); f.C(d, h); return h
                    } function Wp(a, c) { return !c.qb && gj(a, c) } function fj(a, c) { var b = Qa(a), d = Xb(a), e = c.ae || "uid"; return [b.o(e), d.o(e)] } function Oh(a, c, b) { cg(a, "metrika_enabled", "1", 0, c, b, !0); var d = hj(a); (d = d && d.metrika_enabled) && ij(a, "metrika_enabled", c, b, !0); return !!d } function cg(a, c, b, d, e, f, g) {
                        void 0 === g && (g = !1); if (Ph(a, fe, c)) {
                            var h = c + "=" + encodeURIComponent(b) +
                                ";"; h += "" + Xp(a); if (d) { var k = new Date; k.setTime(k.getTime() + 6E4 * d); h += "expires=" + k.toUTCString() + ";" } e && (d = e.replace(Yp, ""), h += "domain=" + d + ";"); try { a.document.cookie = h + ("path=" + (f || "/")), g || (jj(a)[c] = b) } catch (l) { }
                        }
                    } function fe(a, c) { var b = jj(a); return b ? b[c] || null : null } function hj(a) { try { var c = a.document.cookie; if (!na(c)) { var b = {}; z(function (d) { d = d.split("="); var e = d[1]; b[nb(d[0])] = nb(kj(e)) }, (c || "").split(";")); return b } } catch (d) { } return null } function Ph(a, c, b) {
                        return !dg.length || G(b, eg) ? !0 : M(function (d,
                            e) { return d && e(a, c, b) }, !0, dg)
                    } function Hb(a) { var c = H(a), b = c.o("hitId"); b || (b = Ua(a), c.C("hitId", b)); return b } function Ui(a) { var c = a.match(lj); if (c) { a = c[1]; if (c = c[2]) return G(c, fg) ? c : !1; if (a) return fg[0] } return !1 } function T(a) { return M(function (c, b) { var d = n(a, "location." + b); c[b] = d ? "" + d : ""; return c }, {}, Zp) } function Nf(a, c, b) { var d = Ia(c); return d && Ii(a, c, Y(Boolean, ["p", $p[d], "c"]), Mf, b) } function Lf(a, c) { var b = ac(gg, a, c); if (!b) { var d = ac("div", a, c); d && (tb(gg + ",div", d).length || (b = d)) } return b } function Ii(a,
                        c, b, d, e) { return M(function (f, g) { var h = null; g in mj ? h = c.getAttribute && c.getAttribute(mj[g]) : g in Nc && (h = "p" === g ? Nc[g](a, c, e) : "c" === g ? Nc[g](a, c, d) : Nc[g](a, c)); h && (h = h.slice(0, nj[g] || 100), f[g] = hg[g] ? "" + mc(h) : h); return f }, {}, b) } function Hh(a, c, b) { if (Ed(a)) return ra(b.querySelectorAll(c)); var d = oj(c.split(" "), b); return Y(function (e, f) { return Lb(a)(e, d) === f }, d) } function oj(a, c) { var b = va(a), d = b.shift(); if (!d) return []; d = c.getElementsByTagName(d); return b.length ? kc(v(b, oj), ra(d)) : ra(d) } function Fc(a, c) {
                            if (c.querySelector) return c.querySelector(a);
                            var b = tb(a, c); return b && b.length ? b[0] : null
                        } function tb(a, c) { if (!c) return []; var b = c.querySelectorAll(a); return b ? ra(b) : [] } function Ki(a) { var c = null; try { c = a.target || a.srcElement } catch (b) { } if (c) { 3 === c.nodeType && (c = c.parentNode); for (a = c && c.nodeName && ("" + c.nodeName).toLowerCase(); n(c, "parentNode.nodeName") && ("a" !== a && "area" !== a || !c.href && !c.getAttribute("xlink:href"));)a = (c = c.parentNode) && c.nodeName && ("" + c.nodeName).toLowerCase(); return c.href ? c : null } return null } function jc(a, c) {
                            var b = a.document, d = y({
                                type: "text/javascript",
                                charset: "utf-8", async: !0
                            }, c), e = $a(a); if (e) { var f = e("script"); $i(xa, gb(function (l) { var m = l[0]; l = l[1]; "async" === m && l ? f.async = !0 : f[m] = l }))(d); try { var g = cc("getElementsByTagName", b), h = g("head")[0]; if (!h) { var k = g("html")[0]; h = e("head"); k && k.appendChild(h) } h.insertBefore(f, h.firstChild); return f } catch (l) { } }
                        } function aq(a, c, b) {
                            var d = pj(c); G(b, d.tb) || d.tb.push(b); if (Ta(d.kb)) {
                                b = $a(a); if (!b) return null; b = b("iframe"); y(b.style, { display: "none", width: "1px", height: "1px", visibility: "hidden" }); b.src = c; a = Vb(a); if (!a) return null;
                                a.appendChild(b); d.kb = b
                            } else (a = n(d.kb, "contentWindow")) && a.postMessage("frameReinit", "*"); return d.kb
                        } function bq(a, c) { var b = ea(a) ? a : [a]; c = c || document; if (c.querySelectorAll) { var d = L(", ", A(function (e) { return "." + e }, b)); return ra(c.querySelectorAll(d)) } if (c.getElementsByClassName) return kc(u(oa("getElementsByClassName", c), ra), b); d = c.getElementsByTagName("*"); b = "(" + L("|", b) + ")"; return Y(v(b, qc), ra(d)) } function ig(a, c, b) {
                            for (var d = "", e = Kf(), f = Ia(c) || "*"; c && c.parentNode && !G(f, ["BODY", "HTML"]);)d += e[f] ||
                                "*", d += qj(a, c, b) || "", c = c.parentElement, f = Ia(c) || "*"; return nb(d, 128)
                        } function qj(a, c, b) { if (a = we(a, c)) { a = a.childNodes; for (var d = c && c.nodeName, e = 0, f = 0; f < a.length; f += 1)if (d === (a[f] && a[f].nodeName)) { if (c === a[f]) return e; b && a[f] === b || (e += 1) } } return 0 } function we(a, c) { var b = n(a, "document"); if (!c || c === b.documentElement) return null; if (c === uc(a)) return b.documentElement; b = null; try { b = c.parentNode } catch (d) { } return b } function wf(a, c) { var b = jg(a, c), d = b.left; b = b.top; var e = xe(a, c); return [d, b, e[0], e[1]] } function xe(a,
                            c) { var b = n(a, "document"); if (c === uc(a) || c === b.documentElement) { b = Vb(a); var d = Fd(a); return [Math.max(b.scrollWidth, d[0]), Math.max(b.scrollHeight, d[1])] } return (b = ed(c)) ? [b.width, b.height] : [c.offsetWidth, c.offsetHeight] } function jg(a, c) {
                                var b = c, d = n(a, "document"), e = Ia(b); if (!b || !b.ownerDocument || "PARAM" === e || b === uc(a) || b === d.documentElement) return { left: 0, top: 0 }; if (d = ed(b)) return b = Pf(a), { left: Math.round(d.left + b.x), top: Math.round(d.top + b.y) }; for (e = d = 0; b;)d += b.offsetLeft, e += b.offsetTop, b = b.offsetParent;
                                return { left: d, top: e }
                            } function nb(a, c) { if (a) { var b = rj ? rj.call(a) : ("" + a).replace(bj, ""); return c && b.length > c ? b.substring(0, c) : b } return "" } function ac(a, c, b) {
                                if (!(c && c.Element && c.Element.prototype && c.document && b)) return null; if (c.Element.prototype.closest && Da("closest", c.Element.prototype.closest) && b.closest) return b.closest(a); var d = Nh(c); if (d) { for (; b && 1 === b.nodeType && !d.call(b, a);)b = b.parentElement || b.parentNode; return b && 1 === b.nodeType ? b : null } if (Ed(c)) {
                                    for (a = ra((c.document || c.ownerDocument).querySelectorAll(a)); b &&
                                        1 === b.nodeType && -1 === Lb(c)(b, a);)b = b.parentElement || b.parentNode; return b && 1 === b.nodeType ? b : null
                                } return null
                            } function Ed(a) { return !(!Da("querySelectorAll", n(a, "Element.prototype.querySelectorAll")) || !a.document.querySelectorAll) } function sj(a) { return ye(a) && !Oa(ma(a.type), cq) ? ze(a) ? !a.checked : !a.value : dq(a) ? !a.value : eq(a) ? 0 > a.selectedIndex : !0 } function Ia(a) { if (a) try { var c = a.nodeName; if (Ea(c)) return c; c = a.tagName; if (Ea(c)) return c } catch (b) { } } function tj(a, c) {
                                var b = a.document.getElementsByTagName("form");
                                return Lb(a)(c, ra(b))
                            } function fq(a, c, b) { b = cc("dispatchEvent", b || a.document); var d = null, e = n(a, "Event.prototype.constructor"); if (e && (Da("(Event|Object|constructor)", e) || kg(a) && "[object Event]" === "" + e)) try { d = new a.Event(c) } catch (f) { if ((a = cc("createEvent", n(a, "document"))) && S(a)) { try { d = a(c) } catch (g) { } d && d.initEvent && d.initEvent(c, !1, !1) } } d && b(d) } function ed(a) {
                                try { return a.getBoundingClientRect && a.getBoundingClientRect() } catch (c) {
                                    return "object" === typeof c && null !== c && 16389 === (c.Uf && c.Uf & 65535) ? {
                                        top: 0,
                                        bottom: 0, left: 0, width: 0, height: 0, right: 0
                                    } : null
                                }
                            } function Pf(a) { var c = uc(a), b = n(a, "document"); return { x: a.pageXOffset || b.documentElement && b.documentElement.scrollLeft || c && c.scrollLeft || 0, y: a.pageYOffset || b.documentElement && b.documentElement.scrollTop || c && c.scrollTop || 0 } } function Fd(a) { var c = lg(a); if (c) { var b = c[2]; return [a.Math.round(c[0] * b), a.Math.round(c[1] * b)] } c = Vb(a); return [n(c, "clientWidth") || a.innerWidth, n(c, "clientHeight") || a.innerHeight] } function lg(a) {
                                var c = n(a, "visualViewport.width"), b = n(a,
                                    "visualViewport.height"); a = n(a, "visualViewport.scale"); return na(c) || na(b) ? null : [Math.floor(c), Math.floor(b), a]
                            } function Vb(a) { var c = n(a, "document") || {}, b = c.documentElement; return "CSS1Compat" === c.compatMode ? b : uc(a) || b } function uc(a) { a = n(a, "document"); try { return a.getElementsByTagName("body")[0] } catch (c) { return null } } function qc(a, c) { try { return (new RegExp("(?:^|\\s)" + a + "(?:\\s|$)")).test(c.className) } catch (b) { return !1 } } function vc(a) {
                                var c; try {
                                    if (c = a.target || a.srcElement) !c.ownerDocument && c.documentElement ?
                                        c = c.documentElement : c.ownerDocument !== document && (c = null)
                                } catch (b) { } return c
                            } function lc(a) { var c = a && a.parentNode; c && c.removeChild(a) } function Pb(a) { return a ? a.innerText || "" : "" } function Af(a) { if (na(a)) return !1; a = a.nodeType; return 3 === a || 8 === a } function gf(a, c, b) { void 0 === c && (c = ""); void 0 === b && (b = "_ym"); var d = "" + b + c + "_"; return { Ud: gq(a), o: function (e, f) { var g = uj(a, "" + d + e); return Ta(g) && !V(f) ? f : g }, C: function (e, f) { vj(a, "" + d + e, f); return this }, uc: function (e) { wj(a, "" + d + e); return this } } } function vj(a, c, b) {
                                var d =
                                    mg(a); a = jb(a, b); if (!Ta(a)) try { d.setItem(c, a) } catch (e) { }
                            } function uj(a, c) { var b = mg(a); try { return rb(a, b.getItem(c)) } catch (d) { } return null } function wj(a, c) { var b = mg(a); try { b.removeItem(c) } catch (d) { } } function mg(a) { try { return a.localStorage } catch (c) { } return null } function jb(a, c, b) { try { return a.JSON.stringify(c, null, b) } catch (d) { return null } } function Vd(a, c, b) { void 0 === b && (b = null); a.Ab || (a.Ab = xj()); c && a.Ab.$b(c, b); return a.Ab } function Ae(a) {
                                return {
                                    aa: function (c, b) {
                                        var d = a.document, e = c.H; if (e && ng(a)) {
                                            var f =
                                                ja(a), g = function (h) { ng(a) || (f.cc(d, yj, g), b()); return h }; f.D(d, yj, g); e.C("pr", "1")
                                        } else b()
                                    }
                                }
                            } function ab(a, c, b) { return function (d, e) { var f = La(je(a, "w", e), b); return ld(a, c, f)(d) } } function ld(a, c, b) {
                                var d = Bb(a, c); return function (e) {
                                    return zj(b, e, !0).then(function () { var f = e.sa || {}, g = f.yi, h = void 0 === g ? "" : g; g = f.Pa; var k = void 0 === g ? "" : g; f = f.zi; f = A(function (l) { return qa.Ua + "//" + ("" + h + l || Yb) + "/" + k }, void 0 === f ? [Yb] : f); return d(e, f) }).then(function (f) {
                                        var g = f.$c; f = f.Hg; e.qj = g; e.Kk = f; return zj(b, e).then(v(g,
                                            O))
                                    })
                                }
                            } function Bb(a, c) { return function (b, d) { return Aj(a, c, d, b) } } function Aj(a, c, b, d, e, f) {
                                var g; void 0 === e && (e = 0); void 0 === f && (f = 0); var h = y({ Da: [] }, d.Y), k = c[f], l = k[0]; k = k[1]; var m = b[e]; h.wb && h.wb["Content-Type"] || !h.fa || (h.wb = y({}, h.wb, (g = {}, g["Content-Type"] = "application/x-www-form-urlencoded", g)), h.fa = "site-info=" + be(h.fa)); h.Te = h.fa ? "POST" : "GET"; h.Vb = hq(a, d, l); h.Da.push(l); y(d.Y, h); g = "" + m + (d.Oa && d.Oa.Vi ? "/1" : ""); var p = 0; p = iq(a, g, h); return k(g, h).then(function (q) {
                                    mb(a, {
                                        name: "requestSuccess", data: {
                                            body: q,
                                            requestId: p
                                        }
                                    }); return { $c: q, Hg: e }
                                })["catch"](function (q) { mb(a, { name: "requestFail", data: { error: q, requestId: p } }); var r = f + 1 >= c.length, t = e + 1 >= b.length; r && t && Wa(q); return Aj(a, c, b, d, !t && r ? e + 1 : e, r ? 0 : f + 1) })
                            } function hq(a, c, b) { var d = y({}, c.G); a = ha(a); c.H && (d["browser-info"] = Ba(c.H.l()).C("st", a(bg)).Aa()); !d.t && (c = c.Ab) && (c.C("ti", b), d.t = c.Aa()); return d } function iq(a, c, b) { var d = Ua(a); mb(a, { name: "request", data: { url: c, requestId: d, Mk: b } }); return d } function vd(a) {
                                return a ? u(xa, ud(function (c, b) {
                                    var d = b[0], e = b[1];
                                    V(e) || na(e) || c.push(d + "=" + be(e)); return c
                                }, []), od("&"))(a) : ""
                            } function jq(a) { return a ? u(gb(function (c) { c = c.split("="); var b = c[1]; return [c[0], na(b) ? void 0 : kj(b)] }), ud(function (c, b) { c[b[0]] = b[1]; return c }, {}))(a.split("&")) : {} } function kj(a) { var c = ""; try { c = decodeURIComponent(a) } catch (b) { } return c } function be(a) { try { return encodeURIComponent(a) } catch (c) { } a = L("", Y(function (c) { return 55296 >= c.charCodeAt(0) }, a.split(""))); return encodeURIComponent(a) } function zj(a, c, b) {
                                void 0 === b && (b = !1); return new K(function (d,
                                    e) { function f(k, l) { l(); d() } var g = a.slice(); g.push({ aa: f, Ca: f }); var h = hc(g, function (k, l) { var m = b ? k.aa : k.Ca; if (m) try { m(c, l) } catch (p) { h(kq), e(p) } else l() }); h(Bj) })
                            } function Gb(a, c, b) { var d = b || "as"; if (a.postMessage && !a.attachEvent) { b = ja(a); var e = "__ym__promise_" + Ua(a) + "_" + Ua(a), f = B; d = C(a, d, function (g) { try { var h = g.data } catch (k) { return } h === e && (f(), g.stopPropagation && g.stopPropagation(), c()) }); f = b.D(a, ["message"], d); a.postMessage(e, "*") } else W(a, c, 0, d) } function gh(a, c, b, d, e) {
                                void 0 === d && (d = 1); void 0 === e &&
                                    (e = "itc"); c = hc(c, b); ic(a, c, d)(Ra(C(a, e), B))
                            } function ic(a, c, b, d) { void 0 === b && (b = 1); void 0 === d && (d = Cj); og = Infinity === b; return Aa(function (e, f) { function g() { try { var k = c(d(a, b)); h = h.concat(k) } catch (l) { return e(l) } c(lq); if (c(Gd)) return f(h), Dj(a); og ? (c(d(a, 1E4)), f(h), Dj(a)) : W(a, g, 100) } var h = []; mq(g) }) } function Dj(a) { if (pg.length) { var c = pg.shift(); og ? c() : W(a, c, 100) } else qg = !1 } function mq(a) { qg ? pg.push(a) : (qg = !0, a()) } function of(a) { return Aa(function (c, b) { b(a) }) } function so(a) {
                                return Aa(function (c, b) {
                                    a.then(b,
                                        c)
                                })
                            } function nq(a) { var c = [], b = 0; return Aa(function (d, e) { z(function (f, g) { f(Ra(d, function (h) { try { c[g] = h, b += 1, b === a.length && e(c) } catch (k) { d(k) } })) }, a) }) } function ro(a) { var c = [], b = !1; return Aa(function (d, e) { function f(g) { c.push(g) === a.length && d(c) } z(function (g) { g(Ra(f, function (h) { if (!b) try { e(h), b = !0 } catch (k) { f(k) } })) }, a) }) } function Ra(a, c) { return function (b) { return b(a, c) } } function hc(a, c) { void 0 === c && (c = O); return Aa({ Xa: a, Xd: c, Ie: !1, xa: 0 }) } function Bj(a) {
                                function c() {
                                    function d() { b = !0; a.xa += 1 } b = !1;
                                    a.Xd(a.Xa[a.xa], function () { d() }); b || (a.xa += 1, d = v(a, Bj))
                                } for (var b = !0; !Gd(a) && b;)c()
                            } function Cj(a, c) { return function (b) { var d = ha(a), e = d(Z); return Ej(function (f, g) { d(Z) - e >= c && g(Fj) })(b) } } function Be(a, c) { return function (b) { var d = ha(a), e = d(Z); return Ce(function (f) { d(Z) - e >= c && Fj(f) })(b) } } function Ce(a) { return function (c) { for (var b; c.Xa.length && !Gd(c);)b = c.Xa.pop(), b = c.Xd(b, c.Xa), a(c); return b } } function oq(a) { Gd(a) && Wa(gc("i")); var c = a.Xd(a.Xa[a.xa]); a.xa += 1; return c } function lq(a) { a.Ie = !1 } function Fj(a) {
                                a.Ie =
                                !0
                            } function kq(a) { a.xa = a.Xa.length } function Gd(a) { return a.Ie || a.Xa.length <= a.xa } function sb(a) { a = ha(a); return Math.round(a(rg) / 50) } function rg(a) { var c = a.za, b = c[1]; a = c[0] && b ? b() : Z(a) - a.Ai; return Math.round(a) } function bg(a) { return Math.round(Z(a) / 1E3) } function ib(a) { return Math.floor(Z(a) / 1E3 / 60) } function Z(a) { var c = a.Qe; return 0 !== c ? c : sg(a.l, a.za) } function Vf(a) {
                                var c = ja(a), b = Gj(a), d = { l: a, Qe: 0, za: b, Ai: sg(a, b) }, e = b[1]; b[0] && e || c.D(a, ["beforeunload", "unload"], function () { 0 === d.Qe && (d.Qe = sg(a, d.za)) });
                                return Aa(d)
                            } function pq(a) { return (10 > a ? "0" : "") + a } function qi(a, c, b) { function d() { f = 0; g && (g = !1, f = W(a, d, b), e.O(h)) } var e = td(a), f, g = !1, h; c.D(function (k) { g = !0; h = k; f || d(); return B }); return e } function qq(a, c) { return a.clearInterval(c) } function rq(a, c, b, d) { return a.setInterval(C(a, "i.err." + (d || "def"), c), b) } function W(a, c, b, d) { return ue(a, C(a, "d.err." + (d || "def"), c), b) } function dd(a) {
                                var c = {}; return {
                                    D: function (b, d) { z(function (e) { n(c, e) || (c[e] = td(a)); c[e].D(d) }, b); return this }, na: function (b, d) {
                                        z(function (e) {
                                            n(c,
                                                e) && c[e].na(d)
                                        }, b); return this
                                    }, O: function (b, d) { return n(c, b) ? C(a, "e." + d, c[b].O)(d) : [] }
                                }
                            } function td(a) { var c = [], b = {}; b.Ck = c; b.D = u(oa("push", c), v(b, O)); b.na = u(Qb(Lb(a))(c), Qb(oa("splice", c))(1), v(b, O)); b.O = u(O, Qb(ia), sq(c)); return b } function Hj(a, c, b, d, e) { var f = a.addEventListener && a.removeEventListener, g = !f && a.attachEvent && a.detachEvent; if (f || g) if (e = e ? f ? "removeEventListener" : "detachEvent" : f ? "addEventListener" : "attachEvent", f) a[e](c, b, d); else a[e]("on" + c, b) } function E(a, c, b) {
                                return function () {
                                    return C(arguments[0],
                                        a, c, b).apply(this, arguments)
                                }
                            } function C(a, c, b, d, e) { var f = Wa, g = b || f; return function () { var h = d; try { h = g.apply(e || null, arguments) } catch (k) { ke(a, c, k) } return h } } function sg(a, c) { var b = c || Gj(a), d = b[0]; b = b[1]; return !isNaN(d) && S(b) ? Math.round(b() + d) : a.Date.now ? a.Date.now() : (new a.Date).getTime() } function Gj(a) { a = di(a); var c = n(a, "timing.navigationStart"), b = n(a, "now"); b && (b = D(b, a)); return [c, b] } function di(a) { return n(a, "performance") || n(a, "webkitPerformance") } function ke(a, c, b) {
                                var d = "u.a.e", e = ""; b && ("object" ===
                                    typeof b ? (b.unk && Wa(b), d = b.message, e = "string" === typeof b.stack && b.stack.replace(/\n/g, "\\n") || "n.s.e.s") : d = "" + b); tq(d) || Oa(u(oa("indexOf", d), ma(-1), Rb), uq) || vq(d) && .1 <= a.Math.random() || z(u(O, Mc(["jserrs", d, c, e]), ia), Ij)
                            } function Ue() { var a = za(arguments); return Wa(Sa(a)) } function Sa(a) { var c = ""; ea(a) ? c = L(".", a) : Ea(a) && (c = a); return gc("err.kn(" + qa.fb + ")" + c) } function wq(a) { this.message = a } function mb(a, c) {
                                var b = c.ea; if (b) { var d = b.split(":"); b = d[1]; d = Jj(uh(d[0])); if ("1" === b || d) return } b = xq(a); 1E3 === b.length &&
                                    b.shift(); b.push(c)
                            } function je(a, c, b) { return A(u(Kc, Mc([a, b]), ia), Kj[c] || []) } function Lj(a, c, b, d) { a[c] || (a[c] = []); b && !na(d) && Mj(a[c], b, d) } function Mj(a, c, b) { for (var d = [c, b], e = -1E4, f = 0; f < a.length; f += 1) { var g = a[f], h = g[0]; g = g[1]; if (b === g && h === c) return; if (b < g && b >= e) { a.splice(f, 0, d); return } e = g } a.push(d) } function dc(a) { z(function (c) { var b = c[1]; Ve[c[0]] = { ia: b.ia, Za: b.Za } }, xa(a)) } function sl(a, c, b, d, e) {
                                var f = "object" === typeof a ? a : { id: a, ca: d, oc: e, da: b }; a = M(function (g, h) {
                                    var k = h[1], l = k.Za; k = f[k.ia]; g[h[0]] =
                                        l ? l(k) : k; return g
                                }, {}, xa(c)); Pi(a, a.da || {}); return a
                            } function yq(a, c) { return M(function (b, d) { b[c[d[0]].ia] = d[1]; return b }, {}, xa(a)) } function Nj(a) { a = N(a); return ec[a] && ec[a].Jj } function Pi(a, c) { var b = N(a), d = n(c, "__ym.turbo_page"), e = n(c, "__ym.turbo_page_id"); ec[b] || (ec[b] = {}); if (d || e) ec[b].Jj = d, ec[b].Kj = e } function Oj(a) { return De(a) || md(a) || /mobile/i.test(kb(a)) || !V(n(a, "orientation")) } function df(a, c) { if (Hd(a) && c) { var b = kb(a).match(zq); if (b && b.length) return +b[1] >= c } return !1 } function ef(a, c) {
                                var b =
                                    kb(a); return b && (b = b.match(Aq)) && 1 < b.length ? Ga(b[1]) >= c : !1
                            } function ng(a) { return G("prerender", A(v(n(a, "document"), n), ["webkitVisibilityState", "visibilityState"])) } function Ua(a, c, b) { var d = V(b); V(c) && d ? (d = 1, c = 1073741824) : d ? d = 1 : (d = c, c = b); return a.Math.floor(a.Math.random() * (c - d)) + d } function Bq() { var a = za(arguments), c = a[0]; for (a = a.slice(1); a.length;) { var b = a.shift(), d; for (d in b) wd(b, d) && (c[d] = b[d]); wd(b, "toString") && (c.toString = b.toString) } return c } function Pj(a) {
                                return V(a) ? [] : Id(function (c, b) {
                                    c.push([b,
                                        a[b]]); return c
                                }, [], Qj(a))
                            } function Qj(a) { var c = [], b; for (b in a) wd(a, b) && c.push(b); return c } function uh(a) { try { return parseInt(a, 10) } catch (c) { return null } } function me(a, c) { return a.isFinite(c) && !a.isNaN(c) && "[object Number]" === tg(c) } function Cq(a) { for (var c = [], b = a.length - 1; 0 <= b; --b)c[a.length - 1 - b] = a[b]; return c } function La(a, c) { z(u(O, oa("push", a)), c); return a } function ug(a, c) { return Array.prototype.sort.call(c, a) } function zd(a) { return a.splice(0, a.length) } function ra(a) {
                                return a ? ea(a) ? a : Ee ? Ee(a) :
                                    "number" === typeof a.length && 0 <= a.length ? Rj(a) : [] : []
                            } function vg(a, c, b) { return b ? a : c } function Dq(a, c) { return Id(function (b, d, e) { d = a(d, e); return b.concat(ea(d) ? d : [d]) }, [], c) } function Sj(a, c) { return Id(function (b, d, e) { b.push(a(d, e)); return b }, [], c) } function Eq(a, c) { if (!Hd(a)) return !0; try { c.call({ 0: !0, length: -Math.pow(2, 32) + 1 }, function () { throw 1; }) } catch (b) { return !1 } return !0 } function ea(a) { if (Jd) return Jd(a); (Jd = Ka(Array.isArray, "isArray")) || (Jd = Fq); return Jd(a) } function Gq(a, c) { return 1 <= Tj(ma(a), c).length }
            function Hq(a, c) { for (var b = 0; b < c.length; b += 1)if (a.call(c, c[b], b)) return c[b] } function Tj(a, c) { return Id(function (b, d, e) { a(d, e) && b.push(d); return b }, [], c) } function Qf(a, c, b) { try { if (S(c)) { var d = za(arguments).slice(3); na(b) ? c.apply(void 0, d) : D.apply(void 0, va([c, b], d))() } } catch (e) { ue(a, v(e, Wa), 0) } } function Wa(a) { throw a; } function ue(a, c, b) { return cc("setTimeout", a)(c, b) } function la(a, c) { return cc("clearTimeout", a)(c) } function sd() { return [] } function wc() { return {} } function cc(a, c) {
                var b = n(c, a), d = n(c, "constructor.prototype." +
                    a) || b; try { if (d && d.apply) return function () { return d.apply(c, arguments) } } catch (e) { return b } return d
            } function ub(a, c) { return function () { var b = za(arguments), d = b[0]; b = b.slice(1); var e = H(d), f = e.o("m970", {}), g = n(f, a); g || (g = w(c), f[a] = g, e.C("m970", f)); return g.apply(void 0, va([d], b)) } } function Ec(a, c) { void 0 === c && (c = {}); if (!a || 1 > a.length) return c; M(function (b, d, e) { if (e === a.length - 1) return b; e === a.length - 2 ? b[d] = a[e + 1] : b[d] || (b[d] = {}); return b[d] }, c, a); return c } function n(a, c) {
                return a ? M(function (b, d) {
                    if (na(b)) return b;
                    try { return b[d] } catch (e) { } return null
                }, a, c.split(".")) : null
            } function Kd(a) { a = a.Ya = a.Ya || {}; var c = a._metrika = a._metrika || {}; return { Ra: function (b, d) { wg.call(c, b) || (c[b] = d); return this }, C: function (b, d) { c[b] = d; return this }, o: function (b, d) { var e = c[b]; return wg.call(c, b) || V(d) ? e : d } } } function wd(a, c) { return na(a) ? !1 : wg.call(a, c) } function w(a, c) { var b = [], d = []; var e = c ? c : O; return function () { var f = za(arguments), g = e.apply(void 0, f), h = Uj(g, d); if (-1 !== h) return b[h]; f = a.apply(void 0, f); b.push(f); d.push(g); return f } }
            function Lb(a) { if (xg) return xg; var c = !1; try { c = [].indexOf && 0 === [void 0].indexOf(void 0) } catch (d) { } var b = a.Array && a.Array.prototype && Ka(a.Array.prototype.indexOf, "indexOf"); return xg = a = c && b ? function (d, e) { return b.call(e, d) } : Iq } function Iq(a, c) { for (var b = 0; b < c.length; b += 1)if (c[b] === a) return b; return -1 } function ia(a, c) { return c ? a(c) : a() } function u() { var a = za(arguments), c = a.shift(); return function () { var b = c.apply(void 0, arguments); return M(Vj, b, a) } } function ud(a, c) { return F([a, c], M) } function Id(a, c, b) {
                for (var d =
                    0, e = b.length; d < e;)c = a(c, b[d], d), d += 1; return c
            } function Xa(a) { return oa("test", a) } function oa(a, c) { return D(c[a], c) } function v(a, c) { return D(c, null, a) } function F(a, c) { return D.apply(void 0, va([c, null], a)) } function Jq() { var a = za(arguments), c = a[0], b = a[1], d = a.slice(2); return function () { var e = va(d, za(arguments)); if (Function.prototype.call) return Function.prototype.call.apply(c, va([b], e)); if (b) { for (var f = "_b"; b[f];)f += "_" + f.length; b[f] = c; e = b[f] && Wj(f, e, b); delete b[f]; return e } return Wj(c, e) } } function Wj(a,
                c, b) { void 0 === c && (c = []); b = b || {}; var d = c.length, e = a; S(e) && (e = "d", b[e] = a); var f; d ? 1 === d ? f = b[e](c[0]) : 2 === d ? f = b[e](c[0], c[1]) : 3 === d ? f = b[e](c[0], c[1], c[2]) : 4 === d && (f = b[e](c[0], c[1], c[2], c[3])) : f = b[e](); return f } function za(a) { if (Ee) try { return Ee(a) } catch (c) { } return Rj(a) } function Rj(a) { for (var c = a.length, b = [], d = 0; d < c; d += 1)b.push(a[d]); return b } function Ma(a) { return !Ta(a) && !V(a) && "[object Object]" === tg(a) } function na(a) { return V(a) || Ta(a) } function S(a) { return "function" === typeof a } function Qb(a) {
                    return function (c) {
                        return function (b) {
                            return a(b,
                                c)
                        }
                    }
                } function ka(a) { return function (c) { return function (b) { return a(c, b) } } } function Vj(a, c) { return c(a) } function Kq(a, c) { for (var b = "", d = 0; d < c.length; d += 1)b += "" + (d ? a : "") + c[d]; return b } function pp(a) { return a.replace(/\^/g, "\\^").replace(/\$/g, "\\$").replace(Tf, "\\.").replace(/\[/g, "\\[").replace(/\]/g, "\\]").replace(/\|/g, "\\|").replace(/\(/g, "\\(").replace(/\)/g, "\\)").replace(/\?/g, "\\?").replace(/\*/g, "\\*").replace(/\+/g, "\\+").replace(/\{/g, "\\{").replace(/\}/g, "\\}") } function Lq(a) { return "" + a }
            function nc(a, c) { return !(!a || -1 === sf(a, c)) } function sf(a, c) { if (Xj) var b = Xj.call(a, c); else a: { b = 0; for (var d = a.length - c.length, e = 0; e < a.length; e += 1) { b = a[e] === c[b] ? b + 1 : 0; if (b === c.length) { b = e - c.length + 1; break a } if (!b && e > d) break } b = -1 } return b } function Ea(a) { return "string" === typeof a } function tg(a) { return Object.prototype.toString.call(a) } function yg(a, c) {
                yg = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (b, d) { b.__proto__ = d } || function (b, d) { for (var e in d) d.hasOwnProperty(e) && (b[e] = d[e]) };
                return yg(a, c)
            } function Ka(a, c) { return Da(c, a) && a } function Da(a, c) { var b = Fe(a, c); c && !b && zg.push([a, c]); return b } function Fe(a, c) { if (!c || "function" !== typeof c) return !1; try { var b = "" + c } catch (h) { return !1 } var d = b.length; if (d > 35 + a.length) return !1; for (var e = d - 13, f = 0, g = 8; g < d; g += 1) { f = "[native code]"[f] === b[g] || 7 === f && "-" === b[g] ? f + 1 : 0; if (12 === f) return !0; if (!f && g > e) break } return !1 } function B() { } function Rb(a) { return !a } function vb(a, c) { return c } function O(a) { return a } function Ja(a, c) {
                function b() {
                    this.constructor =
                    a
                } yg(a, c); a.prototype = null === c ? Object.create(c) : (b.prototype = c.prototype, new b)
            } function va() { for (var a = 0, c = 0, b = arguments.length; c < b; c++)a += arguments[c].length; a = Array(a); var d = 0; for (c = 0; c < b; c++)for (var e = arguments[c], f = 0, g = e.length; f < g; f++, d++)a[d] = e[f]; return a } function Mq() { } function Nq(a, c) { return function () { a.apply(c, arguments) } } function Fa(a) {
                if (!(this instanceof Fa)) throw new TypeError("Promises must be constructed via new"); if ("function" !== typeof a) throw new TypeError("not a function"); this.Ja =
                    0; this.We = !1; this.Ta = void 0; this.Fb = []; Yj(a, this)
            } function Zj(a, c) { for (; 3 === a.Ja;)a = a.Ta; 0 === a.Ja ? a.Fb.push(c) : (a.We = !0, Fa.Xe(function () { var b = 1 === a.Ja ? c.$i : c.dj; if (null === b) (1 === a.Ja ? Ag : Ld)(c.bb, a.Ta); else { try { var d = b(a.Ta) } catch (e) { Ld(c.bb, e); return } Ag(c.bb, d) } })) } function Ag(a, c) {
                try {
                    if (c === a) throw new TypeError("A promise cannot be resolved with itself."); if (c && ("object" === typeof c || "function" === typeof c)) {
                        var b = c.then; if (c instanceof Fa) { a.Ja = 3; a.Ta = c; Bg(a); return } if ("function" === typeof b) {
                            Yj(Nq(b,
                                c), a); return
                        }
                    } a.Ja = 1; a.Ta = c; Bg(a)
                } catch (d) { Ld(a, d) }
            } function Ld(a, c) { a.Ja = 2; a.Ta = c; Bg(a) } function Bg(a) { 2 === a.Ja && 0 === a.Fb.length && Fa.Xe(function () { a.We || Fa.$g(a.Ta) }); for (var c = 0, b = a.Fb.length; c < b; c++)Zj(a, a.Fb[c]); a.Fb = null } function Oq(a, c, b) { this.$i = "function" === typeof a ? a : null; this.dj = "function" === typeof c ? c : null; this.bb = b } function Yj(a, c) { var b = !1; try { a(function (d) { b || (b = !0, Ag(c, d)) }, function (d) { b || (b = !0, Ld(c, d)) }) } catch (d) { b || (b = !0, Ld(c, d)) } } function Sm(a) {
                for (var c = a.length, b = 0, d = 255, e = 255,
                    f, g, h; c;) { f = 21 < c ? 21 : c; c -= f; do g = "string" === typeof a ? a.charCodeAt(b) : a[b], b += 1, 255 < g && (h = g >> 8, g &= 255, g ^= h), d += g, e += d; while (--f); d = (d & 255) + (d >> 8); e = (e & 255) + (e >> 8) } a = (d & 255) + (d >> 8) << 8 | (e & 255) + (e >> 8); return 65535 === a ? 0 : a
            } function rb(a, c) { if (!c) return null; try { return a.JSON.parse(c) } catch (b) { return null } } function mc(a) { a = "" + a; for (var c = 2166136261, b = a.length, d = 0; d < b; d += 1)c ^= a.charCodeAt(d), c += (c << 1) + (c << 4) + (c << 7) + (c << 8) + (c << 24); return c >>> 0 } function ij(a, c, b, d, e) {
                void 0 === e && (e = !1); return cg(a, c, "", -100,
                    b, d, e)
            } function Ac(a, c, b) { void 0 === c && (c = "_ym_"); void 0 === b && (b = ""); var d = Pq(a), e = 1 === (d || "").split(".").length ? d : "." + d, f = b ? "_" + b : ""; return { uc: function (g, h, k) { ij(a, "" + c + g + f, h || e, k); return this }, o: function (g) { return fe(a, "" + c + g + f) }, C: function (g, h, k, l, m) { cg(a, "" + c + g + f, h, k, l || e, m); return this } } } function tl(a, c, b, d) { var e = ak[b]; return e ? function () { var f = za(arguments); try { var g = d.apply(void 0, f); var h = H(a); h.Ra("mt", {}); var k = h.o("mt"), l = k[e]; k[e] = l ? l + 1 : 1 } catch (m) { Wa(m) } return g } : d } function Gc(a, c) {
                var b =
                    Qq(a); return b ? (b.href = c, { protocol: b.protocol, host: b.host, port: b.port, hostname: b.hostname, hash: b.hash, search: b.search, query: b.search.replace(/^\?/, ""), pathname: b.pathname || "/", path: (b.pathname || "/") + b.search, href: b.href }) : {}
            } function bk(a) { return (a = T(a).hash.split("#")[1]) ? a.split("?")[0] : "" } function Rq(a, c) { var b = bk(a); ck = rq(a, function () { var d = bk(a); d !== b && (c(), b = d) }, 200, "t.h"); return D(qq, null, a, ck) } function Sq(a, c, b) {
                var d, e, f = c.ca, g = c.Se, h = c.Ac, k = H(a), l = Ba((d = {}, d.wh = 1, d.pv = 1, d)); We(f) && a.Zg &&
                    a.Zg.ak && l.C("ad", "1"); g && l.C("ut", "1"); f = k.o("lastReferrer"); d = T(a).href; h = { G: (e = {}, e["page-url"] = h || d, e["page-ref"] = f, e), H: l }; b(h, c)["catch"](C(a, "g.s")); k.C("lastReferrer", d)
            } function Tq(a, c, b) {
                function d() { la(a, h); g(!1) } function e() { k = !0; g(!1); c() } function f() { la(a, h); if (k) g(!1); else { var Q = Math.max(0, b - (q ? r : r + l(Z) - t)); Q ? h = W(a, e, Q, "u.t.d.c") : e() } } function g(Q) { z(function (aa) { var wa = aa[0], sa = aa[1]; aa = aa[2]; Q ? x.D(wa, sa, aa) : x.cc(wa, sa, aa) }, I) } var h = 0, k = !1; if (kg(a)) return h = W(a, c, b, "u.t.d"), d; var l =
                    ha(a), m = !1, p = !1, q = !0, r = 0, t = l(Z), x = ja(a), I = [[a, ["blur"], function () { q = m = p = !0; r += l(Z) - t; t = l(Z); f() }], [a, ["focus"], function () { m || p || (r = 0); t = l(Z); m = p = !0; q = !1; f() }], [a.document, ["click", "mousemove", "keydown", "scroll"], function () { p || (m = !0, q = !1, p = !0, f()) }]]; g(!0); f(); return d
            } function Te(a, c, b, d) { return function () { if (Ha(a, c)) { var e = za(arguments); return d.apply(void 0, e) } } } function ob(a, c) {
                a = [a[0] >>> 16, a[0] & 65535, a[1] >>> 16, a[1] & 65535]; c = [c[0] >>> 16, c[0] & 65535, c[1] >>> 16, c[1] & 65535]; var b = [0, 0, 0, 0]; b[3] += a[3] *
                    c[3]; b[2] += b[3] >>> 16; b[3] &= 65535; b[2] += a[2] * c[3]; b[1] += b[2] >>> 16; b[2] &= 65535; b[2] += a[3] * c[2]; b[1] += b[2] >>> 16; b[2] &= 65535; b[1] += a[1] * c[3]; b[0] += b[1] >>> 16; b[1] &= 65535; b[1] += a[2] * c[2]; b[0] += b[1] >>> 16; b[1] &= 65535; b[1] += a[3] * c[1]; b[0] += b[1] >>> 16; b[1] &= 65535; b[0] += a[0] * c[3] + a[1] * c[2] + a[2] * c[1] + a[3] * c[0]; b[0] &= 65535; return [b[0] << 16 | b[1], b[2] << 16 | b[3]]
            } function fc(a, c) {
                a = [a[0] >>> 16, a[0] & 65535, a[1] >>> 16, a[1] & 65535]; c = [c[0] >>> 16, c[0] & 65535, c[1] >>> 16, c[1] & 65535]; var b = [0, 0, 0, 0]; b[3] += a[3] + c[3]; b[2] += b[3] >>>
                    16; b[3] &= 65535; b[2] += a[2] + c[2]; b[1] += b[2] >>> 16; b[2] &= 65535; b[1] += a[1] + c[1]; b[0] += b[1] >>> 16; b[1] &= 65535; b[0] += a[0] + c[0]; b[0] &= 65535; return [b[0] << 16 | b[1], b[2] << 16 | b[3]]
            } function Oc(a, c) { c %= 64; if (32 === c) return [a[1], a[0]]; if (32 > c) return [a[0] << c | a[1] >>> 32 - c, a[1] << c | a[0] >>> 32 - c]; c -= 32; return [a[1] << c | a[0] >>> 32 - c, a[0] << c | a[1] >>> 32 - c] } function hb(a, c) { c %= 64; return 0 === c ? a : 32 > c ? [a[0] << c | a[1] >>> 32 - c, a[1] << c] : [a[1] << c - 32, 0] } function ta(a, c) { return [a[0] ^ c[0], a[1] ^ c[1]] } function dk(a) {
                a = ta(a, [0, a[0] >>> 1]); a = ob(a,
                    [4283543511, 3981806797]); a = ta(a, [0, a[0] >>> 1]); a = ob(a, [3301882366, 444984403]); return a = ta(a, [0, a[0] >>> 1])
            } function Uq(a, c) {
                void 0 === c && (c = 210); var b = a || "", d = c || 0, e = b.length - b.length % 16; d = { R: [0, d], T: [0, d] }; for (var f = 0; f < e; f += 16) {
                    var g = d, h = [a.charCodeAt(f + 4) & 255 | (a.charCodeAt(f + 5) & 255) << 8 | (a.charCodeAt(f + 6) & 255) << 16 | (a.charCodeAt(f + 7) & 255) << 24, a.charCodeAt(f) & 255 | (a.charCodeAt(f + 1) & 255) << 8 | (a.charCodeAt(f + 2) & 255) << 16 | (a.charCodeAt(f + 3) & 255) << 24], k = [a.charCodeAt(f + 12) & 255 | (a.charCodeAt(f + 13) & 255) << 8 |
                        (a.charCodeAt(f + 14) & 255) << 16 | (a.charCodeAt(f + 15) & 255) << 24, a.charCodeAt(f + 8) & 255 | (a.charCodeAt(f + 9) & 255) << 8 | (a.charCodeAt(f + 10) & 255) << 16 | (a.charCodeAt(f + 11) & 255) << 24]; h = ob(h, Ge); h = Oc(h, 31); h = ob(h, He); g.R = ta(g.R, h); g.R = Oc(g.R, 27); g.R = fc(g.R, g.T); g.R = fc(ob(g.R, [0, 5]), [0, 1390208809]); k = ob(k, He); k = Oc(k, 33); k = ob(k, Ge); g.T = ta(g.T, k); g.T = Oc(g.T, 31); g.T = fc(g.T, g.R); g.T = fc(ob(g.T, [0, 5]), [0, 944331445])
                } e = b.length % 16; f = b.length - e; g = [0, 0]; h = [0, 0]; switch (e) {
                    case 15: h = ta(h, hb([0, b.charCodeAt(f + 14)], 48)); case 14: h =
                        ta(h, hb([0, b.charCodeAt(f + 13)], 40)); case 13: h = ta(h, hb([0, b.charCodeAt(f + 12)], 32)); case 12: h = ta(h, hb([0, b.charCodeAt(f + 11)], 24)); case 11: h = ta(h, hb([0, b.charCodeAt(f + 10)], 16)); case 10: h = ta(h, hb([0, b.charCodeAt(f + 9)], 8)); case 9: h = ta(h, [0, b.charCodeAt(f + 8)]), h = ob(h, He), h = Oc(h, 33), h = ob(h, Ge), d.T = ta(d.T, h); case 8: g = ta(g, hb([0, b.charCodeAt(f + 7)], 56)); case 7: g = ta(g, hb([0, b.charCodeAt(f + 6)], 48)); case 6: g = ta(g, hb([0, b.charCodeAt(f + 5)], 40)); case 5: g = ta(g, hb([0, b.charCodeAt(f + 4)], 32)); case 4: g = ta(g, hb([0, b.charCodeAt(f +
                            3)], 24)); case 3: g = ta(g, hb([0, b.charCodeAt(f + 2)], 16)); case 2: g = ta(g, hb([0, b.charCodeAt(f + 1)], 8)); case 1: g = ta(g, [0, b.charCodeAt(f)]), g = ob(g, Ge), g = Oc(g, 31), g = ob(g, He), d.R = ta(d.R, g)
                }d.R = ta(d.R, [0, b.length]); d.T = ta(d.T, [0, b.length]); d.R = fc(d.R, d.T); d.T = fc(d.T, d.R); d.R = dk(d.R); d.T = dk(d.T); d.R = fc(d.R, d.T); d.T = fc(d.T, d.R); return ("00000000" + (d.R[0] >>> 0).toString(16)).slice(-8) + ("00000000" + (d.R[1] >>> 0).toString(16)).slice(-8) + ("00000000" + (d.T[0] >>> 0).toString(16)).slice(-8) + ("00000000" + (d.T[1] >>> 0).toString(16)).slice(-8)
            }
            function Md(a, c, b) { var d = c.getAttribute("itemtype"); b = tb('[itemprop~="' + b + '"]', c); return d ? Y(function (e) { return e.parentNode && ac("[itemtype]", a, e.parentNode) === c }, b) : b } function bb(a, c, b) { return (a = Md(a, c, b)) && a.length ? a[0] : null } function Ya(a) { if (!a) return ""; a = ea(a) ? a : [a]; return a.length ? a[0].getAttribute("content") || Pb(a[0]) : "" } function ek(a) { return a ? a.attributes && a.getAttribute("datetime") ? a.getAttribute("datetime") : Ya(a) : "" } function id(a, c, b) {
                a = c && (nc(c.className, "ym-disable-keys") || nc(c.className,
                    "-metrika-nokeys")); return b && c ? a || !!bq(["ym-disable-keys", "-metrika-nokeys"], c).length : a
            } function rf(a, c) { return ye(c) ? "password" === c.type || c.name && G(c.name.toLowerCase(), fk) || c.id && G(c.id.toLowerCase(), fk) : !1 } function gk(a, c) { var b = Math.max(0, Math.min(c, 65535)); La(a, [b >> 8, b & 255]) } function Ib(a, c) { La(a, [c & 255]) } function fb(a, c, b) { return -1 !== Lb(a)(b, Vq) ? (Ib(c, b), !1) : !0 } function R(a, c) { for (var b = Math.max(0, c | 0); 127 < b;)La(a, [b & 127 | 128]), b >>= 7; La(a, [b]) } function Cg(a, c) {
                R(a, c.length); for (var b = 0; b < c.length; b +=
                    1)R(a, c.charCodeAt(b))
            } function Dg(a, c) { var b = c; 255 < b.length && (b = b.substr(0, 255)); a.push(b.length); for (var d = 0; d < b.length; d += 1)gk(a, b.charCodeAt(d)) } function Wq(a, c) { var b = []; if (fb(a, b, 27)) return []; R(b, c); return b } function Xq(a, c) {
                var b = Ia(c); if (!b) return c[Va] = -1, null; var d = +c[Va]; if (!isFinite(d) || 0 >= d) return null; if (c.attributes) for (var e = c; e;) { if (e.attributes.gk) return null; e = e.parentElement } e = 64; var f = we(a, c), g = f && f[Va] ? f[Va] : 0; 0 > g && (g = 0); b = (b || "").toUpperCase(); var h = Yq()[b]; h || (e |= 2); var k =
                    qj(a, c); k || (e |= 4); var l = wf(a, c); (f = f ? wf(a, f) : null) && l[0] === f[0] && l[1] === f[1] && l[2] === f[2] && l[3] === f[3] && (e |= 8); pc[d].Wf = l[0] + "x" + l[1]; pc[d].size = l[2] + "x" + l[3]; c.id && "string" === typeof c.id && (e |= 32); f = []; if (fb(a, f, 1)) return null; R(f, d); Ib(f, e); R(f, g); h ? Ib(f, h) : Dg(f, b); k && R(f, k); e & 8 || (R(f, l[0]), R(f, l[1]), R(f, l[2]), R(f, l[3])); e & 32 && Dg(f, c.id); Ib(f, 0); return f
            } function Zq(a, c) {
                var b = c[Va]; if (!b || 0 > b || !uf(c) || !c.form || Mh(a, c.form)) return []; var d = tj(a, c.form); if (0 > d) return []; if (ye(c)) {
                    var e = {
                        text: 0, color: 0,
                        tc: 0, nk: 0, "datetime-local": 0, email: 0, Uf: 0, Jk: 0, search: 0, Pk: 0, time: 0, url: 0, month: 0, Sk: 0, password: 2, Ik: 3, jk: 4, file: 6, image: 7
                    }; e = e[c.type]
                } else { e = { dk: 1, ek: 5 }; var f = Ia(c); e = V(f) ? "" : e[f] } if ("number" !== typeof e) return []; f = -1; for (var g = c.form.elements, h = g.length, k = 0, l = 0; k < h; k += 1)if (g[k].name === c.name) { if (g[k] === c) { f = l; break } l += 1 } if (0 > f) return []; g = []; if (fb(a, g, 7)) return []; R(g, b); R(g, d); R(g, e); Cg(g, c.name || ""); R(g, f); return g
            } function $q(a, c, b) {
                var d = tj(a, b); if (0 > d) return []; var e = b.elements, f = e.length; b = [];
                for (var g = 0; g < f; g += 1)if (!sj(e[g])) { var h = e[g][Va]; h && 0 < h && b.push(h) } e = []; if (fb(a, e, 11)) return []; R(e, c); R(e, d); R(e, b.length); for (a = 0; a < b.length; a += 1)R(e, b[a]); return e
            } function oc(a, c, b) { void 0 === b && (b = []); for (var d = []; c && !Ym(a, c, b); c = we(a, c))d.push(c); z(function (e) { pc.ud += 1; var f = pc.ud; e[Va] = f; pc[f] = {}; f = Xq(a, e); e = Zq(a, e); f && e && (La(b, f), La(b, e)) }, ar(d)); return b } function br(a) { var c = a.ra; if (!hd || c && !c.fromElement) return Kh(a) } function cr(a) { var c = a.ra; if (c && !c.toElement) return vf(a) } function hk(a) {
                var c =
                    vc(a.ra); if (c && ee(c)) { var b = Jh(a, c); var d = sb(a.l), e = []; fb(a.l, e, 17) ? a = [] : (R(e, d), R(e, c[Va]), a = e); return va(b, a) }
            } function ik(a) { var c = a.l, b = a.ra.target; if (b && ee(b)) { c = oc(c, b); var d = sb(a.l), e = []; fb(a.l, e, 18) ? a = [] : (R(e, d), R(e, b[Va]), a = e); return va(c, a) } } function jk(a) {
                var c = a.l, b = vc(a.ra); if (!b || rf(c, b) || id(c, b)) return []; if (uf(b)) {
                    var d = H(c).o("isEU"), e = gd(c, b, d), f = e.sb; d = e.Vd; e = e.Ed; if (ze(b)) var g = b.checked; else g = b.value, g = f ? L("", kk(g.split(""))) : g; c = oc(c, b); f = sb(a.l); d = d && !e; e = []; fb(a.l, e, 39) ? a =
                        [] : (R(e, f), R(e, b[Va]), Dg(e, String(g)), Ib(e, d ? 1 : 0), a = e); return va(c, a)
                }
            } function Ie(a) {
                var c = a.l, b = a.ra, d = vc(b); if (!d || "SCROLLBAR" === d.nodeName) return []; var e = [], f = v(e, La); d && ee(d) ? f(Jh(a, d)) : f(oc(c, d)); var g = Ji(c, b); a = sb(a.l); f = b.type; var h = [g.x, g.y]; g = b.which; b = b.button; var k; var l = xe(c, d); var m = l[0]; for (l = l[1]; d && (!m || !l);)if (d = we(c, d)) l = xe(c, d), m = l[0], l = l[1]; d ? (m = d[Va], !m || 0 > m ? c = [] : (l = (k = {}, k.mousemove = 2, k.click = 32, k.dblclick = 33, k.mousedown = 4, k.mouseup = 30, k.touch = 12, k)[f]) ? (k = [], d = jg(c, d), fb(c,
                    k, l) ? c = [] : (R(k, a), R(k, m), R(k, Math.max(0, h[0] - d.left)), R(k, Math.max(0, h[1] - d.top)), /^mouse(up|down)|click$/.test(f) && (c = g || b, Ib(k, 2 > c ? 1 : c === (g ? 2 : 4) ? 4 : 2)), c = k)) : c = []) : c = []; return va(e, c)
            } function dr(a) {
                var c = null, b = a.l, d = b.document; if (b.getSelection) { d = void 0; try { d = b.getSelection() } catch (g) { return [] } if (Ta(d)) return []; var e = "" + d; c = d.anchorNode } else d.selection && d.selection.createRange && (d = d.selection.createRange(), e = d.text, c = d.parentElement()); if ("string" !== typeof e) return []; try {
                    for (; c && 1 !== c.nodeType;)c =
                        c.parentNode
                } catch (g) { return [] } if (!c) return []; d = gd(b, c).sb || id(b, c, !0); c = c.getElementsByTagName("*"); for (var f = 0; f < c.length && !d;)d = c[f], d = gd(b, d).sb || id(b, d, !0), f += 1; if (e !== Eg) return Eg = e, d = d ? L("", kk(e.split(""))) : e, e = sb(a.l), 0 === d.length ? d = b = "" : 100 >= d.length ? (b = d, d = "") : 200 >= d.length ? (b = d.substr(0, 100), d = d.substr(100)) : (b = d.substr(0, 97), d = d.substr(d.length - 97)), c = [], fb(a.l, c, 29) ? a = [] : (R(c, e), Cg(c, b), Cg(c, d), a = c), a
            } function er(a) { return va(Ie(a), dr(a) || []) } function lk(a) {
                return (a.shiftKey ? 2 : 0) | (a.ctrlKey ?
                    4 : 0) | (a.altKey ? 1 : 0) | (a.metaKey ? 8 : 0) | (a.ctrlKey || a.altKey ? 16 : 0)
            } function mk(a) { var c = []; Fg || (Fg = !0, Eg && c.push.apply(c, Wq(a.l, sb(a.l))), Gb(a.l, function () { Fg = !1 }, "fv.c")); return c } function nk(a, c, b, d) { var e = vc(c); if (!e || yf(a, e)) return []; var f = de(e), g = xf(e); c = gd(a, e).sb; var h = H(a); if (!f && (g && h.o("isEU") || id(a, e))) a = []; else { f = oc(a, e); h = sb(a); g = []; if (fb(a, g, 38)) a = []; else { R(g, h); gk(g, b); Ib(g, d); a = e[Va]; if (!a || 0 > a) a = 0; R(g, a); Ib(g, c ? 1 : 0); a = g } a = va(f, a) } return a } function fr(a) {
                var c = a.l, b = a.ra, d = b.keyCode, e =
                    lk(b), f = [], g = v(f, La); if ({ 3: 1, 8: 1, 9: 1, 13: 1, 16: 1, 17: 1, 18: 1, 19: 1, 20: 1, 27: 1, 33: 1, 34: 1, 35: 1, 36: 1, 37: 1, 38: 1, 39: 1, 40: 1, 45: 1, 46: 1, 91: 1, 92: 1, 93: 1, 106: 1, 110: 1, 111: 1, 144: 1, 145: 1 }[d] || 112 <= d && 123 >= d || 96 <= d && 105 >= d || e & 16) 19 === d && 4 === (e & -17) && (d = 144), g(nk(c, b, d, e | 16)), Gg = !1, Gb(c, function () { Gg = !0 }, "fv.kd"), !(67 === d && e & 4) || e & 1 || e & 2 || g(mk(a)); return f
            } function gr(a) { var c = a.l; a = a.ra; var b = []; Gg && !Hg && 0 !== a.which && (b.push.apply(b, nk(c, a, a.charCode || a.keyCode, lk(a))), Hg = !0, Gb(c, function () { Hg = !1 }, "fv.kp")); return b }
            function ok(a) { var c = a.l, b = vc(a.ra); if (!b || Mh(c, b)) return []; var d = []; if ("FORM" === b.nodeName) { for (var e = b.elements, f = 0; f < e.length; f += 1)sj(e[f]) || d.push.apply(d, oc(c, e[f])); d.push.apply(d, $q(c, sb(a.l), b)) } return d } function hr(a) { var c = a.flush; a = vc(a.ra); "BODY" === Ia(a) && c() } function pm(a, c) {
                var b, d = vc(c), e = qa.lc, f = Kd(a); if (d && qc("ym-advanced-informer", d)) {
                    var g = f.o("ifc", 0) + 1; f.C("ifc", g); g = d.getAttribute("data-lang"); var h = Ga(d.getAttribute("data-cid") || ""); if (h || 0 === h) (e = n(a, "Ya." + e + ".informer")) ?
                        e((b = {}, b.i = d, b.id = h, b.lang = g, b)) : f.C("ib", !0), b = c || window.event, b.preventDefault ? b.preventDefault() : b.returnValue = !1
                }
            } function fh(a, c, b, d) { return function () { var e = za(arguments); e = d.apply(void 0, e); return V(e) ? Ha(a, c) : e } } function eh(a, c, b, d) { return C(a, "cm." + b, d) } function rl(a, c, b, d, e) { return b.length && e ? F(M(function (f, g, h) { return b[h] ? f.concat(F([a, c, d], g)) : f }, [], b), u)()(e) : e } var Pc = { construct: "Metrika2", callbackPostfix: "2", version: "sm0eap24cmhk4ozkpnx0n", host: "mc.yandex.ru" }, zg = [], Tf = /\./g, Xj = Ka(String.prototype.indexOf,
                "indexOf"), pk = Ka(Array.prototype.join, "join"), L = pk ? function (a, c) { return pk.call(c, a) } : Kq, ma = ka(function (a, c) { return a === c }), bd = ka(function (a, c) { a(c); return c }), od = ka(L), Aa = ka(Vj), Ta = ma(null), V = ma(void 0), Ee = Ka(Array.from, "from"), qk = Ka(Function.prototype.bind, "bind"), D = qk ? function () { var a = za(arguments); return qk.apply(a[0], va([a[1]], a.slice(2))) } : Jq, Mc = ka(F), pi = ka(oa), rk = Ka(Array.prototype.reduce, "reduce"), M = rk ? function (a, c, b) { return rk.call(b, a, c) } : Id, $i = u, Ei = u(O, ia), xg, Uj = Lb(window), ir = Qb(Uj), wg =
                    Object.prototype.hasOwnProperty, H = w(Kd), U = Qb(n), Na = U("length"), Cf = Array.prototype.every ? function (a, c) { return Array.prototype.every.call(c, a) } : function (a, c) { return M(function (b, d) { return b ? a(d) : !1 }, !0, c) }, sk = Ka(Array.prototype.filter, "filter"), Y = sk ? function (a, c) { return sk.call(c, a) } : Tj, Hc = ka(Y), eb = Da("find", Array.prototype.find) ? function (a, c) { return Array.prototype.find.call(c, a) } : Hq, G = Array.prototype.includes ? function (a, c) { return Array.prototype.includes.call(c, a) } : Gq, sc = Qb(G), tk = w(function (a) {
                        a =
                        n(a, "navigator") || {}; var c = n(a, "userAgent") || ""; return { If: -1 < (n(a, "vendor") || "").indexOf("Apple"), Ig: c }
                    }), kb = w(U("navigator.userAgent")), Hd = w(function (a) { var c = n(a, "document.documentElement.style"); a = n(a, "InstallTrigger"); return !(!(c && "MozAppearance" in c) || na(a)) }), Jd, Fq = u(tg, ma("[object Array]")), uk = Ka(Array.prototype.map, "map"), A = uk && Eq(window, Array.prototype.map) ? function (a, c) { return c && 0 < c.length ? uk.call(c, a) : [] } : Sj, z = A, kc = Array.prototype.flatMap ? function (a, c) {
                        return Array.prototype.flatMap.call(c,
                            a)
                    } : Dq, gb = ka(A), sq = Qb(A), Oa = vg(function (a, c) { return Array.prototype.some.call(c, a) }, function (a, c) { for (var b = 0; b < c.length; b += 1)if (b in c && a.call(c, c[b], b)) return !0; return !1 }, Da("some", Array.prototype.some)), se = w(Lb), Kc = U("0"), jr = ka(ug), vk = Ka(Array.prototype.reverse, "reverse"), ar = vk ? function (a) { return vk.call(a) } : Cq, wk = Qb(parseInt), Ga = wk(10), Ig = wk(2), xa = Object.entries ? function (a) { return a ? Object.entries(a) : [] } : Pj, ca = Object.keys ? Object.keys : Qj, kr = u(Pj, v(U("1"), Sj)), lr = Object.values ? Object.values : kr,
                y = Object.assign || Bq, Ih = ka(function (a, c) { return y({}, a, c) }), Yc = w(u(U("String.fromCharCode"), v("fromCharCode", Da), Rb)), De = w(u(kb, Xa(/ipad|iphone|ipod/i))), Hf = w(function (a) { return n(a, "navigator.platform") || "" }), pd = w(function (a) { a = tk(a); var c = a.Ig; return a.If && !c.match("CriOS") }), mr = Xa(/Android.*Version\/[0-9][0-9.]*\sChrome\/[0-9][0-9.]|Android.*Version\/[0-9][0-9.]*\s(?:Mobile\s)?Safari\/[0-9][0-9.]*\sChrome\/[0-9][0-9.]*|; wv\).*Chrome\/[0-9][0-9.]*\sMobile/), nr = Xa(/; wv\)/), nd = w(function (a) {
                    a = kb(a);
                    return nr(a) || mr(a)
                }), or = /Chrome\/(\d+)\./, pr = w(function (a) { return (a = (n(a, "navigator.userAgent") || "").match(or)) && a.length ? 76 <= Ga(a[1]) : !1 }), md = w(function (a) { var c = (kb(a) || "").toLowerCase(); a = Hf(a); return !(-1 === c.indexOf("android") || -1 === c.indexOf(c, "mobile") || !/^android|linux armv/i.test(a)) }), qr = "other none unknown wifi ethernet bluetooth cellular wimax mixed".split(" "), rr = w(function (a) { var c = n(a, "navigator.connection.type"); if (V(c)) return null; a = se(a)(c, qr); return -1 === a ? c : "" + a }), kg = w(u(U("document.addEventListener"),
                    Rb)), xk = w(function (a) { var c = n(a, "navigator") || {}; return M(function (b, d) { return b || n(c, d) }, "", ["language", "userLanguage", "browserLanguage", "systemLanguage"]) }), ih = w(function (a) { var c = n(a, "navigator") || {}; a = xk(a); Ea(a) || (a = "", c = n(c, "languages.0"), Ea(c) && (a = c)); return a.toLowerCase().split("-")[0] }), db = w(function (a) { var c = !1; try { c = a.top !== a } catch (b) { } return c }), sr = w(function (a) { var c = !1; try { c = a.top.contentWindow } catch (b) { } return c }), tr = w(function (a) { var c = !1; try { c = a.navigator.javaEnabled() } catch (b) { } return c }),
                ur = w(function (a) {
                    var c = "__webdriver_evaluate __selenium_evaluate __webdriver_script_function __webdriver_script_func __webdriver_script_fn __fxdriver_evaluate __driver_unwrapped __webdriver_unwrapped __driver_evaluate __selenium_unwrapped __fxdriver_unwrapped".split(" "), b = n(a, "external"); b = -1 !== (n(b, "toString") ? "" + b.toString() : "").indexOf("Sequentum"); var d = n(a, "document.documentElement"), e = ["selenium", "webdriver", "driver"]; return !!(Oa(v(a, n), ["_selenium", "callSelenium", "_Selenium_IDE_Recorder"]) ||
                        Oa(v(n(a, "document"), n), c) || b || d && Oa(D(d.getAttribute, d), e))
                }), vr = w(function (a) { return !!(Oa(v(a, n), ["_phantom", "__nightmare", "callPhantom"]) || /(PhantomJS)|(HeadlessChrome)/.test(kb(a)) || n(a, "navigator.webdriver") || n(a, "isChrome") && !n(a, "chrome")) }), wr = w(function (a) { return Cf(v(a, n), ["ia_document.shareURL", "ia_document.referrer"]) }), xr = new RegExp(L("|", "yandex.com/bots;Googlebot;APIs-Google;Mediapartners-Google;AdsBot-Google;FeedFetcher-Google;Google-Read-Aloud;DuplexWeb-Google;Google Favicon;googleweblight;Chrome-Lighthouse;Mail.RU_Bot;StackRambler;Slurp;msnbot;bingbot;www.baidu.com/search/spi_?der.htm".split(";")).replace(/[./]/g,
                    "\\$&")), Jl = w(u(U("navigator.userAgent"), Xa(xr))), Nd = w(function (a) { var c = kb(a) || "", b = c.match(/Mac OS X ([0-9]+)_([0-9]+)/); b = b ? [+b[1], +b[2]] : [0, 0]; c = c.match(/iPhone OS ([1-9]+)_([0-9]+)/); return 14 <= (c ? +c[1] : 0) ? !0 : (De(a) || 10 < b[0] || 10 === b[0] && 13 <= b[1]) && pd(a) }), Aq = /Edg\/(\d+)\./, zq = /Firefox\/([0-9]+)/, Zf = w(function (a) { return Nd(a) || df(a, 68) || ef(a, 79) }), yr = Pc.construct, Yb = Pc.host, Jg = kg(window), qa = {
                        Vg: 24226447, Pg: 26302566, Yg: 51533966, bk: 65446441, Ua: "https:", fb: "970", lc: yr, Ug: Jg ? 512 : 2048, Sg: Jg ? 512 : 2048,
                        Tg: Jg ? 100 : 400, ck: 100, Wg: "noindex"
                    }, ec = {}, N = w(function (a) { return a.id + ":" + a.ca }), We = ma("1"), Sb = { id: "id", Se: "ut", ca: "type", ae: "ldc", qb: "nck", Ac: "url", Th: "referrer" }, zr = /^\d+$/, Qc = { id: function (a) { a = "" + (a || "0"); zr.test(a) || (a = "0"); try { var c = Ga(a) } catch (b) { c = 0 } return c }, ca: function (a) { return "" + (a || 0 === a ? a : "0") }, qb: Boolean, Se: Boolean }; Sb.oc = "defer"; Qc.oc = Boolean; Sb.da = "params"; Qc.da = function (a) { return Ma(a) || ea(a) ? a : null }; Sb.Re = "userParams"; Sb.Dg = "triggerEvent"; Qc.Dg = Boolean; Sb.mg = "sendTitle"; Qc.mg = function (a) {
                        return !!a ||
                            V(a)
                    }; Sb.Ne = "trackHash"; Qc.Ne = Boolean; Sb.Bg = "trackLinks"; Sb.Dh = "enableAll"; var Ve = M(function (a, c) { var b = c[0]; a[b] = { ia: c[1], Za: Qc[b] }; return a }, {}, xa(Sb)), yk = ka(function (a, c) { var b = c || {}; return { l: v(b, O), o: function (d, e) { var f = b[d]; return V(f) && !V(e) ? e : f }, C: function (d, e) { b[d] = e; return this }, $b: function (d, e) { return "" === e || na(e) ? this : this.C(d, e) }, Aa: v(b, a) } }), Ba = yk(function (a) { var c = ""; a = M(function (b, d) { var e = d[0], f = "" + e + ":" + d[1]; "t" === e ? c = f : b.push(f); return b }, [], xa(a)); c && a.push(c); return L(":", a) }),
                        Kg, Kj = (Kg = {}, Kg.w = [[function (a, c) { return { aa: function (b, d) { var e, f = b.G; f = (e = {}, e["page-url"] = f && f["page-url"] || "", e.charset = "utf-8", e); "0" !== c.ca && (f["cnt-class"] = c.ca); b.H || (b.H = Ba()); e = b.H; var g = b.Y; f = { sa: { Pa: "watch/" + c.id }, Y: y(void 0 === g ? {} : g, { jd: !(!e.o("pv") || e.o("ar") || e.o("wh")) }), G: y(b.G || {}, f) }; y(b, f); d() } } }, 1]], Kg), zk = v(Kj, Lj), Ar = setTimeout; Fa.prototype["catch"] = function (a) { return this.then(null, a) }; Fa.prototype.then = function (a, c) { var b = new this.constructor(Mq); Zj(this, new Oq(a, c, b)); return b };
            Fa.prototype["finally"] = function (a) { var c = this.constructor; return this.then(function (b) { return c.resolve(a()).then(function () { return b }) }, function (b) { return c.resolve(a()).then(function () { return c.reject(b) }) }) }; Fa.all = function (a) {
                return new Fa(function (c, b) {
                    function d(h, k) { try { if (k && ("object" === typeof k || "function" === typeof k)) { var l = k.then; if ("function" === typeof l) { l.call(k, function (m) { d(h, m) }, b); return } } e[h] = k; 0 === --f && c(e) } catch (m) { b(m) } } if (!a || "undefined" === typeof a.length) return b(new TypeError("Promise.all accepts an array"));
                    var e = Array.prototype.slice.call(a); if (0 === e.length) return c([]); for (var f = e.length, g = 0; g < e.length; g++)d(g, e[g])
                })
            }; Fa.resolve = function (a) { return a && "object" === typeof a && a.constructor === Fa ? a : new Fa(function (c) { c(a) }) }; Fa.reject = function (a) { return new Fa(function (c, b) { b(a) }) }; Fa.race = function (a) { return new Fa(function (c, b) { if (!a || "undefined" === typeof a.length) return b(new TypeError("Promise.race accepts an array")); for (var d = 0, e = a.length; d < e; d++)Fa.resolve(a[d]).then(c, b) }) }; Fa.Xe = "function" === typeof setImmediate &&
                function (a) { setImmediate(a) } || function (a) { Ar(a, 0) }; Fa.$g = function (a) { "undefined" !== typeof console && console && console.warn("Possible Unhandled Promise Rejection:", a) }; var K = window.Promise, Br = Ka(K, "Promise"), Ak = Ka(n(K, "resolve"), "resolve"), Bk = Ka(n(K, "reject"), "reject"), Ck = Ka(n(K, "all"), "all"); if (G(!1, [Br, Ak, Bk, Ck])) K = Fa; else { var Je = function (a) { return new Promise(a) }; Je.resolve = D(Ak, K); Je.reject = D(Bk, K); Je.all = D(Ck, K); K = Je } var Jj = sc([26812653]), Uf = w(u(U("id"), Jj), N), zb = [], X = [], zc = [], Td = [], Lg = [], Ke = [],
                    xq = ub("debuggerEvents", sd), uq = ["http.0.st..rt.", "network error occurred", "send beacon", "Content Security Policy", "DOM Exception 18"], Od, gc = function (a) { return function (c, b) { void 0 === b && (b = !1); if (Od) var d = new Od(c); else Da("Error", a.Error) ? (Od = a.Error, d = new a.Error(c)) : (Od = wq, d = new Od(c)); b && (d.unk = !0); return d } }(window), vq = Xa(/^http./), tq = Xa(/^err.kn/), Ij = [], Cr = w(function (a) {
                        var c = !1; if (!a.addEventListener) return c; try {
                            var b = Object.defineProperty({}, "passive", { get: function () { c = !0; return 1 } }); a.addEventListener("test",
                                B, b)
                        } catch (d) { } return c
                    }), Dr = ka(function (a, c) { return a ? y({ capture: !0, passive: !0 }, c || {}) : !!c }), ja = w(function (a) { a = Cr(a); var c = Dr(a), b = {}; return y(b, { D: function (d, e, f, g) { z(function (h) { var k = c(g); Hj(d, h, f, k, !1) }, e); return D(b.cc, b, d, e, f, g) }, cc: function (d, e, f, g) { z(function (h) { var k = c(g); Hj(d, h, f, k, !0) }, e) } }) }), ha = w(Vf), Ej = ka(function (a, c) { for (var b = []; !Gd(c);) { var d = oq(c); a(d, function (e) { return e(c) }); b.push(d) } return b }), Mg = ka(function (a, c) { return Aa(function (b, d) { return c(b, function (e) { try { d(a(e)) } catch (f) { b(f) } }) }) }),
                    Le = ka(function (a, c) { return Aa(function (b, d) { return c(b, function (e) { try { a(e)(Ra(b, d)) } catch (f) { b(f) } }) }) }), pg = [], qg = !1, og = !1, yj = ["webkitvisibilitychange", "visibilitychange"], xj = yk(function (a) { a = xa(a); return L("", A(function (c) { var b = c[0]; c = c[1]; return Ta(c) ? "" : b + "(" + c + ")" }, a)) }), Dk = "A B BIG BODY BUTTON DD DIV DL DT EM FIELDSET FORM H1 H2 H3 H4 H5 H6 HR I IMG INPUT LI OL P PRE SELECT SMALL SPAN STRONG SUB SUP TABLE TBODY TD TEXTAREA TFOOT TH THEAD TR U UL ABBR AREA BLOCKQUOTE CAPTION CENTER CITE CODE CANVAS DFN EMBED FONT INS KBD LEGEND LABEL MAP OBJECT Q S SAMP STRIKE TT ARTICLE AUDIO ASIDE FOOTER HEADER MENU METER NAV PROGRESS SECTION TIME VIDEO NOINDEX NOBR MAIN svg circle clippath ellipse defs foreignobject g glyph glyphref image line lineargradient marker mask path pattern polygon polyline radialgradient rect set text textpath title".split(" "),
                    qp = /^ *(data|javascript):/i, Li = new RegExp(L("", ["\\.(" + L("|", "3gp 7z aac ac3 acs ai avi ape apk asf bmp bz2 cab cdr crc32 css csv cue divx dmg djvu? doc(x|m|b)? emf eps exe flac? flv iso swf gif t?gz jpe?g? js m3u8? m4a mp(3|4|e?g?) m4v md5 mkv mov msi ods og(g|m|v) psd rar rss rtf sea sfv sit sha1 svg tar tif?f torrent ts txt vob wave? wma wmv wmf webm ppt(x|m|b)? xls(x|m|b)? pdf phps png xpi g?zip".split(" ")) + ")$"]), "i"), Pa, ak = (Pa = {}, Pa.hit = "h", Pa.params = "p", Pa.reachGoal = "g", Pa.userParams = "up",
                        Pa.trackHash = "th", Pa.accurateTrackBounce = "atb", Pa.notBounce = "nb", Pa.addFileExtension = "fe", Pa.extLink = "el", Pa.file = "fc", Pa.trackLinks = "tl", Pa.destruct = "d", Pa.setUserID = "ui", Pa.getClientID = "ci", Pa.clickmap = "cm", Pa.enableAll = "ea", Pa), Er = w(function () { var a = 0; return function () { return a += 1 } }), Fr = u(N, Er, ia), ag = {
                            mc: function (a) { a = Kd(a).o("mt", {}); a = xa(a); return a.length ? M(function (c, b, d) { return "" + c + (d ? "-" : "") + b[0] + "-" + b[1] }, "", a) : null }, clc: function (a) {
                                var c = H(a).o("cls", { kc: 0, x: 0, y: 0 }), b = c.kc, d = c.x; c = c.y;
                                return b ? b + "-" + a.Math.floor(d / b) + "-" + a.Math.floor(c / b) : b + "-" + d + "-" + c
                            }, rqnt: function (a, c, b) { a = b.G; return !a || a.nohit ? null : Fr(c) }
                        }, Cb = F([1, null], vg), cd = F([1, 0], vg), gq = w(function (a) { vj(a, "_ymBRC", "1"); var c = "1" !== uj(a, "_ymBRC"); c || wj(a, "_ymBRC"); return c }), Qa = w(gf), Rc = w(gf, function (a, c, b) { return "" + c + b }), Gr = w(function (a) { a = n(a, "document") || {}; return ("" + (a.characterSet || a.charset || "")).toLowerCase() }), $a = w(u(U("document"), v("createElement", cc))), Nh = w(function (a) {
                            var c = n(a, "Element.prototype"); return c ?
                                (a = eb(function (b) { return Da(b, c[b]) }, ["matches", "webkitMatchesSelector", "mozMatchesSelector", "msMatchesSelector", "oMatchesSelector"])) ? c[a] : null : null
                        }), Hr = ma("INPUT"), ye = u(Ia, Hr), Ir = ma("TEXTAREA"), dq = u(Ia, Ir), Jr = ma("SELECT"), eq = u(Ia, Jr), ze = u(U("type"), Xa(/^(checkbox|radio)$/)), uf = u(Ia, Xa(/^INPUT|SELECT|TEXTAREA$/)), ee = u(Ia, Xa(/^INPUT|SELECT|TEXTAREA|BUTTON$/)), zf = "INPUT CHECKBOX RADIO TEXTAREA SELECT PROGRESS".split(" "), cq = ["submit", "image", "hidden"], bj = /^\s+|\s+$/g, rj = Ka(String.prototype.trim, "trim"),
                    Ek = ka(function (a, c) { return c.replace(a, "") }), ti = Ek(/\s/g), Kb = Ek(/\D/g), Kf = w(function () { for (var a = 59, c = {}, b = 0; b < Dk.length; b += 1)c[Dk[b]] = String.fromCharCode(a), a += 1; return c }), pj = w(function (a) { return { rk: a, kb: null, tb: [] } }), nj = {}, hg = {}; nj.p = 500; var mj = { i: "id", n: "name", h: "href", ty: "type" }; hg.h = !0; hg.c = !0; var Nc = {}; Nc.p = ig; Nc.c = function (a, c, b) { (a = nb(n(c, "textContent"))) && b && (b = b(c), b.length && Oa(u(U("textContent"), nb, ma(a)), b) && (a = "")); ye(c) && (a = nb(c.getAttribute && c.getAttribute("value") || a)); return a };
            var Sc, gg = "button," + A(function (a) { return 'input[type="' + a + '"]' }, ["button", "submit", "reset", "file"]).join(",") + ",a", Mf = v(gg, tb), $p = (Sc = {}, Sc.A = "h", Sc.BUTTON = "i", Sc.DIV = "i", Sc.INPUT = "ty", Sc), Zp = "hash host hostname href pathname port protocol search".split(" "), fg = "ru ua by kz az kg lv md tj tm uz ee fr lt com co.il com.ge com.am com.tr com.ua com.ru".split(" "), lj = /(?:^|\.)(?:(ya\.ru)|(?:yandex)\.(\w+|com?\.\w+))$/, qe = w(function (a) { return (a ? a.replace(/^www\./, "") : "").toLowerCase() }), Kr = w(function (a) {
                a =
                T(a).hostname; var c = !1; a && (c = -1 !== a.search(lj)); return c
            }), Fk = u(T, U("protocol"), ma("https:")), Gk = /\/$/, Lr = w(u(ha, Aa(function (a) { return -(new a.l.Date).getTimezoneOffset() }))), Mr = u(ha, Aa(function (a) { a = new a.l.Date; return L("", A(pq, [a.getFullYear(), a.getMonth() + 1, a.getDate(), a.getHours(), a.getMinutes(), a.getSeconds()])) })), Nr = u(ha, Aa(bg)), Hk = w(u(ha, Aa(function (a) { return a.za[0] }))), Or = w(wc), Xp = w(function (a) { return pr(a) && Fk(a) ? "SameSite=None;Secure;" : "" }), eg = ["metrika_enabled"], dg = [], jj = ub("gsc", hj),
                Yp = /:\d+$/, Pq = w(function (a) { var c = (T(a).host || "").split("."); return 1 === c.length ? c[0] : M(function (b, d, e) { e += 1; 2 <= e && !b && (e = L(".", c.slice(-e)), Oh(a, e) && (b = e)); return b }, "", c) }), Xb = w(Ac), gj = ub("r", function (a, c) { var b = fj(a, c), d = b[0]; return !b[1] && d }), Dd = w(function () { return { Ha: {}, pending: {}, children: {} } }), Ng = U("postMessage"), Pr = E("s.f", function (a, c, b, d, e) {
                    c = c(d); var f = Dd(a), g = L(":", [c.$.tc, c.$.key]); if (Ng(b)) {
                        f.pending[g] = e; try { b.postMessage(c.wg, "*") } catch (h) { delete f.pending[g]; return } W(a, function () { delete f.pending[g] },
                            5E3, "if.s")
                    }
                }), Qr = E("s.fh", function (a, c, b, d, e, f) {
                    var g = null, h = null, k = Dd(a), l = null; try { g = rb(a, f.data), h = g.__yminfo, l = g.data } catch (m) { return } if (!na(h) && h.substring && "__yminfo" === h.substring(0, 8) && !na(l) && (g = h.split(":"), 4 === g.length)) if (h = c.id, c = g[1], a = g[2], g = g[3], !ea(l) && l.type && "0" === g && l.counterId) { if (!l.toCounter || l.toCounter == h) { k = null; try { k = f.source } catch (m) { } !Ta(k) && Ng(k) && (f = d.O(l.type, [f, l]), e = A(u(O, Ih(e)), f.concat([{}])), l = b([c, a, l.counterId], e), k.postMessage(l.wg, "*")) } } else g === "" + h && ea(l) &&
                        Y(function (m) { return !(!m.hid || !m.counterId) }, l).length === l.length && (b = k.pending[L(":", [c, a])]) && b.apply(null, [f].concat(l))
                }), Zc = w(function (a, c) {
                    var b, d = cc("getElementsByTagName", n(a, "document")), e = Dd(a), f = Ng(a), g = dd(a), h = ja(a); if (!d || !f) return null; d = d.call(a.document, "iframe"); f = (b = {}, b.counterId = c.id, b.hid = "" + Hb(a), b); Zf(a) && (f.duid = Cc(a, c)); Tp(a, g); Up(a); b = Vp(a, f); var k = F([a, v([], b)], Pr); z(function (l) {
                        var m = null; try { m = l.contentWindow } catch (p) { } m && k(m, { type: "initToChild" }, function (p, q) {
                            g.O("initToParent",
                                [p, q])
                        })
                    }, d); db(a) && k(a.parent, { type: "initToParent" }, function (l, m) { g.O("parentConnect", [l, m]) }); h.D(a, ["message"], F([a, c, b, g, f], Qr)); return { ba: g, Ha: e.Ha, children: e.children, De: k }
                }, u(vb, N)), $d = w(function (a, c) { if (!Zf(a) || !db(a)) return Cc(a, c); var b = Zc(a, c); return b && b.Ha[c.id] ? b.Ha[c.id].info.duid || Cc(a, c) : Cc(a, c) }, function (a, c) { return "{" + c.ae + c.qb }), Rr = w(function (a) { a = H(a); var c = a.o("counterNum", 0) + 1; a.C("counterNum", c); return c }, u(vb, N)), fa, $f = (fa = {}, fa.vf = v(Pc.version, O), fa.nt = rr, fa.fp = function (a,
                    c, b) { if (b.G && b.G.nohit) return null; c = N(c); b = Or(a); if (b[c]) return null; a: { var d = Hk(a), e = n(a, "performance.getEntriesByType"); if (S(e)) { if (a = Y(u(O, U("name"), ma("first-contentful-paint")), e.call(a.performance, "paint")), a.length) { a = a[0].startTime; break a } } else { e = n(a, "chrome.loadTimes"); if (S(e) && (e = e.call(a.chrome), e = n(e, "firstPaintTime"), d && e)) { a = 1E3 * e - d; break a } if (a = n(a, "performance.timing.msFirstPaint")) { a -= d; break a } } a = void 0 } return a ? (b[c] = a, Math.round(a)) : null }, fa.fu = function (a, c, b) {
                        var d = b.G; if (!d) return null;
                        c = (n(a, "document.referrer") || "").replace(Gk, ""); b = (d["page-ref"] || "").replace(Gk, ""); d = d["page-url"]; a = T(a).href !== d; c = c !== b; b = 0; a && c ? b = 3 : c ? b = 1 : a && (b = 2); return b
                    }, fa.en = Gr, fa.la = xk, fa.ut = function (a, c, b) { var d = b.V; b = b.G; d = d && d.Oc; b && (Kr(a) || c.Se || d) && (b.ut = qa.Wg); return null }, fa.v = v(qa.fb, O), fa.cn = Rr, fa.dp = function (a) {
                        var c = H(a), b = c.o("bt", {}); if (V(c.o("bt"))) {
                            var d = n(a, "navigator.getBattery"); try { b.p = d && d.call(a.navigator) } catch (e) { } c.C("bt", b); b.p && b.p.then && b.p.then(C(a, "bi:dp.p", function (e) {
                                b.Tj =
                                n(e, "charging") && 0 === n(e, "chargingTime")
                            }))
                        } return cd(b.Tj)
                    }, fa.ls = w(function (a, c) { var b = Rc(a, c.id), d = ha(a), e = b.o("lsid"); return +e ? e : (d = Ua(a, 0, d(Z)), b.C("lsid", d), d) }, vb), fa.hid = Hb, fa.phid = function (a, c) { if (!db(a)) return null; var b = Zc(a, c); if (!b) return null; var d = ca(b.Ha); return d.length ? b.Ha[d[0]].info.hid : null }, fa.z = Lr, fa.i = Mr, fa.et = Nr, fa.c = u(U("navigator.cookieEnabled"), Cb), fa.rn = u(O, Ua), fa.rqn = function (a, c, b) {
                        b = b.G; if (!b || b.nohit) return null; c = N(c); a = Rc(a, c); c = (a.o("reqNum", 0) || 0) + 1; a.C("reqNum",
                            c); if (a.o("reqNum") === c) return c; a.uc("reqNum"); return null
                    }, fa.u = $d, fa.tp = u(vb, Nj, Cb), fa.tpid = u(vb, function (a) { a = N(a); return ec[a] && ec[a].Kj || null }), fa.w = function (a) { a = Fd(a); return a[0] + "x" + a[1] }, fa.s = function (a) { var c = n(a, "screen"); if (c) { a = n(c, "width"); var b = n(c, "height"); c = n(c, "colorDepth") || n(c, "pixelDepth"); return L("x", [a, b, c]) } return null }, fa.sk = U("devicePixelRatio"), fa.ifr = u(db, Cb), fa.j = u(tr, Cb), fa.sti = function (a) { return db(a) ? sr(a) ? "1" : null : null }, fa), Sp = w(function () { return La(ca($f), ca(ag)) }),
                Rp = w(wc, N), dj = w(function () { return { qf: null, va: [] } }, N), Bd = ub("retryReqs", function (a) { return Qa(a).o("retryReqs", {}) }), Sr = E("g.r", function (a) {
                    var c = ha(a), b = Bd(a), d = c(Z), e = Hb(a); return M(function (f, g) {
                        var h = g[0], k = g[1]; k && !k.d && k.ghid && k.ghid !== e && k.time && 500 < d - k.time && k.time + 864E5 > d && 2 >= k.browserInfo.rqnl && (k.d = 1, h = { protocol: k.protocol, host: k.host, Pa: k.resource, kj: k.postParams, da: k.params, ih: k.browserInfo, wk: k.ghid, time: k.time, Wb: Ga(h), vh: k.counterId, ca: k.counterType }, k.telemetry && (h.Ab = k.telemetry),
                            f.push(h)); return f
                    }, [], xa(b))
                }), Op = /^[a-z][\w.+-]+:/i, Og, Ob = [[Ae, 1], [Cd, 2], [Fb(), 3], [ej, 4]], ve = [], wb = v(Ob, Mj); wb(Xf, 100); var Nb = (Og = {}, Og.h = Ob, Og), ba = v(Nb, Lj); wb(function (a) { return { aa: function (c, b) { var d = c.G; if (!c.H || !d) return b(); var e = d["page-ref"], f = d["page-url"]; e && f !== e ? d["page-ref"] = aj(a, e) : delete d["page-ref"]; d["page-url"] = aj(a, f).slice(0, qa.Ug); return b() } } }, -100); ba("r", Cd, 1); ba("r", function (a) {
                    return {
                        aa: function (c, b) {
                            var d = c.H, e = void 0 === d ? Ba() : d, f = c.V.Wb, g = Bd(a); d = e.o("rqnl", 0) + 1; e.C("rqnl",
                                d); if (e = n(g, L(".", [f, "browserInfo"]))) e.rqnl = d, Yf(a); b()
                        }, Ca: function (c, b) { cj(a, c); b() }
                    }
                }, 2); var Kp = /[^a-z0-9.:-]/, Pg, bc = [], Qg = {}; bc.push(Xi, 0, Mb, Wf, Ad); var Ik = [Mb]; Ik.push(Wf); var Jk = Eb(Ik), Tc = Eb([Ad]), Tr = Eb([Xi, Ad]), Me = Eb([0, Mb, Wf, Ad]), ua = (Pg = {}, Pg.h = Jk, Pg); ua.r = Me; var $c = w(function (a, c) { var b = Qg["*"] ? Qg["*"] : c && Qg[c]; b || (b = c ? ua[c] || [] : bc); b = M(function (d, e, f) { (e = e && e(a)) && d.push([f, e]); return d }, [], b); b.length || Ue(); return b }, vb), Rg, Ur = D(K.reject, K, Sa()), Ca = (Rg = {}, Rg.h = ab, Rg); Ca.r = ab; var ya = E("g.sen",
                    function (a, c, b) { var d = $c(a, c); b = b ? Np(a, c, b) : []; var e = Ca[c], f = e ? e(a, d, b) : ab(a, d, b); return function () { var g = za(arguments), h = g[0]; g = g.slice(1); var k = h.Y; h = y(h, { Y: y(void 0 === k ? {} : k, { Da: [c] }) }); return f.apply(void 0, va([h], g)) } }, Ur), Dp = ka(function (a, c) { if (!c[a]) { var b, d = new K(function (e) { b = e }); c[a] = { dg: b, bb: d, eg: !1 } } return c[a].bb }), Wi = w(u(wc, Aa)), Pd = w(function (a, c) {
                        var b = n(a, "console"), d = n(b, "log"); d = Fe("log", d) ? D(d, b) : B; var e = n(b, "warn"); e = Fe("warn", e) ? D(e, b) : d; var f = n(b, "error"); b = Fe("error", f) ? D(f,
                            b) : d; return { log: Lc(a, "log", c, d), error: Lc(a, "error", c, b), warn: Lc(a, "warn", c, e) }
                    }), Vr = E("dc.init", function (a, c) { function b(k) { for (var l = [], m = 1; m < arguments.length; m++)l[m - 1] = arguments[m]; H(a).o("dce:" + c, !1) && e[k].apply(e, l); H(a).o("dclq:" + c).push([k, l]) } var d = T(a), e = Pd(a, c); H(a).Ra("dclq:" + c, []); var f = Xb(a), g = Bf(a), h = g.Fi; g = g.vi; h && !g && f.C("debug", "1", void 0, d.host); return h || g ? { log: v("log", b), warn: v("warn", b), error: v("error", b) } : Cp(a, c) }), yd = w(Vr, vb), Wr = E("p.dc", function (a, c) {
                        var b = N(c); Vi(a, ""); Vi(a,
                            b)
                    }), ul = C(window, "h.p", function (a, c) { var b, d, e = ya(a, "h", c), f = c.Ac || "" + T(a).href, g = c.Th || a.document.referrer, h = { H: Ba((b = {}, b.pv = 1, b)), G: (d = {}, d["page-url"] = f, d["page-ref"] = g, d), V: {} }; h.V.da = c.da; h.V.Re = c.Re; c.oc && h.G && (h.G.nohit = "1"); return e(h, c).then(function (k) { k && (c.oc || Db(a, c, "PageView. Counter " + c.id + ". URL: " + f + ". Referrer: " + g, c.da)(), Gb(a, F([a, c, k], Ep))) })["catch"](C(a, "h.g.s")) }), Sg = ["yandex_metrika_callback" + Pc.callbackPostfix, "yandex_metrika_callbacks" + Pc.callbackPostfix], Xr = E("cb.i", function (a) {
                        var c =
                            Sg[0], b = Sg[1]; if (S(a[c])) a[c](); "object" === typeof a[b] && z(function (d, e) { a[b][e] = null; Qf(a, d) }, a[b]); z(function (d) { try { delete a[d] } catch (e) { a[d] = void 0 } }, Sg)
                    }), Kk = w(function (a) { return n(a, "crypto.subtle.digest") && n(a, "TextEncoder") && n(a, "FileReader") && n(a, "Blob") }), Yr = E("fpm", function (a, c) {
                        if (!Fk(a)) return B; var b = N(c); if (!Kk(a)) return Ab(a, b, "Not supported"), B; var d = Ha(a, c); return d ? function (e) {
                            return (new K(function (f, g) {
                                return Ma(e) ? ca(e).length ? f(Si(a, e).then(function (h) {
                                    var k, l; h && h.length && d.params((k =
                                        {}, k.__ym = (l = {}, l.fpp = h, l), k))
                                }, B)) : g(Sa("fpm.l")) : g(Sa("fpm.o"))
                            }))["catch"](C(a, "fpm.en"))
                        } : B
                    }), Ne = ka(function (a, c) { var b = {}; Sf(a)(function (d) { b = d[c] || {} }); return b }), Zr = E("c.c.cc", function (a) { var c = H(a), b = u(Ne(a), function (d) { var e; return y({}, d, (e = {}, e.oldCode = !!a.ya_cid, e.clickmap = !!d.clickmap, e)) }); return C(a, "g.c.cc", u(D(c.o, c, "counters", {}), ca, gb(b))) }), $r = E("gt.c.rs", function (a, c) {
                        var b, d = N(c), e = c.id, f = c.ca, g = c.th, h = c.Ne, k = F([a, d], yp); Rf(a, d, (b = {}, b.id = e, b.type = +f, b.clickmap = g, b.trackHash =
                            !!h, b)); return k
                    }), Qi = w(sd), xd = w(wc, N), as = ["ecommerce", "user_id", "fpp"], bs = E("pa.int", function (a, c) {
                        var b; return b = {}, b.params = function () {
                            var d, e, f = za(arguments), g = xp(f); if (!g) return null; f = g.yh; var h = g.da; g = g.fc; if (!Ma(h) && !ea(h)) return null; var k = ya(a, "1", c), l = xd(c).url, m = n(h, "__ym.user_id"), p = ca(h), q = G("__ymu", p), r = G("__ym", p) && m; p = !Uf(c); var t = h; t.__ym && (t = y({}, h), t.__ym = M(function (x, I) { var Q = n(h, "__ym." + I); Q && (x[I] = Q); return x }, {}, as), ca(t.__ym).length || delete t.__ym, p = !!ca(t).length); m = Db(a,
                                c, r ? "Set user id " + m : (q ? "User p" : "P") + "arams. Counter " + c.id, r ? void 0 : JSON.stringify(t)); k = k({ V: { da: h }, H: Ba((d = {}, d.pa = 1, d.ar = 1, d)), G: (e = {}, e["page-url"] = l || T(a).href, e) }, c).then(p ? m : B); return Jc(a, "p.s", k, g, f)
                        }, b
                    }), Zd = w(Ni, u(vb, N)), cs = E("y.p", function (a, c) { var b = Ni(a, c); if (b) { var d = Ud(a), e = F([a, b, c], tp); lh(a, d, function (f) { f.D(["params"], e) }); b.ba.D(["params"], u(U("1"), e)) } }), Qq = w(function (a) { if (a = $a(a)) return a("a") }), Lk = { xk: Xa(/[/&=?#]/) }, oe = E("go.in", function (a, c, b, d) {
                        var e; void 0 === b && (b = "goal");
                        return e = {}, e.reachGoal = function (f, g, h, k) { var l, m; if (!f || Lk[b] && Lk[b](f)) return null; var p = g, q = h || B; S(g) && (q = g, p = void 0, k = h); var r = Db(a, c, "Reach goal. Counter: " + c.id + ". Goal id: " + f, p), t = "goal" === b; g = ya(a, "g", c); var x = sp(a, c, f, b); h = x[0]; x = x[1]; p = g({ V: { da: p }, H: Ba((l = {}, l.ar = 1, l)), G: (m = {}, m["page-url"] = h, m["page-ref"] = x, m) }, c).then(function () { t && r(); mb(a, { ea: N(c), name: "event", data: { Yb: b, name: f } }); d && d() }); return Jc(a, "g.s", p, q, k) }, e
                    }), ds = E("guid.int", function (a, c) {
                        var b; return b = {}, b.getClientID = function (d) {
                            var e =
                                Cc(a, c); d && Qf(a, d, null, e); return e
                        }, b
                    }), ck, es = E("th.e", function (a, c) { function b() { g || (k = wd(a, "onhashchange") ? ja(a).D(a, ["hashchange"], h) : Rq(a, h)) } var d, e = ya(a, "t", c), f = te(a, N(c)), g = !1, h = C(a, "h.h.ch", D(Sq, null, a, c, e)), k = B; c.Ne && (b(), g = !0); e = C(a, "tr.hs.h", function (l) { var m; l ? b() : k(); g = !!l; f((m = {}, m.trackHash = g, m)) }); return d = {}, d.trackHash = e, d.u = k, d }), fs = ka(function (a, c) { Ea(c) ? a.push(c) : z(u(O, oa("push", a)), c) }), gs = E("cl.p", function (a, c) {
                        function b(p, q, r, t) {
                            void 0 === t && (t = {}); r ? pe(a, c, {
                                url: r, Pb: !0, Jc: p,
                                Oc: q, sender: e, Jg: t
                            }) : g.warn("Empty link")
                        } var d, e = ya(a, "2", c), f = [], g = Pd(a, N(c)), h = N(c), k = C(a, "s.s.tr", v(te(a, h), rp)); h = { l: a, gb: c, Lh: f, sender: e, globalStorage: H(a), xh: Rc(a, c.id), yk: Hb(a), Lj: v(v(h, Ne(a)), u(ia, U("trackLinks"))) }; h = C(a, "cl.p.c", v(h, op)); h = ja(a).D(a, ["click"], h); c.Bg && k(c.Bg); var l = C(a, "file.clc", F([!0, !1], b)), m = C(a, "e.l.l.clc", F([!1, !0], b)); f = C(a, "add.f.e.clc", fs(f)); return d = {}, d.file = l, d.extLink = m, d.addFileExtension = f, d.trackLinks = k, d.u = h, d
                    }), hs = E("nb.p", function (a, c) {
                        function b(I) {
                            l() ||
                            (I = "number" === typeof I ? I : 15E3, x = Tq(a, d(!1), I), m())
                        } function d(I) {
                            return function (Q) {
                                var aa, wa, sa; void 0 === Q && (Q = (aa = {}, aa.ctx = {}, aa.callback = B, aa)); if (I || !r && !k.Ud) {
                                    r = !0; m(); x && x(); var Zb = p(Z); aa = (Ga(k.o("lastHit")) || 0) < Zb - 18E5; var rd = .1 > Math.random(); k.C("lastHit", Zb); Zb = Ba((wa = {}, wa.nb = 1, wa.cl = t, wa.ar = 1, wa)); wa = xd(c); wa = { G: (sa = {}, sa["page-url"] = wa.url || T(a).href, sa), H: Zb, V: { force: I } }; sa = Pd(a, N(c)).warn; !Q.callback && Q.ctx && sa('"callback" argument missing'); (sa = I || aa || rd) || (sa = a.location.href, aa =
                                        a.document.referrer, sa = !(sa && aa ? Mi(sa) === Mi(aa) : !sa && !aa)); if (sa) return sa = g(wa, c), Jc(a, "l.o.l", sa, Q.callback, Q.ctx)
                                } return null
                            }
                        } var e, f, g = ya(a, "n", c), h = N(c), k = Rc(a, c.id), l = v(v(h, Ne(a)), u(ia, U("accurateTrackBounce"))), m = v((e = {}, e.accurateTrackBounce = !0, e), te(a, h)), p = ha(a), q = p(Z), r = !1, t = 0, x; pa(c, function (I) { t = I.Nh - q }); c.Ze && b(c.Ze); e = (f = {}, f.notBounce = d(!0), f.u = x, f); e.accurateTrackBounce = b; return e
                    }), lp = ka(qc)("(ym-disable-clickmap|ym-clickmap-ignore)"), is = E("clm.p", function (a, c) {
                        if (Yc(a)) return B;
                        var b = ya(a, "m", c), d = N(c), e = ha(a), f = e(Z), g = v(v(d, Ne(a)), u(ia, U("clickmap"))), h, k = null; d = C(a, "clm.p.c", function (l) {
                            var m = g(); if (m) {
                                var p = H(a), q = p.o("cls", { kc: 0, x: 0, y: 0 }); p.C("cls", { kc: q.kc + 1, x: q.x + l.clientX, y: q.y + l.clientY }); p = "object" === typeof m ? m : {}; q = p.filter; m = p.isTrackHash || !1; var r = A(function (x) { return ("" + x).toUpperCase() }, p.ignoreTags || []); V(h) && (h = p.quota || null); var t = !!p.quota; l = { element: mp(a, l), position: Ji(a, l), button: np(l), time: e(Z) }; p = T(a).href; if (kp(a, l, k, r, q)) {
                                    if (t) { if (!h) return; --h } r =
                                        xe(a, l.element); q = r[0]; r = r[1]; t = jg(a, l.element); q = ["rn", Ua(a), "x", Math.floor(65535 * (l.position.x - t.left) / (q || 1)), "y", Math.floor(65535 * (l.position.y - t.top) / (r || 1)), "t", Math.floor((l.time - f) / 100), "p", ig(a, l.element), "X", l.position.x, "Y", l.position.y]; q = L(":", q); m && (q += ":wh:1"); jp(a, p, q, b, c); k = l
                                }
                            }
                        }); return ja(a).D(n(a, "document"), ["click"], d)
                    }), js = E("trigger.in", function (a, c) { c.Dg && Gb(a, F([a, "yacounter" + c.id + "inited"], fq), "t.i") }), ks = E("c.m.p", function (a, c) {
                        var b, d = N(c); return b = {}, b.clickmap = v(te(a,
                            d), ip), b
                    }), ii = v("form", ac), To = v("form", tb), hp = w(function (a, c) { return pa(c, U("settings.form_goals")) }, vb), ls = v(!0, Gi), ms = E("s.f.i", function (a, c) { var b = []; ja(a).D(a, ["click"], C(a, "s.f.c", F([a, c, b], gp))); ja(a).D(a, ["submit"], C(a, "s.f.e", u(U("target"), F([a, c, b], ls)))); Hi(a, c, "Form goal. Counter " + c.id + ". Init.") }), ns = E("s.f.i", function (a, c) {
                        return pa(c, function (b) {
                            if (n(b, "settings.button_goals") || -1 !== T(a).href.indexOf("yagoalsbuttons=1")) ja(a).D(a, ["click"], C(a, "c.t.c", u(U("target"), F([a, c], Te(a, c, "",
                                fp))))), Db(a, c, "Button goal. Counter " + c.id + ". Init.")()
                        })
                    }), xb, Of = (xb = {}, xb.transaction_id = "id", xb.item_id = "id", xb.item_name = "name", xb.item_brand = "brand", xb.promotion_name = "coupon", xb.index = "position", xb.item_variant = "variant", xb.value = "revenue", xb.item_category = "category", xb), dp = "currencyCode add delete remove purchase checkout detail".split(" "), Di = E("dl.w", function (a, c, b) { function d() { var g = n(a, c); (e = ea(g) && re(a, g, b)) || (f = W(a, d, 1E3, "ec.dl")) } var e, f = 0; d(); return function () { return la(a, f) } }), xc,
                    Fi = (xc = {}, xc.view_item = "detail", xc.add_to_cart = "add", xc.remove_from_cart = "remove", xc.begin_checkout = "checkout", xc.purchase = "purchase", xc), os = E("p.e", function (a, c) { var b = Ha(a, c); if (b) { var d = H(a); b = b.params; var e = C(a, "h.ee", F([a, N(c), b], bp)); return c.Ad ? (d.C("ecs", 0), Ci(a, c.Ad, e)) : pa(c, function (f) { if (f = n(f, "settings.ecommerce")) return d.C("ecs", 1), Ci(a, f, e) }) } }), zi = w(function (a) { return L("[^\\d<>]*", a.split("")) }), gm = w(function (a) { return new RegExp(zi(a), "g") }), Zo = /\S/, si = v(["style", "display:inline;margin:0;padding:0;font-size:inherit;color:inherit;line-height:inherit"],
                        Ec), Mk = w(function (a) { return Yc(a) || !Ed(a) }), ps = E("phc.h", function (a, c) { return Oj(a) || Mk(a) ? null : pa(c, function (b) { if (!n(b, "settings.phchange")) { var d = Ac(a, "").o("yaHidePhones"); d = d ? rb(a, d) : ""; (b = n(b, "settings.phhide") || d) && ki(a, c, b) } }) }), Nk = w(function (a) { a = T(a); a = jq(a.search.substring(1)); a["_ym_status-check"] = a["_ym_status-check"] || ""; a._ym_lang = a._ym_lang || "ru"; return a }), ni = u(Nk, U("_ym_status-check"), Ga), qs = u(Nk, U("_ym_lang")), mi = Xa(/^https:\/\/(yastatic\.net\/s3\/metrika|s3\.mds\.yandex\.net\/internal-metrika-betas|[\w-]+\.dev\.webvisor\.com|[\w-]+\.dev\.metrika\.yandex\.ru)\/(\w|-|\/|(\.)(?!\.))+\.js$/),
                    Vo = ["form", "button", "phone", "status"], Tg = [], So = w(function (a, c, b) { z(u(Mc([a, c, b]), ia), Tg); if (b.inline) { c = li(b); var d = b.data; b = b.id; hi(a, c, void 0 === b ? "" : b, void 0 === d ? "" : d) } else b.resource && mi(b.resource) && (a._ym__postMessageEvent = c, a._ym__inpageMode = b.inpageMode, a._ym__initMessage = b.initMessage, Wo(a, b.resource)) }, function (a, c, b) { return b.id }), rs = E("cs.init", function (a, c) { var b, d = ni(a); if (d && c.id === d && "0" === c.ca) { var e = li((b = {}, b.lang = qs(a), b.fileId = "status", b)); W(a, F([a, e, "" + d], hi), 0, "cs") } }), ss = E("suid.int",
                        function (a, c) { var b; return b = {}, b.setUserID = function (d, e, f) { if (Ea(d) || me(a, d)) { var g = Ha(a, c); d = Ec(["__ym", "user_id", d]); g.params(d, e || B, f) } else Pd(a, N(c)).error("Incorrect user ID") }, b }), Ic = { position: "absolute" }, gi = { position: "fixed" }, Jf = { borderRadius: "50%" }, ts = u(U("settings.sm"), ma(1)), us = ub("siteStatistics", function (a, c) { if (!Oj(a)) return $b(a)(Ra(B, F([c, function (b) { return ts(b) ? Qo(a, c.id) : B }], pa))) }), vs = E("up.int", function (a, c) {
                            var b; return b = {}, b.userParams = C(a, "up.c", function (d, e, f) {
                                var g, h = Ha(a,
                                    c), k = yd(a, N(c)).warn; h ? Ma(d) ? (d = (g = {}, g.__ymu = d, g), (g = h.params) && g(d, e || B, f)) : k("Wrong user params") : k("No counter instance found")
                            }), b
                        }), ws = /[\*\.\?\(\)]/g, xs = w(function (a, c, b) { try { var d = b.replace("\\s", " ").replace(ws, ""); yd(a, "").warn('Function "' + d + '" has been overridden, this may cause issues with Metrika counter') } catch (e) { } }, vb), ys = E("r.nn", function (a) { Bf(a).isEnabled && re(a, zg, function (c) { c.ya.D(function (b) { xs(a, b[1], b[0]); zg.splice(100) }) }) }), zs = E("e.a.p", function (a, c) {
                            var b, d = Ha(a, c); d = F([u(O,
                                Aa(!0)), Y(Boolean, A(v(d, n), ["clickmap", "trackLinks", "accurateTrackBounce"]))], A); c.Dh && d(); return b = {}, b.enableAll = d, b
                        }), As = v("add", le), Bs = v("remove", le), Cs = v("detail", le), Ds = v("purchase", le), Es = "FB_IAB FBAV OKApp GSA/ yandex yango uber EatsKit YKeyboard iOSAppUslugi YangoEats".split(" "), Ye = w(function (a) {
                            var c = tk(a); a = c.Ig; if (!c.If) return !1; c = oa("indexOf", a); c = Oa(u(c, ma(-1), Rb), Es); var b = /CFNetwork\/[0-9][0-9.]*.*Darwin\/[0-9][0-9.]*/.test(a), d = /YaBrowser\/[\d.]+/.test(a), e = /Mobile/.test(a); return c ||
                                b || d && e || !/Safari/.test(a) && e
                        }), Fs = ["YangoEats"], Il = w(function (a) { var c = kb(a); if (!c) return !1; c = oa("indexOf", c); return Oa(u(c, ma(-1), Rb), Fs) || nd(a) }), Oo = /([0-9\\.]+) Safari/, Gs = /\sYptp\/\d\.(\d+)\s/, Ok = w(function (a) { var c; a: { if ((c = kb(a)) && (c = Gs.exec(c)) && 1 < c.length) { c = Ga(c[1]); break a } c = 0 } return 50 <= c && 99 >= c || ef(a, 79) ? !1 : !Nd(a) || Ye(a) }), Pk = "monospace;sans-serif;serif;Andale Mono;Arial;Arial Black;Arial Hebrew;Arial MT;Arial Narrow;Arial Rounded MT Bold;Arial Unicode MS;Bitstream Vera Sans Mono;Book Antiqua;Bookman Old Style;Calibri;Cambria;Cambria Math;Century;Century Gothic;Century Schoolbook;Comic Sans;Comic Sans MS;Consolas;Courier;Courier New;Garamond;Geneva;Georgia;Helvetica;Helvetica Neue;Impact;Lucida Bright;Lucida Calligraphy;Lucida Console;Lucida Fax;LUCIDA GRANDE;Lucida Handwriting;Lucida Sans;Lucida Sans Typewriter;Lucida Sans Unicode;Microsoft Sans Serif;Monaco;Monotype Corsiva;MS Gothic;MS Outlook;MS PGothic;MS Reference Sans Serif;MS Sans Serif;MS Serif;MYRIAD;MYRIAD PRO;Palatino;Palatino Linotype;Segoe Print;Segoe Script;Segoe UI;Segoe UI Light;Segoe UI Semibold;Segoe UI Symbol;Tahoma;Times;Times New Roman;Times New Roman PS;Trebuchet MS;Verdana;Wingdings;Wingdings 2;Wingdings 3".split(";"),
                    Hs = w(function (a) { a = $a(a)("canvas"); var c = n(a, "getContext"); if (!c) return null; try { var b = D(c, a)("2d"); b.font = "72px mmmmmmmmmmlli"; var d = b.measureText("mmmmmmmmmmlli").width; return function (e) { b.font = "72px " + e; return b.measureText("mmmmmmmmmmlli").width === d } } catch (e) { return null } }), Qk = Ka(String.prototype.repeat, "repeat"), Is = Qk ? function (a, c) { return Qk.call(a, c) } : Lo, Bh = v(!0, function (a, c, b, d) { b = c.length && (b - d.length) / c.length; if (0 >= b) return d; c = Is(c, b); return a ? c + d : d + c }), Ge = [2277735313, 289559509], He = [1291169091,
                        658871167], Js = E("p.cd", function (a, c) { if (md(a) || De(a)) { var b = Qa(a); if (na(b.o("jn"))) { b.C("jn", !1); var d = a.lk || pd(a) ? function () { } : /./, e = Pd(a, N(c)); d.toString = function () { b.C("jn", !0); return "Yandex.Metrika counter is initialized" }; e.log("%c%s", "color: inherit", d) } } }), Ks = w(function (a) { a = n(a, "navigator.plugins"); return !!(a && Na(a) && Oa(u(U("name"), Xa(/Chrome PDF Viewer/)), a)) }), Io = { "*": "+", "-": "/", fk: "=", "+": "*", "/": "-", "=": "_" }, yc = ka(function (a, c) { return H(c).o(a, null) }), Ls = w(function (a) {
                            return S(n(a, "yandex.getSiteUid")) ?
                                a.yandex.getSiteUid() : null
                        }), Eo = [["domainLookupEnd", "domainLookupStart"], ["connectEnd", "connectStart"], ["responseStart", "requestStart"], ["responseEnd", "responseStart"], ["fetchStart", "navigationStart"], ["redirectEnd", "redirectStart"], [function (a, c) { return n(c, "redirectCount") || n(a, "navigation.redirectCount") }], ["domInteractive", "domLoading"], ["domContentLoadedEventEnd", "domContentLoadedEventStart"], ["domComplete", "navigationStart"], ["loadEventStart", "navigationStart"], ["loadEventEnd", "loadEventStart"],
                        ["domContentLoadedEventStart", "navigationStart"]], pb, Do = [["domainLookupEnd", "domainLookupStart"], ["connectEnd", "connectStart"], ["responseStart", "requestStart"], ["responseEnd", "responseStart"], ["fetchStart"], ["redirectEnd", "redirectStart"], ["redirectCount"], ["domInteractive", "responseEnd"], ["domContentLoadedEventEnd", "domContentLoadedEventStart"], ["domComplete"], ["loadEventStart"], ["loadEventEnd", "loadEventStart"], ["domContentLoadedEventStart"]], ei = (pb = {}, pb.responseEnd = 1, pb.domInteractive = 1, pb.domContentLoadedEventStart =
                            1, pb.domContentLoadedEventEnd = 1, pb.domComplete = 1, pb.loadEventStart = 1, pb.loadEventEnd = 1, pb.unloadEventStart = 1, pb.unloadEventEnd = 1, pb.secureConnectionStart = 1, pb), Go = w(sd), Ao = w(wc), Bo = w(function (a) {
                                var c = n(a, "webkitRequestFileSystem"); if (S(c) && !md(a)) return (new K(D(c, a, 0, 0))).then(function () { var d = n(a, "navigator.storage") || {}; return d.estimate ? d.estimate() : {} }).then(function (d) { return (d = d.quota) && 12E7 > d ? !0 : !1 })["catch"](v(!0, O)); if (Hd(a)) return c = n(a, "navigator.serviceWorker"), K.resolve(V(c)); c = n(a,
                                    "openDatabase"); if (pd(a) && S(c)) { var b = !1; try { c(null, null, null, null) } catch (d) { b = !0 } return K.resolve(b) } return K.resolve(!n(a, "indexedDB") && (n(a, "PointerEvent") || n(a, "MSPointerEvent")))
                            }), Ms = /(\?|&)turbo_uid=([\w\d]+)($|&)/, Ns = w(function (a, c) { var b = Xb(a), d = T(a).search.match(Ms); return d && 2 <= d.length ? (d = d[2], c.qb || b.C("turbo_uid", d), d) : (b = b.o("turbo_uid")) ? b : "" }), Os = E("pa.plgn", function (a, c) {
                                var b = Zd(a, c); b && b.ba.D(["pluginInfo"], C(a, "c.plgn", function () {
                                    var d = H(a); d.C("cmc", d.o("cmc", 0) + 1); return yq(c,
                                        Ve)
                                }))
                            }), qb, cb, Bl = (qb = {}, qb.am = "com.am", qb.tr = "com.tr", qb.ge = "com.ge", qb.il = "co.il", qb["\u0440\u0444"] = "ru", qb["xn--p1ai"] = "ru", qb["\u0443\u043a\u0440"] = "ua", qb["xn--j1amh"] = "ua", qb["\u0431\u0435\u043b"] = "by", qb["xn--90ais"] = "by", qb), Rk = { "mc.edadeal.ru": /^([^/]+\.)?edadeal\.ru$/, "mc.yandexsport.ru": /^([^/]+\.)?yandexsport\.ru$/, "mc.kinopoisk.ru": /^([^/]+\.)?kinopoisk\.ru$/ }, Cl = (cb = {}, cb.ka = "ge", cb.ro = "md", cb.tg = "tj", cb.tk = "tm", cb.et = "ee", cb.hy = "com.am", cb.he = "co.li", cb.ky = "kg", cb.uk = "ua", cb.be = "by",
                                cb.tr = "com.tr", cb.kk = "kz", cb), wo = "ar:1:pv:1:v:" + qa.fb + ":vf:" + Pc.version, xo = qa.Ua + "//" + Yb + "/watch/" + qa.Pg, Sk = {}, Ps = E("exps.int", function (a, c) { var b; return b = {}, b.experiments = function (d, e, f) { var g, h; void 0 === e && (e = B); if (d && 0 < d.length) { var k = ya(a, "e", c), l = xd(c).url; d = k({ H: Ba((g = {}, g.ex = 1, g.ar = 1, g)), G: (h = {}, h["page-url"] = l || T(a).href, h.exp = d, h) }, c); return Jc(a, "exps.s", d, e, f) } }, b }), Ze = [], Qs = E("p.fh", function (a, c) {
                                    var b, d; void 0 === c && (c = !0); var e = Qa(a), f = ha(a), g = e.o("wasSynced"), h = { id: 3, ca: "0" }; return c &&
                                        g && g.time + 864E5 > f(Z) ? K.resolve(g) : ya(a, "f", h)({ H: Ba((b = {}, b.pv = 1, b)), G: (d = {}, d["page-url"] = T(a).href, d["page-ref"] = a.document.referrer, d) }, h).then(function (k) { var l; k = (l = {}, l.time = f(Z), l.params = n(k, "settings"), l.bkParams = n(k, "userData"), l); e.C("wasSynced", k); return k })["catch"](C(a, "f.h"))
                                }), Rs = ka(function (a, c) { 0 === parseFloat(n(c, "settings.c_recp")) && (a.ce.C("ymoo" + a.ea, a.Ag(ib)), a.vd && a.vd.destruct && a.vd.destruct()) }), bi = u(U("settings.pcs"), ma("1")), mo = [[["'(-$&$&$'", 30102, 0], ["'(-$&$&$'", 29009,
                                    0]], [["oWdZ[nc[jh_YW$Yec", 30103, 1], ["oWdZ[nc[jh_YW$Yec", 29010, 1]]], no = [[["oWdZ[nc[jh_YW$Yec", 30103, 1]], [["oWdZ[nc[jh_YW$Yec", 29010, 1]]], ci = { G: { t: 'UV|L7,!"T[rwe&D_>ZIb\\aW#98Y.PC6k' } }, ai = { id: 42822899, ca: "0" }, Tk = Yb.split("."), Ss = Tk.pop(), Uk = L(".", Tk), Al = w(function (a) { a = T(a).hostname.split("."); return a[a.length - 1] }), hh = w(function (a) { return -1 !== T(a).hostname.search(/(?:^|\.)(?:ya|yandex|beru|kinopoisk|edadeal)\.(?:\w+|com?\.\w+)$/) }), Ts = /^(.*\.)?((yandex(-team)?)\.(com?\.)?[a-z]+|(auto|kinopoisk|beru|bringly)\.ru|ya\.(ru|cc)|yadi\.sk|yastatic\.net|meteum\.(ai|es|io)|.*\.yandex|turbopages\.org|turbo\.site)$/,
                    Xd = w(function (a) { a = T(a).hostname; var c = !1; a && (c = -1 !== a.search(Ts)); return c }), Us = /^(.*\.)?((yandex(-team)?)\.(com?\.)?[a-z]+|(auto|kinopoisk|beru|bringly)\.ru|ya\.(ru|cc)|yadi\.sk|.*\.yandex|turbopages\.org|turbo\.site)$/, po = w(function (a) { a = T(a).hostname; var c = !1; a && (c = -1 !== a.search(Us)); return c }), Vk = qa.Ua + "//" + Yb + "/metrika", Wk = Vk + "/metrika_match.html", Oe, to = (Oe = {}, Oe.s = "p", Oe["8"] = "i", Oe), qo = ub("csp", function (a, c) { return ya(a, "s", c)({}, ["https://ymetrica1.com/watch/3/1"]) }), Ug = "et w v z i u vf".split(" "),
                    fo = { L: "stamp", M: "frameId", $: "meta", cf: "base", Ef: "hasBase", $e: "address", Fg: "ua", te: "prev", Rf: "namespace", Mc: "keystrokes", Kf: "isMeta", Nc: "modifier", vb: "pageWidth", ub: "pageHeight", ug: "startNode", hf: "endNode", Mg: "zoomFrom", Og: "zoomTo", level: "level", duration: "duration", Fa: "i", Qc: "o", n: "n", r: "r", sc: "ct", Ib: "at", Sf: "nm", Tf: "ns", ne: "pa", qe: "pr", fe: "nx", Wa: "h", Ka: "changes", Ye: "a", bf: "b", od: "c", me: "op" }, go = ["attributes", "attrs"], Pe = function () {
                        function a(c) { this.l = c } a.prototype.Aa = function (c) {
                            var b = ie(c); c =
                                A(D(this.Qa, this), b); return of(jb(this.l, A(function (d, e) { var f; return y({}, b[e], (f = {}, f.data = d, f)) }, c)))
                        }; a.prototype.Qa = function (c) { var b = c.data; "string" !== typeof b && (b = jb(this.l, ie(c.data))); return b }; a.prototype.Va = function (c) { return encodeURIComponent(c).length }; a.prototype.dd = function (c, b) { for (var d = Math.ceil(c.length / b), e = [], f = 0; f < b; f += 1)e.push(c.slice(f * d, d * (f + 1))); return e }; a.prototype.isEnabled = function () { return !!this.l.JSON }; return a
                    }(), co = w(function (a) {
                        function c(f, g, h, k) {
                            d[0] = g; h[k] = e[3];
                            h[k + 1] = e[2]; h[k + 2] = e[1]; h[k + 3] = e[0]
                        } function b(f, g, h, k) { d[0] = g; h[k] = e[0]; h[k + 1] = e[1]; h[k + 2] = e[2]; h[k + 3] = e[3] } if ("undefined" === typeof a.Float32Array || "undefined" === typeof a.Uint8Array) return eo; var d = new Float32Array([-0]), e = new Uint8Array(d.buffer); return 128 === e[3] ? b : c
                    }), Zn = Yh(!1), Yn = Yh(!0), Vs = { Gj: "topics", mj: "publicationDate", jj: "pageUrlCanonical", Rj: "updateDate", gh: "authors", dh: "articleInfo", sj: "rubric", nj: "publishersHeader", Ma: "involvedTime", ij: "pageTitle", Pi: "maxScrolled", ef: "chars", eh: "articleMeta" },
                    Ws = function () {
                        function a(c) { this.l = c; this.Qb = u(xa, ud(function (b, d) { b[d[1]] = d[0]; return b }, {}))(Vs) } a.prototype.yg = function (c) { var b, d = this.se(c.data); return { L: ha(this.l)(rg), data: (b = {}, b[this.Qb[c.type]] = d, b) } }; a.prototype.se = function (c) { var b = this; return ea(c) ? A(D(this.se, this), c) : Ma(c) ? u(xa, ud(function (d, e) { var f = e[0]; d[b.Qb[f] || f] = b.se(e[1]); return d }, {}))(c) : c }; a.prototype.Qa = function (c) { return ge(this.l, Gf, this.yg(c))(Ce(B)) }; a.prototype.Va = function (c) { return c[0] }; a.prototype.dd = function (c) { return [c] };
                        a.prototype.Aa = function (c) { var b = this; c = ge(this.l, Rh, { buffer: A(D(this.yg, this), c) }); return ic(this.l, c, 20, Be)(Le(function (d) { d = Df(b.l, d.slice(-4)); return ic(b.l, d, 20, Be) }))(Mg(function (d) { return d[d.length - 1] })) }; a.prototype.isEnabled = function () { return Qh(this.l) }; return a
                    }(), Qd, Vg = (Qd = {}, Qd[1] = 500, Qd[2] = 500, Qd[3] = 0, Qd), Wg = function () {
                        function a(c, b) {
                            var d, e = this; this.id = "a"; this.Sd = !1; this.Lb = {}; this.yb = { "schema.org": "Article NewsArticle Movie BlogPosting Review Recipe Answer".split(" "), Vf: ["article"] };
                            this.Pe = (d = {}, d.Answer = 3, d.Review = 2, d); this.uh = w(function (f, g) { Ab(e.l, e.ea, "Warning: content has only " + g.chars + " chars. Required " + Vg[g.type], g) }); this.l = c; this.root = Vb(c); this.ea = b
                        } a.prototype.La = function (c) { return c.element }; a.prototype.xf = function (c, b) { var d = this, e; C(this.l, "P.s." + b, function () { e = d.Lb[b].call(d, c) })(); return e }; a.prototype.lj = function (c) {
                            var b = y({}, c); this.Sd && !b.id && G(c.type, [3, 2]) && (c = L(", ", A(U("name"), b.authors || [])), b.pageTitle = c + ": " + b.pageTitle); b.pageTitle || (b.pageTitle =
                                this.li(b.nc)); b.pageUrlCanonical || (c = b.id, b.pageUrlCanonical = ("string" !== typeof c ? 0 : /^(https?:)\/\//.test(c)) ? b.id : this.ii()); b.id || (b.id = b.pageTitle || b.pageUrlCanonical); return b
                        }; a.prototype.Ea = function (c) { var b = this, d = {}, e = this.La(c); if (!e) return null; d.type = c.type; z(function (g) { d[g] = b.xf(c, g) }, ca(this.Lb)); var f = ha(this.l); d.stamp = f(rg); d.element = c.element; d.nc = e; d = this.lj(d); d.id = d.id ? mc(d.id) : 1; d.update = function (g) { return b.La(c) ? b.xf(c, g) : void 0 }; return d }; a.prototype.li = function (c) {
                            for (var b =
                                1; 5 >= b; b += 1) { var d = Ya(Fc("h" + b, c)); if (d) return d }
                        }; a.prototype.ii = function () { var c = Fc('[rel="canonical"]', this.root); if (c) return c.href }; a.prototype.Cf = function () { return 1 }; a.prototype.zc = function () { return [] }; a.prototype.Mh = function () {
                            var c = this, b = this.zc(), d = 1; return M(function (e, f) {
                                var g = c.Ea({ element: f, type: c.Cf(f) }) || []; ea(g) || (g = [g]); g = M(function (h, k) { var l = h.values, m = h.Ff; k && k.chars > Vg[k.type] && !G(k.id, m) ? (l.push(k), m.push(k.id)) : k && k.chars <= Vg[k.type] && c.uh(k.id, k); return { values: l, Ff: m } }, {
                                    values: [],
                                    Ff: A(U("id"), e)
                                }, g).values; return e.concat(A(function (h) { var k; h = y((k = { index: d, pg: !1 }, k.involvedTime = 0, k), h); d += 1; return h }, g))
                            }, [], b)
                        }; return a
                    }(), Xk = function (a) {
                        function c() {
                            var b, d = null !== a && a.apply(this, arguments) || this; d.id = "j"; d.Sd = !0; d.ff = L(",", ['script[type="application/ld+json"]', 'script[type="application/json+ld"]', 'script[type="ld+json"]', 'script[type="json+ld"]']); d.Lb = (b = {}, b.id = function (e) { var f = e.data["@id"]; e = e.data.mainEntity || e.data.mainEntityOfPage; !f && e && (f = e["@id"]); return f },
                                b.chars = function (e) { return "string" === typeof e.data.text ? e.data.text.length : Pb(this.La(e)).length }, b.authors = function (e) { var f = []; f = f.concat(this.yc(e.data, "author")); f = f.concat(this.yc(e.data.mainEntity, "author")); return f.concat(this.yc(e.data.mainEntityOfPage, "author")) }, b.pageTitle = function (e) {
                                    var f = e.data.headline || ""; e.data.hk && (f += " " + e.data.alternativeHeadline); "" === f && (e.data.name ? f = e.data.name : e.data.itemReviewed && (f = e.data.itemReviewed)); 3 === e.type && e.data.parentItem && (f = e.data.parentItem.text);
                                    return f
                                }, b.updateDate = function (e) { return e.data.dateModified || "" }, b.publicationDate = function (e) { return e.data.datePublished || "" }, b.pageUrlCanonical = function (e) { return e.data.url }, b.topics = function (e) { return this.yc(e.data, "about", ["name", "alternateName"]) }, b.rubric = function (e) {
                                    var f = this, g = this.La(e); e = Y(Boolean, A(function (h) { if (h = rb(f.l, Pb(h))) { var k = f.yf(h); if (k) return M(function (l, m) { return l ? l : "BreadcrumbList" === m["@type"] ? m : l }, null, k); if ("BreadcrumbList" === h["@type"]) return h } return null }, [e.element].concat(tb(this.ff,
                                        document.body === g ? document.documentElement : g)))); return e.length && (e = e[0].itemListElement, ea(e)) ? Y(Boolean, A(function (h) { return Ma(h) && h.item && Ma(h.item) && !f.l.isNaN(h.position) ? { name: h.item.name || h.name, position: h.position } : null }, e)) : []
                                }, b); return d
                        } Ja(c, a); c.prototype.yc = function (b, d, e) {
                            void 0 === e && (e = ["name"]); if (!b || !b[d]) return []; b = ea(b[d]) ? b[d] : [b[d]]; b = Y(O, A(function (f) { return f ? "string" === typeof f ? f : M(function (g, h) { return g || "" + f[h] }, "", e) : null }, b)); return A(function (f) {
                                var g; return g = {},
                                    g.name = f, g
                            }, b)
                        }; c.prototype.La = function (b) { var d = b.element, e = b.data["@id"], f = b.data.url; b = null; f && "string" === typeof f && (b = this.pf(f)); !b && e && "string" === typeof e && (b = this.pf(e)); b || (b = e = d.parentNode, !ac("head", this.l, d) && e && 0 !== Pb(e).length) || (b = this.l.document.body); return b }; c.prototype.pf = function (b) { try { var d = Gc(this.l, b).hash; if (d) { var e = Fc(d, this.l.document.body); if (e) return e } } catch (f) { } return null }; c.prototype.oe = function (b) { return this.Pe[b["@type"]] || 1 }; c.prototype.Ea = function (b) {
                            var d = this,
                            e = b.element; if (!b.data && (b.data = rb(this.l, Pb(e)), !b.data || !/schema\.org/.test(b.data["@context"]) && !ea(b.data))) return null; var f = this.yf(b.data); if (f) return A(function (h) { if (!G(h["@type"], d.yb["schema.org"])) return null; h = { element: e, data: h, type: d.oe(h) }; return a.prototype.Ea.call(d, h) }, f); if ("QAPage" === b.data["@type"]) { var g = b.data.mainEntity || b.data.mainEntityOfPage; if (!g) return null } "Question" === b.data["@type"] && (g = b.data); return g ? (b = kc(v(g, n), ["acceptedAnswer", "suggestedAnswer"]), A(function (h) {
                                var k;
                                if (!h || !G(h["@type"], d.yb["schema.org"])) return null; h = { element: e, type: d.oe(h), data: y((k = {}, k.parentItem = g, k), h) }; return a.prototype.Ea.call(d, h)
                            }, b)) : G(b.data["@type"], this.yb["schema.org"]) ? a.prototype.Ea.call(this, y(b, { type: this.oe(b.data) })) : null
                        }; c.prototype.zc = function () { return tb(this.ff, this.root) }; c.prototype.yf = function (b) { return ea(b) && b || b && ea(b["@graph"]) && b["@graph"] }; return c
                    }(Wg), Xg = function (a) {
                        function c() {
                            var b, d = null !== a && a.apply(this, arguments) || this; d.id = "s"; d.Sd = !0; d.Oj = oa("exec",
                                new RegExp("schema.org\\/(" + L("|", ca(d.Pe)) + ")$")); d.Lb = (b = {}, b.id = function (e) { e = e.element; var f = bb(this.l, e, "identifier"); return f ? Ya(f) : (f = bb(this.l, e, "mainEntityOfPage")) && f.getAttribute("itemid") ? f.getAttribute("itemid") : null }, b.chars = function (e) { var f = 0; e = e.element; for (var g = ["articleBody", "reviewBody", "recipeInstructions", "description", "text"], h = 0; h < g.length; h += 1) { var k = bb(this.l, e, g[h]); if (k) { f = Ya(k).length; break } } e = Pb(e); 0 === f && e && (f += e.length); return f }, b.topics = function (e) {
                                    var f = this, g =
                                        Md(this.l, e.element, "about"); return A(function (h) { var k = { name: Ya(h) }; if (g = bb(f.l, h, "name")) k.name = Ya(g); return k }, g)
                                }, b.rubric = function (e) { var f = this; (e = Fc('[itemtype$="schema.org/BreadcrumbList"]', e.element)) || (e = Fc('[itemtype$="schema.org/BreadcrumbList"]', this.root)); return e ? A(function (g) { return { name: Ya(bb(f.l, g, "name")), position: Ya(bb(f.l, g, "position")) } }, Md(this.l, e, "itemListElement")) : [] }, b.updateDate = function (e) { return (e = bb(this.l, e.element, "dateModified")) ? ek(e) : "" }, b.publicationDate = function (e) {
                                    return (e =
                                        bb(this.l, e.element, "datePublished")) ? ek(e) : ""
                                }, b.pageUrlCanonical = function (e) { e = Md(this.l, e.element, "url"); if (e.length) { var f = e[0]; return f.href ? f.href : Ya(e) } return null }, b.pageTitle = function (e) { var f = "", g = e.element, h = bb(this.l, g, "headline"); h && (f += Ya(h)); (h = bb(this.l, g, "alternativeHeadline")) && (f += " " + Ya(h)); "" === f && ((h = bb(this.l, g, "name")) || (h = bb(this.l, g, "itemReviewed")), h && (f += Ya(h))); 3 === e.type && (e = ac('[itemtype$="schema.org/Question"]', this.l, g)) && (e = bb(this.l, e, "text")) && (f += Ya(e)); return f },
                                    b.authors = function (e) { var f = this; e = Md(this.l, e.element, "author"); return A(function (g) { var h, k = (h = {}, h.name = "", h); /.+schema.org\/(Person|Organization)/.test(g.getAttribute("itemtype") || "") && (h = bb(f.l, g, "name")) && (k.name = Ya(h)); k.name || (k.name = g.getAttribute("content") || Pb(g) || g.getAttribute("href")); return k }, e) }, b); return d
                        } Ja(c, a); c.prototype.Cf = function (b) { b = b.getAttribute("itemtype") || ""; return (b = this.Oj(b)) ? this.Pe[b[1]] : 1 }; c.prototype.Ea = function (b) {
                            return b.element && Pb(b.element).length ? a.prototype.Ea.call(this,
                                b) : null
                        }; c.prototype.zc = function () { var b = L(",", A(function (d) { return '[itemtype$="schema.org/' + d + '"]' }, this.yb["schema.org"])); return tb(b, this.root) }; return c
                    }(Wg), Yk = function (a) {
                        function c(b, d) {
                            var e, f = a.call(this, b, d) || this; f.id = "o"; f.Lb = (e = {}, e.chars = function (g) { g = this.La(g); return Pb(g).length }, e.authors = function (g) { return this.Gd(g.data.author) }, e.pageTitle = function (g) { return this.Ec(g.data.title) || "" }, e.updateDate = function (g) { return this.Ec(g.data.modified_time) }, e.publicationDate = function (g) { return this.Ec(g.data.published_time) },
                                e.pageUrlCanonical = function (g) { return this.Ec(g.data.url) }, e.rubric = function (g) { return this.Gd(g.data.section) }, e.topics = function (g) { return this.Gd(g.data.tag) }, e); f.Eh = new RegExp("^(og:)?((" + L("|", f.yb.Vf) + "):)?"); return f
                        } Ja(c, a); c.prototype.Gd = function (b) { var d; return b ? ea(b) ? A(function (e) { var f; return f = {}, f.name = e, f }, b) : [(d = {}, d.name = b, d)] : [] }; c.prototype.Ec = function (b) { return ea(b) ? b.length ? b[0] : null : b }; c.prototype.zc = function () { var b = tb('meta[property="og:type"]', this.l.document.body); return [this.l.document.head].concat(b) };
                        c.prototype.Zh = function (b) { var d = this, e = b.element, f = {}, g = this.La(b); e = tb("meta[property]", e === this.l.document.head ? e : g); if (e.length) z(function (h) { try { if (h.parentNode === g || h.parentNode === d.l.document.head) { var k = h.getAttribute("property").replace(d.Eh, ""), l = Ya(h); f[k] ? ea(f[k]) ? f[k].push(l) : f[k] = [f[k], l] : f[k] = l } } catch (m) { ke(d.l, "og.ed", m) } }, e); else return null; return G(f.type, this.yb.Vf) ? y(b, { data: f }) : null }; c.prototype.La = function (b) { b = b.element; var d = this.l.document; return b === d.head ? d.body : b.parentNode };
                        c.prototype.Ea = function (b) { return (b = this.Zh(b)) ? a.prototype.Ea.call(this, b) : null }; return c
                    }(Wg), Zk = "resize scroll mousemove mousedown click windowfocus keydown orientationchange change focus touchmove touchstart".split(" "), Xs = "id pageTitle stamp chars authors updateDate publicationDate pageUrlCanonical topics rubric".split(" "), Ys = function () {
                        function a(c, b, d, e, f) {
                            var g = this; this.Kc = !1; this.$ = {}; this.scroll = { x: 0, y: 0 }; this.Ma = this.Pf = 0; this.de = this.Yf = ""; this.ha = []; this.Ee = this.Sa = 0; this.Db = {
                                Wa: 0,
                                Ue: 0
                            }; this.buffer = []; this.Qg = Xs; this.flush = function () { g.Ee = W(g.l, g.flush, 2500); var h = g.Kd(); if (g.buffer.length || h) { var k = zd(g.buffer); h && k.push(h); g.Yf = g.de; g.qa.Aa(k)(Ra(C(g.l, "p.b.st"), function (l) { l && g.Zb(l) })) } }; this.Zb = e; this.qa = d; this.ec = D(this.ec, this); this.Kd = D(this.Kd, this); this.flush = D(this.flush, this); this.l = c; this.ea = f; this.Yb = b; this.Yd = "pai" + b.id; this.Mb(); this.kf = ja(this.l); this.time = ha(this.l); this.Gg(); this.Nd = H(this.l)
                        } a.prototype.start = function () {
                            var c = this; this.Ee = W(this.l, this.flush,
                                2500); if (!this.Kc) { this.Aj(); var b = this.Nd.o(this.Yd, []), d = !b.length; b.push(D(this.Li, this)); this.Nd.Ra(this.Yd, b); d && this.gg(); var e = function (f, g) { return (f.Be || 0) <= (g.Be || 0) ? g : f }; ja(this.l).D(this.l, ["click"], function (f) { if (c.ha.length) { f = Ki(f); var g = T(c.l).hostname, h; if (h = f) h = qe(f.hostname) === qe(g); h && (f = M(e, c.ha[0], c.ha).id, g = Hb(c.l), Rc(c.l, c.ea.split(":")[0]).C("pai", f + "-" + g)) } }); this.ec({ type: "page", target: this.l }) }
                        }; a.prototype.stop = function () { this.Pj(); this.Kc = !0; this.flush(); la(this.l, this.Ee) };
                        a.prototype.Mf = function (c) { return ac("html", this.l, c) !== this.l.document.documentElement }; a.prototype.gg = function () { var c = this; C(this.l, "p.ic" + this.Yb.id, function () { if (!c.Kc) { var b = c.Nd.o(c.Yd), d = c.Yb.Mh(); z(function (e) { var f = A(function (g) { return y({}, g) }, d); S(e) && e(f) }, b); c.Sa = W(c.l, D(c.gg, c), 1E3, "p") } })() }; a.prototype.Li = function (c) { this.Kc || (this.Qj(c), this.Sj(), this.oh()) }; a.prototype.ec = function (c) {
                            var b = this; C(this.l, "p.ec." + this.Yb.id, function () {
                                try { var d = c.type; var e = c.target } catch (l) { return } var f =
                                    "page" === d; if ("scroll" === d || f) { var g = [b.l, b.l.document, b.l.document.documentElement, uc(b.l)]; G(e, g) && b.Mb() } ("resize" === d || f) && b.Gg(); d = b.time(Z); var h = Math.min(d - b.Pf, 5E3); b.Ma += Math.round(h); b.Pf = d; if (b.$ && b.scroll && b.Db) {
                                        var k = b.Db.Wa * b.Db.Ue; b.ha = A(function (l) {
                                            var m = y({}, l), p = b.$[m.id], q = ed(l.nc); if (!p || b.Mf(m.element) || !q) return m; l = b.l.Math; p = l.max((b.scroll.y + b.Db.Wa - p.y) / p.height, 0); var r = q.height * q.width; q = b.kh(q); m.Be = q / k; m.visibility = q / r; if (.9 <= m.visibility || .1 <= m.Be) m.involvedTime += h;
                                            m.maxScrolled = l.round(1E4 * p) / 1E4; return m
                                        }, b.ha); mb(b.l, { name: "publishers", ea: b.ea, data: { Ma: b.Ma, ha: b.ha } })
                                    }
                            })()
                        }; a.prototype.kh = function (c) { var b = c.top, d = c.bottom, e = c.left, f = this.Db, g = f.Ue; f = f.Wa; var h = this.l.Math; c = h.min(h.max(c.right, 0), g) - h.min(h.max(e, 0), g); return (h.min(h.max(d, 0), f) - h.min(h.max(b, 0), f)) * c }; a.prototype.Qj = function (c) { var b = A(function (d) { return d.id }, this.ha); this.ha = this.ha.concat(Y(function (d) { return !G(d.id, b) }, c)) }; a.prototype.Gg = function () {
                            var c = lg(this.l) || Fd(this.l); this.Db =
                                { Ue: c[0], Wa: c[1] }
                        }; a.prototype.Sj = function () {
                            var c = this; C(this.l, "p.um." + this.Yb.id, function () {
                                var b = []; c.Mb(); c.$ = M(function (d, e) {
                                    var f; if (c.Mf(e.element)) b.push(e), delete d[e.id]; else {
                                        var g = (f = {}, f.id = e.id, f.involvedTime = Math.max(e.involvedTime, 0), f.maxScrolled = e.maxScrolled || 0, f.chars = e.update ? e.update("chars") || 0 : 0, f); e.nc && (f = ed(e.nc)) && (g.x = Math.max(Math.round(f.left) + c.scroll.x, 0), g.y = Math.max(Math.round(f.top) + c.scroll.y, 0), g.width = Math.round(f.width), g.height = Math.round(f.height)); d[e.id] =
                                            g
                                    } return d
                                }, {}, c.ha); z(function (d) { d = se(c.l)(d, c.ha); c.ha.splice(d, 1) }, b)
                            })()
                        }; a.prototype.Kd = function () { var c, b, d = A(v(this.$, n), ca(this.$)); return d.length && (this.de = jb(this.l, d), this.Yf !== this.de) ? (c = {}, c.type = "publishersHeader", c.data = (b = {}, b.articleMeta = d || [], b.involvedTime = this.Ma, b), c) : null }; a.prototype.oh = function () {
                            var c = this; if (this.ha.length) {
                                var b = A(function (d) {
                                    var e, f = M(function (g, h) { d[h] && (g[h] = d[h]); return g }, {}, c.Qg); d.pg = !0; return e = {}, e.type = "articleInfo", e.stamp = f.stamp, e.data = f,
                                        e
                                }, Y(function (d) { return !d.pg }, this.ha)); b.length && (this.buffer = this.buffer.concat(b), Ab(this.l, this.ea, "Publisher content info found: ", b))
                            }
                        }; a.prototype.Aj = function () { this.kf.D(this.l, Zk, this.ec) }; a.prototype.Pj = function () { this.kf.cc(this.l, Zk, this.ec) }; a.prototype.Mb = function () { this.scroll = { x: this.l.pageXOffset || n(this.l, "document.documentElement.scrollLeft") || 0, y: this.l.pageYOffset || n(this.l, "document.documentElement.scrollLeft") || 0 } }; return a
                    }(), Rd = {}; Xk && (Rd.json_ld = Xk); Xg && (Rd.schema = Xg, Rd.microdata =
                        Xg); Yk && (Rd.opengraph = Yk); var Zs = E("p.p", function (a, c) {
                            function b(l) { var m = y({}, k); m.Y.fa = l; return e(m, c)["catch"](C(a, "s.ww.p")) } if (!Da("querySelectorAll", a.document.querySelectorAll)) return K.resolve(); var d = [new Pe(a)]; d.unshift(new Ws(a)); var e = ya(a, "p", c), f = eb(function (l) { return l.isEnabled() }, d); d = Ba(); var g = Rc(a, c.id), h = g.o("pai"); h && (g.uc("pai"), d.C("pai", h)); var k = { G: {}, H: d, Oa: { Td: !(f instanceof Pe) }, Y: {} }; return pa(c, C(a, "ps.s", function (l) {
                                if (l = n(l, "settings.publisher.schema")) {
                                    l = Nj(c) ?
                                        "microdata" : l; var m = Rd[l]; if (m && f) { var p = N(c); m = new m(a, p); (new Ys(a, m, f, b, p)).start(); Ab(a, p, 'Publishers analytics schema "' + l + '"') }
                                }
                            }))
                        }), $s = function () {
                            function a(c, b) { this.l = c; this.Xh = b } a.prototype.Aa = function (c) { return of(kc(D(this.Qa, this), c)) }; a.prototype.Qa = function (c, b) { var d = this, e = [], f = this.Xh(this.l, b && b.type, c.type); f && (e = kc(function (g) { return g({ l: d.l, ra: c }) || [] }, f)); return e }; a.prototype.Va = function (c) { return c.length }; a.prototype.dd = function (c) { return [c] }; a.prototype.isEnabled = function () { return !0 };
                            return a
                        }(), $k = function () { function a(c, b, d) { this.gf = 0; this.pe = 1; this.kd = 5E3; this.l = c; this.qa = b; this.Zb = d } a.prototype.cd = function () { this.gf = W(this.l, u(D(this.flush, this), D(this.cd, this)), this.kd, "b.f") }; a.prototype.send = function (c, b) { var d = this.Zb(c, b || [], this.pe); this.pe += 1; return d }; a.prototype.push = function () { }; a.prototype.flush = function () { }; return a }(), Rm = function (a) {
                            function c(b, d, e) { b = a.call(this, b, d, e) || this; b.buffer = []; b.Rg = 7500; b.kd = 3E4; b.cd(); return b } Ja(c, a); c.prototype.push = function (b,
                                d) { var e = this.qa.Qa(b, d); La(this.buffer, e); this.qa.Va(this.buffer) > this.Rg && this.flush() }; c.prototype.flush = function () { var b = this.buffer; b.length && (this.send(b), this.buffer = []) }; return c
                        }($k), jn = /opera mini/i, al = "first(-|\\.|_|\\s){0,2}name last(-|\\.|_|\\s){0,2}name zip postal phone address passport (bank|credit)(-|\\.|_|\\s){0,2}card card(-|\\.|_|\\s){0,2}number card(-|\\.|_|\\s){0,2}holder cvv card(-|\\.|_|\\s){0,2}exp card(-|\\.|_|\\s){0,2}name card.*month card.*year card.*month card.*year password email birth(-|\\.|_|\\s){0,2}(day|date) second(-|\\.|_|\\s){0,2}name third(-|\\.|_|\\s){0,2}name patronymic middle(-|\\.|_|\\s){0,2}name birth(-|\\.|_|\\s){0,2}place house street city flat state contact.*".split(" "),
                            Zm = ["email", "tel"], gn = /ym-hide-content/, hn = /ym-show-content/, dn = /^[\w\u0410-\u042f\u0430-\u044f]$/, en = [65, 90], fn = [97, 122], bn = "color radio checkbox date datetime-local email month number password range search tel text time url week".split(" "), $m = new RegExp("(" + L("|", al) + ")", "i"), fk = ["password", "passwd", "pswd"], an = new RegExp("(" + L("|", al.concat("\u0438\u043c\u044f \u0444\u0430\u043c\u0438\u043b\u0438\u044f \u043e\u0442\u0447\u0435\u0441\u0442\u0432\u043e \u0438\u043d\u0434\u0435\u043a\u0441 \u0442\u0435\u043b\u0435\u0444\u043e\u043d \u0430\u0434\u0440\u0435\u0441 \u043f\u0430\u0441\u043f\u043e\u0440\u0442 \u043d\u043e\u043c\u0435\u0440(-|\\.|_|\\s){0,2}\u043a\u0430\u0440\u0442\u044b \u044d\u043b\u0435\u043a\u0442\u0440\u043e\u043d\u043d\u0430\u044f(-|\\.|_|\\s){0,2}\u043f\u043e\u0447\u0442\u0430 \u0434\u0430\u0442\u0430(-|\\.|_|\\s){0,2}\u0440\u043e\u0436\u0434\u0435\u043d\u0438\u044f \u0434\u043e\u043c \u0443\u043b\u0438\u0446\u0430 \u043a\u0432\u0430\u0440\u0442\u0438\u0440\u0430 \u0433\u043e\u0440\u043e\u0434 \u043e\u0431\u043b\u0430\u0441\u0442\u044c".split(" "))) +
                                ")", "i"), Va = "metrikaId_" + Math.random(), pc = { ud: 0 }, Yq = w(function () {
                                    var a; return a = {}, a.A = 1, a.ABBR = 2, a.ACRONYM = 3, a.ADDRESS = 4, a.APPLET = 5, a.AREA = 6, a.B = 7, a.BASE = 8, a.BASEFONT = 9, a.BDO = 10, a.BIG = 11, a.BLOCKQUOTE = 12, a.BODY = 13, a.BR = 14, a.BUTTON = 15, a.CAPTION = 16, a.CENTER = 17, a.CITE = 18, a.CODE = 19, a.COL = 20, a.COLGROUP = 21, a.DD = 22, a.DEL = 23, a.DFN = 24, a.DIR = 25, a.DIV = 26, a.DL = 27, a.DT = 28, a.EM = 29, a.FIELDSET = 30, a.FONT = 31, a.FORM = 32, a.FRAME = 33, a.FRAMESET = 34, a.H1 = 35, a.H2 = 36, a.H3 = 37, a.H4 = 38, a.H5 = 39, a.H6 = 40, a.HEAD = 41, a.HR = 42, a.HTML =
                                        43, a.I = 44, a.IFRAME = 45, a.IMG = 46, a.INPUT = 47, a.INS = 48, a.ISINDEX = 49, a.KBD = 50, a.LABEL = 51, a.LEGEND = 52, a.LI = 53, a.LINK = 54, a.MAP = 55, a.MENU = 56, a.META = 57, a.NOFRAMES = 58, a.NOSCRIPT = 59, a.OBJECT = 60, a.OL = 61, a.OPTGROUP = 62, a.OPTION = 63, a.P = 64, a.PARAM = 65, a.PRE = 66, a.Q = 67, a.S = 68, a.SAMP = 69, a.SCRIPT = 70, a.SELECT = 71, a.SMALL = 72, a.SPAN = 73, a.STRIKE = 74, a.STRONG = 75, a.STYLE = 76, a.SUB = 77, a.SUP = 78, a.TABLE = 79, a.TBODY = 80, a.TD = 81, a.TEXTAREA = 82, a.TFOOT = 83, a.TH = 84, a.THEAD = 85, a.TITLE = 86, a.TR = 87, a.TT = 88, a.U = 89, a.UL = 90, a.VAR = 91, a.NOINDEX =
                                        100, a
                                }), Vq = [17, 18, 38, 32, 39, 15, 11, 7, 1], at = function () {
                                    var a = "first(-|\\.|_|\\s){0,2}name last(-|\\.|_|\\s){0,2}name zip postal phone address passport (bank|credit)(-|\\.|_|\\s){0,2}card card(-|\\.|_|\\s){0,2}number card(-|\\.|_|\\s){0,2}holder cvv card(-|\\.|_|\\s){0,2}exp card(-|\\.|_|\\s){0,2}name card.*month card.*year card.*month card.*year password email birth(-|\\.|_|\\s){0,2}(day|date) second(-|\\.|_|\\s){0,2}name third(-|\\.|_|\\s){0,2}name patronymic middle(-|\\.|_|\\s){0,2}name birth(-|\\.|_|\\s){0,2}place house street city flat state".split(" ");
                                    return {
                                        vk: new RegExp("(" + L("|", a) + ")", "i"), Fk: new RegExp("(" + L("|", a.concat("\u0438\u043c\u044f;\u0444\u0430\u043c\u0438\u043b\u0438\u044f;\u043e\u0442\u0447\u0435\u0441\u0442\u0432\u043e;\u0438\u043d\u0434\u0435\u043a\u0441;\u0442\u0435\u043b\u0435\u0444\u043e\u043d;\u0430\u0434\u0440\u0435\u0441;\u043f\u0430\u0441\u043f\u043e\u0440\u0442;\u041d\u043e\u043c\u0435\u0440(-|\\.|_|\\s){0,2}\u043a\u0430\u0440\u0442\u044b;\u0434\u0430\u0442\u0430(-|\\.|_|\\s){0,2} \u0440\u043e\u0436\u0434\u0435\u043d\u0438\u044f;\u0434\u043e\u043c;\u0443\u043b\u0438\u0446\u0430;\u043a\u0432\u0430\u0440\u0442\u0438\u0440\u0430;\u0433\u043e\u0440\u043e\u0434;\u043e\u0431\u043b\u0430\u0441\u0442\u044c".split(";"))) +
                                            ")", "i"), qk: /ym-record-keys/i, Xi: "\u2022", Ek: 88
                                    }
                                }(), kk = gb(v(at.Xi, O)), hd = !0, Eg = "", Fg = !1, Gg = !0, Hg = !1, Xm = ka(function (a, c) { var b = F([a, "efv." + c.event], C); c.N = A(u(O, b), c.N); return c }), bl = w(function (a) {
                                    var c = [], b = [], d = []; a.document.attachEvent && !a.opera && (c.push(vf), b.push(br), b.push(cr)); a.document.addEventListener ? c.push(ik) : (b.push(hk), d.push(ik)); c = va([{ target: a, type: "window", event: "beforeunload", N: [B] }, { target: a, type: "window", event: "unload", N: [B] }, { event: "click", N: [Ie] }, { event: "dblclick", N: [Ie] }, {
                                        event: "mousedown",
                                        N: [Ie]
                                    }, { event: "mouseup", N: [er] }, { event: "keydown", N: [fr] }, { event: "keypress", N: [gr] }, { event: "copy", N: [mk] }, { event: "blur", N: c }, { event: "focusin", N: b }, { event: "focusout", N: d }], !a.document.attachEvent || a.opera ? [{ target: a, type: "window", event: "focus", N: [Kh] }, { target: a, type: "window", event: "blur", N: [vf] }] : [], a.document.addEventListener ? [{ event: "focus", N: [hk] }, { event: "change", N: [jk] }, { event: "submit", N: [ok] }] : [{ type: "formInput", event: "change", N: [jk] }, { type: "form", event: "submit", N: [ok] }]); return Wm(a, c)
                                }), Um =
                                w(function (a) { return va(uc(a) ? [{ target: a, type: "document", event: "mouseleave", N: [hr] }] : []) }), bt = ["submit", "beforeunload", "unload"], ct = w(function (a, c) { var b = c(a); return M(function (d, e) { d[e.type + ":" + e.event] = e.N; return d }, {}, b) }), dt = v(bl, function (a, c, b, d) { return ct(c, a)[b + ":" + d] || [] }), Vm = /^\s*function submit\(\)/, et = E("fw.p", function (a, c) {
                                    var b; if (!(b = c.Bh || !c.Eb)) { var d = H(a), e = !1; b = d.o("hitParam", {}); var f = N(c); b[f] && (d = d.o("counters", {}), e = !(!We(c.ca) || d[f])); b[f] = 1; b = e } if (b) return K.resolve(B); b = new $s(a,
                                        dt); return Qm(a, c, b, bl, bt)
                                }), Yg, cl = (Yg = function (a) {
                                    function c(b, d, e, f) { void 0 === f && (f = 0); d = a.call(this, b, d, e) || this; d.Me = 0; d.Gb = 0; d.Le = 0; d.buffer = []; d.kd = 2E3; d.ba = dd(b); d.cd(); d.Le = f; return d } Ja(c, a); c.prototype.uf = function (b) { return Y(Boolean, this.ba.O("ag", b)) }; c.prototype.tf = function (b, d) { var e = this; b(Ra(C(this.l, "wv2.b.st"), function (f) { e.send(f, d) })) }; c.prototype.yj = function (b, d) {
                                        var e = this; la(this.l, this.gf); var f = Math.ceil(this.qa.Va(d) / 63E4), g = this.qa.dd(d, f); z(function (h, k) {
                                            var l, m = y({}, b,
                                                (l = {}, l.data = h, l.partNum = k + 1, l.end = k + 1 === f, l)); l = e.qa.Aa([m], !1); e.tf(l, [m])
                                        }, g); this.cd()
                                    }; c.prototype.send = function (b, d) { var e = this; this.ba.O("se", d); return a.prototype.send.call(this, b, d).then(O, function () { e.ba.O("see", d) }) }; c.wf = function (b, d, e, f, g) { c.md["" + b + d] || (this.md[d] = new c(g, f, e, "m" === d ? 31457280 : 0)); return this.md[d] }; c.prototype.Ji = function () { return this.Le && this.Me >= this.Le }; c.prototype.push = function (b) {
                                        var d = this; if (!this.Ji()) {
                                            this.ba.O("p", b); var e = this.qa.Qa(b), f = this.qa.Va(e); 7E5 <
                                                f ? this.yj(b, e) : (e = this.uf(this.buffer.concat([b])), e = M(function (g, h) { return g + d.qa.Va(d.qa.Qa(h)) }, 0, e), this.Gb + e + f >= 7E5 * .7 && this.flush(), this.buffer.push(b), this.Gb += f)
                                        }
                                    }; c.prototype.D = function (b, d) { this.ba.D([b], d) }; c.prototype.na = function (b, d) { this.ba.na([b], d) }; c.prototype.flush = function () { var b = this.buffer.concat(this.uf(this.buffer)); if (b.length) { this.buffer = []; this.Me += this.Gb; this.Gb = 0; var d = this.qa.Aa(b); this.tf(d, b) } }; return c
                                }($k), Yg.md = {}, Yg), Za = function () {
                                    function a(c, b, d) {
                                        this.Ni = "wv2.c";
                                        this.Sb = []; this.ja = []; this.l = c; this.K = tf(c, this, d, this.Ni); this.F = b; this.hb = this.F.ai(); this.start = this.K.J(this.start, "st"); this.stop = this.K.J(this.stop, "sp")
                                    } a.prototype.start = function () { var c = this; this.Sb = A(function (b) { var d = b[0], e = b[2]; b = D(c.K.J(b[1], d[0]), c); return c.hb.D(e || c.l, d, b) }, this.ja) }; a.prototype.stop = function () { z(ia, this.Sb) }; a.prototype.Z = function (c) { return this.F.ua().Z(c) }; return a
                                }(), Om = ["checkbox", "radio"], Pm = /pwd|value|password/i, Zg = U("location.href"), ft = function (a) {
                                    function c(b,
                                        d, e) { d = a.call(this, b, d, e) || this; d.ta = { elements: [], attributes: [] }; d.index = 0; d.ie = d.K.J(d.ie, "o"); d.wd = d.K.J(d.wd, "io"); d.ld = d.K.J(d.ld, "ao"); d.we = d.K.J(d.we, "a"); d.ue = d.K.J(d.ue, "at"); d.xe = d.K.J(d.xe, "r"); d.ve = d.K.J(d.ve, "c"); d.ya = new b.MutationObserver(d.ie); return d } Ja(c, a); c.prototype.start = function () { this.ya.observe(this.l.document.documentElement, { attributes: !0, characterData: !0, childList: !0, subtree: !0, attributeOldValue: !0, characterDataOldValue: !0 }) }; c.prototype.stop = function () { this.ya.disconnect() };
                                    c.prototype.ld = function (b) { var d = b.target; b = b.attributeName; var e = this.ta.elements.indexOf(d); -1 === e && (e = this.ta.elements.push(d) - 1, this.ta.attributes[e] = {}); this.ta.attributes[e] || (this.ta.attributes[e] = {}); e = this.ta.attributes[e]; var f = d.getAttribute(b); e[b] = ce(this.l, d, b, f, this.F.Cc()).value }; c.prototype.wd = function (b) {
                                        function d(k) { var l = Lb(e.l)(k, f); return -1 === l ? (f.push(k), k = { Dd: {} }, g.push(k), k) : g[l] } var e = this, f = [], g = []; z(function (k) {
                                            var l = k.attributeName, m = k.removedNodes, p = k.oldValue, q = k.target,
                                            r = k.nextSibling, t = k.previousSibling; switch (k.type) { case "attributes": e.ld(k); var x = d(q); x.Dd[l] || (x.Dd[l] = ce(e.l, q, l, p, e.F.Cc()).value); break; case "childList": m && z(function (I) { x = d(I); x.rf || y(x, { rf: q, Rh: r ? r : void 0, Sh: t ? t : void 0 }) }, ra(m)); break; case "characterData": x = d(q), x.sf || (x.sf = p) }
                                        }, b); var h = this.F.ua(); z(function (k, l) { h.Fe(k, g[l]) }, f)
                                    }; c.prototype.ie = function (b) {
                                        var d = this; if (Zg(this.l)) {
                                            var e = this.F.L(); this.wd(b); z(function (f) {
                                                var g = f.addedNodes, h = f.removedNodes, k = f.target; switch (f.type) {
                                                    case "childList": h &&
                                                        h.length && d.xe(ra(h), e); g && g.length && d.we(ra(g), e); break; case "characterData": d.ve(k, e)
                                                }
                                            }, b); this.ue(e)
                                        } else this.stop()
                                    }; c.prototype.ue = function (b) { var d = this; z(function (e, f) { var g = d.Bc(); d.F.X("mutation", { index: g, attributes: d.ta.attributes[f], target: d.Z(e) }, "ac", b) }, this.ta.elements); this.ta.elements = []; this.ta.attributes = [] }; c.prototype.we = function (b, d) {
                                        var e = this, f = this.Bc(); this.F.ua().Gc({
                                            ma: b, bd: function (g) {
                                                g = A(function (h) { h = y({}, h); delete h.node; return h }, g); e.F.X("mutation", { index: f, ma: g },
                                                    "ad", d)
                                            }
                                        })
                                    }; c.prototype.xe = function (b, d) { var e = this, f = this.Bc(), g = this.F.ua(), h = A(function (k) { var l = g.removeNode(k); Ai(e.l, k, function (m) { g.removeNode(m) }); return l }, b); this.F.X("mutation", { index: f, ma: h }, "re", d) }; c.prototype.ve = function (b, d) { var e = this.Bc(); this.F.X("mutation", { value: b.textContent, target: this.Z(b), index: e }, "tc", d) }; c.prototype.Bc = function () { var b = this.index; this.index += 1; return b }; return c
                                }(Za), gt = function () {
                                    function a(c, b) {
                                        var d = this; this.xc = []; this.ib = []; this.ee = 1; this.Sa = 0; this.rb =
                                            {}; this.Ic = {}; this.Pd = function (f) { return d.ib.length ? G(f, d.ib) : !1 }; this.removeNode = function (f) { var g = d.Z(f), h = Ia(f); if (h) return h = "NR:" + h.toLowerCase(), d.Pd(h) && d.ba.O(h, { data: { node: f, id: g } }), g }; this.mb = function (f) { var g = Ia(f); if (g) { var h = f.__ym_indexer; h || (h = d.ee, f.__ym_indexer = h, d.ee += 1, g = "NA:" + g.toLowerCase(), d.Pd(g) && d.ba.O(g, { data: { node: f, id: h } })); return h } return null }; this.l = c; var e = tf(c, this, "i"); this.ba = dd(c); this.options = b; this.start = e.J(this.start, "st"); this.stop = e.J(this.stop, "sp"); this.Z =
                                                e.J(this.Z, "i"); this.Fe = e.J(this.Fe, "o"); this.Gc = e.J(this.Gc, "a"); this.removeNode = e.J(this.removeNode, "r"); this.ga = e.J(this.ga, "s")
                                    } a.prototype.Fe = function (c, b) { var d = this.mb(c); Ta(d) || (this.Ic[d] && this.Z(c), this.Ic[d] = b) }; a.prototype.D = function (c, b, d) { c = "" + b + c; this.ib.push(c); this.Pd(c) || this.ib.push(c); this.ba.D([c], d) }; a.prototype.na = function (c, b, d) { var e = "" + b + c; this.ib = Y(function (f) { return f !== e }, this.ib); this.ba.na([e], d) }; a.prototype.start = function () {
                                        this.Sa = W(this.l, u(D(this.ga, this, !1), this.start),
                                            50, "i.s")
                                    }; a.prototype.stop = function () { this.flush(); la(this.l, this.Sa); this.xc = [] }; a.prototype.Gc = function (c) { var b = this, d = [], e = 0, f = { bd: c.bd, result: [], Hc: 0, ma: d }; this.xc.push(f); z(function (g) { Ai(b.l, g, function (h) { var k = b.mb(h); Ta(k) || (d.push(h), b.rb[k] && b.Z(h), b.rb[k] = { node: h, event: f, Mj: e }, e += 1) }) }, c.ma) }; a.prototype.Z = function (c) {
                                        if (c === this.l) return 0; var b = this.mb(c), d = this.rb[b], e = this.Vh(b), f = e.rf, g = e.Dd, h = e.sf, k = e.Rh, l = e.Sh; if (d) {
                                            e = d.event; d = d.Mj; var m = this.l.document.documentElement === c; k =
                                                k || c.nextSibling; var p = l || c.previousSibling; l = !m && k ? this.mb(k) : null; p = !m && p ? this.mb(p) : null; m = this.l; k = this.options; f = this.mb(f || c.parentNode || c.parentElement) || 0; var q = g, r = void 0; void 0 === p && (p = null); void 0 === l && (l = null); void 0 === q && (q = {}); void 0 === r && (r = Ia(c)); if (V(r)) c = void 0; else {
                                                    g = { id: b, te: p !== f ? p : null, next: l !== f ? l : null, parent: f, name: r.toLowerCase(), node: c }; if (Af(c)) { if (h = Lm(c, h), g.attributes = {}, g.content = h) if (c = fd(m, c)) g.content = "" !== h.trim() ? cn(m, h) : h, g.hidden = c } else h = Mm(m, c, k, q, r), m = h.pb,
                                                        g.attributes = h.fh, m && (g.hidden = m), c.namespaceURI && nc(c.namespaceURI, "svg") && (g.Rf = c.namespaceURI); c = g
                                                } if (V(c)) return; delete this.rb[b]; e.result[d] = c; e.Hc += 1; e.ma.length === e.Hc && e.bd(e.result)
                                        } return b
                                    }; a.prototype.flush = function () { this.ga(!0) }; a.prototype.ga = function (c) { var b = this; if (Zg(this.l)) { var d = ca(this.rb); d = A(function (e) { return b.rb[e].node }, d); d = hc(d, this.Z); c = c ? Ej(B) : Cj(this.l, 20); d(c); this.xc = Y(function (e) { return e.Hc !== e.result.length }, this.xc) } }; a.prototype.Vh = function (c) {
                                        if (Ta(c)) return {};
                                        var b = this.Ic[c]; return b ? (delete this.Ic[c], b) : {}
                                    }; return a
                                }(), ht = ["input", "change", "keyup", "paste", "cut"], it = function (a) {
                                    function c(b, d, e) { b = a.call(this, b, d, e) || this; b.inputs = {}; b.zd = !1; b.Rc = b.K.J(b.Rc, "ii"); b.Sc = b.K.J(b.Sc, "ir"); b.Xc = b.K.J(b.Xc, "ri"); b.hd = b.K.J(b.hd, "ur"); b.Od = b.K.J(b.Od, "ce"); b.Fc = b.K.J(b.Fc, "vc"); return b } Ja(c, a); c.prototype.start = function () {
                                        var b = this, d = this.F.ua(); this.zd = this.ph(); z(function (e) { e = e.toLowerCase(); d.D(e, "NA:", D(b.Rc, b)); d.D(e, "NR:", D(b.Sc, b)) }, zf); this.Sb = [this.hb.D(this.l.document,
                                            ht, D(this.Od, this)), function () { z(function (e) { e = e.toLowerCase(); d.na(e, "NA:", b.Rc); d.na(e, "NR:", b.Sc) }, zf); z(b.hd, ca(b.inputs)) }]
                                    }; c.prototype.hd = function (b) { if (this.zd) { var d = this.inputs[b]; d && (b = d.gj, d = d.element, b && this.l.Object.defineProperty(d, this.Dc(d), b)) } }; c.prototype.Sc = function (b) { b && this.hd(b.data.id) }; c.prototype.Rc = function (b) { b && (b = b.data, this.Xc(b.node, b.id)) }; c.prototype.Dc = function (b) { return ze(b) ? "checked" : "value" }; c.prototype.Od = function (b) {
                                        if (b = b.target) {
                                            var d = this.Dc(b); this.Fc(b[d],
                                                b)
                                        }
                                    }; c.prototype.Fc = function (b, d) { var e = this.Z(d), f = this.inputs[e]; if (!f && (f = this.Xc(f, e), !f)) return; e = f.rh; var g = f.value, h = this.Dc(d); b && !G(typeof b, ["string", "boolean", "number"]) || b === g || (g = ce(this.l, d, h, b, this.F.Cc()).value, e ? this.F.X("event", { target: this.Z(d), checked: !!b }, "change") : (e = de(d), h = xf(d), this.F.X("event", { value: g, hidden: h && !e, target: this.Z(d) }, "change")), f.value = b) }; c.prototype.Xc = function (b, d) {
                                        var e = this; if (!qf(b) || "__ym_input_override_test" === b.getAttribute("class") || this.inputs[d]) return null;
                                        var f = ze(b), g = this.Dc(b), h = { element: b, rh: f, value: b[g] }; this.inputs[d] = h; this.zd && Gb(this.l, function () { var k = e.l.Object.getOwnPropertyDescriptor(Object.getPrototypeOf(b), g) || {}, l = e.l.Object.getOwnPropertyDescriptor(b, g) || {}, m = y({}, k, l); if (Da("((set)?(\\s?" + g + ")?)?", m.set)) { try { e.l.Object.defineProperty(b, g, y({}, m, { configurable: !0, set: function (p) { e.Fc(p, this); return m.set.call(this, p) } })) } catch (p) { } h.gj = m } }); return h
                                    }; c.prototype.ph = function () {
                                        var b = !0, d = $a(this.l)("input"); try {
                                            d = $a(this.l)("input");
                                            d.value = "INPUT_VALUE"; d.style.setProperty("display", "none", "important"); d.setAttribute("type", "text"); d.setAttribute("class", "__ym_input_override_test"); var e = this.l.Object.getOwnPropertyDescriptor(Object.getPrototypeOf(d), "value") || {}, f = this.l.Object.getOwnPropertyDescriptor(d, "value") || {}, g = y({}, e, f); this.l.Object.defineProperty(d, "value", y({}, g, { configurable: !0, set: function (h) { return g.set.call(d, h) } })); "INPUT_VALUE" !== d.value && (b = !1); d.value = "INPUT_TEST"; "INPUT_TEST" !== d.value && (b = !1)
                                        } catch (h) {
                                            b =
                                            !1
                                        } return b
                                    }; return c
                                }(Za), jt = function (a) {
                                    function c(b, d, e) { b = a.call(this, b, d, e) || this; b.ab = { width: 0, height: 0, ub: 0, vb: 0, orientation: 0 }; b.ja.push([["resize"], b.ej]); b.ja.push([["orientationchange"], b.cj]); return b } Ja(c, a); c.prototype.start = function () { a.prototype.start.call(this); this.jg() }; c.prototype.ej = function () { var b = this.Md(); this.wi(b) && (this.ab = b, this.kg(b)) }; c.prototype.cj = function () { var b = this.Md(); this.ab.orientation !== b.orientation && (this.ab = b, this.wj(b)) }; c.prototype.Nf = function (b) {
                                        return !b.height ||
                                            !b.width || !b.vb || !b.ub
                                    }; c.prototype.wi = function (b) { return b.height !== this.ab.height || b.width !== this.ab.width }; c.prototype.Md = function () { var b = this.F.lb(), d = Fd(this.l), e = d[0]; d = d[1]; b = b.Ld(); return { width: e, height: d, vb: b ? b.scrollWidth : 0, ub: b ? b.scrollHeight : 0, orientation: this.F.lb().ei() } }; c.prototype.wj = function (b) { var d; void 0 === d && (d = this.F.L()); this.F.X("event", { width: b.width, height: b.height, orientation: b.orientation }, "deviceRotation", d) }; c.prototype.kg = function (b, d) {
                                        void 0 === d && (d = this.F.L()); this.F.X("event",
                                            { width: b.width, height: b.height, vb: b.vb, ub: b.ub }, "resize", d)
                                    }; c.prototype.jg = function () { var b = this.Md(); this.Nf(b) ? W(this.l, D(this.jg, this), 300) : (this.Nf(this.ab) && (this.ab = b), this.kg(b, 0)) }; return c
                                }(Za), Qe = function () {
                                    function a(c) { this.index = 0; this.Bb = {}; this.l = c } a.prototype.rc = function (c, b, d) {
                                        void 0 === d && (d = {}); var e = ha(this.l), f = this.index; this.index += 1; this.Bb[f] = { Sa: 0, Xb: !1, Ph: c, Hb: [], Zd: e(Z) }; var g = this; return function () {
                                            var h = za(arguments), k = d.jb && !g.Bb[f].Xb, l = g.Bb[f]; la(g.l, l.Sa); l.Hb = h;
                                            l.Xb = !0; var m = e(Z); if (k || m - l.Zd >= b) c.apply(void 0, h), l.Zd = m; l.Sa = W(g.l, function () { k || (c.apply(void 0, h), l.Zd = e(Z)); l.Xb = !1; l.Hb = [] }, b, "th")
                                        }
                                    }; a.prototype.flush = function () { var c = this; z(function (b) { var d = c.Bb[b], e = d.Sa, f = d.Ph, g = d.Hb; d.Xb && (c.Bb[b].Xb = !1, f.apply(void 0, g), la(c.l, e)) }, ca(this.Bb)) }; return a
                                }(), kt = function (a) {
                                    function c(b, d, e) { d = a.call(this, b, d, e) || this; d.zg = []; d.Ve = { x: 0, y: 0 }; d.Ba = new Qe(b); d.Vc = d.K.J(d.Vc, "o"); d.ja.push([["scroll"], d.fj]); return d } Ja(c, a); c.prototype.start = function () {
                                        a.prototype.start.call(this);
                                        this.F.X("event", { x: Math.max(this.l.scrollX, 0), y: Math.max(this.l.scrollY, 0), page: !0, target: -1 }, "scroll", 0)
                                    }; c.prototype.stop = function () { a.prototype.stop.call(this); this.Ba.flush() }; c.prototype.fj = function (b) { if (this.F.lb().Hf()) this.Vc(b); else { var d = b.target, e = Y(function (f) { return f[0] === d }, this.zg).pop(); e ? e = e[1] : (e = this.Ba.rc(D(this.Vc, this), 100, { jb: !0 }), this.zg.push([d, e])); e(b) } }; c.prototype.Vc = function (b) {
                                        var d = this.F.lb().Ld(); b = b.target; var e = this.Mb(b); d = Oa(ma(b), [d, this.l, this.l.document]);
                                        var f = Math.max(e.left, 0); e = Math.max(e.top, 0); if (d) { if (this.Ve.x === f && this.Ve.y === e) return; this.Ve = { x: f, y: e } } this.F.X("event", { x: f, y: e, page: d, target: d ? -1 : this.Z(b) }, "scroll")
                                    }; c.prototype.Mb = function (b) {
                                        var d = { left: 0, top: 0 }; if (!b) return d; if (b.window === b) return { top: b.scrollY || 0, left: b.scrollX || 0 }; var e = b.ownerDocument || b, f = b.documentElement, g = e.defaultView || e.parentWindow, h = e.body; return b !== e || (b = this.F.lb().Ld(), b) ? G(b, [f, h]) ? { top: b.scrollTop || g.scrollY, left: b.scrollLeft || g.scrollX } : {
                                            top: b.scrollTop ||
                                                0, left: b.scrollLeft || 0
                                        } : d
                                    }; return c
                                }(Za), lt = ["mousemove", "mousedown", "mouseup", "click"], mt = function (a) {
                                    function c(b, d, e) { d = a.call(this, b, d, e) || this; d.ja.push([lt, d.bj]); d.Ba = new Qe(b); d.Pc = d.K.J(d.Pc, "n"); d.Ej = d.K.J(d.Ba.rc(D(d.Pc, d), 100), "t"); return d } Ja(c, a); c.prototype.stop = function () { a.prototype.stop.call(this); this.Ba.flush() }; c.prototype.bj = function (b) { var d = null; try { d = b.type } catch (e) { return } "mousemove" === d ? this.Ej(b) : this.Pc(b) }; c.prototype.Pc = function (b) {
                                        var d = b.type, e = b.clientX; e = void 0 ===
                                            e ? null : e; var f = b.clientY; f = void 0 === f ? null : f; b = b.target || this.l.document.elementFromPoint(e, f); this.F.X("event", { x: e || 0, y: f || 0, target: this.Z(b) }, d)
                                    }; return c
                                }(Za), nt = ["focus", "blur"], ot = function (a) { function c(b, d, e) { b = a.call(this, b, d, e) || this; b.ja.push([nt, b.Qh]); return b } Ja(c, a); c.prototype.Qh = function (b) { var d = b.target; b = b.type; this.F.X("event", { target: this.Z(d === this.l ? this.l.document.documentElement : d) }, b) }; return c }(Za), pt = w(function (a) {
                                    var c = Ka(a.getSelection, "getSelection"); return c ? D(c, a) :
                                        B
                                }), qt = u(pt, ia), rt = ["mousemove", "touchmove", "mousedown", "touchdown", "select"], st = /text|search|password|tel|url/, tt = function (a) {
                                    function c(b, d, e) { b = a.call(this, b, d, e) || this; b.Qd = !1; b.ja.push([rt, b.ti]); return b } Ja(c, a); c.prototype.ti = function (b) { var d = this.F, e = b.type, f = b.which; b = b.target; if ("mousemove" !== e || 1 === f) (e = "select" === e ? this.ji(b) : this.hi()) && e.start !== e.end ? (this.Qd = !0, d.X("event", e, "selection")) : this.Qd && (this.Qd = !1, d.X("event", { start: 0, end: 0 }, "selection")) }; c.prototype.hi = function () {
                                        var b =
                                            qt(this.l); if (b && 0 < b.rangeCount) { b = b.getRangeAt(0) || this.l.document.createRange(); var d = this.Z(b.startContainer), e = this.Z(b.endContainer); if (!V(d) && !V(e)) return { start: b.startOffset, end: b.endOffset, ug: d, hf: e } }
                                    }; c.prototype.ji = function (b) { if (st.test(b.type || "")) { var d = this.Z(b); if (!V(d)) return { start: b.selectionStart, end: b.selectionEnd, target: d } } }; return c
                                }(Za), ut = { focus: "windowfocus", blur: "windowblur" }, vt = function (a) {
                                    function c(b, d, e) {
                                        b = a.call(this, b, d, e) || this; b.visibility = null; V(b.l.document.hidden) ?
                                            V(b.l.document.msHidden) ? V(b.l.document.webkitHidden) || (b.visibility = { hidden: "webkitHidden", event: "webkitvisibilitychange" }) : b.visibility = { hidden: "msHidden", event: "msvisibilitychange" } : b.visibility = { hidden: "hidden", event: "visibilitychange" }; b.handleEvent = b.K.J(b.handleEvent, "e"); return b
                                    } Ja(c, a); c.prototype.start = function () { this.Sb = [this.hb.D(this.l, this.visibility ? [this.visibility.event] : ["focus", "blur"], D(this.handleEvent, this))] }; c.prototype.handleEvent = function (b) {
                                        this.F.X("event", {}, ut[this.visibility ?
                                            this.l.document[this.visibility.hidden] ? "blur" : "focus" : b.type])
                                    }; return c
                                }(Za), wt = ["touchmove", "touchstart", "touchend", "touchcancel", "touchforcechange"], xt = function (a) {
                                    function c(b, d, e) { d = a.call(this, b, d, e) || this; d.fd = {}; d.scrolling = !1; d.hg = 0; d.ja.push([["scroll"], d.uj, d.l.document]); d.ja.push([wt, d.Ij, d.l.document]); d.Ba = new Qe(b); d.Rb = d.K.J(d.Rb, "nh"); d.Fj = d.K.J(d.Ba.rc(d.Rb, d.F.lb().Hf() ? 0 : 50, { jb: !0 }), "th"); return d } Ja(c, a); c.prototype.uj = function () {
                                        var b = this; this.scrolling = !0; la(this.l, this.hg);
                                        this.hg = W(this.l, function () { b.scrolling = !1 }, 150)
                                    }; c.prototype.Ij = function (b) { var d = this, e = "touchcancel" === b.type || "touchend" === b.type; b.changedTouches && 0 < b.changedTouches.length && z(function (f) { var g = d.mi(f); f.__ym_touch_id = g; e && delete d.fd[f.identifier] }, ra(b.changedTouches)); "touchmove" === b.type ? this.scrolling ? this.Rb(b) : this.Fj(b, this.F.L()) : this.Rb(b) }; c.prototype.mi = function (b) { this.fd[b.identifier] || (this.fd[b.identifier] = Dh()); return this.fd[b.identifier] }; c.prototype.Rb = function (b, d) {
                                        void 0 ===
                                        d && (d = this.F.L()); var e = b.type, f = A(function (g) { return { id: g.__ym_touch_id, x: Math.round(g.clientX), y: Math.round(g.clientY), force: g.force } }, ra(b.changedTouches)); 0 < f.length && this.F.X("event", { touches: f, target: this.Z(b.target) }, e, d)
                                    }; return c
                                }(Za), yt = function (a) {
                                    function c(b, d, e) { b = a.call(this, b, d, e) || this; b.ja.push([["load"], b.aj, b.l.document]); return b } Ja(c, a); c.prototype.aj = function (b) { b = b.target; "IMG" === Ia(b) && b.getAttribute("srcset") && this.F.X("event", { target: this.Z(b), value: b.currentSrc }, "srcset") };
                                    return c
                                }(Za), zt = function (a) {
                                    function c(b, d, e) { d = a.call(this, b, d, e) || this; d.Ng = 1; d.Ba = new Qe(b); d.ic = d.K.J(d.ic, "z"); return d } Ja(c, a); c.prototype.start = function () { if (this.Df()) { a.prototype.start.call(this); this.ic(); var b = this.hb.D(n(this.l, "visualViewport"), ["resize"], this.Ba.rc(this.ic, 10)); this.Sb.push(b) } }; c.prototype.stop = function () { a.prototype.stop.call(this); this.Ba.flush() }; c.prototype.ic = function () { var b = this.Df(); b && b !== this.Ng && (this.Ng = b, this.xj(b)) }; c.prototype.Df = function () {
                                        var b = lg(this.l);
                                        return b ? b[2] : null
                                    }; c.prototype.xj = function (b) { var d = Pf(this.l); this.F.X("event", { x: d.x, y: d.y, level: b }, "zoom") }; return c
                                }(Za), Sd, Re = { 91: "super", 93: "super", 224: "super", 18: "alt", 17: "ctrl", 16: "shift", 9: "tab", 8: "backspace", 46: "delete" }, dl = { "super": 1, mk: 2, alt: 3, shift: 4, Ok: 5, "delete": 6, ik: 6 }, At = [4, 9, 8, 32, 37, 38, 39, 40, 46], el = (Sd = {}, Sd["1"] = { 91: "&#8984;", 93: "&#8984;", 224: "&#8984;", 18: "&#8997;", 17: "&#8963;", 16: "&#8679;", 9: "&#8677;", 8: "&#9003;", 46: "&#9003;" }, Sd["2"] = {
                                    91: "&#xff;", 93: "&#xff;", 224: "&#xff;", 18: "Alt",
                                    17: "Ctrl", 16: "Shift", 9: "Tab", 8: "Backspace", 46: "Delete"
                                }, Sd.Ri = { 32: "SPACEBAR", 37: "&larr;", 38: "&uarr;", 39: "&rarr;", 40: "&darr;", 13: "Enter" }, Sd), Bt = /flash/, Ct = /ym-disable-keys/, Dt = /^&#/, Et = function (a) {
                                    function c(b, d, e) {
                                        d = a.call(this, b, d, e) || this; d.ob = {}; d.Na = 0; d.Ga = []; d.xg = []; d.vc = 0; d.cg = 0; d.ja.push([["keydown"], d.oi]); d.ja.push([["keyup"], d.ri]); d.Xg = -1 !== (n(b, "navigator.appVersion") || "").indexOf("Mac") ? "1" : "2"; d.Lc = d.K.J(d.Lc, "v"); d.Bd = d.K.J(d.Bd, "ec"); d.ad = d.K.J(d.ad, "sk"); d.Jd = d.K.J(d.Jd, "gk"); d.Ge =
                                            d.K.J(d.Ge, "sc"); d.hc = d.K.J(d.hc, "cc"); d.reset = d.K.J(d.reset, "r"); d.Zc = d.K.J(d.Zc, "rs"); return d
                                    } Ja(c, a); c.prototype.oi = function (b) { if (this.Lc(b) && !this.Ii(b)) { var d = b.keyCode; b.repeat || this.ob[d] || (this.ob[b.keyCode] = !0, Re[b.keyCode] && !this.Na ? (this.Na += 1, this.Ge(b), this.reset(300)) : this.Na ? (this.lh(), this.ze(b), this.Bd()) : (this.reset(), this.ze(b))) } }; c.prototype.ri = function (b) {
                                        if (this.Lc(b)) {
                                            var d = b.keyCode, e = Re[b.keyCode]; this.ob[b.keyCode] && (this.ob[d] = !1); e && this.Na && (this.Na = 0, this.ob = {}); 1 ===
                                                this.Ga.length && (b = this.Ga[0], G(b.keyCode, At) && (this.ad([b], !0), this.reset())); this.Ga = Y(u(ma(d), Rb), this.Ga); la(this.l, this.vc)
                                        }
                                    }; c.prototype.Lc = function (b) { var d = this.l.document.activeElement; b = b.target; return !Oa(Boolean, [d && "OBJECT" === d.nodeName && Bt.test(d.getAttribute("type") || ""), "INPUT" === b.nodeName && "password" === b.getAttribute("type") && Ct.test(b.className)]) }; c.prototype.Bd = function () { this.xg = this.Ga.slice(0); la(this.l, this.vc); this.vc = W(this.l, v(this.xg, D(this.ad, this)), 0, "e.c") }; c.prototype.ad =
                                        function (b, d) { void 0 === d && (d = !1); if (1 < b.length || d) { var e = this.Jd(b); this.F.X("event", { Mc: e }, "keystroke") } }; c.prototype.Jd = function (b) { var d = this; b = A(function (e) { e = e.keyCode; var f = Re[e], g = d.bi(e); return { id: e, key: g, Kf: !!f && Dt.test(g), Nc: f } }, b); return ug(function (e, f) { return (dl[e.Nc] || 100) - (dl[f.Nc] || 100) }, b) }; c.prototype.bi = function (b) { return el[this.Xg][b] || el.Ri[b] || String.fromCharCode(b) }; c.prototype.ze = function (b) { G(b, this.Ga) || this.Ga.push(b) }; c.prototype.Ge = function (b) { this.ze(b); this.hc() }; c.prototype.hc =
                                            function () { this.Na ? W(this.l, this.hc, 100) : this.Ga = [] }; c.prototype.lh = function () { la(this.l, this.cg) }; c.prototype.reset = function (b) { b ? this.cg = W(this.l, D(this.Zc, this), b) : this.Zc() }; c.prototype.Zc = function () { this.Na = 0; this.Ga = []; this.ob = {}; la(this.l, this.vc) }; c.prototype.Ii = function (b) { return b.target && "INPUT" === b.target.nodeName ? b.shiftKey || 32 === b.keyCode || "shift" === Re[b.keyCode] : !1 }; return c
                                }(Za), Km = ["sr", "sd", "\u043d"], Ft = /allow-same-origin/, Gt = function (a) {
                                    function c(b, d, e) {
                                        d = a.call(this, b, d, e) || this;
                                        d.ac = []; d.Fd = {}; d.je = d.K.J(d.je, "fi"); d.ke = d.K.J(d.ke, "sd"); d.le = d.K.J(d.le, "src"); d.ya = new b.MutationObserver(d.le); return d
                                    } Ja(c, a); c.prototype.start = function () { a.prototype.start.call(this); this.F.Cc().jc && this.F.ua().D("iframe", "NA:", D(this.je, this)); this.F.zf().Hd().D(["sdr"], D(this.ke, this)) }; c.prototype.stop = function () { a.prototype.stop.call(this); z(function (b) { b.F.stop() }, this.ac) }; c.prototype.le = function (b) {
                                        var d = b.pop().target; if (b = eb(function (f) { return f.Gf === d }, this.ac)) {
                                            this.ac = Y(function (f) {
                                                return f.Gf !==
                                                    d
                                            }, this.ac); var e = b.F.Id(); try { b.F.stop() } catch (f) { } this.qc(d, e)
                                        }
                                    }; c.prototype.je = function (b) { if (b) { var d = b.data.node; this.ya.observe(d, { attributes: !0, attributeFilter: ["src"] }); this.qc(d, b.data.id) } }; c.prototype.qc = function (b, d) { var e = this; this.Ei(b) && $b(this.l, b)(Ra(B, function () { var f = e.F.qc(b.contentWindow, d); e.ac.push({ F: f, Gf: b }) })) }; c.prototype.ke = function (b) {
                                        var d = this, e = b.M; b = b.data; this.Fd[e] || (this.Fd[e] = { data: [] }); var f = this.Fd[e]; f.data = f.data.concat(b); this.l.isNaN(f.yd) && z(function (g) {
                                            "page" ===
                                            g.type && (f.yd = g.data.Ia - d.F.Af())
                                        }, f.data); this.l.isNaN(f.yd) || (this.F.ga(A(function (g) { g.L += f.yd; g.L = d.l.Math.max(0, g.L); return g }, f.data)), f.data = [])
                                    }; c.prototype.Ei = function (b) { var d = b.getAttribute("src"), e = b.getAttribute("sandbox"); return b.getAttribute("_ym_ignore") || e && !e.match(Ft) || d && "about:blank" !== d && (d = Gc(this.l, d).host) && T(this.l).host !== d ? !1 : n(b, "contentWindow.location.href") }; return c
                                }(Za), Ht = function (a) {
                                    function c(b, d, e) { b = a.call(this, b, d, e) || this; b.Ce = b.K.J(b.Ce, "ps"); return b } Ja(c,
                                        a); c.prototype.start = function () { this.F.ua().Gc({ ma: [this.l.document.documentElement], bd: this.Ce }) }; c.prototype.Ce = function (b) {
                                            var d = this.F.gi(), e = d.Wh(), f = T(this.l), g = f.host, h = f.protocol; f = f.pathname; var k = Fd(this.l), l = k[0]; k = k[1]; this.F.X("page", {
                                                content: A(function (m) { m = y({}, m); delete m.node; return m }, b), cf: e || "", Ef: !!e, viewport: { width: l, height: k }, title: this.l.document.title, doctype: d.Yh() || "", $e: this.l.location.href, Fg: this.l.navigator.userAgent, referrer: this.l.document.referrer, screen: {
                                                    width: this.l.screen.width,
                                                    height: this.l.screen.height
                                                }, location: { host: g, protocol: h, path: f }, Ia: this.F.Af(), ed: d.ki()
                                            }, "page", 0)
                                        }; return c
                                }(Za), It = ["addRule", "removeRule", "insertRule", "deleteRule"], $g = [[function (a) {
                                    function c(b, d, e) { b = a.call(this, b, d, e) || this; b.cb = {}; b.bc = {}; b.af = 0; b.Tc = b.K.J(b.Tc, "a"); b.zb = b.K.J(b.zb, "sr"); b.Uc = b.K.J(b.Uc, "r"); b.ga = b.K.J(b.ga, "d"); return b } Ja(c, a); c.prototype.start = function () { var b = this.F.ua(); b.D("style", "NA:", this.Tc); b.D("style", "NR:", this.Uc); this.ga() }; c.prototype.stop = function () {
                                        var b =
                                            this; a.prototype.stop.call(this); var d = this.F.ua(); d.na("style", "NA:", this.Tc); d.na("style", "NR:", this.Uc); this.ga(); la(this.l, this.af); z(function (e) { b.cb[e].sheet && b.fg(b.cb[e].sheet) }, ca(this.cb)); this.cb = {}
                                    }; c.prototype.ga = function () {
                                        var b = this; z(function (d) {
                                            var e = d[0]; d = d[1]; if (d.length) {
                                                for (var f = [], g = d[0].L, h = [], k = 0; k < d.length; k += 1) { var l = d[k], m = l.L; delete l.L; m <= g + 50 ? f.push(l) : (h.push(f), g = m, f = [l]) } f.length && h.push(f); h.length && z(function (p) {
                                                    b.F.X("event", { target: Ga(e), Ka: p }, "stylechange",
                                                        g)
                                                }, h); delete b.bc[e]
                                            }
                                        }, xa(this.bc)); this.af = W(this.l, this.ga, 100)
                                    }; c.prototype.zb = function (b, d, e, f, g) { void 0 === f && (f = ""); void 0 === g && (g = -1); this.bc[b] || (this.bc[b] = []); this.bc[b].push({ me: d, style: f, index: g, L: e }) }; c.prototype.hj = function (b, d) {
                                        var e = this, f = b.addRule, g = b.removeRule, h = b.insertRule, k = b.deleteRule; S(f) && (b.addRule = function (l, m, p) { e.zb(d, "a", e.F.L(), l + "{" + m + "}", p); return f.call(b, l, m, p) }); S(g) && (b.removeRule = function (l) { e.zb(d, "r", e.F.L(), "", l); return g.call(b, l) }); S(h) && (b.insertRule =
                                            function (l, m) { e.zb(d, "a", e.F.L(), l, m); return h.call(b, l, m) }); S(k) && (b.deleteRule = function (l) { e.zb(d, "r", e.F.L(), "", l); return k.call(b, l) })
                                    }; c.prototype.fg = function (b) { var d = this; z(function (e) { var f = d.l.CSSStyleSheet.prototype[e]; S(f) && (b[e] = D(f, b)) }, It) }; c.prototype.Ih = function (b) { try { return b.cssRules || b.rules } catch (d) { return null } }; c.prototype.Tc = function (b) {
                                        var d = b.data; b = d.id; d = d.node; if (d.sheet && !d.getAttribute("src") && !d.innerText) {
                                            var e = d.sheet, f = this.Ih(e); if (f && f.length) {
                                                for (var g = [], h = 0; h <
                                                    f.length; h += 1)g.push({ style: f[h].cssText, index: h, me: "a" }); this.F.X("event", { Ka: g, target: b }, "stylechange")
                                            } this.hj(e, b); this.cb[b] = d
                                        }
                                    }; c.prototype.Uc = function (b) { b = b.data.id; var d = this.cb[b]; d && (delete this.cb[b], d.sheet && this.fg(d.sheet)) }; return c
                                }(Za), "ss"], [it, "in"], [ft, "mu"], [jt, "r"], [kt, "sc"], [mt, "mo"], [ot, "f"], [tt, "se"], [vt, "wf"], [xt, "t"], [yt, "src"], [zt, "z"], [Et, "ks"]]; $g.push([Gt, "if"]); $g.push([Ht, "pa"]); var Jt = w(function (a) {
                                    var c = a.document; return {
                                        Ld: function () {
                                            if (c.scrollingElement) return c.scrollingElement;
                                            var b = 0 === c.compatMode.indexOf("CSS1") ? c.documentElement : c.body; return n(c, "documentElement.scrollHeight") >= n(c, "body.scrollHeight") ? b : null
                                        }, ei: function () { var b = a.screen; if (!b) return 0; var d = eb(v(b, n), ["orientation", "mozOrientation", "msOrientation"]); return n(b, d + ".angle") || 0 }, Bk: v(a, db), Hf: v(a, md), Ak: v(a, De)
                                    }
                                }), Kt = function () {
                                    function a(c, b) {
                                        var d = this; this.Ob = 0; this.xd = []; this.Nb = null; this.wa = this.dc = this.vg = !1; this.Ia = 0; this.gi = function () { return d.page }; this.Id = function () { return d.Ob }; this.Af = function () { return d.Ia };
                                        this.ai = function () { return d.hb }; this.zf = function () { return d.Nb }; this.ua = function () { return d.Rd }; this.L = function () { return d.Ke ? d.l.Math.max(d.Ke(Z) - d.Ia, 0) : 0 }; this.Cc = function () { return d.options }; this.lb = function () { return d.hh }; this.X = function (f, g, h, k) { void 0 === k && (k = d.L()); f = d.$h(f, g, h, k); d.ga(f) }; this.$h = function (f, g, h, k) { void 0 === k && (k = d.L()); return { type: f, data: g, L: k, M: d.Ob, event: h } }; this.ga = function (f) {
                                            f = ea(f) ? f : [f]; d.vg && !d.dc ? d.wa ? (f = A(function (g) { return g.M ? g : y(g, { M: d.Ob }) }, f), d.zf().lg(f)) :
                                                (z(function (g) { mb(d.l, { name: "webvisorData", data: g }) }, f), f = A(Gm, f), d.Zb(f)) : d.xd = d.xd.concat(f)
                                        }; this.l = c; var e = tf(c, this, "R"); this.He = e.J(this.He, "s"); this.ga = e.J(this.ga, "sd"); e = H(c); e.o("wv2e") && Ue(); e.C("wv2e", !0); this.options = b; this.hb = ja(c); this.Rd = new gt(this.l, b); this.hh = Jt(c); this.df = A(function (f) { return new f[0](c, d, f[1]) }, $g); this.Ci(); this.page = Im(this.l); this.He()
                                    } a.prototype.start = function (c) { this.vg = !0; this.Zb = c; this.ig() }; a.prototype.stop = function () {
                                        Zg(this.l) && (z(function (c) { return c.stop() },
                                            this.df), this.Rd.stop(), this.Nb && this.Nb.stop(), this.wa || this.X("event", {}, "eof"))
                                    }; a.prototype.qc = function (c, b) { var d = new a(c, y({}, this.options, { M: b })); d.start(B); return d }; a.prototype.Ci = function () { var c = this; this.wa = !!this.options.M; this.Ob = this.options.M || 0; this.dc = !this.wa; var b = this.options.Eg || []; b.push(T(this.l).host); this.Nb = Jm(this.l, this, b); b = this.Nb.Hd(); db(this.l) ? this.dc && b.D(["i"], function (d) { c.wa = d.wa; c.dc = !1; d.M && (c.Ob = d.M); c.ig() }) : this.dc = this.wa = !1 }; a.prototype.ig = function () {
                                        var c =
                                            zd(this.xd); this.ga(c)
                                    }; a.prototype.He = function () { this.Ke = Vf(this.l); this.Ia = this.Ke(Z); z(function (c) { c.start() }, this.df); this.Rd.start() }; return a
                                }(), ad = u(ca, Kc), da, Lt = (da = {}, da.mousemove = 0, da.mouseup = 1, da.mousedown = 2, da.click = 3, da.scroll = 4, da.windowblur = 5, da.windowfocus = 6, da.focus = 7, da.blur = 8, da.eof = 9, da.selection = 10, da.change = 11, da.input = 12, da.touchmove = 13, da.touchstart = 14, da.touchend = 15, da.touchcancel = 16, da.touchforcechange = 17, da.canvasMethod = 18, da.canvasProperty = 19, da.zoom = 20, da.resize = 21, da.mediaMethod =
                                    22, da.mediaProperty = 23, da.keystroke = 24, da.deviceRotation = 25, da.fatalError = 26, da.hashchange = 27, da.stylechange = 28, da), ah = ka(function (a, c) { var b; return b = {}, b[ad(a)] = c, b }), Mt = function () {
                                        function a(c) {
                                            var b; this.isSync = !1; this.Kb = []; this.lf = []; this.l = c; this.Qb = (b = {}, b.event = D(this.Fh, this), b.page = ah({ page: 1 }), b.mutation = ah({ Si: 1 }), b.activity = ah({ ah: 1 }), b); this.lf = [[["scroll"], { tj: 1 }], [["selection"], { vj: 1 }], [["change", "input"], { nh: 1 }], [["keystroke"], { Mi: 1 }, { Mc: 1 }], [["zoom"], { $j: 1 }], [["resize"], { pj: 1 }],
                                            [["windowfocus", "windowblur", "focus", "blur", "eof"], { Xj: 1 }], [["mousemove", "mouseup", "mousedown", "click"], { Qi: 1 }], [["deviceRotation"], { Ah: 1 }], [["fatalError"], { Kh: 1 }], [["touchmove", "touchstart", "touchend", "touchcancel", "touchforcechange"], { Hj: 1 }, { touches: 1 }, { touches: 1 }], [["hashchange"], { xi: 1 }], [["stylechange"], { zj: 1 }, { Ka: 1 }, { Ka: 1 }]]
                                        } a.prototype.Fh = function (c) {
                                            var b, d, e = c.type, f = eb(u(Kc, v(e, G)), this.lf); f || Wa(gc("vem." + e)); "eof" === e && (this.isSync = !0); var g = f[1], h = f[2]; f = f[3]; var k = c.$; return {
                                                event: (b =
                                                    { type: Lt[e], target: c.target, M: c.M }, b[ad(g)] = h ? (d = {}, d[ad(h)] = f ? k[ad(f)] : k, d) : k, b)
                                            }
                                        }; a.prototype.Aa = function (c, b) {
                                            var d = this; void 0 === b && (b = !1); var e = hc(c, function (h) { var k = !V(h.partNum); return { data: k ? void 0 : d.Qb[h.type](h.data), sh: k ? h.data : void 0, page: h.partNum, end: h.end, L: h.L } }), f = this.isSync || b ? Infinity : 10; e = ic(this.l, e, f); var g = [e]; this.Kb.push(e); return e(Le(function (h) { h = ge(d.l, Rh, { buffer: h }); h = ic(d.l, h, f, Be); g.push(h); d.Kb.push(h); return h }))(Le(function (h) {
                                                h = Df(d.l, h.slice(-4)); h = ic(d.l, h,
                                                    f, Be); g.push(h); d.Kb.push(h); return h
                                            }))(Mg(function (h) { h = h[h.length - 1]; z(function (k) { k = se(d.l)(k, d.Kb); d.Kb.splice(k, 1) }, g); return h }))
                                        }; a.prototype.Qa = function (c) { return ge(this.l, Gf, this.Qb[c.type](c.data))(Ce(B)) }; a.prototype.Va = function (c) { return c[0] }; a.prototype.dd = function (c, b) { for (var d = Df(this.l, c)(Ce(B)), e = Math.ceil(d.length / b), f = [], g = 0; g < b; g += 1)f.push(d.slice(g * e, e * (g + 1))); return f }; a.prototype.isEnabled = function () { return Qh(this.l) }; return a
                                    }(), Nt = function () {
                                        return function (a, c, b, d) {
                                            var e =
                                                this; this.nd = this.Ub = !1; this.$a = []; this.Qf = []; this.jf = []; this.send = function (f, g, h, k) { f = e.sender(f, e.pc, g); h && k && f.then(h, k); return f }; this.Je = function (f, g, h, k) { return new K(function (l, m) { f.push([g, h, l, m, k]) }) }; this.ui = function () { e.$a = ug(function (h, k) { return h[4].partNum - k[4].partNum }, e.$a); var f = M(function (h, k, l) { k = k[4]; return h && l + 1 === k.partNum }, !0, e.$a), g = !!e.$a[e.$a.length - 1][4].end; return f && g }; this.Cd = function (f) { gh(e.l, f.slice(), function (g) { e.send(g[0], g[1], g[2], g[3]) }, 20, "s.w2.sf.fes"); zd(f) };
                                            this.Oh = function () { e.nd || (e.nd = !0, e.Cd(e.Qf), e.Cd(e.jf)) }; this.qh = function (f) { return M(function (g, h) { var k = "page" === h.type && !h.M, l = "eof" === h.data.type, m = k && !!h.partNum; return { sd: g.sd || m, rd: g.rd || k, qd: g.qd || l } }, { rd: !1, qd: !1, sd: !1 }, f) }; this.si = function (f, g, h, k) { k ? (f = e.Je(e.$a, f, g, h[0]), e.ui() && (e.Cd(e.$a), e.Ub = !0)) : (e.Ub = !0, f = e.send(f, g)); return f }; this.ni = function (f) { var g; return e.Gi ? (g = {}, g["wv-type"] = Oa(function (h) { return "eof" === n(h, "data.type") }, f) ? "2" : "8", g) : {} }; this.Bf = function (f, g, h) {
                                                g = {
                                                    G: e.ni(h),
                                                    H: Ba(), Y: { fa: g }, Oa: { Td: e.Di }
                                                }; f && g.H.C("bt", 1); return g
                                            }; this.Gh = function (f, g, h) { f = e.Bf(!1, f, g); return e.Ub ? e.send(f, h) : e.Je(e.jf, f, h, g) }; this.Ti = function (f, g, h) { f = e.Bf(!0, f, g); if (e.Ub) return e.send(f, h); var k = e.qh(g), l = k.rd, m = k.qd; k = k.sd; var p; l && (p = e.si(f, h, g, k)); e.nd ? l || (p = e.send(f, h)) : (l || (p = e.Je(e.Qf, f, h, g)), (e.Ub || m) && e.Oh()); return p }; this.Gi = d; this.l = a; this.Di = b; this.sender = ya(a, "W", c); this.pc = c
                                        }
                                    }(), fl = w(function (a) {
                                        var c = H(a), b = c.o("isEU"); if (V(b)) {
                                            var d = Ga(fe(a, "is_gdpr") || ""); if (G(d, [0,
                                                1])) c.C("isEU", d), b = !!d; else if (a = Qa(a).o("wasSynced"), a = n(a, "params.eu")) c.C("isEU", a), b = !!a
                                        } return b
                                    }, function (a) { return H(a).o("isEU") }), nf = E("i.e", fl), Ot = E("i.ep", function (a) { fl(a) }), Pt = E("w2", function (a, c) {
                                        function b() { h = !0 } var d = H(a), e = N(c); if (!c.Eb || Yc(a) || !a.MutationObserver || !Da("Element", a.Element)) return B; Da("MutationObserver", a.MutationObserver) || yd(a, e).warn("MutationObserver is overriden, webvisor is not guaranteed to work in this environment"); var f = Aa(function (k, l) { pa(c, l)["catch"](k) }),
                                            g = $b(a)(Le(F([a, c], Em)))(Mg(function (k) { return new Kt(a, k) })), h = !1; nq([g, f])(Ra(C(a, "wv2.R.c"), function (k) {
                                                var l = k[0]; k = k[1]; if (!h) {
                                                    b = function () { h || (h = !0, l && l.stop()) }; var m = d.o("wv2Counter"); if (!Gh(a, k) || m) b(); else if (ja(a).D(a, ["beforeunload", "unload"], b), d.C("wv2Counter", e), d.C("stopRecorder", b), k = [new Pe(a)], k.unshift(new Mt(a)), k = eb(function (t) { return t.isEnabled() }, k)) {
                                                        m = new Nt(a, c, !(k instanceof Pe), 0); var p = cl.wf(e, "m", D(m.Ti, m), k, a), q = cl.wf(e, "e", D(m.Gh, m), k, a); k = Fm(); m = k.Zi; q.D("ag", k.bh);
                                                        q.D("p", m); p.D("see", function (t) { var x = !1; z(function (I) { "page" === I.type && (x = !0) }, t); x && (h || q.push({ type: "event", data: { type: "fatalError", $: { code: "invalid-snapshot", Hh: "p.s.f", stack: "" } } }), b()) }); var r = gb(function (t) { "eof" === n(t, "data.type") ? (q.push(t), p.push(t), q.flush(), p.flush()) : ("event" === t.type ? q : p).push(t) }); W(a, b, 864E5); Gb(a, function () { mb(a, { ea: e, name: "webvisor", data: { version: 2 } }); l.start(r) })
                                                    }
                                                }
                                            })); return function () { return b() }
                                    }), Qt = E("w2.cs", function (a, c) {
                                        var b, d = N(c); Rf(a, d, (b = {}, b.webvisor =
                                            !!c.Eb, b))
                                    }), gl = w(wc, N), Ch = u($d, mc), hl = B, Rt = ub("isp.stat", function (a, c) { return new K(function (b, d) { if (aq(a, Wk, "isp")) { var e = function (f) { ("1" === f ? b : d)(); hl(); f = pj(Wk); G("isp", f.tb) && (f.tb = Y(u(ma("isp"), Rb), f.tb), f.tb.length || (lc(f.kb), f.kb = null)) }; hl = ja(a).D(a, ["message"], F([a, c, e], Dm)); W(a, e, 1500) } else d() }) }), St = ub("isp", function (a, c) {
                                        pa(c, function (b) {
                                            var d = eb(function (g) { return n(b, "settings." + g) }, ["rt", "mf"]); if (d && Nd(a)) {
                                                var e = bi(b) && !Xd(a), f = gl(c); y(f, { Wc: d, status: e ? 3 : 4 }); if (!e) return d = Cm(a,
                                                    c, d), e = function (g) { f.status = g }, Rt(a, d).then(v(1, e))["catch"](v(2, e))
                                            }
                                        })["catch"](C(a, "l.isp"))
                                    }), il = E("fbq.o", function (a, c, b) { var d = n(a, "fbq"); if (d && d.callMethod) { var e = function () { var g = za(arguments), h = d.apply(void 0, g); c(g); return h }; y(e, d); b && z(c, b); a.fbq = e } else var f = W(a, F([a, c, va(ra(d && d.queue))], il), 1E3, "fbq.d"); return D(la, null, a, f) }), Uc, yb, Vc, bh = (Uc = {}, Uc.add_to_wishlist = "add-to-wishlist", Uc.begin_checkout = "begin-checkout", Uc.generate_lead = "submit-lead", Uc.add_payment_info = "add-payment-info",
                                        Uc), ch = (yb = {}, yb.AddToCart = "add-to-cart", yb.Lead = "submit-lead", yb.InitiateCheckout = "begin-checkout", yb.Purchase = "purchase", yb.CompleteRegistration = "register", yb.Contact = "submit-contact", yb.AddPaymentInfo = "add-payment-info", yb.AddToWishlist = "add-to-wishlist", yb.Subscribe = "subscribe", yb), Am = (Vc = {}, Vc["1"] = bh, Vc["2"] = bh, Vc["3"] = bh, Vc["0"] = ch, Vc), Bm = [ch.AddToCart, ch.Purchase], Tt = ka(function (a, c) {
                                            var b = n(c, "ecommerce"), d = n(c, "event") || ""; if (!(b = b && d && { version: "3", wc: d })) a: {
                                                if (ea(c) || Na(c)) if (b = za(c), d =
                                                    b[1], "event" === b[0] && d) { b = { version: "2", wc: d }; break a } b = void 0
                                            } b || (b = (b = n(c, "ecommerce")) && { version: "1", wc: L(",", ca(b)) }); b && a(b)
                                        }), Ut = E("ag.e", function (a, c) { var b = [], d = C(a, "ag.s", F([ia, b], z)); "0" === c.ca && pa(c, function (e) { if (n(e, "settings.auto_goals") && Ha(a, c) && (e = oe(a, c, "autogoal").reachGoal)) { e = F([e, c.Ad], zm); var f = Tt(e); e = F([a, e], xm); b.push(il(a, e)); b.push(Di(a, "dataLayer", function (g) { g.ya.D(f) })) } }); return d }), Vt = /[^\d.,]/g, Wt = /[.,]$/, vm = E("ep.pp", function (a, c) {
                                            if (!c) return 0; a: {
                                                var b = c.replace(Vt,
                                                    "").replace(Wt, ""); var d = "0" === b[b.length - 1]; for (var e = b.length; 0 < e && !(3 < b.length - e + 1 && d); --e) { var f = b[e - 1]; if (G(f, [",", "."])) { d = f; break a } } d = ""
                                            } b = d ? c.split(d) : [c]; d = d ? b[1] : "00"; b = parseFloat(Kb(b[0]) + "." + Kb(d)); d = Math.pow(10, 8) - .01; a.isNaN(b) ? b = 0 : (b = a.Math.min(b, d), b = a.Math.max(b, 0)); return b
                                        }), Xt = [[["EUR", "\u20ac"], "978"], [["USD", "\u0423\\.\u0415\\.", "\\$"], "840"], [["UAH", "\u0413\u0420\u041d", "\u20b4"], "980"], ["\u0422\u0413 KZT \u20b8 \u0422\u04a2\u0413 TENGE \u0422\u0415\u041d\u0413\u0415".split(" "),
                                            "398"], [["GBP", "\u00a3", "UKL"], "826"], ["RUR RUB \u0420 \u0420\u0423\u0411 \u20bd P \u0420UB P\u0423\u0411 P\u0423B PY\u0411 \u0420Y\u0411 \u0420\u0423B P\u0423\u0411".split(" "), "643"]], Yt = w(function (a) { return new RegExp(a.join("|"), "i") }), Zt = E("ep.cp", function (a) { if (!a) return "643"; var c = ti(a); return (a = eb(function (b) { return Yt(b[0]).test(c) }, Xt)) ? a[1] : "643" }), $t = w(function () {
                                                function a() { var k = h + "0", l = h + "1"; f[k] ? f[l] ? (h = h.slice(0, -1), --g) : (e[l] = b(8), f[l] = 1) : (e[k] = b(8), f[k] = 1) } function c() {
                                                    var k = h +
                                                        "1"; f[h + "0"] ? f[k] ? (h = h.slice(0, -1), --g) : (h += "1", f[h] = 1) : (h += "0", f[h] = 1)
                                                } function b(k) { void 0 === k && (k = 1); var l = d.slice(g, g + k); g += k; return l } for (var d = Ah("Cy2FcreLJLpYXW3BXFJqldVsGMwDcBw2BGnHL5uj1TKstzse3piMo3Osz+EqDotgqs1TIoZvKtMKDaSRFztgUS8qkqZcaETgKWM54tCpTXjV5vW5OrjBpC0jF4mspUBQGd95fNSfv+vz+g+Hze33Hg8by+Yen1PP6zsdl7PQCwX9mf+f7FMb9x/Pw+v2Pp8Xy74eTwuBwTt913u4On1XW6hxOO5nIzFam00tC218S0kaeugpqST+XliLOlMoTpRQkuewUxoy4CT3efWtdFjSAAm+1BkjIhyeU4vGOf13a6U8wzNY4bGo6DIUemE7N3SBojDr7ezXahpWF022y8mma1NuTnZbq8XZZlPStejfG/CsbPhV6/bSnA==").join(""),
                                                    e = {}, f = {}, g = 1, h = ""; g < d.length - 1;)("0" === b() ? c : a)(); return e
                                            }), sm = E("ep.dec", function (a, c) {
                                                if (!c || Yc(a)) return []; var b = Ah(c), d = b[1], e = b[2], f = b.slice(3); if (2 !== Ig(b[0])) return []; b = $t(); f = f.join(""); e = Ig(d + e); var g = ""; d = ""; for (var h = 0; d.length < e && f[h];)g += f[h], b[g] && (d += String.fromCharCode(Ig(b[g])), g = ""), h += 1; b = ""; for (f = 0; f < d.length;)e = d.charCodeAt(f), 128 > e ? (b += String.fromCharCode(e), f++) : 191 < e && 224 > e ? (g = d.charCodeAt(f + 1), b += String.fromCharCode((e & 31) << 6 | g & 63), f += 2) : (g = d.charCodeAt(f + 1), b += String.fromCharCode((e &
                                                    15) << 12 | (g & 63) << 6 | d.charCodeAt(f + 2) & 63), f += 3); d = rb(a, b); return ea(d) ? A(Lq, d) : []
                                            }), um = E("ep.ent", function (a, c, b) { a = "" + Ua(a, 10, 99); b = "" + 100 * c + b + a; if (16 < Na(b)) return ""; b = Bh("0", 16, b); c = b.slice(0, 8); b = b.slice(-8); c = (+c ^ 92844).toString(35); b = (+b ^ 92844).toString(35); return "" + c + "z" + b }), jl = u(zh, Zt), kl = E("ep.ctp", function (a, c, b, d) {
                                                var e = jl(a, b), f = yh(a, d); xh(a, c, e, f); Da("MutationObserver", a.MutationObserver) && (new a.MutationObserver(function () { var g = jl(a, b), h = yh(a, d); if (e !== g || f !== h) e = g, f = h, xh(a, c, e, f) })).observe(a.document.body,
                                                    { attributes: !0, childList: !0, subtree: !0, characterData: !0 })
                                            }), au = E("ep.chp", function (a, c, b, d, e) { b && lf(a, c); return d || e ? ja(a).D(a.document, ["click"], C(a, "ep.chp.cl", F([a, c, d, e], tm))) : B }), eu = E("ep.i", function (a, c) {
                                                return Ed(a) ? rm(a, c).then(function (b) {
                                                    var d = b.Ch, e = d[0], f = d[1], g = d[2], h = d[3], k = d[4], l = d[5], m = d[6], p = d[7], q = d[8], r = d[9], t = d[10], x = d[11], I = d[12], Q = d[13], aa = d[14], wa = d[15]; if (!b.isEnabled) return K.resolve(B); var sa = ae(a, e), Zb = ae(a, h), rd = ae(a, m), ne = ae(a, q), bu = "" + e + f + g === "" + h + k + l; return new K(function (cu,
                                                        du) { $b(a)(Ra(du, function () { sa && kl(a, c, f, g, t, x, I); Zb && !bu && kl(a, c, k, l, Q, aa, wa); cu(au(a, c, rd || ne, p, r)) })) })
                                                }) : K.resolve(B)
                                            }), bm = ["RTCPeerConnection", "mozRTCPeerConnection", "webkitRTCPeerConnection"], fu = E("cc.i", function (a, c) { var b = F([a, c], qm); b = F([a, b, 300, void 0], W); pa(c, b) }), gu = v("9-d5ve+.r%7", O), hu = E("ad", function (a, c) {
                                                if (!c.qb) {
                                                    var b = H(a); if (!b.o("adBlockEnabled")) {
                                                        var d = function (m) { G(m, ["2", "1"]) && b.C("adBlockEnabled", m) }, e = Xb(a), f = e.o("isad"); if (f) d(f); else {
                                                            var g = v("adStatus", b.C), h = function (m) {
                                                                m =
                                                                m ? "1" : "2"; d(m); g("complete"); e.C("isad", m, 1200); return m
                                                            }, k = ya(a, "adb", c); if (!b.o("adStatus")) { g("process"); var l = "metrika/a" + gu().replace(/[^a-v]+/g, "") + "t.gif"; nm(a, function () { return k({ sa: { Pa: l } }).then(v(!1, h))["catch"](v(!0, h)) }) }
                                                        }
                                                    }
                                                }
                                            }), iu = E("pr.p", function (a, c) { var b, d; if (ng(a)) { var e = ya(a, "5", c), f = Ba((b = {}, b.pq = 1, b.ar = 1, b)); e({ H: f, G: (d = {}, d["page-url"] = T(a).href, d["page-ref"] = n(a, "document.referrer") || "", d) }, c)["catch"](C(a, "pr.p.s")) } }), wh = !1, ju = E("fid", function (a) {
                                                var c, b = B; if (!S(a.PerformanceObserver)) return b;
                                                var d = H(a); if (d.o("fido")) return b; d.C("fido", !0); var e = new a.PerformanceObserver(C(a, "fid", function (f) { f = f.getEntries()[0]; d.C("fid", a.Math.round(100 * (f.processingStart - f.startTime))); b() })); b = function () { return e.disconnect() }; try { e.observe((c = {}, c.type = "first-input", c.buffered = !0, c)) } catch (f) { } return b
                                            }), ll = {
                                                1882689622: 1, 2318205080: 1, 3115871109: 1, 3604875100: 1, 339366994: 1, 2890452365: 1, 849340123: 1, 173872646: 1, 2343947156: 1, 655012937: 1, 3724710748: 1, 3364370932: 1, 1996539654: 1, 2065498185: 1, 823651274: 1,
                                                12282461: 1, 1555719328: 1, 1417229093: 1, 138396985: 1
                                            }, ku = w(function () { return M(function (a, c) { var b = mc(c + "/tag.js"); ll[b] || (a[b] = 1); return a }, {}, ["mc.yandex.ru", "mc.yandex.com", "cdn.jsdelivr.net/npm/yandex-metrica-watch"]) }), lu = E("p.sci", function (a, c) { var b = H(a); return b.o("scip") ? K.resolve() : pa(c, O).then(function (d) { d = n(d, "settings.ins"); return !b.o("scip") && d ? mm(a, c, b) : null }, C(a, "ins.cs")) }), mu = E("lt.p", ub("lt.p", function (a) {
                                                var c; if (Da("PerformanceObserver", a.PerformanceObserver)) {
                                                    var b = 0, d = new a.PerformanceObserver(C(a,
                                                        "lt.o", function (e) { e && e.getEntries && (e = e.getEntries(), b = M(function (f, g) { return f + g.duration }, b, e), Kd(a).C("lt", b)) })); try { d.observe((c = {}, c.type = "longtask", c.buffered = !0, c)) } catch (e) { return B } return function () { return d.disconnect() }
                                                } return B
                                            })), nu = w(u(U("performance.memory.jsHeapSizeLimit"), oa("concat", ""))), ou = ["availWidth", "availHeight", "availTop"], pu = "appName vendor deviceMemory hardwareConcurrency maxTouchPoints appVersion productSub appCodeName vendorSub".split(" "), qu = ["webgl", "experimental-webgl"],
                                    lm = [-.2, -.9, 0, .4, -.26, 0, 0, .732134444, 0], ff = v(Sa("ccf"), Wa), km = "prefers-reduced-motion;prefers-reduced-transparency;prefers-color-scheme: dark;prefers-color-scheme: light;pointer: none;pointer: coarse;pointer: fine;any-pointer: none;any-pointer: coarse;any-pointer: fine;scan: interlace;scan: progressive;color-gamut: srgb;color-gamut: p3;color-gamut: rec2020;update: fast;update: slow;update: none;grid: 0;grid: 2;hover: hover;inverted-colors: inverted;inverted-colors: none".split(";"), th = "video/ogg video/mp4 video/webm audio/x-aiff audio/x-m4a audio/mpeg audio/aac audio/wav audio/ogg audio/mp4".split(" "),
                                    im = "theora vorbis 1 avc1.4D401E mp4a.40.2 vp8.0 mp4a.40.5".split(" "), dm = w(oi), sh = w(rb, vb), ru = E("phc.p", function (a, c) {
                                        return Mk(a) ? B : pa(c, function (b) {
                                            var d = c.id, e = Ac(a, void 0, d), f = e.o("phc_settings") || ""; if (b = n(b, "settings.phchange")) { var g = jb(a, b) || ""; g !== f && e.C("phc_settings", g) } else f && (b = sh(a, f)); e = n(b, "clientId"); f = n(b, "orderId"); b = n(b, "phones") || []; e && f && b.length && (f = { Jb: "", Tb: "", rg: 0, oa: {}, za: [], Lf: !1, jb: !0, l: a, pc: c }, y(f, { Lf: !0 }), rh(a, d, f), b = td(a), e = qi(a, b, 1E3), d = D(rh, null, a, d, f), e.D(d), ri(a,
                                                b))
                                        })
                                    }), dh = w(function (a, c) { var b = H(a), d = Qa(a), e = [], f = F([a, c, b, d], Mo); nd(a) || No(a, "14.1") || e.push(F([am, "pp", ""], f)); var g = Ok(a) && !df(a, 68); g || e.push(F([cm, "pu", ""], f)); g || d.Ud || Nd(a) || (e.push(F([$l, "zzlc", "na"], f)), e.push(F([Zl, "cc", ""], f))); return e.length ? { Ca: function (h, k) { if (0 === b.o("isEU")) try { z(Ei, e) } catch (l) { } k() }, aa: function (h, k) { var l = h.H; if (l && 0 === b.o("isEU")) try { z(Aa(l), e) } catch (m) { } k() } } : {} }, function (a, c) { return N(c) }), su = u(function (a) {
                                        a = n(a, "navigator.plugins") || []; return Na(a) ? u(ra, Hc(Boolean),
                                            jr(function (c, b) { return c.name > b.name ? 1 : 2 }), gb(Jo))(a) : ""
                                    }, od(",")), tu = function (a) { return function (c) { var b = $a(c); if (!b) return ""; b = b("canvas"); var d = [], e = a(), f = e.Jh; e = e.zh; try { var g = oa("getContext", b); d = A(u(O, g), e) } catch (h) { return "" } return (g = eb(O, d)) ? f(c, { canvas: b, mh: g }) : "" } }(function () { return { zh: qu, Jh: Vl } }), Tl = ["name", "lang", "localService", "voiceURI", "default"], uu = E("p.tfs", function (a) {
                                        var c = H(a); if (!c.o("tfs")) {
                                            c.C("tfs", !0); c = ja(a); var b = B; b = c.D(a, ["message"], function (d) {
                                                try { var e = d.origin } catch (h) { } if (e &&
                                                    "https://iframe-toloka.com" === e && (d = rb(a, d.data), Ma(d) && "appendremote" === d.action)) if (d = Qa(a), d.o("tfsc") || a.confirm("\u0414\u043e\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u0435 \u201c\u0420\u0430\u0437\u043c\u0435\u0442\u043a\u0430 \u0441\u0430\u0439\u0442\u043e\u0432\u201c \u043e\u0442 toloka.ai \u0437\u0430\u043f\u0440\u0430\u0448\u0438\u0432\u0430\u0435\u0442 \u0434\u043e\u0441\u0442\u0443\u043f \u043a \u0441\u043e\u0434\u0435\u0440\u0436\u0438\u043c\u043e\u043c\u0443 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u044b. \u0420\u0430\u0437\u0440\u0435\u0448\u0438\u0442\u044c?")) {
                                                        d.C("tfsc",
                                                            1); var f, g; H(a).C("_u", (f = {}, f.getCachedTags = Kf, f.button = (g = {}, g.closest = v(a, Lf), g.select = Mf, g.getData = v(a, Nf), g), f)); jc(a, { src: "https://yastatic.net/s3/metrika/2.1540128042.1/form-selector/button_ru.js" }); b()
                                                    } else a.close()
                                            })
                                        }
                                    }), vu = Xa(/[a-z\u0430-\u044f,.]/gi), wu = E("ice", function (a, c, b) {
                                        var d = Ha(a, c); if (d) {
                                            var e = n(b, "target"); if (e && (c = n(e, "value"), (c = nb(c)) && !(100 <= Na(c)))) {
                                                b = Kb(c); var f = 0 < c.indexOf("@"), g = "tel" === n(e, "type") || !f && Na(b); if (f || g) {
                                                    if (g) {
                                                        if (vu(c)) return; g = c[0]; var h = b[0]; if (g !== h &&
                                                            "+" !== g) return; var k = c[1]; if ("+" === g && k !== h) return; c = c[Na(c) - 1]; g = b[Na(b) - 1]; if (c !== g) return; c = b
                                                    } b = f ? 5 : 11; g = f ? 100 : 16; Na(c) < b || Na(c) > g || Ti(a, c).then(function (l) { var m, p, q, r = ig(a, e); d.params((m = {}, m.__ym = (p = {}, p.fi = xj((q = {}, q.a = f ? 1 : 0, q.b = r, q.c = l, q)).Aa(), p), m)) }, C(a, "ice.s"))
                                                }
                                            }
                                        }
                                    }), xu = ["text", "email", "tel"], yu = ["cc-", "name", "shipping"], zu = E("icei", function (a, c) {
                                        if (Ed(a) && Kk(a)) {
                                            var b = !1, d = []; $b(a)(Ra(B, F([c, function (e) {
                                                var f = n(e, "settings.cf"); e = nf(a) || n(e, "settings.eu"); if (f && !e && !b) {
                                                    var g = ja(a); f =
                                                        tb("input", a.document.body); z(function (h) { yf(a, h) || !G(h.type, xu) || Oa(O, A(v(h.autocomplete, nc), yu)) || d.push(g.D(h, ["blur"], F([a, c], wu))) }, ra(f))
                                                }
                                            }], pa))); return function () { z(ia, d); b = !0 }
                                        }
                                    }), Au = ub("gic", zu), oh, Bu = E("p.ai", function (a, c) { return new K(function (b) { (nd(a) || Ye(a)) && b(pa(c, function (d) { var e; return (d = n(d, "settings.sbp")) ? nh(a, y({}, d, (e = {}, e.c = c.id, e)), 10) : B })); b(B) }) }), Ub = ["0", "1", "2", "3"], Bc = Ub[0], Xe = Ub[1], Cu = Ub[2], af = A(u(O, oa("concat", "GDPR-ok-view-detailed-")), Ub), Wd = va("GDPR-ok GDPR-cross GDPR-cancel 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 GDPR-settings GDPR-ok-view-default GDPR-ok-view-detailed 21 22 23".split(" "),
                                        af, ["28", "29", "30"]), Du = "3 13 14 15 16 17 28".split(" "), $e = u(gb(U("ymetrikaEvent.type")), Hc(sc(Wd))), Ql = { url: "https://yastatic.net/s3/gdpr/popup/v2/", Of: "ru en et fi lt lv pl fr no sr".split(" "), Xf: "_two_main_buttons" }, Tb, Pl = (Tb = {}, Tb["GDPR-ok"] = "ok", Tb["GDPR-ok-view-default"] = "ok-default", Tb["GDPR-ok-view-detailed"] = "ok-detailed", Tb["GDPR-ok-view-detailed-0"] = "ok-detailed-all", Tb["GDPR-ok-view-detailed-1"] = "ok-detailed-tech", Tb["GDPR-ok-view-detailed-2"] = "ok-detailed-tech-analytics", Tb["GDPR-ok-view-detailed-3"] =
                                            "ok-detailed-tech-other", Tb), Yd = [], jh = u($e, gb(ir(Wd)), od(",")), kh = u(Hc(sc(Wd)), Na, Boolean), Hl = w(function (a, c) { var b = c.o("gdpr"); return G(b, Ub) ? "-" + b : "" }), Xc = {}, ml = w(wc), El = u(oa("exec", /counterID=(\d+)/), U("1")), nl = ka(function (a, c) {
                                                var b = ml(a), d = ra(c), e = d[0], f = d[1], g = d.slice(2); if (f) {
                                                    d = Dl(a, e); var h = d[0], k = d[1]; d = N(k); b[d] || (b[d] = {}); b = b[d]; c.nf || Xc[f] && M(function (l, m) { return l || !!m(a, k, g, h) }, !1, Xc[f]) || ("init" === f ? (c.nf = !0, h ? Ab(a, "" + e, "Duplicate counter " + e + " initialization") : a["yaCounter" + k.id] =
                                                        new a.Ya[qa.lc](y({}, g[0], k))) : h && h[f] && b.Bi ? (h[f].apply(h, g), c.nf = !0) : (d = b.sg, d || (d = [], b.sg = d), d.push(va([e, f], g))))
                                                }
                                            }), Eu = ub("is", function (a) { var c = -1 < T(a).href.indexOf("_ym_debug=200500"), b = Xb(a), d = b.o("debug_build") === qa.fb; if (c || d) return b.C("debug_build", qa.fb), jc(a, { src: Vk + "/tag_debug.js" }) }); "function" == typeof Promise && Promise.resolve(); var ol = w(sd), Fu = w(function () { var a = M(function (c, b) { "ru" !== b && (c[b] = Uk + "." + b); return c }, {}, fg); z(function (c) { a[c] = c }, ca(Rk)); return a }), yl = w(function (a) {
                                                a =
                                                T(a).hostname; return (a = eb(u(U("1"), pi("test"), Qb(ia)(a)), xa(Rk))) && a[0]
                                            }), pl = function (a, c) { return function (b, d) { var e = N(d); e = Fu(e); var f = wl(b, e), g = H(b), h = db(b); return Nd(b) || Hd(b) ? {} : { aa: function (k, l) { var m = k.H, p = hh(b); m = !(m && m.o("pv")); if (!p || h || m || !f.length) return l(); if (g.o("startSync")) ol(b).push(l); else { g.C("startSync", !0); p = F([b, f, B, !1], a); m = Ze[0]; if (!m) return l(); m(b).then(p).then(l, u(bd(l), C(b, c)))["catch"](B) } } } } }(function (a, c, b, d) {
                                                var e = ha(a), f = H(a), g = Qa(a); b = $c(a, "c"); var h = Bb(a, b); return M(function (k,
                                                    l) { function m() { var r = g.o("synced"); f.C("startSync", !1); r && (r[l.Oi] = p, g.C("synced", r)); r = ol(a); z(ia, r); zd(r) } var p, q = h({ Y: { Da: ["sync.cook"], Cb: 1500 } }, [qa.Ua + "//" + l.Cj + "/sync_cookie_image_check" + (d ? "_secondary" : "")]).then(function () { p = e(ib); m() })["catch"](function () { p = e(ib) - 1435; m() }); q = v(q, O); return k.then(q) }, K.resolve(), c)["catch"](C(a, "ctl"))
                                            }, "sy.c"), vl = E("destruct.e", function (a, c, b) {
                                                return function () {
                                                    var d = H(a), e = c.id; z(function (f, g) { return S(f) && C(a, "dest.fr." + g, f)() }, b); delete d.o("counters")[N(c)];
                                                    delete a["yaCounter" + e]
                                                }
                                            }), Wc = H(window); Wc.Ra("hitParam", {}); Wc.Ra("lastReferrer", window.location.href); (function () { X.push(function (a, c) { var b; return b = {}, b.firstPartyParams = Yr(a, c), b.firstPartyParamsHashed = zp(a, c), b }) })(); (function () { var a = H(window); a.Ra("getCounters", Zr(window)); zc.push($r); Lg.push(function (c, b) { b.counters = a.o("getCounters") }) })(); (function () { X.push(function (a, c) { mb(a, { ea: N(c), name: "counter", data: c }) }) })(); Ca["1"] = ab; X.push(bs); ua["1"] = Me; wb(Oi, -1); Nb["1"] = [[Oi, -1], [Ae, 1], [Cd, 2],
                                            [Fb(), 3]]; X.push(cs); X.push(function (a, c) {
                                                var b, d = ya(a, "a", c); return b = {}, b.hit = function (e, f, g, h, k, l) {
                                                    var m, p, q = { G: {}, H: Ba((m = {}, m.pv = 1, m.ar = 1, m)) }; if (e) return f = Ma(f) ? { title: f.title, ag: f.referer, da: f.params, fc: f.callback, l: f.ctx } : { title: f, ag: g, da: h, fc: k, l: l }, g = xd(c), g.url !== e && (g.ref = g.url, g.url = e), e = e || T(a).href, g = f.ag || g.ref || a.document.referrer, h = Db(a, c, "PageView. Counter " + c.id + ". URL: " + e + ". Referrer: " + g, f.da), k = y(q.V || {}, { da: f.da, title: f.title }), q = d(y(q, {
                                                        V: k, G: y(q.G || {}, (p = {}, p["page-url"] =
                                                            e, p["page-ref"] = g, p))
                                                    }), c).then(h), Jc(a, "p.ar.s", q, f.fc || B, f.l)
                                                }, b
                                            }); Ca.a = ab; Nb.a = Ob; ua.a = Me; X.push(oe); Ca.g = ab; ua.g = Me; Nb.g = Ob; X.push(ds); X.push(es); Nb.t = Ob; Ca.t = ab; ua.t = bc; X.push(gs); Nb["2"] = Ob; Ca["2"] = ab; ua["2"] = bc; zb.push(function (a, c) { var b = Sr(a), d = ya(a, "r", c), e = C(a, "rts.p"); return pa(c, D(M, null, function (f, g) { var h = { id: g.vh, ca: g.ca }; h = d({ Y: { fa: g.kj }, H: Ba(g.ih), G: g.da, V: { Wb: g.Wb }, sa: { Pa: g.Pa } }, h)["catch"](e); return f.then(v(h, O)) }, K.resolve(), b))["catch"](e) }); X.push(hs); ba("n", Ae, 1); ba("n", Cd,
                                                2); ba("n", Fb(), 3); ba("n", Xf, 100); Ca.n = ab; ua.n = bc; dc({ Ze: { ia: "accurateTrackBounce" } }); X.push(is); Ca.m = function (a, c, b) { return function (d, e) { var f, g = d.G; g = (f = {}, f["page-url"] = g && g["page-url"] || "", f); f = y(d, { G: y(d.G || {}, g), sa: { Pa: "clmap/" + e.id } }); g = La(je(a, "cm", e), b); return ld(a, c, g)(f)["catch"](C(a, "c.m")) } }; ua.m = Tr; ba("m", Fb(["u", "v", "vf"]), 1); ba("m", Xf, 2); dc({ th: { ia: "clickmap" } }); X.push(js); X.push(ks); X.push(ms); X.push(ns); (function () {
                                                    X.push(os); dc({
                                                        Ad: {
                                                            ia: "ecommerce", Za: function (a) {
                                                                if (a) return !0 ===
                                                                    a ? "dataLayer" : "" + a
                                                            }
                                                        }
                                                    })
                                                })(); X.push(ps); zb.push(rs); X.push(ss); zc.push(us); X.push(vs); wb(function (a, c) { return { Ca: function (b, d) { var e = Ha(a, c); e = e && e.userParams; var f = (b.V || {}).Re; e && f && e(f); d() } } }, 0); Td.push(Wr); X.push(ys); X.push(zs); Ke.push(function (a) { var c = H(a); c.o("i") || (c.C("i", !0), ja(a).D(a, ["message"], v(a, Ro))) }); X.push(function (a, c) {
                                                    var b; return b = {}, b.ecommerceAdd = E("ecm.a", As(a, c)), b.ecommerceRemove = E("ecm.r", Bs(a, c)), b.ecommerceDetail = E("ecm.d", Cs(a, c)), b.ecommercePurchase = E("ecm.p", Ds(a,
                                                        c)), b
                                                }); (function () {
                                                    var a, c = {}; c.bu = Ls; c.pri = zo; c.wv = v(2, O); c.ds = Co; c.co = function (b) { return cd(H(b).o("jn")) }; c.td = Ns; y(c, (a = {}, a.iss = u(ur, Cb), a.hdl = u(vr, Cb), a.iia = u(wr, Cb), a.cpf = u(Ks, Cb), a.ntf = w(function (b) { a: switch (n(b, "Notification.permission")) { case "denied": b = !1; break a; case "granted": b = !0; break a; default: b = null }return Ta(b) ? null : b ? 2 : 1 }), a.eu = yc("isEU"), a.ns = Hk, a.np = function (b) {
                                                        if (Ua(b, 0, 100)) b = null; else {
                                                            b = nb(Hf(b), 100); for (var d = [], e = 0; e < b.length; e++) {
                                                                var f = b.charCodeAt(e); 128 > f ? d.push(f) : (127 <
                                                                    f && 2048 > f ? d.push(f >> 6 | 192) : (d.push(f >> 12 | 224), d.push(f >> 6 & 63 | 128)), d.push(f & 63 | 128))
                                                            } b = Fh(d)
                                                        } return b
                                                    }, a)); y($f, c)
                                                })(); (function () {
                                                    var a = {}; a.oo = yc("oo"); a.pmc = yc("cmc"); a.lt = function (c) { var b = Kd(c).o("lt", null); return b ? c.Math.round(100 * b) : b }; a.yu = function (c) { var b = T(c); return G(b.hostname, ["dzen.ru", "ya.ru"]) ? (Ac(c, "").o("yandexuid") || "").substring(0, 25) : null }; a.re = u(Wp, Cb); a.aw = function (c) { c = eb(u(na, Rb), [c.document.hidden, c.document.msHidden, c.document.webkitHidden]); return na(c) ? null : cd(!c) };
                                                    a.ifc = yc("ifc"); a.ifb = yc("ifb"); a.ecs = yc("ecs"); a.csi = yc("scip"); y(ag, a)
                                                })(); ua.er = Tc; (function (a) { try { var c = $c(a, "er"), b = vo(a, c); Ij.push(function (d, e, f, g) { var h, k, l, m, p; .01 >= a.Math.random() || b((h = {}, h[d] = (k = {}, k[qa.fb] = (l = {}, l[e] = (m = {}, m[f] = g ? (p = {}, p[a.location.href] = g, p) : a.location.href, m), l), k), h)) }) } catch (d) { } })(window); (function () { Td.push(yo); ve.unshift(uo); Tg.push(function (a) { var c = void 0; void 0 === c && (c = !0); H(a).C("oo", c) }) })(); wb(function (a, c) {
                                                    return {
                                                        aa: function (b, d) {
                                                            var e = b.G, f = b.H; !Sk[c.id] &&
                                                                f.o("pv") && c.exp && !e.nohit && (e.exp = c.exp, Sk[c.id] = !0); d()
                                                        }
                                                    }
                                                }, -99); X.push(Ps); Nb.e = Ob; Ca.e = ab; ua.e = bc; dc({ exp: { ia: "experiments" } }); ak.experiments = "ex"; (function () { var a; Ze.push(Qs); Ca.f = ab; y(ua, (a = {}, a.f = Jk, a)); ba("f", Fb(), 1); ba("f", ej, 2) })(); Td.push(function (a, c) { var b = { ea: N(c), vd: Ha(a, c), Ag: ha(a), ce: Qa(a) }, d = b.Ag(ib); if (!b.ce.Ud) { var e = b.ce.o("ymoo" + b.ea); if (e && 30 > d - e) b = b.ea, delete H(a).o("counters", {})[b], Wa(Sa("uws")); else pa(c, Rs(b))["catch"](C(a, "d.f")) } }); (function () {
                                                    var a, c, b = Eb([Mb]); y(ua,
                                                        (a = {}, a.s = b, a.S = b, a.u = Tc, a)); y(Ca, (c = {}, c.s = Bb, c.S = ab, c.u = Bb, c)); ba("s"); ba("u"); ba("S", Fb(["v", "hid", "u", "vf", "rn"]), 1); X.push(E("s", ho))
                                                })(); Ca["8"] = Bb; ua["8"] = [Yi]; X.push(function (a, c) { return pa(c, function (b) { var d, e = n(b, "settings.sbp"); return e && $h(a, b, { gb: c, Wc: "8", data: y({}, e, (d = {}, d.c = c.id, d)), $d: "cs" }) }) }); ba("p", Fb(Ug), 1); Ca.p = function (a, c, b) {
                                                    return function (d, e) {
                                                        var f, g = y({ H: Ba() }, d); g.G || (g.G = {}); var h = g.G, k = g.Oa; k = void 0 === k ? {} : k; h["wv-hit"] = h["wv-hit"] || "" + Hb(a); h["page-url"] = h["page-url"] ||
                                                            a.location.href; h.wmode = "0"; h["wv-part"] = "0"; h["page-url"] = h["page-url"] || a.location.href; h["wv-type"] || (h["wv-type"] = k.Td ? "5" : "4"); h = { sa: { Pa: "webvisor/" + e.id }, Y: y(g.Y, { wb: (f = {}, f["Content-Type"] = "text/plain", f), Te: "POST" }), G: h }; f = La(je(a, "pub", e), b); return ld(a, c, f)(y(g, h))
                                                    }
                                                }; ua.p = Eb([0, Mb]); zb.push(Zs); dc({ Eb: { ia: "webvisor", Za: Boolean }, Bh: { ia: "disableFormAnalytics", Za: Boolean } }); ba("4", Fb(Ug), 1); Ca["4"] = Zh; ua["4"] = Eb([0, Mb, Ad]); zb.push(et); (function () {
                                                    ba("W", Fb(Ug), 1); ua.W = Eb([0, Mb]); Ca.W = Zh; zb.push(Pt);
                                                    X.push(Qt); dc({ Eb: { ia: "webvisor" } }); dc({ Nj: { ia: "trustedDomains" }, jc: { ia: "childIframe", Za: Boolean } }); Tg.push(function (a) { H(a).o("stopRecorder", B)() }); zk("wv")
                                                })(); X.push(St); ba("pi"); Ca.pi = Bb; ua.pi = Tc; zk("w", function (a, c) { return { aa: function (b, d) { if (b.H) { var e = gl(c), f = e.status; "rt" === e.Wc && f && (b.H.C("rt", f), b.sa || (b.sa = {}), b.sa.yi = 1 === f ? Ch(a, c) + "." : "") } d() } } }, 2); X.push(Ut); X.push(eu); ua["6"] = Eb([0, Mb]); Ca["6"] = Bb; X.push(fu); wb(Dc, 20); ba("f", Dc, 20); ba("n", Dc, 20); ba("1", Dc, 20); ba("d", Dc, 20); ba("5", Dc,
                                                    20); X.push(Os); (function () { Lg.push(function (a, c) { c.informer = om(a) }) })(); wb(hf, 6); ba("1", hf, 6); ba("adb"); ba("n", hf, 4); ua.adb = Tc; Ca.adb = ld; zc.push(hu); ua["5"] = bc; Ca["5"] = ab; Nb["5"] = Y(u(Kc, sc([Ae, Cd]), Rb), Ob); X.push(iu); wb(vh, 7); ba("n", vh, 6); zb.push(ju); Ca.d = ab; ba("d", Fb(["hid", "u", "v", "vf"]), 1); ua.d = Tc; ba("n", function (a, c) {
                                                        return {
                                                            Ca: function (b, d) {
                                                                if (!b.V || !b.V.force) {
                                                                    var e = .002, f = c.id === qa.Vg ? 1 : .002, g, h, k, l, m; void 0 === e && (e = 1); void 0 === f && (f = 1); var p = a.performance; if (p && S(p.getEntriesByType) && (e = Math.random() >
                                                                        e, f = Math.random() > f, !e || !f)) {
                                                                            p = a.performance.getEntriesByType("resource"); for (var q = {}, r = {}, t = {}, x = ku(a), I = 0; I < p.length; I += 1) {
                                                                                var Q = p[I], aa = Q.name.replace(/^https?:\/\//, "").split("?")[0], wa = mc(aa), sa = (g = {}, g.dns = Math.round(Q.domainLookupEnd - Q.domainLookupStart), g.tcp = Math.round(Q.connectEnd - Q.connectStart), g.duration = Math.round(Q.duration), g.response = Math.round(Q.responseEnd - Q.requestStart), g); "script" !== Q.initiatorType || e || (r[aa] = y(sa, (h = {}, h.name = Q.name, h.decodedBodySize = Q.decodedBodySize, h)));
                                                                                !ll[wa] && !x[wa] || q[aa] || f || (q[aa] = y(sa, (k = {}, k.pages = a.location.href, k)))
                                                                            } ca(q).length && (t.timings8 = q); ca(r).length && (t.scripts = r); if (ca(t).length) ya(a, "d", c)({ H: Ba((l = {}, l.ar = 1, l.pv = 1, l)), Y: { fa: jb(a, t) || void 0 }, G: (m = {}, m["page-url"] = a.location && "" + a.location.href, m) }, { id: qa.Yg, ca: "0" })["catch"](C(a, "r.tim.ng2"))
                                                                    }
                                                                } d()
                                                            }
                                                        }
                                                    }, 7); ua.ci = Eb([Mb]); zb.push(lu); X.push(mu); zb.push(Js); X.push(ru); wb(dh, 8); ba("f", dh, 3); ba("n", dh, 5); zc.push(function (a) {
                                                        return E("fip", function (c) {
                                                            if (!Ok(c) || Hd(c)) {
                                                                var b = Qa(c); if (!b.o("fip")) {
                                                                    var d =
                                                                        u(gb(u(function (e, f) { return E("fip." + f, e)(c) }, D(Uq, null))), od("-"))(a); b.C("fip", d)
                                                                }
                                                            }
                                                        })
                                                    }([tu, su, function (a) { var c = n(a, "ApplePaySession"), b = T(a).protocol; a = c && "https:" === b && !db(a) ? c : void 0; c = ""; if (!a) return c; try { c = "" + a.canMakePayments(); b = ""; var d = a.supportsVersion; if (S(d)) for (var e = 1; 20 >= e; e += 1)b += d.call(a, e) ? "" + e : "0"; return b + c } catch (f) { return c } }, function (a) { a = n(a, "navigator") || {}; return a.doNotTrack || a.msDoNotTrack || "unknown" }, function (a) {
                                                        if (a = Hs(a)) try {
                                                            for (var c = [], b = 0; b < Pk.length; b += 1) {
                                                                var d =
                                                                    a(Pk[b]); c.push(d)
                                                            } var e = c
                                                        } catch (f) { e = [] } else e = []; return e ? L("x", e) : ""
                                                    }, function (a) { var c = void 0; void 0 === c && (c = pu); var b = n(a, "navigator") || {}; c = A(v(b, n), c); c = L("x", c); try { var d = n(a, "navigator.getGamepads"); var e = Ka(d, "getGamepads") && a.navigator.getGamepads() || [] } catch (f) { e = [] } return c + "x" + Na(e) }, nu, function (a) { a = n(a, "screen") || {}; return L("x", A(v(a, n), ou)) }, function (a) { return L("x", Sl(a) || []) }, function (a) { a = hm(a); return ea(a) ? L("x", a) : a }, function (a) {
                                                        return (a = jm(a)) ? u(lr, Hc(O), gb(F(["", ["matches",
                                                            "media"]], Ul)), v("x", L))(a) : ""
                                                    }])); wb(function (a) { return { aa: function (c, b) { var d = c.H, e = Qa(a).o("fip"); e && d && (d.C("fip", e), Vd(c, "fip", cd(e))); b() } } }, 9); ba("h", function (a) { return { Ca: function (c, b) { var d = c.qj; jf(c) && d && H(a).C("isEU", n(d, "settings.eu")); b() } } }, 3); zc.push(Ot); Ke.push(uu); zb.push(Au); X.push(Bu); dc({ Yj: { ia: "yaDisableGDPR" }, Zj: { ia: "yaGDPRLang" } }); ve.push(function (a, c) { return { aa: F([a, c], Gl) } }); eg.push("gdpr", "gdpr_popup"); dg.push(function (a, c) {
                                                        var b = Ud(a); b = $e(b); if (Y(sc(Du), b).length) return !0;
                                                        b = c(a, "gdpr"); return G(b, [Bc, Cu])
                                                    }); ve.push(function (a) { return { aa: function (c, b) { var d = c.sa || {}, e; (e = n(a, "document.referrer")) ? (e = Gc(a, e).host, e = Ui(e), e = Uk + "." + (e || Ss)) : e = Yb; c.sa = y(d, { zi: [e] }); b() } } }); (function () { eg.push("_ym_debug_build"); Fl("init", function (a, c) { var b = "1" === c.ca, d = Uf(c); return db(a) || b || d || !Eu(a) ? !1 : !0 }) })(); wb(pl, 5); ba("1", pl, 6); ua.c = Tc; Ca.c = Bb; X.push(function (a, c) { var b = ml(a), d = N(c), e = b[d]; e || (e = {}, b[d] = e); e.Bi = !0; if (b = e.sg) d = nl(a), z(d, b) }); Ke.push(function (a) {
                                                        var c = n(a, "ym"); if (c) {
                                                            var b =
                                                                n(c, "a"); b || (c.a = [], b = c.a); var d = nl(a); re(a, b, function (e) { e.ya.D(d) }, !0)
                                                        }
                                                    }); if (window.Ya && Se) { var ql = qa.lc; window.Ya[ql] = Se; Xr(window); z(u(Mc([window, window.Ya[ql]]), ia), Lg) } z(u(Mc([window]), ia), Ke)
        })()
    } catch (Se) { };
}).call(this)
