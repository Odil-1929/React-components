import React, {useState, useEffect} from 'react';
import {Link} from "react-router-dom";
import axios from "axios";
import ClipLoader from "react-spinners/ClipLoader";

const Flickr = () => {

    const [photos, setPhotos] = useState([]);

    const [loading, setLoading] = useState(true);

    const apiKey = "87c3b62bd2f2db79b9f548c15f7897e3";

    useEffect(() => {
        axios.get(`
      https://api.flickr.com/services/rest/?method=flickr.photos.getRecent&api_key=${apiKey}&per_page=24&format=json&nojsoncallback=1`)
            .then(res => {
                setPhotos(res.data.photos.photo);
        })
            .finally(() =>{
                setLoading(false);
            });

    }, []);

    return (
        <div>
            <div className="continer">
                <div className="row">
                    <div className="col-4 offset-4 mt-3">
                        <div className="input-group">
                            <input type="text" className='form-control' placeholder='Search here...'/>
                            <div className="input-group-append">
                                <button type='button' className='btn btn-success'>Search</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-8 offset-2 mt-4">
                        <ul className="nav nav-justified">
                            <li className='nav-item'><Link className='nav-link' to='/flickr/mountain'>Mountain</Link>
                            </li>
                            <li className='nav-item'><Link className='nav-link' to='/flickr/beaches'>Beaches</Link></li>
                            <li className='nav-item'><Link className='nav-link' to='/flickr/birds'>Birds</Link></li>
                            <li className='nav-item'><Link className='nav-link' to='/flickr/food'>Food</Link></li>
                        </ul>
                    </div>
                </div>
                <div className="row mt-4">
                    {loading ? <ClipLoader color="#ffffff" loading={loading} size={150} /> : ""}
                    {photos.map((item) =>(
                        <div className="col-4 mb-3">
                            <img className='w-100' src={`https://farm${item.farm}.staticflickr.com/${item.server}/${item.id}_${item.secret}_m.jpg`} alt=""/>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Flickr;