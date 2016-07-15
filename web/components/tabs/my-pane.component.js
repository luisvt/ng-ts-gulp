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
    var MyPaneComponent = (function () {
        function MyPaneComponent() {
        }
        MyPaneComponent.prototype.$onInit = function () {
            this.tabsCtrl.addPane(this);
            console.log(this);
        };
        ;
        MyPaneComponent = __decorate([
            at_angular_1.Component({
                name: 'myPane',
                transclude: true,
                require: {
                    tabsCtrl: '^myTabs'
                },
                bindings: {
                    header: '@'
                },
                controller: MyPaneComponent,
                templateUrl: 'src/components/tabs/my-pane.component.html'
            })
        ], MyPaneComponent);
        return MyPaneComponent;
    }());
    exports.MyPaneComponent = MyPaneComponent;
});
//# sourceMappingURL=my-pane.component.js.map