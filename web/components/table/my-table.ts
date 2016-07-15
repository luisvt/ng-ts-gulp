import {MyColumnComponent} from "./my-column";
import {Component} from 'ngts-annotations/src/at-angular';

@Component({
    name: 'myTable',
    transclude: true,
    bindings: {
        items: '<'
    },
    templateUrl: 'src/components/table/my-table.html',
    controller: MyTableComponent
})
export class MyTableComponent {
    columns: Array<MyColumnComponent> = [];

    items: Array<any>;

    addColumn(column: MyColumnComponent) {
        this.columns.push(column);
    }
}
