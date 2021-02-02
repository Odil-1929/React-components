import React, {Component} from 'react';
import {connect} from 'react-redux'
import {incrementNumber, decrementNumber} from "../action/counterAction";

class CounterRedux extends Component {
    render() {
        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className="col-4 mt-4 offset-4">
                            <div className="card">
                                <div className="card-body">
                                    <h1 className='text-center'>{this.props.number}</h1>
                                </div>
                                <div className="card-footer d-flex justify-content-between">
                                    <button type='button' className='btn btn-success' onClick={this.props.incrementNumber}>+</button>
                                    <button type='button' className='btn btn-danger' onClick={this.props.decrementNumber}>-</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
     console.log(state);

     return {
         number: state.counterReducer.number
     }
};


export default connect(mapStateToProps, {incrementNumber, decrementNumber})(CounterRedux);