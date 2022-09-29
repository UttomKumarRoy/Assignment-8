import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Toast = () => {
    const notify = () => toast("Congratulations! You have completed the exercise task.");
    return (
        <div>
             <button onClick={notify}>Activity Completed</button>
             <ToastContainer position='top-center'/>
        </div>
    );
};

export default Toast;