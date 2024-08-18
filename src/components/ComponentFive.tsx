import { useEffect, useRef } from 'react';

import arrow_pay from '/src/assets/icons_images/arrow-line.png';

const ComponentFive = () => {
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
        <div className="component-five-main"> 
            <h1 style={{scale: '1.2'}}>Pricing & Payment Models</h1>
            <div className="pp-container">
                <div className="pp-individual-container">
                    <div style={{fontSize: '22px', border: '1px solid black', backgroundColor: 'white', width: 'fit-content', height: 'fit-content', padding: '10px', borderRadius: '10px'}}>
                        <div>Therapists</div>
                    </div>
                    <img style={{scale: '0.8'}} src={arrow_pay}></img>
                    
                    <div ref={(el) => (fadeInRefs.current[0] = el)} className="fade-in" style={{border: '1px solid black', color: 'white', backgroundColor: 'black', width: 'fit-content', height: 'fit-content', padding: '10px', borderRadius: '10px'}}>
                        <div>...Set their own session rates</div>
                    </div>

                    <img style={{scale:'0.8'}} src={arrow_pay}></img>
                    <div ref={(el) => (fadeInRefs.current[1] = el)} className="fade-in" style={{fontSize: '22px', border: '1px solid black', color: 'white', backgroundColor: 'black', width: 'fit-content', height: 'fit-content', padding: '10px', borderRadius: '10px'}}>
                        <div>...Earn secure payments with a platform commision of 10-20%</div>
                    </div>
                </div>
                <div className="pp-individual-container">
                    <div style={{fontSize: '22px', border: '1px solid black', backgroundColor: 'white', width: 'fit-content', height: 'fit-content', padding: '10px', borderRadius: '10px'}}>
                        <div>Patients</div>
                    </div>
                    <img style={{scale: '0.8'}}src={arrow_pay}></img>

                    <div ref={(el) => (fadeInRefs.current[2] = el)} className="fade-in" style={{fontSize: '22px', border: '1px solid black', color: 'white', backgroundColor: 'black', width: 'fit-content', height: 'fit-content', padding: '10px', borderRadius: '10px'}}>
                        <div>...Pay per session or choose a subscription plan for regular consultations</div>
                    </div>
                    <img style={{scale:'0.8'}} src={arrow_pay}></img>

                    <div ref={(el) => (fadeInRefs.current[3] = el)} className="fade-in" style={{fontSize: '22px', border: '1px solid black', color: 'white', backgroundColor: 'black', width: 'fit-content', height: 'fit-content', padding: '10px', borderRadius: '10px'}}>
                        <div>...Transparent fees and secure transactions</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ComponentFive;