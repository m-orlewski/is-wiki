import logo from "../images/1.svg";
import { Link } from "react-router-dom"

const Lecturer = () => {
    return (
        <section>
            <div className="lecturer">
                <img src={logo} alt="Logo" width="150px" height="150px"/>
                <h2>dr hab. inż. Jan Kowalski</h2>
                <button>Edytuj profil</button>
            </div>
            <div className="lecturer-content">
                <h2>Pokój</h2>
                <h5>D-10 299</h5>
                <br/><br/>
                <h2>Telefon</h2>
                <h5>12 617 99 99</h5>
                <br/><br/>
                <h2>Email</h2>
                <h5>jan.kowalski@agh.edu.pl</h5>
                <br/>
            </div>
            <div className="lecturer-content" style={{width: '48%'}}>
                <h1>Najprzydatniejsze opinie:</h1>
                <br/><br/>
                <h2>21.02.2021 &nbsp; Adam Abacki</h2>
                <h5>"Bardzo dobry prowadzący!"</h5>
                <br/><br/>
                <h2>13.04.2021 &nbsp; Bogdan Babacki</h2>
                <h5>"0/10 nie zdałem..."</h5><br/>
                <button style={{marginRight: '20vh'}}>Wszystkie opinie</button>
                <button style={{marginRight: '10vh'}}>Wystaw opinię</button>
            </div>
           
            <div className="lecturer-content">
                <h1>Prowadzone przedmioty:</h1><br/>
                <Link to="/subject">- Podstawy Informatyki</Link>
                <h5>- Wstęp do cotangensa nieobliczonego</h5><br/>
            </div>
            <div style={{clear: 'both'}}/>
            
        </section>
    )
}

export default Lecturer