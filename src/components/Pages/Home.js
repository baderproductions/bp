import React from "react";
import "../../index.scss";
import MenuButton from '../HamburgerMenu/Button';
import Menu from '../HamburgerMenu/Menu';
import Slider from '../sliderSwitch';

class Home extends React.Component {
    constructor(props){
        super(props);

        this.state={
          menuOpen:false,
        }
    }

    handleMenuClick() {
        this.setState({menuOpen:!this.state.menuOpen});
    }
    
    render(){
        return (
            <div ref={node => { this.node = node; }} className="container">
                    <div className="main-nav">
                        <div id="brand"/>
                        <div className="darkmode">
                            <Slider/>
                        </div>
                        <MenuButton open={this.state.menuOpen} onClick={()=>this.handleMenuClick()} color='white'/>
                    </div>
                <Menu open={this.state.menuOpen}/>
                <div className="first-page">
                    <section className="landing-section">
                        <div className="landing-info">
                            <h1>Kevin Brian<br/> Frontend Web Developer</h1>
                            <i className="fas fa-map-marker-alt"></i>
                            <p>London, United Kingdom</p>
                        </div>
                    </section>
                </div>
                <div className="second-page">
                    <section className="project-section">
                        <h1>Projects</h1>
                        <div className="project-1">
                            <div className="project-front">
                                <div className="project-one-img"></div>
                            </div>
                            <div className="project-back">
                                <h2>Project One</h2>
                                <a href="https://github.com/1" title="GitHub Project Link"><i className="fab fa-github"></i></a>
                            </div>
                        </div>
                        <div className="project-2">
                            <div className="project-front">
                                <div className="project-two-img"></div>
                            </div>
                            <div className="project-back">
                                <h2>Project Two</h2>
                                <a href="https://github.com/2" title="GitHub Project Link"><i className="fab fa-github"></i></a>
                            </div>
                        </div>
                        <div className="project-3">
                            <div className="project-front">
                                <div className="project-three-img"></div>
                            </div>
                            <div className="project-back">
                                <h2>Project Three</h2>
                                <a href="https://github.com/3" title="GitHub Project Link"><i className="fab fa-github"></i></a>
                            </div>
                        </div>
                        <div className="footer">
                            <div className="social-media">
                                <a href="https://github.com/baderproductions" title="GitHub Account"><i className="fab fa-github"></i></a>
                                <a href="https://www.instagram.com/baderproductions/" title="Instagram Account"><i className="fab fa-instagram"></i></a>
                                <a href="https://twitter.com/BADERproductio1" title="Twitter Account"><i className="fab fa-twitter"></i></a>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        );
    }   
}

export default Home;
