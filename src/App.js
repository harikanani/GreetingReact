import React from 'react';
import ReactDom from 'react-dom';
import './App.css';
// import './sec.js'
function App() {
        const cssStyle = {
            color: "green"
        }
        // let curDate =  new Date(2020, 10, 29, 15); // Testing 
        let curDate = new Date();
    
        let Greetings = "";
        if (curDate.getHours() >= 1 && curDate.getHours() <= 11) {
            Greetings = "Good Morning!";
            cssStyle.color = "Green";
        } else if (curDate.getHours() >= 12 && curDate.getHours() <= 20) {
            Greetings = "Good Afternoon!";
            cssStyle.color = "orange";
        } else {
            Greetings = "Good Night!";
            cssStyle.color = "black";
        }
        return ( 
            <>
            <div>
            <h1 className = "heading">Hello Sir, <span style = {cssStyle}>{Greetings}</span></h1>
            <h2><a href='./sec.js' target="_blank">Second Page</a></h2>
            </div> 
            </>

        );
    }

export default App;