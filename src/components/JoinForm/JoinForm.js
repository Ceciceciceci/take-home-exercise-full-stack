
import React, {PureComponent} from 'react';
import './JoinForm.css';
import PropTypes from 'prop-types';
import MatterEmptyAvatar from '../../assets/matter_empty_avatar.svg';
import axios from 'axios';

class JoinForm extends React.PureComponent {
    constructor(props) {
        super(props);
        const {handleClose} = props;
        this.handleClose = handleClose;
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    static propTypes = {
        name: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        photoUrl: PropTypes.string,
        story: PropTypes.string,
        favoriteColor: PropTypes.string
    };
    static defaultProps = {
        photoUrl: MatterEmptyAvatar,
        story: null,
        favoriteColor: '#3466F2',
    };

    colorHexNameToRGB(color){
        let rgbVal = ""; //TO DO
    }

    handleSubmit(event) {
        event.preventDefault();
        const data = new FormData(event.target);
        // console.log(event.target[0].value)
    
        let dataFinal = JSON.stringify({
            "firstName":data.get('firstName'),
            "lastName":data.get('lastName'),
            "title":data.get('title'),
            "story":data.get('story'),
            "favoriteColor":data.get('favoriteColor'),
            "photoUrl":data.get('photoUrl')
        });
        /**
         * color hex/string given -> rgb needs to be created from color given
         * photourl url checking
         * make sure all check with string validation
         */

        axios.post('https://localhost:3000/team', { dataFinal })
        .then(res => {
          console.log(res);
          console.log(res.data);

          window.location = "/" //This line of code will redirect you once the submission is succeed
        })

    }

    render(){
        return(
            <form className="joinForm" onSubmit={this.handleSubmit}>
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
                <button className="submit-btn" type="Submit" onClick={this.handleClose}>Submit</button>
            </form>
        )
    }
}

export default JoinForm;

