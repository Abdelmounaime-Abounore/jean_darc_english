import React from 'react';
import './index.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import Early from '../../assets/images/early.png'
import Primary from '../../assets/images/primary.png'
import LowerSecondary from '../../assets/images/lower-secondary.png'
import UpperSecondary from '../../assets/images/upper-secondary.png'


const Accueil = () => {
  return (
    <div>
        {/* Our Curriculum */}
        <div className='curriculum-div'>    
            <div className='container-fluid py-5'>
                <div className='row'>
                    <div className='col-lg-6 curriculum'>
                        <h3>OUR CURRICULUM</h3>
                    </div>
                    <div className='col-lg-5 curriculum'>
                        <p>
                            Our curriculum, spanning from Early Years to Year 11, showcases the creativity and dedication of our teaching staff. It adheres to international standards while considering the local dimension of learning in Morocco. We prioritize subjects such as Moral, Social, and Cultural Studies, along with Arabic and Islamic Studies, aligning with the Ministry of Education's guidelines.
                            Our primary goal is to lay a solid foundation for your child's future success, nurturing their academic, social, and emotional growth while ensuring
                            optimal progress.
                        </p>
                    </div>
                </div>
            </div>
        </div>

        {/* Cycles */}
        
        <div className='cycles-div'>
            <div className='container-fluid'>
                <div className="row">
                    <div className="card col-lg-3">
                        <div className="card-img">
                            <img className="early" src={Early} alt="" />
                            <div className="layer layer1"></div>
                        </div>
                        <div className="card-info">
                            <h3>Early</h3>
                            <p>Description for Early</p>
                        </div>
                    </div>
                    <div className="card col-lg-3">
                        <div className="card-img">  
                            <img className="early" src={Primary} alt="" />
                            <div className="layer layer2"></div>
                        </div>
                        <div className="card-info">
                            <h3>Primary</h3>
                            <p>Description for Primary</p>
                        </div>
                    </div>
                    <div className="card col-lg-3">
                        <div className="card-img">
                            <img className="early" src={LowerSecondary} alt="" />
                            <div className="layer layer3"></div>
                        </div>
                        <div className="card-info">
                            <h3>Lower Secondary</h3>
                            <p>Description for Lower Secondary</p>
                        </div>
                    </div>
                    <div className="card col-lg-3">
                        <div className="card-img">
                            <img className="early" src={UpperSecondary} alt="" />
                            <div className="layer layer4"></div>
                        </div>
                        <div className="card-info">
                            <h3>Upper Secondary</h3>
                            <p>Description for Upper Secondary</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    

    


  );
};

export default Accueil;