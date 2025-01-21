//class commponent


// function component
import React from 'react';
class MyComponnent extends React.Component {
    //jsx cho phép viết code js trên file html
    render() {
        return(
            <>
                <div>
                    Hello to my first component
                
                </div>
                <div>
                    <h1> Hello World  {Math.random()} </h1>
                </div>
            </>
        );
    }
}

export default MyComponnent;