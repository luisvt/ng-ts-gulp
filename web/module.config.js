(function (factory) {
    if (typeof module === 'object' && typeof module.exports === 'object') {
        var v = factory(require, exports); if (v !== undefined) module.exports = v;
    }
    else if (typeof define === 'function' && define.amd) {
        define(["require", "exports", 'angular', 'ngts-annotations/src/at-angular', './components/hero-table', './components/hero-list.component', './components/hero-detail.component', './components/editable-field.component', './services/heroes.service'], factory);
    }
})(function (require, exports) {
    "use strict";
    require('angular');
    var at_angular_1 = require('ngts-annotations/src/at-angular');
    var hero_table_1 = require('./components/hero-table');
    var hero_list_component_1 = require('./components/hero-list.component');
    var hero_detail_component_1 = require('./components/hero-detail.component');
    var editable_field_component_1 = require('./components/editable-field.component');
    var heroes_service_1 = require('./services/heroes.service');
    exports.heroApp = at_angular_1.autoDeclare('heroApp', [], [
        hero_table_1.HeroTableComponent,
        hero_list_component_1.HeroListComponent,
        hero_detail_component_1.HeroDetailComponent,
        editable_field_component_1.EditableFieldComponent,
        heroes_service_1.HeroesService
    ]);
});
//# sourceMappingURL=module.config.js.map