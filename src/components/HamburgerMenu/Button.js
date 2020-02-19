import React from 'react';

class MenuButton extends React.Component {
  constructor(props){
    super(props);

    this.setWrapperRef = this.setWrapperRef.bind(this);
    this.handleClickOutside = this.handleClickOutside.bind(this);

    this.state={
      open: this.props.open ? this.props.open:false,
    }
  }

  handleClick(){
    this.setState({open:!this.state.open});
  }

  UNSAFE_componentWillReceiveProps(nextProps){
    if(nextProps.open !== this.state.open){
      this.setState({open:nextProps.open});
    }
  }

  /**
     * Set the wrapper ref
     */
    setWrapperRef(node) {
      this.wrapperRef = node;
  }

  /**
   * If clicked outside of element
   */
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
    
  render(){
    const styles = {
      line: {
        height: '4px',
        width: '40px',
        background: 'white',
        borderRadius: '5px',
        transition: 'all 0.2s ease',
      },
      lineTop: {
        transform: this.state.open ? 'translateX(12px) translateY(6px)':'none',
        transformOrigin: 'top right',
        marginBottom: '5px',
      },
      lineMiddle: {
        opacity: this.state.open ? 0 : 1,
        transform: this.state.open ? 'translateX(-30px)':'none',
      },
      lineBottom: {
        transform: this.state.open ? 'translateX(-12px) translateY(-6px)':'none',
        transformOrigin: 'top right',
        marginTop: '5px',
      },       
    }
    return(
        <div id="hamburger-icon" ref={this.setWrapperRef} onClick={this.props.onClick ?
            this.props.onClick : () => {this.handleClick();}}>
          <div style={{...styles.line,...styles.lineTop}}/>
          <div style={{...styles.line,...styles.lineMiddle}}/>
          <div style={{...styles.line,...styles.lineBottom}}/>
        </div>
    )
  }
}

export default MenuButton;