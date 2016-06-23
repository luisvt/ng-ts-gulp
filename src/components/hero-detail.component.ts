import {heroApp} from "../mdoule.config";

class HeroDetailController {
    constructor() {}

    update = function (prop, value) {
        this.onUpdate({hero: this.hero, prop: prop, value: value});
    }
}

heroApp.component('heroDetail', {
    templateUrl: 'src/components/hero-detail.component.html',
    controller: HeroDetailController,
    bindings: {
        hero: '<',
        onDelete: '&',
        onUpdate: '&'
    }
});
