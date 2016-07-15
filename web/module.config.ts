import 'angular';
import {autoDeclare} from 'ngts-annotations/src/at-angular';
import {HeroTableComponent} from './components/hero-table';
import {HeroListComponent} from './components/hero-list.component';
import {HeroDetailComponent} from './components/hero-detail.component';
import {EditableFieldComponent} from './components/editable-field.component';
import {HeroesService} from './services/heroes.service';

export let heroApp = autoDeclare('heroApp', [], [
    HeroTableComponent,
    HeroListComponent,
    HeroDetailComponent,
    EditableFieldComponent,
    HeroesService
]);
