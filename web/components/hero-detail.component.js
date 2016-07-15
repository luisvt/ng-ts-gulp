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
    var HeroDetailComponent = (function () {
        function HeroDetailComponent() {
            this.update = function (prop, value) {
                this.onUpdate({ hero: this.hero, prop: prop, value: value });
            };
        }
        HeroDetailComponent = __decorate([
            at_angular_1.Component({
                name: 'heroDetail',
                templateUrl: 'components/hero-detail.component.html',
                bindings: {
                    hero: '<',
                    onDelete: '&',
                    onUpdate: '&'
                }
            })
        ], HeroDetailComponent);
        return HeroDetailComponent;
    }());
    exports.HeroDetailComponent = HeroDetailComponent;
});
//# sourceMappingURL=hero-detail.component.js.map