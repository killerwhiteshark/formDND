//         column: {
//             id: "formColumn",
//             title: "formFields",
//             fieldIds: ["field0", "field1"]
//         }

import React from 'react';

import FieldItem from "./fieldDNDitem";

import { Droppable } from 'react-beautiful-dnd';

const Column = ({ column, fields }) => {
    return (
        <Droppable droppableId={column.id}>
            {provided => (
                <div
                    ref={provided.innerRef}
                    {...provided.droppableProps}
                >
                   {fields.map((field, idx) => <FieldItem key={field.id} field={field} index={idx}/>)}
                    {provided.placeholder}
                </div>
            )}
        </Droppable>
    );
};

const areEqual = (prevProps, nextProps) => {

    const fieldIds = String(prevProps.column.fieldIds) === String(nextProps.column.fieldIds)

    const fields = String(prevProps.fields) === String(nextProps.fields)

    return fields && fieldIds
    /*
    returns true if the props are equal and false if the props are not equal. This is the inverse from shouldComponentUpdate.

    return true if passing nextProps to render would return
    the same result as passing prevProps to render,
    otherwise return false
    */
}
export default React.memo(Column, areEqual);