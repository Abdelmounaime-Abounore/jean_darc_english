import './App.scss';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Accueil from './Components/Accueil';
import AboutUs from './Components/AboutUs';
import Administration from './Components/Administration'
import AdmissionsPolicy from './Components/AdmissionsPolicy'
import AdmissionsProcess from './Components/AdmissionsProcess'
import AmazingLearning from './Components/AmazingLearning'
import ChooseUs from './Components/ChooseUs'
import CurricularActivitiess from './Components/CurricularActivitiess'
import EnquireNow from './Components/EnquireNow'
import Enrollement from './Components/Enrollement'
import FoundationStages from './Components/FoundationStages'
import InclusionLearning from './Components/InclusionLearning'
import OurCurriculum from './Components/OurCurriculum'
import PrimarySchool from './Components/PrimarySchool'
import PrincipalWelcome from './Components/PrincipalWelcome'
import SchoolDay from './Components/SchoolDay'
import SchoolNews from './Components/SchoolNews'
import SchoolPoliciess from './Components/SchoolPoliciess'
import SecondarySchool from './Components/SecondarySchool'
import Testimonials from './Components/Testimonials'
import Transport from './Components/Transport'
import Uniform from './Components/Uniform'
import UpcomingEvents from './Components/UpcomingEvents'
import VisionMissionValues from './Components/VisionMissionValues'
import WorkingUs from './Components/WorkingUs'


function App() {
  return (
    <Routes>
      <Route path='/'  element={<Accueil />} />
      <Route path='/AboutUs'  element={<AboutUs />} />
      <Route path='/Administration'  element={<Administration />} />
      <Route path='/AdmissionsPolicy'  element={<AdmissionsPolicy />} />
      <Route path='/AdmissionsProcess'  element={<AdmissionsProcess />} />
      <Route path='/AmazingLearning'  element={<AmazingLearning />} />
      <Route path='/ChooseUs'  element={<ChooseUs />} />
      <Route path='/CurricularActivitiess'  element={<CurricularActivitiess />} />
      <Route path='/EnquireNow'  element={<EnquireNow />} />
      <Route path='/Enrollement'  element={<Enrollement />} />
      <Route path='/FoundationStages'  element={<FoundationStages />} />
      <Route path='/InclusionLearning'  element={<InclusionLearning />} />
      <Route path='/OurCurriculum'  element={<OurCurriculum />} />
      <Route path='/PrimarySchool'  element={<PrimarySchool />} />
      <Route path='/PrincipalWelcome'  element={<PrincipalWelcome />} />
      <Route path='/SchoolDay'  element={<SchoolDay />} />
      <Route path='/SchoolNews'  element={<SchoolNews />} />
      <Route path='/SchoolPoliciess'  element={<SchoolPoliciess />} />
      <Route path='/SecondarySchool'  element={<SecondarySchool />} />
      <Route path='/Testimonials'  element={<Testimonials />} />
      <Route path='/Transport'  element={<Transport />} />
      <Route path='/Uniform'  element={<Uniform />} />
      <Route path='/UpcomingEvents'  element={<UpcomingEvents />} />
      <Route path='/VisionMissionValues'  element={<VisionMissionValues />} />
      <Route path='/WorkingUs'  element={<WorkingUs />} />


    </Routes> 
);  
}

export default App;
