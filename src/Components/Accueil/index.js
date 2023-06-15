import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Logo_Misssion from '../../assets/images/LogoMission.png'
import Logo from '../../assets/images/logo.jpg'
import Video_about from '../../assets/images/aboutexample.mp4'
import Cambridge from '../../assets/images/Cambridge.png'
import Bsologo from '../../assets/images/BSOLogo.png'
import Aobso from '../../assets/images/Aobso.png'
import Conis from '../../assets/images/cobis.png'
import Education from '../../assets/images/EDUCATION_is_GREAT_Flag_Blue_RGB_BNI.png'
import Early from '../../assets/images/early.png'
import Primary from '../../assets/images/primary.png'
import LowerSecondary from '../../assets/images/lower-secondary.png'
import UpperSecondary from '../../assets/images/upper-secondary.png'
import  Imagination from '../../assets/images/Imagination.png'
import  Excellence from '../../assets/images/Excellence.png'
import  Care from '../../assets/images/Care.png'
import  Curiosity from '../../assets/images/Curiosity.png'
import  creativity from '../../assets/images/Creativity.png'
import './index.scss';
import { Link } from 'react-router-dom';


const Accueil = () => {
  return (
    <div className='Home'>
        {/* {Ambassador video} */}
        <div className='Ambassador_video'>
            <div className='test_bg'>
            <div className='container'>
                <div className='row'>
                    <div className='col-lg-6 left_bg_ambassador'>
                        <h2>Jeanne D’Arc International School is officially accredited as a BRITISH SCHOOL OVERSEAS</h2>
                        <img src={Logo_Misssion}></img>
                    </div>
                    <div className='col-lg-6'>
                        <div className='right_video_ambassador'>
                            <video src={Video_about} className='Video_Amb' controls type="video/mp4"></video>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </div>

        {/* {About Us} */}
        <div className='AboutUS'>
            
            <div className='container'>
                <div className='row'>
                    <div className='col-lg-7'>
                        <div className='Par_about'>
                            <h2 className='title_about'>ABOUT <span className='span_Us'>US</span></h2>
                            <p>Jeanne d'Arc International School is an exciting new English curriculum school in Casablanca with so much to offer your child. Our experienced and passionate staff are committed to ensuring every child develops a love of learning and acquires the skills and knowledge they need for the future.</p>
                        </div>
                    </div>
                    <div className='col-lg-5'>
                        <div className='video_about'>
                            <video src={Video_about} className='Video_US' controls type="video/mp4"></video>
                        </div>
                    </div>

                </div>
            </div>
        </div>

        {/* logo_Cambridge/Bsologo/Aobso/Conis */}
        <div className='section logo_CBAC'>
            <div className='container'>
                <div className='row'>
                    <div className='col-lg-1'></div>
                    <div className='col-lg-2'>
                        <div className='image_cbac'>
                            <img src={Cambridge} className='centre_image'></img>
                        </div>
                    </div>
                    <div className='col-lg-2'>
                        <div className='image_cbac'>
                            <img src={Bsologo}></img>
                        </div>
                    </div>
                    <div className='col-lg-2'>
                        <div className='image_cbac'>
                        <img src={Aobso} className='centre_image'></img>
                        </div>
                    </div>
                    <div className='col-lg-2'>
                        <div className='image_cbac centre_image'>
                            <img src={Conis}></img>
                        </div>
                    </div>
                    <div className='col-lg-2'>
                        <div className='image_cbac'>
                            <img src={Education}></img>
                        </div>
                    </div>
                    <div className='col-lg-0.5'></div>
                </div>

            </div>
        </div>
        {/* Our Curriculum */}
        <div className='section curriculum-div'>    
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

        <div className='always_guided'>
            <h2>ALWAYS <span>GUIDED BY OUR</span> VALUES</h2>
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-lg-1'></div>
                    <div className='col-lg-2'>
                        <img src={Imagination}></img>
                    </div>
                    <div className='col-lg-2'>
                        <img src={Excellence}></img>
                    </div>
                    <div className='col-lg-2'>
                        <img src={Care}></img>
                    </div>
                    <div className='col-lg-2'>
                        <img src={Curiosity}></img>
                    </div>
                    <div className='col-lg-2'>
                        <img src={creativity}></img>
                    </div>
                </div>
            </div>
        </div>

        {/* footer */}

        <div className="footer">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-4 footer-logo">
                        <img src={Logo}></img>
                    </div>
                    <div className="col-lg-2 footer-elements">
                        <h6 className='sitemap'>SITEMAP</h6>
                        <p>
                            <Link>Admissions</Link>
                        </p>
                        <p>
                            <Link>Gallery</Link>
                        </p>
                        <p>
                            <Link>Carreer</Link>
                        </p>
                        <p>
                            <Link>Enroll now</Link>
                        </p>
                        <p>
                            <Link>School Policies</Link>
                        </p>
                    </div>
                    <div className='col-lg-3 footer-elements'> 
                        <h6 className='contact-datails'>CONTACT DETAILS</h6>
                        <p>Jeanne D’Arc International School N°57 Boulevard Moulay Youssef, Anfa - Casablanca</p>
                        <p>+212 522 22 01 70   -   +212 642 56 23 28</p>
                        <p>contact@jeanned’arcinternational.ma</p>
                    </div>
                    <div className="col-lg-3 footer-elements">
                        <h6 className='contact-us'>CONNECT WHITH US</h6>
                    </div>
                </div>
            </div>
        </div>

        {/* Copyright */}

        <div className='copy-right'>
            <p>ALL RIGHTS RESERVED  © 2023  - JEANNE D’ARC INTERNATIONAL SCHOOL</p>
        </div>
    </div>

    

    


  );
};

export default Accueil;