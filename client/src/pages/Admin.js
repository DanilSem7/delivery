import React, {useState} from 'react';
import {Container} from "react-bootstrap";
import Button from "react-bootstrap/Button";
import CreateType from "../components/modals/CreateType";
import CreateSubtype from "../components/modals/CreateSubtype";
import CreateProduct from "../components/modals/CreateProduct";

const Admin = () => {
    const [subtypeVisible, setSubtypeVisible] = useState(false)
    const [typeVisible, setTypeVisible] = useState(false)
    const [productVisible, setProductVisible] = useState(false)
    return (
        <Container className="d-flex flex-column">
            <Button
                variant={"outline-dark"}
                className="mt-4 p-2"
                onClick={() => setTypeVisible(true)}
            >
                Добавить тип
            </Button>
            <Button
                variant={"outline-dark"}
                className="mt-4 p-2"
                onClick={() => setSubtypeVisible(true)}
            >
                Добавить подтип
            </Button>
            <Button
                variant={"outline-dark"}
                className="mt-4 p-2"
                onClick={() => setProductVisible(true)}
            >
                Добавить продукт
            </Button>
            <CreateSubtype show={subtypeVisible} onHide={() => setSubtypeVisible(false)}/>
            <CreateProduct show={productVisible} onHide={() => setProductVisible(false)}/>
            <CreateType show={typeVisible} onHide={() => setTypeVisible(false)}/>
        </Container>
    );
};

export default Admin;