import React from 'react';
import {Col} from "reactstrap";

class Card2 extends React.Component {
    render() {
        return (
            <Col md="4">
            <div className="card">
                <div className="card-header">
                    <h3>Lorem ipsum dolor.</h3>
                </div>
                <div className="card-body">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam aliquid, animi culpa deleniti
                        excepturi explicabo ipsa laborum mollitia neque officiis omnis perferendis porro quaerat quas,
                        tempora unde, vel! Aspernatur, at.</p>
                </div>
                <div className="card-footer">
                    <button type="button" className="btn btn-success">Click me!</button>
                </div>
            </div>
            </Col>
        )
    }
}

export default Card2;