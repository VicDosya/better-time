import React, { useState } from "react";
import Modal from "react-modal";
import styles from "./AddCard.module.css";

import AddIcon from "@mui/icons-material/Add";
import CloseIcon from "@mui/icons-material/Close";

function AddCard() {
    //useState Variables
    //MODALS
    const [addCardModal, setAddCardModal] = useState(false);

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
                            <input></input>
                        </div>
                        <div>
                            <span>Description:</span>
                            <input></input>
                        </div>
                        <hr></hr>
                        <div>
                            <span>Days:</span>
                            <input></input>
                        </div>
                        <div>
                            <span>Hours:</span>
                            <input></input>
                        </div>
                        <div>
                            <span>Minutes:</span>
                            <input></input>
                        </div>
                        <div>
                            <span>Seconds:</span>
                            <input></input>
                        </div>
                        <hr></hr>
                        <div>
                            <span>Image URL:</span>
                            <input></input>
                        </div>
                        <div>
                            <button>Create</button>
                        </div>
                    </div>
                </div>
            </Modal>
        </div>
    );
}

export default AddCard;
