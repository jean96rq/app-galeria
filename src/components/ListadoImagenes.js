import React from 'react';
import Imagen from './Imagen';
import styled from '@emotion/styled';
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { Link } from "react-router-dom";



const ContenedorImagenes = styled.div`
margin-top: 100px;
min-height: 70vh;
.card {
    cursor: pointer;
}
.card p{
    color: transparent;
    transition: ease 0.5s;
    font-size: 16px;
}
.card span{
    font-size: 13px;
    margin: 0 5px;
}
.card :hover p {
    color: #FFF;
    transition: ease 0.5s;
}
.card img{
    transition: 0.3s;
}
.card:hover img{
    transition: ease 0.5s;
    -webkit-filter: brightness(50%);
    filter: brightness(50%);
}
`;




const ListadoImagenes = ({ imagenes }) => {
    return (
        <ContenedorImagenes id="imgs" className="container">
            <ResponsiveMasonry
                columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}
            >
                <Masonry>
                    {imagenes.map(imagen => (
                        <Link key={imagen.id} to={`/detalle/${imagen.id}`}>
                            <Imagen
                                key={imagen.id}
                                imagen={imagen}
                            />
                        </Link>
                    ))}

                </Masonry>
            </ResponsiveMasonry>
        </ContenedorImagenes>
    )
}

export default ListadoImagenes
