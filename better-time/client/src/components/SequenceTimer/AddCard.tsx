import React, { useState } from "react";
import Modal from "react-modal";
import { useMutation } from "@apollo/client";

//Import components and queries
import { ADD_CARD_MUTATION } from "./SequenceTimerQueries";

//Import Styles and icons
import CloseIcon from "@mui/icons-material/Close";
import styles from "./AddCard.module.css";

function AddCard() {
    //useState Variables
    //MODALS
    const [addCardModal, setAddCardModal] = useState(false);
    //INPUT
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [days, setDays] = useState('');
    const [hours, setHours] = useState('');
    const [minutes, setMinutes] = useState('');
    const [seconds, setSeconds] = useState('');
    const [imgUrl, setImgUrl] = useState('');
    //useMutation
    const [addCardMutation, { data, loading, error }] = useMutation(ADD_CARD_MUTATION);
    if (loading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>Error: {error.message}</p>;
    }

    //handleCreate button function
    const handleCreate = () => {
        addCardMutation({ variables: { title, description, days, hours, minutes, seconds, imgUrl } });
        setAddCardModal(false);
    };
    Modal.setAppElement("#root");
    return (
        <div>
            <div onClick={() => setAddCardModal(true)} className={styles.card}>
                <p className={styles.plusSymbol}>+</p>
            </div>
            <Modal
                className={styles.modal}
                isOpen={addCardModal}
                shouldCloseOnOverlayClick={false}
                onRequestClose={() => setAddCardModal(false)}
            >
                <div className={styles.modalContent}>
                    <div className={styles.modalTitleCtn}>
                        <div className={styles.modalTitle}>
                            <h2>Create a new card</h2>
                        </div>
                        <div className={styles.exitBtnCtn}>
                            <CloseIcon onClick={() => setAddCardModal(false)}></CloseIcon>
                        </div>
                    </div>
                    <div>
                        <div>
                            <span>Title:</span>
                            <input value={title}
                                onChange={(e) => setTitle(e.target.value)}></input>
                        </div>
                        <div>
                            <span>Description:</span>
                            <input value={description}
                                onChange={(e) => setDescription(e.target.value)}></input>
                        </div>
                        <hr></hr>
                        <div>
                            <span>Days:</span>
                            <input type="number" value={days}
                                onChange={(e) => setDays(e.target.value)}></input>
                        </div>
                        <div>
                            <span>Hours:</span>
                            <input type="number" value={hours}
                                onChange={(e) => setHours(e.target.value)}></input>
                        </div>
                        <div>
                            <span>Minutes:</span>
                            <input type="number" value={minutes}
                                onChange={(e) => setMinutes(e.target.value)}></input>
                        </div>
                        <div>
                            <span>Seconds:</span>
                            <input type="number" value={seconds}
                                onChange={(e) => setSeconds(e.target.value)}></input>
                        </div>
                        <hr></hr>
                        <div>
                            <span>Image URL:</span>
                            <input value={imgUrl}
                                onChange={(e) => setImgUrl(e.target.value)}></input>
                        </div>
                        <div>
                            <button onClick={handleCreate}>Create</button>
                        </div>
                    </div>
                </div>
            </Modal>
        </div>
    );
}

export default AddCard;
