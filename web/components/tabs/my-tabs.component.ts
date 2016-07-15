import {MyPaneComponent} from "./my-pane.component";
import {Component} from 'ngts-annotations/src/at-angular';

@Component({
    name: 'myTabs',
    transclude: true,
    controller: MyTabsComponent,
    templateUrl: 'src/components/tabs/my-tabs.component.html'
})
export class MyTabsComponent {
    panes = [];

    constructor() {
    }

    select(pane: MyPaneComponent) {
        this.panes.forEach(pane => {
            pane.selected = false;
        });
        pane.selected = true;
    }

    addPane(pane: MyPaneComponent) {
        if (this.panes.length === 0) {
            this.select(pane);
        }
        this.panes.push(pane);
    }
}
