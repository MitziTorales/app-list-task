import React from 'react';
import TareaLista from '../components/taskList';

const Tarea = ({ name, tarea, guardarRecargarTarea }) => {
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
        </div>
    );
};

export default Tarea;