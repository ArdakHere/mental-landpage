
import ai_assistant from '../assets/icons_images/ai_assistant.png';
import stream from '../assets/icons_images/stream.png';
import fast from '../assets/icons_images/fast.png';
import assessment from '../assets/icons_images/assessment.png';
import React, { useEffect, useRef }from 'react';

const ComponentThree = () => {

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
        <div className="component-three-main">
            <div style={{width:'50%'}}>
            <h1 style={{scale: '1.2'}}>What's the solution?</h1>

                <div className="problems-container" style={{color: 'black'}}>
                    
                    <div ref={(el) => (fadeInRefs.current[0] = el)} className="fade-in-three">
                        <h2>For Therapists</h2>
                        <div className="problem-container-pos">
                            <img style={{scale: '0.5'}} src={ai_assistant}/>
                            <div style={{padding: '0px 10px'}}>AI Assistant to reduce workload with efficient patient query management</div>
                        </div>
                        <div style={{height: '30px'}}></div>
                        <div className="problem-container-pos">
                            <img style={{scale: '0.5'}} src={stream}/>
                            <div style={{padding: '5px 10px'}}>Access to a steady stream of patients for stable income</div>
                        </div>
                    </div>
                    <div ref={(el) => (fadeInRefs.current[1] = el)} className="fade-in-three">
                        <h2>For Patients</h2>
                        <div className="problem-container-pos">
                            <img style={{scale: '0.5'}} src={assessment}/>
                
                            <div style={{padding: '5px 10px'}}>AI Consultant for quick, accurate initial assessments</div>
                        </div>
                        <div style={{height: '30px'}}></div>
                        <div className="problem-container-pos">
                            <img style={{scale: '0.5'}} src={fast}/>

                            <div style={{padding: '5px 10px'}}>Faster access to qualified therapists at affordable rates</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ComponentThree;