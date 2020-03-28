import React, { useState } from 'react';
import { Modal, Fade, Backdrop, makeStyles, Container } from '@material-ui/core';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

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
    }
    
}))

const MyModal = ({task}) => {
    const classes = useStyles();
    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

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
                }}
            >
                <Fade in={open}>
                    <div className={classes.paper}>
                        {/* {edit} */}
                        <Container>
                        <h3 className={classes.title} >{task.title} <span>{task.time}</span></h3>
                        </Container>
                        <p className={classes.status} >{task.status}</p>
                    </div>
                </Fade>
            </Modal>
        </div>)

}

export default MyModal;
