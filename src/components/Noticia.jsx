import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';

const Noticia = ({noticia}) => {
    
    return (
        <div className='col-12 col-md-4 col-lg-4'>
        <Card className='h-100'>
            <Card.Img variant='top' src={noticia.image_url}></Card.Img>
            <Card.Body>
                <h5>{noticia.source_id}</h5>
                <Card.Title>{noticia.title}</Card.Title>
                <Card.Text>{noticia.description}</Card.Text>
                <a target='_blank' href={noticia.link} className='btn btn-primary' > ver noticia completa</a>         
            </Card.Body>
            <div className='d-flex w-50'>
            </div>
        </Card>
        </div>
    );
};

export default Noticia;