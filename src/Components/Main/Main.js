import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDumbbell} from '@fortawesome/free-solid-svg-icons';

import Card from '../Card/Card';

const Main = (props) => {
    
    
    const [handleClick,cards]=props.data;
    return (
        <div>
            <h1>
            <FontAwesomeIcon icon={faDumbbell}/>
                Daily Exercise Club</h1>
            <p>Select Today's Exercise</p>
            <div className='row'>  
                 {
                    cards.map(card =>{ return <Card key={card.id}  data={[card, handleClick]}></Card>})
                }
        </div>
        </div>
       
    );
};

export default Main;