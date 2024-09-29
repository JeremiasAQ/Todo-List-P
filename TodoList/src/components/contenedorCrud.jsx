import './contenedorCrud.css'
import { useState } from 'react';
import Todo from './createtodo'

function Cont() {
    const [title, setTitle] = useState("Hola");
    const [todos, setTodos] = useState([]);

    function handleChange(event) {
        const value = event.target.value;

        setTitle(value);
    }



    function handleSubmit(e) {
        e.preventDefault();

        const newTodo = {
            id: crypto.randomUUID(),
            title: title,
            completed: false
        }

        const temp = [...todos];
        temp.unshift(newTodo);

        setTodos(temp);
    }

    function handleUpdate(id, value) {
        const temp = [...todos];
        const item = temp.find((item) => item.id == id);
        item.title = value;
        setTodos(temp);

    }


    function handleDelete(id) {
        const temp = todos.filter(item => item.id != id);
        setTodos(temp);
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" onChange={handleChange} value={title} />
                <input className="btnA" onClick={handleSubmit} type="submit" value="Agregar" />
            </form>
            <div className='todosC'>
                {     
                    todos.map(item => (
                        <Todo key={item.id} item={item} onUpdate={handleUpdate} onDelete={handleDelete} />
                    ))
                }
            </div>
        </div>


    );
}

export default function Conte() {
    return (
        <>
            <Cont />
        </>

    );
}