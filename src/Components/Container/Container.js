import React from 'react';
import Main from '../Main/Main';

const Container = () => {
    return (
        <div className='row'>
            <div className='col-9'>
                <Main></Main>
            </div>
            <div className='col-3'>Side</div>
        </div>
    );
};

export default Container;