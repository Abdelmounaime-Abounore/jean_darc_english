
import guided_girl from '../../assets/images/2S3A0912.png'
import Logo from '../../assets/images/logo.jpg'
import { Link } from 'react-router-dom';
import react from 'react'
import './index.scss'

const Footer = () =>{
    const animateOnScroll = () => {
        const elementsToAnimate = document.querySelectorAll('.animate-from-right, .animate-from-left, .animate-from-bottom, .animate-from-top, .animate-from-in');
      
        elementsToAnimate.forEach(element => {
          const elementOffset = element.getBoundingClientRect().top;
          const windowHeight = window.innerHeight;
      
          if (elementOffset < windowHeight - 100) {
            element.classList.add('animate');
          }
        });
      };
      
      window.addEventListener('scroll', animateOnScroll);

    return(
        <div className='Footer'>
            <div className='always_guided section'>
            <h2 className='title-section'>ALWAYS <span>GUIDED BY OUR</span> VALUES</h2>
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-lg-1'></div>
                    <div className='col-lg-2 animate-from-bottom '>
                        <div className='bg_girl girl1'>
                            <img src={guided_girl} className="girl-img" alt="Guided Girl"></img>
                        </div>
                    </div>
                    <div className='col-lg-2 animate-from-bottom '>
                        <div className='bg_girl girl2'>
                            <img src={guided_girl} className="girl-img" alt="Guided Girl"></img>
                        </div>
                    </div>
                    <div className='col-lg-2 animate-from-bottom '>
                    <div className='bg_girl girl3'>
                            <img src={guided_girl} className="girl-img" alt="Guided Girl"></img>
                        </div>
                    </div>
                    <div className='col-lg-2 animate-from-bottom '>
                    <div className='bg_girl girl4'>
                            <img src={guided_girl} className="girl-img" alt="Guided Girl"></img>
                        </div>
                    </div>
                    <div className='col-lg-2 animate-from-bottom '>
                    <div className='bg_girl girl5'>
                            <img src={guided_girl} className="girl-img" alt="Guided Girl"></img>
                        </div>
                    </div>
                </div>
            </div>
            </div>

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

            <div className='copy-right'>
            <p>ALL RIGHTS RESERVED  © 2023  - JEANNE D’ARC INTERNATIONAL SCHOOL</p>
            </div>
        </div>
    )
}

export default Footer