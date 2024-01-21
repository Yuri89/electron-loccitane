import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }


    body{
        background: ${props => props.theme.colors.background};
        color: ${props => props.theme.colors.text};
    }

    .sidebar{
        background: ${props => props.theme.colors.backgroundSideBar};
        color: ${props => props.theme.colors.textSiderBar};
    }

    :root {
        

        /*Fontes*/
        font-family: 'KantumruyPro', 'InterTight', 'Archivo', 'BIZUDPGothic';
        --font-links-header-: 'KantumruyPro';
        --font-numero-: 'InterTight';
        --font-side-bar-: 'Archivo';
        --font-texto-destaque-: 'BIZUDPGothic';

        /*tamanho*/


        /*thema-ligth*/


  
    }

    /* Estilo geral da barra de rolagem para Electron (baseado em WebKit) */
::-webkit-scrollbar {
    width: 6.5px; /* Largura da barra de rolagem */
    height: 6.5px;
}

/* Estilo do trilho (parte fixa da barra de rolagem) */
::-webkit-scrollbar-track {
    background-color: #202020; /* Cor do trilho */
}

/* Estilo do polegar (a parte que você arrasta) */
::-webkit-scrollbar-thumb {
    background-color: #555; /* Cor do polegar */
}

/* Estilo do canto inferior direito do polegar ao ser arrastado */
::-webkit-scrollbar-thumb:hover {
    background-color: #3A3A3A; /* Cor ao passar o mouse sobre o polegar */
}
`;