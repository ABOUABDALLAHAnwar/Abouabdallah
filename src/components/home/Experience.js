import React from 'react';
import './Experience.css';
import ScrollReveal from 'scrollreveal';

class Experience extends React.Component {
    constructor(props) {
        super(props);
        this.expRefs = React.createRef();
    }

    componentDidMount() {
        const config = {
            reset: false,
            distance: '60px',
            duration: 1000,
            delay: 50,
            origin: 'top',
            easing: 'ease-in',
        };
        ScrollReveal(config);
        ScrollReveal().reveal(this.expRefs.current);
    }

    render() {
        return (
            <>
                <div className="exp-header" ref={this.expRefs}>
                    <h1>EXPERIENCE</h1>
                </div>
                <div className="exp-content">
                    {/* EXPLEO Experience ./Abouabdallah/ */}
                    <div className="exp-row">
                        <div className="exp-column1">
                            <p className="exp-column-h6">Data Consultant</p>
                            <p className="exp-prof-name"> <img src='/Abouabdallah/Images/expleo.jpg' alt='Anwar Abouabdallah - Data Scientist and Python Developer' style={{ width: '150px', height: '100px' }} />
 </p>

                            <p className="exp-date">October 2023 - Now</p>
                            <p className="exp-location">Mérignac, France</p>
                            <ul>
                                <li>
                                    <strong>Gaia Project : </strong> 
                                     In the Gaia Project, I worked on integrating and analyzing ecological data through machine learning and deep learning models. The project focused on utilizing Python and Azure OpenAI to explore Generative AI (GenAI) use cases, particularly through prompt engineering. By developing custom prompts and fine-tuning pre-trained GenAI models, we aimed to derive meaningful insights and predictions about biodiversity, climate change, and species distribution. In addition, I contributed to building and optimizing the data pipeline, ensuring that large ecological datasets were processed efficiently. The combination of machine learning algorithms and prompt engineering enabled us to create innovative tools for ecological research, enhancing decision-making for biodiversity conservation and environmental studies.
                                    </li>
                                                                                        
                                <li>
                                    <strong>Grace Project : </strong> 
                                    In the Grace Project, I played a pivotal role in the development of a NoSQL database solution for carbon simulation models, which was designed to aid consulting firms in their environmental sustainability efforts. Using Python, I built a robust ETL pipeline that streamlined the ingestion, transformation, and storage of data. The project utilized both Azure CosmosDB and MongoDB to handle large volumes of unstructured and semi-structured data, ensuring flexibility and scalability for future data growth. The ETL processes facilitated the seamless integration of diverse data sources, allowing for real-time analysis and visualization of carbon footprints. This work was crucial in providing actionable insights to help companies reduce their environmental impact and optimize their sustainability strategies..
                                </li>
                            </ul>
                        </div>
                    </div>
                    {/* Mangrove Experience */}
                    <div className="exp-row">
                        <div className="exp-column1">
                            <p className="exp-column-h6">Cloud Data Scientist</p>
                            <p className="exp-prof-name"><img src='/Abouabdallah/Images/mangrove.png' alt='Anwar Abouabdallah - Data Scientist and Python Developer' style={{ width: '150px', height: '100px' }} /></p>
                            <p className="exp-date">January 2023 - September 2023</p>
                            <p className="exp-location">Bordeaux</p>
                            <ul>
                            <li>
    <strong>Internal Projects:</strong>  
    I contributed to the development of two major internal projects:  
    <ul>
        <li>
            <strong>Photo-sharing software:</strong>  
            Designed and implemented a software solution to enable efficient photo sharing across a cloud-based architecture. This project involved configuring and deploying services using AWS CloudFormation for infrastructure as code, Amazon S3 for scalable storage, and DynamoDB for a highly performant NoSQL database. The project utilized Python for backend development and Git for version control, ensuring seamless collaboration across the team.  
        </li>
        <li>
            <strong>Predictive finance project:</strong>  
            Played a key role in building a predictive analytics platform for financial forecasting. The project involved creating a serverless architecture using AWS SAM and integrating various AWS services like S3 and DynamoDB for data storage and retrieval. Docker was employed for containerized deployment, and OpenBB was leveraged for financial data analysis and visualization. Python was the primary programming language used to implement data processing pipelines and predictive algorithms.  
        </li>
    </ul>
</li>
<li>
    <strong>Customer Project:</strong>  
    Led the development of a sophisticated data pipeline to automate table recognition and extraction from large volumes of documents for a client. This project utilized machine learning capabilities with Amazon SageMaker to train and deploy models for accurate table extraction. Python was employed for building the data processing logic, while AWS Lambda was used to create serverless functions for seamless integration and scalability. Additionally, Kubernetes was implemented to manage containerized workloads, ensuring a robust and scalable solution for the client’s needs.  
</li>

                            </ul>
                        </div>
                    </div>
                    {/* Ph.D. Experience */}
                    <div className="exp-row">
                        <div className="exp-column1">
                            <p className="exp-column-h6">Ph.D. in Applied Mathematics</p>
                            <p className="exp-prof-name"> <img src='/Abouabdallah/Images/inria.png' alt='Anwar Abouabdallah - Data Scientist and Python Developer' style={{ width: '150px', height: '100px' }} />
 </p>
                            <p className="exp-date">October 2019 - September 2022</p>
                            <p className="exp-location">Bordeaux and Toulouse</p>
                            <p>
                                <strong>Title:</strong> Statistical learning for OTU (Operational Taxonomic Unit) identification and biodiversity characterization.
                            </p>
                            <ul>
                                <li>
                                    Unsupervised classification for species recognition based on distances between DNA sequence pairs (<strong>R and Git</strong>).
                                </li>
                                <li>
                                    Use of tensor algebra to enhance the stochastic block models algorithm 
                                    (<strong>Python, Slurm, and Git</strong>).
                                </li>
                                <li>
                                <strong>My Phd abstract : </strong> The Stochastic Block Model (SBM) is a particular graphical model for clustering individuals on the basis of their pairwise distances.It builds groups such as individuals in a given group have the same pattern of connections to the other groups and to their own group. The estimation of the parameters of a SBM is classically done by the EM (Expectation-Maximisation) algorithm which at each iteration requires the computation of the unary and binary marginals of the conditional joint distribution of the groups of individuals. One way of doing this computation is to use a mean field approximation of the model where the binary marginals are computed as the product of the unary marginals. This is what is implemented in the Variational EM algorithm. This algorithm leads to good quality estimators. However, one can hope to improve the inference of the binary marginals.The objective of this thesis work is to propose a more accurate approach to the computation of binary marginals using tensor algebra, by a Tensor Train (TT) approximation, extending the approach of Novikov & al, 2014 on the computation of the partition function of a graphical model.As a first step, in order to motivate this methodological work on SBMs, we performed a clustering of genetic distance matrices in a sample of genetic markers from a Guianese tree experimental plot. We showed the similarities and complementarities between the classifications obtained by SBM and by the more classical methods of Agglomerative Hierarchical Clustering (AHC). This work allowed us to clarify the link between botanical taxonomy and the molecular diversity present in a sample.Then, to develop the TT approach, we consider the conditional joint law of the SBM as the elements of a tensor. We approximate it by the TT format tensor, developed by Oseledets & al., 2011 where each element is obtained by a product of matrices. This format naturally leads to simplification of marginalization computations by distributivity and separation of variables, where the marginals are computed by matrix products. However, the TT approach applied to SBM leads to very high dimensional matrix computations leading to an exponential complexity according to the number of individuals. We used the TT-matrix format for the matrix computations, and dealt with the following difficulties that arose during the computations: (i) avoiding too small numbers by a homothetic procedure(ii) control the rank of the TT-matrix by a choice of parameters at the input of the rounding algorithm proposed by Oseledets without losing precision(iii) to limit the order of the TT-matrix by an aggregation of these cores.Thus, the contributions of the thesis are the following: (i) an exact writing of the conditional joint law of a SBM model as a tensor in TT format, without approximations, taking advantage of the fact that the factors are at most binary. This approach can be applied more generally to any graphical model whose factors are at most binary;(ii) a dynamic programming type algorithm for the computation of binary marginals in this context;(iii) an operational procedure that integrates some solutions to the numerical problems presented above.Finally, we have compared the accuracy of the computation of unary and binary marginals, and the computation times obtained by the TT approach and by three other methods: simple enumeration, Gibbs samplers, mean-field approximation, on a large variety of SBM models. The TT approach is more accurate than the mean field approximation and faster than the Gibbs sampler without losing accuracy.

                                </li>


                            </ul>
                        </div>
                    </div>
                    {/* Internships */}
                    <div className="exp-row">
                        <div className="exp-column1">
                            <p className="exp-column-h6">Internships</p>
                            <p className="exp-date">03/2019 - 09/2020 / 09/2017 - 01/2018</p>
                            <ul>
                                <li>
                                <ul>
                                <strong>Final Year Internship:</strong>
                                <li>

                                     OTU data clustering using SBM model (Keywords: statistical learning, data analysis) 
                                    (<strong>Git, Python, and R</strong>) at the MIA unit of INRAE Toulouse. 
                                    <a href="https://github.com/mawro69/reports/blob/main/2019_08_Stage_5A_MAM_ABOUABDALLAH_MohamedAnwar.pdf" target="_blank">Report</a>
                                    </li>
                                    <li>
                                    <strong>Abstract : </strong> OTU identification by clustering and by model S.B.M. This internship, has several aims, here is a short presentation : • First of all, I need to use the SBM framework and the VEM algorithm conventionally used for estimating the model. • Next, I’ll set up a complete processing pipeline from the Sequence Alignment Distance Matrix to identifying groups and their links. • Then the pipeline will be implemented on biodiversity data of the Guyanese forest for data of which we have all the taxonomic information (order, species, genera, families). • Finally, I will be interested in comparing the classification via SBM and another unsupervised learning method which is the hierarchical classifi cation. For this, we will take the same set of data, on Guyanese trees on which, we will make classifications to find the different 
                                    taxa belonging to different taxonomic levels. Then we will calculate the contingency tables in order to compare our two methods and the botanical reality.
                                    </li>
                                </ul>
                                </li>
                                <li>
                                <strong>M2 Internship:</strong><ul>
                                
                                <li>

                                     Estimation of population diffusion parameters in a heterogeneous landscape 
                                    (<strong>Freefem++ and R</strong>) at the BIOSP unit of INRAE Avignon. 
                                    (<a href="https://github.com/mawro3301/rapports" target="_blank">Report</a>)
                                    </li>
                                <li>

                                    <strong>Abstract :</strong> My internship is accomplished in the context of landscape ecology where the diffusion reaction equations allow to model the spatio-temporal dynamics of a population by representing
                                     the  temporal evolution of the density of individuals u (t, x) in each point in space under the effect of dispersal and reproduction / mortality.
                                     </li>
                                
                                     </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default Experience;
