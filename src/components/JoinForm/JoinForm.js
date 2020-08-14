
import React from 'react';
import './JoinForm.css';
import PropTypes from 'prop-types';

function JoinForm(props) {
    const { show, handleClose } = props;

    const closeForm = show ? "modal display-block" : "modal display-none";

    // render(){
        return(
            <div className={closeForm}>
                <form className="joinForm">
                    <div className="form-header">
                        <h2>Join the Team</h2>
                        <p>Fill out this form with information about you and then press Submit when you're done to add your info the team page.</p>
                        <button className="close-btn" type="button" onClick={handleClose} title="Close form">x</button>
                    </div>
                    <div className="form-body">
                        <div>
                            <label htmlFor="firstName">First Name: </label>
                            <input type="text" name="firstName"/>
                        </div>
                        <div>
                            <label htmlFor="lastName">Last Name: </label>
                            <input type="text" name="lastName"/>
                        </div>
                        <div>
                            <label htmlFor="title">Title: </label>
                            <input type="text" name="title"/>
                        </div>
                        <div>
                            <label htmlFor="story">About you: </label>
                            <textarea type="text" name="story" rows="4" cols="50"></textarea>
                        </div>
                        <div>
                            <label htmlFor="favoriteColor">Your favorite color: </label>
                            <input type="text" name="favoriteColor"/>
                        </div>
                        <div>
                            <label htmlFor="photoUrl">Link to your photo: </label>
                            <input type="text" name="photoUrl"/>
                        </div>
                    </div>
                    <button className="submit-btn" type="Submit">Submit</button>
                </form>
            </div>
        )
    // }
}

export default JoinForm;

