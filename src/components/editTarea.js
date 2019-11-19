import React, { useState, useRef } from 'react';
//import Error from './Error';

import axios from 'axios';
import Swal from 'sweetalert2';
import { withRouter } from 'react-router-dom';

function EditList(props) {

    // destructuring de props
    const {history, lista, guardarRecargarListasTareas} = props;
    console.log(props);
    
    // generar los refs
    const nameRef = useRef('');

    const [ error, guardarError ] = useState(false);

    const editarProducto = async e => {
        e.preventDefault();

        // validacion
        const newNameList = nameRef.current.value;

        if(newNameList === '' ) {
            guardarError(true);
            return;
        }

        guardarError(false);
        
        // Obtener los valores del formulario
        const name = {
            name : newNameList
        }

        // Enviar el Request
        const url = `http://front-test.tide.mx/api/task_lists/${lista.id}`;

        try {
            const resultado = await axios.put(url, name);

            if(resultado.status === 200) {
                Swal.fire(
                    'Lista editada',
                    'La lista se edito correctamente',
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

        // redirigir al usuario, consultar api
        guardarRecargarListasTareas(true);
        history.push('/');

    }


    return (
        <div className="col-md-8 mx-auto ">
            <h1 className="text-center">Editar lista</h1>

            {/* {(error) ? <Error mensaje='Todos los campos son obligatorios' /> : null } */}

            <form
                className="mt-5"
                onSubmit={editarProducto}
            >
                <div className="form-group">
                    <label>Nombre lista</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        name="nombre" 
                        placeholder="Nombre lista"
                        ref={nameRef}
                        defaultValue={lista.name}
                    />
                </div>
                <input type="submit" className="font-weight-bold text-uppercase mt-5 btn btn-primary btn-block py-3" value="Editar Producto" />
            </form>
        </div>
    )
}
export default  withRouter(EditList);