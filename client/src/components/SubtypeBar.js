import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import {Card, Row} from "react-bootstrap";

const BrandBar = observer(() => {
    const {product} = useContext(Context)

    return (
        <Row className="d-flex">
            {product.subtypes.map(subtype =>
                <Card
                    style={{cursor:'pointer'}}
                    key={subtype.id}
                    className="p-3"
                    onClick={() => product.setSelectedSubtype(subtype)}
                    border={subtype.id === product.selectedSubtype.id ? 'danger' : 'light'}
                >
                    {subtype.name}
                </Card>
            )}
        </Row>
    );
});

export default BrandBar;