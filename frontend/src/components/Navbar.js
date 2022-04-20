import {Link} from 'react-router-dom'
import logo from '../images/logo.png';
import useAuth from "../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import AuthContext from "../context/AuthProvider";

const Navbar = () => {
    const { setAuth } = useContext(AuthContext);
    const { auth } = useAuth();
    const navigate = useNavigate();

    const logout = async () => {
        // if used in more components, this should be in context 
        // axios to /logout endpoint 
        setAuth({});
        navigate('/');
    }
    const linkStyle ={backgroundColor: '#f1356d',borderRadius: '5px',color: '#fff'}
    return (
        auth?.roles?.find(role => role===5150)
        ? 
        <nav className="navbar">
            <img src={logo} alt="Loo" width="80" height="100"/>
            <h2>Paczuszka</h2>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/help">Help</Link>
                <Link to="/" style={linkStyle} onClick={logout}>Sign out</Link>
            </div>
        </nav>
        :
        auth?.roles?.find(role => role===1984)
        ?
        <nav className="navbar">
            <img src={logo} alt="Loo" width="80" height="100"/>
            <h2>Paczuszka</h2>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/help">Help</Link>
                <Link to="/" style={linkStyle} onClick={logout}>Sign out</Link>
            </div>
        </nav>
        :
        auth?.roles?.find(role => role===2001)
        ?
        <nav className="navbar">
            <img src={logo} alt="Loo" width="80" height="100"/>
            <h2>Paczuszka</h2>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/help">Help</Link>
                <Link to="/" style={linkStyle} onClick={logout}>Sign out</Link>
            </div>
        </nav>
        :
        <nav className="navbar">
            <img src={logo} alt="Loo" width="80" height="100"/>
            <h2>Paczuszka</h2>
            <div className="links" >
                <Link to="/">Home</Link>
                <Link to="/help">Help</Link>
                <Link to="/login">Sign in</Link>
                <Link to="/register" style={{linkStyle}}>Sign up</Link>
            </div>
        </nav>
    );
}
 
export default Navbar;