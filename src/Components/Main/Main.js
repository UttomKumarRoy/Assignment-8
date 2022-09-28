import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDumbbell} from '@fortawesome/free-solid-svg-icons';

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
        <div>
            <h1>
            <FontAwesomeIcon icon={faDumbbell}/>
                Daily Exercise Club</h1>
            <p>Select Today's Exercise</p>
            <div className='row'>  
                 {
                    cards.map(card =>{ return <Card key={card.id} card={card}></Card>})
                }
        </div>
        </div>
       
    );
};

export default Main;