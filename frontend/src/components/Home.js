import { Link } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const Home = () => {
    const { auth } = useAuth();
    return (
        auth?.roles?.find(role => role===5150)
        ? 
        <section>
            <h1>Home</h1>
            <br />
            <p>You are logged in!</p>
            <br />
            <Link to="/editor">Go to the Editor page</Link>
            <br />
            <Link to="/admin">Go to the Admin page</Link>
            <br />
            <Link to="/lounge">Go to the Lounge</Link>
            <br />
            <Link to="/linkpage">Go to the link page</Link>
        </section>
        :
        <section>
            <h1>Home</h1>
        </section>
    )
}

export default Home