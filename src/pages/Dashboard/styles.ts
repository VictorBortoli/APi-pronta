import styled from 'styled-components';
import {shade} from 'polished';

export const Container = styled.div`
    width: 80%;
    margin: auto;
`;

export const Title = styled.h2`
    font-size: 48px;
    color: #3a3a3a;
    max-width: 590px;
    line-heigth: 56px;

    margin-top: 80px;
`;

export const Form = styled.form`
    margin-top: 40px;
    max-width: 650px;

    display: flex;

    input {
        flex: 1;
        height: 45px;
        padding: 0 24px;
        border: 2px solid #fff;
        border-radius: 8px 0 0 8px; 
        color: #3a3a3a;
        border-right: 0;

        &::placeholder{
            color: #a8a8b3
        }
    }

    button{
        width: 160px;
        height: 45px;
        background:#04d361;
        border-radius: 0 5px 5px 0;
        border: 0;
        color: #fff;
        font-weight: bold;

        transition: background-color 0.2s;

        &:hover{
            background: ${shade(0.2,'#00ff33')}
        }

    }
`;
