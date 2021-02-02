import React, {useState, useEffect} from 'react';

const Hooks = () => {

    const [number, setNumber] = useState(0);
    //arayni destruktizatsiya qilish


    useEffect(() =>{
       document.title = number;
    });





    return (
        <div>
           <div className="container">
               <div className="row">
                   <div className="col-4 offset-4">
                       <div className="card mt-3">
                           <div className="card-body">
                               <h1 className='text-center'>{number}</h1>
                           </div>
                           <div className="card-footer d-flex justify-content-between">
                               <button type='button' className='btn btn-success' onClick={() => setNumber(number + 1)}>+</button>
                               <button type='button' className='btn btn-danger' onClick={() => setNumber(number - 1)}>-</button>
                           </div>
                       </div>
                   </div>
               </div>
           </div>
        </div>
    );
};

export default Hooks;