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
    var MyTableComponent = (function () {
        function MyTableComponent() {
            this.columns = [];
        }
        MyTableComponent.prototype.addColumn = function (column) {
            this.columns.push(column);
        };
        MyTableComponent = __decorate([
            at_angular_1.Component({
                name: 'myTable',
                transclude: true,
                bindings: {
                    items: '<'
                },
                templateUrl: 'src/components/table/my-table.html',
                controller: MyTableComponent
            })
        ], MyTableComponent);
        return MyTableComponent;
    }());
    exports.MyTableComponent = MyTableComponent;
});
//# sourceMappingURL=my-table.js.map