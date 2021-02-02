import React, {Component} from 'react';

import {toast} from "react-toastify";
import Slider from 'react-slick';

import ModalVideo from "react-modal-video";

import {LightgalleryProvider, LightgalleryItem} from "react-lightgallery";

class Plugins extends Component {
    render() {

        const showToast = () => {
             toast.success("Qabul qilindi!");
             toast.error("Login yoki parol to'g'rimas");
        };

        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true
        };


            return (
            <div>
               <div className="container">
                   <div className="row">
                       <div className="col-4">
                           <button type='button' onClick={showToast} className='btn btn-success'>Click me!</button>
                       </div>

                       <div className="col-4">
                           <Slider {...settings}>
                               <div>
                                   <h4>Lorem ipsum dolor sit.</h4>
                               </div>
                               <div>
                                   <h4>Lorem ipsum dolor sit.</h4>
                               </div>
                               <div>
                                   <h4>Lorem ipsum dolor sit.</h4>
                               </div>
                               <div>
                                   <h4>Lorem ipsum dolor sit.</h4>
                               </div>
                           </Slider>
                       </div>

                       <div className="col-4">
                           <LightgalleryProvider>
                               <LightgalleryItem src="logo192.png">
                                   <img src="logo192.png" className="w-100" alt=""/>
                               </LightgalleryItem>
                           </LightgalleryProvider>
                       </div>

                   </div>
               </div>
            </div>
        );
    }
}

export default Plugins;