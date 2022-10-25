import React from "react";
import '../style.css'
import memeData from "./MemeData";



export default function Meme() {
    const [memImage , setMemImage] = React.useState("https://i.imgflip.com/30b1gx.jpg")
    const [memeText , setMemeTeaxt] = React.useState({
        firstText : "" ,
        secondText : ""
    })

    function chouseOne() {
        const meme = memeData.data.memes
        const randomNumber = Math.floor(Math.random() * meme.length)
        setMemImage(meme[randomNumber].url)
    }
function handlechande(event){
    const {name , value} = event.target
    setMemeTeaxt(prevText => ({
        ...prevText,
        [name]: value
    }))
}
console.log(memeText)
    return (
        <main>
            <div className="form">
                <input type='text'
                 placeholder="Shut up"
                 name="firstText"
                 value={memeText.firstText}
                 onChange={handlechande}
                  />
                <input type='text'
                 placeholder="and take my money" 
                 className="first-button"
                 name="secondText"
                 value={memeText.secondText}
                 onChange={handlechande}
                  />
                <button onClick={chouseOne} className="button">Get a new meme image  🖼</button>
            </div>
            <img src={memImage} className="memeimage"/>
            <p className="meme--text top">{memeText.firstText}</p>
            <p className="meme--text bottom">{memeText.secondText}</p>
        </main>
    )
}



// 1. How would you describe the concept of "state"?
// A way for React to remember saved values from within a component.
// This is similar to declaring variables from within a component,
// with a few added bonuses (which we'll get to later)


// 2. When would you want to use props instead of state?
// Anytime you want to pass data into a component so that
// component can determine what will get displayed on the
// screen.


// 3. When would you want to use state instead of props?
// Anytime you want a component to maintain some values from
// within the component. (And "remember" those values even
// when React re-renders the component).


// 4. What does "immutable" mean? Are props immutable? Is state immutable?
// Unchanging. Props are immutable. State is mutable.


// --------------------------------- important -----------------------------------------------------
// const [counter, setCounter] = React.useState(0)     
// counter howa l var initialinah b 0      w setCounter ila bghina nbdlo 3lih 


/*
    
/**
useEffect takes a function as its parameter. If that function
returns something, it needs to be a cleanup function. Otherwise,
it should return nothing. If we make it an async function, it
automatically retuns a promise instead of a function or nothing.
Therefore, if you want to use async operations inside of useEffect,
you need to define the function separately inside of the callback
function, as seen below:
*/
// React.useEffect(() => {
//     async function getMemes() {
//         const res = await fetch("https://api.imgflip.com/get_memes")
//         const data = await res.json()
//         setAllMemes(data.data.memes)
//     }
//     getMeme()
// }, [])  
// 