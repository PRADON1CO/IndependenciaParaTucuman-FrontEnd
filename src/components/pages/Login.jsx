import { Card, Container, Form, Row, Col, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import login from "../../assets/login.png";
import "../../style/login.css"
import { useEffect } from "react";


const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    const pass = document.getElementById("pass");
    const icon = document.getElementById("eye");

    const togglePasswordVisibility = () => {
        if (pass.type === "password") {
          pass.type = "text";
          icon.classList.remove("bi-eye");
          icon.classList.add("bi-eye-slash");
        } else {
          pass.type = "password";
          icon.classList.remove("bi-eye-slash");
          icon.classList.add("bi-eye");
        }
      };
  
      icon.addEventListener("click", togglePasswordVisibility);
  
      return () => {
        icon.removeEventListener("click", togglePasswordVisibility);
      };
  }, []);

  const onSubmit = async (usuario) => {
    console.log(usuario);
  };

  return (
    <div className="login-background mainSection">
      <Container className="d-flex justify-content-center align-items-center min-vh-100">
        <Row>
          <Col>
            <Card className="p-5">
              <Card.Body>
                <Card.Title className="text-center mb-4">
                  <img src={login} alt="" className="imgLogin" />
                </Card.Title>
                <Form
                  onSubmit={handleSubmit(onSubmit)}
                  className="px-2 px-md-5 pb-2 formText"
                >
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label className="fw-bold color">
                      Correo electronico:
                    </Form.Label>
                    <Form.Control
                      type="email"
                      placeholder="Ej: juan@mail.com"
                      {...register("email", {
                        required: "El correo es obligatorio",
                        minLength: {
                          value: 4,
                          message:
                            "El email debe contener al menos 4 caracteres",
                        },
                        maxLength: {
                          value: 250,
                          message:
                            "El email debe contener como máximo 250 caracteres",
                        },
                        pattern: {
                          value:
                            /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/,
                          message:
                            "El correo debe ser un email valido Ej: nombre@mail.com",
                        },
                      })}
                    />
                    <Form.Text className="text-danger">
                      {errors.email?.message}
                    </Form.Text>
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label className="fw-bold color">Contraseña:</Form.Label>
                    <div className="password-container">
                      <Form.Control
                        type="password"
                        id="pass"
                        placeholder="ingrese una contraseña"
                        {...register("password", {
                          required: "El password es obligatorio",
                          minLength: {
                            value: 8,
                            message: "el minimo es de 8 caracteres",
                          },
                          maxLength: {
                            value: 13,
                            message: "el maximo es de 13 caracteres",
                          },
                          pattern: {
                            value: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/,
                            message: "El password debe contener al menos una letra mayúscula, una letra minúscula y un número",
                          },
                        })}
                      />
                      <i className="bi bi-eye iconoOjo" id="eye"></i>
                    </div>
                    
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Text className="text-danger">
                      {" "}
                      {errors.password?.message}
                    </Form.Text>
                  </Form.Group>
                  <div className="d-flex justify-content-center">
                    <Button
                      className="bg-dark rounded-0 border-0 btnEnviar px-4"
                      type="submit"
                    >
                      Enviar
                    </Button>
                  </div>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Login;