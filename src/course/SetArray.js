import React from 'react';


function App() {
    const [thingsArray , setThingsArray] = React.useState(["Thing 1", "Thing 2"])
    
    function addItem() {
        setThingsArray( prev =>  [...prev,`Thing ${thingsArray.length + 1}`])
        
    }
    
    const thingsElements = thingsArray.map(thing => <p key={thing}>{thing}</p>)
    
    return (
        <div>
            <button onClick={addItem}>Add Item</button>
            {thingsArray}
        </div>
    )
}

