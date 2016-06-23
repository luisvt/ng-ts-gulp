import {heroApp} from "../mdoule.config";
import {HeroesService} from "../services/heroes.service";
import ILogService = angular.ILogService;

/* @ngInject */
class HeroListController {
    constructor($log: ILogService, heroesService: HeroesService) {
        $log.info(HeroesService);
    }

    // This would be loaded by $http etc.
    list = [{
        name: 'Superman',
        location: ''
    }, {
        name: 'Batman',
        location: 'Wayne Manor'
    }];

    updateHero(hero, prop, value) {
        hero[prop] = value;
    }

    deleteHero(hero) {
        var idx = this.list.indexOf(hero);
        if (idx >= 0) {
            this.list.splice(idx, 1);
        }
    }
}
heroApp.component('heroList', {
    templateUrl: 'src/components/hero-list.component.html',
    controller: HeroListController
});
