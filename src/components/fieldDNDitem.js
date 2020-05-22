//          fields: {
//              "field0":  {
//                  id: "field0",
//                  type: "",
//                  name: "",
//                  label: "",
//              },
//              "field1":  {
//                  id: "field1",
//                  type: "",
//                  name: "",
//                  label: "",
//              }
//          }

import React from "react";

import { Draggable } from 'react-beautiful-dnd';

const FieldItem = ({ field, index }) => {
    const { type, name, label, options } = field;
    return (
        <Draggable draggableId={field.id} index={index}>
            {(provided) => (
                <div
                    {...provided.draggableProps}
                    ref={provided.innerRef}
                >
                    <p {...provided.dragHandleProps} style={{ border: "1px lightgrey solid", background: "blue", margin: 4, width: "max-content", color: "white" }}>Label: {label}, Name: {name}, Type: {type}</p>
                </div>
            )}
        </Draggable>
    );
};

export default FieldItem;