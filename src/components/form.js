import React from "react";

import Column from './column';
import DataForm from "./dataForm";
import { DragDropContext } from 'react-beautiful-dnd';

import { useSelector, useDispatch } from "react-redux";
import { NEW_FORM } from "../actions";

const Form = (props) => {
    const newForm = useSelector(state => state.newForm);
    const { newField, form, column } = newForm;
    const fields = column.fieldIds.map(fieldId => newForm.fields[fieldId]);
    const dispatch = useDispatch();

    const handleFieldChange = ({ target }) => {
        const { name, value } = target;
        const field = {
            ...newField,
            [name]: value
        }
        dispatch(NEW_FORM(field, "NEWFIELD_CHANGE"))
    };

    const handleFormChange = ({ target }) => {
        const { name, value } = target;
        const field = {
            ...form,
            [name]: value
        }
        dispatch(NEW_FORM(field, "FORM_CHANGE"))
    };
    const { formName, description } = form;
    return (
        <>
            <DataForm
                handleFormChange={handleFormChange}
                handleFieldChange={handleFieldChange}
                form={form}
                newField={newField}
            />
            <br />
            <h1>Form Preview:</h1>
            <p>Form Name: {formName}</p>
            <p>Description: {description}</p>
            <DragDropContext onDragEnd={(result) => dispatch(NEW_FORM(result, "DRAG_END"))} >
                <Column
                    key={column.id}
                    column={column}
                    fields={fields}
                />
            </DragDropContext>
        </>
    )
}

export default Form;