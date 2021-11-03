import React, {useState} from 'react';

import About from './pages/About';
import Contact from './pages/Contact';
import Portfolio from './pages/Portfolio';
import Resume from './pages/Resume';
import Header from './components/Header';
import Footer from './components/Footer';
import Container from './components/Container';

function App () {
  const [currentPage, setCurrentPage] = useState('About');

  const renderPage = () => {
    if (currentPage === 'About') {
      return <About />;
    }
    if (currentPage === 'Portfolio') {
      return <Portfolio />;
    }
    if (currentPage === 'Contact') {
      return <Contact />;
    }
    return <Resume />
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return <div>
  <Header handlePageChange={handlePageChange} currentPage={currentPage}/>
  <Container renderPage={renderPage} />
  <Footer />

  </div>
}

export default App;