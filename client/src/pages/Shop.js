import React, {useContext, useEffect} from 'react';
import {Container} from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import TypeBar from "../components/TypeBar";
import SubtypeBar from "../components/SubtypeBar";
import ProductList from "../components/ProductList";
import {Context} from "../index";
import {fetchProducts, fetchSubtypes, fetchTypes} from "../http/productAPI";
import {observer} from "mobx-react-lite";

const Shop = observer(() => {
    const {product} = useContext(Context)

    useEffect(() => {
        fetchTypes().then(data => product.setTypes(data))
        fetchSubtypes().then(data => product.setSubtypes(data))
        fetchProducts().then(data => product.setProducts(data.rows))
    }, [])

    return (
        <Container>
            <Row className="mt-2">
                <Col md={3}>
                    <TypeBar/>
                </Col>
                <Col md={9}>
                    <SubtypeBar />
                    <ProductList />
                </Col>
            </Row>
        </Container>
    );
});

export default Shop;