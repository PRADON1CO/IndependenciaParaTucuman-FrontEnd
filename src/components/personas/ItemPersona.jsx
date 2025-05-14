import React from 'react'

const ItemPersona = () => {
  return (
     <tr>
      <td className="text-center">123</td>
      <td className="text-center">Prado Brian</td>
      
      <td className="text-center">
        44751210
      </td>
      <td className="text-center">pasaje Lanieri 1090</td>
      <td className="text-center">
        <img
          src="https://acdn.mitiendanube.com/stores/004/700/456/products/26-69c164e241a121372d17292575754422-480-0.webp"
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