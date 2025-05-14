import React from 'react'
import { Table } from "react-bootstrap";
import { Link } from "react-router-dom";

const Administrador = () => {
  return (
    <div className='mainSection'>
      <div>
        <div className="">
          <section className="container mainSection ">
            <div className="d-flex justify-content-between align-items-center mt-5">
              <h1 className="text-black display-5 fw-bold ">Gestionar Productos</h1>
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
                {/* <ItemRemera></ItemRemera>
                <ItemRemera></ItemRemera>
                <ItemRemera></ItemRemera>
                <ItemRemera></ItemRemera>
                <ItemRemera></ItemRemera> */}

              </tbody>
            </Table>
          </section>
        </div>
      </div>
    </div>
  )
}

export default Administrador
