import detect from '../assets/icons_images/detect.png';
import agreement from '../assets/icons_images/agreement.png';
import service from '../assets/icons_images/service.png';
import payment from '../assets/icons_images/payment.png';
import React, { useEffect, useRef }from 'react';


const ComponentEight = () => {

    const fadeInRefs = useRef<(HTMLDivElement | null)[]>([]); // Array of refs

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                    }
                });
            },
            { threshold: 0.1 }
        );

        fadeInRefs.current.forEach((ref) => {
            if (ref) {
                observer.observe(ref);
            }
        });

        return () => {
            fadeInRefs.current.forEach((ref) => {
                if (ref) {
                    observer.unobserve(ref);
                }
            });
        };
    }, []);

    return (
        <div className="component-eight-main">
            <h1 style={{scale: '1.2'}}>Your Security - Our Priority</h1>
            <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
                <div style={{gap: '20px', display: 'flex', flexDirection:'column', justifyContent: 'center', alignItems: 'center'}}>
                        <div ref={(el) => (fadeInRefs.current[0] = el)} className="fade-in" 
                        style={{gap: '10px', display: 'flex', flexDirection: 'column', 
                        justifyContent: 'center', alignItems: 'center', marginBottom: '50px'}}>
                            <div className="secure-round-container">
                                <div style={{display: 'flex', flexDirection: 'row', gap: '10px'}}>
                                    <img src={payment}/>
                                    <img src={agreement}/>
                                </div>
                            </div>
                            <div style={{fontSize: '20px', width: '50%'}}>Secure payment gateways and escrow system</div>
                        </div>
                </div>
                
                <div style={{gap: '20px', display: 'flex', flexDirection:'column', justifyContent: 'center', alignItems: 'center'}}>
                        <div ref={(el) => (fadeInRefs.current[1] = el)} className="fade-in" 
                        style={{gap: '10px', display: 'flex', marginTop: '100px', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                            <div className="secure-round-container">
                                <div style={{display: 'flex', flexDirection: 'row', gap: '10px'}}>
                                    <img src={detect}/>
                                    <img src={service}/>
                                </div>
                            </div>  
                            <div style={{fontSize: '20px', width: '50%'}}>Robust fraud detection and customer support</div>  
                        </div>
                </div>
            </div>
        </div>
    )
}

export default ComponentEight;