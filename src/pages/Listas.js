import React from 'react';
import TareaLista from '../components/tareaLista';

const ListasTarea = ({ listasTareas, guardarRecargarListasTareas }) => {
    return (
        <div>
            <h1 className="text-center">Listas tareas</h1>
            <ul className="list-group mt-5">
                {listasTareas.map(listaTarea => (
                    <TareaLista
                        key={listaTarea.id}
                        listaTarea={listaTarea}
                        guardarRecargarListasTareas={guardarRecargarListasTareas}
                    />
                ))}
            </ul>
        </div>
    );
};

export default ListasTarea;