import React from 'react';

import AddTarea from '../components/addTarea';
import DeleteTarea from '../components/deleteTarea';

class Listas extends React.Component{
    buildList(){
    }
    render(){
        return(
            <div>
                <h1>Listas de Tares</h1>
                <div >
                    <div>
                    {this.buildList()}
                    </div>
                </div>
                <AddTarea agregar={true} />
                <DeleteTarea agregar={true}/>

            </div>
        )
    }

}
export default Listas;