cordova.define("com.sag.sum.Calculator", function(require, exports, module) {
var exec = require('cordova/exec');
exports.getSumResult = function(arg0,arg1, success, error) {
    exec(success, error, "Calculator", "add", [arg0,arg1]);
};
exports.getminusResult = function(arg0,arg1, success, error) {
    exec(success, error, "Calculator", "sub", [arg0,arg1]);
};
exports.getintoResult = function(arg0,arg1, success, error) {
    exec(success, error, "Calculator", "mul", [arg0,arg1]);
};
exports.getdivResult = function(arg0,arg1, success, error) {
    exec(success, error, "Calculator", "div", [arg0,arg1]);
};

});
