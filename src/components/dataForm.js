import React from "react";

import { useDispatch } from "react-redux";
import { NEW_FORM } from "../actions";

const DataForm = ({ handleFormChange, handleFieldChange, newField, form}) => {
    const { type, name, label } = newField;
    const { formName, description } = form;
    const dispatch = useDispatch();
    return(
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
        <button type="submit" onClick={(e) => { e.preventDefault(); dispatch(NEW_FORM(newField, "NEW_FIELD")) }}>Add New NEW_FIELD</button>
    </form>
    )
}

export default DataForm;