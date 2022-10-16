import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  html, body {
    font-family: Roboto, Helvetica, sans-serif
  }

  body {
    margin: 5em;
  }

  .react-multi-carousel-item {
    margin: 2em !important;
  }

  @media screen and (max-width: 981px),
    screen and (max-height: 376px) {

      body {
        margin: 0 3em;
      }

      .react-multi-carousel-item {
          width: 420px !important;
          height: 250px !important;
        }

      img {
        height: 150px;
        width: 200px;
      }

      .story-container {
        gap: 0;
        line-height: 24px;
      }
  }
`
