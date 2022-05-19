import React, {useEffect, useState} from 'react';
import {Card, Container} from "react-bootstrap";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import {fetchOneProduct} from "../http/productAPI";
import {useParams} from "react-router-dom";

const ProductPage = () => {
    const [product, setProduct] = useState({info: []})
    const {id} = useParams()
    useEffect(() => {
        fetchOneProduct(id).then(data => setProduct(data))
    }, [])
    return (
        <Container className="mt-3">
            <Row>
                <Col md={4}>
                    <h2 className="d-flex flex-column align-items-center justify-content-around">{product.name}</h2>
                    <Image width={250} height={250} src={process.env.REACT_APP_API_URL + product.img}/>
                </Col>

                <Col md={4}>
                    <Card
                        className="d-flex flex-column align-items-center justify-content-around"
                        style={{width: 300, height: 300, fontSize: 32, border: '5px solid lightgray'}}
                    >
                        <h3>Стоимость: {product.price} руб.</h3>
                        <Button variant={"outline-dark"}>Добавить в корзину</Button>
                    </Card>
                </Col>
            </Row>
            <Row className="d-flex flex-column m-3">
                <h2>Описание</h2>
                { product.info.map(info =>
                    <Row key={info.id}>
                        {info.title}: {info.description}
                    </Row>
                )}
            </Row>
        </Container>
    );
};

export default ProductPage;