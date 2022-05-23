import { Link } from "react-router-dom"

const Subject = () => {
    return (
        <section>
            <div className="subject">
                <h2>Podstawy Informatyki</h2>
                <h5>Semestr I</h5> 
            </div>
            <div className="subject-content" style={{width: '48%'}}>
                <h1>Najprzydatniejsze opinie:</h1>
                <br/><br/>
                <h2>21.02.2021 &nbsp; Adam Abacki</h2>
                <h5>"Uwielbiam ten przedmiot!"</h5>
                <br/><br/>
                <h2>13.04.2021 &nbsp; Bogdan Babacki</h2>
                <h5>"0/10 nie zdałem..."</h5><br/>
                <button style={{marginRight: '20vh'}}>Wszystkie opinie</button>
                <button style={{marginRight: '10vh'}}>Wystaw opinię</button>
            </div>
           
            <div className="subject-content">
                <h1>Prowadzący:</h1><br/>
                <Link to="/lecturer">- dr hab. inż. Jan Kowalski</Link><br/>
            </div>
            <div class="subject-material">
                <button>Materiały do zajęć</button>
            </div>
            <div style={{clear: 'both'}}/>
            
        </section>
    )
}

export default Subject