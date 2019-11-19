import React, {useState} from 'react';
//import Calendar from 'react-calendar';
import Error from './error';

import Api from '../api';
import axios from 'axios';
import Swal from 'sweetalert2';
import { withRouter } from 'react-router-dom';

function AgregarTarea({history, idLista, guardarRecargarListasTareas}) {
    console.log(idLista);
    
    // state
    const [ name, setNombreTarea ] = useState('');
    const [ limitDate, setLimiteDate ] = useState('');
    const [ endDate, setEndDate ] = useState('');
    const [ taskList, setTaskList ] = useState(idLista);
    const [ error, guardarError ] = useState(false);


    const agregarLista = async e => {
        e.preventDefault();

        if(name ==='') {
            guardarError(true);
            return;
        }

        guardarError(false);

        // Crear el nueva Lista
        try {
            
            const resultado = await axios.post(`${Api}/tasks`, {
                name, taskList, limitDate
            });
            

            if(resultado.status === 201) {
                Swal.fire(
                    'Lista creada',
                    'La lista se creo correctamente',
                    'success'
                )
            }
        } catch (error) {
            console.log(error);
            Swal.fire({
                type: 'error',
                title: 'Error',
                text: 'Hubo un error, vuelve a intentarlo'
            })
        }

        guardarRecargarListasTareas(true);
        history.push('/');

    }

    return (
        <div className="col-md-8 mx-auto ">
            <h1 className="text-center">Agregar Nueva Tarea</h1>

            {(error) ? <Error mensaje='Todos los campos son obligatorios' /> : null }

            <form
                className="mt-5"
                onSubmit={agregarLista}
            >
                <div className="form-group">
                    <label>Nombre tarea</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        name="nombre" 
                        placeholder="Nombre de la tarea"
                        onChange={e => setNombreTarea(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label>Limit Date</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        name="nombre" 
                        placeholder="Fecha limite"
                        onChange={e => setLimiteDate(e.target.value)}
                    />
                </div> 
                <input type="submit" className="font-weight-bold text-uppercase mt-5 btn btn-primary btn-block py-3" value="Agregar Tarea" />
            </form>
        </div>
    )
}
export default withRouter(AgregarTarea);