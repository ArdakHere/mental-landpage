
const ComponentFour = () => {
    return (
        <div className="component-four-main">
            <h1 style={{scale: '1.2'}}>How does it work?</h1>
            
            <div className="steps-container">
                    <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '80px'}}>
                        <div className="type-of-client" style={{width: '50px'}}>Therapists</div>
                        <div className="step-text">

                            <div style={{gap: '20px',display: 'flex', flexDirection: 'column'}}>
                                <div className="step-container">
                                    <div>Step 1</div>
                                </div>
                            <div className="step-text-box">Sign up and integrate the AI assistant to handle patient queries</div>
                            </div>

                            <div style={{gap: '20px',display: 'flex', flexDirection: 'column'}}>
                                <div className="step-container">
                                    <div>Step 2</div>
                                </div>
                            <div className="step-text-box">Set your session rates and manage your patient flow effortlessly</div>
                            </div>

                            <div style={{gap: '20px', display: 'flex', flexDirection: 'column'}}>
                                <div className="step-container">
                                    <div>Step 3</div>
                                </div>
                            <div className="step-text-box">Secure payment through our escrow system, ensuring trust and reliability</div>
                            </div>
                        </div>
                    </div>

                    <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: '80px'}}>
                        <div className="type-of-client" style={{width: '50px'}}>Patients</div>
                        <div className="step-text">

                            <div style={{gap: '20px',display: 'flex', flexDirection: 'column'}}>
                                <div className="step-container">
                                    <div>Step 1</div>
                                </div>
                            <div className="step-text-box">Start with an AI-powered consultation to assess your mental health needs</div>
                            </div>

                            <div style={{gap: '20px',display: 'flex', flexDirection: 'column'}}>
                                <div className="step-container">
                                    <div>Step 2</div>
                                </div>
                            <div className="step-text-box">Book your session with a qualified therapist through our secure platform</div>
                            </div>

                            <div style={{gap: '20px', display: 'flex', flexDirection: 'column'}}>
                                <div className="step-container">
                                    <div>Step 3</div>
                                </div>
                            <div className="step-text-box">Secure payment through our escrow system, ensuring trust and reliability</div>
                            </div>
                        </div>
                    </div>
            </div>
        </div>
    )
}

export default ComponentFour;