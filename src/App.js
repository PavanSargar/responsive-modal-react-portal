import React, { useState } from "react";

import { Button, Container } from "react-bootstrap";
import FormModal from "./FormModal";

import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";

export default function App() {
  const [toggleModal, setToggleModal] = useState(false);

  const handleClick = () => {
    setToggleModal(true);
  };

  const closeHandler = () => {
    setToggleModal(false);
  };

  return (
    <>
      <Container className="App my-5 py-5 d-flex align-items-center justify-content-center">
        <Button onClick={handleClick} size="lg" variant="outline-dark">
          Launch Modal
        </Button>
      </Container>
      {toggleModal === true && <FormModal onConfirm={closeHandler} />}
    </>
  );
}
