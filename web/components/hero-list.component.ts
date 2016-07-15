import {HeroesService} from '../services/heroes.service';
import {Component, Inject} from 'ngts-annotations/src/at-angular';
import ILogService = angular.ILogService;


@Component({
    name: 'heroList',
    templateUrl: 'components/hero-list.component.html',
})
export class HeroListComponent {
    constructor(@Inject((HeroesService as any).name) private heroesService: HeroesService) {}

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
        let idx = this.list.indexOf(hero);
        if (idx >= 0) {
            this.list.splice(idx, 1);
        }
    }
}
