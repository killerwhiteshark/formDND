export const DragEnd = (payload, column, state) => {
    const { destination, source, draggableId } = payload;
    const newFieldsIds = Array.from(column.fieldIds)
    if (!destination) {
        return state;
    }
    if (destination.droppableId === source.droppableId &&
        destination.index === source.index
    ) {
        return state;
    }
    newFieldsIds.splice(source.index, 1);
    newFieldsIds.splice(destination.index, 0, draggableId)
    return {
        ...state,
        column: {
            id: 'fieldColumn',
            fieldIds: newFieldsIds,
        }
    };
}

export const NewField = (payload, column, state) => {
    const fieldID = payload.name;
    const field = { ...payload, "id": fieldID }
    const { id, fieldIds } = column;
    const { fields } = state;
    return {
        ...state,
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
            ...fields,
            [fieldID]: field
        },
        column: {
            "id": id,
            fieldIds: [...fieldIds, fieldID]
        }
    };
}
export default DragEnd;