import React from 'react';
import TypingAnimation from './TypingAnimation';

const ComponentOne = ({ onNewsletterClick }) => {
  return (
    <div className="component-one-main">
      <div className="logo-container-white">
        <h1 style={{ display: 'flex', alignItems: 'center', color: 'black', fontSize: '60px' }}>
          Ment<span style={{ color: 'green' }}>al</span>
        </h1>
      </div>
      <div style={{ display: 'flex', width: '70%', justifyContent: 'center'}}>
        <h1 style={{ color: 'white' }}>
          <TypingAnimation text="Revolutionizing Mental Health Care" speed={50} />
        </h1>
      </div>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <div style={{ color: 'white', width: '100%', fontSize: '18px' }}>
          <TypingAnimation text="Instant access to quality mental health support for both therapists and patients" speed={40} />
        </div>
      </div>
      <div style={{ height: '30px' }}></div>
      <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', gap: '25px' }}>
        <div className="component-one-main-button-right" onClick={onNewsletterClick}>
          <h3>Newsletter</h3>
        </div>
      </div>
    </div>
  );
};

export default ComponentOne;
