import React, { useState, FormEvent } from "react";

import api from '../../services/api';

import { Container, Title, Form, Pokes, Pokediv  } from "./styles";

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

}

const Dashboard: React.FC = () => {
    const [newPoke, setNewCep] = useState('');
    const[pokes, setCep] = useState<PokeProps[]>([]);
    const pesquisarCep = async(event: FormEvent<HTMLFormElement>) =>  {
        event.preventDefault();

        try{
            const response = await api.get(`${newPoke}`);
            const cepDados = response.data;
            
            setCep([...pokes,cepDados]);


        }catch(err){

        }
        
    };

    return(
        <Container>
            <Title><img src={imagem} alt="" /></Title>

            <Form onSubmit={pesquisarCep}>
                <input type="string" placeholder="Digite o Pokémon"
                    onChange={e => setNewCep(e.target.value)}
                />

                <button type= "submit">Pesquisar</button>
            </Form>
            
            <Pokes>
                {pokes.map(poke => (
                    <a href="#" className={poke.types[0].type.name}>
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