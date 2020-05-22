import React from "react";

import Column from './column';
import { DragDropContext } from 'react-beautiful-dnd';

import { useSelector, useDispatch } from "react-redux";
import { FORM } from "../actions";

const Form = () => {
    const newForm = useSelector(state => state.newForm);
    const { newField, form, column, fields } = newForm
    const dispatch = useDispatch();

    const handleFieldChange = ({ target }) => {
        const { name, value } = target;
        const field = {
            ...newField,
            [name]: value
        }
        dispatch(FORM(field, "NEWFIELD_CHANGE"))
    };

    const handleFormChange = ({ target }) => {
        const { name, value } = target;
        const field = {
            ...form,
            [name]: value
        }
        dispatch(FORM(field, "FORM_CHANGE"))
    };

    const { type, name, label } = newField;
    const { formName, description } = form;
    return (
        <>
            <form>
                <label>Form Name</label>
                <input name="formName" value={formName} onChange={handleFormChange}></input>
                <br />
                <label>Description</label>
                <input name="description" value={description} onChange={handleFormChange}></input>
                <br />
                <br />
                New Field:
            <br />
                <label>Type</label>
                <input name="type" value={type} onChange={handleFieldChange}></input>
                <br />
                <label>Name</label>
                <input name="name" value={name} onChange={handleFieldChange}></input>
                <br />
                <label>Label</label>
                <input name="label" value={label} onChange={handleFieldChange}></input>
                <button type="submit" onClick={(e) => { e.preventDefault(); dispatch(FORM(newField, "NEW_FIELD")) }}>Add New NEW_FIELD</button>
            </form>
            <br />
            <h1>Form Preview:</h1>
            <p>Form Name: {formName}</p>
            <p>Description: {description}</p>
            {/* <DragDropContext onDragEnd={onDragEnd} >
                    <Column
                        key={columnFields.id}
                        column={columnFields}
                    />
            </DragDropContext> */}
            {form.formData.map((field, idx) => (
                <div key={idx}>
                    <p>Type: {field.type}</p>
                    <p>Name: {field.name}</p>
                    <p style={{ borderBottom: '1px solid black' }}>Label: {field.label}</p>
                    <br />
                </div>
            ))}
        </>
    )
}

export default Form