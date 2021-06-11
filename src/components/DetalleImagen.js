import React, { useState, useEffect, Fragment } from 'react';
import styled from '@emotion/styled';
import { useParams, Link } from 'react-router-dom';

const ContenedorInfo = styled.div`
height:300px!important;
width: 100%;
small{
    font-size: 18px;
    color: #ffffff;
}
.material-icons{
    font-size: 13px;
}
`

const DetalleImagen = () => {
    // useParams();
    const { id } = useParams();

    const [detalle, gurdarDetalle] = useState([]);

    useEffect(() => {
        const consultarApiDetalle = async () => {

            const key = '16125508-505736a2c06bd0bf8c7dd51f7';
            const url = `https://pixabay.com/api/?key=${key}/photo&id=${id}`;

            const respuesta = await fetch(url);
            const resultado = await respuesta.json();
            gurdarDetalle(resultado.hits)


        }
        consultarApiDetalle();
    }, [detalle]);

    return (
        <div className="container mt-5">
            {detalle.map((deta) => (
                <Fragment key={deta.id}>
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb my-4 p-0">
                            <li className="breadcrumb-item"><Link to="/" >Inicio</Link></li>
                            <li className="breadcrumb-item active" aria-current="page">Detalle de imagen</li>
                        </ol>
                    </nav>
                    <div className="mb-4">
                        <h1 className="mb-3 text-uppercase lead">{deta.tags}</h1>
                        <ul className="list-unstyled mb-3 mb-md-0">
                            <li><strong>Tipo:</strong> {deta.type}</li>
                        </ul>
                    </div>
                    <div className="row">
                        <div className="col-md-8 mb-2">
                            <img className="img-fluid rounded-3" title={deta.user} src={deta.largeImageURL} alt={deta.user} />
                        </div>
                        <div className="col-md-4 d-flex justify-content-center">
                            <ContenedorInfo className="bg-light rounded-3 p-4 pt-5">
                                <p className="text-center lead">{deta.user}</p>
                                <div className="text-center">
                                    <button title="likes" type="button" className="btn btn-outline-secondary m-1"><i className="bi bi-heart-fill p-1 "></i>{deta.likes}</button>
                                    <button title="vistas"type="button" className="btn btn-outline-secondary m-1"><i className="bi bi-emoji-heart-eyes p-1 "></i>{deta.views}</button>
                                    <button title="comentarios"type="button" className="btn btn-outline-secondary m-1"><i className="bi bi-chat-dots p-1"></i>{deta.comments}</button>
                                </div>
                                <div className="d-grid gap-2 mt-5">
                                <button className="btn btn-primary btn-lg" type="button"><a className="text-white text-decoration-none" href={deta.largeImageURL} download={deta.largeImageURL}>Descargar</a><i className="bi bi-arrow-down p-1"></i></button>
                                </div>
                            </ContenedorInfo>
                        </div>
                    </div>
                </Fragment>
            ))}
        </div>
    )
}

export default DetalleImagen
