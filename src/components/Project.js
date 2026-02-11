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
                        
                        <p className='pro-column-h6'>Jade Vine AI: Digital MRV Framework for Behavioral Carbon Offsets </p>
    <p className='pro-description'>
        Imagine a world where every action, no matter how small, contributes to a cleaner, healthier planet. JadeVine AI is more than an app—it’s a movement, empowering individuals to measure, understand, and reduce their carbon footprint in a meaningful way.
        Built on a <strong>Digital MRV</strong> (Measurement, Reporting, and Verification) architecture, the platform bridges the gap between individual climate action and the <strong>Voluntary Carbon Market (VCM)</strong>. At its core, the <strong>Verification Confidence Factor (Vscore)</strong> applies a <strong>Pedigree Matrix</strong> approach to quantify the reliability of behavioral data, ensuring that every ton of avoided CO₂ meets the highest standards of integrity.
        By establishing a <strong>Dynamic Business-as-Usual (BaU) baseline</strong>, Jade Vine AI guarantees the <strong>additionality</strong> of emission reductions across mobility, housing, and consumption sectors. Each impact is calculated using <strong>Life Cycle Assessment (LCA)</strong> principles and verified against <strong>ADEME and IPCC</strong> scientific databases, providing users and organizations with a transparent, spatialized roadmap toward net-zero.
    </p>
    <p className='pro-description'>
        <strong>Technologies Used:</strong> Python (FastAPI), Expo, Netlify, Railway, Docker, MongoDB, AWS (S3, CloudWatch), GitHub Actions, MLflow, Axios.
    </p>
    <a href="https://jadevineai.netlify.app/" target='_blank' rel="noopener noreferrer">
        <button className='pro-button'>
            Join the movement <FontAwesomeIcon className='icon-button' icon={faArrowRightLong} />
        </button>
    </a>

                        </div>

                        <div className='pro-column'></div>

                        <div className='pro-column2'>
                        <img src='/Abouabdallah/Images/Captureecran.png' alt='JadeVine AI' />
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