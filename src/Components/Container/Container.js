import React from 'react';
import Main from '../Main/Main';
import Side from '../Side/Side';

const Container = () => {
    return (
        <div className='row pt-5'>
            <div className='col-8'>
                <Main></Main>
            </div>
            <div className='col-4'>
                <Side></Side>
            </div>
        </div>
    );
};

export default Container;