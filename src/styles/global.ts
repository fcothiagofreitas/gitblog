import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :focus {
    outline: 0; 
  }

  body{
    --webkti-font-smoothing: antialiased;
  }
  body, input, textarea, button{ 
    font-size: 1rem;
    font-weight: 400;
  }
`
