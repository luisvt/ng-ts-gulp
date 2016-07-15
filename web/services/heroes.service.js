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
    var HeroesService = (function () {
        /* @ngInject */
        function HeroesService($http) {
            this.$http = $http;
        }
        HeroesService.prototype.get = function (id) {
            return this.$http.get("heroes/" + id);
        };
        HeroesService.prototype.query = function (params) {
            return this.$http.get("heroes", params);
        };
        HeroesService = __decorate([
            at_angular_1.Service(),
            __param(0, at_angular_1.Inject('$http'))
        ], HeroesService);
        return HeroesService;
    }());
    exports.HeroesService = HeroesService;
});
//# sourceMappingURL=heroes.service.js.map