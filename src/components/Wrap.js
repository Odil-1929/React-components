import React, {Component} from 'react';
import CardItem from "./CardItem";
import {targetPropType} from "reactstrap/es/utils";

class Wrap extends Component {

    constructor(props) {
        super(props);

        this.state = {
            number: 0,
            title: "Hello world!"
        }
    }


    render() {


        const increaseNumber = () => {
            //number = number + 1;
            // number++;
            // console.log(number);
            this.setState({number: this.state.number + 1});
        };

        const editTitle = (e) =>{
            e.preventDefault();

           console.log( e.target.title.value);

           this.setState({title: e.target.title.value});

           e.target.reset();

           console.log("keldi");


        };

        const decreaseNumber = () =>{
            // number = number + 1;
            // number--;
            // console.log(number);
            this.setState({number: this.state.number - 1});
        };
        return (
            <div>
               <div className="container">
                   <div className="row mt-3">
                       <div className="col-4">
                           <CardItem title={this.state.title} description="lkjsflkj kdljfljsdlf fdsljflsj"/>
                       </div>
                       <div className="col-4">
                           <CardItem title="Nima gap?" description="klfksalf lslfs fl dlks ks lsdfl s"/>
                       </div>
                       <div className="col-4">
                           <CardItem title="Nimadur" src="https:picsum.photos/200"/>
                       </div>
                       <div className="col-4 offset-4 mt-3">
                           <div className="card">
                               <div className="card-body">
                                   <h3 className="text-center">{this.state.number}</h3>
                               </div>
                               <div className="card-footer d-flex justify-content-between">
                                   <button type="button" className="btn btn-success" onClick={increaseNumber}>+</button>
                                   <button type="button" className="btn btn-danger" onClick={decreaseNumber}>-</button>
                               </div>
                           </div>
                       </div>
                       <div className="col-4 offset-4 my-4">
                           <form onSubmit={editTitle}>
                               <input type="text" name="title" className="form-control"/>
                               <button type="submit" className="btn btn-success mt-3 ml-auto d-block">Edit</button>
                           </form>
                       </div>
                   </div>
               </div>
            </div>
        );
    }
}

export default Wrap;