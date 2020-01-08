import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  @import url("https://fonts.googleapis.com/css?family=Roboto&display=swap");

  *{
    padding:0;
    margin:0;
    outline:0;
    box-sizing:border-box;
  }

  body{
    background:rgb(246, 238, 89);
    overflow:hidden;
    font-family: 'Roboto', sans-serif;
    text-rendering: optimizeLegibility !important;
    -webkit-font-smoothing: antialiased !important;
  }

  html,body, #root{
    height:100%;
  }



`;
