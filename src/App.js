import React, {useEffect, useState} from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Header from './components/header';
import Listas from './pages/Listas';
import AddListaTarea from './components/addList';
import EditarLista from './components/editList';
import Tarea from './pages/Tarea'

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
							<Listas listasTareas={listasTareas} guardarRecargarListasTareas={guardarRecargarListasTareas} />
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
            // tomar el ID del producto
              const idLista = parseInt(props.match.params.id);
              
            // el producto que se pasa al state
            const lista = listasTareas.filter(lista => lista.id === idLista);
              //console.log(listasTareas);
              
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
            console.log(tarea[0].tasks);
            
            return (
              <Tarea 
                name={tarea[0].name}
                tarea={tarea[0].tasks}
                guardarRecargarTarea={guardarListasTareas}
              />
            )
          }}/>
				</Switch>
			</main>
			<p className="mt-4 p2 text-center">Mitzi Torales Castillo</p>
    </Router>
  );
}

export default App;
