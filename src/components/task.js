import React, { useRef } from 'react';


import { withRouter } from 'react-router-dom';

function Task(props) {

    const { tarea } = props;
    
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
export default  withRouter(Task);