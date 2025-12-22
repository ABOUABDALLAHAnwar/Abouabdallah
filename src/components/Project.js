import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRightLong } from '@fortawesome/free-solid-svg-icons'

import './Project.css'

import ScrollReveal from 'scrollreveal'

class Project extends React.Component {
    refs = React.createRef()
    componentDidMount() {
        const config = {
            reset: false,
            distance: '60px',
            duration: 1000,
            delay: 100,
            origin: 'top',
            easing: 'ease-in',
        }
        ScrollReveal(config)
        ScrollReveal().reveal(this.refs.probox1)
        ScrollReveal().reveal(this.refs.probox2, { origin: 'left'})
        ScrollReveal().reveal(this.refs.probox3, { origin: 'right'})
    }
    render() {
        return (
            <>
                <div className='pro-header' ref="probox1">
                    <h1>PROJECTS</h1>
              
                </div>
                    <div className='pro-content'>
                    <div className='pro-row' ref="probox2">
                        <div className='pro-column1'>
                        <div id='hr' ></div>
                        <div id='bold-sec-hr'></div>
                        <p className='pro-column-h6'>CarbonTrackr</p>
                        <p className='pro-description'>
                            Imagine a world where every action, no matter how small, contributes to a cleaner, healthier planet. CarbonTrackr is more than an app—it’s a movement, empowering individuals to measure, understand, and reduce their carbon footprint in a meaningful way.
                            Users can log daily eco-friendly actions—riding a bike instead of driving, reducing electricity consumption, choosing sustainable products—and instantly see the impact of their choices on personal CO₂ emissions. Each action becomes a visible contribution, giving users the power to take control of their environmental impact.
                            CarbonTrackr also encourages community engagement by enabling users to compare progress with neighbors or across the city, turning personal effort into a shared journey toward cleaner air and a healthier climate.
                            The platform features interactive dashboards, actionable insights, and is designed for scalability with future predictive analytics and machine learning integrations.
                        </p>
                        <p className='pro-description'><strong>Technologies Used:</strong> React, Vite, Tailwind CSS, Recharts, FastAPI, MongoDB/PostgreSQL, Axios, AWS S3/EC2/CloudWatch, GitHub Actions, LightGBM (future enhancements), MLflow.</p>
                        <a href="https://arxiv.org" target='_blank' rel="noopener noreferrer">
                            <button className='pro-button'>
                            View paper <FontAwesomeIcon className='icon-button' icon={faArrowRightLong} />
                            </button>
                        </a>
                        </div>

                        <div className='pro-column'></div>

                        <div className='pro-column2'>
                        <img src='/Abouabdallah/Images/Captureecodashboard.png' alt='CarbonTrackr' />
                        </div>
                    </div>
                    </div>
                    <div className='pro-row' ref="probox4">
  <div className='pro-column1'>
    <div id='hr'></div>
    <div id='bold-sec-hr'></div>
    
  <p className='pro-column-h6'>NextGenCV</p>
      <p className='pro-description'>
    NextGenCV is an AI-powered web platform designed to generate 
    ATS-optimized resumes that stand out in automated recruitment systems.
    By leveraging Large Language Models, the platform analyzes job descriptions
    and restructures CVs to maximize visibility, relevance, and keyword alignment,
    significantly increasing interview chances.
  </p>
      <p className='pro-description'>
    <strong>Technologies Used:</strong> Python, FastAPI, HTML/CSS, AWS, 
    LLMs (OpenAI, LLaMA, Qwen)
  </p>
    <a href="lien_vers_le_paper_ou_demo" target='_blank' rel="noopener noreferrer">
      <button className='pro-button'>
        View project <FontAwesomeIcon className='icon-button' icon={faArrowRightLong} />
      </button>
    </a>
  </div>

  <div className='pro-column'></div>

  <div className='pro-column2'>
    <img src='/Abouabdallah/Images/Capturenextgenia.png' alt='NomDuProjet' />
  </div>
</div>


            </>
            
        )
    }
}

export default Project