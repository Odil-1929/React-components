import React from 'react';
import {Button, Card, CardBody, CardFooter, CardHeader} from "reactstrap";

const CardItem = (props) => {
    console.log(props);
    return (
        <Card>
            <CardHeader>
                <h3>{props.title}</h3>
            </CardHeader>
            <CardBody>
                <img src={props.src} className="w-100" alt=""/>
                <p>{props.description}</p>
            </CardBody>
            <CardFooter>
                <Button color="success">Click me!</Button>
            </CardFooter>
        </Card>

    );

};



export default CardItem;