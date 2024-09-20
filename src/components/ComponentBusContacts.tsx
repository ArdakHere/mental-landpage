import React, { useState, forwardRef } from 'react';
import subscribe from '../assets/icons_images/subscribe.png';
import VideoPlayer from './ComponentDemoVideo';

const ComponentBusContacts = forwardRef((props, ref) => {

    return (
        <div ref={ref} className="component-nine-main"> 
            <h1 style={{scale:'1.2'}}>Contact Us</h1>
            <div style={{color: 'gray', fontSize: '24px'}}>For business inquiries, please contact us via E-mail or LinkedIn (click on the name):</div>
            <div style={{display: 'flex', flexDirection: 'row'}}>
                <div>
                    <a 
                        href="https://www.linkedin.com/in/aldamzhar-kiikbayev" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        style={{ color: 'inherit', textDecoration: 'none', fontSize: '24px'}}>
                            Aldamzhar Kiikbayev
                    </a> 
                        {" | CEO, co-CTO | zhalayev@gmail.com"}
                </div>
                <div>
                    <a 
                        href="https://www.linkedin.com/in/aldamzhar-kiikbayev" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        style={{ color: 'inherit', textDecoration: 'none', fontSize: '24px'}}>
                            Ardak Atagulov
                    </a> 
                        {" | CMO, co-CTO | ardak.atagulov@gmail.com"}
                </div>
            </div>
        </div>
    );
});

export default ComponentBusContacts;