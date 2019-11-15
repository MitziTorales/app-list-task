import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from "@material-ui/core/Button";
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';



function DeleteTarea(props){
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
        <IconButton  onClick={handleShow}>
            <DeleteIcon />
        </IconButton>
        <Dialog
          open={open}
        >
        <DialogTitle> {'Seguro de borrar lista'} </DialogTitle>
            <DialogActions>
                <Button onClick={handleCancelar} color="primary">
                    Cancelar
                </Button>
                <Button onClick={handleCancelar} color="primary" >
                    Borrar
                </Button>
            </DialogActions>
          </Dialog>
        </div>
    )
}
export default DeleteTarea;