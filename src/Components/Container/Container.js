import React, { useEffect, useState } from 'react';
import Main from '../Main/Main';
import Side from '../Side/Side';

const Container = () => {
    const [cards, setCards]=useState([]);
    const [addedTime, setAddedTime]=useState(0);
    useEffect(()=>{
        fetch('data.json')
        .then(res=>res.json())
        .then(data=>setCards(data))
        .catch(err=> console.log(err))
    },[]);
   const  handleClick=(id)=>{
    const obj=cards.find(card=>card.id===id)
    setAddedTime(addedTime+obj.time);
   }
   
   useEffect(()=>{
    console.log("added");
   },[addedTime])
    return (
        <div className='row pt-5'>
            <div className='col-8'>
                <Main data={[handleClick, cards]}></Main>
            </div>
            <div className='col-4'>
                <Side data={addedTime}></Side>
            </div>
        </div>
    );
};

export default Container;