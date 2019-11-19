import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Api from '../api';
import Swal from 'sweetalert2';

function taskList({history, tarea, guardarRecargarListasTareas}) {

    const eliminarTarea = id => {
  
        Swal.fire({
            title: '¿Estas Seguro de eliminar la tarea?',
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si, Eliminar',
            cancelButtonText : 'Cancelar'
        }).then( async (result) => {
            if (result.value) {
                try {
                    const url = `${Api}/tasks/${id}`;
                    const resultado = await axios.delete(url);
                    
                    
                    if(resultado.status === 204){

                    console.log("Resultado ",resultado);
                        Swal.fire(
                            'Eliminado!',
                            'Tarea eliminada',
                            'success'
                        )
                        guardarRecargarListasTareas(true)
                    }
                } catch (error) {
                    console.log(error);
                    Swal.fire({
                        type: 'error',
                        title: 'Error',
                        text: 'Hubo un error, vuelve a intentarlo'
                    })
                }
            }
        })
    }



    return(
        <li data-categoria={tarea.name} className="list-group-item d-flex justify-content-between align-items-center">
            
            <Link to={`/tarea/${tarea.id}`}>
                {tarea.name}
            
            </Link>

            <div>
                <Link
                    to={`/tarea/editar/${tarea.id}`}
                    className="btn btn-success mr-2"
                >Editar </Link>

                <button
                    type="button"
                    className="btn btn-danger"
                    onClick={() => eliminarTarea(tarea.id)}
                >
                    Eliminar &times;
                </button>

            </div>
        </li>
    )
}

export default taskList;