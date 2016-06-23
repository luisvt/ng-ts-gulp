import {heroApp} from "../mdoule.config";

class EditableFieldController{
    fieldValueCopy;
    fieldValue;
    fieldType;
    editMode = false;
    onUpdate;

    constructor() {}

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

heroApp.component('editableField', {
    templateUrl: 'src/components/editable-field.component.html',
    controller: EditableFieldController,
    bindings: {
        fieldValue: '<',
        fieldType: '@?',
        onUpdate: '&'
    }
});
