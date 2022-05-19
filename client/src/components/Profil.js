import { Link } from "react-router-dom";
import Users from './Users';

const Profil = () => {
    return (
        <section>
            <h1>Profil Page</h1>
            <br />
            <Users />
            <br />
            <div className="flexGrow">
                <Link to="/">Home</Link>
            </div>
        </section>
    )
}

export default Profil