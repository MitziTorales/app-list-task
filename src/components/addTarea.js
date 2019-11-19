import React, {useState} from 'react';
//import Error from './Error';

import axios from 'axios';
import Swal from 'sweetalert2';
import { withRouter } from 'react-router-dom';

function AgregarLista({history, guardarRecargarListasTareas}) {

    // state
    const [ name, setNombreLista ] = useState('');
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
            
            const resultado = await axios.post('http://front-test.tide.mx/api/task_lists', {
                name
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
            <h1 className="text-center">Agregar Nueva Lista</h1>

            {/* {(error) ? <Error mensaje='Todos los campos son obligatorios' /> : null } */}

            <form
                className="mt-5"
                onSubmit={agregarLista}
            >
                <div className="form-group">
                    <label>Nombre Lista</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        name="nombre" 
                        placeholder="Nombre de Lista"
                        onChange={e => setNombreLista(e.target.value)}
                    />
                </div>
                <input type="submit" className="font-weight-bold text-uppercase mt-5 btn btn-primary btn-block py-3" value="Agregar Lista" />
            </form>
        </div>
    )
}
export default withRouter(AgregarLista);