
import React from 'react';
import './JoinForm.css';

class JoinForm extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            firstName: "",
            lastName: "",
            title: "",
            story: "",
            favoriteColor: "",
            photoUrl: "",
        }
    }

    render(){
        return(
            <div>
                <form>
                    <div>
                        <label for="firstName">First Name: </label>
                        <input type="text" name="firstName"/>
                    </div>
                    <div>
                        <label for="lastName">Last Name: </label>
                        <input type="text" name="lastName"/>
                    </div>
                    <div>
                        <label for="title">Title: </label>
                        <input type="text" name="title"/>
                    </div>
                    <div>
                        <label for="story">About you: </label>
                        <textarea type="text" name="story"></textarea>
                    </div>
                    <div>
                        <label for="favoriteColor">Your favorite color: </label>
                        <input type="text" name="favoriteColor"/>
                    </div>
                    <div>
                        <label for="photoUrl">Link to your photo: </label>
                        <input type="text" name="photoUrl"/>
                    </div>
                    <button type="Submit">Submit</button>
                </form>
            </div>
        )
    }
}

export default JoinForm;

