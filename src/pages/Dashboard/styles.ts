import styled from 'styled-components';
import {shade} from 'polished';

export const Container = styled.div`
    width: 100%;
    margin: auto;
    
`;

export const Title = styled.h2`
    display: flex;
    justify-content: center;
    align-items:center;
    line-heigth: 56px;
    margin-top: 80px;
    margin-bottom: 30px;
`;

export const Form = styled.form`
    margin-top: 80px;
    max-width: 500px;
    margin: auto;
    display: flex;

    input {
        flex: 1;
        height: 45px;
        padding: 0 24px;
        border: 2px solid #fff;
        border-radius: 10px 0 0 10px; 
        color: #3a3a3a;
        border-right: 0;
        border-top: 2px solid #356abc;
        border-bottom: 2px solid #356abc;
        border-left: 2px solid #356abc;
        &::placeholder{
            color: #a8a8b3
        }
    }

    button{
        width: 140px;
        height: 45px;
        background:#ffda42;
        border-radius: 0 5px 5px 0;
        border: 0;
        color: #000;
        font-weight: bold;
        border-top: 2px solid #356abc;
        border-bottom: 2px solid #356abc;
        border-right: 2px solid #356abc;
        transition: background-color 0.2s;

        &:hover{
            background: ${shade(0.2,'#ffcd00')}
        }

    }
`;

export const Pokes = styled.div`
    margin-top: 80px;
    width: 100%;
    display:flex;
    justify-content:center;
    align-items: center;
    flex-wrap: wrap;
    
    a{
        background: #fff;
        display: flex;
        align-items: center;
        justify-content:space-between
        border-radius: 5px;
        border-radius:8px;
       
        padding: 24px;
        text-decoration: none;
        
        img{
            min-width:150px;
            margin-left: -20px;
        }
        
        transition: transform 0.2s;

        &:hover {
            transform: translate(5px);
        }
        margin-top: 16px;
        margin-left: 20px;
       

        

        div {
            width: 150px;
         
            margin: 0 10px 0 -15px;
            flex: 1;

            strong{
                    font-size: 20px;
                    min-width:100%;
                    color: #3d3d4d;
            }

            p{
                font-size: 22px;
                color: #4a4948;
                margin-top: 6px;
                min-width:100%;
            }
        }
    }


`;

export const Pokediv=styled.div`
    display:flex;
    justify-content:center;
    width:100%;
    flex-direction:row;
    flex-wrap:wrap;

`; 

