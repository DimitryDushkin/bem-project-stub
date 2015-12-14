var BEMHTML;
(function(global) {
var buildBemXjst = function(exports, __bem_xjst_libs__){
exports.apply = function () { return ""; };
    return exports;
};

var defineAsGlobal = true;
if(typeof module === "object" && typeof module.exports === "object") {
    exports["BEMHTML"] = buildBemXjst({}, {});
    defineAsGlobal = false;
}
if(typeof modules === "object") {
    modules.define("BEMHTML", [], function(provide) {
        provide(buildBemXjst({}, {}));
    });
    defineAsGlobal = false;
}
if(defineAsGlobal) {
    BEMHTML = buildBemXjst({}, {});
    global["BEMHTML"] = BEMHTML;
}
})(this);