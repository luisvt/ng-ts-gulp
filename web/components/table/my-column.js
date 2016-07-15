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
    var MyColumnComponent = (function () {
        function MyColumnComponent() {
        }
        MyColumnComponent.prototype.$onInit = function () {
            this.myTable.addColumn(this);
            console.log(this);
        };
        ;
        MyColumnComponent = __decorate([
            at_angular_1.Component({
                name: 'myColumn',
                bindings: {
                    header: '@'
                },
                transclude: true,
                require: {
                    myTable: '^myTable'
                },
                template: ''
            })
        ], MyColumnComponent);
        return MyColumnComponent;
    }());
    exports.MyColumnComponent = MyColumnComponent;
});
//# sourceMappingURL=my-column.js.map