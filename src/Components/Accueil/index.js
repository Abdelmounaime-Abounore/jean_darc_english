import React, { useEffect, useState, useRef } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Logo_Misssion from '../../assets/images/LogoMission.png'
import Logo from '../../assets/images/logo.jpg'
import Headmaster from '../../assets/images/headmaster.jfif'
import chooseUs_desktop from '../../assets/images/chooseUs_desktop.png'
import chooseUs_mobile from '../../assets/images/chooseUs_mobile.png'
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
import Play from '../../assets/images/Circled Play.png'
import Great from '../../assets/images/Great Britain.png'
import Journey from '../../assets/images/Journey.png'
import Coach from '../../assets/images/Coach.png'
import Globe from '../../assets/images/Globe.png'
import anniversary from '../../assets/images/anniversary.png'
import School from '../../assets/images/School Building.png'
import LearnerProfile from '../../assets/images/learner-profile-removebg-preview.png'
import guided_girl from '../../assets/images/2S3A0912.png'
import sliderVideo_1 from '../../assets/images/integrity--.mp4'
import sliderVideo_2 from '../../assets/images/Curious--.mp4'
import sliderVideo_3 from '../../assets/images/committement--.mp4'
import sliderVideo_4 from '../../assets/images/excellence--.mp4'
import './index.scss';
import { Link } from 'react-router-dom';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Button } from 'bootstrap';
// import "slick-carousel/slick/slick.css"; 
// import "slick-carousel/slick/slick-theme.css";
// import Slider from 'react-slick'


const Accueil = () => {
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



    // const responsive = {
    //     superLargeDesktop: {
    //       // the naming can be any, depends on you.
    //       breakpoint: { max: 4000, min: 3000 },
    //       items: 1
    //     },
    //     desktop: {
    //       breakpoint: { max: 3000, min: 1024 },
    //       items: 1
    //     },
    //     tablet: {
    //       breakpoint: { max: 1024, min: 464 },
    //       items: 1
    //     },

    //     mobile: {
    //       breakpoint: { max: 464, min: 0 },
    //       items: 1
    //     }
    //   };
        const responsive = {
          superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 1
          },
          desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 1
          },
          tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 1
          },
          mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
          }
        };
      
        const [activeItem, setActiveItem] = useState(0);
        const carouselRef = useRef(null);

        useEffect(() => {
    const timer = setInterval(() => {
      carouselRef.current.next();
    }, 6000); // Switch to next slider every 6 seconds

    return () => {
      clearInterval(timer);
    };
  }, []);
        
    return (
        <div className='Home'>
        
        {/* Slider */}
    
        
        <div className='slider'>
            <Carousel
            swipeable={false}
            draggable={false}
            showDots={false}
            responsive={responsive}
            infinite={true}
            keyBoardControl={true}
            transitionDuration={600}
            ref={carouselRef}
            beforeChange={(oldIndex, newIndex) => setActiveItem(newIndex)}
        >
                <div className='sliderVideo'>
                    <video src={sliderVideo_1} type="video/mp4" width={'100%'} autoPlay muted></video>
                    <div className='left_sliderContenu'>
                        <span className='border_leftslider'></span>
                        <p>always guided by our values</p>
                    </div>

                    <div className='right_sliderContenu'>
                        <h4 className='rightSlider_title'>Integrity</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing</p>
                    </div>
                </div>

                <div className='sliderVideo'>
                    <video src={sliderVideo_2} type="video/mp4" width={'100%'} autoPlay muted></video>
                    <div className='left_sliderContenu'>
                        <span className='border_leftslider'></span>
                        <p>always guided by our values</p>
                    </div>

                    <div className='right_sliderContenu'>
                        <h4 className='rightSlider_title'>Curious</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing</p>
                    </div>
                </div>

                <div className='sliderVideo'>
                    <video src={sliderVideo_3} type="video/mp4" width={'100%'} autoPlay muted></video>
                    <div className='left_sliderContenu'>
                        <span className='border_leftslider'></span>
                        <p>always guided by our values</p>
                    </div>

                    <div className='right_sliderContenu'>
                        <h4 className='rightSlider_title'>Committement</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing</p>
                    </div>
                </div>

                <div className='sliderVideo'>
                    <video src={sliderVideo_4} type="video/mp4" width={'100%'} autoPlay muted></video>
                    <div className='left_sliderContenu'>
                        <span className='border_leftslider'></span>
                        <p>always guided by our values</p>
                    </div>

                    <div className='right_sliderContenu'>
                        <h4 className='rightSlider_title'>excellence</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing</p>
                    </div>
                </div>
            </Carousel>
        </div>
            
       

        
        {/* Headmaster Welcome */}

        <div className="headmaster section">
            <div className='title_master'>
                <p className='welcome_title'>WELCOME TO JEANNE <span>D’AR</span>C BRITISH SCHOOL</p>
                <h2 className='title-section'>TODAY’S LEARNERS <br /> TOMORROW’S LEADERS</h2>
            </div>
            <div className="container-fluid">
                <div className="row">
                    <div className='image col-lg-5 element animate-from-left'>
                        <img src={Headmaster} alt="" />
                    </div>
                    <div className='paragraph col-lg-7 element animate-from-right'>
                            <h4>HEADMASTER WELCOME</h4>
                            <p>
                                Dear Parents, <br />
                                I am pleased that you are considering enrolling your child in our esteemed institution. We
                                hope that this website will provide a small window into our community, and encourage you
                                to explore all the exciting opportunities awaiting students at Jeanne D’Arc International
                                School. <a href='#' className='read_more'>Read more</a> 
                            </p>
                            <a href='' className='play'><img src={Play}></img>PLAY VIDEO</a>
                    </div>
                </div>
            </div>
        </div>
        


        {/* {Ambassador video} */}
        <div className='Ambassador_video section'>
            <div className='test_bg'>
            <div className='container'>
                <div className='row'>
                    <div className='col-lg-6 left_bg_ambassador element animate-from-left'>
                        <h2>Jeanne D’Arc International School is officially accredited as a <br /> BRITISH SCHOOL OVERSEAS</h2>
                        <img src={Logo_Misssion}></img>
                    </div>
                    <div className='col-lg-6 right_video_ambassador element animate-from-bottom'>
                        <div className='right_video_ambassador'>
                            <video src={Video_about} className='Video_Amb' controls type="video/mp4"></video>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </div>

        {/* Learner Profile */}

        <div className='learner-profile section'>
            <div className="triangle animate-from-top">
                <h1>LEARNER PROFILE</h1>
            </div>
            <div className="container">
                <div className="row">
                    <div className="left-side col-lg-4 animate-from-left">
                        <div className='shape shape1 Groupe_15 Polygone_1'>
                            <h6 className='COMMUNICATOR'>OPEN MINDED</h6>
                            <p className='We_express_ourselves_confidetly_and_creatively' >
                                We celebrate our own cultures and the values and traditions of others. We listen to different views
                                and grow from experience.
                            </p>
                        </div>
                        <div className='shape shape2'>
                            <h6>EDUCATED</h6>
                            <p>
                                We explore learning across every subject area. We learn about local and global issues.
                            </p>
                        </div>
                        <div className='shape shape3'>
                            <h6>CREATIVE</h6>
                            <p>
                                By generating new ideas, by being oriented towards innovation, by becoming inventive thinkers, by
                                exploring multiple possibilities. 
                            </p>
                        </div>
                    </div>
                    <div className="choose-us-img col-lg-4 animate-from-bottom">
                        <img src={LearnerProfile} alt="" />
                    </div>
                    <div className="right-side col-lg-4 animate-from-right">
                        <div className='shape shape4'>
                            <h6>REFLECTIVE</h6>
                            <p>
                                We learn from what we do. We think about the world and consider our own ideas.
                            </p>
                        </div>
                        <div className='shape shape5'>
                            <h6>COMMUNICATOR</h6>
                            <p>
                                We express ourselves confidently and creatively.
                            </p>
                        </div>
                        <div className='shape shape6'>
                            <h6>LEADER</h6>
                            <p>
                                We strive to become the leaders of tomorrow.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        {/* {About Us} */}
        <div className='AboutUS section'>
            
            <div className='container'>
                <div className='row'>
                    <div className='col-lg-7 animate-from-bottom'>
                        <div className='Par_about'>
                            <h2 className='title_about'>ABOUT <span className='span_Us'>US</span></h2>
                            <p>Jeanne d'Arc International School is an exciting new English curriculum school in Casablanca with so much to offer your child. Our experienced and passionate staff are committed to ensuring every child develops a love of learning and acquires the skills and knowledge they need for the future.</p>
                        </div>
                    </div>
                    <div className='col-lg-5 animate-from-bottom'>
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
        <div className='section curriculum-div '>    
            <div className='container-fluid py-5 animate-from-in'>
                <div className='row'>
                    <div className='col-lg-6 curriculum'>
                        <h3>OUR CURRICULUM</h3>
                    </div>
                    <div className='col-lg-5 curriculum '>
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
        
        <div className='cycles-div section'>
            <div className='container-fluid'>
                <div className="row">
                    <div className="card col-lg-3 animate-from-in">
                        <div className="card-img">
                            <img className="early" src={Early} alt="" />
                        </div>
                        <div className="card-info">
                            <h3>Early</h3>
                            <p>Where our youngest students become creative, confident, and curious learners</p>
                        </div>
                        <div className="layer layer1"></div>
                    </div>
                    
                    <div className="card col-lg-3 animate-from-in">
                        <div className="card-img">  
                            <img className="early" src={Primary} alt="" />
                        </div>
                        <div className="card-info">
                            <h3>Primary</h3>
                            <p>Students are academically challenged while also learning to be inquisitive and caring</p>
                        </div>
                        <div className="layer layer2"></div>
                    </div>
                    <div className="card col-lg-3 animate-from-in">
                        <div className="card-img">
                            <img className="early" src={LowerSecondary} alt="" />
                        </div>
                        <div className="card-info">
                            <h3>Lower Secondary</h3>
                            <p>A time for challenge, exploration, and learning core competencies</p>
                        </div>
                        <div className="layer layer3"></div>
                    </div>
                    <div className="card col-lg-3 animate-from-in">
                        <div className="card-img">
                            <img className="early" src={UpperSecondary} alt="" />
                        </div>
                        <div className="card-info">
                            <h3>Upper Secondary</h3>
                            <p>Preparing our students to succeed in the real world</p>
                        </div>
                        <div className="layer layer4"></div>
                    </div>
                </div>
            </div>
        </div>

        {/* Why Choose Our School */}

        <div className="choose-our-shcool section">
            <div className='title_our_school'>
                <h2 className='title-section'>Why choose our school ?</h2>
            </div>
            <div className="container-fluid">
                <div className="row">
                    <div className="left-side col-lg-4 animate-from-left">
                        <div className='first card_our_school'>
                            <img src={Great}></img>
                            <p>A British Education, An International Community</p>
                        </div>
                        <div className='second card_our_school'>
                            <img src={Journey}></img>
                            <p>A Gateway to the Future</p>
                        </div>
                        <div className='third card_our_school'>
                            <img src={Coach}></img>
                            <p>Expert International Faculty</p>
                        </div>
                        
                        
                    </div>

                    <div className="choose-us-img col-lg-4 animate-from-bottom">
                        <img src={chooseUs_desktop} className='chooseUsDeskop' alt="" />
                        <img src={chooseUs_mobile} className='chooseUsMobile' alt="" />
                    </div>

                    <div className="right-side col-lg-4 animate-from-right">
                        <div className='fourth card_our_school'>
                            <img src={Globe}></img>
                            <p>A World of Choice and Opportunity</p>
                        </div>
                        <div className='fifth card_our_school'>
                            <img src={anniversary}></img>
                            <p>1 Century of Excellence</p>
                        </div>
                        <div className='sixth card_our_school'>
                            <img src={School}></img>
                            <p>A Place Where Everyone Makes Difference</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className='always_guided section'>
            <h2 className='title-section'>ALWAYS <span>GUIDED BY OUR</span> VALUES</h2>
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-lg-1'></div>
                    <div className='col-lg-2 animate-from-bottom'>
                        <div className='bg_girl girl1'>
                            <img src={guided_girl} className="girl-img" alt="Guided Girl"></img>
                        </div>
                    </div>
                    <div className='col-lg-2 animate-from-bottom'>
                        <div className='bg_girl girl2'>
                            <img src={guided_girl} className="girl-img" alt="Guided Girl"></img>
                        </div>
                    </div>
                    <div className='col-lg-2 animate-from-bottom'>
                    <div className='bg_girl girl3'>
                            <img src={guided_girl} className="girl-img" alt="Guided Girl"></img>
                        </div>
                    </div>
                    <div className='col-lg-2 animate-from-bottom'>
                    <div className='bg_girl girl4'>
                            <img src={guided_girl} className="girl-img" alt="Guided Girl"></img>
                        </div>
                    </div>
                    <div className='col-lg-2 animate-from-bottom'>
                    <div className='bg_girl girl5'>
                            <img src={guided_girl} className="girl-img" alt="Guided Girl"></img>
                        </div>
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