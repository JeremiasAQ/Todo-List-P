import { useState } from "react";
import EditForm from "./editForm";
export default function Todo({ item, onUpdate, onDelete }) {

    const [edit, setEdit] = useState(false);
    const [nValue, setNValue] = useState(item.title);

        function handleSubmit(e) {
            e.preventDefault();
        }

        function handleChange(e) {
            const value = e.target.value;
            setNValue(value);
        }

        function handleClickU() {

            onUpdate(item.id, nValue);
            setEdit(false);
        }
 

    function TodoElement() {
        return (
            <div>
                {item.title} <button onClick={() => { setEdit(true) }}>Actualiza D:</button>
                <button onClick={() => onDelete(item.id)}> Begone</button>
            </div>
        );
    }

    return (
        <div>
            <div className="editar">
                {edit ? <EditForm handleSubmit={handleSubmit}  handleChange={handleChange} handleClickU={handleClickU} nValue={nValue} />  : <TodoElement />}
            </div>
        </div>);
}