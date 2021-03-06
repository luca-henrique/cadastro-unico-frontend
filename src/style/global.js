import { createGlobalStyle } from "styled-components";
import "react-redux-toastr/lib/css/react-redux-toastr.min.css";

export default createGlobalStyle`
  

  *{
    padding:0;
    margin:0;
    outline:0;
    box-sizing:border-box;
  }

  body{
    overflow:hidden;
    font-family: 'Roboto', sans-serif;
    text-rendering: optimizeLegibility !important;
    -webkit-font-smoothing: antialiased !important;
  }

  html,body, #root{
    height:100%;
    background-color:#f2f2f2;
  }



`;
