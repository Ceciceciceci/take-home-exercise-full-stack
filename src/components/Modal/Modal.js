
import React from 'react';
import './Modal.css';
import JoinForm from '../JoinForm/JoinForm';

function Modal(props) {
    const { show, handleClose } = props;

    const closeForm = show ? "modal display-block" : "modal display-none";
    return(
        <div className={closeForm}>
            <div className="form-container">
                <div className="form-header">
                    <h2>Join the Team</h2>
                    <p>Fill out this form with information about you and then press Submit when you're done to add your info the team page.</p>
                    <button className="close-btn" type="button" onClick={handleClose} title="Close form">x</button>
                </div>
                <JoinForm handleClose={handleClose}/>
            </div>
        </div>
    )
}

export default Modal;

