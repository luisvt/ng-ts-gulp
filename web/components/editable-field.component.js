(function (factory) {
    if (typeof module === 'object' && typeof module.exports === 'object') {
        var v = factory(require, exports); if (v !== undefined) module.exports = v;
    }
    else if (typeof define === 'function' && define.amd) {
        define(["require", "exports", 'ngts-annotations/src/at-angular'], factory);
    }
})(function (require, exports) {
    "use strict";
    var at_angular_1 = require('ngts-annotations/src/at-angular');
    var EditableFieldComponent = (function () {
        function EditableFieldComponent() {
            this.editMode = false;
        }
        EditableFieldComponent.prototype.handleModeChange = function () {
            if (this.editMode) {
                this.onUpdate({ value: this.fieldValue });
                this.fieldValueCopy = this.fieldValue;
            }
            this.editMode = !this.editMode;
        };
        EditableFieldComponent.prototype.reset = function () {
            this.fieldValue = this.fieldValueCopy;
        };
        EditableFieldComponent.prototype.$onInit = function () {
            // Make a copy of the initial value to be able to reset it later
            this.fieldValueCopy = this.fieldValue;
            // Set a default fieldType
            if (!this.fieldType) {
                this.fieldType = 'text';
            }
        };
        EditableFieldComponent = __decorate([
            at_angular_1.Component({
                name: 'editableField',
                templateUrl: 'components/editable-field.component.html',
                bindings: {
                    fieldValue: '<',
                    fieldType: '@?',
                    onUpdate: '&'
                }
            })
        ], EditableFieldComponent);
        return EditableFieldComponent;
    }());
    exports.EditableFieldComponent = EditableFieldComponent;
});
//# sourceMappingURL=editable-field.component.js.map