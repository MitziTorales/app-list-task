import React from 'react';
import { NavLink } from 'react-router-dom';

import TareaLista from '../components/taskList';

const Tarea = ({ idLista, name, tarea, guardarRecargarListasTareas }) => {
    
	const [ tareaAction, setTareaAction ] = React.useState(1);
	let all = null;
	if (tareaAction === 1) {
		all = (
			<ul className="list-group mt-5">
				{tarea.map((tarea) => (
					<TareaLista
						key={tarea.id}
						tarea={tarea}
						guardarRecargarListasTareas={guardarRecargarListasTareas}
					/>
				))}
			</ul>
		);
	} else if (tareaAction === 2) {
        let terminadas = tarea.filter(tarea => !!tarea.endDate)
        
		all = (
			<ul className="list-group mt-5">
				{terminadas.map((tarea) => (
					<TareaLista
						key={tarea.id}
						tarea={tarea}
						guardarRecargarListasTareas={guardarRecargarListasTareas}
					/>
				))}
			</ul>
		);
	} else {
        let pendientes = tarea.filter(tarea => tarea.endDate === null)
		all = (
			<ul className="list-group mt-5">
				{pendientes.map((tarea) => (
					<TareaLista
						key={tarea.id}
						tarea={tarea}
						guardarRecargarListasTareas={guardarRecargarListasTareas}
					/>
				))}
			</ul>
		);
	}

	return (
		<div>
			<h1 className="text-center">Tareas {name} </h1>
			<div className="btn-group" role="group" aria-label="Basic example">
				<button onClick={() => setTareaAction(1)} className="btn btn-secondary">
					Todas
				</button>
				<button onClick={() => setTareaAction(2)} className="btn btn-secondary">
					Terminadas
				</button>
				<button onClick={() => setTareaAction(3)} className="btn btn-secondary">
					Pendientes
				</button>
			</div>
			{all}
			<br />
			<NavLink
				type="button"
				className="font-weight-bold text-uppercase mt-5 btn btn-primary btn-block py-3"
				to={`/list/${idLista}/nueva-tarea`}
			>
				Nueva Tarea
			</NavLink>
		</div>
	);
};

export default Tarea;
