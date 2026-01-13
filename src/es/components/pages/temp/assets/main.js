(() => {
    var e, t, i, r, a, s, n = {}, o = {};
    function c(e) {
        var t = o[e];
        if (void 0 !== t)
            return t.exports;
        var i = o[e] = {
            exports: {}
        };
        return n[e].call(i.exports, i, i.exports, c),
            i.exports
    }
    c.m = n,
        c.n = e => {
            var t = e && e.__esModule ? () => e.default : () => e;
            return c.d(t, {
                a: t
            }),
                t
        }
        ,
        t = Object.getPrototypeOf ? e => Object.getPrototypeOf(e) : e => e.__proto__,
        c.t = function (i, r) {
            if (1 & r && (i = this(i)),
                8 & r)
                return i;
            if ("object" == typeof i && i) {
                if (4 & r && i.__esModule)
                    return i;
                if (16 & r && "function" == typeof i.then)
                    return i
            }
            var a = Object.create(null);
            c.r(a);
            var s = {};
            e = e || [null, t({}), t([]), t(t)];
            for (var n = 2 & r && i; "object" == typeof n && !~e.indexOf(n); n = t(n))
                Object.getOwnPropertyNames(n).forEach((e => s[e] = () => i[e]));
            return s.default = () => i,
                c.d(a, s),
                a
        }
        ,
        c.d = (e, t) => {
            for (var i in t)
                c.o(t, i) && !c.o(e, i) && Object.defineProperty(e, i, {
                    enumerable: !0,
                    get: t[i]
                })
        }
        ,
        c.f = {},
        c.e = e => Promise.all(Object.keys(c.f).reduce(((t, i) => (c.f[i](e, t),
            t)), [])),
        c.u = e => (({
            300: "msrc-sales-receipt/sales-receipt",
            364: "msrc-articles/categorized-productlist",
            750: "msrc-articles/productlist",
            793: "msrc-articles/productslider",
            913: "msrc-search/box",
            1273: "msrc-articles/offerlist",
            1374: "msrc-warranty/warranties",
            1437: "msrc-community/kudos",
            1901: "msrc-community/reactions-count",
            2675: "msrc-articles/article-mini",
            3082: "msrc-newsletter",
            3174: "widget-loader",
            3384: "jspdf",
            3386: "msrc-community/ratings-reviews/ratings-reviews",
            3536: "msrc-community/forum/reply-form",
            3568: "msrc-community/ratings-reviews/reviews-summary",
            3601: "msrc-community/ratings-reviews/ratings-summary",
            3986: "msrc-articles/articleslider",
            4038: "msrc-search/input",
            4068: "msrc-search/results",
            4222: "migros-authenticator",
            4779: "msrc-community/discussions-comments",
            4928: "jspdf-autotable",
            5433: "msrc-stores",
            5851: "msrc-community/forum/thread",
            6995: "msrc-community/activity-stream",
            7418: "msrc-community/questions-answers",
            8070: "msrc-community/flag-form",
            8097: "msrc-articles/offer",
            8347: "msrc-community/ratings-reviews/review-form",
            8800: "msrc-messenger",
            8881: "msrc-login/button",
            8937: "msrc-community/forum/board",
            9048: "msrc-share-buttons",
            9053: "msrc-articles/article",
            9144: "authenticator",
            9353: "msrc-course-list",
            9419: "msrc-articles/categorized-offerlist",
            9450: "msrc-articles/product",
            9500: "msrc-login/profile-flyout",
            9582: "msrc-articles/offerslider"
        }[e] || e) + ".js"),
        c.g = function () {
            if ("object" == typeof globalThis)
                return globalThis;
            try {
                return this || new Function("return this")()
            } catch (e) {
                if ("object" == typeof window)
                    return window
            }
        }(),
        c.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t),
        i = {},
        r = "@migros/msrc-cdn-build:",
        c.l = (e, t, a, s) => {
            if (i[e])
                i[e].push(t);
            else {
                var n, o;
                if (void 0 !== a)
                    for (var m = document.getElementsByTagName("script"), l = 0; l < m.length; l++) {
                        var d = m[l];
                        if (d.getAttribute("src") == e || d.getAttribute("data-webpack") == r + a) {
                            n = d;
                            break
                        }
                    }
                n || (o = !0,
                    (n = document.createElement("script")).charset = "utf-8",
                    n.timeout = 120,
                    c.nc && n.setAttribute("nonce", c.nc),
                    n.setAttribute("data-webpack", r + a),
                    n.src = e),
                    i[e] = [t];
                var u = (t, r) => {
                    n.onerror = n.onload = null,
                        clearTimeout(g);
                    var a = i[e];
                    if (delete i[e],
                        n.parentNode && n.parentNode.removeChild(n),
                        a && a.forEach((e => e(r))),
                        t)
                        return t(r)
                }
                    , g = setTimeout(u.bind(null, void 0, {
                        type: "timeout",
                        target: n
                    }), 12e4);
                n.onerror = u.bind(null, n.onerror),
                    n.onload = u.bind(null, n.onload),
                    o && document.head.appendChild(n)
            }
        }
        ,
        c.r = e => {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
                value: "Module"
            }),
                Object.defineProperty(e, "__esModule", {
                    value: !0
                })
        }
        ,
        c.p = "https://cdn.migros.ch/msrc/20240508072647/",
        (() => {
            var e = {
                8792: 0
            };
            c.f.j = (t, i) => {
                var r = c.o(e, t) ? e[t] : void 0;
                if (0 !== r)
                    if (r)
                        i.push(r[2]);
                    else {
                        var a = new Promise(((i, a) => r = e[t] = [i, a]));
                        i.push(r[2] = a);
                        var s = c.p + c.u(t)
                            , n = new Error;
                        c.l(s, (i => {
                            if (c.o(e, t) && (0 !== (r = e[t]) && (e[t] = void 0),
                                r)) {
                                var a = i && ("load" === i.type ? "missing" : i.type)
                                    , s = i && i.target && i.target.src;
                                n.message = "Loading chunk " + t + " failed.\n(" + a + ": " + s + ")",
                                    n.name = "ChunkLoadError",
                                    n.type = a,
                                    n.request = s,
                                    r[1](n)
                            }
                        }
                        ), "chunk-" + t, t)
                    }
            }
                ;
            var t = (t, i) => {
                var r, a, [s, n, o] = i, m = 0;
                if (s.some((t => 0 !== e[t]))) {
                    for (r in n)
                        c.o(n, r) && (c.m[r] = n[r]);
                    o && o(c)
                }
                for (t && t(i); m < s.length; m++)
                    a = s[m],
                        c.o(e, a) && e[a] && e[a][0](),
                        e[a] = 0
            }
                , i = globalThis.webpackChunk_migros_msrc_cdn_build = globalThis.webpackChunk_migros_msrc_cdn_build || [];
            i.forEach(t.bind(null, 0)),
                i.push = t.bind(null, i.push.bind(i))
        }
        )(),
        c.nc = void 0;
    const m = async (e, t, i) => {
        const { WidgetLoader: r } = await Promise.all([c.e(3144), c.e(3174)]).then(c.bind(c, 66309));
        await r.render(e, t, i)
    }
        ;
    window.msrc = {
        versions: {
            "@migros/authenticator": "5.0.5",
            "@migros/mdx-design-tokens": "2.40.1",
            "@migros/msrc-analytics": "0.3.4",
            "@migros/msrc-articles": "1.82.1",
            "@migros/msrc-browser": "0.4.4",
            "@migros/msrc-cdn-build": "2.13.16",
            "@migros/msrc-community": "4.41.7",
            "@migros/msrc-config": "1.16.2",
            "@migros/msrc-course-list": "0.67.28",
            "@migros/msrc-doc": "1.75.36",
            "@migros/msrc-i18n": "1.15.22",
            "@migros/msrc-lighthouse": "0.11.66",
            "@migros/msrc-login": "2.14.10",
            "@migros/msrc-mania": "1.39.26",
            "@migros/msrc-messenger": "1.27.0",
            "@migros/msrc-newsletter": "1.38.23",
            "@migros/msrc-privacy": "1.47.0",
            "@migros/msrc-recipe": "1.14.18",
            "@migros/msrc-sales-receipt": "0.18.19",
            "@migros/msrc-search": "1.108.8",
            "@migros/msrc-share-buttons": "1.21.20",
            "@migros/msrc-stores": "1.113.5",
            "@migros/msrc-ui-kit": "1.143.1",
            "@migros/msrc-warranty": "1.39.29",
            "@migros/places-api-models": "2.0.0",
            "@migros/stores-api-models": "2.2.2",
            "@migros/tokenprovider": "2.0.0",
            "@migros/web-api-service": "1.3.1"
        },
        messenger: {
            _current: null === (a = window.msrc) || void 0 === a || null === (s = a.messenger) || void 0 === s ? void 0 : s._current,
            getInstance: async () => (window.msrc.messenger._current || await Promise.all([c.e(5810), c.e(8800)]).then(c.bind(c, 39025)),
                window.msrc.messenger._current)
        },
        utilities: {
            webApiService: {
                setupForEnv: async ({ environment: e, webApiKey: t }) => {
                    const { WebApiService: i, WEB_API_URLS: r } = await Promise.all([c.e(4222), c.e(5810), c.e(8510), c.e(9144)]).then(c.t.bind(c, 92309, 23));
                    return i.init(r[e], {
                        key: t
                    })
                }
            },
            // login: {
            //     setup: async e => {
            //         const { Authenticator: t } = await Promise.all([c.e(4222), c.e(5810), c.e(8510), c.e(9144)]).then(c.t.bind(c, 94061, 23));
            //         return t.init(e)
            //     }
            //     ,
            //     tokenProviderSetup: async e => {
            //         const { Authenticator: t } = await Promise.all([c.e(4222), c.e(5810), c.e(8510), c.e(9144)]).then(c.t.bind(c, 94061, 23));
            //         return t.initTokenProviderEvents(e)
            //     }
            //     ,
            //     getUser: async () => {
            //         const { Authenticator: e } = await Promise.all([c.e(4222), c.e(5810), c.e(8510), c.e(9144)]).then(c.t.bind(c, 94061, 23));
            //         return await e.getInstance().getUser()
            //     }
            //     ,
            //     getToken: async () => {
            //         const { Authenticator: e } = await Promise.all([c.e(4222), c.e(5810), c.e(8510), c.e(9144)]).then(c.t.bind(c, 94061, 23));
            //         return await e.getInstance().getToken()
            //     }
            //     ,
            //     isLoggedIn: async () => {
            //         const { Authenticator: e } = await Promise.all([c.e(4222), c.e(5810), c.e(8510), c.e(9144)]).then(c.t.bind(c, 94061, 23));
            //         return await e.getInstance().isLoggedIn()
            //     }
            //     ,
            //     login: async () => {
            //         const { Authenticator: e } = await Promise.all([c.e(4222), c.e(5810), c.e(8510), c.e(9144)]).then(c.t.bind(c, 94061, 23));
            //         return await e.getInstance().login()
            //     }
            //     ,
            //     autologin: async () => {
            //         const { Authenticator: e } = await Promise.all([c.e(4222), c.e(5810), c.e(8510), c.e(9144)]).then(c.t.bind(c, 94061, 23));
            //         return await e.getInstance().autologin()
            //     }
            //     ,
            //     logout: async () => {
            //         const { Authenticator: e } = await Promise.all([c.e(4222), c.e(5810), c.e(8510), c.e(9144)]).then(c.t.bind(c, 94061, 23));
            //         return await e.getInstance().logout()
            //     }
            // }
        },
        components: {
            articles: {
                article: async (e, t) => {
                    const { ArticleWidget: i } = await Promise.all([c.e(5810), c.e(1661), c.e(7956), c.e(2693), c.e(5015), c.e(4555), c.e(4483), c.e(8099), c.e(8214), c.e(9053)]).then(c.bind(c, 15178));
                    await m(i, e, t)
                }
                ,
                product: async (e, t) => {
                    const { ProductWidget: i } = await Promise.all([c.e(4222), c.e(5810), c.e(1661), c.e(7956), c.e(2693), c.e(8510), c.e(5015), c.e(3144), c.e(6130), c.e(4555), c.e(4483), c.e(8099), c.e(8214), c.e(3246), c.e(9450)]).then(c.bind(c, 2887));
                    await m(i, e, t)
                }
                ,
                offer: async (e, t) => {
                    const { OfferWidget: i } = await Promise.all([c.e(4222), c.e(5810), c.e(1661), c.e(7956), c.e(2693), c.e(8510), c.e(5015), c.e(6130), c.e(4555), c.e(4483), c.e(8099), c.e(8214), c.e(3246), c.e(8097)]).then(c.bind(c, 74900));
                    await m(i, e, t)
                }
                ,
                articleMini: async (e, t) => {
                    const { ArticleMiniWidget: i } = await Promise.all([c.e(5810), c.e(1661), c.e(7956), c.e(2693), c.e(5015), c.e(4555), c.e(4483), c.e(8099), c.e(8214), c.e(2675)]).then(c.bind(c, 98463));
                    await m(i, e, t)
                }
                ,
                productList: async (e, t) => {
                    const { ProductListWidget: i } = await Promise.all([c.e(4222), c.e(5810), c.e(1661), c.e(7956), c.e(2693), c.e(8510), c.e(5015), c.e(6130), c.e(4555), c.e(4483), c.e(8099), c.e(8214), c.e(3246), c.e(4796), c.e(750)]).then(c.bind(c, 88681));
                    await m(i, e, t)
                }
                ,
                offerlist: async (e, t) => {
                    const { OfferListWidget: i } = await Promise.all([c.e(4222), c.e(5810), c.e(1661), c.e(7956), c.e(2693), c.e(8510), c.e(5015), c.e(6130), c.e(4555), c.e(4483), c.e(8099), c.e(8214), c.e(3246), c.e(4796), c.e(1273)]).then(c.bind(c, 92358));
                    await m(i, e, t)
                }
                ,
                categorizedProductList: async (e, t) => {
                    const { CategorizedProductListWidget: i } = await Promise.all([c.e(4222), c.e(5810), c.e(1661), c.e(7956), c.e(2693), c.e(8510), c.e(5015), c.e(6130), c.e(4555), c.e(4483), c.e(8099), c.e(8214), c.e(3246), c.e(4796), c.e(364)]).then(c.bind(c, 36128));
                    await m(i, e, t)
                }
                ,
                categorizedOfferList: async (e, t) => {
                    const { CategorizedOfferListWidget: i } = await Promise.all([c.e(4222), c.e(5810), c.e(1661), c.e(7956), c.e(2693), c.e(8510), c.e(5015), c.e(6130), c.e(4555), c.e(4483), c.e(8099), c.e(8214), c.e(3246), c.e(4796), c.e(9419)]).then(c.bind(c, 1556));
                    await m(i, e, t)
                }
                ,
                articleSlider: async (e, t) => {
                    const { ArticleSliderWidget: i } = await Promise.all([c.e(5810), c.e(1661), c.e(7956), c.e(2693), c.e(5015), c.e(2072), c.e(9126), c.e(4555), c.e(4483), c.e(8099), c.e(8214), c.e(7983), c.e(3986)]).then(c.bind(c, 6886));
                    await m(i, e, t)
                }
                ,
                productSlider: async (e, t) => {
                    const { ProductSliderWidget: i } = await Promise.all([c.e(4222), c.e(5810), c.e(1661), c.e(7956), c.e(2693), c.e(8510), c.e(5015), c.e(6130), c.e(2072), c.e(9126), c.e(4555), c.e(4483), c.e(8099), c.e(8214), c.e(3246), c.e(7983), c.e(793)]).then(c.bind(c, 11803));
                    await m(i, e, t)
                }
                ,
                offerSlider: async (e, t) => {
                    const { OfferSliderWidget: i } = await Promise.all([c.e(4222), c.e(5810), c.e(1661), c.e(7956), c.e(2693), c.e(8510), c.e(5015), c.e(6130), c.e(2072), c.e(9126), c.e(4555), c.e(4483), c.e(8099), c.e(8214), c.e(3246), c.e(7983), c.e(9582)]).then(c.bind(c, 84448));
                    await m(i, e, t)
                }
            },
            community: {
                activityStream: async (e, t) => {
                    const { ActivityStreamWidget: i } = await Promise.all([c.e(4222), c.e(5810), c.e(1661), c.e(7956), c.e(2693), c.e(8510), c.e(3144), c.e(4526), c.e(6020), c.e(4555), c.e(4483), c.e(4371), c.e(824), c.e(4307), c.e(3416), c.e(6995)]).then(c.bind(c, 71964));
                    await m(i, e, t)
                }
                ,
                forum: {
                    board: async (e, t) => {
                        const { BoardWidget: i } = await Promise.all([c.e(4222), c.e(5810), c.e(1661), c.e(7956), c.e(2693), c.e(8510), c.e(3144), c.e(4526), c.e(6020), c.e(8040), c.e(4555), c.e(4483), c.e(4371), c.e(824), c.e(4307), c.e(3416), c.e(547), c.e(4469), c.e(5803), c.e(9206), c.e(8937)]).then(c.bind(c, 75172));
                        await m(i, e, t)
                    }
                    ,
                    flagForm: async (e, t) => {
                        const { FlagFormWidget: i } = await Promise.all([c.e(4222), c.e(5810), c.e(1661), c.e(7956), c.e(2693), c.e(8510), c.e(3144), c.e(4526), c.e(6020), c.e(8040), c.e(4555), c.e(4371), c.e(824), c.e(4307), c.e(3416), c.e(547), c.e(4469), c.e(4517), c.e(4064), c.e(2263), c.e(8070)]).then(c.bind(c, 3023));
                        await m(i, e, t)
                    }
                    ,
                    replyForm: async (e, t) => {
                        const { ReplyFormWidget: i } = await Promise.all([c.e(4222), c.e(5810), c.e(1661), c.e(7956), c.e(2693), c.e(8510), c.e(3144), c.e(4526), c.e(6020), c.e(8040), c.e(4555), c.e(4371), c.e(824), c.e(4307), c.e(3416), c.e(547), c.e(4469), c.e(4517), c.e(4064), c.e(2263), c.e(3536)]).then(c.bind(c, 15016));
                        await m(i, e, t)
                    }
                    ,
                    thread: async (e, t) => {
                        const { ThreadWidget: i } = await Promise.all([c.e(4222), c.e(5810), c.e(1661), c.e(7956), c.e(2693), c.e(8510), c.e(3144), c.e(4526), c.e(6020), c.e(8040), c.e(4555), c.e(4483), c.e(4371), c.e(824), c.e(4307), c.e(3416), c.e(547), c.e(4469), c.e(5803), c.e(9206), c.e(5851)]).then(c.bind(c, 51700));
                        await m(i, e, t)
                    }
                    ,
                    threadForm: async (e, t) => {
                        const { ThreadWidget: i } = await Promise.all([c.e(4222), c.e(5810), c.e(1661), c.e(7956), c.e(2693), c.e(8510), c.e(3144), c.e(4526), c.e(6020), c.e(8040), c.e(4555), c.e(4483), c.e(4371), c.e(824), c.e(4307), c.e(3416), c.e(547), c.e(4469), c.e(5803), c.e(9206), c.e(5851)]).then(c.bind(c, 51700));
                        await m(i, e, t)
                    }
                },
                questionsAnswers: async (e, t) => {
                    const { QuestionsAnswersWidget: i } = await Promise.all([c.e(4222), c.e(5810), c.e(1661), c.e(7956), c.e(2693), c.e(8510), c.e(3144), c.e(4526), c.e(6020), c.e(8040), c.e(5519), c.e(4555), c.e(4483), c.e(4371), c.e(824), c.e(4307), c.e(3416), c.e(547), c.e(4469), c.e(5803), c.e(4517), c.e(3351), c.e(4064), c.e(1745), c.e(7418)]).then(c.bind(c, 89269));
                    await m(i, e, t)
                }
                ,
                discussionsComments: async (e, t) => {
                    const { DiscussionsCommentsWidget: i } = await Promise.all([c.e(4222), c.e(5810), c.e(1661), c.e(7956), c.e(2693), c.e(8510), c.e(3144), c.e(4526), c.e(6020), c.e(8040), c.e(5519), c.e(4555), c.e(4483), c.e(4371), c.e(824), c.e(4307), c.e(3416), c.e(547), c.e(4469), c.e(5803), c.e(4517), c.e(3351), c.e(4064), c.e(1745), c.e(4779)]).then(c.bind(c, 75725));
                    await m(i, e, t)
                }
                ,
                kudos: async (e, t) => {
                    const { KudosWidget: i } = await Promise.all([c.e(4222), c.e(5810), c.e(1661), c.e(7956), c.e(2693), c.e(8510), c.e(4526), c.e(4555), c.e(4371), c.e(824), c.e(4307), c.e(1437)]).then(c.bind(c, 58287));
                    await m(i, e, t)
                }
                ,
                ratingsReviews: {
                    ratingsReviews: async (e, t) => {
                        const { RatingsReviewsWidget: i } = await Promise.all([c.e(4222), c.e(5810), c.e(1661), c.e(7956), c.e(2693), c.e(8510), c.e(3144), c.e(4526), c.e(6020), c.e(8040), c.e(5519), c.e(4555), c.e(4483), c.e(4371), c.e(824), c.e(4307), c.e(3416), c.e(547), c.e(4469), c.e(5803), c.e(4517), c.e(3351), c.e(2252), c.e(3386)]).then(c.bind(c, 80870));
                        await m(i, e, t)
                    }
                    ,
                    ratingsSummary: async (e, t) => {
                        const { RatingsSummaryWidget: i } = await Promise.all([c.e(5810), c.e(1661), c.e(7956), c.e(2693), c.e(4555), c.e(4483), c.e(824), c.e(3601)]).then(c.bind(c, 659));
                        await m(i, e, t)
                    }
                    ,
                    reviewsSummary: async (e, t) => {
                        const { ReviewsSummaryWidget: i } = await Promise.all([c.e(4222), c.e(5810), c.e(1661), c.e(7956), c.e(2693), c.e(8510), c.e(4526), c.e(4555), c.e(4483), c.e(824), c.e(3568)]).then(c.bind(c, 61396));
                        await m(i, e, t)
                    }
                    ,
                    reviewForm: async (e, t) => {
                        const { ReviewFormWidget: i } = await Promise.all([c.e(4222), c.e(5810), c.e(1661), c.e(7956), c.e(2693), c.e(8510), c.e(3144), c.e(4526), c.e(6020), c.e(8040), c.e(4555), c.e(4483), c.e(4371), c.e(824), c.e(4307), c.e(3416), c.e(547), c.e(4469), c.e(5803), c.e(4517), c.e(3351), c.e(2252), c.e(8347)]).then(c.bind(c, 37008));
                        await m(i, e, t)
                    }
                },
                reactionsCount: async (e, t) => {
                    const { ReactionsCountWidget: i } = await Promise.all([c.e(4222), c.e(5810), c.e(1661), c.e(7956), c.e(2693), c.e(8510), c.e(4526), c.e(4555), c.e(824), c.e(1901)]).then(c.bind(c, 37606));
                    await m(i, e, t)
                }
            },
            courseList: {
                courseList: async (e, t) => {
                    const { CourseList: i } = await Promise.all([c.e(4222), c.e(5810), c.e(1661), c.e(7956), c.e(2693), c.e(8510), c.e(9299), c.e(251), c.e(4555), c.e(4371), c.e(547), c.e(9353)]).then(c.bind(c, 6019));
                    await m(i, e, t)
                }
            },
            newsletter: {
                newsletterSignUp: async (e, t) => {
                    const { NewsletterSignUp: i } = await Promise.all([c.e(4222), c.e(5810), c.e(1661), c.e(7956), c.e(2693), c.e(8510), c.e(7228), c.e(4555), c.e(4371), c.e(3082)]).then(c.bind(c, 27067));
                    await m(i, e, t)
                }
            },
            login: {
                button: async (e, t) => {
                    const { LoginButtonWidget: i } = await Promise.all([c.e(4222), c.e(5810), c.e(1661), c.e(8510), c.e(7435), c.e(8881)]).then(c.bind(c, 66031));
                    await m(i, e, t)
                }
                ,
                profileFlyout: async (e, t) => {
                    const { ProfileFlyoutWidget: i } = await Promise.all([c.e(4222), c.e(5810), c.e(1661), c.e(8510), c.e(6018), c.e(7435), c.e(9500)]).then(c.bind(c, 44860));
                    await m(i, e, t)
                }
            },
            salesReceipt: {
                salesReceipt: async (e, t) => {
                    const { SalesReceipt: i } = await Promise.all([c.e(4222), c.e(5810), c.e(1661), c.e(7956), c.e(2693), c.e(8510), c.e(5015), c.e(6130), c.e(4555), c.e(4483), c.e(4371), c.e(8099), c.e(5314), c.e(8600), c.e(9290), c.e(300)]).then(c.bind(c, 26013));
                    await m(i, e, t)
                }
            },
            stores: async (e, t) => {
                const { Storefinder: i } = await Promise.all([c.e(4222), c.e(5810), c.e(1661), c.e(7956), c.e(8510), c.e(3144), c.e(6130), c.e(9299), c.e(9126), c.e(7434), c.e(6018), c.e(736), c.e(4555), c.e(4371), c.e(5433)]).then(c.bind(c, 5236));
                await m(i, e, t)
            }
            ,
            search: {
                box: async (e, t) => {
                    const { Search: i } = await Promise.all([c.e(4222), c.e(5810), c.e(1661), c.e(7956), c.e(8510), c.e(9299), c.e(7434), c.e(4555), c.e(6424), c.e(913)]).then(c.bind(c, 44104));
                    await m(i, e, t)
                }
                ,
                results: async (e, t) => {
                    const { SearchResults: i } = await Promise.all([c.e(4222), c.e(5810), c.e(1661), c.e(7956), c.e(2693), c.e(8510), c.e(5015), c.e(6130), c.e(9299), c.e(2072), c.e(9126), c.e(7434), c.e(6018), c.e(4555), c.e(4483), c.e(4371), c.e(8099), c.e(6424), c.e(5314), c.e(5782), c.e(4068)]).then(c.bind(c, 98337));
                    await m(i, e, t)
                }
                ,
                input: async (e, t) => {
                    const { SearchInput: i } = await Promise.all([c.e(5810), c.e(1661), c.e(7956), c.e(9299), c.e(7434), c.e(4555), c.e(6424), c.e(4038)]).then(c.bind(c, 34019));
                    await m(i, e, t)
                }
            },
            shareButtons: async (e, t) => {
                const { ShareButtons: i } = await Promise.all([c.e(5810), c.e(1661), c.e(7956), c.e(2693), c.e(4555), c.e(9048)]).then(c.bind(c, 33868));
                await m(i, e, t)
            }
            ,
            warranty: {
                warranties: async (e, t) => {
                    const { Warranties: i } = await Promise.all([c.e(4222), c.e(5810), c.e(1661), c.e(7956), c.e(2693), c.e(8510), c.e(1293), c.e(4555), c.e(4371), c.e(8600), c.e(1374)]).then(c.bind(c, 12930));
                    await m(i, e, t)
                }
            }
        }
    }
}
)();
