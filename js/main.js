"use strict";

function _toConsumableArray(e) {
    return _arrayWithoutHoles(e) || _iterableToArray(e) || _unsupportedIterableToArray(e) || _nonIterableSpread();
}

function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function _unsupportedIterableToArray(e, t) {
    if (e) {
        if ("string" == typeof e) return _arrayLikeToArray(e, t);
        var r = Object.prototype.toString.call(e).slice(8, -1);
        return "Object" === r && e.constructor && (r = e.constructor.name), "Map" === r || "Set" === r ? Array.from(e) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? _arrayLikeToArray(e, t) : void 0;
    }
}

function _iterableToArray(e) {
    if (("undefined" != typeof Symbol && null != e[Symbol.iterator]) || null != e["@@iterator"]) return Array.from(e);
}

function _arrayWithoutHoles(e) {
    if (Array.isArray(e)) return _arrayLikeToArray(e);
}

function _arrayLikeToArray(e, t) {
    (null == t || t > e.length) && (t = e.length);
    for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
    return n;
}

var px = new pixelit({
        from: document.getElementById("pixelitimg")
    }),
    paletteList = [
        [
            [7, 5, 5],
            [33, 25, 25],
            [82, 58, 42],
            [138, 107, 62],
            [193, 156, 77],
            [234, 219, 116],
            [160, 179, 53],
            [83, 124, 68],
            [66, 60, 86],
            [89, 111, 175],
            [107, 185, 182],
            [251, 250, 249],
            [184, 170, 176],
            [121, 112, 126],
            [148, 91, 40],
        ],
        [
            [13, 43, 69],
            [32, 60, 86],
            [84, 78, 104],
            [141, 105, 122],
            [208, 129, 89],
            [255, 170, 94],
            [255, 212, 163],
            [255, 236, 214],
        ],
        [
            [43, 15, 84],
            [171, 31, 101],
            [255, 79, 105],
            [255, 247, 248],
            [255, 129, 66],
            [255, 218, 69],
            [51, 104, 220],
            [73, 231, 236],
        ],
        [
            [48, 0, 48],
            [96, 40, 120],
            [248, 144, 32],
            [248, 240, 136],
        ],
        [
            [239, 26, 26],
            [172, 23, 23],
            [243, 216, 216],
            [177, 139, 139],
            [53, 52, 65],
            [27, 26, 29],
        ],
        [
            [26, 28, 44],
            [93, 39, 93],
            [177, 62, 83],
            [239, 125, 87],
            [255, 205, 117],
            [167, 240, 112],
            [56, 183, 100],
            [37, 113, 121],
            [41, 54, 111],
            [59, 93, 201],
            [65, 166, 246],
            [115, 239, 247],
            [244, 244, 244],
            [148, 176, 194],
            [86, 108, 134],
            [51, 60, 87],
        ],
        [
            [44, 33, 55],
            [118, 68, 98],
            [237, 180, 161],
            [169, 104, 104],
        ],
        [
            [171, 97, 135],
            [235, 198, 134],
            [216, 232, 230],
            [101, 219, 115],
            [112, 157, 207],
            [90, 104, 125],
            [33, 30, 51],
        ],
        [
            [140, 143, 174],
            [88, 69, 99],
            [62, 33, 55],
            [154, 99, 72],
            [215, 155, 125],
            [245, 237, 186],
            [192, 199, 65],
            [100, 125, 52],
            [228, 148, 58],
            [157, 48, 59],
            [210, 100, 113],
            [112, 55, 127],
            [126, 196, 193],
            [52, 133, 157],
            [23, 67, 75],
            [31, 14, 28],
        ],
        [
            [94, 96, 110],
            [34, 52, 209],
            [12, 126, 69],
            [68, 170, 204],
            [138, 54, 34],
            [235, 138, 96],
            [0, 0, 0],
            [92, 46, 120],
            [226, 61, 105],
            [170, 92, 61],
            [255, 217, 63],
            [181, 181, 181],
            [255, 255, 255],
        ],
        [
            [49, 31, 95],
            [22, 135, 167],
            [31, 213, 188],
            [237, 255, 177],
        ],
        [
            [21, 25, 26],
            [138, 76, 88],
            [217, 98, 117],
            [230, 184, 193],
            [69, 107, 115],
            [75, 151, 166],
            [165, 189, 194],
            [255, 245, 247],
        ],
    ],
    currentPalette = 0,
    addPalette = function() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
            t = JSON.parse(localStorage.getItem("customPalettes"));
        null == t && (t = []), t.push(e), localStorage.setItem("customPalettes", JSON.stringify(t));
    },
    pullFromLocalStorage = function() {
        var e = JSON.parse(localStorage.getItem("customPalettes"));
        return null == e && (e = []), e;
    },
    rgbToInt = function(e) {
        return [parseInt(e.substring(1, 3), 16), parseInt(e.substring(3, 5), 16), parseInt(e.substring(5, 7), 16)];
    },
    removeDuplicates = function(e) {
        for (var t = [], r = 0; r < e.length; r++) - 1 == t.indexOf(e[r]) && t.push(e[r]);
        return t;
    };
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("pixlInput").onchange = function(t) {
        var r = new Image();
        (r.src = URL.createObjectURL(this.files[0])),
        (r.onload = function() {
            px.setFromImgSource(r.src), e();
        });
    };
    var e = function() {
        document.querySelector(".loader").classList.toggle("active"),
            setTimeout(function() {
                document.querySelector(".loader").classList.toggle("active");
            }, 800),
            px.setScale(t.value).setPalette(paletteList[currentPalette]).draw().pixelate(),
            r.checked && px.convertGrayscale(),
            n.checked && px.convertPalette(),
            a.value && px.setMaxHeight(a.value).resizeImage(),
            o.value && px.setMaxWidth(o.value).resizeImage();
    };
    !(function() {
        document.querySelector("#palettecolor").innerHTML = "";
        var e = pullFromLocalStorage();
        (paletteList = [].concat(_toConsumableArray(paletteList), _toConsumableArray(e))).forEach(function(e, t) {
            var r = document.createElement("option");
            (r.value = t),
            e.forEach(function(e) {
                    var t = document.createElement("div");
                    (t.classList = "colorblock"), (t.style.backgroundColor = "rgba(".concat(e[0], ",").concat(e[1], ",").concat(e[2], ",1)")), r.appendChild(t);
                }),
                document.getElementById("paletteselector").appendChild(r);
        });
    })(),
    new SlimSelect({
        hideSelectedOption: !0,
        showSearch: !1,
        select: "#paletteselector",
        onChange: function(t) {
            (currentPalette = t.value), (n.checked = !0), e();
        },
    });
    var t = document.querySelector("#blocksize");
    t.addEventListener("change", function(t) {
        (document.querySelector("#blockvalue").innerText = this.value), e();
    });
    var r = document.querySelector("#greyscale");
    r.addEventListener("change", e);
    var n = document.querySelector("#palette");
    n.addEventListener("change", e);
    var a = document.querySelector("#maxheight");
    a.addEventListener("change", e);
    var o = document.querySelector("#maxwidth");
    o.addEventListener("change", e),
        document.querySelector("#downloadimage").addEventListener("click", function(e) {
            px.saveImage();
        }),
        e();
});
