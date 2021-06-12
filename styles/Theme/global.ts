import {createGlobalStyle} from 'styled-components'


export const GlobalStyle = createGlobalStyle`
  body {
    background: ${props => props.theme.background};
    color: ${props => props.theme.colorText};
    transition: all .3s;
  }

  // Inputs
  .input-default {
    background: ${props => props.theme.background};
    border-color: ${props => props.theme.border};
    color: ${props => props.theme.colorText};
    transition: all .3s;
  }

  // Checkboxes
  input[type="checkbox"] + label::before {
    background: ${props => props.theme.background};
    border-color: ${props => props.theme.border};
    transition: all .3s;
  }

  // HR
  .divider {
    background: ${props => props.theme.divider};
    border-color: ${props => props.theme.divider};
    transition: all .3s;
  }

  .divider-content:before {
    background: ${props => props.theme.background};
    color: ${props => props.theme.colorText};
    transition: all .3s;
  }

  // Buttons
  button {
    &.btn-social {
      color: ${props => props.theme.colorText};
      border-color: ${props => props.theme.border};
      transition: all .3s;
    }

    &.btn-left {
      border-color: ${props => props.theme.border};
      color: ${props => props.theme.colorText};
    }
  }

  // Components 

  // Sliders
  .login-slider {
    background: ${props => props.theme.loginSliderBg};
    transition: all .3s;

    .swiper-container {
      .swiper-pagination-bullet {
        background: ${props => props.theme.secondaryBackground};
        transition: all .3s;
      }
    }
  }

  // Password Validation strong
  .pass-v-item {
    background: ${props => props.theme.secondaryBackground};
    transition: all .3s;
  }

  // Hide,show pass
  .tgl-psw {
    fill: ${props => props.theme.togglePass};
  }
`