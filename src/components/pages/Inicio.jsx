import React, { useEffect, useState } from 'react'
import { Button, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";



const Inicio = () => {

  const [personas, setPersonas] = useState([]);

  useEffect(() =>{
    optenerPersonas();

  }, [])

  const optenerPersonas = ()=>{

  }

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
  } = useForm();

  const claseValidado = (data) => {
    console.log(data);
  };


  return (
    <div className='mainSection'>
       <div className="container ">
        <h1 className=" mt-5">Adhision Al Partido Politico</h1>
        <hr />
        <Form className="my-4" onSubmit={handleSubmit(claseValidado)}>
        <Form.Group className="mb-3" controlId="formNombreClase">
             <Form.Label>Nombre y Apellido*</Form.Label>
             <Form.Control
              type="text"
              placeholder="Ej: Alejandro Marinez"
              {...register("nombreYapellido", {
                required: "El nombre de la clase es obligatoria",
                minLength: {
                  value: 2,
                  message:
                    "Debe ingresar como minimo 2 caracteres para el nombre Y apellido",
                },
                maxLength: {
                  value: 50,
                  message:
                    "Debe ingresar como maximo 50 caracteres para el nombre y apellido",
                },
              })}
            />
            <Form.Text className="text-danger">
              {errors.nombreYapellido?.message}
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formNombreClase">
             <Form.Label>DNI*</Form.Label>
             <Form.Control
              type="number"
              placeholder="Ej: 07356764"
              {...register("DNI", {
                required: "El nombre de la clase es obligatoria",
                minLength: {
                  value: 7,
                  message:
                    "Debe ingresar como minimo 7 caracteres para el DNI",
                },
                maxLength: {
                  value: 8,
                  message:
                    "Debe ingresar como maximo 8 caracteres para el DNI",
                },
              })}
            />
            <Form.Text className="text-danger">
              {errors.DNI?.message}
            </Form.Text>
          </Form.Group>
         
          <Form.Group className="mb-3" controlId="formNombreClase">
             <Form.Label>Nombre del Padre*</Form.Label>
             <Form.Control
              type="text"
              placeholder="Ej: Agusto Martinez"
              {...register("nombreDelPadre", {
                required: "El nombre de la clase es obligatoria",
                minLength: {
                  value: 2,
                  message:
                    "Debe ingresar como minimo 2 caracteres para el nombre del padre",
                },
                maxLength: {
                  value: 50,
                  message:
                    "Debe ingresar como maximo 50 caracteres para el nombre del padre",
                },
              })}
            />
            <Form.Text className="text-danger">
              {errors.nombreDelPadre?.message}
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formNombreClase">
             <Form.Label>Nombre de la Madre*</Form.Label>
             <Form.Control
              type="text"
              placeholder="Ej: Laura Ferenandez"
              {...register("nombreDeLaMadre", {
                required: "El nombre de la clase es obligatoria",
                minLength: {
                  value: 2,
                  message:
                    "Debe ingresar como minimo 2 caracteres para el Nombre de la Madre",
                },
                maxLength: {
                  value: 50,
                  message:
                    "Debe ingresar como maximo 50 caracteres para el Nombre de la Madre",
                },
              })}
            />
            <Form.Text className="text-danger">
              {errors.nombreDeLaMadre?.message}
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formNombreClase">
             <Form.Label>Matricula*</Form.Label>
             <Form.Control
              type="text"
              placeholder="Ej: "
              {...register("matricula", {
                required: "El nombre de la clase es obligatoria",
                minLength: {
                  value: 2,
                  message:
                    "Debe ingresar como minimo 2 caracteres para la matricula",
                },
                maxLength: {
                  value: 50,
                  message:
                    "Debe ingresar como maximo 50 caracteres para la matricula",
                },
              })}
            />
            <Form.Text className="text-danger">
              {errors.matricula?.message}
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formImagen">
            <Form.Label>Imagen URL*</Form.Label>
            <Form.Control
              type="text"
              placeholder="Ej: https://images.pexels.com/photos/1431282/pexels-photo-1431282.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              {...register("imagen", {
                required: "La imagen es obligatoria",
                pattern: {
                  value: /(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|jpeg|gif|png)/,
                  message: "Debe ingresar una URL valida (jpg|jpeg|gif|png)",
                },
              })}
            />
            <Form.Text className="text-danger">
              {errors.imagen?.message}
            </Form.Text>
          </Form.Group>
          

          <Button type="submit" className="BackCeleste border-0 rounded-0">
            Guardar
          </Button>
        </Form>
      </div>
    </div>
  )
}

export default Inicio