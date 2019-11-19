import React from 'react';
import TareaLista from '../components/tareaLista';

const Tarea = () => {
    return (
        <div>
            <h1 className="text-center">Tareas</h1>
            <ul className="list-group mt-5">
                <p>Lista de tarea</p>
                {/* {listasTareas.map(listaTarea => (
                    ''// <TareaLista
                    //     key={listaTarea.id}
                    //     listaTarea={listaTarea}
                    //     guardarRecargarListasTareas={guardarRecargarListasTareas}
                    // />
                ))} */}
            </ul>
        </div>
    );
};

export default Tarea;