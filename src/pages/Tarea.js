import React from 'react';
import { Link, NavLink } from 'react-router-dom';

import TareaLista from '../components/taskList';
import AddTarea from '../components/addList'

const Tarea = ({ idLista, name, tarea, guardarRecargarTarea }) => {
    console.log(tarea);
    
    return (
        <div>
            <h1 className="text-center">Tareas {name} </h1>
            <ul className="list-group mt-5">
                {tarea.map(tarea => (
                    <TareaLista
                        key={tarea.id}
                        tarea={tarea}
                        guardarRecargarTarea={guardarRecargarTarea}
                    />
                ))}
            </ul>
            <br/>
            <NavLink 
                type="button"
                className="font-weight-bold text-uppercase mt-5 btn btn-primary btn-block py-3"
                to={`/list/${idLista}/nueva-tarea`}
            >Nueva Tarea</NavLink>
        </div>
    );
};

export default Tarea;