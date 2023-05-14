(()=>{
    "use strict";
    function e(e, n) {
        for (var a = 0; a < n.length; a++) {
            var r = n[a];
            r.enumerable = r.enumerable || !1,
            r.configurable = !0,
            "value"in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r)
        }
    }
    var n = function(e) {
        if (void 0 === e)
            return "";
        var n = String(e);
        return "0" === (n = (n = n.replace(/,/g, " ")).replace(/"/g, " ")) ? "" : n = n.replace(/ {2}/g, " ").trim()
    }
      , a = function(e) {
        for (var n = "ABCDEFGHIJKLMNOPQRSTUVWXYZ", a = "", r = e; r >= n.length; ) {
            var i = r % n.length
              , t = Math.floor(r / n.length);
            a = n[i] + a,
            r = t - 1
        }
        return n[r] + a
    }
      , r = function() {
        function n() {
            !function(e, n) {
                if (!(e instanceof n))
                    throw new TypeError("Cannot call a class as a function")
            }(this, n),
            this.fieldnames = [],
            this.rows = []
        }
        var r, i;
        return r = n,
        (i = [{
            key: "shallowClone",
            value: function() {
                var e = new n;
                return e.fieldnames = this.fieldnames.slice(),
                e.rows = this.rows.slice(),
                e
            }
        }, {
            key: "length",
            value: function() {
                return this.rows.length
            }
        }, {
            key: "index",
            value: function(e) {
                return this.fieldnames.indexOf(e)
            }
        }, {
            key: "appendColumn",
            value: function(e) {
                this.fieldnames.push(e);
                for (var n = 0; n < this.rows.length; n++)
                    this.rows[n].push("")
            }
        }, {
            key: "appendColumns",
            value: function(e) {
                this.fieldnames = this.fieldnames.concat(e);
                for (var n = 0; n < this.rows.length; n++)
                    for (var a = 0; a < e.length; a++)
                        this.rows[n].push("")
            }
        }, {
            key: "insertColumn",
            value: function(e, n) {
                this.fieldnames.splice(e, 0, n);
                for (var a = 0; a < this.rows.length; a++)
                    this.rows[a].splice(e, 0, "")
            }
        }, {
            key: "removeColumnByIndex",
            value: function(e) {
                this.fieldnames.splice(e, 1);
                for (var n = 0; n < this.rows.length; n++)
                    this.rows[n].splice(e, 1)
            }
        }, {
            key: "removeColumnByName",
            value: function(e) {
                for (var n = 0; n < this.fieldnames.length; n++)
                    if (this.fieldnames[n] === e)
                        return void this.removeColumnByIndex(n)
            }
        }, {
            key: "removeEmptyColumns",
            value: function() {
                for (var e = 0; e < this.fieldnames.length; e++) {
                    for (var n = !0, a = 0; a < this.rows.length; a++)
                        if ("" !== this.rows[a][e]) {
                            n = !1;
                            break
                        }
                    if (!0 === n)
                        return this.removeColumnByIndex(e),
                        void this.removeEmptyColumns()
                }
            }
        }, {
            key: "fromString",
            value: function(e) {
                if (-1 !== e.indexOf('"'))
                    return 'Double-quotes (") are disallowed. Double-quotes can be automatically inserted by spreadsheet software when a field contains a comma. Make sure to delete all in-field commas.';
                for (var n = e.trim().split("\n"), r = n[0].split(",").map((function(e) {
                    return e.trim()
                }
                )), i = [], t = 1; t < n.length; ++t) {
                    var o = n[t].split(",").map((function(e) {
                        return e.trim()
                    }
                    ));
                    i.push(o)
                }
                for (var s = 0; s < r.length; ++s)
                    if ("" === r[s])
                        return "Column " + a(s) + " is missing a column name.";
                for (var u = 0; u < i.length; ++u)
                    if (i[u].length !== r.length) {
                        return "Row " + (u + 2) + " has " + i[u].length + " columns," + " but the first row has " + r.length + " columns."
                    }
                return this.fieldnames = r,
                this.rows = i,
                this
            }
        }, {
            key: "toString",
            value: function() {
                for (var e = this.fieldnames.join(","), n = [], a = 0; a < this.rows.length; a++)
                    n.push(this.rows[a].join(","));
                return e + "\n" + n.join("\n") + "\n"
            }
        }]) && e(r.prototype, i),
        n
    }()
      , i = function(e, n, a) {
        if ("" === e)
            return "";
        if ("SHW" === e) {
            var r = n.index("Sex");
            return "F" === n.rows[a][r] ? "90+" : "140+"
        }
        var i = e.endsWith("+");
        i && (e = e.replace("+", ""));
        var t = Number(e);
        if (!isNaN(t)) {
            var o = t / 2.20462262;
            o = Math.round(2 * o) / 2;
            var s = new Intl.NumberFormat("en-US",{
                useGrouping: !1,
                maximumFractionDigits: 1
            }).format(o);
            switch (s) {
            case "47.5":
                s = "48";
                break;
            case "51.5":
                s = "52";
                break;
            case "67":
                s = "67.5";
                break;
            case "82":
                s = "82.5";
                break;
            case "124.5":
                s = "125";
                break;
            case "139.5":
                s = "140";
                break;
            case "52.5":
                s = "53";
                break;
            case "119.5":
                s = "120";
                break;
            case "42.5":
                s = "43";
                break;
            case "46.5":
                s = "47";
                break;
            case "56.5":
                s = "57";
                break;
            case "62.5":
                s = "63";
                break;
            case "71.5":
                s = "72"
            }
            return i && (s += "+"),
            s
        }
    };
    function t(e, n) {
        (null == n || n > e.length) && (n = e.length);
        for (var a = 0, r = new Array(n); a < n; a++)
            r[a] = e[a];
        return r
    }
    var o, s, u, l, c, d, g, m, f, h, S, v = function(e, n) {
        var a = e.index("Division");
        return [a >= 0 ? n[a].toLowerCase() : "open", n[e.index("Equipment")], n[e.index("Sex")], n[e.index("Event")], n[e.index("WeightClassKg")]].join(",")
    }, A = function(e) {
        if ("string" != typeof e)
            return !1;
        if ("" === e)
            return !1;
        if (!e.match(/^[0-9]+$/))
            return !1;
        if (e.startsWith("0"))
            return !1;
        var n = Number(e);
        return !(isNaN(n) || !Number.isInteger(n) || n <= 0)
    }, w = {
        AFG: "Afghanistan",
        ALB: "Albania",
        ALG: "Algeria",
        AHO: "Netherlands Antilles",
        AND: "Andorra",
        ANG: "Angola",
        ANT: "Antigua and Barbuda",
        ARG: "Argentina",
        ARM: "Armenia",
        ARU: "Aruba",
        ASA: "American Samoa",
        AUS: "Australia",
        AUT: "Austria",
        AZE: "Azerbaijan",
        BAH: "Bahamas",
        BAN: "Bangladesh",
        BAR: "Barbados",
        BDI: "Burundi",
        BEL: "Belgium",
        BEN: "Benin",
        BER: "Bermuda",
        BHU: "Bhutan",
        BIH: "Bosnia and Herzegovina",
        BIZ: "Belize",
        BLR: "Belarus",
        BOL: "Bolivia",
        BOT: "Botswana",
        BRA: "Brazil",
        BRN: "Bahrain",
        BRU: "Brunei",
        BUL: "Bulgaria",
        BUR: "Burkina Faso",
        CAF: "Central African Republic",
        CAM: "Cambodia",
        CAN: "Canada",
        CAY: "Cayman Islands",
        CGO: "Congo",
        CHA: "Chad",
        CHI: "Chile",
        CHN: "China",
        CIV: "Ivory Coast",
        IVC: "Ivory Coast",
        CMR: "Cameroon",
        COD: "Democratic Republic of the Congo",
        COK: "Cook Islands",
        COL: "Colombia",
        COM: "Comoros",
        CPV: "Cabo Verde",
        CRC: "Costa Rica",
        CRI: "Costa Rica",
        CRO: "Croatia",
        CUB: "Cuba",
        CYP: "Cyprus",
        CZE: "Czechia",
        CZR: "Czechia",
        TCH: "Czechia",
        DAN: "Denmark",
        DEN: "Denmark",
        DNK: "Denmark",
        DJI: "Djibouti",
        DMA: "Dominica",
        DOM: "Dominican Republic",
        ECU: "Ecuador",
        EGY: "Egypt",
        ERI: "Eritrea",
        ESA: "El Salvador",
        ESP: "Spain",
        SPA: "Spain",
        EST: "Estonia",
        ETH: "Ethiopia",
        FIJ: "Fiji",
        FJ: "Fiji",
        FIN: "Finland",
        FRA: "France",
        FRG: "West Germany",
        FGR: "West Germany",
        FSM: "Federated States of Micronesia",
        GAB: "Gabon",
        GAM: "The Gambia",
        GBR: "UK",
        GBS: "Guinea-Bissau",
        GEO: "Georgia",
        ENG: "England",
        GEQ: "Equatorial Guinea",
        GER: "Germany",
        GHA: "Ghana",
        GRE: "Greece",
        GRN: "Grenada",
        GUA: "Guatemala",
        GUI: "Guinea",
        GUM: "Guam",
        GUY: "Guyana",
        HAI: "Haiti",
        HKG: "Hong Kong",
        HK: "Hong Kong",
        HON: "Honduras",
        HUN: "Hungary",
        INA: "Indonesia",
        IND: "India",
        IRI: "Iran",
        IRN: "Iran",
        IRE: "Ireland",
        IRL: "Ireland",
        IRQ: "Iraq",
        ISL: "Iceland",
        ICE: "Iceland",
        ICL: "Iceland",
        ISR: "Israel",
        ISV: "US Virgin Islands",
        USVI: "US Virgin Islands",
        ITA: "Italy",
        IVB: "British Virgin Islands",
        BVI: "British Virgin Islands",
        JAM: "Jamaica",
        JOR: "Jordan",
        JPN: "Japan",
        JAP: "Japan",
        KAZ: "Kazakhstan",
        KEN: "Kenya",
        KGZ: "Kyrgyzstan",
        KIR: "Kiribati",
        KOR: "South Korea",
        KOS: "Kosovo",
        KSA: "Saudi Arabia",
        KUW: "Kuwait",
        LAO: "Laos",
        LAT: "Latvia",
        LBA: "Libya",
        LYB: "Libya",
        LBN: "Lebanon",
        LIB: "Lebanon",
        LBR: "Liberia",
        LCA: "Saint Lucia",
        LES: "Lesotho",
        LIE: "Liechtenstein",
        LTU: "Lithuania",
        LIT: "Lithuania",
        LTH: "Lithuania",
        LUX: "Luxembourg",
        MAD: "Madagascar",
        MAR: "Morocco",
        MAS: "Malaysia",
        MAW: "Malawi",
        MDA: "Moldova",
        MDV: "Maldives",
        MEX: "Mexico",
        MGL: "Mongolia",
        MHL: "Marshall Islands",
        MKD: "North Macedonia",
        MLI: "Mali",
        MLT: "Malta",
        MNE: "Montenegro",
        MON: "Monaco",
        MOZ: "Mozambique",
        MRI: "Mauritius",
        MTN: "Mauritania",
        MYA: "Myanmar",
        NAM: "Namibia",
        NCA: "Nicaragua",
        NED: "Netherlands",
        NET: "Netherlands",
        NLD: "Netherlands",
        NTH: "Netherlands",
        HOL: "Netherlands",
        NEP: "Nepal",
        NGR: "Nigeria",
        NIG: "Niger",
        NOR: "Norway",
        NRU: "Nauru",
        NZL: "New Zealand",
        NZ: "New Zealand",
        OMA: "Oman",
        OMN: "Oman",
        PAK: "Pakistan",
        PAN: "Panama",
        PAR: "Paraguay",
        PER: "Peru",
        PHI: "Philippines",
        PLE: "Palestine",
        PLW: "Palau",
        PMR: "Transnistria",
        PNG: "Papua New Guinea",
        POL: "Poland",
        POR: "Portugal",
        PRK: "North Korea",
        PUR: "Puerto Rico",
        QAT: "Qatar",
        ROU: "Romania",
        ROM: "Romania",
        RSA: "South Africa",
        RUS: "Russia",
        RWA: "Rwanda",
        SAM: "Samoa",
        SEN: "Senegal",
        SEY: "Seychelles",
        SGP: "Singapore",
        SIN: "Singapore",
        SKN: "Saint Kitts and Nevis  ",
        SLE: "Sierra Leone",
        SLO: "Slovenia",
        SMR: "San Marino",
        SOL: "Solomon Islands",
        SOM: "Somalia",
        SRB: "Serbia",
        SCG: "Serbia and Montenegro",
        SRI: "Sri Lanka",
        SSD: "South Sudan",
        SOV: "USSR",
        URS: "USSR",
        STP: "São Tomé and Príncipe",
        SUD: "Sudan",
        SUI: "Switzerland",
        SUR: "Suriname",
        SVK: "Slovakia",
        SWE: "Sweden",
        SVE: "Sweden",
        SWZ: "Eswatini",
        SYR: "Syria",
        TAH: "Tahiti",
        TAN: "Tanzania",
        TGA: "Tonga",
        THA: "Thailand",
        TJK: "Tajikistan",
        TKM: "Turkmenistan",
        TLS: "East Timor",
        TOG: "Togo",
        TPE: "Taiwan",
        TAI: "Taiwan",
        TTO: "Trinidad and Tobago",
        TT: "Trinidad and Tobago",
        TRI: "Trinidad and Tobago",
        TUN: "Tunisia",
        TUR: "Turkey",
        TUV: "Tuvalu",
        UGA: "Uganda",
        UKR: "Ukraine",
        URU: "Uruguay",
        USA: "USA",
        UZB: "Uzbekistan",
        VAN: "Vanuatu",
        VEN: "Venezuela",
        VIE: "Vietnam",
        VIN: "Saint Vincent and the Grenadines",
        YEM: "Yemen",
        YUG: "Yugoslavia",
        ZAM: "Zambia",
        ZIM: "Zimbabwe",
        Belorussia: "Belarus",
        Brasil: "Brazil",
        Britain: "UK",
        Can: "Canada",
        "Cape Verde": "Cabo Verde",
        "Chinese Taipei": "Taiwan",
        "C.Taipei": "Taiwan",
        "C. Taipei": "Taiwan",
        "Chinese Tai.": "Taiwan",
        "Chin.Taipei": "Taiwan",
        "Czech Republic": "Czechia",
        Danmark: "Denmark",
        Dannmark: "Denmark",
        Eng: "England",
        Estoniya: "Estonia",
        Equador: "Ecuador",
        FIJI: "Fiji",
        Fra: "France",
        "Great Britain": "UK",
        "G. Brtain": "UK",
        "G. Britain": "UK",
        Holland: "Netherlands",
        Ísland: "Iceland",
        Island: "Iceland",
        Jap: "Japan",
        Kazahkstan: "Kazakhstan",
        Kazakstan: "Kazakhstan",
        KIRI: "Kiribati",
        Luxembg: "Luxembourg",
        "N. Ireland": "N.Ireland",
        NCAL: "New Caledonia",
        "N Cald": "New Caledonia",
        "N.Cald": "New Caledonia",
        "N. Caledonia": "New Caledonia",
        "New Zeeland": "New Zealand",
        NIUE: "Niue",
        Norge: "Norway",
        Norwegen: "Norway",
        Perú: "Peru",
        "R.S.Afrika": "South Africa",
        "R.South Africa": "South Africa",
        "Slovak Republic": "Slovakia",
        "South-Africa": "South Africa",
        "South Afrika": "South Africa",
        "Soviet Union": "USSR",
        Sverige: "Sweden",
        "Trinidad&Tobago": "Trinidad and Tobago",
        "Trinidad & Tobago": "Trinidad and Tobago",
        "Trinidad And Tobago": "Trinidad and Tobago",
        Ukraina: "Ukraine",
        Україна: "Ukraine",
        Украина: "Ukraine",
        "United Arab Emirates": "UAE",
        "Un.Emirates": "UAE",
        "US.America": "USA",
        "U.S..America": "USA",
        "U.S. America": "USA",
        "US. America": "USA",
        "US America": "USA",
        "U.S.America": "USA",
        "United States of America": "USA",
        "United States": "USA",
        US: "USA",
        "Virgin Is.": "US Virgin Islands",
        Whiterussia: "Belarus"
    }, N = function(e) {
        return "" == e ? 0 : (e = e.replace(/ /g, ""),
        Number(e))
    }, T = function(e, a) {
        var r = "Best3".concat(a, "Kg");
        e.index(r) < 0 && e.appendColumn(r);
        var i = e.index(r)
          , t = e.index("".concat(a, "1Kg"));
        if (t < 0)
            return "Missing column '".concat(a, "1Kg.'\n");
        var o = e.index("".concat(a, "2Kg"));
        if (o < 0)
            return "Missing column '".concat(a, "2Kg.'\n");
        var s = e.index("".concat(a, "3Kg"));
        if (s < 0)
            return "Missing column '".concat(a, "3Kg.'\n");
        for (var u = e.index("Event"), l = 0; l < e.rows.length; ++l)
            if (e.rows[l][u].includes(a.charAt(0))) {
                for (var c = "", d = 0, g = [t, o, s]; d < g.length; d++) {
                    var m = g[d];
                    N(e.rows[l][m]) > N(c) && (c = e.rows[l][m])
                }
                N(c) > 0 && (e.rows[l][i] = n(c))
            } else
                e.rows[l][i] = "";
        return ""
    };
    function C(e) {
        return e.hasOwnProperty("Error") ? "Error: " + e.Error : "Warning: " + e.Warning
    }
    function p() {
        var e = new XMLHttpRequest;
        e.open("POST", "/dev/checker"),
        e.responseType = "text",
        e.setRequestHeader("Content-Type", "application/json;charset=UTF-8"),
        f.innerText = "",
        h.innerText = "",
        S.innerText = "",
        e.onreadystatechange = function() {
            if (this.readyState === XMLHttpRequest.DONE && 200 === this.status) {
                var e = JSON.parse(this.responseText);
                if (null !== e.io_error)
                    return void (f.innerText = e.io_error);
                e.meet_messages.length > 0 ? h.innerText = e.meet_messages.map(C).join("\n") : h.innerText = "Pass! :)",
                e.entries_messages.length > 0 ? S.innerText = e.entries_messages.map(C).join("\n") : 0 === e.meet_messages.length && (S.innerText = "Pass! :)")
            }
        }
        ;
        var n = {
            meet: g.value,
            entries: m.value
        };
        e.send(JSON.stringify(n))
    }
    function E(e) {
        e.value = e.value.replace(/\t/g, ",")
    }
    function b() {
        o = document.getElementById("checkButton"),
        s = document.getElementById("toKgButton"),
        u = document.getElementById("calcPlaceButton"),
        l = document.getElementById("standardiseCountriesButton"),
        c = document.getElementById("roundKgButton"),
        d = document.getElementById("calcBestLiftsButton"),
        g = document.getElementById("meetTextArea"),
        m = document.getElementById("entriesTextArea"),
        f = document.getElementById("ioErrorPre"),
        h = document.getElementById("meetErrorPre"),
        S = document.getElementById("entriesErrorPre"),
        o.addEventListener("click", p, !1),
        s.addEventListener("click", (function() {
            var e = new r
              , a = e.fromString(m.value);
            "string" != typeof a && "string" != typeof (a = function(e) {
                var a, r = e.shallowClone();
                if (r.index("Sex") < 0)
                    return "Converting to Kg requires a 'Sex' column to handle SHW WeightClassLBS";
                for (var t = 0; t < r.fieldnames.length; ++t) {
                    var o = r.fieldnames[t].toLowerCase();
                    if (!1 !== o.includes("lbs")) {
                        if (o.includes("weightclass"))
                            for (var s = 0; s < r.rows.length; ++s) {
                                var u = r.rows[s][t]
                                  , l = i(u, e, s);
                                if (void 0 === l)
                                    return "Error in '".concat(r.fieldnames[t], "' row ").concat(s + 1, ": '").concat(u, "' not a number");
                                r.rows[s][t] = n(l)
                            }
                        else
                            for (var c = 0; c < r.rows.length; ++c) {
                                var d = r.rows[c][t]
                                  , g = Number(d);
                                if (isNaN(g))
                                    return "Error in '".concat(r.fieldnames[t], "' row ").concat(c + 1, ": '").concat(d, "' not a number");
                                r.rows[c][t] = n((void 0,
                                a = g / 2.20462262,
                                new Intl.NumberFormat("en-US",{
                                    useGrouping: !1,
                                    maximumFractionDigits: 2
                                }).format(a)))
                            }
                        r.fieldnames[t] = r.fieldnames[t].replace(/lbs/i, "Kg")
                    }
                }
                return r
            }(e = a)) ? (e = a,
            m.value = e.toString()) : S.innerText = a
        }
        ), !1),
        u.addEventListener("click", (function() {
            var e = new r
              , a = e.fromString(m.value);
            "string" != typeof a && "string" != typeof (a = function(e) {
                var a = e.shallowClone();
                if (a.index("Equipment") < 0)
                    return "Missing column 'Equipment'";
                if (a.index("Sex") < 0)
                    return "Missing column 'Sex'";
                if (a.index("Event") < 0)
                    return "Missing column 'Event'";
                if (a.index("WeightClassKg") < 0)
                    return "Missing column 'WeightClassKg'";
                if (a.index("TotalKg") < 0)
                    return "Missing column 'TotalKg'";
                if (a.index("Place") >= 0)
                    for (var r = a.index("Place"), i = 0; i < a.rows.length; ++i) {
                        var o = a.rows[i][r];
                        (A(o) || "DQ" === o) && (a.rows[i][r] = "")
                    }
                else
                    a.appendColumn("Place");
                var s = a.index("Place")
                  , u = a.index("TotalKg")
                  , l = u;
                a.index("BodyweightKg") >= 0 && (l = a.index("BodyweightKg"));
                for (var c = new Map, d = 0; d < a.rows.length; ++d)
                    if (!a.rows[d][s]) {
                        var g = v(a, a.rows[d]);
                        if (c.has(g) ? c.get(g).push(a.rows[d]) : c.set(g, [a.rows[d]]),
                        isNaN(Number(a.rows[d][u])))
                            return "Error in 'TotalKg' row ".concat(d + 1, ": '").concat(a.rows[d][u], "' not a number");
                        if (l !== u && isNaN(Number(a.rows[d][l])))
                            return "Error in 'BodyweightKg' row ".concat(d + 1, ": '").concat(a.rows[d][l], "' not a number")
                    }
                var m, f = function(e, n) {
                    var a = "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (!a) {
                        if (Array.isArray(e) || (a = function(e, n) {
                            if (e) {
                                if ("string" == typeof e)
                                    return t(e, n);
                                var a = Object.prototype.toString.call(e).slice(8, -1);
                                return "Object" === a && e.constructor && (a = e.constructor.name),
                                "Map" === a || "Set" === a ? Array.from(e) : "Arguments" === a || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a) ? t(e, n) : void 0
                            }
                        }(e)) || n && e && "number" == typeof e.length) {
                            a && (e = a);
                            var r = 0
                              , i = function() {};
                            return {
                                s: i,
                                n: function() {
                                    return r >= e.length ? {
                                        done: !0
                                    } : {
                                        done: !1,
                                        value: e[r++]
                                    }
                                },
                                e: function(e) {
                                    throw e
                                },
                                f: i
                            }
                        }
                        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                    }
                    var o, s = !0, u = !1;
                    return {
                        s: function() {
                            a = a.call(e)
                        },
                        n: function() {
                            var e = a.next();
                            return s = e.done,
                            e
                        },
                        e: function(e) {
                            u = !0,
                            o = e
                        },
                        f: function() {
                            try {
                                s || null == a.return || a.return()
                            } finally {
                                if (u)
                                    throw o
                            }
                        }
                    }
                }(c.values());
                try {
                    for (f.s(); !(m = f.n()).done; ) {
                        var h = m.value;
                        h.sort((function(e, n) {
                            var a = Number(e[u])
                              , r = Number(n[u]);
                            return a !== r ? r - a : Number(e[l]) - Number(n[l])
                        }
                        ));
                        for (var S = 1, w = 0; w < h.length; ++w)
                            Number(h[w][u]) > 0 ? h[w][s] = n(S++) : h[w][s] = n("DQ")
                    }
                } catch (e) {
                    f.e(e)
                } finally {
                    f.f()
                }
                return a
            }(e = a)) ? (e = a,
            m.value = e.toString()) : S.innerText = a
        }
        ), !1),
        l.addEventListener("click", (function() {
            var e = new r
              , n = e.fromString(m.value);
            "string" != typeof n && "string" != typeof (n = function(e) {
                var n = e.shallowClone()
                  , a = n.index("Country");
                if (n.index("Country") < 0)
                    return n;
                for (var r = 0; r < n.rows.length; ++r) {
                    var i = n.rows[r][a];
                    i in w && (n.rows[r][a] = w[i])
                }
                return n
            }(e = n)) ? (e = n,
            m.value = e.toString()) : S.innerText = n
        }
        ), !1),
        c.addEventListener("click", (function() {
            var e = new r
              , n = e.fromString(m.value);
            "string" != typeof n && "string" != typeof (n = function(e) {
                for (var n = e.shallowClone(), a = ["Squat1Kg", "Squat2Kg", "Squat3Kg", "Squat4Kg", "Best3SquatKg", "Bench1Kg", "Bench2Kg", "Bench3Kg", "Bench4Kg", "Best3BenchKg", "Deadlift1Kg", "Deadlift2Kg", "Deadlift3Kg", "Deadlift4Kg", "Best3DeadliftKg", "TotalKg"], r = a.map((function(e) {
                    return n.index(e)
                }
                )), i = 0; i < n.rows.length; ++i)
                    for (var t = n.rows[i], o = 0; o < r.length; ++o) {
                        var s = a[o]
                          , u = r[o];
                        if (!(u < 0 || "" === t[u])) {
                            var l = Number(t[u]);
                            if (isNaN(l))
                                return "Error in '".concat(s, "' row ").concat(i + 1, ": '").concat(n.rows[i][u], "' not a number");
                            n.rows[i][u] = (.5 * Math.round(2 * l)).toString()
                        }
                    }
                return n
            }(e = n)) ? (e = n,
            m.value = e.toString()) : S.innerText = n
        }
        ), !1),
        d.addEventListener("click", (function() {
            var e = new r
              , n = e.fromString(m.value);
            "string" != typeof n && "string" != typeof (n = function(e) {
                var n = e.shallowClone();
                if (n.index("Event") < 0)
                    return "Missing column 'Event'";
                var a = "";
                return n.index("Squat1Kg") >= 0 && (a += T(n, "Squat")),
                n.index("Bench1Kg") >= 0 && (a += T(n, "Bench")),
                n.index("Deadlift1Kg") >= 0 && (a += T(n, "Deadlift")),
                a || n
            }(e = n)) ? (e = n,
            m.value = e.toString()) : S.innerText = n
        }
        ), !1),
        g.addEventListener("paste", (function(e) {
            setTimeout((function() {
                E(e.target)
            }
            ), 0)
        }
        ), !1),
        m.addEventListener("paste", (function(e) {
            setTimeout((function() {
                E(e.target)
            }
            ), 0)
        }
        ), !1)
    }
    document.addEventListener("DOMContentLoaded", (function() {
        b()
    }
    ))
}
)();

