import React from 'react'

const ItemPersona = ({persona}) => {

  return (
     <tr>
      <td className="text-center">{persona.id}</td>
      <td className="text-center">{persona.nombreYapellido}</td>
      
      <td className="text-center">
        {persona.DNI}
      </td>
      <td className="text-center">{persona.domicilio}</td>
      <td className="text-center">
        <img
          src={persona.imagen}
          className="imgAdministrador"
          alt=""
        ></img>
        </td>
      <td className="text-center">
        <button className="btn m-1 btnOpciones ">
          <i className="bi bi-pencil-square fs-5"></i>
        </button>
        <button className="btn btnOpciones">
          <i className="bi bi-trash fs-5"></i>
        </button>
      </td>
    </tr>
  )
}

export default ItemPersona