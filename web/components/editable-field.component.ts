import {Component} from 'ngts-annotations/src/at-angular';

@Component({
    name: 'editableField',
    templateUrl: 'components/editable-field.component.html',
    bindings: {
        fieldValue: '<',
        fieldType: '@?',
        onUpdate: '&'
    }
})
export class EditableFieldComponent{
    fieldValueCopy;
    fieldValue;
    fieldType;
    editMode = false;
    onUpdate;

    handleModeChange() {
        if (this.editMode) {
            this.onUpdate({value: this.fieldValue});
            this.fieldValueCopy = this.fieldValue;
        }
        this.editMode = !this.editMode;
    }

    reset() {
        this.fieldValue = this.fieldValueCopy;
    }

    $onInit() {
        // Make a copy of the initial value to be able to reset it later
        this.fieldValueCopy = this.fieldValue;

        // Set a default fieldType
        if (!this.fieldType) {
            this.fieldType = 'text';
        }
    }
}
