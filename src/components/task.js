import React, { useState, useRef } from 'react';


import axios from 'axios';
import Api from '../api';
import Swal from 'sweetalert2';
import { withRouter } from 'react-router-dom';
import { userInfo } from 'os';

function EditList(props) {

    // destructuring de props
    const {history, tarea, guardarRecargarTarea} = props;
    console.log(props);
    
    // generar los refs
    const nameRef = useRef('');
    const limitDateRef = useRef('');
    const endDateRef = useRef('');


    return (
        <div className="col-md-8 mx-auto ">
            <h1 className="text-center">Tarea</h1>

            <form
                className="mt-5"
            >
                <div className="form-group">
                    <label>Nombre tarea</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        name="nombre" 
                        placeholder="Nombre tarea"
                        disabled
                        ref={nameRef}
                        defaultValue={tarea.name}
                    />
                
                <div className="form-group">
                    <label>Limit Date</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        name="nombre" 
                        placeholder="Nombre de la tarea"
                        disabled
                        ref={limitDateRef}
                        defaultValue={tarea.limitDate}
                    />
                </div>
                <div className="form-group">
                    <label>End Date</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        disabled
                        name="nombre" 
                        ref={endDateRef}
                        defaultValue={tarea.endDate}
                    />
                </div>
                </div>
            </form>
        </div>
    )
}
export default  withRouter(EditList);