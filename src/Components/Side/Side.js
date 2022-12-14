import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser} from '@fortawesome/free-solid-svg-icons';
import Toast from '../Toast/Toast';

const Side = (props) => {
    const initTime=localStorage.getItem('time');
    
    const [time, setTime]=useState(initTime);

    useEffect(()=>{
     localStorage.setItem('time', time);
    },[time])

    return (
        <div>
            <div>
                <h2>
                <FontAwesomeIcon icon={faUser}/>
                Mr. Uttom</h2>
                <div className='row'>
                    <p className='col'>Weight:75Kg</p>
                    <p className='col'>Height:5'4"</p>
                    <p className='col'>Age:30 years</p>
                </div>
            </div> <br />
            <div>
                <h2>Add a Break</h2>
                <div className='d-flex flex-row justify-content-between'>
                    <button onClick={()=>setTime(10)} type="button">10s</button>
                    <button onClick={()=>setTime(20)} type="button">20s</button>
                    <button onClick={()=>setTime(30)} type="button">30s</button>
                    <button onClick={()=>setTime(40)} type="button">40s</button>
                    <button onClick={()=>setTime(50)} type="button">50s</button>
                </div>
            </div> <br />
            <div>
                <h2>Exercise details</h2>
                <p>Exercise Time: {props.data} seconds</p>
                <p>Break Time: {time} seconds</p>   
            </div> <br />
            <div>
                <Toast></Toast>
            </div>
        </div>
    );
};

export default Side;