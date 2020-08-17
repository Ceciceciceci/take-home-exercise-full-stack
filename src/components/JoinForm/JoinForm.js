import React from 'react';
import './JoinForm.css';
import { SwatchesPicker } from 'react-color';
import axios from 'axios';

class JoinForm extends React.PureComponent {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.showColorPicker = this.showColorPicker.bind(this);
        this.hideColorPicker = this.hideColorPicker.bind(this);
        this.validateUrl = this.validateUrl.bind(this);
        this.handleChangeComplete =this.handleChangeComplete.bind(this);
        this.state = {
            showPicker: false, 
            userData: {
                firstName:'',
                lastName: '',
                title: '',
                story: '',
                favoriteColor: '#999999',
                photoUrl: ''
            },
            errors:{}
        };
    }

    //COLOR PICKER FUNCTIONS
    /* For the color picker */ 
    showColorPicker(){
        this.setState({showPicker: true})
    }
    /* For the color picker to disappear when clicked outside of it */
    componentWillMount(){
        document.addEventListener('mousedown', this.handleClick, false);
    }
    componentWillUnmount(){
        document.removeEventListener('mousedown', this.handleClick, false);
    }
    handleClick = (e) => {
        if (this.node.contains(e.target)){ //make reference to target inside the div node
            return;
        }
        this.hideColorPicker();
    }
    hideColorPicker(){
        this.setState({showPicker: false})
    }
    //The color picker change handler to update the input field when color is chosen
    handleChangeComplete(e){
        let hex = e.hex;
        this.setState((prevState) => {
            return {
                userData: {
                    ...prevState.userData,
                    favoriteColor: hex
                }
            }
        });
        this.setState({ showPicker: false });
    }

    //OTHER
    validateUrl = (url) => {
        var pattern = new RegExp('^(https?:\\/\\/)?'+ // protocol
        '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.?)+[a-z]{2,}|'+ // domain name
        '((\\d{1,3}\\.){3}\\d{1,3}))'+ // ip (v4) address
        '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ //port
        '(\\?[;&a-z\\d%_.~+=-]*)?'+ // query string
        '(\\#[-a-z\\d_]*)?$','i'); // ref: https://www.tutorialspoint.com/How-to-validate-URL-address-in-JavaScript
        return pattern.test(url);
    }
    /*validates the form fields */
    handleValidation = (e) =>{
        let formIsValid = true;
        let errors = {};

        //check firstname
        if (this.state.userData.firstName === "" || !this.state.userData.firstName){
            formIsValid = false;
            errors["firstName"] = "Add a first name.";
        } else if (!this.state.userData.firstName.match(/^[a-zA-Z]+$/)){
            formIsValid = false;
            errors["firstName"] = "Only letters";
        }

        //check last name
        if (this.state.userData.lastName === "" || !this.state.userData.lastName){
            formIsValid = false;
            errors["lastName"] = "Add a last name.";
        } else if (!this.state.userData.lastName.match(/^[a-zA-Z]+$/)){
            formIsValid = false;
            errors["lastName"] = "Only letters";
        }

        //check title field
        if (this.state.userData.title === "" || !this.state.userData.title){
            formIsValid = false;
            errors["title"] = "Add your job title.";
        } 

        //check story
        if (this.state.userData.story === "" || !this.state.userData.story){
            formIsValid = false;
            errors["story"] = "Add a short description. Even if it's just one letter.";
        }
        //check color
        if (this.state.userData.favoriteColor === "" || !this.state.userData.favoriteColor){
            formIsValid = false;
            errors["favoriteColor"] = "Choose a color.";
        }

        //check url format
        if (this.state.userData.photoUrl === "" || !this.state.userData.photoUrl){
            formIsValid = false;
            errors["photoUrl"] = "Grab a photo link.";
        } else if (!this.validateUrl(this.state.userData.photoUrl)) {
            this.setState({ photoUrlError:true })
            formIsValid = false;
            errors["photoUrl"] = "The link added is broken.";
        } 

        this.setState({errors: errors});
        return formIsValid;
    }

    //set the state of the form variables to be set
    handleChange = (e) => {
        const targetName = e.target.name;
        const targetValue = e.target.value;
        
        this.setState(
            (prevState) => {
                return {
                    userData: {
                    ...prevState.userData,
                    [targetName]: targetValue
                    }
                }
            }
        )
    }

    handleSubmit(e) {
        e.preventDefault();
        let dataFinal = this.state.userData;
        const isValid = this.handleValidation();
        if (isValid) {
            axios.post('http://localhost:3001/team', { dataFinal },
                {headers: {"Content-Type": 'application/json'}})
                .then(res => {
                    console.log(res.status);
                    let status = res.status;
                    if (status === 200){
                        window.location = "/"; //This line of code will reload the page you once the submission is succeed
                        alert("Successfully added your info.");
                    } else {
                        alert("Failed to submit form. Try again.");
                    }
                })
        } else {
              return;
        }
    }

    render(){
        return(
            <form className="joinForm" onSubmit={this.handleSubmit}>
                <div className="form-body" >
                    <div className="form-field">
                        <label htmlFor="firstName">First Name: </label>
                        <input type="text" title="add first name" name="firstName" onChange={this.handleChange.bind(this)} value={this.state.userData.firstName} autoComplete="off"/>
                        {this.state.errors["firstName"] ? <span style={{color: "red"}}>{this.state.errors["firstName"]}</span> : null} 
                    </div>
                    <div className="form-field">
                        <label htmlFor="lastName">Last Name: </label>
                        <input type="text"title="add last name"  name="lastName" onChange={this.handleChange.bind(this)} value={this.state.userData.lastName} autoComplete="off"/>
                        {this.state.errors["lastName"] ? <span style={{color: "red"}}>{this.state.errors["lastName"]}</span> : null} 
                    </div>
                    <div className="form-field">
                        <label htmlFor="title">Title: </label>
                        <input type="text"title="add title"  name="title" onChange={this.handleChange.bind(this)} value={this.state.userData.title} autoComplete="off"/>
                        {this.state.errors["title"] ? <span style={{color: "red"}}>{this.state.errors["title"]}</span> : null} 
                    </div>
                    <div className="form-field">
                        <label htmlFor="story">About you: </label>
                        <textarea type="text" name="story" rows="4" cols="50" onChange={this.handleChange.bind(this)} value={this.state.userData.story}></textarea>
                        {this.state.errors["story"] ? <span style={{color: "red"}}>{this.state.errors["story"]}</span> : null} 
                    </div>
                    <div className="form-field" ref={node => this.node = node}>
                        <label htmlFor="favoriteColor">Choose a favorite color: </label>
                        <input readOnly onClick={this.showColorPicker} type="text" name="favoriteColor" value={this.state.userData.favoriteColor} autoComplete="off" placeholder="Click here to choose a color." />
                         <SwatchesPicker className={this.state.showPicker ? "display-block" : "display-none"} 
                                         onChangeComplete={this.handleChangeComplete} />
                         {this.state.errors["favoriteColor"] ? <span style={{color: "red"}}>{this.state.errors["favoriteColor"]}</span> : null} 
                    </div>
                    <div className="form-field">
                        <label htmlFor="photoUrl">Link to your photo: </label>
                        <input type="url" name="photoUrl"  autoComplete="off" onChange={this.handleChange.bind(this)} value={this.state.userData.photoUrl}/>
                        {this.state.errors["photoUrl"] ? <span style={{color: "red"}}>{this.state.errors["photoUrl"]}</span> : null} 
                    </div>
                </div>
                <button className="submit-btn" type="Submit">Submit</button>
            </form>
        )
    }
}

export default JoinForm;

