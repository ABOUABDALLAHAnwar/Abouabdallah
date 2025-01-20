import React from 'react';
import './Resume.css';
import ScrollReveal from 'scrollreveal';

class Resume extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            language: 'EN', // Default language
        };
        this.resumeRef = React.createRef();
    }

    componentDidMount() {
        const config = {
            reset: false,
            distance: '60px',
            duration: 1000,
            delay: 10,
            origin: 'top',
            easing: 'ease-in',
        };
        ScrollReveal(config);
        ScrollReveal().reveal(this.resumeRef.current);
    }

    changeLanguage = () => {
        this.setState((prevState) => ({
            language: prevState.language === 'EN' ? 'FR' : 'EN',
        }));
    };

    scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    render() {
        const { language } = this.state;
        const resumeUrl =
            language === 'EN'
                ? '/Abouabdallah/Docs/ABOUABDALLAH_MA_updated_.pdf'
                : '/Abouabdallah/Docs/ABOUABDALLAH_MA_fr.pdf'; // Update with your actual file paths

        return (
            <>
                <div className="resume-header" ref={this.resumeRef}>
                    <h1>RESUME</h1>
                    <div className="toggle-container">
                        <span className="label">Français</span>
                        <label className="switch">
                            <input
                                type="checkbox"
                                checked={language === 'EN'}
                                onChange={this.changeLanguage}
                            />
                            <span className="slider"></span>
                        </label>
                        <span className="label">English</span>
                    </div>
                </div>
                <div className="resume-content">
                    <iframe src={resumeUrl} width="100%" height="800px" title="resume" />
                </div>
                <button className="scroll-to-top" onClick={this.scrollToTop}>
                    Scroll to Top
                </button>
            </>
        );
    }
}

export default Resume;
