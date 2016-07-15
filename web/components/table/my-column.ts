import {MyTableComponent} from './my-table';
import {Component} from 'ngts-annotations/src/at-angular';

@Component({
    name: 'myColumn',
    bindings: {
        header: '@'
    },
    transclude: true,
    require: {
        myTable: '^myTable'
    },
    template: ''
})
export class MyColumnComponent {
    myTable: MyTableComponent;

    constructor() {}

    $onInit() {
        this.myTable.addColumn(this);
        console.log(this);
    };
}
