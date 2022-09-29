import React from 'react';

const Card = (props) => {
    console.log(props);
    const [card, handleClick]=props.data;
    const{id,name,image,time}=card;
   
    return (
        <div className='col-md-4 col-sm-12'>
            <img className='img-fluid' src={image} alt="exercise "></img>
            <h2>{name}</h2>
            <p>Time required: {time}s</p>
            <button className='btn btn-primary' onClick={()=> handleClick(id)}>Add to list</button> <br /> <br /> 
        </div>
    );
};

export default Card;