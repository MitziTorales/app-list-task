import React, {useEffect, useState} from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Header from './components/header';
import Listas from './pages/Listas';
import AddListaTarea from './components/addList';
import EditarLista from './components/editList';
import Tarea from './pages/Tarea';
import AddTarea from './components/addTarea';
import EditTarea from './components/editTarea';
import ViewTarea from './components/task';

import Api from './api';
import axios from 'axios';


function App() {
  const [ listasTareas, guardarListasTareas ] = useState([]);
  const [ recargarListasTareas, guardarRecargarListasTareas ] = useState(true);
  const [ recargarTarea, guardarRecargarTarea] = useState(true);
  const [ tareas, guardarTarea ] = useState([])

	useEffect(
		() => {
			if (recargarListasTareas) {
				const consultarApi = async () => {
				  const resultado = await axios.get(`${Api}/task_lists`);
          
					guardarListasTareas(resultado.data);
				};
				consultarApi();

				guardarRecargarListasTareas(false);
      }
      if(recargarTarea){
        const consultarApi = async () => {
				  const resultado = await axios.get(`${Api}/tasks`);
					guardarTarea(resultado.data);
				};
				consultarApi();

        guardarRecargarTarea(false);
      }
		},
    [ recargarListasTareas, recargarTarea  ]
	);

  return (
    <Router>
     <Header />
			<main className="container mt-5">
				<Switch>
        <Route
						exact
						path="/"
						render={() => (
              <Listas listasTareas={listasTareas} 
              guardarRecargarListasTareas={guardarRecargarListasTareas} />
						)}
					/>
          <Route exact path="/nueva-lista" 
            render={() => (
              <AddListaTarea
                guardarRecargarListasTareas={guardarRecargarListasTareas}
              />
            )}/>
         <Route exact path="/lista/editar/:id" 
            render={props => {
              const idLista = parseInt(props.match.params.id);
              
            const lista = listasTareas.filter(lista => lista.id === idLista);
              
              return (
                <EditarLista 
                  lista={lista[0]}
                  guardarRecargarListasTareas={guardarRecargarListasTareas}
                />
              )
        }} />
        <Route
          exact path="/tareas/:id"
          render={props => {
            const idLista = parseInt(props.match.params.id);
        
            const tarea = listasTareas.filter(tarea => tarea.id === idLista);
            
            return (
              <Tarea 
                name={tarea[0].name}
                tarea={tarea[0].tasks}
                idLista= {idLista}
                guardarRecargarListasTareas={guardarRecargarListasTareas}
                guardarRecargarTarea={guardarRecargarTarea}
              />
            )
          }}/>
          <Route exact path="/list/:id/nueva-tarea/" 
            render={props => {
              const idLista = parseInt(props.match.params.id);
              return(
              <AddTarea
                idLista={idLista}
                guardarRecargarListasTareas={guardarRecargarListasTareas}
                guardarRecargarTarea={guardarRecargarTarea}
              /> )
            }}/>
            <Route exact path="/tarea/editar/:id" 
              render={props => {
                const idTarea = parseInt(props.match.params.id);
                
              const tarea = tareas.filter(tarea => tarea.id === idTarea);
                
                return (
                  <EditTarea 
                    tarea={tarea[0]}
                    guardarRecargarListasTareas={guardarRecargarListasTareas}
                    guardarRecargarTarea={guardarRecargarTarea}
                  />
                )
            }} />
            <Route exact path="/tarea/:id" 
              render={props => {
                const idTarea = parseInt(props.match.params.id);
                
              const tarea = tareas.filter(tarea => tarea.id === idTarea);
                
                return (
                  <ViewTarea 
                    tarea={tarea[0]}
                    guardarRecargarListasTareas={guardarRecargarListasTareas}
                  />
                )
            }} />
				</Switch>
			</main>
			<p className="mt-4 p2 text-center">Mitzi Torales Castillo</p>
    </Router>
  );
}

export default App;
