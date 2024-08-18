


const ComponentSix = () => {

    return(
        <div className="component-six-main">
            <h1 style={{scale: '1.2'}}>Why choose Mental?</h1>
            <div className="statement-container">
                <div style={{fontSize: '30px'}}>For Therapists</div>
                <div className="statement-individual-container">
                    <li>Flexible rates and secure, timely payments</li>
                    <li>Consistent client flow and predictable income</li>
                </div>
            </div>
            
            <div style={{width: '100%', border: '1px solid black'}}></div>

            <div className="statement-container" style={{justifyContent: 'end', alignItems: 'end'}}>
                <div style={{fontSize: '30px', alignItems: 'center'}}>For Patients</div>
                <div className="statement-individual-container">
                    <li>Quick access to therapy, affordable initial assessments</li>
                    <li>Secure and transparent payment processes</li>
                </div>
            </div>
        </div>
    )
}

export default ComponentSix;