import React, { useEffect } from 'react'
import { Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import ItemPersona from '../personas/ItemPersona';
import  '../../style/administrador.css'
import { useState } from 'react';
import { listarPrsonas } from '../../helpers/queries';


const Administrador = () => {

  const [personas, setPersonas] = useState([]);
  
    useEffect(() =>{
      optenerPersonas();
  
    }, [])
  
    const optenerPersonas = async()=>{
      const respuesta = await listarPrsonas()
      if(respuesta.status === 200){
        //guardo las personas en el state
        const datos = await respuesta.json();
        setPersonas(datos);
      }else{
        //Crear un mensaje de aviso de error que en este momento no se puede realizar operaciones
      }
      
    }
  

  return (
    <div className='mainSection'>
      <div>
        <div className="">
          <section className="container mainSection ">
            <div className="d-flex justify-content-between align-items-center mt-5">
              <h1 className="text-black display-5 fw-bold ">Gestionar Adheridos</h1>
              <Link className="btn bgVerde" to={"/administrador/formulario"}>
                <i className="bi bi-file-earmark-plus fs-4"></i>
              </Link>
            </div>
            <hr />
            <Table responsive bordered className="tabla table-striped">
              <thead>
                <tr className="text-center">
                  <th>Cod</th>
                  <th>Nombre y apellido</th>
                  <th>Matricula</th>
                  <th>Domicilio</th>
                  <th>Imagen</th>
                  <th>Opciones</th>
                </tr>
              </thead>
              <tbody>
                {
                  personas.map((itemPersona) => <ItemPersona key={itemPersona.id} persona={itemPersona}></ItemPersona>)  
                }
                
              </tbody>
            </Table>
          </section>
        </div>
      </div>
    </div>
  )
}

export default Administrador
