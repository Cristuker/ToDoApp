import React, { useState } from 'react';
import { Modal, Fade, Backdrop, makeStyles, Container, Button, TextField, Snackbar } from '@material-ui/core';
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
        right: '10%',
        top: '10%',
    },
    create: {
        marginRight: '10px',
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
    const [openSuccessSnackbar, setOpenSuccessSnackbar] = useState(false);
    const [openErrorSnackbar, setOpenErrorSnackbar] = useState(false);
    const [open, setOpen] = useState()
    const [title, setTitle] = useState('');

    const handleOpenErrorSnackbar = () => {
        setOpenErrorSnackbar(true);
    };

    const handleSuccessOpen = () => {
        setOpenSuccessSnackbar(true);
    };

    const handleClose = () => {
        setTitle('');
        setOpenSuccessSnackbar(false);
        setOpenErrorSnackbar(false);
        document.location.reload(true);
    };

    const handleOpen = () => {
        setOpen(true);
    };

    const handleSave = async () => {

        if (title === '')
            return handleOpenErrorSnackbar()

        let task = {};
        task.title = title;
        task.status  = 'pending';
        await postTask(task);
        setTimeout(() => {
            handleClose();
            handleSuccessOpen();
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
                            <TextField autoFocus value={title} onChange={e => setTitle(e.target.value)} className={classes.input} label="Titutlo da tarefa" size="small" ></TextField><br />
                            <Button onClick={handleSave} variant="contained" color="primary" className={classes.create}>Criar</Button>
                            <Button onClick={handleClose} variant="contained" color="secondary">Cancelar</Button>
                        </form>
                    </div>
                </Fade>
            </Modal>
            <Snackbar className={classes.warning} key={`bottom,center`} open={openErrorSnackbar} autoHideDuration={6000} onClose={handleClose}>
                <Alert onClose={handleClose} severity="error">
                    Adicione um titulo
                </Alert>
            </Snackbar>
            <Snackbar  key={`bottom,center`} open={openSuccessSnackbar} autoHideDuration={6000} onClose={handleClose}>
                <Alert onClose={handleSuccessOpen} severity="success">
                  Tarefa criada com sucesso!
                </Alert>
            </Snackbar>
        </Container>)

}

export default MyModal;
