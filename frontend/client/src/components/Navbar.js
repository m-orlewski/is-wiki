import {Link} from 'react-router-dom'
import logoMoon from '../images/Moon.png';
import logoSun from '../images/Sun.png';
import useAuth from "../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import AuthContext from "../context/AuthProvider";
import { faPerson,faTimes,faBars,faCaretDown,faHouseUser,faArrowRightToBracket,faRegistered,faMoon,faSun,faArrowRightFromBracket, faThumbsUp} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from 'react';
import Dropdown from './Dropdown';
import styled, { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme, GlobalStyles } from "./Themes.js";

const StyledApp = styled.div`
  color: ${(props) => props.theme.fontColor};
`;

const Navbar = () => {
    const [click, setClick] = useState(false);
    const [logo,setLogo]=useState(logoMoon);
    const [clickTheme, setClickTheme] = useState(false);
    const [dropdown, setDropdown] = useState(false);
    const [theme, setTheme] = useState('light');
    const {setAuth} = useContext(AuthContext);
    const {auth} = useAuth();

    const navigate = useNavigate();
    const handleClick = () => setClick(!click);
    
    const handleClickTheme = () => {
      setClickTheme(!clickTheme);
      theme === 'light' ? setTheme('dark') : setTheme('light');
      logo === logoMoon ? setLogo(logoSun) : setLogo(logoMoon);
    }
    const closeMobileMenu = () => setClick(false);
  
    const onMouseEnter = () => {
      if (window.innerWidth < 960) {
        setDropdown(false);
      } else {
        setDropdown(true);
      }
    };
  
    const onMouseLeave = () => {
      if (window.innerWidth < 960) {
        setDropdown(false);
      } else {
        setDropdown(false);
      }
    };
  
    const logout = async () => {
        setAuth({});
        navigate('/');
    }

    return (
      <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <GlobalStyles />
      <StyledApp>
      <nav className='navbar'>

        <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
            <img src={logo} alt="Loo" width="80" height="100" style={{float: 'left'}}/>
            <h2 style={{marginTop: '20px'}}><span style={{color: '#f1356d',fontSize: '40px'}} >IS</span>-WIKI</h2>
        </Link>

        <div className='menu-icon' onClick={handleClick}>
            <FontAwesomeIcon icon={click ? faTimes: faBars} className={click ? 'fas fa-times' : 'fas fa-bars'}/>
        </div>
        
        {
          auth?.roles?.find(role => role===5150)? 
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
              <li className='nav-item'>
                <Link to='/' className='nav-links'>
                  <FontAwesomeIcon icon={faHouseUser}/> Home
                </Link>
              </li>
              <li className='nav-item' onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
                <Link to='/' className='nav-links' onClick={closeMobileMenu} >
                  Services <FontAwesomeIcon icon={faCaretDown} className='fas fa-caret-down'/>
                </Link>
                {dropdown && <Dropdown />}
              </li>
              <li className='nav-item'>
                <Link to='/profil' className='nav-links' >
                  <FontAwesomeIcon icon={faPerson}/> Profil
                </Link>
              </li>
              <li className='nav-item'>
                <Link to='/' className='nav-links' onClick={logout} >
                  <FontAwesomeIcon icon={faArrowRightFromBracket}/> Sign Out
                </Link>
              </li>
              <li className='nav-item'>
                <FontAwesomeIcon icon={clickTheme ? faSun: faMoon} style={{marginLeft: '20px'}}  onClick={handleClickTheme}/>
              </li>
            </ul>
          :auth?.roles?.find(role => role===2001)?
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
              <li className='nav-item'>
                <Link to='/' className='nav-links'>
                  <FontAwesomeIcon icon={faHouseUser}/> Home
                </Link>
              </li>
              <li className='nav-item' onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
                <Link to='/' className='nav-links' onClick={closeMobileMenu} >
                  Services <FontAwesomeIcon icon={faCaretDown} className='fas fa-caret-down'/>
                </Link>
                {dropdown && <Dropdown />}
              </li>
              <li className='nav-item'>
                <Link to='/profil' className='nav-links' >
                  <FontAwesomeIcon icon={faPerson}/> Profil
                </Link>
              </li>
              <li className='nav-item'>
                <Link to='/' className='nav-links' onClick={logout} >
                  <FontAwesomeIcon icon={faArrowRightFromBracket}/> Sign Out
                </Link>
              </li>
              <li className='nav-item'>
                <FontAwesomeIcon icon={clickTheme ? faSun: faMoon} style={{marginLeft: '20px'}}  onClick={handleClickTheme}/>
              </li>
            </ul>
          :
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
              <li className='nav-item'>
                <Link to='/base' className='nav-links' onClick={closeMobileMenu}>
                  <FontAwesomeIcon icon={faTimes}/> Base
                </Link>
                <Link to='/Opinion' className='nav-links' onClick={closeMobileMenu}>
                  <FontAwesomeIcon icon={faThumbsUp}/> Opinion
                </Link>
              </li>
              <li className='nav-item'>
                <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                  <FontAwesomeIcon icon={faHouseUser}/> Home
                </Link>
              </li>
              <li className='nav-item'>
                <Link to='/login' className='nav-links' onClick={closeMobileMenu} >
                  <FontAwesomeIcon icon={faArrowRightToBracket}/> Sign In
                </Link>
              </li>
              <li className='nav-item'>
                <Link to='/register' className='nav-links' onClick={closeMobileMenu} >
                  <FontAwesomeIcon icon={faRegistered}/> Sign Up
                </Link>
              </li>
              <li className='nav-item'>
                <FontAwesomeIcon icon={clickTheme ? faSun: faMoon} style={{marginLeft: '20px'}}  onClick={handleClickTheme}/>
              </li>
            </ul>
        }
      </nav>
      </StyledApp>
    </ThemeProvider>
    );
}
 
export default Navbar;