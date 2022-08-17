import React from "react"
import splash from "./splash.js"

var randomIndex = Math.floor(Math.random() * 7);

export default function Home(){
    return (
        <home>
            <h1 className="home-title">Welcome to T_Devil101's website! This is a page for my multiplayer web projects. {splash.mainText[randomIndex]}</h1>
            
            <div className="home-box">
                <h1>What is this site and why?</h1>
                <p>This was created as a landing page / hub, where you can play, view or read what I am working on. I mostly want to publish my web games here because I can't keep funding for a virtual private server every month that may or may not get any traffic. Thanks GitHub Pages!</p>
            </div>
            
            <div className="home-box">
                <h1>What do you mainly work on?</h1>
                <p>I experiment with Unity 3D. I mainly work on Multiplayer based games, but I have also tried my hand in other smaller projects. If I'm working on something large, I will be posting updates about it on my social media.</p>
            </div>
        </home>
    )
}
