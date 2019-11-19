import React, { useState, useRef } from 'react';
import Error from './error';

import axios from 'axios';
import Api from '../api';
import Swal from 'sweetalert2';
import { withRouter } from 'react-router-dom';

function EditList(props) {

    // destructuring de props
    const {history, tarea, guardarRecargarListasTareas} = props;
    console.log(props);
    
    // generar los refs
    const nameRef = useRef('');
    const limitDateRef = useRef('');
    const endDateRef = useRef('');

    const [ error, guardarError ] = useState(false);

    const editarTarea = async e => {
        e.preventDefault();

        // validacion
        const newNameList = nameRef.current.value,
              newLimitDate = limitDateRef.current.value,
              newEndDate = endDateRef.current.value;

        if(newNameList === '' ) {
            guardarError(true);
            return;
        }

        guardarError(false);
        
        // Obtener los valores del formulario
        const editTask = {
            name : newNameList,
            limitDate: newLimitDate,
            endDate: newEndDate
        }

        // Enviar el Request
        const url = `${Api}/tasks/${tarea.id}`;

        try {
            const resultado = await axios.put(url, editTask);
            console.log(resultado);
            
            if(resultado.status === 200) {                
                Swal.fire(
                    'Lista editada',
                    'La lista se edito correctamente',
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

        // redirigir al usuario, consultar api
        //guardarRecargarTarea(true);
        history.push('/');

    }


    return (
        <div className="col-md-8 mx-auto ">
            <h1 className="text-center">Editar tarea</h1>

            {(error) ? <Error mensaje='Todos los campos son obligatorios' /> : null }

            <form
                className="mt-5"
                onSubmit={editarTarea}
            >
                <div className="form-group">
                    <label>Nombre tarea</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        name="nombre" 
                        placeholder="Nombre tarea"
                        ref={nameRef}
                        defaultValue={tarea.name}
                    />
                <div className="form-group">
                    <label>Creation Date</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        disabled
                        name="nombre" 
                        defaultValue={tarea.creationDate}
                    />
                </div>
                <div className="form-group">
                    <label>Limit Date</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        name="nombre" 
                        disabled
                        placeholder="Nombre de la tarea"
                        ref={limitDateRef}
                        defaultValue={tarea.limitDate}
                    />
                </div>
                <div className="form-group">
                    <label>End Date</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        name="nombre" 
                        ref={endDateRef}
                        defaultValue={tarea.endDate}
                    />
                </div>
                </div>
                <input type="submit" className="font-weight-bold text-uppercase mt-5 btn btn-primary btn-block py-3" value="Editar Tarea" />
            </form>
        </div>
    )
}
export default  withRouter(EditList);