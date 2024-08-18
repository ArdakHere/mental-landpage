
import bar from '../assets/icons_images/bar_chart.png';
import clock from '../assets/icons_images/clock.png';
import management from '../assets/icons_images/management.png';
import money from '../assets/icons_images/money.png';
import React, { useEffect, useRef }from 'react';



const ComponentTwo = () => {

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
    return(
        <div className="component-two-main">
            <div style={{width:'50%'}}>
                <div style={{height: '40px'}}></div>
                <h1 style={{scale: '1.2', color: 'white'}}>What problems exist?</h1>
                <div className="problems-container">
                    <div ref={(el) => (fadeInRefs.current[0] = el)} className="fade-in" >
                        <h2>For Therapists</h2>
                        <div className="problem-container">
                            <img style={{scale: '0.5'}} src={management}/>
                            <div style={{padding: '5px 10px'}}>Overwhelmed by patient management?</div>
                        </div>
                        <div style={{height: '30px'}}></div>
                        <div className="problem-container">
                            <img style={{scale: '0.5', marginTop: '10px'}} src={bar}/>
                            <div style={{padding: '1px 5px'}}>Struggling with inconsistent patient flow and income stability?</div>
                        </div>
                    </div>
                    <div ref={(el) => (fadeInRefs.current[1] = el)} className="fade-in" >
                        <h2>For Patients</h2>
                        <div className="problem-container">
                            <img style={{scale: '0.5'}} src={clock}/>
                
                            <div style={{padding: '5px 10px'}}>Tired of long wait times for therapy?</div>
                        </div>
                        <div style={{height: '30px'}}></div>
                        <div className="problem-container">
                            <img style={{scale: '0.5'}} src={money}/>

                            <div style={{padding: '5px 10px'}}>Seeking affordable, immediate mental health consultations?</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ComponentTwo;