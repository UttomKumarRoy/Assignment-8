import React, { useEffect, useState } from 'react';
import Main from '../Main/Main';
import Question from '../Question/Question';
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
        <div className='pt-5'>
            <div className='row'>
                 <div className='col-md-8 col-sm-12'>
                <Main data={[handleClick, cards]}></Main>
                 </div>
                <div className='col-md-4 col-sm-12'>
                <Side data={addedTime}></Side>
                 </div>
            </div>
            <div>
                <h2 className='text-white text-center bg-success rounded-5 p-2'>Some Questions and Answers</h2> <br />
                <Question></Question>
            </div>
        </div>
        
    );
};

export default Container;