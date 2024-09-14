import { useState, useRef } from 'react';
import React from 'react';

import './App.css';
import ComponentOne from './components/ComponentOne';
import ComponentTwo from './components/ComponentTwo';
import ComponentThree from './components/ComponentThree';
import ComponentFour from './components/ComponentFour';
import ComponentFive from './components/ComponentFive';
import ComponentSix from './components/ComponentSix';
import ComponentEight from './components/ComponentEight';
import ComponentNine from './components/ComponentNine';
import ComponentSeven from './components/ComponentSeven';
import ComponentZero from './components/ComponentZero';
import ComponentDemoVideo from './components/ComponentDemoVideo';
import LogoOutro from './components/LogoOutro';

function App() {
  const componentNineRef = useRef(null);

  const scrollToComponentNine = () => {
    componentNineRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <ComponentOne onNewsletterClick={scrollToComponentNine} />
      <div style={{ height: '60px' }}></div>
      <ComponentZero />
      <div style={{ height: '60px' }}></div>
      <ComponentTwo />
      <div style={{ height: '60px' }}></div>
      <ComponentThree />
      <div style={{ height: '60px' }}></div>
      <ComponentFour />
      <div style={{ height: '60px' }}></div>
      <ComponentFive />
      <div style={{ height: '60px' }}></div>
      <ComponentSix />
      <div style={{ height: '60px' }}></div>
      <ComponentEight />
      <div style={{ height: '60px' }}></div>
      <ComponentSeven />
      <div style={{ height: '60px' }}></div>
      <ComponentNine ref={componentNineRef} /> 
      <div style={{ height: '60px' }}></div>
      <LogoOutro />
    </>
  );
}

export default App;
