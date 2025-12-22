import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

// MAIN WEBSITE Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Chatbot from './components/Chatbot';

// PLAY-SCHOOL Components
import PlaySchoolHeader from './pages/play-school/PlaySchoolHeader';
import PlaySchoolFooter from './pages/play-school/PlaySchoolFooter';

// PRE-PRIMARY Components
import PrePrimaryHeader from './pages/pre-primary/PrePrimaryHeader';
import PrePrimaryFooter from './pages/pre-primary/PrePrimaryFooter';

// ICSE PRIMARY Components
import IcsePrimaryHeader from './pages/icse-primary/IcsePrimaryHeader';
import IcsePrimaryFooter from './pages/icse-primary/IcsePrimaryFooter';

// ICSE HIGH Components
import IcseHighHeader from './pages/icse-high/IcseHighHeader';
import IcseHighFooter from './pages/icse-high/IcseHighFooter';

// HIGH SCHOOL Components
import HighSchoolHeader from './pages/high-school/HighSchoolHeader';
import HighSchoolFooter from './pages/high-school/HighSchoolFooter';

// PU COLLEGE Components
import PuCollegeHeader from './pages/pu-college/PuCollegeHeader';
import PuCollegeFooter from './pages/pu-college/PuCollegeFooter';

// MAIN WEBSITE Pages
import Home from './pages/Home';
import About from './pages/About';
import Academics from './pages/Academics';
import Admissions from './pages/Admissions';
import Facilities from './pages/Facilities';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';

// PLAY-SCHOOL Pages
import PlaySchoolHome from './pages/play-school/PlaySchoolHome';
import PlaySchoolAbout from './pages/play-school/PlaySchoolAbout';
import PlaySchoolAcademic from './pages/play-school/PlaySchoolAcademic';
import PlaySchoolAdmissions from './pages/play-school/PlaySchoolAdmissions';
import PlaySchoolFacilities from './pages/play-school/PlaySchoolFacilities';
import PlaySchoolContact from './pages/play-school/PlaySchoolContact';
import PlaySchoolActivities from './pages/play-school/PlaySchoolActivities';
import PlaySchoolGallery from './pages/play-school/PlaySchoolGallery';
import PlaySchoolSchoolTimings from './pages/play-school/PlaySchoolSchoolTimings';
import PlaySchoolAcademicCalendar from './pages/play-school/PlaySchoolAcademicCalendar';
import PlaySchoolNews from './pages/play-school/PlaySchoolNews';

// PRE-PRIMARY Pages
import PrePrimaryHome from './pages/pre-primary/PrePrimaryHome';
import PrePrimaryAbout from './pages/pre-primary/PrePrimaryAbout';
import PrePrimaryAcademic from './pages/pre-primary/PrePrimaryAcademic';
import PrePrimaryFacilities from './pages/pre-primary/PrePrimaryFacilities';
import PrePrimaryActivities from './pages/pre-primary/PrePrimaryActivities';
import PrePrimaryNews from './pages/pre-primary/PrePrimaryNews';
import PrePrimaryAdmissions from './pages/pre-primary/PrePrimaryAdmissions';
import PrePrimaryContact from './pages/pre-primary/PrePrimaryContact';
import PrePrimarySchoolTimings from './pages/pre-primary/PrePrimarySchoolTimings';
import PrePrimaryAcademicCalendar from './pages/pre-primary/PrePrimaryAcademicCalendar';
import PrePrimaryGallery from './pages/pre-primary/PrePrimaryGallery';

// ICSE PRIMARY Pages
import IcsePrimaryHome from './pages/icse-primary/IcsePrimaryHome';
import IcsePrimaryAbout from './pages/icse-primary/IcsePrimaryAbout';
import IcsePrimaryAcademic from './pages/icse-primary/IcsePrimaryAcademic';
import IcsePrimaryCurriculum from './pages/icse-primary/IcsePrimaryCurriculum';
import IcsePrimaryCalendar from './pages/icse-primary/IcsePrimaryCalendar';
import IcsePrimaryTimings from './pages/icse-primary/IcsePrimaryTimings';
import IcsePrimaryAdmissions from './pages/icse-primary/IcsePrimaryAdmissions';
import IcsePrimaryFacilities from './pages/icse-primary/IcsePrimaryFacilities';
import IcsePrimaryEvents from './pages/icse-primary/IcsePrimaryEvents';
import IcsePrimaryClubs from './pages/icse-primary/IcsePrimaryClubs';
import IcsePrimaryCompetitions from './pages/icse-primary/IcsePrimaryCompetitions';
import IcsePrimaryFaculty from './pages/icse-primary/IcsePrimaryFaculty';
import IcsePrimaryGallery from './pages/icse-primary/IcsePrimaryGallery';
import IcsePrimaryNews from './pages/icse-primary/IcsePrimaryNews';
import IcsePrimaryContact from './pages/icse-primary/IcsePrimaryContact';

// ICSE HIGH Pages
import IcseHighHome from './pages/icse-high/IcseHighHome';
import IcseHighAbout from './pages/icse-high/IcseHighAbout';
import IcseHighAcademic from './pages/icse-high/IcseHighAcademic';
import IcseHighAdmissions from './pages/icse-high/IcseHighAdmissions';
import IcseHighFacilities from './pages/icse-high/IcseHighFacilities';
import IcseHighContact from './pages/icse-high/IcseHighContact';
import IcseHighSchoolTimings from './pages/icse-high/IcseHighSchoolTimings';
import IcseHighActivities from './pages/icse-high/IcseHighActivities';
import IcseHighCalendar from './pages/icse-high/IcseHighCalendar';

// HIGH SCHOOL Pages
import HighSchoolHome from './pages/high-school/HighSchoolHome';
import HighSchoolAbout from './pages/high-school/HighSchoolAbout';
import HighSchoolAcademic from './pages/high-school/HighSchoolAcademic';
import HighSchoolAdmissions from './pages/high-school/HighSchoolAdmissions';
import HighSchoolFacilities from './pages/high-school/HighSchoolFacilities';
import HighSchoolActivities from './pages/high-school/HighSchoolActivities';
import HighSchoolContact from './pages/high-school/HighSchoolContact';
import HighSchoolSchoolTimings from './pages/high-school/HighSchoolSchoolTimings';
import HighSchoolAcademicCalendar from './pages/high-school/HighSchoolAcademicCalendar';
import HighSchoolNews from './pages/high-school/HighSchoolNews';

// PU COLLEGE Pages
import PuCollegeHome from './pages/pu-college/PuCollegeHome';
import PuCollegeAbout from './pages/pu-college/PuCollegeAbout';
import PuCollegeAcademic from './pages/pu-college/PuCollegeAcademic';
import PuCollegeAdmissions from './pages/pu-college/PuCollegeAdmissions';
import PuCollegeFacilities from './pages/pu-college/PuCollegeFacilities';
import PuCollegeContact from './pages/pu-college/PuCollegeContact';
import PuCollegeCalendar from './pages/pu-college/PuCollegeCalendar';
import PuCollegeSchoolTimings from './pages/pu-college/Pucollegeschooltimings';
import PuCollegeActivities from './pages/pu-college/PuCollegeActivities';
import PuCollegeGallery from './pages/pu-college/PuCollegeGallery';

const ScrollToTopWrapper = () => {
  const { pathname } = useLocation();
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const Layout = ({ children }) => {
  const location = useLocation();
  const isPlaySchool = location.pathname.startsWith('/play-school');
  const isPrePrimary = location.pathname.startsWith('/pre-primary');
  const isIcsePrimary = location.pathname.startsWith('/icse-primary');
  const isIcseHigh = location.pathname.startsWith('/icse-high');
  const isHighSchool = location.pathname.startsWith('/high-school');
  const isPuCollege = location.pathname.startsWith('/pu-college');

  return (
    <div className="min-h-screen bg-background font-sans text-text selection:bg-secondary selection:text-primary">
      {isPlaySchool ? <PlaySchoolHeader /> :
        isPrePrimary ? <PrePrimaryHeader /> :
          isIcsePrimary ? <IcsePrimaryHeader /> :
            isIcseHigh ? <IcseHighHeader /> :
              isHighSchool ? <HighSchoolHeader /> :
                isPuCollege ? <PuCollegeHeader /> :
                  <Navbar />}

      <main>{children}</main>

      {/* Chatbot Component - Available on all pages */}
      <Chatbot />

      {isPlaySchool ? <PlaySchoolFooter /> :
        isPrePrimary ? <PrePrimaryFooter /> :
          isIcsePrimary ? <IcsePrimaryFooter /> :
            isIcseHigh ? <IcseHighFooter /> :
              isHighSchool ? <HighSchoolFooter /> :
                isPuCollege ? <PuCollegeFooter /> :
                  <Footer />}
    </div>
  );
};

function App() {
  return (
    <Router basename="/scadambi/">
      <ScrollToTopWrapper />
      <Layout>
        <Routes>
          {/* MAIN WEBSITE ROUTES */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/academics" element={<Academics />} />
          <Route path="/admissions" element={<Admissions />} />
          <Route path="/facilities" element={<Facilities />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />

          {/* PLAY-SCHOOL SECTION ROUTES */}
          <Route path="/play-school" element={<PlaySchoolHome />} />
          <Route path="/play-school/about" element={<PlaySchoolAbout />} />
          <Route path="/play-school/academic" element={<PlaySchoolAcademic />} />
          <Route path="/play-school/admissions" element={<PlaySchoolAdmissions />} />
          <Route path="/play-school/facilities" element={<PlaySchoolFacilities />} />
          <Route path="/play-school/contact" element={<PlaySchoolContact />} />
          <Route path="/play-school/activities" element={<PlaySchoolActivities />} />
          <Route path="/play-school/gallery" element={<PlaySchoolGallery />} />
          <Route path="/play-school/timings" element={<PlaySchoolSchoolTimings />} />
          <Route path="/play-school/calendar" element={<PlaySchoolAcademicCalendar />} />
          <Route path="/play-school/news" element={<PlaySchoolNews />} />

          {/* PRE-PRIMARY SECTION ROUTES */}
          <Route path="/pre-primary" element={<PrePrimaryHome />} />
          <Route path="/pre-primary/about" element={<PrePrimaryAbout />} />
          <Route path="/pre-primary/academic" element={<PrePrimaryAcademic />} />
          <Route path="/pre-primary/facilities" element={<PrePrimaryFacilities />} />
          <Route path="/pre-primary/activities" element={<PrePrimaryActivities />} />
          <Route path="/pre-primary/news" element={<PrePrimaryNews />} />
          <Route path="/pre-primary/admissions" element={<PrePrimaryAdmissions />} />
          <Route path="/pre-primary/schooltime" element={<PrePrimarySchoolTimings />} />
          <Route path="/pre-primary/calender" element={<PrePrimaryAcademicCalendar />} />
          <Route path="/pre-primary/contact" element={<PrePrimaryContact />} />
          <Route path="/pre-primary/gallery" element={<PrePrimaryGallery />} />

          {/* ICSE PRIMARY SECTION ROUTES */}
          <Route path="/icse-primary" element={<IcsePrimaryHome />} />
          <Route path="/icse-primary/about" element={<IcsePrimaryAbout />} />
          <Route path="/icse-primary/academic" element={<IcsePrimaryAcademic />} />
          <Route path="/icse-primary/curriculum" element={<IcsePrimaryCurriculum />} />
          <Route path="/icse-primary/calendar" element={<IcsePrimaryCalendar />} />
          <Route path="/icse-primary/timings" element={<IcsePrimaryTimings />} />
          <Route path="/icse-primary/admissions" element={<IcsePrimaryAdmissions />} />
          <Route path="/icse-primary/facilities" element={<IcsePrimaryFacilities />} />
          <Route path="/icse-primary/activities" element={<IcsePrimaryEvents />} />
          <Route path="/icse-primary/events" element={<IcsePrimaryEvents />} />
          <Route path="/icse-primary/clubs" element={<IcsePrimaryClubs />} />
          <Route path="/icse-primary/competitions" element={<IcsePrimaryCompetitions />} />
          <Route path="/icse-primary/faculty" element={<IcsePrimaryFaculty />} />
          <Route path="/icse-primary/gallery" element={<IcsePrimaryGallery />} />
          <Route path="/icse-primary/news" element={<IcsePrimaryNews />} />
          <Route path="/icse-primary/contact" element={<IcsePrimaryContact />} />

          {/* ICSE HIGH SECTION ROUTES */}
          <Route path="/icse-high" element={<IcseHighHome />} />
          <Route path="/icse-high/about" element={<IcseHighAbout />} />
          <Route path="/icse-high/academic" element={<IcseHighAcademic />} />
          <Route path="/icse-high/admissions" element={<IcseHighAdmissions />} />
          <Route path="/icse-high/facilities" element={<IcseHighFacilities />} />
          <Route path="/icse-high/timings" element={<IcseHighSchoolTimings />} />
          <Route path="/icse-high/activites" element={<IcseHighActivities />} />
          <Route path="/icse-high/calendar" element={<IcseHighCalendar />} />
          <Route path="/icse-high/contact" element={<IcseHighContact />} />

          {/* HIGH SCHOOL SECTION ROUTES */}
          <Route path="/high-school" element={<HighSchoolHome />} />
          <Route path="/high-school/about" element={<HighSchoolAbout />} />
          <Route path="/high-school/academic" element={<HighSchoolAcademic />} />
          <Route path="/high-school/admissions" element={<HighSchoolAdmissions />} />
          <Route path="/high-school/facilities" element={<HighSchoolFacilities />} />
          <Route path="/high-school/activities" element={<HighSchoolActivities />} />
          <Route path="/high-school/contact" element={<HighSchoolContact />} />
          <Route path="/high-school/schooltime" element={<HighSchoolSchoolTimings />} />
          <Route path="/high-school/calender" element={<HighSchoolAcademicCalendar />} />
          <Route path="/high-school/news" element={<HighSchoolNews />} />

          {/* PU COLLEGE SECTION ROUTES */}
          <Route path="/pu-college" element={<PuCollegeHome />} />
          <Route path="/pu-college/about" element={<PuCollegeAbout />} />
          <Route path="/pu-college/academic" element={<PuCollegeAcademic />} />
          <Route path="/pu-college/admissions" element={<PuCollegeAdmissions />} />
          <Route path="/pu-college/facilities" element={<PuCollegeFacilities />} />
          <Route path="/pu-college/contact" element={<PuCollegeContact />} />
          <Route path="/pu-college/calender" element={<PuCollegeCalendar />} />
          <Route path="/pu-college/schooltime" element={<PuCollegeSchoolTimings />} />
          <Route path="/pu-college/activities" element={<PuCollegeActivities />} />
          <Route path="/pu-college/gallery" element={<PuCollegeGallery />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;