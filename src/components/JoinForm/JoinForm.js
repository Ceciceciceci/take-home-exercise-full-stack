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
        this.hideColorPicker = this.hideColorPicker.bind(this);
        this.validateUrl = this.validateUrl.bind(this);
        this.handleChangeComplete =this.handleChangeComplete.bind(this);
        this.state = {
            firstName: "",
            lastName: "",
            title: "",
            story: "",
            showPicker: false, 
            color:"#999999",
            photoUrl: "",
            userData: {},
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
        this.setState({color: hex});
        this.setState({showPicker: false});
    }

    //OTHER
    validateUrl = (url) => {
        var pattern = new RegExp('^(https?:\\/\\/)?'+ // protocol
        '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.?)+[a-z]{2,}|'+ // domain name
        '((\\d{1,3}\\.){3}\\d{1,3}))'+ // ip (v4) address
        '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ //port
        '(\\?[;&a-z\\d%_.~+=-]*)?'+ // query string
        '(\\#[-a-z\\d_]*)?$','i'); // https://www.tutorialspoint.com/How-to-validate-URL-address-in-JavaScript
        console.log(pattern.test(url.toString()));
        return pattern.test(url);
    }
    /*validates the form fields */
    handleValidation = () =>{
        let formIsValid = true;
        let errors ={};

        //check firstname
        if (this.state.firstName === "" || !this.state.firstName){
            this.setState({ firstnameError:true })
            formIsValid = false;
            errors["firstName"] = "Add a first name.";
        } else if (!this.state.firstName.match(/^[a-zA-Z]+$/)){
            formIsValid = false;
            errors["firstName"] = "Only letters";
        }else{ //don't show message
            this.setState({ firstnameError:false })
        }

        //check last name
        if (this.state.lastName === "" || !this.state.lastName){
            this.setState({ lastnameError:true })
            formIsValid = false;
            errors["lastName"] = "Add a last name.";
        } else if (!this.state.lastName.match(/^[a-zA-Z]+$/)){
            formIsValid = false;
            errors["lastName"] = "Only letters";
        }else{ //don't show message
            this.setState({ lastnameError:false })
        }

        //check title field
        if (this.state.title === "" || !this.state.title){
            this.setState({ titleError:true })
            formIsValid = false;
            errors["title"] = "Add your job title.";
        } else{ //don't show message
            this.setState({ titleError:false })
        }
        //check story
        if (this.state.story === "" || !this.state.story){
            this.setState({ storyError:true })
            formIsValid = false;
            errors["story"] = "Add a short description. Even if it's just one letter.";
        } else{ //don't show message
            this.setState({ storyError:false })
        }

        if (this.state.favoriteColor === "" || !this.state.favoriteColor){
            this.setState({ colorError:true })
            formIsValid = false;
            errors["favoriteColor"] = "Choose a color.";
        } else{ //don't show message
            this.setState({ colorError:false })
        }

        //check url format
        if (this.state.photoUrl === "" || !this.state.photoUrl){
            this.setState({ photoUrlError:true })
            formIsValid = false;
            errors["photoUrl"] = "Grab a photo link.";
        } else if (this.validateUrl(this.state.photoUrl)) {
            this.setState({ photoUrlError:true })
            formIsValid = false;
            errors["photoUrl"] = "The link added is broken.";
        } else{ //don't show message
            this.setState({ photoUrlError:false })
        }

        this.setState({errors: errors});
        return formIsValid;
    }

    //set the state of the form variables to be set
    handleChange = (e) => {
        let userData = {};
        userData[e.target.name] = e.target.value;
        this.setState(userData);
        // this.handleValidation(userData);
    }

    handleSubmit(e) {
        e.preventDefault();
        e.stopPropagation();
        // console.log(this.state.userData);
        let dataFinal = this.state.userData;
        const isValid = this.handleValidation();
        if (isValid) {
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
                <div className="form-body" >
                    <div className="form-field">
                        <label htmlFor="firstName">First Name: </label>
                        <input type="text" title="add first name" name="firstName" onChange={this.handleChange.bind(this)} value={this.state.firstName}/>
                        {this.state.firstnameError ? <span style={{color: "red"}}>{this.state.errors["firstName"]}</span> : null} 
                    </div>
                    <div className="form-field">
                        <label htmlFor="lastName">Last Name: </label>
                        <input type="text"title="add last name"  name="lastName" onChange={this.handleChange.bind(this)} value={this.state.lastName}/>
                        {this.state.lastnameError ? <span style={{color: "red"}}>{this.state.errors["lastName"]}</span> : null} 
                    </div>
                    <div className="form-field">
                        <label htmlFor="title">Title: </label>
                        <input type="text"title="add title"  name="title"  autoComplete="off" onChange={this.handleChange.bind(this)} value={this.state.title}/>
                        {this.state.titleError ? <span style={{color: "red"}}>{this.state.errors["title"]}</span> : null} 
                    </div>
                    <div className="form-field">
                        <label htmlFor="story">About you: </label>
                        <textarea type="text" name="story" rows="4" cols="50" onChange={this.handleChange.bind(this)} value={this.state.story}></textarea>
                        {this.state.storyError ? <span style={{color: "red"}}>{this.state.errors["story"]}</span> : null} 
                    </div>
                    <div className="form-field" ref={node => this.node = node}>
                        <label htmlFor="favoriteColor">Choose a favorite color: </label>
                        <input readOnly onClick={this.showColorPicker} type="text" name="favoriteColor" value={this.state.color} autoComplete="off" placeHolder="Click here to choose a color." />
                         <SwatchesPicker className={show} onChangeComplete={this.handleChangeComplete} />
                         {this.state.colorError ? <span style={{color: "red"}}>{this.state.errors["favoriteColor"]}</span> : null} 
                    </div>
                    <div className="form-field">
                        <label htmlFor="photoUrl">Link to your photo: </label>
                        <input type="text" name="photoUrl"  autoComplete="off" onChange={this.handleChange.bind(this)} value={this.state.photoUrl}/>
                        {this.state.photoUrlError ? <span style={{color: "red"}}>{this.state.errors["photoUrl"]}</span> : null} 
                    </div>
                </div>
                <button className="submit-btn" type="Submit">Submit</button>
            </form>
        )
    }
}

export default JoinForm;

