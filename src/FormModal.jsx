import React from "react";
import ReactDOM from "react-dom";

import { Card, Button, Row, Col, Image, Form } from "react-bootstrap";
import { FcGoogle } from "react-icons/fc";
import { FaFacebookF } from "react-icons/fa";

import formImage from "./assets/form.png";

import styles from "./FormModal.module.css";

const Backdrop = (props) => {
  return <div className={styles.backdrop} onClick={props.onConfirm} />;
};

const ModalOverlay = (props) => {
  return (
    <Card className={styles.modal}>
      <header className={styles.header}>
        <p>
          Let's learn, share & inspire each other with our passion for computer
          engineering. Sign up now 🤘🏼
        </p>
      </header>

      <div className={styles.content}>
        <Row>
          <Col>
            <h2>Sign In</h2>
            <LoginForm />
          </Col>
          <Col className={styles["col-2"]}>
            <p>Don’t have an account yet? Create new for free!</p>
            <Image src={formImage} />
          </Col>
        </Row>
      </div>
    </Card>
  );
};

const FormModal = (props) => {
  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop onConfirm={props.onConfirm} />,
        document.getElementById("backdrop-root")
      )}

      {ReactDOM.createPortal(
        <ModalOverlay onConfirm={props.onConfirm} />,
        document.getElementById("overlay-root")
      )}
    </>
  );
};

const LoginForm = () => {
  return (
    <Form className="mt-4">
      <Form.Group className="mb-2" controlId="formBasicEmail">
        <Form.Control type="email" placeholder="Enter email" />
      </Form.Group>

      <Form.Group className="mb-1" controlId="formBasicPassword">
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>

      <div className={`${styles.buttons} mt-4 d-flex flex-column`}>
        <Button size="md" className="mb-5" type="submit">
          Sign In
        </Button>

        <Button size="sm" className="mb-2">
          {" "}
          <FaFacebookF /> Facebook
        </Button>
        <Button size="sm">
          <FcGoogle /> Google
        </Button>
      </div>
      <p className="font-weight-bold text-center mt-3">Forgot Password?</p>
    </Form>
  );
};

export default FormModal;
