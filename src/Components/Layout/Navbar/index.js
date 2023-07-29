import logo from '../../../assets/images/logo.jpg'
import open_respo from '../../../assets/images/burger-bar.png'
import close_respo from '../../../assets/images/fermer.png'
import { Link, NavLink } from 'react-router-dom';
import React, { useState, useEffect  } from 'react';
import './index.scss';
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflowY = 'hidden'; // Prevent body scroll
    } else {
      document.body.style.overflowY = 'auto'; // Allow body scroll
    }

    return () => {
      document.body.style.overflowY = 'auto'; // Restore body scroll on component unmount
    };
  }, [isMenuOpen]);

  
  
  // const [isMenuOpen, setMenuOpen] = useState(false);
  const [megamenu1Open, setMegamenu1Open] = useState(false);
  const [megamenu2Open, setMegamenu2Open] = useState(false);
  const [megamenu3Open, setMegamenu3Open] = useState(false);
  const [megamenu4Open, setMegamenu4Open] = useState(false);
  const [megamenu5Open, setMegamenu5Open] = useState(false);
  const [megamenu6Open, setMegamenu6Open] = useState(false);

  // const toggleMenu = () => {
  //   setMenuOpen(!isMenuOpen);
  // };

  const toggleMegamenu1 = () => {
    setMegamenu1Open(!megamenu1Open);
  };

  const toggleMegamenu2 = () => {
    setMegamenu2Open(!megamenu2Open);
  };

  const toggleMegamenu3 = () => {
    setMegamenu3Open(!megamenu3Open);
  };

  const toggleMegamenu4 = () => {
    setMegamenu4Open(!megamenu4Open);
  };

  const toggleMegamenu5 = () => {
    setMegamenu5Open(!megamenu5Open);
  };

  const toggleMegamenu6 = () => {
    setMegamenu6Open(!megamenu6Open);
  };

  return (
    <nav className={`navbar ${isMenuOpen ? 'open' : ''} ${isScrolled ? 'scrolled' : ''}`}>
      <div className="navbar-logo">
      <a href='#'><img src={logo} alt='logo'></img></a>
      </div>
      <ul className={`navbar-menu ${isMenuOpen ? 'open' : ''}`}>
        <li className="navbar-menu-item"><a href='#' className='navbar_link'>Home</a>
        </li>
        <li className="navbar-menu-item">
          <div className='fle'>
            <a href='' className='navbar_link'>Our School</a>
            <div className="navbar-toggle" onClick={toggleMegamenu1}>
              <span className="navbar-toggle-icon">+</span>
            </div>
          </div>
          <div className={`mega-menu megamenu1 ${megamenu1Open ? 'show' : ''}`}>
            <div className="mega-menu-left">
              <img src={logo} alt="Image 1" />
              <h3 className='title_megamenu'>Lorem</h3>
              <p>Some description here description <br/> description description description<br/> description here.</p>
            </div>
            <div className="mega-menu-center">
              <NavLink exact='true' to='/PrincipalWelcome'>Principal’s Welcome</NavLink>
              <hr className='line_megamenu'/>
              <NavLink exact='true' to='/AboutUs'>About Us</NavLink>
              <hr className='line_megamenu'/>
              <NavLink exact='true' to='/ChooseUs'>Why choose Us</NavLink>
              <hr className='line_megamenu'/>
            </div>
            <div className="mega-menu-right">
              <NavLink exact='true' to='/VisionMissionValues'>Vision, Mission & values</NavLink>
              <hr className='line_megamenu'/>
              <NavLink exact='true' to='/Testimonials'>Testimonials</NavLink>
              <hr className='line_megamenu'/>
            </div>
          </div>
        </li>
        <li className="navbar-menu-item">
          <div className='fle'>
            <a href='' className='navbar_link'>Learning</a>
            <div className="navbar-toggle" onClick={toggleMegamenu2}>
              <span className="navbar-toggle-icon">+</span>
            </div>
          </div>
          <div className={`mega-menu megamenu2 ${megamenu2Open ? 'show' : ''}`}>
            <div className="mega-menu-left">
              <img src={logo} alt="Image 1" />
              <h3 className='title_megamenu'>Lorem</h3>
              <p>Some description here description <br/> description description description<br/> description here.</p>
            </div>
            <div className="mega-menu-center">
              <NavLink exact='true' to='/OurCurriculum'>Our Curriculum</NavLink>
              <hr className='line_megamenu'/>
              <NavLink exact='true' to='/AmazingLearning'>Amazing Learning</NavLink>
              <hr className='line_megamenu'/>
              <NavLink exact='true' to='/FoundationStages'>Foundation Stages</NavLink>
              <hr className='line_megamenu'/>
            </div>
            <div className="mega-menu-right">
              <NavLink exact='true' to='/PrimarySchool'>Primary School</NavLink>
              <hr className='line_megamenu'/>
              <NavLink exact='true' to='/SecondarySchool'>Secondary School</NavLink>
              <hr className='line_megamenu'/>
              <NavLink exact='true' to='/InclusionLearning'>Inclusion & Learning support</NavLink>
              <hr className='line_megamenu'/>
            </div>
          </div>
        </li>
        <li className="navbar-menu-item">
          <div className='fle'>
            <a href='' className='navbar_link'>Admissions</a>
            <div className="navbar-toggle" onClick={toggleMegamenu3}>
                <span className="navbar-toggle-icon">+</span>
            </div>
          </div>
          <div className={`mega-menu megamenu3 ${megamenu3Open ? 'show' : ''}`}>
            <div className="mega-menu-left">
              <img src={logo} alt="Image 1" />
              <h3 className='title_megamenu'>Lorem</h3>
              <p>Some description here description <br/> description description description<br/> description here.</p>
            </div>
            <div className="mega-menu-center">
              <NavLink exact='true' to='/AdmissionsProcess'>Admissions Process</NavLink>
              <hr className='line_megamenu'/>
              <NavLink exact='true' to='/AdmissionsPolicy'>Admissions Policy</NavLink>
              <hr className='line_megamenu'/>
              
            </div>
            <div className="mega-menu-right">
              <NavLink exact='true' to='/EnquireNow'>Enquire Now</NavLink>
              <hr className='line_megamenu'/>
            </div>
          </div>
        </li>
        <li className="navbar-menu-item">
          <div className='fle'>
            <a href='' className='navbar_link'>School Life</a>
            <div className="navbar-toggle" onClick={toggleMegamenu4}>
                <span className="navbar-toggle-icon">+</span>
            </div>
            </div>
          <div className={`mega-menu megamenu4 ${megamenu4Open ? 'show' : ''}`}>
            <div className="mega-menu-left">
              <img src={logo} alt="Image 1" />
              <h3 className='title_megamenu'>Lorem</h3>
              <p>Some description here description <br/> description description description<br/> description here.</p>
            </div>
            <div className="mega-menu-center">
              <NavLink exact='true' to='/SchoolDay'>School Day</NavLink>
              <hr className='line_megamenu'/>
              <NavLink exact='true' to='/CurricularActivitiess'>Extra curricular Activitiess</NavLink>
              <hr className='line_megamenu'/>
              <NavLink exact='true' to='/Uniform'>Uniform</NavLink>
              <hr className='line_megamenu'/>
            </div>
            <div className="mega-menu-right">
              <NavLink exact='true' to='/Transport'>Transport</NavLink>
              <hr className='line_megamenu'/>
              <NavLink exact='true' to='/SchoolPoliciess'>School Policiess</NavLink>
              <hr className='line_megamenu'/>
            </div>
          </div>
        </li>
        <li className="navbar-menu-item">
          <div className='fle'>
            <a href='' className='navbar_link'>News & Events</a>
            <div className="navbar-toggle" onClick={toggleMegamenu5}>
                <span className="navbar-toggle-icon">+</span>
            </div>
          </div>
          <div className={`mega-menu megamenu5 ${megamenu5Open ? 'show' : ''}`}>
            <div className="mega-menu-left">
              <img src={logo} alt="Image 1" />
              <h3 className='title_megamenu'>Lorem</h3>
              <p>Some description here description <br/> description description description<br/> description here.</p>
            </div>
            <div className="mega-menu-center">
              <NavLink exact='true' to='SchoolNews/'>School News</NavLink>
              <hr className='line_megamenu'/>
              
            </div>
            <div className="mega-menu-right">
              <NavLink exact='true' to='/UpcomingEvents'>Upcoming Events</NavLink>
              <hr className='line_megamenu'/>
            </div>
          </div>
        </li>
        <li className="navbar-menu-item">
          <div className='fle'>
            <a href='' className='navbar_link'>Contact Us</a>
            <div className="navbar-toggle" onClick={toggleMegamenu6}>
                <span className="navbar-toggle-icon">+</span>
            </div>
          </div>
          <div className={`mega-menu megamenu6 ${megamenu6Open ? 'show' : ''}`}>
            <div className="mega-menu-left">
              <img src={logo} alt="Image 1" />
              <h3 className='title_megamenu'>Lorem</h3>
              <p>Some description here description <br/> description description description<br/> description here.</p>
            </div>
            <div className="mega-menu-center">
              <NavLink exact='true' to='/Administration'>Administration</NavLink>
              <hr className='line_megamenu'/>
              <NavLink exact='true' to='/Enrollement'>Enrollement</NavLink>
              <hr className='line_megamenu'/>
              
            </div>
            <div className="mega-menu-right">
              <NavLink exact='true' to='/WorkingUs'>Working with us</NavLink>
              <hr className='line_megamenu'/> 
            </div>
          </div>
        </li>

      </ul>
      <a className="navbar-button">Enroll Now</a>
      <div className={`navbar-toggle ${isMenuOpen ? 'open' : ''}`} onClick={toggleMenu}>
        <div className="toggle-line"></div>
        <div className="toggle-line"></div>
        <div className="toggle-line"></div>
      </div>
      
      
    </nav>
  );
}

export default Navbar;