import React, { useState, FormEvent } from "react";

import api from '../../services/api';

import { Container, Title, Form, Pokes, Pokediv, ErrorDiv  } from "./styles";

import imagem from '../../img/pokem.png';



interface PokeProps{
    abilities:[
        {
            ability:{
                name: string;
            }
        },
        {
            ability:{
                name: string;
            }
        }

    ]
    base_experience: number;
    
    forms:[
    
    
        {
            name: string;
        }
    ]

    sprites:{
        front_default:string;
    }

    types:[
        {
            type:{
                name:string;
            }
        }
    ]
    id:number;

}

const Dashboard: React.FC = () => {
    const [newPoke, setNewCep] = useState('');
    const[pokes, setCep] = useState<PokeProps[]>([]);
    const[inputError, setInputError]= useState('');
    const pesquisarCep = async(event: FormEvent<HTMLFormElement>) =>  {
        event.preventDefault();

        if(!newPoke){
            setInputError("Digite um pokémon para pesquisar.")
            return;
        }

        try{
            const response = await api.get(`${newPoke}`);
            const cepDados = response.data;
            
            setCep([...pokes,cepDados]);
            setNewCep('');
            setInputError('');

            


        }catch(err){
            setInputError('Pokémon não encontrado.')
        }
        
    };

    return(
        <Container>
            <Title><img src={imagem} alt="" /></Title>

            <Form onSubmit={pesquisarCep}>
                <input type="string" placeholder="Digite o Pokémon"
                value={newPoke}
                    onChange={e => setNewCep(e.target.value)}
                />

                <button type= "submit">Pesquisar</button>
            </Form>
            <ErrorDiv>

            {inputError && <h1>{inputError}</h1>}
            </ErrorDiv>
            
            <Pokes>
                {pokes.map(poke => (
                    <a href="#" className={poke.types[0].type.name}>
                        <p className="mar">#{poke.id}</p>
                        <img src={poke.sprites.front_default} />
                        {/* <p className="uf">{poke.}</p> */}
                        <div>
                            <strong>{poke.forms[0].name.toUpperCase()}</strong>                    
                            <p>{poke.abilities[0].ability.name}</p>
                            <p>{poke.abilities[1].ability.name}</p>
                            <p>{poke.types[0].type.name}</p>
                        </div>
                    </a>
        ))}
          
            </Pokes>
            
        </Container>
    );
};

export default Dashboard;