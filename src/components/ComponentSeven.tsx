
const ComponentSeven = () => {  
    return (
        <div className="component-seven-main">
            <h1 style={{scale: '1.2'}}>MVP Feedback</h1>
            <div style={{scale: '1', fontSize: '22px'}}>See what people had to say about our custom made AI assistant</div>
            <div style={{height: '30px'}}></div>

            <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'row', width: '80%', gap: '25px'}}>
                <div style={{backgroundColor: 'black', display: 'flex', border: '1px solid white', borderRadius: '10px', padding: '20px', width: '60%', justifyContent: 'center', alignItems: 'center'}}>
                    <div style={{width: '300px', fontStyle: 'italic'}}>I really liked the answers, they are very deep and meaningful. I didn't even expect such results, you won't see them on the Internet. It is clear that the answers are from professionals. It was very useful. <br/> (c) Aliya</div>
                </div>

                <div style={{backgroundColor: 'black', display: 'flex', border: '1px solid white', borderRadius: '10px', padding: '20px', width: '60%', justifyContent: 'center', alignItems: 'center'}}>
                    <div style={{width: '300px', fontStyle: 'italic'}}>I tried to chat with him in three languages, everything is working great for me. <br/> (c) Laura</div>
                </div>
            </div>
        </div>
    );
}

export default ComponentSeven;