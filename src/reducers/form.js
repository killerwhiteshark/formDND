const formReducer = (
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
            const fieldID = payload.name;
            const field = {...payload, "id": fieldID}
            const { id, fieldIds } = column;
            console.log({
                ...state,
                newField: {
                    type: "",
                    name: "",
                    label: "",
                },
                option: {
                    value: ""
                },
                fields: {
                    ...fields,
                    [fieldID]: field
                },
                column: {
                    "id": id,
                    fieldIds: [...fieldIds, fieldID]
                }
            })
            return {
                ...state,
                newField: {
                    type: "",
                    name: "",
                    label: "",
                },
                option: {
                    value: ""
                },
                fields: {
                    ...fields,
                    [fieldID]: field
                },
                column: {
                    "id": id,
                    fieldIds: [...fieldIds, fieldID]
                }
            };
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
        default:
            return state;
    };
};

export default formReducer;