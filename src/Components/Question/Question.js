import React from 'react';

const Question = () => {
    return (
        <div>
            <h3>1. How does React work?</h3>
            <p>At its very core, React basically maintains a tree for you. This tree is able to do efficient diff computations on the nodes.Think of your HTML code as a tree. In fact, that is exactly how the browser treats your DOM (your rendered HTML on the browser). React allows you to effectively re-construct your DOM in JavaScript and push only those changes to the DOM which have actually occurred.</p>
            <h3>2. What are the difference between props and state?</h3>
            <p>Props are used to pass data from one component to another. The state is a local data storage that is local to the component only and cannot be passed to other components.</p>
            <h3>3. What are the Usage of useEffect hook except data loading?</h3>
            <p>The useEffect Hook allows you to perform side effects in your components. Some examples of side effects are: fetching data, directly updating the DOM, and timers. So useEffect is used updating DOM and in timers except loading or fetching data.</p>
        </div>
    );
};

export default Question;