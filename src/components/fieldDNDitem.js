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
                    {...provided.dragHandleProps}
                    ref={provided.innerRef}
                >
                    <p style={{ border: "1px lightgrey solid", background: "white", marginBottom: "4px" }}>Label: {label}, Name: {name}, Type: {type}</p>
                </div>
            )}
        </Draggable>
    );
};

export default FieldItem;