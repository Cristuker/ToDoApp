import React, { useState } from 'react';
import { Modal, Fade, Backdrop, makeStyles, Container, TextField, Button, Snackbar } from '@material-ui/core';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import MuiAlert from '@material-ui/lab/Alert';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { updateTask } from '../../services/pouhdb';

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
        fontFamily: "'Noto Sans JP', sans-serif",
        marginLeft: '-21px'
    },
    time: {
        float: 'right'
    },
    description: {
        marginTop: '5em',
        textJustify: 'auto'
    },
    warning: {
        top: '30em'
    },
    create: {
        marginRight: '10px',
    },
    status: {
        marginLeft:'20px',
        color:'red'
    }

}))

const Alert = (props) => {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const MyModal = ({ task }) => {

    const classes = useStyles();
    const [open, setOpen] = useState(false);
    const [title, setTitle] = useState('');
    const [openSnackbar, setOpenSnackbar] = useState(false);

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
        setOpen(false);
        
    };

    const handleUpdate = async () => {

        if (title === '')
            return handleOpenSnackbar()

        task.title = title
        await updateTask(task)
        setTimeout(() => {
            handleClose();
            document.location.reload(true);
        }, 500)
        
    }

    return (
        <div>
            <FontAwesomeIcon onClick={handleOpen} className={classes.icon} icon={faEdit} />
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
                        <Container>
                            <h3 className={classes.title} >Editar tarefa <span className={classes.status} >{task.status}</span></h3>
                        </Container>
                        <TextField thisTaskvalue={title} onChange={e => setTitle(e.target.value)} className={classes.input} label="Titutlo da tarefa" size="small"></TextField><br /><br />
                        <Button onClick={handleUpdate} variant="contained" color="primary" className={classes.create}>Atualizar</Button>
                        <Button onClick={handleClose} variant="contained" color="secondary">Cancelar</Button>
                    </div>
                </Fade>
            </Modal>
            <Snackbar className={classes.warning} key={`bottom,center`} open={openSnackbar} autoHideDuration={6000} onClose={handleCloseSnackbar}>
                <Alert onClose={handleCloseSnackbar} severity="error">
                    Adicione um titulo
                </Alert>
            </Snackbar>
        </div>)

}

export default MyModal;
