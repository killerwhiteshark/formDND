import DragEnd, { NewField } from "./formHelper";

const newFormReducer = (
    state = {
        form: {
            formName: "",
            description: "",
            formData: []
        },
        newField: {
            type: "",
            name: "",
            label: "",
            options: []
        },
        option: {
            value: ""
        },
        fields: {

        },
        column: {
            id: 'fieldColumn',
            fieldIds: [],
        }
    },
    action
) => {
    const { newField, column, option, fields } = state;
    const { type, payload } = action;
    switch (type) {
        case "NEW_FIELD":
            return NewField(payload, column, state);
        case "NEWFIELD_CHANGE":
            return {
                ...state,
                newField: payload
            };
        case "FORM_CHANGE":
            return {
                ...state,
                form: payload,
                newField,
                option
            };
        case "SAVE_FORM":
            return state;
        case "DRAG_END":
            return DragEnd(payload, column, state);
        default:
            return state;
    };
};

export default newFormReducer;