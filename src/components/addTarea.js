import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Grid from '@material-ui/core/Grid';
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";




function AddTarea(props){
    const [open, setOpen] = React.useState(false);
    const handleShow = () => {
        console.log(props.agregar);
        setOpen(props.agregar)
    }
    const handleCancelar = () =>{
        setOpen(false)
    }

    return(
        <div>
            <button onClick={handleShow} >+</button>
            <Dialog
          open={open}
          aria-describedby="alert-dialog-description" 
        >
        <DialogTitle> {"Lista de tarea"} </DialogTitle>
          <DialogContent >
            <DialogContentText >
             <Grid item > 
                <TextField
                  id="nameList"
                  required
                  label="Nombre de lista"
                  margin="normal"
                  variant="outlined"
                  //onChange = {event => setNameEvidence(event.target.value)}
                />
              </Grid>
            </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleCancelar} color="primary">
                    Cancelar
                </Button>
                <Button onClick={handleCancelar} color="primary" >
                    Agregar
                </Button>
            </DialogActions>
          </Dialog>
        </div>
    )
}
export default AddTarea;