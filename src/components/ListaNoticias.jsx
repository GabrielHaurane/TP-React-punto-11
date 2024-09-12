import React, { useEffect, useState } from 'react';
import Noticia from './Noticia';
import axios from 'axios';

const ListaNoticias = ({categoria}) => {
    const [noticias, setNoticias]=useState([]);
    
    useEffect(()=>{
        const getAPI = async ()=>{
            try{
                const url = categoria
                ?`https://newsdata.io/api/1/latest?apikey=pub_5334341179171321c0e7bf64ac55029a6dfad&language=es&category=${categoria}`
                :`https://newsdata.io/api/1/latest?apikey=pub_5334341179171321c0e7bf64ac55029a6dfad&language=es`
            const respuesta = await axios.get(url);
            console.log(respuesta.data.results)
            setNoticias(respuesta.data.results);
        } catch(errors){
                console.log('Error api')
            }
        };
        if (categoria) {
            getAPI();
        }
    },[categoria])
    return (
        <div className='row'>
            {noticias.map((noticia, index)=>(
                <Noticia noticia={noticia} key={index}></Noticia>
            ))}
        </div>
    );
};

export default ListaNoticias;