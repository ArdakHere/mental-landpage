import React, { useState, forwardRef } from 'react';
import subscribe from '../assets/icons_images/subscribe.png';
import VideoPlayer from './ComponentDemoVideo';

const ComponentNine = forwardRef((props, ref) => {
    const [email, setEmail] = useState('');
    const [status, setStatus] = useState(null);

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handleSubmit = async () => {

        if (email) {
            try {
                const url = 'https://api.sheety.co/aafe2313dd8325f7c75c350f80f3d41a/updatedMental/sheet1';
                const body = {
                    sheet1: 
                        {
                            email: email
                        }
                    
                };
                console.log('email:', email);
                const response = await fetch(url, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(body)
                });
    
                const data = await response.json();
                console.log('Response status:', response.status);
                console.log('Response data:', data);
    
                if (response.ok) {
                    setStatus('success');
                } else {
                    console.error('Server error:', data.errors);
                    setStatus('error');
                }
            } catch (error) {
                console.error('Error:', error);
                setStatus('error');
            }
        } else {
            alert('Please enter a valid email address');
        }
    };
    
    
    return (
        <div ref={ref} className="component-nine-main"> 
            <h1 style={{scale: '1'}}>Ready to Revolutionize Your Mental Health Experience?</h1>
            <div style={{height: '25px'}}></div>
            <div style={{fontSize: '28px'}}>Subscribe to our Newsletter</div>
            <div style={{fontSize: '20px'}}>(platform development updates, feedback, special offers and more)</div>

            <div className="newsletter-cont">
                <input 
                    type="email" 
                    placeholder="Email Address" 
                    value={email}
                    onChange={handleEmailChange}
                />
                <button onClick={handleSubmit}>
                    <div className="sub-button">Subscribe</div>
                </button>
            </div>

            {status === 'success' && <p style={{ color: 'green' }}>Thank you for subscribing!</p>}
            {status === 'error' && <p style={{ color: 'red' }}>Subscription failed. Please try again.</p>}
        </div>
    );
});

export default ComponentNine;