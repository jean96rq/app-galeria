import React, { useState, useEffect, Fragment } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';




import styled from '@emotion/styled';
import Formulario from './components/Formulario';
import ListadoImagenes from './components/ListadoImagenes';

const Contenedor = styled.div`
    width: 100%;
    min-height: 70vh;
    background: url('https://cdn.pixabay.com/photo/2021/06/04/15/50/skateboarding-6310245_960_720.jpg');
    background-attachment: fixed;
    background-position:center;
    background-size: cover;

    nav img{
      object-fit: cover;
    }
`


function App() {
  const [error, guardarError] = useState(false);
  const [busqueda, guardarbusqueda] = useState('arte');
  const [imagenes, gurdarImagenes] = useState([]);
  const [paginaActual, guardarPagina] = useState(1);
  const [totalPaginas, guardarTotalPaginas] = useState(1);

  useEffect(() => {
    const consultarApi = async () => {
      if (busqueda === '') return null;

      const imagenPorPagina = 20;
      const key = '16125508-505736a2c06bd0bf8c7dd51f7';
      const url = `https://pixabay.com/api/?key=${key}&q=${busqueda}&image_type=photo&per_page=${imagenPorPagina}&page=${paginaActual}`
      const respuesta = await fetch(url);
      const resultado = await respuesta.json();
      gurdarImagenes(resultado.hits);

      //calcular total de paginas
      const calcularTotalPaginas = Math.ceil(resultado.totalHits / imagenPorPagina);
      guardarTotalPaginas(calcularTotalPaginas);


    }
    consultarApi();
  }, [busqueda, paginaActual]);

  const paginaAnterior = () => {
    const nuevaPaginaActual = paginaActual - 1;
    if (nuevaPaginaActual === 0) return;
    guardarPagina(nuevaPaginaActual)
    const inicio = document.getElementById('inicio');
    inicio.scrollIntoView({ behavior: 'smooth' })
  }

  const paginaSiguiente = () => {
    const nuevaPaginaActual = paginaActual + 1;
    if (nuevaPaginaActual > totalPaginas) return;
    guardarPagina(nuevaPaginaActual)
    const inicio = document.getElementById('inicio');
    inicio.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <Fragment>
      <Contenedor className="d-flex justify-content-center align-items-center ">
        <div className="container col-md-6 col-sm-8">
          <h1 className=" text-white mb-3">Las mejores fotos de stock compartidos por talentosos creadores.</h1>
          <Formulario
            guardarError={guardarError}
            guardarbusqueda={guardarbusqueda}
          />
          <p className="small text-white">Sugerencias: oficina, feliz, casa, plan, ahorros, planificación y más</p>
          {error ? <p className="text-danger">Agrega un termino de busqueda</p> : null}
        </div>
      </Contenedor>
      <ListadoImagenes
        imagenes={imagenes}
      />
      <div className="container  d-flex  justify-content-center align-items-center">
        {(paginaActual === 1) ? null : <button onClick={paginaAnterior} type="button" className="btn btn-outline-secondary m-3">&laquo; Anterior</button>}
        {(paginaActual === totalPaginas) ? null : <button onClick={paginaSiguiente} type="button" className="btn btn-outline-secondary m-3">Siguiente &raquo;</button>}
      </div>
    </Fragment>
  );
}

export default App;
