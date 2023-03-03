import { createGlobalStyle } from 'styled-components'
import reset from 'styled-reset'

const GlobalStyles = createGlobalStyle`
  ${reset}

  :root {
    font-size: 10px;
  }
  body {
    font-family: Arial, Helvetica, sans-serif;
  }
  *,
  *:before,
  *:after {
    box-sizing: border-box;
  }
  
  a,
  button {
    color: inherit;
    text-decoration: none;
    cursor: pointer;
  }
  input {
    border: 0;
    outline: 0;
    color: inherit;
  }


`
export default GlobalStyles
