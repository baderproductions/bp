import React from 'react';
import { NavLink, withRouter } from "react-router-dom";

class Menu extends React.Component {
  constructor(props){
    super(props);

    this.setWrapperRef = this.setWrapperRef.bind(this);
    this.handleClickOutside = this.handleClickOutside.bind(this);

    this.state={
      open: this.props.open ? this.props.open : false,
    }
  }
      
  UNSAFE_componentWillReceiveProps(nextProps){
    if(nextProps.open !== this.state.open){
      this.setState({open: nextProps.open});
    }
  }


  setWrapperRef(node) {
    this.wrapperRef = node;
  }

  handleClickOutside(event) {
    if (this.wrapperRef && !this.wrapperRef.contains(event.target)) {
        this.setState({open:false});
    } else {
      this.setState({open:true});
    }
  }

  componentDidMount() {
      document.addEventListener('mousedown', this.handleClickOutside);
  }
  
  componentWillUnmount() {
      document.removeEventListener('mousedown', this.handleClickOutside);
  }
    
  render() {

    const styles = {
      default: {},
      show: {
        transform: this.state.open ? 'scale(1)' : 'scale(0)',
        transition: '.3s ease-out',
        transformOrigin: 'top right',
      },
    }

    const link = () => {
      switch(this.props.location.pathname) {

        case "/": return "/about";
        case "/about":  return "/";

        default:  return "/"
      }
    }

    const linkName = () => {
      switch(this.props.location.pathname) {

        case "/": return "About";
        case "/about":  return "Home";

        default:  return "/"
      }
    }

    return(
      <div className="hamburger-wrapper">
        <div ref={this.setWrapperRef} className="hamburger-nav" style={{...styles.default,...styles.show}}>
          <div className="nav-ul">
            <li className="nav-li">
              <NavLink to={link()}>{linkName()}</NavLink>
            </li>
          </div>
        </div>
      </div>
    )
  }
}

export default withRouter(Menu);