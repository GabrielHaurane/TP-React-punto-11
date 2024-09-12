import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card, Form, Row } from "react-bootstrap";

const Formulario = ({setCategoria}) => {
  const handleChange=(e)=>{
    setCategoria(e.target.value);
}
  return (
    <div>
      <Card>
      <Row className="my-5 mx-3">
        <h3 className="w-50">Buscar por categoria:</h3>
        <Form.Select className="w-50" onChange={handleChange}>
        <option>Open this select menu</option>
      <option value="business">business</option>
      <option value="crime">crime</option>
      <option value="domestic">domestic</option>
      <option value="education">education</option>
      <option value="entertainment">entertainment</option>
      <option value="enviorment">enviorment</option>
      <option value="food">food</option>
      <option value="health">health</option>
      <option value="lifestyle">lifestyle</option>
      <option value="other">other</option>
      <option value="science">science</option>
      <option value="sports">sports</option>
      <option value="technology">technology</option>
      <option value="top">top</option>
      <option value="tourism">tourism</option>
      <option value="word">word</option>
        </Form.Select>
      </Row>
      </Card>
    </div>
  );
};

export default Formulario;
