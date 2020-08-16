import React from 'react';
import './JoinForm.css';
import PropTypes from 'prop-types';
import { SwatchesPicker } from 'react-color';
import axios from 'axios';

class JoinForm extends React.PureComponent {
    constructor(props) {
        super(props);
        const {handleClose} = props;
        this.handleClose = handleClose;
        this.handleSubmit = this.handleSubmit.bind(this);
        this.showColorPicker = this.showColorPicker.bind(this);
        this.handleChangeComplete =this.handleChangeComplete.bind(this);
        this.state = {
            firstName: "",
            lastName: "",
            title: "",
            story: "",
            showPicker: false, 
            color:"#999",
            photoUrl: "",
            userData: {},
            errors:{}
        };
    }

    /* For the color picker */ 
    showColorPicker(){
        this.setState({showPicker: true})
    }
    //The color picker change handler to update the input field when color is chosen
    handleChangeComplete(e){
        let hex = e.hex;
        this.setState({color: hex});
        this.setState({showPicker: false});
    }

    handleValidation = () =>{
        console.log("in validation!")
        let fields = this.state.userData;
        let formIsValid = true;
        let errors ={};
        console.log(fields);
        if (fields.firstName === "" || !fields.firstName){
            console.log("NAME NOT GOOD")
            this.setState({ firstnameError:true })
            formIsValid = false;
            errors["firstName"] = "Add a first name.";
        } else {
            console.log("NAME IS GOOD")
            this.setState({ firstnameError:false })
        }

        // if(typeof fields["firstName"] !== "undefined"){
        //     if(!fields["firstName"].match(/^[a-zA-Z]+$/)){
        //       formIsValid = false;
        //       errors["firstName"] = "Only letters";
        //     }      	
        //   }
        if (fields.lastName === "" || !fields.lastName){
            formIsValid = false;
            errors["lastName"] = "Add a last name.";
        }
        if (fields.title === "" || !fields.title){
            formIsValid = false;
            errors["title"] = "Add a title.";
        }


        this.setState({errors: errors});
        console.log(formIsValid);
        /**
         * color hex/string given -> rgb needs to be created from color given
         * photourl url checking
         * make sure all check with string validation
         */
        return formIsValid;
    }

    //set the state of the form variables to be set
    handleChange = (e) => {
        let userData = {};
        userData[e.target.name] = e.target.value;
        this.setState(userData);
    }

    handleSubmit(e) {
        e.preventDefault();
        e.stopPropagation();
        // console.log(this.state.userData);
        let dataFinal = this.state.userData;
        if (this.handleValidation()) {
            axios.post('http://localhost:3001/team', { dataFinal },
                {headers: {"Content-Type": 'application/json'}})
                .then(res => {
                //   console.log(res.data);
                    console.log(res);
                    let status = res.status;
                    if (status === 200){
                        window.location = "/"; //This line of code will reload the page you once the submission is succeed
                    }
                })
        } else {
              return;
        }
    }

    render(){
        const show = this.state.showPicker ? "display-block" : "display-none";
        return(
            <form className="joinForm" onSubmit={this.handleSubmit}>
                <div className="form-body">
                    <div className="form-field">
                        <label htmlFor="firstName">First Name: </label>
                        <input type="text" title="add first name" name="firstName" onChange={this.handleChange.bind(this)} value={this.state.firstName}/>
                        {this.state.firstnameError ? <span style={{color: "red"}}>{this.state.errors["firstName"]}</span> : ''} 
                    </div>
                    <div className="form-field">
                        <label htmlFor="lastName">Last Name: </label>
                        <input type="text"title="add last name"  name="lastName" onChange={this.handleChange.bind(this)} value={this.state.lastName}/>
                        <span className="error">{this.state.errors["lastName"]}</span>
                    </div>
                    <div className="form-field">
                        <label htmlFor="title">Title: </label>
                        <input type="text"title="add title"  name="title"  autoComplete="off" onChange={this.handleChange.bind(this)} value={this.state.title}/>
                        <span className="error">{this.state.errors["title"]}</span>
                    </div>
                    <div className="form-field">
                        <label htmlFor="story">About you: </label>
                        <textarea type="text" name="story" rows="4" cols="50" onChange={this.handleChange.bind(this)} value={this.state.story}></textarea>
                    </div>
                    <div className="form-field">
                        <label htmlFor="favoriteColor">Choose a favorite color: </label>
                        <input readOnly onClick={this.showColorPicker} type="text" name="favoriteColor" value={this.state.color} autoComplete="off"/>
                         <SwatchesPicker className={show} onChangeComplete={this.handleChangeComplete} />
                    </div>
                    <div className="form-field">
                        <label htmlFor="photoUrl">Link to your photo: </label>
                        <input type="text" name="photoUrl"  autoComplete="off" onChange={this.handleChange.bind(this)} value={this.state.photoUrl}/>
                    </div>
                </div>
                <button className="submit-btn" type="Submit">Submit</button>
            </form>
        )
    }
}

export default JoinForm;

