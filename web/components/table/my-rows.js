(function (factory) {
    if (typeof module === 'object' && typeof module.exports === 'object') {
        var v = factory(require, exports); if (v !== undefined) module.exports = v;
    }
    else if (typeof define === 'function' && define.amd) {
        define(["require", "exports", 'ngts-annotations/src/at-angular'], factory);
    }
})(function (require, exports) {
    "use strict";
    var at_angular_1 = require('ngts-annotations/src/at-angular');
    var MyRow = (function () {
        function MyRow() {
        }
        MyRow = __decorate([
            at_angular_1.Component({
                name: 'myRows',
                template: ""
            })
        ], MyRow);
        return MyRow;
    }());
    exports.MyRow = MyRow;
});
//# sourceMappingURL=my-rows.js.map