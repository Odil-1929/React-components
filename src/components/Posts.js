import React, {Component} from 'react';
import PostItem from "./PostItem";
import axios from 'axios';

class Posts extends Component {

    constructor(props){
        super(props);

        this.state = {
            posts: []
        }
    }

    componentDidMount() {
        axios.get('http://jsonplaceholder.typicode.com/posts')
            .then((res) =>{
                this.setState({posts: res.data});
            })
    }


    render() {
        return (
            <div>
                <div className='container'>
                    <h5>Posts</h5>

                    <div className="row">
                        {this.state.posts.map((item) => (

                            <div className="col-4 mt-3">
                            <PostItem title={item.title} id={item.id}/>
                            </div>
                            ))}
                    </div>
                </div>
            </div>
        );
    }
}

export default Posts;