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
    var HeroTableComponent = (function () {
        function HeroTableComponent() {
            this.heroes = [{
                    name: 'Superman',
                    location: ''
                }, {
                    name: 'Batman',
                    location: 'Wayne Manor'
                }];
        }
        HeroTableComponent = __decorate([
            at_angular_1.Component({
                name: 'heroTable',
                template: "\n<my-table items=\"$ctrl.heroes\">\n    <my-column header=\"Name\">\n        hello: {{item.name}}\n    </my-column>\n    <my-column header=\"Location\">\n        <header><i>Location</i></header>\n        loc: {{item.location}}\n        <footer>{{sum('location')}}</footer>\n    </my-column>\n</my-table>",
            })
        ], HeroTableComponent);
        return HeroTableComponent;
    }());
    exports.HeroTableComponent = HeroTableComponent;
});
//# sourceMappingURL=hero-table.js.map