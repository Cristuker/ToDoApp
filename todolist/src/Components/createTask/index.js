import React, { useState } from 'react';
import { Modal, Fade, Backdrop, makeStyles, Container, Button, TextField,Snackbar } from '@material-ui/core';
import MuiAlert from '@material-ui/lab/Alert';
import { Add } from '@material-ui/icons';
import { postTask } from '../../services/pouhdb';

const Alert = (props) => {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
  }


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
    title: {
        float: 'left',
        fontFamily: "'Noto Sans JP', sans-serif"
    },
    time: {
        float: 'right'
    },
    description: {
        marginTop: '5em',
        textJustify: 'auto'
    },
    addButton: {
        position: 'absolute',
        margin: theme.spacing(1),
        right: '15%',
        top: '15%',
    },
    create: {
        marginRight: '10px',
    },
    cancel: {
        backgroundColor: 'red'
    },
    input: {
        marginBottom: '30px'
    },
    warning:{
        top:'40em'
    }

}))


const MyModal = () => {

    const classes = useStyles();
    const [openSnackbar, setOpenSnackbar] = useState(false);
    const [open, setOpen] = useState(false);
    const [title, setTitle] = useState('');

    const handleOpenSnackbar = () => {
        setOpenSnackbar(true);
    };

    const handleCloseSnackbar = () => {
        setOpenSnackbar(false);
    };


    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setTitle('');
        setOpen(false);
    };


    const handleSave = async () => {

        if (title === '')
            return handleOpenSnackbar()

        let task = {}
        task.title = title
        task.status  = 'done'
        await postTask(task)
        setTimeout(() => {
            handleClose();
        }, 500)
    }

    return (
        <Container>
            <Add className={classes.addButton} onClick={handleOpen} />
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
                }}>
                <Fade in={open}>
                    <div className={classes.paper}>
                        <form onSubmit={handleSave} >
                            <h3 className={classes.title} >Criar tarefa</h3><br />
                            <TextField value={title} onChange={e => setTitle(e.target.value)} className={classes.input} label="Titutlo da tarefa" size="small" ></TextField><br />
                            <Button onClick={handleSave} variant="contained" color="primary" className={classes.create}>Criar</Button>
                            <Button onClick={handleClose} variant="contained" color="secondary">Cancelar</Button>
                        </form>
                    </div>
                </Fade>
            </Modal>
            <Snackbar className={classes.warning} key={`bottom,center`} open={openSnackbar} autoHideDuration={6000} onClose={handleCloseSnackbar}>
                <Alert onClose={handleCloseSnackbar} severity="error">
                    Adicione um titulo
                </Alert>
            </Snackbar>
        </Container>)

}

export default MyModal;
