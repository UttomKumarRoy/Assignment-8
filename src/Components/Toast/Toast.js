import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Toast = () => {
    const notify = () => toast("Congratulations! You have completed the exercise task.");
    return (
        <div>
             <button className='btn btn-primary' onClick={notify}>Activity Completed</button>
             <ToastContainer position='top-center'/> <br /> <br />
        </div>
    );
};

export default Toast;