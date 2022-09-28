import React from 'react';

const Card = (props) => {
    console.log(props);
    const {id, name, image, time}=props.card;
    return (
        <div className='col-4'>
            <img className='img-fluid' src={image} alt="exercise "></img>
            <h2>{name}</h2>
            <p>Time required: {time}s</p>
            <button>Add to list</button> <br /> <br /> 
        </div>
    );
};

export default Card;