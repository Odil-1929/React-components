import React from 'react';
import {Link} from "react-router-dom";

const PostItem = (props) => {
    return (
        <div>
            <div className="card    ">
                <div className="card-dody">
                    <h6>{props.title} <Link to={'/posts/' +props.id}>more...</Link></h6>
                </div>
                <div className="card-footer">
                    <h5><Link to={'/posts/' + props.id}>{props.name}</Link></h5>
                </div>
            </div>
        </div>
    );
};

export default PostItem;