import React from 'react'

import './Publications.css'
import ScrollReveal from 'scrollreveal';

class Publications extends React.Component {
    refs = React.createRef();
    componentDidMount() {
        const config = {
            reset: false,
            distance: '60px',
            duration: 1000,
            delay: 50,
            origin: 'top',
            easing: 'ease-in-out',
        };
        ScrollReveal(config)
        ScrollReveal().reveal(this.refs.pubbox1);
        ScrollReveal().reveal(this.refs.pubbox2, { origin: 'left', delay: 100 });
        ScrollReveal().reveal(this.refs.pubbox3, { origin: 'left', delay: 500 });
    }
    render() {
        return (
            <>
            <div className='publication-header' ref='pubbox1'>
                    <h4>PUBLICATIONS</h4>
                    <div id='hr' ></div>
                    <div id='bold-sec-hr'></div>
            </div>
            <div className='publication-content'>
                <ol>
                    <li>
                    Evaluating the adequacy between morphological-based and molecular-based inventories at high taxonomic level co-written
                            with Nathalie Peyrard and Alain Franc.
                        <a href="https://onlinelibrary.wiley.com/doi/abs/10.1111/1755-0998.13579">
                             (Molecular Ecology resources)
                        </a>
                    </li>
                    <br />
                    <li>
                    Computing SBM marginals with TT decomposition co-written with Nathalie Peyrard, Alain Franc and Olivier Coulaud.
                        <a href="https://inria.hal.science/hal-04394024">
                            (Hal INRIA)
                        </a>
                    </li>
                    <li>
                    Thesis manuscript: Tensor-Train approach for inference in stochastic block models, application to the biodiversity characterization.
                    Associated library: TT-SBM-Py: Tensor Train for Stochastic Block Models (library actually under maintenance)
                        <a href="https://theses.fr/2023BORD0023">
                            (French manuscript.)
                        </a>
                    </li>


                </ol>
            </div>        </>
        )
    }
}

export default Publications