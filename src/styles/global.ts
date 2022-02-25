import {createGlobalStyle} from 'styled-components';

export default createGlobalStyle`
    *{
        margin:0;
        padding:0;
        outline:0;
        box-sizing: border-box;
        font: Oswald, san-serif;
    }

    body{
        background: #1c1c1c;
    }

    body, input, button{
        font: px Oswald, san-serif;
        
    }

    #root{
        max-width: 960px;
        margin: 0 auto;
        padding: 40px 20 px;
    }

    button{
        cursor:pointer;
        color: #000
    }

    .bug{
        border: 4px solid #3b9950;
        box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
    }

    .dark{
        border: 4px solid #5a5979;
        box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
    }

    .dragon{
        border: 4px solid #61c9d9;
        box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
    }

    .electric{
        border: 4px solid #fbfb72;
        box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
    }

    .fairy{
        border: 4px solid #ea1369;
        box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
    }

    .fighting{
        border: 4px solid #ef6138;
        box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
    }

    .fire{
        border: 4px solid #fd4c5a;
        box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
    }

    .flying{
        border: 4px solid #93b2c7;
        box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
    }

    .ghost{
        border: 4px solid #906790;
        box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
    }

    .grass{
        border: 4px solid #27cb4f;
        box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
    }

    .ground{
        border: 4px solid #a9702c;
        box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
    }

    .ice{
        border: 4px solid #b3e9ff;
        box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
    }

    .normal{
        border: 4px solid #ca98a7;
        box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
    }

    .poison{
        border: 4px solid #9b69d9;
        box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
    }

    .psychic{
        border: 4px solid #ff03ff;
        box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
    }

    .rock{
        border: 4px solid #48180b;
        box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
    }

    .steel{
        border: 4px solid #42bd94;
        box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
    }

    .water{
        border: 4px solid #1552e2;
        box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
    }
`;