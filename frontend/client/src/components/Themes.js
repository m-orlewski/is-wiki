import { createGlobalStyle } from "styled-components";

export const lightTheme = {
  body: "#fff",
  fontColor: "#333"
};

export const darkTheme = {
  body: "#333",
  fontColor: "#fff"
};

export const GlobalStyles = createGlobalStyle`

  * {
    color: ${(props) => props.theme.fontColor};
  }
	body {
		background-color: ${(props) => props.theme.body};

	}
  input {
    color:  #333;
  }
  .nav-links:hover {
    color: ${(props) => props.theme.body};
  }
  .dropdown-link:hover {
    color: ${(props) => props.theme.body};
  }
  .nav-menu.active {
    background: ${(props) => props.theme.body};
  }
  .profile
  {
    background: linear-gradient(to bottom,  #33a3db 0%,${(props) => props.theme.body} 100%);
  }
`;