import React, {Component} from 'react';
import axios from 'axios';


class PostView extends Component {

    constructor(props){
        super(props);

        this.state = {
            post: {}
        }
    }


    componentDidMount() {
        axios.get("http://jsonplaceholder.typicode.com/posts/" + this.props.match.params.id)
            .then(res => {
                this.setState({post: res.data})
            })
    }

    render() {
        return (
            <div className='container'>
                <div className="row">
                    <div className="col-4 offset-4 my-5">
                        <div className="card">
                            <div className="card-header">
                                <h5>{this.state.post.title}</h5>
                            </div>
                            <div className="card-body">
                                {this.state.post.body}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default PostView;