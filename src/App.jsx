// import Hero from './sections/Hero.jsx';
// import About from './sections/About.jsx';
// import Footer from './sections/Footer.jsx';
// import Navbar from './sections/Navbar.jsx';
// import Contact from './sections/Contact.jsx';
// import Clients from './sections/Clients.jsx';
// import Projects from './sections/Projects.jsx';
// import WorkExperience from './sections/Experience.jsx';

// const App = () => {
//   return (
//     <main className="max-w-7xl mx-auto relative">
//       <Navbar />
//       <Hero />
//       <About />
//       <Projects />
//       <Clients />
//       <WorkExperience />
//       <Contact />
//       <Footer />
//     </main>
//   );
// };

// export default App;

import { Routes, Route } from 'react-router-dom';

import Hero from './sections/Hero.jsx';
import About from './sections/About.jsx';
import Footer from './sections/Footer.jsx';
import Navbar from './sections/Navbar.jsx';
import Contact from './sections/Contact.jsx';
import Clients from './sections/Clients.jsx';
import Projects from './sections/Projects.jsx';
import WorkExperience from './sections/Experience.jsx';
import Certifications from './sections/Certifications.jsx'; // new page
import CV from './sections/cv.jsx'; // Add this import

const Home = () => (
  <>
    <Hero />
    <About />
    <Projects />
    <Clients />
    <WorkExperience />
    <Contact />
    <Footer />
  </>
);

const App = () => {
  return (
    <main className="max-w-7xl mx-auto relative">
      <Navbar />
      <Routes>
  <Route path="/" element={<Home />} />
  <Route path="/certifications" element={<Certifications />} />
  <Route path="/cv" element={<CV />} /> {/* 👈 Add this route */}
</Routes>
    </main>
  );
};

export default App;
