//Import packages
import React, { useState } from "react";
import Modal from "react-modal";
import { useMutation } from "@apollo/client";
//Import components and queries
import { ADD_TIMER_MUTATION } from "./AddTimerQueries";

//Import Styles and icons
import styles from "./AddTimer.module.css";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import CloseIcon from "@mui/icons-material/Close";

function AddTimer() {
  //useState Variables
  //MODALS
  const [firstModalIsOpen, setFirstModalIsOpen] = useState(false);
  const [secondModalIsOpen, setSecondModalIsOpen] = useState(false);
  //INPUT
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [imgUrl, setImgUrl] = useState("");
  //MESSAGES
  const [message, setMessage] = useState("");

  //useMutations hook, assign query mutation function to AddTimerMutation
  const [addTimerMutation, { data, loading, error }] =
    useMutation(ADD_TIMER_MUTATION);

  if (loading) {
    setMessage("Loading...");
  }
  if (error) {
    setMessage(`Error: ${error.message}`);
  }
  //Handle create timer
  const handleCreate = () => {
    //Assigning the variables from user input
    addTimerMutation({ variables: { title, description, imgUrl } });
  };

  Modal.setAppElement("#root");
  return (
    <div>
      <div className={styles.addBtnCtn}>
        <span>
          <Fab color="primary" onClick={() => setFirstModalIsOpen(true)}>
            <AddIcon />
          </Fab>
        </span>
      </div>
      <div>
        <Modal
          className={styles.firstModal}
          isOpen={firstModalIsOpen}
          shouldCloseOnOverlayClick={false}
          onRequestClose={() => setFirstModalIsOpen(false)}
        >
          <div className={styles.firstModalContent}>
            <div className={styles.modalTitleCtn}>
              <div className={styles.modalTitle}>
                <h2>Create a new timer</h2>
              </div>
              <div className={styles.exitBtnCtn}>
                <CloseIcon
                  onClick={() => setFirstModalIsOpen(false)}
                ></CloseIcon>
              </div>
            </div>
            <p>Choose your timer:</p>
            <div className={styles.optionsCtn}>
              <div
                className={styles.sequenceTimerCtn}
                onClick={() => {
                  setFirstModalIsOpen(false);
                  setSecondModalIsOpen(true);
                }}
              >
                <p>Sequence Timer</p>
                <p>
                  Run separate timers one after another, perfect for workout
                  routines
                </p>
              </div>
              <div
                className={styles.liveTimerCtn}
                onClick={() => {
                  setFirstModalIsOpen(false);
                  setSecondModalIsOpen(true);
                }}
              >
                <p>Live Timer</p>
                <p>Timer that will always run</p>
              </div>
            </div>
          </div>
        </Modal>
        <Modal
          className={styles.secondModal}
          isOpen={secondModalIsOpen}
          shouldCloseOnOverlayClick={false}
          onRequestClose={() => setSecondModalIsOpen(false)}
        >
          <div className={styles.secondModalContent}>
            <div className={styles.modalTitleCtn}>
              <div className={styles.modalTitle}>
                <h2>Sequence timer creation</h2>
              </div>
              <div className={styles.exitBtnCtn}>
                <CloseIcon
                  onClick={() => setSecondModalIsOpen(false)}
                ></CloseIcon>
              </div>
            </div>
            <div>
              <p>{message}</p>
            </div>
            <div className={styles.inputCtn}>
              <div className={styles.titleInputCtn}>
                <span>Title:</span>
                <input
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                ></input>
              </div>

              <div className={styles.dscInputCtn}>
                <span>Description:</span>
                <input
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                ></input>
              </div>
            </div>
            <div className={styles.dropImgCtn}>
              <span>Image URL:</span>
              <input
                value={imgUrl}
                onChange={(e) => setImgUrl(e.target.value)}
              ></input>
            </div>
            <div className={styles.btnCtn}>
              <button onClick={handleCreate}>Create</button>
            </div>
          </div>
        </Modal>
      </div>
    </div>
  );
}

export default AddTimer;
