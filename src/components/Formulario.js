import React,{useState} from 'react'
import styled from '@emotion/styled';

const Form = styled.form`
position: relative;
`;

const Input = styled.input`
border-radius: 3px!important;
outline: none!important;
&:focus{
    outline: none;
}
`

const Boton = styled.button`
position: absolute;
height: 100%;
right: 2px;
border: none;
top: 3px;
z-index:4;
background-color: transparent;
span{
    color: #5e5e5e;
    
}
`
const Formulario = ({guardarError,guardarbusqueda}) => {
    const [termino, guardadTermino]= useState('');
    const buscarImagenes =(e)=>{
        e.preventDefault();
        if(termino.trim() === ''){
            guardarError(true)
            return;
        }
        const inicio = document.getElementById('imgs');
        inicio.scrollIntoView({ behavior: 'smooth' })
        guardarError(false)
        guardarbusqueda(termino)
        
    }
    return (
        <Form 
            className="input-group mb-3"
            onSubmit={buscarImagenes}
            >
            <Input 
                type="text" 
                className="form-control form-control-lg" 
                placeholder="Buscar" 
                aria-label="Recipient's username" 
                onChange={(e => guardadTermino(e.target.value))}
                aria-describedby="button-addon2"/>
            <Boton 
                type="submit"
            >
                <span 
                    className="material-icons"
                    >search
                </span>
            </Boton>
        </Form>
    )
}

export default Formulario
