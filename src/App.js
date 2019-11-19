import React, {useEffect, useState} from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Header from './components/header';
import Listas from './pages/Listas';
import AddListaTarea from './components/addTarea';
import EditarLista from './components/editTarea';
import Tarea from './components/tarea'
import axios from 'axios';


function App() {
  const [ listasTareas, guardarListasTareas ] = useState([]);
	const [ recargarListasTareas, guardarRecargarListasTareas ] = useState(true);

	useEffect(
		() => {
			if (recargarListasTareas) {
				const consultarApi = async () => {
				  const resultado = await axios.get('http://front-test.tide.mx/api/task_lists');
          
					guardarListasTareas(resultado.data);
				};
				consultarApi();

				guardarRecargarListasTareas(false);
			}
		},
    [ recargarListasTareas ]
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
				</Switch>
			</main>
			<p className="mt-4 p2 text-center">Mitzi Torales Castillo</p>
    </Router>
  );
}

export default App;
