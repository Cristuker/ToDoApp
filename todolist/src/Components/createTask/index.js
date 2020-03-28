import React, { useState } from 'react';
import { Modal, Fade, Backdrop, makeStyles, Container, Button, TextField } from '@material-ui/core';
import { Add } from '@material-ui/icons';

const useStyles = makeStyles(theme => ({
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    paper: {
        backgroundColor: '#F5F0F0',
        border: '2px solid black',
        borderRadius: '6px',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
    icon: {
        marginRight: '10px',
        cursor: 'pointer'
    },
    title:{
        float:'left'
    },
    time:{
        float:'right'
    },
    description:{
        marginTop:'5em',
        textJustify:'auto'
    },
    addButton:{
        position:'absolute',
        margin: theme.spacing(1),
        right: '15%',
        top:'15%',
    },
    create:{
        marginRight: '10px',
    },
    cancel:{
        backgroundColor: 'red'
    },
    input:{
        marginBottom:'30px'
    }
    
}))

const MyModal = ({task}) => {

    console.log(task)
    const classes = useStyles();
    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <Container>
            <Add  className={classes.addButton} onClick={handleOpen} />
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                className={classes.modal}
                open={open}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={open}>
                    <div className={classes.paper}>
                        <h3>Criar tarefa</h3>
                        {/* validar o campo titulo */}
                        <TextField className={classes.input} label="Titutlo da tarefa" size="small" ></TextField><br/>
                        <Button variant="contained" color="primary" className={classes.create}>Criar</Button><Button onClick={handleClose} variant="contained" color="secondary">Cancelar</Button>
                    </div>
                </Fade>
            </Modal>
        </Container>)

}

export default MyModal;
