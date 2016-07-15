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
    var MyTabsComponent = (function () {
        function MyTabsComponent() {
            this.panes = [];
        }
        MyTabsComponent.prototype.select = function (pane) {
            this.panes.forEach(function (pane) {
                pane.selected = false;
            });
            pane.selected = true;
        };
        MyTabsComponent.prototype.addPane = function (pane) {
            if (this.panes.length === 0) {
                this.select(pane);
            }
            this.panes.push(pane);
        };
        MyTabsComponent = __decorate([
            at_angular_1.Component({
                name: 'myTabs',
                transclude: true,
                controller: MyTabsComponent,
                templateUrl: 'src/components/tabs/my-tabs.component.html'
            })
        ], MyTabsComponent);
        return MyTabsComponent;
    }());
    exports.MyTabsComponent = MyTabsComponent;
});
//# sourceMappingURL=my-tabs.component.js.map