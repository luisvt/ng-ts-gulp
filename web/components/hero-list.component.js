(function (factory) {
    if (typeof module === 'object' && typeof module.exports === 'object') {
        var v = factory(require, exports); if (v !== undefined) module.exports = v;
    }
    else if (typeof define === 'function' && define.amd) {
        define(["require", "exports", '../services/heroes.service', 'ngts-annotations/src/at-angular'], factory);
    }
})(function (require, exports) {
    "use strict";
    var heroes_service_1 = require('../services/heroes.service');
    var at_angular_1 = require('ngts-annotations/src/at-angular');
    var HeroListComponent = (function () {
        function HeroListComponent(heroesService) {
            this.heroesService = heroesService;
            // This would be loaded by $http etc.
            this.list = [{
                    name: 'Superman',
                    location: ''
                }, {
                    name: 'Batman',
                    location: 'Wayne Manor'
                }];
        }
        HeroListComponent.prototype.updateHero = function (hero, prop, value) {
            hero[prop] = value;
        };
        HeroListComponent.prototype.deleteHero = function (hero) {
            var idx = this.list.indexOf(hero);
            if (idx >= 0) {
                this.list.splice(idx, 1);
            }
        };
        HeroListComponent = __decorate([
            at_angular_1.Component({
                name: 'heroList',
                templateUrl: 'components/hero-list.component.html',
            }),
            __param(0, at_angular_1.Inject(heroes_service_1.HeroesService.name))
        ], HeroListComponent);
        return HeroListComponent;
    }());
    exports.HeroListComponent = HeroListComponent;
});
//# sourceMappingURL=hero-list.component.js.map