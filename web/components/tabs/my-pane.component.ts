import {MyTabsComponent} from './my-tabs.component';
import {Component} from 'ngts-annotations/src/at-angular';

@Component({
    name: 'myPane',
    transclude: true,
    require: {
        tabsCtrl: '^myTabs'
    },
    bindings: {
        header: '@'
    },
    controller: MyPaneComponent,
    templateUrl: 'src/components/tabs/my-pane.component.html'
})
export class MyPaneComponent {
    tabsCtrl: MyTabsComponent;
    selected: boolean;

    constructor() {
    }

    $onInit() {
        this.tabsCtrl.addPane(this);
        console.log(this);
    };
}

