import React from 'react'
import "./Home.css"


function Home() {    
    return (
    <section id="home" >         
        <div className='home-background line1'></div>
        <div className='home-background line2'></div>
        <div className='home-background-line3'></div> 
        <div className='home-container'>
            <div className='home-text-wrap'>
                <h1 className='home-text-header'>Добро пожаловать</h1>
                <div className='home-text-fill'>Меня зовут Евгений. Я Web developer.</div>
            </div>
            <div className='home-interaction-boxes' >
                <div className='home-interaction-box' ></div>
                <div className='home-interaction-box'></div>
                <div className='home-interaction-box'></div>
                <div className='home-interaction-box'></div>
                <div className='home-interaction-box'></div>
                <div className='home-interaction-box' ></div>
                <div className='home-interaction-box' ></div>
                <div className='home-interaction-box' ></div>
                <div className='home-interaction-box' ></div>                       
                <div className='home-interaction-marker'></div>
            </div>            
        </div>
    </section>
    )
}

export default Home
