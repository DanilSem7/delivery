import React from 'react';
import {Card, Col, Image} from "react-bootstrap";
//import Image from "react-bootstrap/Image";
import {PRODUCT_ROUTE} from "../utils/consts";
import { useNavigate } from "react-router-dom";

const ProductItem = ({product}) => {
    const navigate = useNavigate();
    return (
        <Col md={3} className={"mt-3"} onClick={() => navigate(PRODUCT_ROUTE + "/" + product.id)}>
            <Card style={{width: 150, cursor: 'pointer'}} border={"light"}>
                <Image width={150} height={150} src={process.env.REACT_APP_API_URL + product.img}/>
                <div className="text-black-50 mt-1 d-flex justify-content-between align-items-center">
                    <div>Овощи</div>
                    <div className="d-flex align-items-center">
                    </div>
                </div>
                <div>{product.name}</div>
            </Card>
        </Col>
    );
};

export default ProductItem;