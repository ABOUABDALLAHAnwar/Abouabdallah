import React from 'react'
import './About.css'
import ScrollReveal from 'scrollreveal';

class About extends React.Component {
    refs = React.createRef();

    componentDidMount() {
        const config = {
            reset: false,
            distance: '60px',
            duration: 1000,
            delay: 100,
            origin: 'top',
            easing: 'ease-in',
        };
        ScrollReveal(config)
        ScrollReveal().reveal(this.refs.box1);
        ScrollReveal().reveal(this.refs.box2, {origin: 'bottom', delay: 150});
        ScrollReveal().reveal(this.refs.box3, {origin: 'right', delay: 150});
    }

    render() {
        return (
            <>
                <div className='row'>
                    <div className='header-start column' ref="box1">
                        <h6><span className="section-title">ABOUT ME</span></h6>
                        <p> PHD in Applied Mathematics (specialties: graphical models, clustering, and tensor algebra)
                        <ul>
                            <li>
                                <a href="https://adum.fr/as/ed/cv.pl?mat=118356&site=CDUBX">Subject: Tensor-Train approach for inference in stochastic block models, 
                                application to the characterization of biodiversity</a>
                            </li>
                            <li>
                                2 publications + 10 conferences
                            </li>
                        </ul>
                        </p>
                        <p> Machine Learning Engineer (3 years experience) : Worked on several projects: 
                        <ul>
                            <li>
                                RCNN for Table extractor (Tablesens implementation)
                            </li>
                            <li>
                                Prediction of fuel and electricity consumption in farms (Gaia project) 
                            </li>
                            <li> 
                                Building a carbon simulator for consulting firms (Grace project) 
                            </li>
                            <li>
                                Clustering for metabarcoding/tweets during my PhD + development of an R library
                            </li>
                        </ul>
                        </p>
                        <p> AWS Cloud Junior (2 certificates):
                            <ul>
                                <li>
                                    <a href="https://www.credly.com/badges/b204528e-c6b7-4f94-990d-e67e293d8ae4">Solution Architect Associate</a>
                                </li>
                                <li>
                                    <a href="https://www.credly.com/badges/8d6a284b-f7fd-4745-9ad8-98905a4d44a6">Machine Learning – Specialty</a>
                                </li>
                            </ul>
                        </p>
                    </div>

                    <div className='column image-column' ref="box2">
                        <img src={process.env.PUBLIC_URL + '/Images/maame.jpeg'} alt='Profile' />
                        
                    </div>
                </div>

                <div className='row1' ref='about'>
                    <div className='column about-content' ref="box3">
                        <h6><span className="section-title">PRESENTATION :</span></h6>
                        <p><span className="text-large">Passionate and rigorous mathematician, with sharp analytical reasoning, excellent interpersonal skills and a keen interest in artificial intelligence, cloud, and programming.</span></p>

                        <p><span className="text-large">I graduated as an engineer in applied mathematics specializing in random processes and data science in 2019 at Polytech'Lyon. I did my final internship on a particular case of graphical models: Stochastic block models.</span></p>
                        <p><span className="text-large">Following this, I completed a PhD in applied mathematics at INRAE/INRIA in 2022 focusing on graphical models, clustering and tensor algebra. Since then, I have held varied and complementary positions, including as a solution architect, data engineer, and data scientist.</span></p>
                        <div className='column image-column' ref="box2">
                            <img src='/Images/premierpage.png' alt='Profile' style={{ width: '50%', height: 'auto' }} />
                            </div>
                        <p><span className="text-large">My new interests are cloud architecture, Large Language Models, GenAI, and computer vision for sport. 
                        In the section below, I'll present some of my projects related to these fields.
                        
                        </span></p>
                        <div className='column image-column' ref="box2">
                            <img src='/Images/cnn.gif' alt='Profile' style={{ width: '50%', height: 'auto' }} />
                            </div>
                            <div className='column about-content' ref="box4">
    <h6><span className="section-title">FAVORITE TECHNOLOGIES :</span></h6>
    <p><span className="text-large">Throughout my journey in data science, engineering, and cloud computing, I’ve developed a deep passion for certain technologies that have empowered me to build innovative solutions.
     Here’s a glimpse of my favorites:</span></p>

    <ul className="text-large">
        <li><strong>Python Ecosystem:</strong> My go-to language for data science, machine learning, and cloud automation. 
        Tools like Pandas, fastapi, NumPy, Scikit-learn, openai, TensorFlow ... are integral to my workflow.</li>
        <li><strong>Large Language Models:</strong> I actively explore the potential of LLMs like Falcon, GPT, and LLaMA for Generative AI applications. 
        In the anwar-bot project i'll present how to use and retrain falcon7b</li>
        <li><strong>Cloud Platforms:</strong> Certified in AWS, I specialize in cost-effective cloud architecture using services like S3, Step function, Lambda, and DynamoDB.</li>
        <li><strong>Database Systems:</strong> Experienced with NoSQL databases like MongoDB and CosmosDB, as well as traditional relational databases.</li>
        <li><strong>Computer Vision:</strong> Leveraging frameworks like OpenCV and PyTorch for sport analytics and performance monitoring.</li>
        <li><strong>Version Control:</strong> Git and GitLab for seamless collaboration and project management.</li>
        <li><strong>Version Control:</strong> Git and GitLab for seamless collaboration and project management.</li>
        <li><strong> App containerization :</strong> Developed and maintained Dockerfiles and Docker Compose files for multi-container applications, streamlining the development and deployment process</li>
    </ul>

    <div className='column image-column' ref="box5">
    <p>  Here is a <strong>   Dall E art </strong> generated Stack image : </p>
        <img src='/Images/dale.png' alt='Tech Stack' style={{ width: '50%', height: 'auto' }} />
    </div>
</div>

                        
                        <h6><span className="section-title">Hobbies :</span></h6>
                        <p><span className="text-large"> 
                        <ul>
                            <li>
                            Sports: 
                            <ul>
                            <li>
                            Tennis (ex 15) finalist R2 by team.

                            </li>
                            <li>
                             My actual level 15/3 (4.0 us rannking) / <a href="https://www.google.fr/maps/place/Stade+Andr%C3%A9+N%C3%A8gre/@44.788858,-0.6845236,17z/data=!3m1!4b1!4m6!3m5!1s0xd54dbe6b6beefd1:0xa0cf5da1d117f2b0!8m2!3d44.788858!4d-0.6819433!16s%2Fg%2F12hlmj37f?entry=ttu&g_ep=EgoyMDI0MTIxMS4wIKXMDSoASAFQAw%3D%3D" target="_blank">meet me here friday</a>
                            
                            </li>
                            <li>
                            Football (five or futsal)
                            
                            </li>
                        </ul>
                            </li>

                            <li>
                            Writing and reading
                            </li>
                            

                        </ul>

                        
                        </span></p>

                                            
                    </div>
                </div>
            </>
        )
    }
}

export default About;
