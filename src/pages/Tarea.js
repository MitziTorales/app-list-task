import React from 'react';
import TareaLista from '../components/tareasList';

const Tarea = ({ tarea, guardarRecargarTarea }) => {
    return (
        <div>
            <h1 className="text-center">Tareas</h1>
            <ul className="list-group mt-5">
                <p>Lista de tarea</p>
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