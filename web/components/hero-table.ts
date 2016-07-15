import {Component} from 'ngts-annotations/src/at-angular';

@Component({
    name: 'heroTable',
    template: `
<my-table items="$ctrl.heroes">
    <my-column header="Name">
        hello: {{item.name}}
    </my-column>
    <my-column header="Location">
        <header><i>Location</i></header>
        loc: {{item.location}}
        <footer>{{sum('location')}}</footer>
    </my-column>
</my-table>`,
})
export class HeroTableComponent {
    heroes = [{
        name: 'Superman',
        location: ''
    }, {
        name: 'Batman',
        location: 'Wayne Manor'
    }];
}
