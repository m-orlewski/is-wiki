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

`;