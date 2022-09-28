import React, { useEffect, useState } from 'react';
import Card from '../Card/Card';

const Main = () => {
    const [cards, setCards]=useState([]);
    useEffect(()=>{
        fetch('data.json')
        .then(res=>res.json())
        .then(data=>setCards(data))
        .catch(err=> console.log(err))
    },[]);
    return (
        <div className='row'>
        {
            cards.map(card =>{ return <Card key={card.id} card={card}></Card>})
        }
        </div>
    );
};

export default Main;