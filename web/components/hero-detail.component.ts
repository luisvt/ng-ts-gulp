import {Component} from 'ngts-annotations/src/at-angular';

@Component({
    name: 'heroDetail',
    templateUrl: 'components/hero-detail.component.html',
    bindings: {
        hero: '<',
        onDelete: '&',
        onUpdate: '&'
    }
})
export class HeroDetailComponent {
    update = function (prop, value) {
        this.onUpdate({hero: this.hero, prop: prop, value: value});
    }
}
