import React from 'react';
import PropTypes from 'prop-types';
import './TeamMember.css';
import MatterEmptyAvatar from '../../assets/matter_empty_avatar.svg';
import Modal from '../Modal/Modal';

class TeamMember extends React.PureComponent {
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

  constructor(props){
    super(props);
    this.showForm = this.showForm.bind(this);
    this.state = { showJoinForm: false };
  }

  showForm(){
    this.setState({showJoinForm: true})
  }

  hideForm = () => {
    this.setState({showJoinForm: false});
  }

  render() {
    let title = this.props.title;
    let button;
    if (title ==="New Teammate"){
      button = <button className="join-btn" onClick={this.showForm}>Join the team!</button>
    }
    let modal = <Modal show={this.state.showJoinForm} handleClose={this.hideForm} />

    return (
      <div className="container">
        <header>
          <div className="avatar-container">
            <img
              className="avatar"
              src={this.props.photoUrl}
              alt={this.props.name}
            />
          </div>
          <h2 className="title">{this.props.title}</h2>
          <h1 className="name">{this.props.name}</h1>
          {button}
        </header>
        <div className="body"><p>{this.props.story}</p></div>
        <footer style={{ backgroundColor: this.props.favoriteColor }}>
          <div className="full-width-flex-box">
            <div className="one-third-flex-box stat">9.0</div>
            <div className="one-third-flex-box stat bordered">9.0</div>
            <div className="one-third-flex-box stat">9.0</div>
          </div>
          <div className="full-width-flex-box">
            <div className="one-third-flex-box">CANDID</div>
            <div className="one-third-flex-box">LEARNING</div>
            <div className="one-third-flex-box">GRIT</div>
          </div>
        </footer>
        {modal}
      </div>
    );
  }
}

export default TeamMember;

