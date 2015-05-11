KISSY.add("act-mod-banner-auto", function(b, a) {
    function c(g, e) {
        var f = b.one(e);
        var d = f.one(".J_data");
        if (d) {
            var h = JSON.parse(d.html());
            new a({
                node: f.one(".J_share"),
                title: h.title,
                content: h.content,
                url: h.url,
                img: h.img,
            })
        }
        if (global.isTrip) {
            var i = f.attr("data-title");
            if (i) {
                window.NativeBridge.setTitle(i)
            }
        }
    }
    return c
}, {
    requires: ["h5-active-module/mods/share/base/index"]
});
KISSY.add("act-blank-layer", function(a) {
    function b(d, c) {}
    return b
}, {
    requires: []
});
KISSY.add("act-mod-image", function(a, b) {
    function c(h, g) {
        var i = !! userAgent.match(/AliTrip/ig);
        var e = function() {
            if (!window.NativeBridge) {
                window.NativeBridge = new Bridge()
            }
            return window.NativeBridge
        };
        var f = a.one(g).one("a");
        f && f.on("click", function(k) {
            var j = a.one(k.currentTarget);
            if (i && j.attr("href").indexOf("http://h5.m.taobao.com/trip/flight/search/index.html") != -1) {
                k.preventDefault();
                window.NativeBridge.pushBack("page:", "goto", {
                    page_name: "flight_home",
                    data: {},
                    navi_type: 0
                }, true)
            }
        });
        var d = window.location.href;
        if (d.indexOf("tmall=tmall") > -1) {
            a.each(a.all(".act-mod-image img"), function(j) {
                var k = a.one(j).attr("othersrc");
                if (k) {
                    a.one(j).attr("src", k)
                }
            })
        }
        new b({
            nodes: a.one(g).all(".J_lazyImg img"),
            delay: 50,
            margin: 20,
            preciseMode: true,
            autoDestroy: true,
            onload: function(k) {
                var j = k.getAttribute("lazysrc");
                if (j) {
                    k.src = j;
                    k.removeAttribute("lazysrc")
                }
                a.one(k).css({
                    opacity: 1,
                    "-webkit-transition": "opacity 0.5s ease-in",
                    transition: "opacity 0.5s ease-in"
                });
                k.onerror = function(l) {
                    k.src = "data:image/jpg;base64,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"
                }
            }
        })
    }
    return c
}, {
    requires: ["h5-active-module/widgets/lazyload/"]
});
KISSY.add("m-floor-item-trip-priceLadder", function(c, e, a) {
    var d = "http://promotion.trip.taobao.com/platform/getItemsInfo.htm";
    var b = function(g, h) {
        new a({
            dataType: "jsonp",
            url: d,
            data: {
                itemIds: ["2", ":", g.ids.join(",")].join("") + ";" + ["1", ":", h.ids.join(",")].join("")
            },
            success: function(i) {
                c.each(g.nodes, function(n) {
                    var m = n.productId;
                    var k = i[m];
                    if (k && k.type == 2) {
                        var j = "\u5df2\u552e" + k.sold + "\u4ef6";
                        var l = (k.deposit / 100).toFixed(2).split(".");
                        console.log("tips: " + j);
                        console.log("deposit: " + l);
                        n.one(".mask-p").html(j);
                        n.one(".deposit-span2").append(l.join("."));
                        if (k.stock == 0) {
                            n.addClass("sale-out")
                        }
                    }
                });
                c.each(h.nodes, function(l) {
                    var k = l.productId;
                    var j = i[k];
                    if (j && j.type == 1) {
                        if (j.stock == 0) {
                            l.addClass("sale-out")
                        }
                    }
                })
            }
        })
    };

    function f(i, g) {
        var h = c.one(g);
        new e({
            nodes: c.one(g).all(".J_lazyImg img"),
            delay: 50,
            margin: 20,
            preciseMode: true,
            autoDestroy: false,
            onload: function(k) {
                var j = k.getAttribute("lazysrc");
                if (j) {
                    k.src = j;
                    k.removeAttribute("lazysrc")
                }
            }
        });
        new e({
            nodes: ".J_productListBox",
            delay: 50,
            margin: 20,
            preciseMode: true,
            autoDestroy: false,
            onload: function(l) {
                var k = c.one(l).all(".J_lazyImg");
                var m = {
                    nodes: [],
                    ids: []
                };
                var j = {
                    nodes: [],
                    ids: []
                };
                c.each(k, function(n) {
                    var p = c.one(n);
                    var o = p.attr("data-id").split(";");
                    if (o.length) {
                        if (o[1] == 2) {
                            p.productId = o[0];
                            j.nodes.push(p);
                            j.ids.push(o[0])
                        } else {
                            p.productId = o[0];
                            m.nodes.push(p);
                            m.ids.push(o[0])
                        }
                    }
                });
                if (j.ids.length || m.ids.length) {
                    b(j, m)
                }
            }
        })
    }
    return f
}, {
    requires: ["h5-active-module/widgets/lazyload/", "io", "h5-active-module/widgets/windvane/index"]
});
KISSY.add("act-mod-citys-nav", function(a) {
    var b = function(f, d) {
        var e;
        d = d || window.location.href;
        e = d.match(new RegExp("[?&]" + f + "=([^&#]*)([&#]?)", "i"));
        return e ? decodeURIComponent(e[1]) : e
    };

    function c(l, f) {
        var m = this;
        var j = a.one("body");
        var g = a.one(f);
        var k = g.all("li");
        var p = g.offset().height;
        var q = g.attr("data-ismain");
        if (q == "true") {
            return
        }
        var r = [];
        var h = a.all(".m-floor-item-trip-lineThrough");
        var d = function() {
            r = [];
            a.each(h, function(t, s) {
                r.push(a.one(t).offset().top - p)
            })
        };
        d();
        var e = a.one(f)[0].offsetTop;
        a.one(window).on("scroll resize", function() {
            clearTimeout(m.mainTimeout);
            m.mainTimeout = setTimeout(function() {
                var w = document.body.scrollTop;
                var test1 = document.getElementById("guid-14277689681700");
                if (w > a.one(f)[0].offsetTop) {
                    a.one(f).addClass("act-mod-nav-fixed")
                }
                if (w < test1.offsetTop) {
                	a.one(f).removeClass("act-mod-nav-fixed")
                }
                d();
                for (var u = 0, s = r.length; u < s; u++) {
                    var t = r[u + 1] || 100000;
                    var v = r[u];
                    if (v <= w && t >= w && i.length) {
                        i.removeClass("current");
                        a.one(i.item(u)).addClass("current");
                        return
                    }
                    if (w == 0) {
                        i.removeClass("current");
                        a.one(i.item(u)).addClass("current");
                        return
                    }
                }
            }, 20)
        });
        var i = g.all("li");
        a.each(i, function(t, s) {
            a.one(t).on("click", function() {
                window.scrollTo(0, r[s] + 1)
            })
        });
        var o = b("hash");
        var n = ["yushou", "taopiao", "haiao", "wenquan", "huaxue", "chujing", "guonei"];
        var n = JSON.parse(a.one(f).one(".J_hashNav").html());
        console.log(JSON.parse(a.one(f).one(".J_hashNav").html()));
        a.each(n, function(t, s) {
            if (o == t) {
                window.scrollTo(0, r[s] + 1);
                i.removeClass("current");
                a.one(i.item(s)).addClass("current")
            }
        })
    }
    return c
}, {
    requires: []
});
KISSY.add("m-floor-item-trip-lineThrough", function(a) {
    function b(d, c) {}
    return b
}, {
    requires: []
});
KISSY.add("m-floor-item-trip-spring", function(f, g, b, i, e, h) {
    var c = g.extend({
        initializer: function() {
            var l = this;
            l.attrs = l.getAttrVals();
            l.module = l.get("module");
            l.onsaleProduct = l.get("onsaleProduct");
            l.getProductInfo(l.onsaleProduct)
        },
        getProductInfo: function(m) {
            m = m || l.onsaleProduct;
            var l = this;
            var n = {
                itemIds: m.ids.join(","),
                type: 1
            };
            i.getApi("mtop.trip.prom.queryItemDynamicInfo", "1.0", n, {
                useNative: false
            }, function(o) {
                console.log("success", o);
                var p = o.data.data || [];
                console.log(p);
                f.each(m.nodes, function(s) {
                    var r = s.productId;
                    var q = p[r] || {};
                    if (q.itemId) {
                        if (q.soldType == 2) {
                            s.one(".J_priceDesc").html("\u5b9a\u91d1");
                            if (q.price) {
                                if (q.price.indexOf("-") > -1) {
                                    q.prePrice = parseInt(q.price.split("-")[0]);
                                    s.one(".J_orgPrice").html('<div class="price-border"><div class="price-desc">\u9884\u552e\u4ef7</div><div><em>&yen;</em><span>' + q.prePrice + "</span></div></div>")
                                } else {
                                    q.prePrice = q.price;
                                    s.one(".J_orgPrice").html('<div class="price-border"><div>\u9884\u552e\u4ef7</div><div><em>&yen;</em><span>' + parseInt(q.price) + "</span></div></div>")
                                } if (q.prePrice && q.prePrice < 999) {
                                    console.log("\u51fa\u53d1\u65e5\u671f", q.itemId);
                                    if (q.lateDepartTime && q.latestDepartTime) {
                                        s.one(".J_walletInfo").html("\u51fa\u884c\u65e5\u671f");
                                        if (parseInt(q.latestDepartTime.substr(8, 2)) == parseInt(q.lateDepartTime.substr(8, 2))) {
                                            s.one(".J_walletPrice").html(q.lateDepartTime.substr(5, 2) + "." + q.lateDepartTime.substr(8, 2) + "\u4e4b\u524d")
                                        } else {
                                            s.one(".J_walletPrice").html(q.lateDepartTime.substr(5, 2) + "." + q.lateDepartTime.substr(8, 2) + "-" + q.latestDepartTime.substr(5, 2) + "." + q.latestDepartTime.substr(8, 2))
                                        }
                                        s.one(".J_productFlag").removeClass("hidden")
                                    } else {
                                        if (q.lateDepartTime) {
                                            s.one(".J_walletInfo").html("\u51fa\u884c\u65e5\u671f");
                                            s.one(".J_walletPrice").html(q.lateDepartTime.substr(5, 5) + "\u8d77");
                                            s.one(".J_productFlag").removeClass("hidden")
                                        }
                                    }
                                } else {
                                    if (q.prePrice >= 999 && q.prePrice < 1999) {
                                        s.one(".J_productFlag").removeClass("hidden");
                                        s.one(".J_walletInfo").html("\u5148\u4e70\u5148\u5f97");
                                        if (l.attrs.isXiaoBaoTuan != "true") {
                                            s.one(".J_walletPrice").html("50\u5143\u7ea2\u5305")
                                        } else {
                                            s.one(".J_walletPrice").html("\u5c0f\u5305\u56e2")
                                        }
                                    } else {
                                        if (q.prePrice < 2999 && q.prePrice >= 1999) {
                                            s.one(".J_productFlag").removeClass("hidden");
                                            s.one(".J_walletInfo").html("\u5148\u4e70\u5148\u5f97");
                                            s.one(".J_walletPrice").html("100\u5143\u7ea2\u5305")
                                        } else {
                                            if (q.prePrice >= 2999) {
                                                s.one(".J_productFlag").removeClass("hidden");
                                                s.one(".J_walletInfo").html("\u5148\u4e70\u5148\u5f97");
                                                s.one(".J_walletPrice").html("200\u5143\u7ea2\u5305")
                                            }
                                        }
                                    }
                                }
                                s.one(".J_share").attr("data-price", q.prePrice)
                            } else {
                                console.log("\u6ca1\u6709\u9884\u552e\u4ef7")
                            }
                        } else {
                            console.log("\u975e\u9884\u552e\u5546\u54c1", q.itemId);
                            s.one(".J_priceDesc").html("\u4ec5\u552e");
                            if (q.orgPrice) {
                                if (q.orgPrice.indexOf("-") > -1) {
                                    if (q.price.indexOf("-") > -1) {
                                        if (parseInt(q.price.split("-")[0]) > parseInt(q.orgPrice.split("-")[0])) {
                                            s.addClass("hidden");
                                            return
                                        }
                                    } else {
                                        if (parseInt(q.price) > parseInt(q.orgPrice.split("-")[0])) {
                                            s.addClass("hidden");
                                            return
                                        }
                                    }
                                    s.one(".J_orgPrice").html('<div class="price-border"><div class="price-desc">\u539f\u4ef7</div><div><em>&yen;</em><span>' + parseInt(q.orgPrice.split("-")[0]) + "</span></div></div>")
                                } else {
                                    console.log(q.price);
                                    if (q.price.indexOf("-") > -1) {
                                        if (parseInt(q.price.split("-")[0]) > parseInt(q.orgPrice)) {
                                            s.addClass("hidden");
                                            return
                                        }
                                    } else {
                                        if (parseInt(q.price) > parseInt(q.orgPrice)) {
                                            s.addClass("hidden");
                                            return
                                        }
                                    }
                                    s.one(".J_orgPrice").html('<div class="price-border"><div>\u539f\u4ef7</div><div><em>&yen;</em><span>' + parseInt(q.orgPrice) + "</span></div></div>")
                                }
                            } else {
                                console.log("\u6ca1\u6709\u539f\u4ef7", q.itemId)
                            }
                            s.one(".J_walletInfo").removeClass("normal");
                            if (q.lateDepartTime && q.latestDepartTime) {
                                s.one(".J_walletInfo").html("\u51fa\u884c\u65e5\u671f");
                                if (parseInt(q.latestDepartTime.substr(8, 2)) == parseInt(q.lateDepartTime.substr(8, 2))) {
                                    s.one(".J_walletPrice").html(q.lateDepartTime.substr(5, 2) + "." + q.lateDepartTime.substr(8, 2) + "\u4e4b\u524d")
                                } else {
                                    s.one(".J_walletPrice").html(q.lateDepartTime.substr(5, 2) + "." + q.lateDepartTime.substr(8, 2) + "-" + q.latestDepartTime.substr(5, 2) + "." + q.latestDepartTime.substr(8, 2))
                                }
                                s.one(".J_productFlag").removeClass("hidden")
                            } else {
                                if (q.lateDepartTime) {
                                    s.one(".J_walletInfo").html("\u51fa\u884c\u65e5\u671f");
                                    s.one(".J_walletPrice").html(q.lateDepartTime.substr(5, 5) + "\u8d77");
                                    s.one(".J_productFlag").removeClass("hidden")
                                }
                            }
                        } if (q.soldType == 2) {
                            if (q.prePayPrice) {
                                if (q.prePayPrice.indexOf("-") > -1) {
                                    s.one(".J_soldPrice").html(parseInt(q.prePayPrice.split("-")[0]) + '<span class="smallunion">\u8d77</span>')
                                } else {
                                    s.one(".J_soldPrice").html(parseInt(q.prePayPrice))
                                }
                            } else {}
                        } else {
                            if (q.price && q.price.indexOf("-") > -1) {
                                s.one(".J_soldPrice").html(parseInt(q.price.split("-")[0]) + '<span class="smallunion">\u8d77</span>')
                            } else {
                                q.price && s.one(".J_soldPrice").html(parseInt(q.price))
                            }
                            s.one(".J_share").attr("data-price", q.price)
                        } if (q.sold >= 5) {
                            s.one(".J_sold").html('\u5df2\u552e<span class="product-sold">' + q.sold + "</span>\u4ef6")
                        } else {
                            s.one(".J_sold").html("")
                        }
                        s.attr("data-stock", q.stock);
                        s.attr("data-jumpNative", q.jumpNative);
                        s.attr("data-soldType", q.soldType);
                        s.attr("data-itemType", q.itemType);
                        if (q.jumpNative) {
                            s.removeClass(".J_itemLink").addClass(".J_jumpNative")
                        }
                        if (q.soldOut) {
                            s.addClass("sale-outShelves")
                        }
                        if (q.outShelves) {
                            s.addClass("sale-outShelves")
                        }
                        s.parent(".product-wrap").one(".J_priceReload").addClass("hidden");
                        if (s.one(".J_recommend").html().length == 0) {
                            s.parent(".product-wrap").addClass("hidden")
                        }
                    }
                })
            }, function(o) {
                console.log("fail", o)
            })
        }
    }, {
        ATTRS: {
            module: {
                value: ""
            },
            onsaleProduct: {
                value: ""
            },
            isXiaoBaoTuan: {
                value: "false"
            }
        }
    });
    var k = "http://promotion.trip.taobao.com/platform/getItemsInfo.htm";
    var a = function(l, m) {
        new e({
            dataType: "jsonp",
            url: k,
            data: {
                itemIds: ["2", ":", l.ids.join(",")].join("") + ";" + ["1", ":", m.ids.join(",")].join("")
            },
            success: function(n) {
                console.log(n);
                f.each(l.nodes, function(s) {
                    var r = s.productId;
                    var p = n[r];
                    if (p && p.type == 2) {
                        var o = p.sold < 5 ? "\u70ed\u5356\u4e2d" : ("\u5df2\u552e" + p.sold + "\u4ef6");
                        var q = (p.deposit / 100).toFixed(2);
                        s.one(".J_sold").html(o);
                        if (p.stock == 0) {
                            s.addClass("sale-out")
                        }
                        if (parseInt(p.deposit)) {
                            s.one(".J_priceDesc").html("\u5b9a\u91d1");
                            s.one(".J_soldPrice").html(p.deposit / 100);
                            s.one(".J_orgPrice").html('<div class="price-border"><div>\u539f\u4ef7</div><div><em>\uffe5</em><span>' + p.originalPrice / 100 + "</span></div></div>")
                        } else {
                            if (parseInt(p.stepPayPrice)) {
                                s.one(".J_priceDesc").html("\u4ec5\u552e");
                                s.one(".J_soldPrice").html(p.stepPayPrice / 100)
                            } else {
                                s.one(".J_priceDesc").html("\u4ec5\u552e");
                                s.one(".J_soldPrice").html(p.originalPrice / 100)
                            }
                        }
                    }
                });
                f.each(m.nodes, function(r) {
                    var q = r.productId;
                    var p = n[q];
                    if (p && p.type == 1) {
                        var o = p.sold < 5 ? "\u70ed\u5356\u4e2d" : ("\u5df2\u552e" + p.sold + "\u4ef6");
                        r.one(".J_sold").html(o);
                        if (p.stock == 0) {
                            r.addClass("sale-out")
                        }
                        console.log("xxx", r.one(".J_orgPrice"));
                        r.one(".J_soldPrice").html(p.originalPrice / 100)
                    }
                })
            }
        })
    };

    function j(o, q) {
        if (!o) {
            return
        }
        var n = o.attr("data-isOfflineData");
        if (n) {
            var m = o.attr("data-url");
            var l = o.parent(".J_Module").attr("data-guid");
            console.log("urlurlurlurl_data", m);
            var p = {
                url: m
            };
            OffineData.addUrls(p);
            OffineData.load();
            OffineData.on("loaded", function(t) {
                if (t.offlineData.data) {
                    var u = t.offlineData.data[l] || {};
                    if (u["35129a27b454a081"]) {
                        var v = u["35129a27b454a081"];
                        console.log("customData", v);
                        var r = o.one(".J_customTmpl").html();
                        var s = h(r, v);
                        o.one(".J_offlineModule").html(s)
                    }
                }
                q && q()
            })
        }
    }

    function d(r, o) {
        var o = f.one(o);
        var v = o.attr("data-isHot");
        var p = o.attr("data-isXiaoBaoTuan");
        var u = o.all(".J_share");
        var l = o.one(".J_data");
        var t = JSON.parse(l.html());
        global.isWeibo = !! userAgent.match(/Weibo/ig);
        if (global.isTrip) {
            u.removeClass("hidden")
        }
        u.on("click", function(D) {
            D.halt();
            var y = f.one(D.currentTarget);
            var B = y.parent(".product-item");
            var A = y.attr("data-title");
            var x = B.one("img").attr("src").split("_")[0];
            var C = B.attr("href");
            var z = y.attr("data-price");
            var w = f.substitute(t.content, {
                price: z
            });
            console.log(w);
            if (global.isTrip) {
                window.NativeBridge.open("share", {
                    title_content: t.title,
                    text_content: A + " " + w,
                    url_content: C,
                    image_url: x,
                    cleaned_url: "false"
                })
            }
        });
        new b({
            nodes: ".J_SpringProductListBox",
            delay: 10,
            margin: 120,
            preciseMode: false,
            autoDestroy: true,
            onload: function(z) {
                var x = f.one(z).all(".J_lazyImg");
                var y = {
                    nodes: [],
                    ids: []
                };
                f.each(x, function(A) {
                    var C = f.one(A);
                    var B = C.attr("data-id").split(";");
                    if (B.length) {
                        C.productId = B[0];
                        y.nodes.push(C);
                        y.ids.push(B[0])
                    }
                });
                if (y.ids.length) {
                    var w = new c({
                        module: o,
                        onsaleProduct: y,
                        isXiaoBaoTuan: p
                    })
                }
            }
        });
        new b({
            nodes: o.all(".J_lazyImg img"),
            delay: 50,
            margin: 20,
            preciseMode: true,
            autoDestroy: true,
            onload: function(x) {
                var w = x.getAttribute("lazysrc");
                if (w) {
                    x.src = w;
                    x.removeAttribute("lazysrc")
                }
                f.one(x).css({
                    opacity: 1,
                    "-webkit-transition": "opacity 0.5s ease-in",
                    transition: "opacity 0.5s ease-in"
                });
                x.onerror = function(y) {
                    x.src = "data:image/jpg;base64,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"
                }
            }
        });
        var s = navigator.userAgent.match(/AliTrip[\s\/][\d\.]+/igm);
        var q = s ? parseInt(s[0].match(/[\d\.]+/igm)[0].split(".").join(""), 10) : 0;
        var n = function() {
            var x = navigator.userAgent.match(/AlipayClient[\s\/][\d\.]+/igm);
            var w = x ? parseInt(x[0].match(/[\d\.]+/igm)[0].split(".").join("")) : 0;
            w = parseInt(w.toString().substr(0, 3));
            return window.AlipayJSBridge && w >= 810
        };
        var m = function(y, w) {
            var x;
            w = w || window.location.href;
            x = w.match(new RegExp("[?&]" + y + "=([^&#]*)([&#]?)", "i"));
            return x ? decodeURIComponent(x[1]) : x
        };
        o.delegate("click", ".J_itemLink", function(B) {
            B.preventDefault();
            console.log("J_itemLink");
            var A = f.one(B.currentTarget);
            var w = A.attr("href");
            var z = A.attr("data-id").split(";")[0];
            if (!w) {
                return
            }
            if (w.indexOf("?") == -1) {
                w += "?"
            }
            w = w + "&ttid=" + m("ttid");
            var y = A.attr("data-soldType") || 1;
            var C = A.attr("data-itemType");
            if (y != 3 && C == 3) {
                w = "http://h5.m.taobao.com/trip/tuan/detail/index.html?itemid=" + z + "&ttid=" + m("ttid")
            }
            if (global.isTrip) {
                var x = A.attr("data-istravel");
                if (z && x) {
                    window.NativeBridge.open("vacation_detail", {
                        itemId: z,
                        command: "init"
                    }, function() {}, 0, 2)
                } else {
                    window.NativeBridge.open("act_webview", {
                        url: w,
                        right_btn_type: 2,
                        title: "\u5546\u54c1\u8be6\u60c5"
                    }, function() {}, 0, 0)
                }
            } else {
                if (global.isTB) {
                    location.href = w
                } else {
                    if (global.isTM) {
                        location.href = w
                    } else {
                        if (v) {
                            location.href = "http://h5.m.taobao.com/trip/guide/alitrip.html?action=" + encodeURIComponent(w) + "&url=" + encodeURIComponent(w) + "&sb=1"
                        } else {
                            location.href = w
                        }
                    }
                }
            }
        });
        o.delegate("click", ".J_jumpNative", function(B) {
            B.preventDefault();
            console.log("J_jumpNative");
            var A = f.one(B.currentTarget);
            var w = A.attr("href");
            if (!w) {
                return
            }
            if (w.indexOf("?") == -1) {
                w += "?"
            }
            w = w + "&ttid=" + m("ttid");
            var z = A.attr("data-id").split(";")[0];
            var C = parseInt(A.attr("data-itemType"));
            if (C == 2) {
                w = "http://h5.m.taobao.com/trip/ticket/detail.htm?id=" + z + "&ttid=" + m("ttid")
            }
            if (global.isTrip) {
                console.log("clientVersion", q, C);
                if (q >= 510 && q < 520 && z) {
                    if (C == 1) {
                        window.NativeBridge.open("vacation_detail", {
                            itemId: z,
                            command: "init"
                        }, function() {}, 0, 2)
                    } else {
                        location.href = w
                    }
                } else {
                    if (q >= 520 && q < 540 && z) {
                        if (C == 1) {
                            window.NativeBridge.open("vacation_detail", {
                                itemId: z,
                                command: "init"
                            }, function() {}, 0, 2)
                        } else {
                            window.NativeBridge.open("act_webview", {
                                url: w,
                                right_btn_type: 2,
                                title: "\u8be6\u60c5"
                            }, function() {}, 0, 0)
                        }
                    } else {
                        if (q >= 540 && z) {
                            if (C == 1 || C == 4) {
                                window.NativeBridge.open("vacation_detail", {
                                    itemId: z,
                                    command: "init"
                                }, function() {}, 0, 2)
                            } else {
                                window.NativeBridge.open("act_webview", {
                                    url: w,
                                    right_btn_type: 2,
                                    title: "\u95e8\u7968\u8be6\u60c5"
                                }, function() {}, 0, 0)
                            }
                        } else {
                            window.NativeBridge.open("act_webview", {
                                url: w,
                                right_btn_type: 2,
                                title: "\u5ea6\u5047\u8be6\u60c5"
                            }, function() {}, 0, 0)
                        }
                    }
                }
            } else {
                if ((global.isTB || global.isTM) && !global.isWeibo) {
                    location.href = w
                } else {
                    var y = "http://h5.m.taobao.com/trip/guide/alitrip.html?action=vacation_detail&data=" + encodeURIComponent(JSON.stringify({
                        itemId: z,
                        command: "init"
                    })) + "&url=" + encodeURIComponent("http://detail.m.tmall.com/item.htm?id=" + z + "&ttid=" + m("ttid")) + "&sb=1";
                    console.log(y);
                    var x = "http://h5.m.taobao.com/trip/guide/alitrip.html?action=vacation_detail" + encodeURIComponent("http://detail.m.tmall.com/item.htm?id=" + z) + "&url=" + encodeURIComponent("http://detail.m.tmall.com/item.htm?id=" + z + "&ttid=" + m("ttid")) + "&sb=1";
                    if (v) {
                        console.log(y);
                        location.href = y
                    } else {
                        location.href = w
                    }
                }
            }
        })
    }
    return d
}, {
    requires: ["base", "h5-active-module/widgets/lazyload/", "h5-active-module/widgets/mtop/", "io", "h5-active-module/widgets/libs/juicer"]
});
KISSY.add("act-mod-lowest-oneLineFromRule-domestic", function(c, b) {
    function d(j, g) {
        var i = c.one("body");
        var h = c.one(g);
        var e = h.one(".J_data");
        var l = "http://h5.m.taobao.com/trip/flight/searchlist/index.html?searchType=1&depCityCode=${depCode}&arrCityCode=${arrCode}&depCityName=${depName}&arrCityName=${arrName}&leaveDate=${depDate}";
        var f = a("ttid");
        if (f) {
            l += "&ttid=" + f
        } else {
            l += "&ttid=201300@travel_h5_3.1.0"
        } if (e) {
            var m = JSON.parse(e.html());
            var k = new b({
                skipUrl: l,
                url: "http://s.jipiao.trip.taobao.com/search/cheapFlight.htm",
                container: h.one(".J_lowestContainer"),
                tpl: h.one(".J_lowestDomesticTpl").html(),
                tabMap: m.tabMap,
                ruleId: m.tabMap[0].id,
                tabCode: m.tabCode,
                itemLimit: m.itemLimit
            })
        }
    }

    function a(e) {
        var f = new RegExp("(^|&)" + e + "=([^&]*)(&|$)", "i");
        var g = window.location.search.substr(1).match(f);
        if (g != null) {
            return decodeURI(g[2])
        }
        return null
    }
    return d
}, {
    requires: ["h5-active-module/mods/lowest/one-line-from-rule-domestic/"]
});
KISSY.add("act-mod-download-bigBanner", function(a) {
    function b(e, d) {
        var c = a.one("body");
        if (window.global) {
            if (!(global.isTB || global.isTM || global.isTrip)) {
                var f = a.one(d).one(".J_downBtn");
                f && f.css("display", "block")
            }
        }
        c.on("click", "a[mark='leimu']", function(i) {
            var h = a.one(i.currentTarget).attr("data-url");
            var j = navigator.userAgent.indexOf("AliTrip") > -1;
            if (j) {
                var g = new Bridge();
                if (h.indexOf("http://h5.m.taobao.com/trip/flight/search/index.html") > -1) {
                    g.pushBack("page:", "goto", {
                        page_name: "flight_home",
                        data: {},
                        navi_type: 0
                    }, true)
                } else {
                    if (h.indexOf("http://h5.m.taobao.com/trip/hotel/search/index.html") > -1) {
                        g.pushBack("page:", "goto", {
                            page_name: "hotel_home",
                            data: {},
                            navi_type: 0
                        }, true)
                    } else {
                        if (h.indexOf("http://h5.m.taobao.com/trip/ticket/search/index.html") > -1) {
                            g.pushBack("page:", "goto", {
                                page_name: "ticket_home",
                                data: {},
                                navi_type: 0
                            }, true)
                        } else {
                            location.href = h
                        }
                    }
                }
            } else {
                location.href = h
            }
        })
    }
    return b
}, {
    requires: []
});