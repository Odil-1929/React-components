import React from 'react';
import {Col} from "reactstrap";




const Card = () => {
    return (

        <Col md="4">
        <div className="Card">
            <div className="card-header">
                <h3>Lorem ipsum dolor.</h3>
            </div>
            <div className="card-body">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad commodi consequatur delectus dolorem ea
                    necessitatibus nesciunt quas rerum, similique tempore temporibus vitae. Consequuntur, odit, ut! Amet
                    laborum officia quidem veritatis.</p>
            </div>
            <div className="card-footer">
                <button type="button" className="btn btn-success">Click me!</button>
            </div>
        </div>
        </Col>
    )
}

export default Card;